<template>
  <div>
    <div>
      <v-card flat>
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Registration successful!</span>
          <v-icon dark>mdi-checkbox-marked-circle</v-icon>
        </v-snackbar>
        <v-form ref="form" @submit.prevent="submit">
          <v-container fluid>
            <v-row>
              <!-- 名前 -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="name"
                  :rules="rules.name"
                  color="purple darken-2"
                  :label="displayLabel.name"
                  required
                ></v-text-field>
              </v-col>
              <!-- フリガナ -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="kanaName"
                  :rules="rules.name"
                  color="blue darken-2"
                  :label="displayLabel.kanaName"
                  required
                ></v-text-field>
              </v-col>
              <!-- 電話番号 -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="phoneNumber"
                  :rules="rules.phoneNumber"
                  :label="displayLabel.phoneNumber"
                  required
                ></v-text-field>
              </v-col>
              <!-- メール -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :label="displayLabel.email"
                  required
                ></v-text-field>
              </v-col>
              <!-- 郵便番号 -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="zipcode"
                  :label="displayLabel.zipcode"
                  required
                ></v-text-field>
                <div class="my-2">
                  <v-btn color="warning" dark @click="fetchAddress"
                    >zipCodeSearch</v-btn
                  >
                </div>
              </v-col>
              <!-- 都道府県 -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="prefecture"
                  :label="displayLabel.prefecture"
                  required
                ></v-text-field>
              </v-col>
              <!-- 住所 -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="address"
                  :label="displayLabel.address"
                  required
                ></v-text-field>
              </v-col>
              <!-- 長めのテキスト -->
              <v-col cols="12">
                <v-textarea v-model="form.bio" color="teal">
                  <template v-slot:label>
                    <div>Bio <small>(optional)</small></div>
                  </template>
                </v-textarea>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="prefecture"
                  :items="prefectures.map(prefecture => prefecture.displayText)"
                  :rules="rules.animal"
                  color="pink"
                  label="お住まいの都県をお選びください"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="form.age"
                  :rules="rules.age"
                  color="orange"
                  label="Age"
                  hint="Be honest"
                  min="1"
                  max="100"
                  thumb-label
                ></v-slider>
              </v-col>
              <v-col cols="12">
                <v-checkbox v-model="form.terms" color="green">
                  <template v-slot:label>
                    <div @click.stop="">
                      Do you accept the
                      <a href="javascript:;" @click.stop="terms = true"
                        >terms</a
                      >
                      and
                      <a href="javascript:;" @click.stop="conditions = true"
                        >conditions?</a
                      >
                    </div>
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <!-- <v-btn text @click="resetForm">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!formIsValid" text color="primary" type="submit"
              >Register</v-btn
            > -->
          </v-card-actions>
        </v-form>
        <v-dialog v-model="terms" width="70%">
          <v-card>
            <v-card-title class="title">Terms</v-card-title>
            <v-card-text v-for="n in 5" :key="n">
              {{ content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="purple" @click="terms = false">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="conditions" width="70%">
          <v-card>
            <v-card-title class="title">Conditions</v-card-title>
            <v-card-text v-for="n in 5" :key="n">
              {{ content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="purple" @click="conditions = false">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </div>
    <div>
      <v-bottom-sheet v-model="sheet" persistent>
        <template v-slot:activator="{ on }">
          <v-btn color="green" dark v-on="on">
            Open Persistent
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" flat color="error" @click="sheet = !sheet"
            >close</v-btn
          >
          <div class="py-3">
            This is a bottom sheet using the persistent prop
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
import { AsYouType } from "libphonenumber-js";
import axiosJsonpAdapter from "axios-jsonp";
import axios from "axios";

const ZIPCODE_API_URL = "http://zipcloud.ibsnet.co.jp/api/search";

export default {
  name: "mainForm",
  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      bio: "",
      favoriteAnimal: "",
      age: null,
      terms: false
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [val => val < 10 || `I don't believe you!`],
        animal: [val => (val || "").length > 0 || "入力必須です"],
        name: [val => (val || "").length > 0 || "入力必須です"],
        phoneNumber: [
          val => (val || "").length > 0 || "入力必須です",
          val => (val || "").length === 13 || "-を入れて13桁です",
          val => {
            const formattedNumber = new AsYouType("JP").input(val);
            const res = val === formattedNumber;
            return res || "電話番号を正しく入力してください";
          }
        ]
      },
      animals: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      snackbar: false,
      terms: false,
      defaultForm,

      //-------------
      sheet: false,
      name: "山田太郎",
      kanaName: "ヤマダタロウ",
      zipcode: "150-0022",
      prefecture: "",
      address: "",
      phoneNumber: "090-1234-5678",
      email: "info@famm.us",
      brithday: "19901212",
      youngestChildAge: "",
      extraComment: "「Famm」からお試し申し込みです",
      whichAdForm: "",
      ReferrerLink: 99,
      isEnrolled: 1,
      availableTimeToContact: 11,
      reason: 1,
      request: 5
    };
  },
  methods: {
    async fetchAddress() {
      // 郵便番号のバリデーションチェック
      const reg = /^\d{3}-\d{4}$/;
      if (!reg.test(this.zipcode)) return;
      const rowZipcode = this.zipcode.split("-").join("");
      console.log(rowZipcode);

      // 住所apiを叩く
      const res = await axios.get(ZIPCODE_API_URL, {
        adapter: axiosJsonpAdapter,
        params: {
          zipcode: rowZipcode
        }
      });

      // 存在しない郵便番号でapiを叩くと200以外のステータスが返ってくる
      if (res.status !== 200) return;
      console.log(res);
      const result = res.data.results[0];

      // 返却されたデータを挿入する
      this.prefecture = result.address1;
      this.address = result.address2 + result.address3;
      console.log(res, this.prefecture, this.address);
    }
  },
  computed: {
    emailRules: () => [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "入力されたメールアドレスは有効ではありません"
    ],
    displayLabel: () => ({
      name: "名前",
      kanaName: "フリガナ",
      zipcode: "郵便番号",
      prefecture: "都県",
      address: "住所",
      phoneNumber: "電話",
      email: "E-mail",
      brithday: "生年月日",
      youngestChildAge: "育児状況（末子年齢）",
      extraComment: "その他コメント",
      whichAdForm: "経由広告",
      ReferrerLink: "リンク元",
      isEnrolled: "加入の有無",
      availableTimeToContact: "連絡希望日",
      reason: "応募項目への同意",
      request: "要望"
    }),
    prefectures() {
      return [
        { code: 1, displayText: "東京都" },
        { code: 2, displayText: "埼玉県" },
        { code: 3, displayText: "千葉県" },
        { code: 4, displayText: "茨城県" },
        { code: 5, displayText: "栃木県" },
        { code: 6, displayText: "群馬県" },
        { code: 7, displayText: "長野県" },
        { code: 8, displayText: "新潟県" }
      ];
    },
    youngestChildAgeOptions() {
      return [
        { code: 8, displayText: "0歳児" },
        { code: 9, displayText: "1〜3歳児" },
        { code: 10, displayText: "4歳〜未就学児" },
        { code: 13, displayText: "小学生以上" },
        { code: 15, displayText: "その他" }
      ];
    },
    enrollment() {
      return [
        { code: 1, displayText: "加入している" },
        { code: 1, displayText: "加入していない" }
      ];
    },
    availableTimeToContacts() {
      return [
        { code: 11, displayText: "10-12時" },
        { code: 12, displayText: "12-15時" },
        { code: 13, displayText: "15-17時" },
        { code: 14, displayText: "17-19時" },
        { code: 15, displayText: "19-20時" }
      ];
    },
    emailAccept() {
      return [
        { code: 1, displayText: "許可" },
        { code: 2, displayText: "不可" }
      ];
    },
    reasonOptions() {
      return [
        { code: 1, displayText: "買い物が不便" },
        { code: 2, displayText: "食の安全に関心がある" },
        { code: 3, displayText: "価格が安い" },
        { code: 4, displayText: "共済加入を検討している" },
        { code: 5, displayText: "店舗を利用したい" },
        { code: 6, displayText: "試しに購入してみたい" },
        { code: 8, displayText: "できるだけ安心・安全な食品を買いたい" },
        { code: 9, displayText: "料理・家事を時短したい" },
        { code: 10, displayText: "オーガニック・産直商品に興味がある" }
      ];
    },
    requestOptions() {
      return [
        { code: 5, displayText: "利用したい" },
        { code: 6, displayText: "興味がある" },
        { code: 7, displayText: "少し興味がある" },
        { code: 7, displayText: "まだわからない" }
      ];
    }
  }
};
</script>

<style></style>

# 

## 以下参考に構築
https://qiita.com/rh_taro/items/ca08b930f704275286a4

## dockerでの起動
### dockerコンテナ内部にアクセス
`docker exec -it app sh`
### vueの実行
`/usr/src/app # npm run serve`

事前にポートの設定をしているので、ローカルでは以下にアクセスすればOK
http://localhost:9050/

### 事前設定
#### docker run の際に以下でコンテナとローカルの接続
` $ docker run -v `pwd`:/usr/src/app -p 9050:9050 --name app -it -d vue_app_image `
#### vue.config.js にてポート設定


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



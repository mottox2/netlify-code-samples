# functions/basic

Netlfiy Functionsを扱う基本的なテンプレートです。

netlify-lambdaを通してwebpackとbabelを利用します。

## ダウンロード

次のコマンドでこのディレクトリをダウンロードできます。
（svnはMacにデフォルトでインストールされています。）

```bash
svn export https://github.com/mottox2/netlify-code-samples/trunk/functions/basic
```

もしくはリポジトリごとダウンロードやクローンを行い、利用したい部分だけを使ってください。

## npm-scripts

* build
  * `src/`以下にあるファイルをビルドして`functions/`に出力します。
* serve
  * ファイルの変更がある度にビルドを行います。
  * `localhost:9000`で動作を確認できます。
  * `src/hello.js`に対応するURLは`localhost:9000/hello`です。
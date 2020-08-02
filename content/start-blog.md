---
title: ブログを新しく開設しました
description: 'おーじぇいです。これまではてなブログを利用してきましたが、自分の勉強も兼ねてNuxt.jsで自作したブログに移行しました。nuxt/contentモジュールを使っています。'
eyecatch: 'https://res.cloudinary.com/oj920/image/upload/v1595786485/blog/eyecatch_j1g4gg.jpg'
category: 'お知らせ'
createdAt: '2020-08-01T00:00:00.000Z'
updatedAt: '2020-08-01T00:00:00.000Z'
---

こんにちは、[おーじぇい(@920OJ)](https://twitter.com/920OJ)です。

これまではてなブログを利用してきましたが、自分の勉強も兼ねて Nuxt.js で自作したものに移行しました。`nuxt/content`モジュールを使っています。

## 利用した技術

- Nuxt.js(universal モード)
- nuxt/content
- Tailwind CSS
- GitHub Actions

Twitter や Facebook などの SNS でのシェア時に OGP 画像を出したかったので、universal モードで `nuxt generate` して静的に書き出ししています。もともとは Vercel で SSR する予定でしたが、謎の Internal Server Error が出たのと、コストが高かったのもあり、急遽自前の VPS での公開に切り替えました。

`nuxt/content` は Git ベースの CMS として動作する Nuxt.js のモジュールで、簡単に言えば Gatsby のようにコンテンツを markdown で管理することができるようになります。これまで外部のブログサービスを用いるときは、ログインしたりブログサービス独自のエディタを使ったりする必要があり億劫でしたが、これで好きなエディタで markdown を書いて Git に push するだけで良くなりました。

ビルドとデプロイには GitHub Actions を利用しています。master ブランチに何らかの変更が加えられると、自動でビルドからデプロイまでやってくれる便利なやつです。はじめて利用したので、勉強になりました。。。

## 今後について

今後も逐一更新していきたいと思います。

どうぞよろしくお願いします！

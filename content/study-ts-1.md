---
title: TypeScriptに入門する 1日目
description: '自分が今夏行く予定のインターンで、TypeScriptを使って開発することになりました。これまでTypeScriptは触ったことがなかったので、短期集中的にTypeScriptを学んでいきたいと思います。1日目はTypeScriptの概要を把握します。'
eyecatch: 'https://res.cloudinary.com/oj920/image/upload/v1596465487/blog/study-ts-1_zw9ni0.jpg'
category: 'プログラミング'
createdAt: '2020-08-03T00:00:00.000Z'
updatedAt: '2020-08-03T00:00:00.000Z'
---


## はじめに

自分が今夏行く予定のインターンで、TypeScriptを使って開発することになりました。これまでTypeScriptは触ったことがなかったので、短期集中的にTypeScriptを学んでいきたいと思います。

1日目はTypeScriptの概要を把握します。

### 使用した教材

[超TypeScript入門 完全パック(2020) - もう他の教材は買わなくてOK！](https://www.udemy.com/course/typescript-complete/)

Udemyの講座です。友人がこれを見て学習していたので、この前のセールで買いました。

今日はとりあえず第1セクションをやりました。（約1時間）以下学習内容のメモ。

## TypeScriptとは

- TypeScriptからTypeScriptに変換する時、型検査を行う。TypeScriptのコードは型検査に通るように書く必要がある。
- TypeScriptはJavaScriptの上位集合。JavaScriptで書いたコードはTypeScriptのコードでもある。
- JavaScriptで今後使えるようになる機能をTypeScriptでサポートしているものもある。

TypeScriptを一言で表すと: JavaScriptにコンパイルされる静的型システムがついたJavaScriptの上位集合

## TypeScriptのメリット

### ドキュメントとしての側面

関数に渡す値・返り値の型を指定することで、コメントで書くよりも信頼できるコードになる。わかりやすいコードを書くよりも「読む」ことが容易になる。

ライブラリを使う際、TSに対応しているものは使い方の定義がされている。（←これがインターフェイス？）

例えばaxiosを使う際、`axios.get()`の第1引数はurl(String型)、第2引数はconfig(AxiosRequestConfigオブジェクト)だよと教えてくれる。(なおconfigには`?`がついているのであっても無くても良い)

### Linterとしての側面

Linter: そのコードが正しく書けているかをチェックする

JavaScriptでは実行時にエラーが出るが、TypeScriptではコンパイル時にエラーが出る。大規模なプロジェクトになるほど有効。

エディタによるが、編集時にリアルタイムでエラーを指摘してくれる。（←静的解析が行われている？）これまでのJSのエラーは他のLinter（ESLintなど）を使っていたと思う。

たとえエラーが起きても、JavaScriptのコードとしては正しいので、一応コンパイルは通してjsファイルを吐き出してくれる（TSはJSの上位集合なので）

### ES5へのコンパイラとしての側面

新しいES(ECMAScript)が出てくるが、往々にしてブラウザの対応が間に合わないことがある。新しい書き方でTypeScriptで書くと、コンパイル時にES5の書き方で書き出してくれる（トランスパイラという）

コンパイル時にオプションとして `--target es5` などと指定することで、ESのバージョンを指定することが出来る。

対応表はこちら: https://kangax.github.io/compat-table/es6/

この対応表で赤くなってる部分は「変換できない」部分。

Babelというトランスパイラもある。TSでトランスパイルできて、Babelでできないものもあるので、↑の表で確認してみる。

## 疑問点と自分なりに調べた結果

### Q. ライブラリのドキュメントが出てくる機能、何を定義すると使えるようになるのか？

A. アンビエント宣言(declare)をする「型定義ファイル」を用意する。

https://typescript-jp.gitbook.io/deep-dive/type-system/intro

https://typescript-jp.gitbook.io/deep-dive/type-system/intro/d.ts

例えば動画内で紹介されていた、axiosの型定義ファイルはこれ。

https://github.com/axios/axios/blob/master/index.d.ts

158行目に`declare const Axios: AxiosStatic;`という記述があり、ここでは`AxiosInstance`を継承した`AxiosStatic`インターフェースを`Axios`としてアンビエント宣言をしている……のかな？

---

明日は「型について」のセクションをやっていきたいと思います。
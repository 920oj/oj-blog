---
title: TypeScriptに入門する 2日目 ～型を理解する～
description: '前回に引き続き、TypeScriptに入門していきます。2日目は「TypeScriptの型」について勉強しています。'
eyecatch: 'https://res.cloudinary.com/oj920/image/upload/v1596900363/blog/study-ts-2_jn0gzj.jpg'
category: 'プログラミング'
createdAt: '2020-08-08T00:00:00.000Z'
updatedAt: '2020-08-08T00:00:00.000Z'
---

こんにちは、[おーじぇい(@920OJ)](https://twitter.com/920OJ)です。

前回に引き続き、TypeScriptに入門していきます。今回は型について。以下はあくまでメモ書きなので、もしかしたら間違っている部分あるかもしれないです。あしからず……


## TypeScriptの型

JavaScriptにも「型」は存在する。JSでは`type of`で見分けることが出来る。JavaScriptのコードはJavaScriptエンジン（V8など）で機械語に変換する。TS→JSコンパイル時の型検査と、JS実行時の型検査は別物。

TSは静的型付け、JSは動的型付け。

## boolean型・number型・string型

変数名の後ろに`: 型名`をつけることで、それぞれの型の変数を定義することが出来る。

```typescript
let bool_value: boolean = true;
let int_num: number = 10;
let float_num: number = 3.14;
let negative_num: number = -0.12;
let single_str: string = 'hello! happy world!';
let back_str: string = `message: ${single_str}`:
```

CやJavaなどの言語では、数値に様々な型(intやfloatなど)があったが、TSではnumber型しかない。

## 型注釈と型推論

さっきやった`: 型名` のことを**型注釈**という。これを明示的に指定しなくても、変数に入れた値から型を推測して定義してくれる。これを**型推論**という。

毎回型注釈をするのではなく、型推論できない・思うように型推論できなかった場合にのみ型注釈をしたほうが良い。

## オブジェクトの型

オブジェクトでは、オブジェクトの値1つ1つに型がつく。型注釈することも可能。型注釈する際は、すべての値に型がついていないとダメ。

```typescript
const person: {
  name: string,
  age: number
} = {
  name: 'OJ',
  age: 21
}
```

object型もある。これは一般的なobjectであり、そのオブジェクトにはどんな値があるのかは定義されない。全般的な"オブジェクト"であるということを念頭に置いておく。

```typescript
Object.create() // (method) ObjectConstructor.create(o: object | null): any (+1 overload)
```

Objectクラスのcreate()メソッドでは、第一引数をo(object型)としてとる。このような際にobject型は使用される。

## 配列のArray型

型注釈の後ろに`[]`を書くことで、その配列の中にどの型の値が入るかを定義することができる。指定した一つの型しか入れることしか出来ない(予期しない型を防ぐ)。

```typescript
const gafa: string[] = ['Google', 'Amazon', 'Facebook', 'Apple']
```

複数の型を入れたい場合は、`any`型を使うか、`union`型を使う。

## Tuple型で決まった内容の配列を作る
配列の○番目に必ずstingが来る、みたいなことを定義したいときはTuple型を使う。Array型の中にそれぞれの要素の型注釈を行う。

```typescript
const phone: [string, number, boolean] = ['Google Pixel 4a', 43000, true]
```

この後にpush()メソッドで値を追加してもエラーにはならない。TSは初期値には厳格であり、後から追加した値を参照しようとするとエラーになる（？）

```typescript
const phone: [string, number, boolean] = ['Google Pixel 4a', 43000, true]
phone.push('good camera')
console.log(phone[3]) // Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.(2493)
```

## Enum(列挙型)

特定のまとまったグループのみを受け入れる型。任意の変数に特定の値しか入れたくないときに、先に「入れられる値」(列挙子)を定義しておく。

```typescript
enum Languages {
    JS = 'JavaScript',
    PYTHON = 'Python',
    GO = 'Golang'
}

const blog_project = {
    language: Languages.JS, // Languagesという列挙型になっている
    author: 'OJ'
}
```

これをコンパイルすると、以下のようにオブジェクトが定義されることがわかる。

```javascript
"use strict";
var Languages;
(function (Languages) {
    Languages["JS"] = "JavaScript";
    Languages["PYTHON"] = "Python";
    Languages["GO"] = "Golang";
})(Languages || (Languages = {}));
const blog_project = {
    language: Languages.JS,
    author: 'OJ'
};
```

なお、文字列を明示しないと数値が入る。数値を指定すると、その場所からカウントされる。

```typescript
enum Languages {
    NODE, // 0
    PYTHON = 100, // 100
    GO // 101
}

const blog_project = {
    language: Languages.GO, // 101
    author: 'OJ'
}
```

## any型

何でもいれることが出来る型。型注釈をつけているオブジェクトは途中で値を追加したり、値を書き換えることは出来ないが(型の恩恵を受けるため)、any型なら可能。

```typescript
const person = {
    name: 'OJ',
    age: 20
}

person.favorite = 'onigiri' // Property 'favorite' does not exist on type '{ name: string; age: number; }'

const person2: any = { // any型にする
    name: 'OJ',
    age: 20
}

person2.favorite = 'onigiri' // これは通る
```

例えば、string型で定義されている変数に、any型の内容を代入することが出来てしまう。

```typescript
let str: string = 'hoge'
let anything: any = 920
str = anything // エラーが出ない
```

正しくTSを書きたいのだったら、anyは封印すべし。

## union型
複数の型を受け入れることが出来るもの。

値にnumberが入っている状態でstringだけしか使えないメソッドを使おうとするとエラーが出る。

```typescript
let song_info: number | string;
song_info = 'UNION' // string型も入れられる
console.log(song_info.toLowerCase()) // union

song_info = 3
console.log(song_info.toLowerCase()) // Property 'toLowerCase' does not exist on type 'number'.(2339)
```

## Literal型
特定の値しか許容されない型。`const`を使うとその値は必ずLiteral型になる（型推論される）

```typescript
const user_name: 'oj' = 'oj'
const user_twitter: '@920OJ' = '@920OJ_sub' // Type '"@920OJ_sub"' is not assignable to type '"@920OJ"'.(2322)

const user_age = 21 // const user_age: 21
```

union型とLiteral型を組み合わせることで、enumのような使い方をすることができる。特に値が少ない場合(2つ3つぐらいのとき)には、enumは冗長であるので、この方法で書いたほうが効率が良い。

```typescript
let my_project: {
    name: string
    language: 'JavaScript' | 'Python' | 'Golang' // union型とLiteral型を組み合わせ
} = {
    name: 'マイアラーム',
    language: 'Python'
}

my_project.language = 'Python' // 変更可能
```

## typeエイリアス

型を変数のように使うことが出来る。エイリアス(Ailias)は「別名」の意。(自分で独自の型を作り出すような物なのかな？)

エイリアスの名前は既存のものを選ばないようにする。

```typescript
type languageType = 'JavaScript' | 'Python' | 'Golang' | 'Ruby' | 'PHP'

const my_project: {
    language: languageType
    name: string
} = {
    language: 'JavaScript',
    name: 'マイ目覚まし'
}

my_project.language = 'Python' // 変更できる
my_project.language = 'C++' // Type '"C++"' is not assignable to type 'languageType'.(2322)
```

ちなみにJavaScriptにコンパイルすると全部消える。

```typescript
"use strict";
const my_project = {
    language: 'JavaScript',
    name: 'マイ目覚まし'
};
my_project.language = 'Python';
```

## 関数宣言をする際に関数に型をつける
関数の引数・戻り値両方に型をつける。戻り値の方は型推論が効く。引数の型を指定しないとany型となってしまい、恩恵を受けられないので必ずつける。

```typescript
function add(num1: number, num2: number): number {
    return num1 + num2
}

function returnHoge(num: number) { // function returnHoge(num: number): string
    return 'hoge' + num
}
```

## 何も返さない関数はvoid型を使う

返り値をもたない関数は、void型にする。

```typescript
function sayHello(): void {
    console.log('Hello, Happy World!')
}
```

void型を指定しても、undefined型が返ってくるが、関数の返り値にundefined型を指定することはできない(returnがあると指定できる)。基本的にはundefinedは使わず、voidを使うようにする。

## 関数に型をつけるあれこれ

```typescript
// functionを使う方法
const sayHello1 = function(name: string): string {
    return 'Hello!' + name + '!'
}

// アロー関数を使う方法(関数側に型注釈する)
const sayHello2 = (name: string): string => 'Hello!' + name + '!'

// アロー関数を使う方法(関数側で型推測する)
const sayHello3: (name: string) => string = name => 'Hello' + name + '!'
```

## unknown型
any型よりも少し厳しい型。

```typescript
let unknownInput: unknown // unknown型

unknownInput = 920 // numberも入れられる
unknownInput = false // booleanも入れられる
unknownInput = 'hi' // stringも入れられる

let text: string
text = unknownInput // Type 'unknown' is not assignable to type 'string'.(2322)
// any型なら入れられるがunknown型はダメ

if(typeof unknownInput === 'string') {
    text = unknownInput // これはエラーが出ない(担保されているので)
}
```

any型と異なる点は、unknown型は既に型注釈されている変数に代入できないところ。ただしtypeofで型を比較して一致すれば代入することが出来る。

## never型

決して何も返さない型。Errorをthrowする時や、無限ループさせる処理などで全く値がかえってこない場合に使う。

```typescript
function hogeError(msg: string): never {
    throw new Error(msg)
}

console.log(hogeError('hogehoge Error desu!'))
```

---

長くなりました……型っていっぱいあるんですね。。実際に使っていく中で覚えていこうと思います！
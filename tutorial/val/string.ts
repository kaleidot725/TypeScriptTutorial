// 1. 基本的に"を使用する
// 2. 文字列の中に"が含まれる場合は'を使用する
// 3. 文字列展開する必要があるときは`を使用する

console.log("Hello");
console.log('Hello');
console.log(`Hello`);

console.log('He said "madam, I\'m Adam."');
console.log("He said \"madam, I'm Adam.\"");

console.log(`実際に改行を
してみる`);

const count = 10;
console.log(`現在、${count}名を見ています。`);

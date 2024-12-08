const a = 123;
console.log(a);

const b = -123;
console.log(b);

const c = 20.315;
console.log(c);

const d = 0.1 === .1;
console.log(d);

const e = 5.0 === 5.;
console.log(e);

const f = 0b1010;
console.log(f);

const g = 0o755;
console.log(g);

const h = 0xfff;
console.log(h);

const i = 100_000_000
console.log(i);

const count: number = 123;
console.log(count);

const price = parseInt("百円");
console.log(price);
// @ts-ignore
if (Number.isNaN(price)) {
    console.log("数値化できません。")
}
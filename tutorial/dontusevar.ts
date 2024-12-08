var name = "taro";
console.log(name);

function test() {
    var x = 1;
    var x = 2;
    console.log("---- TEST1 ----")
    console.log(x);
}
test();

function test2() {
    console.log("---- TEST2 ----")
    console.log(greeting);
    var greeting = "Hello World";
}
test2();

function test3() {
    console.log("---- TEST3 ----")
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
test3();
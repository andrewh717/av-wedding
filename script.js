console.log('Hello world.');
foo();
function foo(){
    console.log('Inside foo');
}
function bar(x){
    for (let index = 0; index < x; index++) {
        console.log(index);
    }
}
bar(2);
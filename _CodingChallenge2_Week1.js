fibonacci=function(a){
    if(a===0){
        return 0
    }else if(a===1){
        return 1;
    }else{
        return fibonacci(a-1)+fibonacci(a-2);
    }
}

/*console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));*/




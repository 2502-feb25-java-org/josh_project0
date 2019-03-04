fizzBuzz=function(a){
    if(a%3===0 && a%5===0){
        return "Fizz Buzz";
    }else if(a%3===0){
        return "Fizz";
    }else if(a%5===0){
        return "Buzz";
    }else{
        return String(a);
    }
}

console.log(fizzBuzz(13))
let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let male=document.getElementById("male");
let female=document.getElementById("female");
let other=document.getElementById("other");
let age=document.getElementById("age");
let phone=document.getElementById("phone");
let email=document.getElementById("email");
let submit=document.getElementById("submit");

firstName.onchange=function(){
    localStorage.setItem('firstName',firstName.value);
}
lastName.onchange=function(){
    localStorage.setItem('lastName',lastName.value);
}
male.onchange=function(){
    localStorage.setItem('male',male.checked);
    localStorage.setItem('female',false);
    localStorage.setItem('other',false);
}
female.onchange=function(){
    localStorage.setItem('female',female.checked);
    localStorage.setItem('other',false);
    localStorage.setItem('male',false);
}
other.onchange=function(){
    localStorage.setItem('other',other.checked);
    localStorage.setItem('female',false);
    localStorage.setItem('male',false);
}
age.onchange=function(){
    localStorage.setItem('age',age.value);
}
email.onchange=function(){
    localStorage.setItem('email',email.value);
}
phone.onchange=function(){
    localStorage.setItem('phone',phone.value);
}

function checkNames() {
    if (lastName.value === firstName.value) {
        lastName.setAttribute("class", "form-control invalid");
        lastName.appendChild = "<span style='color:red'>First name and last name can't be the same</span>";

        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
//    console.log(localStorage.getItem('male') + " " + localStorage.getItem('female') + " " + localStorage.getItem('other'));
    firstName.value=localStorage.getItem('firstName');
    lastName.value=localStorage.getItem('lastName');
    if(localStorage.getItem('male')==='true'){
        male.checked=true;
    }else if(localStorage.getItem('female')==='true'){
        female.checked=true;
    }else if(localStorage.getItem('other')==='true'){
        other.checked=true;
    }
    age.value=localStorage.getItem('age');
    phone.value=localStorage.getItem('phone');
    email.value=localStorage.getItem('email');
});
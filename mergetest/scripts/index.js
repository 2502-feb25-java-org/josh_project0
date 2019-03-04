//alert("hello world");

/*function returnValue(){
    return 'hello world';
}

var functionItself=returnValue();
alert(functionItself);*/

/*window.addEventListener('onKeyDown',()=>
{
    document.body.style.backgroundColor='Azure';
    let header=document.getElementsByTagName('header1');
    header.textConect="DOM API changed the header";
});*/

/*window.addEventListener('DOMContentLoaded',()=>
{
    let table=Document.getElementById('the-table');
    let tblAttr=table.attributes;
    for (let i = 0; i < tblAttr.length; i++) {
        if (tblAttr[i].nodeName.toLowerCase()==="border"){
            table.border="1";
            table.border="solid";
        }
        
    }
})*/

window.addEventListener('DOMContentLoaded',()=>{
    let header=document.getElementById("header-text");
    let colA=document.getElementById('col-a');

    let clickCounter=0

    header.addEventListener('click',()=>{
        clickCounter++;
    })
})
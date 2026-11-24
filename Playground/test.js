let elements = [...document.querySelectorAll("*")];
let viewportSize = document.documentElement.clientWidth;
let result = elements.map((element)=>{
    return{
        element : element,
        right : element.getBoundingClientRect().right,
        width: element.getBoundingClientRect().width
    }
}).filter(element=>{
    return (element.right>document.documentElement.clientWidth);
})
console.log(document.documentElement.clientWidth);
result.forEach(element=>{
    console.log(element);
})

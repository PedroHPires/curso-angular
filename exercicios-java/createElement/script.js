const div = document.querySelector("div")
const elementUl = document.createElement("ul")
div.appendChild(elementUl);
console.log(elementUl);

[1, 2 ,3].forEach(element => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element
    elementUl.appendChild(elementLi);
});
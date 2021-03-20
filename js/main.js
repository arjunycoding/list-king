function requestItem(){
    // add input
    let input = document.createElement("input");
    let content = document.getElementById("page");
    input.setAttribute("type", "text");
    input.setAttribute("id", "item");
    content.appendChild(input);

    // add add item button
    let button = document.createElement("button");
    button.setAttribute("id", "addItem");
    button.setAttribute("onclick", "displayItem()");
    button.setAttribute("class", "addItemButton");
    content.appendChild(button);
    document.getElementById("addItem").innerHTML = "Add Item";
}

function displayItem(){
    // add an list item
    let li = document.createElement("li");
    let list = document.getElementById("list");
    li.setAttribute("class", "items compleat");
    li.setAttribute("id", "item")
    li.setAttribute("onclick", "changeClass()");
    list.appendChild(li);

    let inputValue = document.getElementById("item").value;
    li.innerHTML += `${inputValue}`;
    console.log(inputValue);
}

function changeClass(){
    let item = document.getElementById("item");
    item.remove();
}
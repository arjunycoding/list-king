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
    content.appendChild(button);
    document.getElementById("addItem").innerHTML = "Add Item";
}

function displayItem(){
    // add an list item
    let li = document.createElement("li");
    let list = document.getElementById("list");
    li.setAttribute("id", "h1");
    list.appendChild(li);

    let inputValue = document.getElementById("item").value;
    li.innerHTML += `${inputValue}`;
    console.log(inputValue);
}
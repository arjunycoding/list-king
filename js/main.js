let item = $("#itemDescription");
let add = $("#addBtn");
let newItemButton = $("#newItemButton");
let validate = $(".validate");
validate.hide();
item.hide();
add.hide();
function requestItem(){
    item.show();
    add.show();
    newItemButton.hide();
}
function addItem(){
    let list = $("#list");
    let newText = item.val();
    if(newText == ""){
        validate.show();
        validate.text("please enter something");
        return;
    } else{
        validate.hide();
    }
    $(list).append("<li class = 'items'>" + newText +"<i class='fa fa-trash'></i> </li>");
    item.hide();
    add.hide();
    newItemButton.show();
}
newItemButton.on('click', requestItem);
add.on('click', addItem);
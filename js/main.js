let item = $("#itemDescription");
let add = $("#addBtn");
let newItemButton = $("#newItemButton");
let validate = $(".validate");
let li = $("ul");
let ad = $("#ad");
validate.hide();
item.hide();
add.hide();
ad.animate({marginLeft: "300px"}, 1000)
ad.fadeOut(1000);
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
    $(list).append("<li class = 'items'>" + newText + "</li>");
    item.hide();
    add.hide();
    newItemButton.show();
    item.val("");
}
function deleteItem(el){
    $(this).animate({
        opacity: 0.0,
        paddingLeft: '+=80'
      }, 500, function() {
        $(this).remove();
      });
}
li.on('click','li', function() {
        if($(this).hasClass("compleat") === true){
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function() {
            $(this).remove();
        })
        } else {
            $(this).removeClass("items");
            $(this).addClass("compleat");
            $("<span> <i class = 'fa fa-check'></i></span>").appendTo(this);
        }
})
newItemButton.on('click', requestItem);
add.on('click', addItem);
let item = $("#itemDescription");
let add = $("#addBtn");
let newItemButton = $("#newItemButton");
let validate = $(".validate");
let li = $("ul");
let ad = $("#ad");
let adClose = $("#adClose");
let logout = $("#logout");
validate.hide();
item.hide();
add.hide();
ad.animate({marginLeft: "300px"}, 1000)
function closeAd(){
    ad.fadeOut(1000);
    window.open
}
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
        validate.html("<i class='fa fa-exclamation-triangle'></i> please enter something");
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
            $("<span> <i class = 'fa fa-trash'></i></span>").appendTo(this);
        }
})
function logOut(){
    window.location.assign("https://arjunycoding.github.io/list-king/login.html")
}
newItemButton.on('click', requestItem);
logout.on('click', logOut)
add.on('click', addItem);
adClose.on('click', closeAd)
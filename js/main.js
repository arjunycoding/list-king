let item = $("#itemDescription");
let add = $("#addBtn");
let newItemButton = $("#newItemButton");
let validate = $(".validate");
let li = $("ul");
let logout = $("#logout");
let request = $(".alert");
let alertY = $("#yes");
let alertN = $("#no");
request.hide();
validate.hide();
item.hide();
add.hide();
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
            $("<span class = 'notifaction'>Compleated! Click to delete</span>").appendTo(this);
        }
})
function showRequest(){
        request.fadeIn();
        $("main").css(
            {'opacity' : '0.1'}
        )
}
function hideRequest(){
    $("main").css(
        {'opacity' : '1'}
    )
    request.fadeOut();
}
function logOut(){
    window.location.assign("https://arjunycoding.github.io/list-king/login.html")
}
newItemButton.on('click', requestItem);
logout.on('click', showRequest);
add.on('click', addItem);
alertN.on('click', hideRequest);
alertY.on('click', logOut);
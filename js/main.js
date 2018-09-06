/*var name;
$('#login').click(function () {
    const name=$("#username").val();
    alert(name)


});
*/
function store(){
    var inputUsername= document.getElementById("username");
    localStorage.setItem("username", inputUsername.value);
    if ($("#username").val()!=='') {
        window.location.href = "main.html"
    }
    else $("<p class='alert'>enter your username</p>").appendTo("#mainCard")
}

$("#sendMessage").click(function () {


    var message = $("#message").val();
    if(message!=='')
    {
        $("<div class='messageCard'> <h4>" + localStorage.getItem('username') + "</h4>\n" +
        "<p>"+ message + "</p>\n" +
        "<img src=\"img/avatar-1300582__340.png\" class=\"avatar\" alt=\"\">" +
        "</div>").appendTo("#main");
        localStorage.setItem('message', message);
        $('#message').val('');
    }



});

$('#showMessage').click(function () {
    alert(localStorage.getItem('message'));

})
$('#logout').click(function () {
    localStorage.clear()

});




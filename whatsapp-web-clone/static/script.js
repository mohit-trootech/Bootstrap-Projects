$(document).ready(() => {
    // $("").on('mouseover', (e) => {
    //     console.log(e.target.addClass('active'))
    // })
    const chats = document.querySelectorAll(".chat-navigation")
    $(".chat-navigation").on('mouseenter mouseleave', (
        function () {
            $(this).toggleClass("list-group-item-primary");
        }
    ));
    $(".chat-navigation").on('click', (function () {
        $(this).addClass("list-group-item-secondary");
        chats.forEach((e) => {
            if (e != this) {
                e.classList.remove("list-group-item-secondary")
            }
        })
    }))
})
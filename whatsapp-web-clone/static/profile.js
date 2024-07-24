$(document).ready(() => {
    // Profile Section Update on Click
    $(".chat-navigation").on('click', function () {
        const userName = $(this).find('.chat-username')[0].innerHTML;
        const lastMessage = $(this).find('.chat-last-message')[0].innerText;
        const profileImageSrc = $(this).find('.profile-img-chats')[0].src;
        $('.usernameOffcanvas').html(userName)
        $('.lastMessageOffcanvas').html(lastMessage)
        $('.imageOffcanvas').attr('src', profileImageSrc)
    })
})

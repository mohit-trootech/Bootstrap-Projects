document.addEventListener("DOMContentLoaded", () => {
    const formPlayers = document.getElementById("formPlayerNames")
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
    formPlayers.addEventListener("submit", (e) => {
        if (e.target.classList.contains("was-validated")) {
            localStorage.playerone = e.target[0].value
            localStorage.playertwo = e.target[1].value
        }
    })
})
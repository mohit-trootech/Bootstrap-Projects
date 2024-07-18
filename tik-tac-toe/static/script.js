window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    const checkbox = document.getElementById("theme");
    loadTheme()
    checkbox.addEventListener("change", (e) => {
        const currentTheme = e.target.checked
        updateTheme(currentTheme)
        updateThemeLocalStorage(currentTheme)
    })
    function loadTheme() {
        window.localStorage.getItem('dark') ?
            checkbox.checked = JSON.parse(window.localStorage.dark) == true ? false : true : updateThemeLocalStorage(checkbox.checked)
        updateTheme(!JSON.parse(window.localStorage.dark))
    }
    function updateTheme(currentTheme) {
        body.setAttribute('data-bs-theme', currentTheme ? "light" : "dark")
    }
    function updateThemeLocalStorage(currentTheme) {
        window.localStorage.dark = !currentTheme
    }

})

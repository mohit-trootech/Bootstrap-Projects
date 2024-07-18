let elem = document.querySelectorAll("[data-bs-theme]");
function theme_toggle() {
    elem.forEach(e => {
        e.setAttribute('data-bs-theme', e.getAttribute('data-bs-theme') == 'light' ? "dark" : "light")
    })
}
const api = 'e6ed093031474d538f6101732240905'
let addressInp = document.getElementById("addressInput");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Browser Not Support Geolocation");
    }
}
function showPosition(position) {
    const lat = position.coords.latitude
    const long = position.coords.longitude
    getApiLocation(lat, long)

}
async function getApiLocation(lat, long) {
    let address = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${lat}, ${long}&aqi=yes`)
        .then((response) => { return response.json() })
    addressInp.value = `${address.location.name} ${address.location.region} ${address.location.country}`

}

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})
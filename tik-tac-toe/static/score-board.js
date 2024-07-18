// Score Board Js File to Show Score Board Table
document.addEventListener("DOMContentLoaded", () => {
    /*function to load results and add results in table */
    let results = localStorage.results;
    if (results == undefined) {
        alert("Please Start Playing First!");
    } else {
        results = JSON.parse(results);
        for (let i = 0; i < Object.keys(results).length; i++) {
            $('table').find('tbody').append(`<tr>
                        <th scope="row">${i + 1}</th>
                        <td>${results[i + 1].playerone}</td >
                        <td>${results[i + 1].playertwo}</td>
                        <td>${results[i + 1].result}</td>
                    </tr > `);
        }
    }
})
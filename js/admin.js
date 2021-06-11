// OPTION SELECT
let adminSelect = document.querySelector("#adminSelect")
let iframeSelect = document.querySelector("#iframe")
let filmNameSelect = document.querySelector("#filmName")
let form = document.querySelector("#addInfoForm")

function optionAdminSelect(types){

    for( let i in types){
        let option = document.createElement("option")
        option.innerHTML = types[i].genre
        option.value = types[i].id 
    
        adminSelect.appendChild(option)
    }
}
optionAdminSelect(genres);

form.onsubmit = function (event){
    event.preventDefault();

    let obj = {
        name: filmNameSelect.value,
        type: adminSelect.value - 0,
        link: iframeSelect.value
    }

    data.push(obj);
    window.localStorage.setItem("database" , JSON.stringify(data))

    filmNameSelect.value = null;
    adminSelect.value = 1;
    iframeSelect.value = null
}

console.log(data);

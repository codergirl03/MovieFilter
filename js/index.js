// OPTION SELECT
let movieSelect = document.querySelector("#movieSelect")

function optionSelect(types){

    for( let i in types){
        let option = document.createElement("option")
        option.innerHTML = types[i].genre
        option.value = types[i].id 
    
        movieSelect.appendChild(option)
    }
}
optionSelect(genres);

//  FILMS RENDERER
let ul = document.querySelector(".film-list")

function filmsRenderer(database , arrayGenre){
    
    ul.innerHTML = null

    for(let i in database){

        let li = document.createElement("li")
        li.className = "film-item"
        let div1 = document.createElement("div")
        div1.className = "iframe"
        let div2 = document.createElement("div")
        div2.className = "infos"
        let h3 = document.createElement("h3")
        let p = document.createElement("p")

        div1.innerHTML = database[i].link
        h3.textContent = database[i].name
        let found = arrayGenre.find( el => el.id === database[i].type )
        p.textContent = found.genre

        div2.appendChild(h3)
        div2.appendChild(p)
        li.appendChild(div1)
        li.appendChild(div2)

        ul.appendChild(li)
    }

}
filmsRenderer(data , genres);


function filterFilms(arrayData , genreKey){
    let trash = []
    for(let film of arrayData){
        if(film.type == genreKey){
            trash.push(film);
        }else if( genreKey == 0){
            return arrayData
        }
    }
    return trash
}



let form = document.querySelector("form")

form.addEventListener( "submit" , (e) => {
    e.preventDefault();
    
    let filteredFilms = filterFilms(data , movieSelect.value)
    filmsRenderer(filteredFilms , genres)

});
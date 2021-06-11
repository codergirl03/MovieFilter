let genres = [
    { id: 1 , genre: "programming" },
    { id: 2 , genre: "comedy" },
    { id: 3 , genre: "horror" },
    { id: 4 , genre: "drama"  },
]



let data = window.localStorage.getItem("database")
if(!data) data = [
    {
        name:"Stiv Jobs",
        type: 1,
        link:'<iframe width="350" height="315" src="https://www.youtube.com/embed/M7CdqQEBDxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
]
else data = JSON.parse(data)

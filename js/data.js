let genres = [
    { id: 1 , genre: "horror" },
    { id: 2 , genre: "drama" },
    { id: 3 , genre: "comedy" },
    { id: 4 , genre: "sky-fi" },
]



let data = window.localStorage.getItem("database")
if(!data) data = []
else data = JSON.parse(data)
let genres = [
    { id: 1 , genre: "programming" },
    { id: 2 , genre: "comedy" },
    { id: 3 , genre: "horror" },
    { id: 4 , genre: "drama"  },
]



let data = window.localStorage.getItem("database")
if(!data) data = []
else data = JSON.parse(data)
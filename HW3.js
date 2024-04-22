function Movie(title, rating, year) {
    this.title = title;
    this.rating = rating;
    this.year = year;
}

let movieArray = [];

function addMovie() {
    const title = document.getElementById("movieName").value;
    const rating = parseInt(document.getElementById("movieRating").value);
    const year = document.getElementById("releaseYear").value;

    
    if (title === "" || isNaN(rating) || rating < 1 || rating > 5 || year === "") {
        alert("Please fill in all fields correctly.");
        return;
    }

    
    movieArray.push({
        title: document.getElementById("movieName").value,
        rating: document.getElementById("movieRating").value,
        year: document.getElementById("releaseYear").value,
    });
}

function showMovies() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; 

   
    movieArray.forEach(movie => {
        const listItem = document.createElement("li");
        listItem.textContent = movie.title + " (" + movie.year + ") - Rating: " + movie.rating;
        movieList.appendChild(listItem);
    });
}

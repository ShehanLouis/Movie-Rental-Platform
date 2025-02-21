/* script.js */
const movies = [
    { title: "Inception", rating: 4.8 },
    { title: "Interstellar", rating: 4.6 },
    { title: "The Dark Knight", rating: 4.9 }
];
function sortMovies() {
    movies.sort((a, b) => b.rating - a.rating);
    displayMovies();
}
function displayMovies() {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
    movies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} - Rating: ${movie.rating}`;
        movieList.appendChild(li);
    });
}
function submitReview() {
    const reviewInput = document.getElementById("review-input").value;
    if (reviewInput) {
        const reviewList = document.getElementById("review-list");
        const li = document.createElement("li");
        li.textContent = reviewInput;
        reviewList.appendChild(li);
        document.getElementById("review-input").value = "";
    }
}
function login() {
    const username = document.getElementById("username").value;
    alert(`Welcome, ${username}!`);
}

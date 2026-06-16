const searchBtn = document.getElementById("searchBtn");
const movieDetails = document.getElementById("movieDetails");

searchBtn.addEventListener("click", async () => {

    const movieName = document.getElementById("movieName").value;

    const apiKey = "YOUR_API_KEY";

    const url =
      `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    const response = await fetch(url);

    const data = await response.json();

    movieDetails.innerHTML = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}">
        <p><strong>Year:</strong> ${data.Year}</p>
        <p>${data.Plot}</p>
    `;
});

/*
Changes:

Call the OMDB API
Display movie title
Display poster
Display year and plot

*/

movieDetails.innerHTML = `
<h2>${data.Title}</h2>
<img src="${data.Poster}">
<p>${data.Year}</p>
<p>${data.Plot}</p>
`;
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    axios.get('http://www.omdbapi.com/?s=' + searchText + '&tt3896198&apikey=195cf56c')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
            <div class="col-md-3">
              <div class="well text-center">
              <h4>${movie.Title}</h4>
                <img src="${movie.Poster}">
                
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary"</a>
              </div>
            </div>
          `;
            });

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

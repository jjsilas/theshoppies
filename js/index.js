$(document).ready(() => {
    $('#searchBar').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getFilms(searchText);
        e.preventDefault();
    });
});

function getFilms(searchText) {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=195cf56c')
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);

        });
}

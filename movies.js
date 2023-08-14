let moviesList = [];
let movieId = 0;

$('.movies-form').on('submit', function (event) {
  event.preventDefault();
  let movieChars = $('#movie').val();
  let movie = $('#movie').val();
  let rating = $('#rating').val();

  let movieData = { movie, rating, movieId };

  moviesList.push(movieData);
  movieId++;

  $('tbody').empty();
  for (let title of moviesList) {
    let movieRow = $('<tr>');

    let tdMovie = $('<td>').text(title.movie);
    let tdRating = $('<td>').text(title.rating);
    let tdButton = $('<button>')
      .text('x')
      .addClass('button')
      .attr('data-curr-id', title.movieId);

    movieRow.append(tdMovie, tdRating, tdButton);

    $('tbody').append(movieRow);
  }
  $('.movies-form').trigger('reset');
  console.log(moviesList);

  // I could not get this to work, I could remove it from DOM
  // but not from list and get the movies to populate on DOM correctly
  $('tbody').on('click', '.button', function (event) {
    let indexToRemoveAt = moviesList.findIndex(
      (movie) => movie.movieId === +$(event.target).attr('data-curr-id')
    );
    moviesList.splice(indexToRemoveAt, 1);

    $(event.target).closest('tr').remove();
    // let removeId = event.target.getAttribute('data-curr-id');
    // moviesList.splice(removeId, 1);
  });
});

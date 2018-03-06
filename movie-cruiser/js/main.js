export function GetMovie(obj1)
{
	$('#showId').html("");
	let searchMovie = $('#searchId').val();
	fetch(`https://api.themoviedb.org/3/search/movie?api_key=76291c13d401cd2a67373f686bd00293&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
	 .then((res) => { res.json()
	 	.then((data) => {
			$('#showId').html("");
			for(let i=0;i<data.results.length;i+=1){
			   obj1 = {};
			   obj1.title = data.results[i].title;
			   obj1.overview = data.results[i].overview;
			   obj1.vote_average = data.results[i].vote_average;
			   obj1.poster_path  = "https://image.tmdb.org/t/p/w300" + data.results[i].poster_path;
			   obj1.release_date = data.results[i].release_date;
			   map[i]=obj1;
					if(i%3 == 0){
						$("#showId").append(`<div class="row">`);
					}
					$("#showId").append(`<div class="col-sm-4">
						<div class="card">
						    <div class="card-image waves-effect waves-block waves-light">
						      <img class="activator" src="${obj1.poster_path}">
						    </div>
						    <div class="card-content">
						      <span class="card-title activator grey-text text-darken-4">${obj1.title}<i class="material-icons right">more_vert</i></span>
						      <a class="btn-floating halfway-fab modal-trigger waves-effect waves-light red" href="#modalB" id="${data.results[i].title}"><i class="material-icons">add</i></a>
						      <p><a href="#">${obj1.release_date}</a></p>
						    </div>
						    <div class="card-reveal">
						      <span class="card-title grey-text text-darken-4">${obj1.title}<i class="material-icons right">close</i></span>
						      <hr><p>${obj1.overview}</p><hr>
						      <p><h5>Rating</h5> ${obj1.vote_average}</p>
						    </div>
						</div>
					</div>
					`);
					
					 let vari = document.getElementById(data.results[i].title);
					 vari.addEventListener('click',function(){
					 	emit(i);
	 				 });
					if(i%3 == 2){
						$("#showId").append(`</div>`); 
					}
			}
	 	})
	 })
}
export function emit(ind){
	MovieN = map[ind];
}

export function getBack()
{
	$('#showId').append('');
}
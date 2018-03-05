var collection = [];
var obj = {};
var mp = {};
var MovieN;
function GetMovie()
{
	document.getElementById("showId").innerHTML = "";
	let searchMovie = document.getElementById("searchId").value;
	fetch(`https://api.themoviedb.org/3/search/movie?api_key=76291c13d401cd2a67373f686bd00293&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
	 .then((res) => { res.json()
	 	.then((data) => {
	 		var par=0;
			document.getElementById("showId").innerHTML = '';
			for(let i=0;i<data.results.length;i+=1){
			   obj = {};
			   obj.title = data.results[i].title;
			   obj.overview = data.results[i].overview;
			   obj.vote_average = data.results[i].vote_average;
			   obj.poster_path  = "https://image.tmdb.org/t/p/w300" + data.results[i].poster_path;
			   obj.release_date = data.results[i].release_date;
			   		par=i;
			   		mp[i]=obj;
					if(i%3 == 0){
						document.getElementById("showId").innerHTML += `<div class="row">`;
					}
					var show = 
					`<div class="col-sm-4">
						<div class="card">
						    <div class="card-image waves-effect waves-block waves-light">
						      <img class="activator" src="${obj.poster_path}">
						    </div>
						    <div class="card-content">
						      <span class="card-title activator grey-text text-darken-4">${obj.title}<i class="material-icons right">more_vert</i></span>
						      <a class="btn-floating halfway-fab modal-trigger waves-effect waves-light red" href="#modalB" onclick="emit(${par})"><i class="material-icons">add</i></a>
						      <p><a href="#">${obj.release_date}</a></p>
						    </div>
						    <div class="card-reveal">
						      <span class="card-title grey-text text-darken-4">${obj.title}<i class="material-icons right">close</i></span>
						      <hr><p>${obj.overview}</p><hr>
						      <p><h5>Rating</h5> ${obj.vote_average}</p>
						    </div>
						</div>
					</div>
					`;
					document.getElementById("showId").innerHTML += show;
					if(i%3 == 2){
						document.getElementById("showId").innerHTML += `</div>`; 
					}
				}
				document.getElementById("searchId").innerHTML = "";
	 	})
	 })
}
function emit(some){
	var ten = mp[some];
	MovieN=ten;
}
function getBack()
{
	document.getElementById('showId').innerHTML = '';
}
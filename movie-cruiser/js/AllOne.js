var collection = [];
var obj = {};
var mp = {};
var MovieN;
function GetMovie()
{
	$('#showId').html("");
	let searchMovie = $('#searchId').val();
	fetch(`https://api.themoviedb.org/3/search/movie?api_key=76291c13d401cd2a67373f686bd00293&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
	 .then((res) => { res.json()
	 	.then((data) => {
	 		var par=0;
			$('#showId').html("");
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
						$("#showId").append(`<div class="row">`);
					}
					$("#showId").append(`<div class="col-sm-4">
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
					`);
					if(i%3 == 2){
						$("#showId").append(`</div>`); 
					}
			}
	 	})
	 })
}
function emit(some){
	var ten = mp[some];
	MovieN=ten;
}
function DisplayDropdown()
{
	$("#dropdown1").html("");
	if(collection.length!=0){
		for(var i=0;i<collection.length;i+=1){
			$("#dropdown1").append(`
			<li><a href="#!" onclick="AddMovie(document.getElementById('${collection[i].name}').id)" id="${collection[i].name}">${collection[i].name}</a></li>`);
		}
	}
}
function AddMovie(collectionN)
{
	for(var j=0;j<collection.length;j+=1){
		
		if(collection[j].name == collectionN){
			collection[j].movies.push(MovieN);
		}
	}
}
function CreateCollection() {
   var genre = $('#Create-Collection').val();
   var object = {};
   object.name = genre;
   object.movies = [];
   collection.push(object);
   DisplayDropdown();
   
}
function DeleteCollection(collec_input) {
    var flag = -1;
    for (var i = 0; i < collection.length; i++) {
        if (collec_input == collection[i].name)
            flag = i;    
    }
    if(flag!=-1)
        collection.splice(flag,1);
}
function EditCollection(old,new1)
{
    for(var i=0;i<collection.length;i++)
    {
        if(collection[i].name == old)
            collection[i].name = new1;
    }
}
function RemoveMovie(i,j)
{
	collection[i].movies.splice(j,1);
}

function ViewIndividualCollection(name1)
{
	$('#showId').html('');
	for(var k=0;k<collection.length;k+=1){
		if(collection[k].name == name1){
			for(var p=0;p<collection[k].movies.length;p+=1){
				$('#showId').append(`<div class="col s12 m4">
					<div class="card">
					    <div class="card-image waves-effect waves-block waves-light">
					      <img class="activator" src="${collection[k].movies[p].poster_path}">
					    </div>
					    <div class="card-content">
					      <span class="card-title activator grey-text text-darken-4">${collection[k].movies[p].title}<i class="material-icons right">more_vert</i></span>
					      <a class="btn-floating halfway-fab waves-effect waves-light red" id='${collection[k].movies[p].title}' onClick="RemoveMovie(${k},${p})"><i class="material-icons">clear</i></a>
					      <p><a href="#">${collection[k].movies[p].release_date}</a></p>
					    </div>
					    <div class="card-reveal">
					      <span class="card-title grey-text text-darken-4">${collection[k].movies[p].title}<i class="material-icons right">close</i></span>
					      <hr><p>${collection[k].movies[p].overview}</p><hr>
					      <p><h5>Rating</h5> ${collection[k].movies[p].vote_average}</p>
					    </div>
					</div>
				</div>`);
			}
		}
	}
}
function ViewCollection()
{
	$('#showId').html('');
	$('#showId').append(` <div class="fixed-action-btn horizontal">
	    <a class="btn-floating btn-large red">
	      <i class="large material-icons">menu</i>
	    </a>
	    <ul>
	      <li><a class="btn-floating red modal-trigger" id="adder1" href="#modalC"><i class="material-icons">add</i></a></li>
	      <li><a class="btn-floating yellow modal-trigger darken-1" href="#modalD"><i class="material-icons">delete</i></a></li>
	      <li><a class="btn-floating green modal-trigger" href="#modalE"><i class="material-icons">edit</i></a></li>
	    </ul>
	  </div>`);
    if (collection.length == 0) {
        $('#showId').append(`<h4>Empty Collection</h4>`);
    } else {
        $('#showId').append(`<div class="collection" id="collection-main">`);
        for (var i = 0; i < collection.length; i++)
        {
        	$('#showId').append(`<a href="#!" onclick="ViewIndividualCollection(document.getElementById('${collection[i].name}').id)" id="${collection[i].name}" class="collection-item">${collection[i].name}</a><br>`);
        }
        $('#showId').append(`</div>`);
    }
}

function getBack()
{
	$('#showId').html('');
}
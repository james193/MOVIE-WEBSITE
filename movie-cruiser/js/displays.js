import {AddMovie} from './addMovie'
import {RemoveMovie} from './removeMovie'
export function DisplayDropdown(collection)
{
	$("#dropdown1").html("");
	if(collection.length!=0){
		for(var i=0;i<collection.length;i+=1){
			$("#dropdown1").append(`
			<li><a href="#!" id="${collection[i].name}">${collection[i].name}</a></li>`);
			let variables = document.getElementById(collection[i].name);
			variables.addEventListener('click',function(){
   				AddMovie(collection,variables.id);
   			});
		}
	}
}
export function ViewCollection(collection)
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
        	$('#showId').append(`<a href="#!" id="${collection[i].name}" class="collection-item">${collection[i].name}</a><br>`);
        	let vars = document.getElementById(collection[i].name);
        	vars.addEventListener('click',function(){
   				ViewIndividualCollection(collection,vars.id);
   			});
        }
        $('#showId').append(`</div>`);
    }
}


export function ViewIndividualCollection(collection,name1)
{
	$('#showId').append('');
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
					      <a class="btn-floating halfway-fab waves-effect waves-light red" id='${collection[k].movies[p].title}' ><i class="material-icons">clear</i></a>
					      <p><a href="#">${collection[k].movies[p].release_date}</a></p>
					    </div>
					    <div class="card-reveal">
					      <span class="card-title grey-text text-darken-4">${collection[k].movies[p].title}<i class="material-icons right">close</i></span>
					      <hr><p>${collection[k].movies[p].overview}</p><hr>
					      <p><h5>Rating</h5> ${collection[k].movies[p].vote_average}</p>
					    </div>
					</div>
				</div>`);
				 document.getElementById(collection[k].movies[p].title).addEventListener('click',function(){
   	 				RemoveMovie(k,p);
   				});
   				/*let varso = document.getElementById(collection[k].movies[p].title);
	        	varso.addEventListener('click',function(){
	   				RemoveMovie(collection,k,p);;
	   			});*/
			}
		}
	}
}
function DisplayDropdown()
{
	document.getElementById('dropdown1').innerHTML = '';
	var text = '';
	
	if(collection.length!=0){
		for(var i=0;i<collection.length;i+=1){
			text += `
			<li><a href="#!" onclick="AddMovie(document.getElementById('${collection[i].name}').id)" id="${collection[i].name}">${collection[i].name}</a></li>`;
		}
		document.getElementById('dropdown1').innerHTML += text;
	}
}
function ViewCollection()
{
	var clear2 = document.getElementById("showId");
	clear2.innerHTML = '';
    var text = ` <div class="fixed-action-btn vertical">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">menu</i>
    </a>
    <ul>
      <li><a class="btn-floating red modal-trigger" id="adder1" href="#modalC"><i class="material-icons">add</i></a></li>
      <li><a class="btn-floating yellow modal-trigger darken-1" href="#modalD"><i class="material-icons">delete</i></a></li>
      <li><a class="btn-floating green modal-trigger" href="#modalE"><i class="material-icons">edit</i></a></li>
    </ul>
  </div>`;
  clear2.innerHTML += text;
    if (collection.length == 0) {
        var text2 = `<h4>Empty Collection</h4>`
        clear2.innerHTML+=text2;
    } else {
        var text2 = `<div class="collection" id="collection-main">`;
        for (var i = 0; i < collection.length; i++)
        {
            text2 += `<a href="#!" onclick="ViewIndividualCollection(document.getElementById('${collection[i].name}').id)" id="`+collection[i].name+`" class="collection-item">`+collection[i].name+`</a>`;
        }
        text2 += `</div>`;
        clear2.innerHTML+=text2;
    }
}

function ViewIndividualCollection(name1)
{
	document.getElementById('showId').innerHTML = '';
	for(var k=0;k<collection.length;k+=1){
		if(collection[k].name == name1){
			for(var p=0;p<collection[k].movies.length;p+=1){
				document.getElementById('showId').innerHTML +=
				`<div class="col s12 m4">
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
				</div>`;
			}
		}
	}
}
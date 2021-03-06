export function everything()
{
	$('#maintain').append(`<!-- NAV BAR -->
	    <div class="navbar-fixed" id="nav">
	        <nav>
	            <div class="nav-wrapper grey darken-3">
	                <a href="#!" class="brand-logo center">Movie Cruiser</a>
	                <ul class="right hide-on-med-and-down">
	                   <li>
	                       <a class="waves-effect waves-light btn" id="gohome" >Home</a>
	                   </li>
	                   <li>
	                   		<a class="waves-effect waves-light btn" id="viewCol" >My Collection</a>
	                   </li>
	               </ul>
	            </div>
	        </nav>
	    </div>
	    <hr>
		<!--SEARCH-->
		<div class="container" id="searchMe">
	        <div class="row">
	            <div class="input-field col s6">
	                <input placeholder="Type Movie Name" id="searchId" type="text" class="validate">
	                <label for="searchId" ">Search Movie</label>
	            </div>
	            <div class="col s3">
	                <a class="waves-effect waves-light btn" id="goMovie" >Search</a>
	            </div>
	        </div>
	    </div>
		
		<!--HTML DISPLAY -->	
		<div class="row">
	        <div class="container col l11" id="showId">
	        </div>
	    </div>

	    <!--modal-->
	    <div id="modalB" class="modal">
            <div class="modal-content">
                <h4>Which Collection do you want to add this movie to</h4>
                <p >Here are the List of Existing collections</p>
                <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>
                <button data-target="modalC" class="btn modal-trigger">Create New Collection</button>
                <br>
            </div>
            <div class="modal-footer">
                <a href="#" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>

        <div id="modalC" class="modal">
            <div class="modal-content">
                <h4>New Collection</h4>
                <label for="Create-Collection">Type name for your collection : </label>
			    <input type="text" class="form-control" id="Create-Collection">
			    <button class="col s1 btn " id="add" >Add</button>
            </div>
            <div class="modal-footer">
                <a href="#" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
        <div id="modalD" class="modal">
            <div class="modal-content">
                <h4>Delete Collection</h4>
                <label for="collec_del">Type name for the collection : </label>
			    <input type="text" class="form-control" id="collec_del">
			    <!---TO EDIT HERE--->
			    <button class="col s1 btn" onclick="DeleteCollection($('#collec_del').val())" id="Deleting">Delete</button>
            </div>
            <div class="modal-footer">
                <a href="#" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
        <div id="modalE" class="modal">
            <div class="modal-content">
                <h4>Edit</h4>
                <label for="collec_edit">Enter name of the collection you want to edit : </label>
                <input type="text" class="form-control" id="collec_edit1" placeholder="Old Name">
                <input type="text" class="form-control" id="collec_edit2" placeholder="New Name">
                <!---TO EDIT HERE--->
                <button class="col s1 btn" onclick="EditCollection($('#collec_edit1').val(),$('#collec_edit2').val())" id="Editing">Edit</button>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>

        <!--dropdown-->
        <ul id='dropdown1' class='dropdown-content'>
		    
		</ul>`);
}
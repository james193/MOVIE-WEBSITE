import {GetMovie,getBack,emit} from './main'
import {DisplayDropdown,ViewCollection,ViewIndividualCollection} from './displays'
import {CreateCollection} from './createCollection'
import {DeleteCollection} from './deleteCollection'
import {EditCollection}   from './editCollection'
let collection = [];
let obj1 = {};
var MovieN = {};
window.MovieN = MovieN;
var map = new Object();
window.map = map;

$('#gohome').click(function(){
	getback();
});
$('#goMovie').click(function(){
	GetMovie(obj1);
});
$('#viewCol').click(function(){
	ViewCollection(collection);
});
$('#adding').click(function(){
	CreateCollection(collection);
});
$('#Deleting').click(function(){
	DeleteCollection(collection,$('#collec_del').val());
});
$('#Editing').click(function(){
	EditCollection(collection,$('#collec_edit1').val(),$('#collec_edit2').val());
});

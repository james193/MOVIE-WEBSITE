import {DisplayDropdown} from './displays'
export function CreateCollection(collection) {
   let genre = $('#Create-Collection').val();
   let objects = {};
   objects.name = genre;
   objects.movies = [];
   collection.push(objects);
   DisplayDropdown(collection); 
}
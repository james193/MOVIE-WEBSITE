function CreateCollection() {
   var genre = $('#Create-Collection').val();
   var object = {};
   object.name = genre;
   object.movies = [];
   collection.push(object);
   DisplayDropdown();
   
}
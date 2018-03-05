function CreateCollection() {
   var genre = document.getElementById('Create-Collection').value;
   var object = {};
   object.name = genre;
   object.movies = [];
   collection.push(object);
   DisplayDropdown();
   getBack();
}
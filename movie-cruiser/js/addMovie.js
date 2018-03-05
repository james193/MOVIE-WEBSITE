function AddMovie(collectionN)
{
	for(var j=0;j<collection.length;j+=1){
		
		if(collection[j].name == collectionN){
			collection[j].movies.push(MovieN);
		}
	}
}
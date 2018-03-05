function RemoveMovie(i,j)
{
	collection[i].movies.splice(j,1);
	getBack();
}
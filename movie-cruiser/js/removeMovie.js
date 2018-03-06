import {getBack} from './main'
export function RemoveMovie(collection,i,j)
{
	collection[i].movies.splice(j,1);
	getBack();
}
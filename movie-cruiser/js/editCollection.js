import {getBack} from './main'
export function EditCollection(collection,old,new1)
{
    for(var i=0;i<collection.length;i++)
    {
        if(collection[i].name == old)
            collection[i].name = new1;
    }
    getBack();
}
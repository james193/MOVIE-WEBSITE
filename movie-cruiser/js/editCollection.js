function EditCollection(old,new1)
{
    for(var i=0;i<collection.length;i++)
    {
        if(collection[i].name == old)
            collection[i].name = new1;
    }
    getBack();
}
function DeleteCollection(collec_input) {
    var flag = -1;
    for (var i = 0; i < collection.length; i++) {
        if (collec_input == collection[i].name)
            flag = i;    
    }
    if(flag!=-1)
        collection.splice(flag,1);
}
_.map = function(list, callback) {
    let storage = [];

    _.each(list, function(v, i, list) {
         storage.push(callback(v, i, list));
    });

    return storage;
}


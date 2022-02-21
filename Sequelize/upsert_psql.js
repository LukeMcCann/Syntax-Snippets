// You can use lodash reject to filter a collection of items
// removing items which return truthy from a callback. 

// In this case I filter out based on whether an item exists. 

  const reject = require('lodash/reject');

  new_collection_of_items = reject(collection_of_items, item =>
    db.table_to_search.findOne(
      {
        where: {
          foreign_id_1: item.foreign_id_1,
          foreign_id_2: item.foreign_id_2,
        },
      }
    ));

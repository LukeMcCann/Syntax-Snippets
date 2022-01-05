'use strict';

import launches from '../../models/launches.model.mjs';

export function index(req, res) {
    return res.status(200).json(
        Array.from(launches.values())
    );
};


// When returning data from Maps we cannot simply use a 
// them as we would a JS object. We want to call the Map.values()
// function, but this must then be converted to JS obejct notation, 
// in order to be returned by our endpoint as JSON. we do this using the Array.from
// and passing the result to our json() method. 

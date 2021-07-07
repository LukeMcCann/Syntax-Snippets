function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

let add12 = makeAdder(12);

add12(2);


// sizer

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}


// Emulating private methods

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

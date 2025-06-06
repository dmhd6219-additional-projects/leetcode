/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    return {
        value: init,
        increment: function () {
            return ++this.value;
        },
        reset: function () {
            this.value = init;
            return this.value;
        },
        decrement: function () {
            return --this.value;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
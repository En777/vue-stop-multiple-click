// prevent multiple click in Vue.js

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    // global var, window.StopMultipleClick
    root.StopMultipleClick = factory();
  }
}(this, function () {
  var preventMultipleClick = {
    bind: function (el, binding, vnode, oldVnode) {
      var asyncHandler = binding.value;
      var minDelay = 1000;
      var customDelay = Number(binding.arg);
      var isNumber = !isNaN(customDelay)

      if (isNumber) {
        minDelay = customDelay;
      }

      var asyncFlow = function () {
        if (el.disabled) return;
        el.disabled = true;

        Promise.resolve().then(function () {
          return Promise.all([
            asyncHandler(),
            delay(minDelay)
          ])
        }).finally(function () {
          el.disabled = false;
        })
      }

      el.addEventListener('click', asyncFlow)
    }
  }

  function delay(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms)
    })
  }

  return preventMultipleClick;
}));

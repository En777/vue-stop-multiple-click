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
      var asyncFlow = function () {
        if (el.disabled) return;
        el.disabled = true;

        Promise.resolve().then(function () {
          return asyncHandler();
        }).finally(function () {
          el.disabled = false;
        })
      }

      el.addEventListener('click', asyncFlow)
    }
  }

  return preventMultipleClick;
}));

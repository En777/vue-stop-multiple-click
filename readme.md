# vue-stop-multiple-click

![npm](https://img.shields.io/npm/v/vue-stop-multiple-click)
[![gzip size](http://img.badgesize.io/https://unpkg.com/vue-stop-multiple-click/vue-prevent-multiple-click.js?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/vue-stop-multiple-click/vue-prevent-multiple-click.js)
[![downloads](https://img.shields.io/npm/dm/vue-stop-multiple-click.svg?style=flat-square)](https://www.npmtrends.com/vue-stop-multiple-click)
[![MIT License](https://img.shields.io/npm/l/vue-stop-multiple-click.svg?style=flat-square)](https://github.com/fisker/vue-stop-multiple-click/blob/master/license)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vue-stop-multiple-click/badge)](https://www.jsdelivr.com/package/npm/vue-stop-multiple-click)

a simple way prevent button multiple clicks.

一个非常简单的方式，防止按钮重复点击、重复 ajax 提交。

使用一个指令，像这样 ```v-click="ajaxPromiseFn"``` 把 Promise 函数传入，程序就能自动防止按钮重复点击了。按钮被点击后，一定要等到 ajax 结束(成功或失败)，才能再次点击，从而解决了重复点击的问题。

这可能是防重复点击的最佳实践，比防抖、节流都好得多。

## Usage
```js
const StopMultipleClick = require('vue-stop-multiple-click')

Vue.directive('click', StopMultipleClick)
```

```html
<button v-click="ajaxPromiseFn">a simple way prevent button multiple clicks</button>
```

or use CDN script:
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-stop-multiple-click@0/vue-prevent-multiple-click.min.js"></script>

<script>
var StopMultipleClick = window.StopMultipleClick

Vue.directive('click', StopMultipleClick)
</script>

<button v-click="ajaxPromiseFn">button will auto prevent multiple clicks</button>
```

## example / demo
[online example](https://en777.github.io/vue-stop-multiple-click/example.html)

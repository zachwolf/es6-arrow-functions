## lexical `this`

---

```js
// using `function`
function Btn (selector) {
  this.el = document.querySelector(selector)
  this.el.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(this instanceof Btn) // false
    this.fetch() // TypeError
  })
}

Btn.prototype.fetch = function () { return 'fetch' }

var btn = new Btn('#action')
```

---

```js
// using `function` and `self`
function Btn (selector) {
  var self = this
  this.el = document.querySelector(selector)
  this.el.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(self instanceof Btn) // true
    self.fetch() // fetch
  })
}

Btn.prototype.fetch = function () { return 'fetch' }

var btn = new Btn('#action')
```

---

```js
// using an arrow function
function Btn (selector) {
  this.el = document.querySelector(selector)
  this.el.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(this instanceof Btn) // true
    this.fetch() // 'fetch'
  })
}

Btn.prototype.fetch = function () { return 'fetch' }

var btn = new Btn('#action')
```

---

```js
// readable response handling
Btn.prototype.fetch = function () { 
  let root = 'http://jsonplaceholder.typicode.com';

  return $.ajax({
    url: root + '/posts/1',
    method: 'GET',
    success: res => this.displayResults(res)
  })
}
```
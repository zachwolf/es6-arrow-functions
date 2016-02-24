## Implicit return

---

#### before es6
<pre class="code-lg">
  <code class="lang-js">
var name = 'JSMN'

(function (n) {
	return 'hello, ' + n
})(name) // hello, 'JSMN'
  </code>
</pre>

---

#### with es6
<pre class="code-lg">
  <code class="lang-js">
let name = 'JSMN'

// implicit `return`
(n => 'hello, ' + n)(name) // hello, JSMN
  </code>
</pre>

---

<pre class="code-lg">
  <code class="lang-js">
// block with explicit `return`
(n => {
	return 'hello, ' + n
})(name) // hello, JSMN
  </code>
</pre>

---

<pre class="code-lg">
  <code class="lang-js">
// empty block
(n => {})(name) // undefined

// block without explicit `return`
(n => {
	name
})(name) // undefined
  </code>
</pre>

---

#### returning objects

<pre class="code-lg">
  <code class="lang-js">
// a block with a single label
(n => {
	name: n
})(name) // undefined
  </code>
</pre>

---

#### returning objects

<pre class="code-lg">
  <code class="lang-js">
// implicit return inside expression ( )
(n => ({
	name: n
}))(name) // {name: "JSMN"}
  </code>
</pre>

---

#### returning objects

<pre class="code-lg">
  <code class="lang-js">
// explicit return in block
(n => {
	return {
		name: n
	}
})(name) // {name: "JSMN"}
  </code>
</pre>
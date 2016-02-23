# Arguments

---

### No special `arguments` property

<pre class="code-lg">
  <code class="lang-js">
function curry (/* arguments */) {
	return (/* no arguments */) => {
		console.log(arguments) // ["foo"]
	}
}

curry("foo")("bar")
  </code>
</pre>

---

### Using es6 `spread`

<pre class="code-lg">
  <code class="lang-js">
function curry () {
	return (...args) => {
		console.log(arguments) // ["foo"]
		console.log(args)      // ["bar"]
	}
}

curry("foo")("bar")
  </code>
</pre>
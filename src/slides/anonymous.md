## Arrow functions are anonymous

---

<pre class="code-lg">
  <code class="lang-js">
// this won't work
add (x, y) => {}
  </code>
</pre>

---

<pre class="code-lg">
  <code class="lang-js">
// saved to variable
var add = (x, y) => {
	return x + y
}
  </code>
</pre>

---

<pre class="code-lg">
  <code class="lang-js">
// as immediately invoked functions 
(($) => {
	$('div').on('click', e => {
		e.preventDefault()
		// ...
	})
})(jQuery)
  </code>
</pre>

---

<pre class="code-lg">
  <code class="lang-js">
// as callbacks
var arr  = [1,2,3]
  , odds = arr.filter((val) => {
             return val % 2
           })

console.log(odds) // [1, 3]
  </code>
</pre>
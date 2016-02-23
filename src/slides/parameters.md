## parameters

---

<pre class="code-lg">
  <code class="lang-js">
(() => "no args passed")() // no args passed
  </code>
</pre>

---

<pre class="code-lg">
  <code class="lang-js">
((n) => `${n}!`)(name) // JSMN!
(n => `${n}!`)(name) // JSMN!
  </code>
</pre>

---

<pre class="code-lg">
  <code class="lang-js">
((g, n) => `${g}, ${n}!`)('hi', name)
// hi, JSMN!
  </code>
</pre>
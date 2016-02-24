<pre class="code-lg">
  <code class="lang-js">
let chars = [123, 84, 124, 104, 97, 110,
             126, 107, 115, 33, 125]

let closing = chars
  .filter(char => char < 116)
  .map(char => String.fromCharCode(char))
  .reduce((prev, next) => prev + next)

console.log(closing) // Thanks!
  </code>
</pre>
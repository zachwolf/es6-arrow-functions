<!-- move to global style sheet when done -->
<style>
.o-split {
  display: table;
  width: 100%;
  box-sizing: border-box;
}

.o-split__chunk {
  display: table-cell;
  vertical-align: middle;
}

.o-split__chunk--right {
  text-align: right;
}

.reveal-reset {
	border: none !important;
	box-shadow: none !important;
	margin-bottom: 0 !important;
	height: 800px;
}

.v-list {}

.v-list > li {
	list-style: none;
}

.reveal-layout {}

.reveal-layout .l-split {
	display: flex;
}

.reveal-layout .l-split__chunk {
	display: flex;
	flex: 1;
}

.reveal-layout .l-split__chunk--right {}

.l-anchor {
	position: relative;
	width: 100%;
}

.l-anchor::before {
	content: '';
	display: table;
	clear: both;
}

.l-anchor--bottom {}

.l-anchor__content {
	position: absolute;
	left: 0;
	right: 0;
}

.l-anchor--bottom .l-anchor__content {
	bottom: 0;
}

</style>

<!-- it's my dream to have a two column layout here
with my image on the left and links on the right -->

<div class="reveal-layout">
	<div class="l-split">
		<div class="l-split__chunk">
			<div class="l-anchor l-anchor--bottom">
				<div class="l-anchor__content">
					<img src="/img/portrait.png" alt="" class="reveal-reset">
				</div>
			</div>
		</div>
		<div class="l-split__chunk l-split__chunk--right">
			<ul class="v-list">
				<li>
					<i class="fa fa-6 fa-globe"></i>
					[zachwolf.com](http://zachwolf.com)
				<li>
					<i class="fa fa-6 fa-github"></i>
					[zachwolf](https://github.com/zachwolf)
				<li>
					<i class="fa fa-6 fa-twitter"></i>
					[@hellozachwolf](https://twitter.com/hellozachwolf)
			</ul>
		</div>
	</div>
</div>
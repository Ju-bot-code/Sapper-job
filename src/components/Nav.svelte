<script>
	export let segment;
</script>

<style>
	nav {
    background: #fff3ef;
	}
  nav div {
    max-width: 960px;
    padding: 0 10px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  h1 {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
  }
	ul {
		padding: 0;
    margin: 0;
    text-align: right;
	}
  li {
    display: inline-block;
  }
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
  a.current {
    border-bottom: 3px solid #ff3e00;
  }
</style>

<nav>
	<div>
		<h1 class="space">CRUD</h1>
			<ul>
				<!--href="." represents home directory  -->
				<li><a class:current={segment === undefined} href=".">home</a></li>
				<li><a class:current="{segment === 'about' }" href="about">about</a></li>
				<li><a class:current="{segment === 'contact'}" href="contact">contact</a></li>

				<!-- for the jobs link, we're using rel=prefetch so that Sapper prefetches
					the jobs data when we hover over the link or tap it on a touchscreen -->
				<li><a rel=prefetch class:current="{segment === 'jobs'}" href="jobs">jobs</a></li>
			</ul>
	</div>
</nav>

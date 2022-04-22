// const navbar = document.querySelector(".navbar");
// const mediaQuery = window.matchMedia("(max-width: 700px)");
// if (mediaQuery.matches) {
// 	console.log("matched!");
// 	navbar.innerHTML = `<div id="menuToggle">
// 		<!--
// 		A fake / hidden checkbox is used as click reciever,
// 		so you can use the :checked selector on it.
// 		-->
// 		<input type="checkbox" />

// 		<!--
// 		Some spans to act as a hamburger.

// 		They are acting like a real hamburger,
// 		not that McDonalds stuff.
// 		-->
// 		<span></span>
// 		<span></span>
// 		<span></span>

// 		<!--
// 		Too bad the menu has to be inside of the button
// 		but hey, it's pure CSS magic.
// 		-->
// 		<ul id="menu">
// 		  <a href="#"><li>Home</li></a>
// 		  <a href="#"><li>About</li></a>
// 		  <a href="#"><li>Info</li></a>
// 		  <a href="#"><li>Contact</li></a>
// 		  <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
// 		</ul>
// 	  </div>`;
// } else {
// 	navbar.innerHTML = `<a
// 	href="javascript:void(0)"
// 	id="mobile-nav-menu"
// 	role="button"
// 	tabindex="0"
// 	>
// 	<img
// 		src="./assets/navbar/nav-icon-button-menu.svg"
// 		alt="Menu"
// 	/>
// 	</a>
// 	<ul>
// 	<li style="--item-number: 0">
// 		<a title="Home" id="nav-link-home" href="#hero-section">
// 			<span>Home</span>
// 			<img
// 				src="./assets/navbar/nav-icon-button-home.svg"
// 				alt="Home"
// 			/>
// 		</a>
// 	</li>
// 	<li style="--item-number: 1">
// 		<a
// 			title="Events"
// 			id="nav-link-events"
// 			href="/events/index.html"
// 		>
// 			<span>Events</span>
// 			<img
// 				src="./assets/navbar/nav-icon-button-events.svg"
// 				alt="Events"
// 			/>
// 		</a>
// 	</li>
// 	<li style="--item-number: 2">
// 		<a
// 			title="Our Team"
// 			id="nav-link-team"
// 			href="/our-team/index.html"
// 		>
// 			<span>Our Team</span>
// 			<img
// 				src="./assets/navbar/nav-icon-button-team.svg"
// 				alt="Our Team"
// 			/>
// 		</a>
// 	</li>
// 	<li style="--item-number: 3">
// 		<a
// 			title="Schedule"
// 			id="nav-link-schedule"
// 			href="/sponsor/index.html"
// 		>
// 			<span>Sponsors</span>
// 			<img
// 				src="./assets/navbar/nav-icon-button-schedule.svg"
// 				alt="Schedule"
// 			/>
// 		</a>
// 	</li>
// 	<li class="login-btn" style="--item-number: 4">
// 		<a title="Account" id="login-btn-border">Login </a>
// 	</li>
// 	<li class="logout-btn" style="--item-number: 4">
// 		<a class="sign-out" id="login-btn-border"> Log Out </a>
// 	</li>
// 	</ul>`;
// }
// console.log(mediaQuery.matches);
// console.log("index js");

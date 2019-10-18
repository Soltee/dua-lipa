document.addEventListener('DOMContentLoaded', () => {

	//THis is for Displaying Login and Logout Button  when logged out and logged in respectively.
	//First Grab the login Link
	// const rightNavbar = document.querySelector('.nav-sidebar');
	// const loginLink = rightNavbar.firstElementChild;

	//Check if Access Token is save in localStorage or not
	//If AVAILABLE
	// if(localStorage.getItem('_token'))
	// {
	// 	//Set Login Link URl to logoout for user experience although there is not logout page
	// 	//Logout Out is handled by axios method
	// 	//Then Grab the first Child of the link and SET textContent to Logout
	// 	loginLink.href = "http://localhost:1000/logout";
	// 	loginLink.firstElementChild.textContent = "Logout";

	// 	//Append a Shop cart icon for Store
	// 	const i = document.createElement('i');
	// 	i.className = "fa fa-shopping-cart";
	// 	const span = document.createElement('span');
	// 	span.className = "item";
	// 	span.textContent = "0";
	// 	rightNavbar.insertBefore(i, rightNavbar[0]);
	// 	rightNavbar.appendChild(span, rightNavbar[0]);


	// 	i.addEventListener("click", ()=>{
	// 		window.location = "http://localhost:1000/cart.html";
	// 	});


		//And if uSer clicks on the Logout link Following steps are carried out.

	// 	loginLink.addEventListener("click", (e) => {
	// 		e.preventDefault();
	// 		const m = document.querySelector('.message');

	// 		const token = localStorage.getItem("_token");

	// 		axios.post('http://localhost:8000/api/auth/logout', {}, {
	// 			headers: {
	// 		        'Content-Type'  : 'application/json',
	// 		        'Authorization' : 'Bearer '+ token
	// 		    }
	// 		})
	// 		.then((res) => {
	// 			if(localStorage.getItem("_token"))
	// 			{
	// 				localStorage.removeItem("_token");

	// 				const p = document.createElement('p');
	// 				p.textContent = "Logout Successful You will be redirected in 5 second."
	// 				m.style.display = "block";

	// 				m.appendChild(p);
	// 				m.classList.add('open');

	// 				setTimeout(() => {
	// 					m.style.display = "none";
	// 					window.location = "http://localhost:1000";
	// 				}, 5000);


	// 			} 
	// 		}).catch(err => console.log(err));
	// 	});
	// }

	//DIsplaying NAVMENU in Smaller Divices using media queries
	// let navbar = document.querySelector('.navbar-nav');
	// let toggle = document.querySelector('.toggle-menu');
	// let musics = document.querySelectorAll('.music');

	// toggle.addEventListener('click', (e) => {
	// 	navbar.classList.toggle('is-open');
	// });


	// musics.forEach((m) => {
	// 	let details = m.querySelector('.music-detail');
	// 	m.addEventListener("mouseover", (e) => {
	// 		details.classList.add('is-music-open');
	// 	});

	// 	m.addEventListener("mouseleave", (e) => {
	// 		details.classList.remove('is-music-open');
	// 	});

	// });

});
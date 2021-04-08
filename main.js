//smooth scrolling
function scroll() {
	const scrollLink = document.querySelectorAll('a.to-form');

	for (let i = 0; i < scrollLink.length; i++) {
		scrollLink[i].addEventListener('click', function(event) {
			event.preventDefault();
			const id = scrollLink[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		});
	}
}
scroll();

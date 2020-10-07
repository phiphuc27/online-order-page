const sections = document.querySelectorAll('section');

const options = {
	rootMargin: '0px',
	root: null,
	threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			if (entry.target.className === 'comments') {
				entry.target.style.animation = `anim-down 1.5s forwards ease-out`;
			} else {
				Array.from(entry.target.children).map((child, index) => {
					if (child.className === 'introduction--left') {
						child.style.animation = 'anim-left 1.5s forwards ease-out';
					} else if (child.className === 'introduction--right') {
						child.style.animation = 'anim-right 1.5s forwards ease-out';
					} else {
						child.style.animation = `anim-down 1.5s ${index *
							0.4}s forwards ease-out`;
					}
				});
			}
		}
	});
}, options);

sections.forEach(section => {
	observer.observe(section);
});

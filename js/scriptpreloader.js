var preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
		
	
		preloader.classList.add('preloaderopacity');
		
		preloader.addEventListener('transitionend', function(){
			this.classList.add('preloaderdisplay');
			this.classList.remove('preloaderopacity');
	});
}, 1000);
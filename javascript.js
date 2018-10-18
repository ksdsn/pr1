
$(document).ready(function(){
		$('.navButton').click(function(){
			$('.navMenu').addClass('navMenuActive');
		});
		$('.navMenuButtonExit').click(function(){
			$('.navMenu').removeClass('navMenuActive');
		});
		
		
		$('.footerContainerBTT').click(function(){
			$('html, body').animate({
				scrollTop: 0
			}, 400)
		});
	
		
		$('.animated').addClass('hide').each(function(){
			$(this).viewportChecker({
				classToAdd: 'show opacityshow',
				classToRemove: 'hide',
				
			});
		});
		
	});
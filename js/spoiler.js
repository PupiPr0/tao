$(document).ready(function(){
    $('.spoiler__title').click(function (event) {
        event.preventDefault();
		
		if(!$(this).parent().hasClass('active'))
		{
			$(this).parent().addClass('active');

			$(this).parent().find('.spoiler__content').eq(0).slideDown(200, function() { 
				$(this).css('display', 'block');
			});
		}
		else
		{
			$(this).parent().removeClass('active');

			$(this).parent().find('.spoiler__content').eq(0).slideUp(200, function() { 
				$(this).css('display', 'none');
			});
		}
    });
});

// ------------------------------------------------------------------------

// init_mainmenu
$(init_mainmenu);
function init_mainmenu()
{
	$('#mainmenu a').on('click', function() {
		var id = $(this).attr('href');
		$(id).servsiteScroll({
			offset: 22,
		});
		return false;
	});
}

// ------------------------------------------------------------------------

// init_scroll
$(init_scroll);
function init_scroll()
{
	$('[data-scroll]').on('click', function() {
		var id = $(this).attr('data-scroll');
		$(id).servsiteScroll();
		return false;
	});
}

// ------------------------------------------------------------------------

// maskedinput


// ------------------------------------------------------------------------

$(init_photos);
function init_photos()
{
	$('.section2 .img a')
		.fancybox({margin: 50, padding: 2, loop: false, title: ''});

	$('.section4 .items a')
		.attr('rel', 'gallery')
		.fancybox({margin: 50, padding: 2, loop: false, title: ''});
}

// ------------------------------------------------------------------------

// init_popups
$(init_popups);
function init_popups()
{
	/* callback */

	$('.open-callback1').on('click', function() {
		$.fancybox({
			fitToView: false,
			margin: 0,
			padding: 0,
			type: 'inline',
			content: $('#callback1-popup'),
		});
		return false;
	});

	/* accessories balls */

	$('.accessories-balls [name="accessories-size"]').on('change', function() {
		var price = $(this).find(':selected').attr('data-price');
		var priceOld = $(this).find(':selected').attr('data-price-old');

		if (price)
			$('.accessories-balls .prices .price').show().find('.p').html(price);
		else
			$('.accessories-balls .prices .price').hide();

		if (priceOld)
			$('.accessories-balls .prices .price-old').show().find('.p').html(priceOld);
		else
			$('.accessories-balls .prices .price-old').hide();

		return false;
	}).trigger('change');

	$('.accessories-balls [name="color"]').on('change', function() {
		var img = $(this).find(':selected').attr('data-img');
		$('.accessories-balls .photo img').attr('src', img);
		return false;
	}).trigger('change');

	/* accessories light */

	$('.accessories-light [name="accessories-size"]').on('change', function() {
		var price = $(this).find(':selected').attr('data-price');
		var priceOld = $(this).find(':selected').attr('data-price-old');

		if (price)
			$('.accessories-light .prices .price').show().find('.p').html(price);
		else
			$('.accessories-light .prices .price').hide();

		if (priceOld)
			$('.accessories-light .prices .price-old').show().find('.p').html(priceOld);
		else
			$('.accessories-light .prices .price-old').hide();

		return false;
	}).trigger('change');

	/* order1 popup */

	var order1 = $('#order1-popup');

	order1.find('[name="accessories-size"]').on('change', function() {
		var price = $(this).find(':selected').attr('data-price');
		var priceOld = $(this).find(':selected').attr('data-price-old');

		if (price)
			order1.find('.block2 .prices .price').show().find('.p').html(price);
		else
			order1.find('.block2 .prices .price').hide();
		
		if (priceOld)
			order1.find('.block2 .prices .price-old').show().find('.p').html(priceOld);
		else
			order1.find('.block2 .prices .price-old').hide();

		return false;
	}).trigger('change');

	order1.find('[name="accessories-color"]').on('change', function() {
		var img = $(this).find(':selected').attr('data-img');
		order1.find('.block2 .img img').attr('src', img);
		return false;
	}).trigger('change');

	order1.find('[name="accessories"]').on('change', function() {
		var disabled = $(this).is(':checked');
		if (disabled)
		{
			order1.find('.block2 .left').addClass('hiding');
			order1.find('.accessories').addClass('hiding');
			order1.find('.accessories select').attr('disabled', 'disabled');
		}
		else
		{
			order1.find('.block2 .left').removeClass('hiding');
			order1.find('.accessories').removeClass('hiding');
			order1.find('.accessories select').removeAttr('disabled');
		}
		return false;
	}).trigger('change');

	$('.section2 .items .button').on('click', function() {

		var item = $(this).closest('.item');

		var size = item.attr('data-size');
		order1.find('[name="size"]').val(size);

		var img = item.find('.img a').html();
		order1.find('.block1 .img').html(img);

		var title = item.find('.title').html();
		order1.find('.popup-title').html(title);

		var prices = item.find('.prices').html();
		order1.find('.block1 .prices').html(prices);

		$.fancybox({
			fitToView: false,
			margin: 0,
			padding: 0,
			type: 'inline',
			content: order1,
		});

		return false;
	});
}

// ------------------------------------------------------------------------

// init_comments
$(init_comments);
function init_comments()
{
	var resizer = function()
	{
		$('.section5 .items .text').servsiteSameHeight();
	}

	var timer = null;
	$(window).on('resize', function() {
		if (timer) clearTimeout(timer);
		timer = setTimeout(resizer, 500);
	});

	resizer();
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/* servsiteScroll */
(function($) {
	$.fn.servsiteScroll = function(options) {
		var options = $.extend({speed: 1000, index: 0, offset: 0}, options);
		this.eq(options.index).each(function() {
			var destination = $(this).offset().top - 10 - options.offset;
			$('html, body').animate({scrollTop: destination}, options.speed);
		});
		return this;
	};
})(jQuery);

// ------------------------------------------------------------------------

/* servsiteSameHeight */
(function($) {
	$.fn.servsiteSameHeight = function(){
		var max = 0;
		this.height('auto');
		this.each(function(){
			max = Math.max(max, $(this).height());
		});
		this.height(max);
		return this;
	};
})(jQuery);

// ------------------------------------------------------------------------

function cyclerstart(){var now=new Date();var cycler=new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59,59,99);var totalRemains=(cycler.getTime()-now.getTime());if(totalRemains>0)
{var RemainsSec=(parseInt(totalRemains/1000));var RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));if(RemainsFullDays<10){RemainsFullDays="0"+RemainsFullDays};var secInLastDay=RemainsSec-RemainsFullDays*24*3600;var RemainsFullHours=(parseInt(secInLastDay/3600));if(RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours};var secInLastHour=secInLastDay-RemainsFullHours*3600;var RemainsMinutes=(parseInt(secInLastHour/60));if(RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes};var lastSec=secInLastHour-RemainsMinutes*60;if(lastSec<10){lastSec="0"+lastSec};var mcend=Date.parse(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0,0);var mcnow=now.getTime();var mc=((mcend-mcnow)/10).toFixed(0).substr(8);var cyclers=document.getElementsByClassName('cycler');var cyclerhours=document.getElementsByClassName('cyclerhours');var cyclerminutes=document.getElementsByClassName('cyclerminutes');var cyclerseconds=document.getElementsByClassName('cyclerseconds');var i;for(i=0;i<cyclers.length;i++){cyclerhours[i].innerHTML=RemainsFullHours;cyclerminutes[i].innerHTML=RemainsMinutes;cyclerseconds[i].innerHTML=lastSec;}
setTimeout("cyclerstart()",10);} else{}} cyclerstart();
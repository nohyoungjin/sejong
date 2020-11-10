$(function () {

	// init

	search();
	gnb();

	depth3();
	visual();

	faq();
	qna();

	// on load

    $(window).on('load', function() {
	    
		$('body').addClass('load');
		
	});

	// search

	function search() {

		var $btn_search = $('.btn_search'),
			$search_wrap = $('.search_wrap');

		$('.btn_search, .btn_search_close').on('click', function(e) {

			if ($btn_search.hasClass('open')) {

				$btn_search.removeClass("open");
				$search_wrap.removeClass("open");
				$('.btn_close').trigger('click');
				$('.btn_open').css('display','block');
				$('.btn_search_close').css('display','none');

			} else {

				$btn_search.addClass('open');
				$search_wrap.addClass('open');
				$('.backface').stop().fadeIn('slow');
				$('.btn_open').css("display","none");
				$('.btn_back').css('z-index','1');
				$('.btn_search_close').css('display','block');
				$('.s_wrap .fl input[type=text]').focus();

			}
			
		});

	}

    // gnb

	function gnb() {

		$('.btn_open').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('open');
			$('.backface').stop().fadeIn('slow');
			$('.btn_search').css('z-index','1');
			$('.btn_back').css('z-index','1');
		});

		$('.btn_close').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('open');
			$('#header #gnb > ul > li > a').removeClass('selected').next().hide();
			$('.backface').stop().fadeOut('slow');

			$('.btn_search').css('z-index','1000');
			$('.btn_back').css('z-index','1000');
		});

		$(document).on('click touchstart', '.backface', function(e) {

			if ($('body').hasClass('open')) {
				$('.btn_close').trigger('click');
			}

		});

		//

		var early = -1;

		$('#gnb > ul > li').each(function(q) {
			$(this).find(' > a').on('click', function() {

				if (q != early) {

					$('#gnb > ul > li').eq(early).removeClass('on');
					$('#gnb > ul > li').eq(early).find('ul').stop().slideUp(300);

					early = q;

					$(this).parent().addClass('on');
					$(this).next().stop().slideDown(300);

				} else {

					$('#gnb > ul > li').eq(early).removeClass('on');
					$('#gnb > ul > li').eq(early).find('ul').stop().slideUp(300);

					early = -1;
				
				}

			});
		});

	}

	// depth3 adjustment

	function depth3() {

		if ($('#header .depth3').length) {
			$('#wrap').css('padding-top','24vw');
		} else {
			$('#wrap').css('padding-top','11.6vw');
		}

	}

	// visual

	function visual() {

		if (!$('body').hasClass('home')) { return; }

		$('.visual').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000
		});

	}

	// faq

	function faq() {

		$('.faq_list dl dt a').on('click', function() {

			if ($(this).parent().next().css('display') == 'none') {

				$('.faq_list dl dt a').removeClass('on');
				$('.faq_list dl dd').slideUp(150);
				$(this).addClass('on');
				$(this).parent().next().slideDown(150);

			} else {

				$('.faq_list dl dt a').removeClass('on');
				$('.faq_list dl dd').slideUp(150);

			}

		});

	}

	// qna

	function qna() {
		
		$('.fna_answer').each(function() {
			$(this).addClass('fna_hidden');
		});

		$('.fna_answer').find('div').css('display','none');

		$('.fna_container tr').not('.fna_answer').click(function() {

			if ($(this).next('tr').hasClass('fna_hidden')) {

				$('.fna_container tr').not('.fna_answer').removeClass('active');
				$(this).addClass('active');
				$('.fna_answer').addClass('fna_hidden').find('div').slideUp(150);
				$(this).next('tr').removeClass('fna_hidden').find('div').slideDown(150);

			} else {

				$(this).removeClass("active");
				$(this).next("tr").addClass("fna_hidden");
				$(this).next("tr").find("div").slideUp(150);

			}

		});

	}


	// 회원가입 주소검색

	$('.addr_search').on('click', function(e) {
		
		$("#layer").addClass("open");

		if ($("#layer").hasClass("open")) {
			$("#btnCloseLayer").css("display","block");
			$("#layer").css("z-index","99999");
			$("#btnCloseLayer").css("z-index","99999");
			$('.backface').css("display","block");
			$(".btn_search").css("z-index","0");
			$(".btn_back").css("z-index","0");
		} else {
			$("#layer").removeClass("open");
			$("#btnCloseLayer").css("display","none");
			$("#layer").css("z-index","0");
			$("#btnCloseLayer").css("z-index","0");
			$('.backface').css("display","none");
			$(".btn_search").css("z-index","1");
			$(".btn_back").css("z-index","1");
		}  
	});

	$('#btnCloseLayer').on('click', function(e) {
			$("#layer").removeClass("open");
			$("#btnCloseLayer").css("display","none");
			$("#layer").css("z-index","0");
			$("#btnCloseLayer").css("z-index","0");
			$('.backface').css("display","none");
			$(".btn_search").css("z-index","1");
			$(".btn_back").css("z-index","1"); 
	});

	// 개인정보변경 휴대폰번호 변경 (레이어 창)

	$('.phone').on('click', function(e) {
		e.preventDefault();
		$(".backface").css("display","block");
		$(".btn_search").css("z-index","1");
		$(".btn_back").css("z-index","1");
		var el = $($(this).attr('href'));
		if (!el.hasClass('open')) {
			el.addClass('open');
		} else {
			el.removeClass('open');
		  }
		});

	$('.cancel').on('click', function(e) {
		$(this).closest('.layer').removeClass('open');
		$(".backface").css("display","none");
	});

	// 회원가입 전체동의

	$('.join_all').click( function() {
		$('.join').prop('checked', this.checked);
    });

});


function openPInfo() {

    var os;
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
   
	if (mobile) {

        // 유저에이전트를 불러와서 OS를 구분합니다.

        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.search('android') > -1)
            os = 'android';
        else if ((userAgent.search('iphone') > -1) || (userAgent.search('ipod') > -1) || (userAgent.search('ipad') > -1))
            os = 'ios';
        else
            os = 'else';

    } else {

        // 모바일이 아닐 때

        os = 'nomobile';

    }

    if (os == 'ios') {
        webkit.messageHandlers.openPersonalInfo.postMessage("");
    } else if (os == 'android') {
        window.Android.openPersonalInfo();
    } else {
        alert('모바일이 아닙니다.');
    }

}

function empty(e) {

    switch (e) {
        case '':
        case null:
        case typeof this == 'undefined':
            return true;
        default:
            return false;
    }

}
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

$(function () {

	// 높이값 조정

	if ($('#header .depth3').length) {
		$('#wrap').css('padding-top','23.4vw');
	} else {
		$('#wrap').css('padding-top','11.6vw');
	}

	// 검색 레이어

    $('.btn_search').on('click', function(e) {

		$('.btn_search').css('z-index','1000');

        if ($("#h_search").hasClass("open")) {
			$(".btn_search").removeClass("open");
			$("#h_search").removeClass("open");
			$('.btn_close').trigger('click');
			$(".btn_open").css("display","block");
			$(".btn_search_close").css("display","none");
        } else {
			$(".btn_search").addClass("open");
			$("#h_search").addClass("open");
			$('.backface').stop().fadeIn('slow');
			$(".btn_open").css("display","none");
			$(".btn_back").css("z-index","1");
			$(".btn_search_close").css("display","block");
			$('.s_wrap .fl input[type=text]').focus();
		}     
	});

	// 회원가입 주소검색

	$('.addr_search').on('click', function(e) {
		
		$("#layer").addClass("open");

		if ($("#layer").hasClass("open")) {
			$("#btnCloseLayer").css("display","block");
			$("#layer").css("z-index","9999999");
			$("#btnCloseLayer").css("z-index","9999999");
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

	// 싱싱문화관 탭메뉴

	$(".boardList .topSection ul li a").on("click", function() {
		var index = $(this).parent("li").index();
		$(".boardList").find(".list").each(function(i) {
			if (i == index) {
				$(".boardList .topSection ul li").removeAttr("class").eq(i).attr("class", "selected");
				$(".boardList .topSection ul li a").removeAttr("title").eq(i).attr("title", "현재탭");
				$(".boardList .list").removeClass("on").eq(i).addClass("on");
			}
		});
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

	// 커뮤니티 이모저모 글쓰기 (레이어 창)

	$('.variusList .varius_write_btn').on('click', function(e) {
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


	// 직매장 상품(구매내역 상세) 팝업

	$('.buy_state').on('click', function(e) {
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

	// 직매장 상품(구매내역 상세) 팝업 만족도

    $('.product ul a').on('click', function(e) {
			if ($(this).hasClass("on")) {
				$(this).removeClass("on");
			} else {
				$('.product ul a').removeClass("on");
				$(this).addClass("on");
			}     
		});

	// 생산자 전용 공지 팝업

	$('.notice_pop .close').on('click', function(e) {
		$('.notice_pop').css('display' ,'none');   
		$(".backface").css("display","none");
	});

	// 검색창

	$('.btn_search_close').on('click', function(e) {
		$("#h_search").removeClass("open");
		$('.btn_close').trigger('click');
		$(".btn_open").css("display","block");
		$(".btn_search_close").css("display","none");
	});

    // Gnb Toggle

    $('.btn_open').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('open');
        $('.backface').stop().fadeIn('slow');
		$('.btn_search').css('z-index', '1');
		$('.btn_back').css('z-index', '1');
    });

    $('.btn_close').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('open');
        $('#header #gnb > ul > li > a').removeClass('selected').next().hide();
        $('.backface').stop().fadeOut('slow');
    });

    $(document).on('click touchstart', '.backface', function(e) {
		if ($("body").hasClass("open")) {
			$('.btn_close').trigger('click');
		}
    });

	//

	var part = -1;

	$('#gnb > ul > li').each(function(q) {
		$(this).find(' > a').on('click', function() {
			if (q != part) {

				$('#gnb > ul > li').eq(part).removeClass('on');
				$('#gnb > ul > li').eq(part).find('ul').stop().slideUp(300);

				part = q;

				$(this).parent().addClass('on');
				$(this).next().stop().slideDown(300);

			} else {

				$('#gnb > ul > li').eq(part).removeClass('on');
				$('#gnb > ul > li').eq(part).find('ul').stop().slideUp(300);

				part = -1;
			
			}
		});
	});
	
	//

	$('.depth2').css('background' , '#569307');

	// 메인 비주얼

	$('.visual').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000
	});

    // 메인 레이어 팝업

	function mainPopup() {
        var width = $(".notice_layer_popup").outerWidth();
        var height = $(".notice_layer_popup").outerHeight();
        var marginTop = height / 2;
        var marginLeft = width / 2;

        $(".notice_layer_popup").css({
            marginTop: -marginTop,
            marginLeft: -marginLeft
        }).show().next().show();
    }

    // 쿠키 가져오기
    
	function getCookieValue(cookieName) {
        var found = false;
        var start, end;
        var i = 0;

        while (i <= document.cookie.length) {
            start = i;
            end = start + cookieName.length;

            if (document.cookie.substring(start, end) == cookieName) {
                found = true;
                break;
            }
            i++;
        }

        if (found == true) {
            start = end + 1;
            end = document.cookie.indexOf(";", start);
            if (end < start)
                end = document.cookie.length;
            return document.cookie.substring(start, end);
        }
        return "";
    }

    // 팝업창 열기
    
	function openPopup() {
        var cookieValue = getCookieValue("popup_notice_1");
        if (cookieValue != "no") {
            mainPopup();
        }
    }

    openPopup();

    // 쿠키 저장하기
    
	function setCookie(cookieName, cookieValue, expiredays) {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = cookieName + "=" + escape(cookieValue) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }

    // 팝업창 닫기
    
	function closePop() {
        if (document.form1.check1.checked) {
            setCookie(document.form1.check1.value, "no", 1);
        }
        $(".notice_layer_popup").hide().next().hide();
    }

    $(".btn_pop_close").on("click", function () {
        closePop();
    });

    $(".btn_pop_close").on("click", function () {
        $(".notice_layer_popup").hide().next().hide();
    });

	// 회원가입 전체동의

	$( '.join_all' ).click( function() {
		$( '.join' ).prop( 'checked', this.checked );
    });

	// 인기도 

	/* $ ".star_rating a").click(function() {
		 $(this).parent().children("a").removeClass("on");
		 $(this).addClass("on").prevAll("a").addClass("on");
		 $('.star_rating a.on').html('인기도 on');
		 $('.star_rating a').html('인기도 off');
		 return false;
	}); */

	// FAQ

	$(".faqList dl dt a").on("click", function() {
		if ($(this).parent().next().css("display") == "none") {
			$(".faqList dl dt a").removeClass('on');
			$(".faqList dl dd").slideUp(150);
			$(this).addClass('on');
			$(this).parent().next().slideDown(150);
		} else {
			$(".faqList dl dt a").removeClass('on');
			$(".faqList dl dd").slideUp(150);
		}
	});

	// 내문의확인
		
	$(".fna_answer").each(function() {
		$(this).addClass("fna_hidden");
	});

	$(".fna_answer").find("div").css("display","none");

	$(".fna_container tr").not(".fna_answer").click(function() {
		if ($(this).next("tr").hasClass("fna_hidden")) {
			$(".fna_container tr").not(".fna_answer").removeClass("active");
			$(this).addClass("active");
			$(".fna_answer").addClass("fna_hidden").find("div").slideUp(150);
			$(this).next("tr").removeClass("fna_hidden").find("div").slideDown(150);
		} else {
			$(this).removeClass("active");
			$(this).next("tr").addClass("fna_hidden");
			$(this).next("tr").find("div").slideUp(150);
		}
	});

});
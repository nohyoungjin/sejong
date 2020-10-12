str = ''
str += '<div id="gnb">'
str += ''
str += '	<div class="top">'
str += '		<div class="fl">'
str += '			<a href="#"><img src="img/home.png" alt="" /></a>'
str += '			<p class="txtGreeting"><strong>황병준</strong> <span class="txt">님, 방문해 주셔서 감사합니다.</span></p>'
str += '		</div>'
str += '		<div class="fr">'
str += '			<button type="button" class="btn_close">전체메뉴 닫기</button>'
str += '		</div>'
str += '	</div>'
str += ''
str += '	<div class="myinfo">'
str += '		<dl>'
str += '			<dt><em>포인트</em></dt>'
str += '			<dd>124,548 P</dd>'
str += '			<dt><em>자주가는 매장</em></dt>'
str += '			<dd>도담점<span><a href="#"><img src="img/setting.png" alt="" /></a></span></dd>'
str += '			<dt><em>회원번호</em></dt>'
str += '			<dd>85010</dd>
str += '		</dl>'
str += ''
str += '		<div id="bcTarget"></div>'
str += '	</div>'
str += ''
str += '	<ul class="depth1">'
str += '		<li>'
str += '			<a href="#">세종형 로컬푸드</a>'
str += '			<ul class="depth2">'
str += '				<a href="sejong_local.html"><li>세종형 로컬푸드</li></a>'
str += '				<a href="sejong_why.html"><li>왜 로컬푸드인가?</li></a>'
str += '			</ul>'
str += '		</li>'
str += '		<li>'
str += '			<a href="#">싱싱장터</a>'
str += '			<ul class="depth2">'
str += '				<a href="market_ceo.html"><li>소개</li></a>'
str += '				<a href="market_farm_list.html"><li>상품소개</li></a>'
str += '			</ul>'
str += '		</li>'
str += '		<li>'
str += '			<a href="#">싱싱문화관</a>'
str += '			<ul class="depth2">'
str += '				<a href="culture_why.html"><li>소개</li></a>'
str += '				<a href="culture_cook.html"><li>요리교실</li></a>'
str += '				<a href="culture_eat.html"><li>싱싱밥상</li></a>'
str += '			</ul>'
str += '		</li>'
str += '		<li>'
str += '			<a href="#">커뮤니티</a>'
str += '			<ul class="depth2">'
str += '				<a href="comm_notice_list.html"><li>공지사항</li></a>'
str += '				<a href="comm_varius_list.html"><li>이모저모</li></a>'
str += '				<a href="comm_qa_myinfo.html"><li>문의</li></a>'
str += '			</ul>'
str += '		</li>'
str += '		<li>'
str += '			<a href="#">내정보</a>'
str += '			<ul class="depth2">'
str += '				<a href="myinfo_01.html"><li>소비자회원</li></a>'
str += '				<a href="myinfo_06.html"><li>생산자(전용)</li></a>'
str += '			</ul>'
str += '		</li>'
str += '	<ul>'
str += '	<div class="btm">COPYRIGHT 세종로컬푸드주식회사 ALL RIGHTS RESERVED.</div>'
str += '</div>'
str += ''
str += '<div id="dim" class="backface"></div>'
str += ''
str += '<div id="h_search" class="top_search_wrap">'
str += '	<form action="#" method="post" name="">'
str += '		<div class="s_wrap">'
str += '			<div class="fl"><input type="text" name="keyword" class="w100" value=""></div>'
str += '			<div class="fr"><a href="javascript:" class="btn w100">검색</a></div>'
str += '		</div>'
str += '	</form>'
str += '</div>'

document.write(str);

//

$("#bcTarget").barcode("20392948", "codabar",{barWidth:2, barHeight:55, bgColor:"#fff", color:"#000", fontSize:10});

//    바코드 타입    
//    codabar
//    code11 (code 11)
//    code39 (code 39)
//    code93 (code 93)
//    code128 (code 128)
//    ean8 (ean 8)
//    ean13 (ean 13)
//    std25 (standard 2 of 5 - industrial 2 of 5)
//    int25 (interleaved 2 of 5)
//    msi
//    datamatrix (ASCII + extended)
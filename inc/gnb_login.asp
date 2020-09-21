		<div id="gnb">
			<div class="top">
				<div class="fl">
					<a href="#"><img src="img/home.png" alt="" /></a>
					<p class="txtGreeting"><strong>황병준</strong> <span class="txt">님, 방문해 주셔서 감사합니다.</span></p>
				</div>
				<div class="fr">
					<button type="button" class="btn_close">전체메뉴 닫기</button>
				</div>
			</div>
			
			<div class="myinfo">
				<dl>
					<dt><em>포인트</em></dt>
					<dd>124,548 P</dd>
					<dt><em>자주가는 매장</em></dt>
					<dd>도담점<span><a href="#"><img src="img/setting.png" alt="" /></a></span></dd>
					<dt><em>회원번호</em></dt>
					<dd>85010</dd>
				</dl>

				<div id="bcTarget"></div>

				<script type="text/javascript">
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
				</script>
			</div>

			<ul class="depth1">
				<li>
                    <a href="#">세종형 로컬푸드</a>
					<ul class="depth2">
						<a href="sejong_local.html"><li>세종형 로컬푸드</li></a>
						<a href="sejong_why.html"><li>왜 로컬푸드인가?</li></a>
					</ul>
				</li>
				<li>
                    <a href="#">싱싱장터</a>
					<ul class="depth2">
						<a href="market_ceo.html"><li>소개</li></a>
						<a href="#"><li>상품소개</li></a>
					</ul>
				</li>
				<li>
					<a href="#">싱싱문화관</a>
					<ul class="depth2">
						<a href="culture_why.html"><li>소개</li></a>
						<a href="#"><li>요리교실</li></a>
						<a href="#"><li>싱싱밥상</li></a>
					</ul>
				</li>
                <li>
                    <a href="#">커뮤니티</a>
					<ul class="depth2">
						<a href="comm_notice_list.html"><li>공지사항</li></a>
						<a href="#"><li>이모저모</li></a>
						<a href="comm_qa_myinfo.html"><li>문의</li></a>
					</ul>
                </li>
                <li>
                    <a href="#">내정보</a>
					<ul class="depth2">
						<a href="myinfo_01.html"><li>소비자회원</li></a>
						<a href="myinfo_06.html"><li>생산자(전용)</li></a>
					</ul>
                </li>
			</ul>
			<div class="btm">COPYRIGHT 세종로컬푸드주식회사 ALL RIGHTS RESERVED.</div>
		</div>
		<div class="backface" id="dim"></div>

		<div id="h_search" class="top_search_wrap">
			<form name="" method="post" action="#">
				<div class="s_wrap">                    
					<div class="fl"><input type="text" name="keyword" class="w100" value=""></div>
					<div class="fr"><a href="javascript:" class="btn w100" id="">검색</a></div>
				</div>
			</form>
		</div>		
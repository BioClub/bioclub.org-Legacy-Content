

$(function(){
    //-----------------------
    //  base variables
    //-----------------------
    var unit = 32,
        spunit = 20,
        wW,
        wH,
        mobile;

    //-----------------------
    //  detect mobile
    //-----------------------
    function mobileDetect() {
        wW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        wH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (wW < 641) {
            mobile = true;
        } else {
            mobile = false;
        }
    }
    mobileDetect();
    $(window).on("orientationchange resize",function(){
        mobileDetect();
    });


    //-----------------------
    //  top slide
    //-----------------------
    var $topWrapper = $("#top-wrapper"),
        $topCols = $topWrapper.find(".top-cols"),
        $topCol = $topWrapper.find(".top-col"),
        topColNum = $topCol.length,
        topColW,
        transX,
        singleShown = false,
        singleCurrentNum = 0;
	
	function activeAreaH() {
		setTimeout(function(){
			var target = location.hash;
        	var activeHeight = $(target).find('.scrollbar-bioclub').height();
			var text = activeHeight+ ' ,'+ target;
			$topCols.outerHeight(activeHeight+72);
		}, 50);
	}
    if ($("body").hasClass("home") || $("body").hasClass("single")) {

        //layout initial setting
        function layoutAdjust() {
            if (!mobile) {
				$topCols.outerHeight(wH - $('#site-header').innerHeight() + $('#site-footer').innerHeight());
                topColW = wW/3;
            } else {
				var topColHeight = 0;
				$('.scrollbar-bioclub').each(function(i){
					var $this = $(this);
					var thisH = $this.innerHeight();
					if(i === 0) {
						topColHeight = thisH;
					} else {
						if(topColHeight < thisH) {
							topColHeight = thisH;
						}
					}
				});	
				
                $topCols.outerHeight(topColHeight+72);
                topColW = wW ;
            }
                // console.log("wW:"+ wW);
                // console.log("topColW: " + topColW);
            $topCol.outerWidth(topColW);
            $topCols.width(topColW*(topColNum));
            $topCol.each(function(i){
                var $this = $(this);
                $this.css("left", i*topColW)
            });

        }
		

        //change class
        var $gnav = $("#gnav"),
            $gnavLi = $gnav.find("li"),
            selectedLiNum = 0,
            firstTarget = 0,
            borderW = 2,
            urlHash = location.hash;

        if(urlHash){ // URLにアンカーが存在する場合
            selectedLiNum = $gnavLi.index($gnav.find("a[href $= " + urlHash + "]").parent("li"));
        }
        function navChange() {
            $gnavLi.removeClass("on").removeClass("last");
            // console.log("selectedLiNum:"+ selectedLiNum);
            // console.log("topColW:"+ topColW);
            if (!mobile) {
                if (singleShown) { // 詳細ページをモーダル表示中
                    firstTarget = selectedLiNum;
                    singleCurrentNum = selectedLiNum;
                    $gnavLi.eq(firstTarget).addClass("on").addClass("last");
                } else {//詳細ページ非表示
                    if (selectedLiNum == topColNum-1) { // 最後のナビ
                        firstTarget = selectedLiNum - 2;
                    }
                    else if (selectedLiNum == topColNum-2) { //最後から2番目
                        firstTarget = selectedLiNum - 1;
                    } else {
                        firstTarget = selectedLiNum
                    }
                    singleCurrentNum = firstTarget;
                    //onクラス付与
                    $gnavLi.eq(firstTarget).addClass("on");
                    $gnavLi.eq(firstTarget+1).addClass("on");
                    $gnavLi.eq(firstTarget+2).addClass("on").addClass("last");
                }
                transX = (-topColW*(firstTarget)-borderW);

            } else {
                $gnavLi.eq(selectedLiNum).addClass("on");
	            transX = (-topColW*(selectedLiNum));
			}
            //slide
			$('#top-wrapper').scrollLeft(0);
			$topCols.css({
				"transform": "translateX(" + transX + "px)"
			});

        }

        //change url
        function urlChange() {
            var href = $gnav.find(".on").find("a").attr("href").split("#")[1];
            window.history.pushState(null, null, "/#" + href);
        }

        //リサイズ時
        $(window).on("orientationchange resize",function(){
            layoutAdjust();
        });

        //ロード時
        layoutAdjust();
        setTimeout(function(){
            //navChange();
        }, 100);



        //クリック時
        $gnavLi.click(function(){
            /*if ( $("body").hasClass("home") || $("body").hasClass("single") && !mobile) {
                selectedLiNum = $gnavLi.index(this);
                navChange();
                urlChange();
				activeAreaH();
                return false;
            }*/
        });

        //sp swipe
        if (mobile) {
            /*$topCols.swipe( {
                swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
                    // when swiping
                    if (phase!="cancel" && phase!="end") {
                        $topCols.addClass("disable-transition");
                        if (direction == "left") {
                            $topCols.css("transform", "translateX(" + (transX-distance/2) + "px)");
                        } else if (direction == "right") {
                            $topCols.css("transform", "translateX(" + (transX+distance/2) + "px)");
                        }
                    }
                    // when swiped
                    if (phase=="cancel") {
                        $topCols.css("transform", "translateX(" + transX + "px)");
                        $topCols.removeClass("disable-transition");
                    }
                    if (phase=="end") {
                        $topCols.removeClass("disable-transition");
                        $topCols.css({"left": "0"});
            			if(direction == "right" && selectedLiNum != 0) {
                            selectedLiNum --;
                            navChange();
            			}
            			if(direction == "left" && selectedLiNum != topColNum-1) {
                            selectedLiNum ++;
                            navChange();
            			}
                        urlChange();
						
						activeAreaH();
						$('body,html').animate({
							scrollTop:0
						},200);
                    }
                },
                threshold:100,
                maxTimeThreshold:5000,
                fingers:'all',
                allowPageScroll:"vertical",
                excludedElements: "" //enable to swipe <a>
            });*/
			
			if ($("body").hasClass("home")) {
				$("body").addClass('mobile-style');
			}
			
			$(window).on('load',function() {
				if(location.hash) {
					$('body,html').animate({
						scrollTop:0
					},0);
					activeAreaH();
				}
			});
        }

    }
    //-----------------------
    //  single close
    //-----------------------
    var $singleWrapper = $("#single-wrapper");
    var backHref = location.href;
    var backHomeClass = $("body").attr("class");
    var singleHref;

    /*if (!mobile) {
        //詳細ページから流入
        if ($singleWrapper.length) {
            singleShown = true;
            backHref = "/";
            backHomeClass = "home";
            singleHref = location.href;
            // $singleWrapper.scrollbar();
        }
        function backHome() {
            $singleWrapper.addClass("ready");
            $("#single-wrapper-close").hide();
            $("body")
                .removeClass()
                .addClass(backHomeClass);
            setTimeout(function(){
                $singleWrapper.remove();
            }, 400);
            //ナビを戻す
            if (singleCurrentNum == topColNum-1 || singleCurrentNum == topColNum-2 ) { // 最後の or 最後から2番目　のナビ
                selectedLiNum = topColNum-3;
            } else {
                selectedLiNum = singleCurrentNum;
            }
            singleShown = false;
            navChange();

            //戻るボタンで再度開く
            $(window).off("popstate");
            $(window).on( "popstate", function(){
				
                loadSingle();
                // console.log("singleHref:" + singleHref);
                // console.log("popstateで開く");
            });
            //URL変更
            window.history.pushState(null, null, backHref);

        }
        $(document).on("click", "#single-wrapper-close", function(){
            //閉じる処理
            backHome();
        });
    }*/

    //-----------------------
    //  single open
    //-----------------------
    $(".article-ttl a, .thumb a, .ajax").click(function(){
        /*if (!mobile) {
			
            singleHref = $(this).attr("href");
            var parentCol = $(this).parents(".top-col");
            if (parentCol.length) {
                singleCurrentNum = $(".top-col").index($(this).parents(".top-col"));
            }


            //$loader.fadeIn();
            if (singleShown) {
                $singleWrapper.addClass("ready");
                $("body")
                    .removeClass()
                    .addClass("home");
                setTimeout(function(){
                    $singleWrapper.remove();
                    loadSingle();
                }, 400);
                singleShown = false;
            } else {
                loadSingle();
            }
            return false;
        }*/
    });
    function loadSingle() {
        $.ajax({
            url: singleHref,
            success: function(data){
                var parser = new DOMParser();
                var doc = parser.parseFromString(data, "text/html");
                var docClass = doc.body.getAttribute('class');
                var gmap = doc.getElementById('gmap-script');
                if (gmap) {
                    gmap = gmap.innerHTML;
                }
                singleShown = true;

                //body class変更
                $("body").removeClass().addClass(docClass);

                //single追加
                $singleWrapper = $(doc).find("#single-wrapper").addClass("ready");
                $singleWrapper.insertAfter("#site-header");
                setTimeout(function(){
                    $singleWrapper.removeClass("ready");
                    $("#single-wrapper-close").addClass("fixed");
                }, 400);

                $singleWrapper.imagesLoaded(function(){
                    //スライダーセッティング
                    initializeSingle();
                    //google map 描画
                    var script = document.createElement('script');
                    script.innerText =gmap ;
                    script.textContent = gmap;
                    document.body.appendChild(script);
                    //scrollbar
                    // $singleWrapper.find('.scrollbar-bioclub').scrollbar();
                });

                window.history.pushState(null, null, singleHref);

                //戻るボタンを押した時の処理
                $(window).off("popstate");
                $(window).on( "popstate", function(){
                    backHome();
                    // console.log("popstateでバック");
                });

                // データクリア
                parser = doc = script = null;
                $(script).remove();

                //ナビ変更
                $gnavLi.removeClass("on").removeClass("last");
                $gnavLi.eq(singleCurrentNum).addClass("on last");
                setTimeout(function(){
                    transX = (-topColW*(singleCurrentNum)-borderW);
                    $topCols.css({
                        "transform": "translateX(" + transX + "px)"
                    });
                }, 400);
            }
        });
    }


    //-----------------------
    //  scroll
    //-----------------------
    if (!mobile) {
        $('.scrollbar-bioclub').scrollbar({
            "autoScrollSize": true,     // automatically calculate scrollsize
            "autoUpdate": true,         // update scrollbar if content/container size changed
            "debug": false,             // debug mode
            "disableBodyScroll": false, // disable body scroll if mouse over container
            "duration": 200,            // scroll animate duration in ms
            "ignoreMobile": true,      // ignore mobile devices
            "ignoreOverlay": false,     // ignore browsers with overlay scrollbars (mobile, MacOS)
            "scrollStep": 30,           // scroll step for scrollbar arrows
            "showArrows": false,        // add class to show arrows
            "stepScrolling": true,      // when scrolling to scrollbar mousedown position

            "scrollx": null,            // horizontal scroll element
            "scrolly": null,            // vertical scroll element

            "onDestroy": null,          // callback function on destroy,
            "onInit": null,             // callback function on first initialization
            "onScroll": null,           // callback function on content scrolling
            "onUpdate": null            // callback function on init/resize (before scrollbar size calculation)
        });
    }




    //-----------------------
    //  top trend tag toggle
    //-----------------------
    var $trandTag = $("#trend .trend-tags li");
    $trandTag.click(function(e){
		e.preventDefault();
        var $this = $(this),
            tag = $this.data("tag");
        if (tag == "all") {
            $("#trend .article-list li").show();
        } else {
            $("#trend .article-list li").hide();
            $("#trend .article-list li[data-tag=" + tag + "]").show();
        }

        $trandTag.removeClass("on");
        $this.addClass("on");
    });

    //-----------------------
    //  tag modal
    //-----------------------
    var $tagModal = $("#tag-modal"),
        $tagModalClose = $("#tag-modal-close"),
        $tagShow = $("#tag-show");
    $tagShow.click(function(){
        $tagModal.show();
        $tagModalClose.show();
        $("body").addClass("modalShown");
    });
    $tagModalClose.click(function(){
        $tagModal.hide();
        $tagModalClose.hide();
        $("body").removeClass("modalShown");
    });

    //-----------------------
    //  archive tileed layout
    //-----------------------
    var $masonryTarget = $("body.archive .article-list")
    $masonryTarget.imagesLoaded(function(){
        $masonryTarget.masonry({
            itemSelector: '.article',
            transitionDuration: 0
        });
        //微妙なズレが発生するため、2回実行
        setTimeout(function(){
            $masonryTarget.masonry();
        }, 200)
    });

    //-----------------------
    //  single slider
    //-----------------------

    function initializeSingle() {

        //アンカーリンク
        //var $singleWrapper = $("#single-wrapper");
        $singleWrapper.find('a[href^=#]').click(function(){
            target = $(this).attr('href');
            targetP = $(target).position();
            scrollH = $singleWrapper.scrollTop();
            position = targetP.top + scrollH - unit;



            if (mobile) {
                $("html, body").animate({scrollTop:position}, 400);
            } else {
                $singleWrapper.animate({
                  scrollTop: position
                }, 400);
            }

            return false;
        });

        //スライダー
        $(".slider").each(function(){
            var $slider = $(this),
                $sliderUl = $slider.find("ul"),
                $sliderLi = $slider.find("li"),
                sliderLiW = $slider.width(),
                sliderLiNum = $sliderLi.length,
                currentPos = 0,
                $navB = $slider.find(".nav-b"),
                targetPos,
                $targetSlide,
                $currentSlide,
                gutter = 24,
                transX = 0;

            if (mobile) {
                gutter = 10;
            }

            //ナビゲーションをスライドの数だけ追加
            for(var i = 0; i < sliderLiNum; i++) {
              $navB.append("<div>");
            }
            $navB.find("div:first-child").addClass("on");

            //initial layout
            $sliderUl.width( (sliderLiW + gutter) *sliderLiNum );
            $sliderLi.width(sliderLiW);

            //次のスライド
            function nextSlide() {
                if (currentPos != sliderLiNum-1) {
                    targetPos = currentPos+1
                    changeSlide();
                }
            }
            //前のスライド
            function prevSlide() {
                if (currentPos != 0) {
                    targetPos = currentPos-1
                    changeSlide();
                }
            }

            //特定のスライド
            $navB.find("div").click(function(){
                if(! $sliderLi.is(':animated') ){
                    targetPos = $navB.find("div").index(this);
                    changeSlide();
                }
            });

            //共通箇所
            function changeSlide() {
                // console.log("targetPos" + targetPos);
                // console.log("currentPos" + targetPos);
                transX = -targetPos*(sliderLiW + gutter)
                $sliderUl.css({
                    transform: "translateX(" + transX + "px)"
                }, 200);
                $navB.find("div").removeClass("on");
                $navB.find("div").eq(targetPos).addClass("on");
                currentPos = targetPos;
            }

            //bind
            var $navR = $slider.find(".nav-r"),
                $navL = $slider.find(".nav-l");
            $navR.click(function(){
                if(! $sliderLi.is(':animated') ){
                    nextSlide();
                }
            });
            $navL.click(function(){
                if(! $sliderLi.is(':animated') ){
                    prevSlide();
                }
            });
            if (mobile) {
            	$slider.swipe({
                    swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
                        // when swiping
                        if (phase!="cancel" && phase!="end") {
                            $sliderUl.addClass("disable-transition");
                            if (direction == "left") {
                                $sliderUl.css("transform", "translateX(" + (transX-distance/2) + "px)");
                            } else if (direction == "right") {
                                $sliderUl.css("transform", "translateX(" + (transX+distance/2) + "px)");
                            }
                        }
                        // when swiped
                        if (phase=="cancel") {
                            $sliderUl.removeClass("disable-transition");
                            $sliderUl.css("transform", "translateX(" + transX + "px)");
                        }
                        if (phase=="end") {
                            $sliderUl.removeClass("disable-transition");
                            if(direction == "right" && currentPos != 0) {
                                prevSlide();
                            }
                            else if(direction == "left" && currentPos != sliderLiNum-1) {
                                nextSlide();
                            } else {
                                //cancel
                                $sliderUl.css("transform", "translateX(" + transX + "px)");
                            }
                        }
                    },
                    threshold:100,
                    maxTimeThreshold:5000,
                    fingers:'all',
                    allowPageScroll:"vertical",
                    excludedElements: "" //enable to swipe <a>
            	});
            }
        });
    }

    if ($singleWrapper.length) {
        $singleWrapper.imagesLoaded(function(){
            initializeSingle();
        });
    }

	//logo slider
	var logoImgSlider = $('#logo-img-slider');
	if(logoImgSlider.length) {
		logoImgSlider.slick({
			inifinite:true,
			arrows:false,
			autoplay:false,
			fade: true,
			speed:60,
			swipe:false
		});
		setTimeout(function(){
			logoImgSlider.slick('slickNext');
			setInterval(function(){
				logoImgSlider.slick('slickNext');
			}, 260);
		}, 260);
	}

	//body固定関数
	var bodyElm = $('body');
	var scrollPosi;
	function bodyFix() {
		scrollPosi = $(window).scrollTop();
		bodyElm.css({
			'position': 'fixed',
			'width': '100%',
			'z-index': '1',
			'top': -scrollPosi
		});
	}
	
	//body fixリセット
	function bodyFixReset() {
		bodyElm.css({
			'position': 'relative',
			'width': 'auto',
			'top':'auto'
		});
		//scroll位置を調整
		$("html, body").scrollTop(scrollPosi);
	}

	//nav open
	var openGlobalNav = $('#open-global-nav');
	$('#open-global-nav-btn').on('click', function () {
		openGlobalNav.fadeIn();
		bodyFix();
	});
	$('#open-global-nav-close').on('click', function () {
		bodyFixReset();
		openGlobalNav.fadeOut();
	});
	
	//smooth scroll
	$('.smooth a').click(function(){
		var speed = 600;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	//toggle
	$('#project-toggle-btn').on('click', function () {
		$(this).fadeOut();
		$('#post-set-toggle-contents').fadeIn();
		initializeSingle();
		return false;
	});
});

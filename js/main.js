$(function(){
    //-----------------------------------------------------
    //*-----헤더 스크롤------*
    $(window).on('scroll', function(){
        if($(window).width() > 769) {
            if($(window).scrollTop()>0){
                $('.header').addClass('on')
            }else{
                $('.header').removeClass('on')
            }
        }    
    });
    //*----------------반응형 헤더------------*//
    $(window).on('scroll', function(){
        if($(window).width() < 769) {
            if($(window).scrollTop()>0){
                $('.header').addClass('on')
            }else{
                $('.header').removeClass('on')
            }
        }    
    });

    $('.mopen').on('click', function(){
        $('nav').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('nav>ul>li').on('click',function(){
        if($('nav').hasClass('on')) {
        $(this).addClass('on').siblings().removeClass('on');
        $(this).siblings().find('.gnb02').stop().slideUp();   
        }
    });
    $('.depth01>ul>li').on('click', function(){
        if($('nav').hasClass('on')) {
            $('.depth02').stop().slideUp();
            $(this).find('.depth02').stop().slideToggle();
        }    

    })


    //*-----메인비주얼------*
    $('.main_silder').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        fade:true,
        dots:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow:1,
              }
            }
          ]
    });

    

    //*-----건국소식 탭메뉴------*
    $('.tab_menu li').on('click',function(){
        var $this=$(this);
        var idx=$(this).index()
        $('.tab_page>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });

    //*-----투데이건국 슬라이드------*
    $('.daysider').slick({
        arrows:false,
        autoplay:false,
        dots:true,
    });
    $('.to_slider .next').on('click',function(){
        $('.daysider').slick('slickNext');
    });
    $('.to_slider .prev').on('click',function(){
        $('.daysider').slick('slickPrev');
    });

    $('.cov_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 1,
        vertical:true,
    })

    //*-----건국피플 슬라이드------*
    $('.pe_slider').slick({
        arrows:true,
        autoplay:true,
        slidesToShow:4,
        nextArrow:'<div class="next"><a href="#!"><i class="xi-arrow-right"></i></a></div>',
        prevArrow:'<div class="prev"><a href="#!"><i class="xi-arrow-left"></i></a></div>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]   

    });
    //*-----건국미디어 슬라이드------*
    $('.md_slider').slick({
        arrows:false,
        autoplay:false,
        slidesToShow:2,
        centerMode:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows:true,
                nextArrow:'<div class="next"><a href="#!"><i class="xi-arrow-right"></i></a></div>',
                prevArrow:'<div class="prev"><a href="#!"><i class="xi-arrow-left"></i></a></div>',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode:false,
              }
            }
        ] 

    });
    $('.media .next').on('click',function(){
        $('.md_slider').slick('slickNext');
    });


    //*-----스크롤탑 이벤트------*
    $('.scroll_banner .totop').on('click', function(){
        $('html, body').animate({scrollTop:0},600)
    });




    //-----------------------------------------------------
})
$(document).ready(function(){
    // 화면이 스크롤되어서 첫번째 section이 지나가면 header에 active 설정
    $(window).scroll(function(){
        // 윈도우의 scrollTop 값을 top변수에 저장
        var top=$(this).scrollTop();
        // 만약 top변수의 값이 0보다 크면 header에 active 설정
        if(top > 0){
            $('header').addClass('active');
            // top변수의 값이 0보다 작거나 같음면 header에서 active제거
        }else{
            $('header').removeClass('active');
        }
    });
    // menu_btn
    $('.menu_btn').click(function(){
        $('header nav').animate({'right':0});
    });
    // close_btn
    $('.close_btn').click(function(){
        $('header nav').animate({'right':'-100vw'});
    });
    // header nav ul 메뉴
    $('header nav > ul > li > a').click(function(){
        if($(this).attr('class') != 'active') {
            $('header nav > ul > li >a').removeClass
            ('active');
            $(this).addClass('active');
            $('header nav .sub').slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });
    // 메인슬라이드
    var swiper = new Swiper(".mySwiper", {
        effect:'fade',
        loop:true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".mySwiper .swiper-pagination",
            clickable:true
        },
    });
    // 탬메뉴(tab)
    // 모든 tab_list안보임
    $('.tab_list').hide();
    // 첫번째 tab_list만 보임
    $('.tab_list').eq(0).fadeIn();
    // idx(qustn tjsdjs)
    var idx=0;

    $('.tab_title ul li').click(function(){
        // 클릭한 li의 인덱스 번호를 idx변수에 저장
        var idx=$(this).index();
        // 모든 li에서 active 제거
        $('.tab_title ul li').removeClass('active');
        // 클릭한 li의 active 설정
        $(this).addClass('active');
        // 모든 .tab_list 안보임
        $('.tab_list').hide();
        // idx변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
        $('.tab_list').eq(idx).fadeIn();
        return false;
    });
    // 자동 탭메뉴
    var auto=setInterval(autoTab, 4000);
    // autoTab함수 선언
    function autoTab(){
        // idx 변수의 값을 1씩 증가시킴
        idx++;
        // 만약 idx값이 2보다 크면 0으로 초기화 
        if(idx>2){ idx=0;}
        // 모든 li에서 active 제거
        $('.tab_title ul li').removeClass('active');
        // 클릭한 li의 active 설정
        $('.tab_title ul li').eq(idx).addClass('active');
        // 모든 .tab_list 안보임
        $('.tab_list').hide();
        // idx변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
        $('.tab_list').eq(idx).fadeIn();
    }
    // s3 swiper2 슬라이드
    var swiper2 = new Swiper(".mySwiper2", {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".mySwiper2 .swiper-button-next",
            prevEl: ".mySwiper2 .swiper-button-prev",
          },
    });
    var swiper3 = new Swiper(".mySwiper3", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: "auto",
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
    $('.myswiper3').hover(function(){
        swiper.autoplay.stop();
    },function(){
        swiper.autoplay.start();
    });
    // footer  푸터 .family 클릭 이벤트 설정
    var on=0;
    $('.family .fa_btn').click(function(){
        if(on==0){
            on=1;
            $('.family').addClass('active');
        }else{
            on=0;
            $('.family').removeClass('active');
        }
        return false;
    });
    // top 버튼
    $('.top').click(function(){
        $('html, body').animate({'scrollTop':0});
    });
});//document
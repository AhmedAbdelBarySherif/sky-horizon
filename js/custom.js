$(document).ready(function() {

    //Menu in Desktop
    $(".nav_btn").click(function() {
        $(".main-menu").animate({ right: 0 }, 400);
    });

    $(".main-menu i.fa-close").click(function() {
        $(".main-menu").animate(
        { right: "-" + $(".main-menu").outerWidth() }, 400 );
    });
    
    //Menu in Mobile
    $('#openMenuMobile').click(function () {

        if( $(this).hasClass('fa-bars') ) {
            $(this).removeClass('fa-bars').addClass('fa-close');
            $('.main-menu-mobile').slideDown();
        } else if( $(this).hasClass('fa-close') ) {
            $(this).removeClass('fa-close').addClass('fa-bars');
            $('.main-menu-mobile').slideUp();
        }
 
    });

    //Adapt height of Hero Section 
    $('.hero').height( $(window).height() );

    $(".nav_btn").click(function(e) {
        e.stopPropagation();
    });

    //Go Down from hero section to the next section
    $('.go-down').click(function () {
        $('html, body').animate({
            scrollTop: $('.breif').offset().top - $('nav').height()
        }, 1000);
    });

    //Carousel Slider in home page related testimonials
    $(".carousel").carousel({
        pause: true,
        interval: false
    });

    //Adapt img height in contact us page
    $('.contact-core--img').height( $('.contact-core--form').height() );

    // For Resposive =============================================================================================================
    $(window).resize(function () {
        
        $('.hero').height( $(window).height() );    
        
        //Adapt img height in contact us page
        $('.contact-core--img img').height( $('.contact-core--form').height() );
        
        if($(this).width() < 800) {
            $('.blogs-two--discover').width( $(window).width() ).css( 'margin-left', '-' + $('.blogs-two').css('padding-left') );
        }
    });

    if($(window).width() < 800) {
        $('.blogs-two--discover').width( $(window).width() ).css( 'margin-left', '-' + $('.blogs-two').css('padding-left') );
    }

    //Services page controls
    $('.services-controls ul li').each(function () {
        $(this).click(function() {
            $(this).addClass('active_li').siblings('li').removeClass('active_li');
            let servicesControlsUlLi = $(this).data('class');
            $(servicesControlsUlLi).show().siblings().hide();
        });
    });

    $('.bottom-links ul li').each(function () {
        $(this).click(function() {
            $(this).addClass('font-weight-bold').siblings('li').removeClass('font-weight-bold');
            let servicesControlsUlLi = $(this).data('class');
            $(servicesControlsUlLi).show().siblings().hide();
            $('html, body').animate({scrollTop: $(servicesControlsUlLi).offset().top}, 400)
        });
    });

    //Home > service blocks
    $('.blocks-ser--block.three').height( $('.blocks-ser--block.two').height() );
    $(window).resize(function () {
        $('.blocks-ser--block.three').height( $('.blocks-ser--block.two').height() );
    });

    //Adapt height of left menu in Dashboard
    $('.left-menu').height( $('.main-dashboard').height() );

    //Dashboard company page
    $('.tabs-flow li').click(function (e) {
        // $(this).addClass('active_li_dash_service').siblings('li').removeClass('active_li_dash_service');
    });

    $('.input-list i').click(function() {
        $('.input-list input').click();
    });

    $('.input-file .cover-file').click(function () {
        $('.input-file #filing').click();
    });

    $('.input-file #filing').change(function () {
        let fileInputVal = $(this).val().slice(12);
        $('.input-file .be_value').text(fileInputVal).css('color', '#333');
    });

    // Notificaiton Alert in Dashboard 
    function showBlueAlert() {
        $('.alerting').animate({bottom: '20px', 'opacity': 1}, 400);
    }
    // showBlueAlert()

    $('.add-service select').change(function () {
        $(this).css('color', '#495057')
    });

    // $(window).resize(function() {
    //     if( $(this).width() < 778 ) {
    //         $('.testi .carousel-inner .carousel-item').each(function() {

    //             let words = $(this).children('p').text().trim().slice(0, 140) + '...';
        
    //             $(this).children('p').text( words );
                
    //         });    
    //     } else {

    //             words = $(this).children('p').text().trim().slice(0);
        
    //             $(this).children('p').text( words );
                
    //     }
    // });

    // if( $(this).width() < 778 ) {
    //     $('.testi .carousel-inner .carousel-item').each(function() {

    //         let words = $(this).children('p').text().trim().slice(0, 140) + '...';
    
    //         $(this).children('p').text( words );
            
    //     });    
    // } else {

    //         words = $(this).children('p').text().trim().slice(0);
    
    //         $(this).children('p').text( words );
            
    // }



});


(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'html',
        transition: function (url) { window.location.href = url; }
    });

    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height() / 2;

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display', 'flex');
        } else {
            $("#myBtn").css('display', 'none');
        }
    });

    $('#myBtn').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if ($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }


    if ($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top', 0);
    }
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
    }

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top', 0);
        }
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
        }
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function () {
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for (var i = 0; i < arrowMainMenu.length; i++) {
        $(arrowMainMenu[i]).on('click', function () {
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function () {
        if ($(window).width() >= 992) {
            if ($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display', 'none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function () {
                if ($(this).css('display') == 'block') {
                    console.log('hello');
                    $(this).css('display', 'none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });

        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function () {
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity', '0');
    });

    $('.js-hide-modal-search').on('click', function () {
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity', '1');
    });

    $('.container-search-header').on('click', function (e) {
        e.stopPropagation();
    });


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({ filter: filterValue });
        });

    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                percentPosition: true,
                animationEngine: 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function () {
        $(this).on('click', function () {
            for (var i = 0; i < isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click', function () {
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if ($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }
    });

    $('.js-show-search').on('click', function () {
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if ($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }
    });




    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click', function () {
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click', function () {
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click', function () {
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click', function () {
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function () {
        var numProduct = Number($(this).next().val());
        if (numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function () {
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function () {
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function () {
            var index = item.index(this);
            var i = 0;
            for (i = 0; i <= index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for (var j = i; j < item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function () {
            var index = item.index(this);
            rated = index;
            $(input).val(index + 1);
        });

        $(this).on('mouseleave', function () {
            var i = 0;
            for (i = 0; i <= rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for (var j = i; j < item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });

    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click', function (e) {
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click', function () {
        $('.js-modal1').removeClass('show-modal1');
    });

    /*==================================================================
    [ Show modal2 ]*/
    $('.js-show-modal2').on('click', function (e) {
        e.preventDefault();
        $('.js-modal2').addClass('show-modal1');
    });

    $('.js-hide-modal2').on('click', function () {
        $('.js-modal2').removeClass('show-modal1');
    });

    /*==================================================================
    [ Show modal3 ]*/
    $('.js-show-modal3').on('click', function (e) {
        e.preventDefault();
        $('.js-modal3').addClass('show-modal1');
    });

    $('.js-hide-modal3').on('click', function () {
        $('.js-modal3').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal4 ]*/
    $('.js-show-modal4').on('click', function (e) {
        e.preventDefault();
        $('.js-modal4').addClass('show-modal1');
    });

    $('.js-hide-modal4').on('click', function () {
        $('.js-modal4').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal6 ]*/
    $('.js-show-modal6').on('click', function (e) {
        e.preventDefault();
        $('.js-modal6').addClass('show-modal1');
    });

    $('.js-hide-modal6').on('click', function () {
        $('.js-modal6').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal7 ]*/
    $('.js-show-modal7').on('click', function (e) {
        e.preventDefault();
        $('.js-modal7').addClass('show-modal1');
    });

    $('.js-hide-modal7').on('click', function () {
        $('.js-modal7').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal8 ]*/
    $('.js-show-modal8').on('click', function (e) {
        e.preventDefault();
        $('.js-modal8').addClass('show-modal1');
    });

    $('.js-hide-modal8').on('click', function () {
        $('.js-modal8').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal9 ]*/
    $('.js-show-modal9').on('click', function (e) {
        e.preventDefault();
        $('.js-modal9').addClass('show-modal1');
    });

    $('.js-hide-modal9').on('click', function () {
        $('.js-modal9').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal10 ]*/
    $('.js-show-modal10').on('click', function (e) {
        e.preventDefault();
        $('.js-modal10').addClass('show-modal1');
    });

    $('.js-hide-modal10').on('click', function () {
        $('.js-modal10').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal11 ]*/
    $('.js-show-modal11').on('click', function (e) {
        e.preventDefault();
        $('.js-modal11').addClass('show-modal1');
    });

    $('.js-hide-modal11').on('click', function () {
        $('.js-modal11').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal12 ]*/
    $('.js-show-modal12').on('click', function (e) {
        e.preventDefault();
        $('.js-modal12').addClass('show-modal1');
    });

    $('.js-hide-modal12').on('click', function () {
        $('.js-modal12').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal13 ]*/
    $('.js-show-modal13').on('click', function (e) {
        e.preventDefault();
        $('.js-modal13').addClass('show-modal1');
    });

    $('.js-hide-modal13').on('click', function () {
        $('.js-modal13').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal14 ]*/
    $('.js-show-modal14').on('click', function (e) {
        e.preventDefault();
        $('.js-modal14').addClass('show-modal1');
    });

    $('.js-hide-modal14').on('click', function () {
        $('.js-modal14').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal15 ]*/
    $('.js-show-modal15').on('click', function (e) {
        e.preventDefault();
        $('.js-modal15').addClass('show-modal1');
    });

    $('.js-hide-modal15').on('click', function () {
        $('.js-modal15').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal16 ]*/
    $('.js-show-modal16').on('click', function (e) {
        e.preventDefault();
        $('.js-modal16').addClass('show-modal1');
    });

    $('.js-hide-modal16').on('click', function () {
        $('.js-modal16').removeClass('show-modal1');
    });


    /*==================================================================
    [ Show modal17 ]*/
    $('.js-show-modal17').on('click', function (e) {
        e.preventDefault();
        $('.js-modal17').addClass('show-modal1');
    });

    $('.js-hide-modal17').on('click', function () {
        $('.js-modal17').removeClass('show-modal1');
    });
    /*==================================================================
    [ Show modal18 ]*/
    $('.js-show-modal18').on('click', function (e) {
        e.preventDefault();
        $('.js-modal18').addClass('show-modal1');
    });

    $('.js-hide-modal18').on('click', function () {
        $('.js-modal18').removeClass('show-modal1');
    });

    /*==================================================================
    [ Show modal19 ]*/
    $('.js-show-modal19').on('click', function (e) {
        e.preventDefault();
        $('.js-modal19').addClass('show-modal1');
    });

    $('.js-hide-modal19').on('click', function () {
        $('.js-modal19').removeClass('show-modal1');
    });

    /*==================================================================
    [ Show modal20 ]*/
    $('.js-show-modal20').on('click', function (e) {
        e.preventDefault();
        $('.js-modal20').addClass('show-modal1');
    });

    $('.js-hide-modal20').on('click', function () {
        $('.js-modal20').removeClass('show-modal1');
    });

    /*==================================================================
    [ Show modal21 ]*/
    $('.js-show-modal21').on('click', function (e) {
        e.preventDefault();
        $('.js-modal21').addClass('show-modal1');
    });

    $('.js-hide-modal21').on('click', function () {
        $('.js-modal21').removeClass('show-modal1');
    });






})(jQuery);

 /// <reference path="jquery-1.12.3.js" />

 (function ($) {
    var list = [];

    /* function to be executed when product is selected for comparision*/

    $(document).on('click', '.addToCompare', function () {
        $(".comparePanle").show();
        $(this).toggleClass("rotateBtn");
        $(this).parents(".selectProduct").toggleClass("selected");
        var productID = $(this).parents('.selectProduct').attr('data-title');

        var inArray = $.inArray(productID, list);
        if (inArray < 0) {
            if (list.length > 2) {
                $("#WarningModal").show();
                $("#warningModalClose").click(function () {
                    $("#WarningModal").hide();
                });
                $(this).toggleClass("rotateBtn");
                $(this).parents(".selectProduct").toggleClass("selected");
                return;
            }

            if (list.length < 3) {
                list.push(productID);

                var displayTitle = $(this).parents('.selectProduct').attr('data-id');

                var image = $(this).siblings(".productImg").attr('src');

                $(".comparePan").append('<div id="' + productID + '" class="relPos titleMargin w3-margin-bottom   w3-col l3 m4 s4"><div class="w3-white titleMargin"><a class="selectedItemCloseBtn w3-closebtn cursor">&times</a><p id="' + productID + '" class="titleMargin1">' + displayTitle + '</p></div></div>');
            }
        } else {
            list.splice($.inArray(productID, list), 1);
            var prod = productID.replace(" ", "");
            $('#' + prod).remove();
            hideComparePanel();

        }
        if (list.length > 1) {

            $(".cmprBtn").addClass("active");
            $(".cmprBtn").removeAttr('disabled');
        } else {
            $(".cmprBtn").removeClass("active");
            $(".cmprBtn").attr('disabled', '');
        }

    });
    /*function to be executed when compare button is clicked*/
    $(document).on('click', '.cmprBtn', function () {
        if ($(".cmprBtn").hasClass("active")) {
            /* this is to print the  features list statically*/
            $(".contentPop").append('<div class="w3-col s3 m3 l3 compareItemParent relPos">' + '<ul class="product">' + '<li class=" relPos compHeader"><p class="w3-display-middle">Features</p></li>' + '<li>Title</li>' + '<li>Size</li>' + '<li>Weight</li>' + '<li>Processor</li>' + '<li>Battery</li></ul>' + '</div>');

            for (var i = 0; i < list.length; i++) {
                /* this is to add the items to popup which are selected for comparision */
                product = $('.selectProduct[data-title="' + list[i] + '"]');
                var image = $('[data-title=' + list[i] + ']').find(".productImg").attr('src');
                var title = $('[data-title=' + list[i] + ']').attr('data-id');
                /*appending to div*/
                $(".contentPop").append('<div class="w3-col s3 m3 l3 compareItemParent relPos">' + '<ul class="product">' + '<li class="compHeader"><img src="' + image + '" class="compareThumb"></li>' + '<li>' + title + '</li>' + '<li>' + $(product).data('size') + '</li>' + '<li>' + $(product).data('weight') + '<li>' + $(product).data('processor') + '</li>' + '<li>' + $(product).data('battery') + '</ul>' + '</div>');
            }
        }
        $(".modPos").show();
    });

    /* function to close the comparision popup */
    $(document).on('click', '.closeBtn', function () {
        $(".contentPop").empty();
        $(".comparePan").empty();
        $(".comparePanle").hide();
        $(".modPos").hide();
        $(".selectProduct").removeClass("selected");
        $(".cmprBtn").attr('disabled', '');
        list.length = 0;
        $(".rotateBtn").toggleClass("rotateBtn");
    });

    /*function to remove item from preview panel*/
    $(document).on('click', '.selectedItemCloseBtn', function () {

        var test = $(this).siblings("p").attr('id');
        $('[data-title=' + test + ']').find(".addToCompare").click();
        hideComparePanel();
    });

    function hideComparePanel() {
        if (!list.length) {
            $(".comparePan").empty();
            $(".comparePanle").hide();
        }
    }
})(jQuery);

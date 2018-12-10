        //Modified script from original https://codepen.io/desirecode/pen/MJPJqV
        $(document).ready(function() {
            $(window).scroll(function() {
                let percentage = $(this).scrollTop()/$(document).height()*100+10;
                if ($(this).scrollTop() > 500) {
                    $('.tassel').fadeIn();
                    $('.rope').fadeIn();
                    $('.tassel').css("top", percentage+"vh");
                    $('.rope').height(percentage+"vh");
                } else {
                    $('.tassel').fadeOut();
                    $('.rope').fadeOut();
                }
            });
            $('.tassel').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        });

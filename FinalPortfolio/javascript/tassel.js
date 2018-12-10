        //Modified script from original https://codepen.io/desirecode/pen/MJPJqV
        $(document).ready(function() {
            $(window).scroll(function() {
				//tassel appears after 500 doc length from top
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

			//click on tassel to go back to top
            $('.tassel').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        });

$(".mainmenu").click(function (){
    $(this).next(".submenu").slideToggle("slow");

});



        let article = ("article0.txt"); // sets default article element

        $("article").load(article); // retrieves only default element

        $("form").click(function() {
            article = $('input[name=content]:checked').val();
            $("article").load(article);
        });

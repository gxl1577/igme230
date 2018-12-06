$(".mainmenu").click(function (){
    $(this).next(".submenu").slideToggle("slow");

});



        let article = ("article0.txt"); // sets default article element
        $("form input").val(article); // changes menu option to default
        $("article").load(article); // retrieves only default element

        $("form").change(function() {
            article = $("form input").val();
            $("article").load(article);
        });


/* Don't use <script> tags in a linked js file! */


//let menuitem= document.querySelector("nav .menubox:nth-of-type(2) .menuitem");
//let submenu= document.querySelector("nav .menubox:nth-of-type(2) .menuitem .submenu");


//menuitem.onclick = function (e) {
//            submenu.style.visibility = "visible";
//            //submenu.style.display = "block";
//        }

//$(".menuitem:first-of-type").click(function (){
//    $(".submenu:first-of-type").slideToggle("slow");
//
//});
//
//$(".menuitem").next().click(function (){
//    $(".submenu").next().slideToggle("slow");
//
//});
//

$(".menuitem").click(function (){
    $(this).next(".submenu").slideToggle("slow");

});



        let content = ("content1.txt"); // sets default content element
        $("#choose-content").val(content); // changes menu option to default
        $("#content").load(content); // retrieves only default element

        $("#choose-content").change(function() {
            content = $(this).val();
            $("#content").load(content);
        });

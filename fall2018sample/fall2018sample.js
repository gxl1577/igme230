/* Don't use <script> tags in a linked js file! */


let menuitem= document.querySelector("nav .menubox:nth-of-type(2) .menuitem");
let submenu= document.querySelector("nav .menubox:nth-of-type(2) .menuitem .submenu");


//menuitem.onclick = function (e) {
//            submenu.style.visibility = "visible";
//            //submenu.style.display = "block";
//        }

$(".menuitem").click(function (){
    $(".submenu").slideToggle("slow");

});



let verse = ("content1.txt") // sets default verse element
        $("#choose-content").val(verse); // changes menu option to default
        $("#content").load(verse); // retrieves only default element

        $("#choose-content").change(function() {
            verse = $(this).val();
            $("#content").load(verse);
        });

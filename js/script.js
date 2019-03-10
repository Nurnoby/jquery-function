$(document).ready(function(){

      // hide function start
      $(".hide").click(function(){
        $(".h1").hide("slow");
      });
      // hide function end

      // show function start
      $(".show").click(function(){
        $(".h1").show("slow");
      });
      // show function end

      // toggle function start
      $(".toggle").click(function(){
        $(".h1").toggle("slow");
      });
      // toggle function end

      // fadeout function start
      $(".fadeout").click(function(){
        $(".h1").fadeOut("slow");
      });
      // fadeout function end

      // fadein function start
      $(".fadein").click(function(){
        $(".h1").fadeIn("slow");
      });
      // fadein function end

      // fadetoggle function start
      $(".fadetoggle").click(function(){
        $(".h1").fadeToggle("slow");
      });
      // fadetoggle function end

      // fadeto function start
      $(".fadeto").click(function(){
        $(".h1").fadeTo("slow", .5);
      });
      // fadeto function end     
      
   

    });

// jquery function end

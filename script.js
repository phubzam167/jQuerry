$(document).ready(function(){
    $("#menu-bar").mouseenter(function(){
      $("#drop-down").toggle();
    });
  });

  $(document).ready(function(){
    $("img").click(function(){
      $("p").slideToggle("slow");
    });
  });
  
  $(document).ready(function(){
    $(".play").click(function(){
      $("#back").show("slow", function(){
        alert("Enjoy Dumbling!");
      });
    });
  });
 
  $(document).ready(function(){
    $(".return").click(function(){
      $("#back").hide(1000);
    });
  });

  $(document).ready(function(){
    $(".play2").click(function(){
      $("#back2").show("slow", function(){
        alert("i love kitten!");
      });
    });
  });
  $(document).ready(function(){
    $(".return2").click(function(){
      $("#back2").hide(1000);
    });
  });

  $(document).ready(function(){
    $(".play3").click(function(){
      $("#back3").show("slow", function(){
        alert("Football is my passion!");
      });
    });
  });
  $(document).ready(function(){
    $(".return3").click(function(){
      $("#back3").hide(1000);
    });
  });
 

  // recipe
  $(document).ready(function(){
    $("#recipe").click(function(){
      $(".card-wrapper").slideDown("slow");
    });
  });

$(document).ready(function(){
  $("#move-back").click(function(){
    $(".card-wrapper").fadeOut(3000);
  });
});


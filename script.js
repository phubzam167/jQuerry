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


$(document).ready(function(){
  $("#sign-up").click(function(){
    $("#sign-con").toggle();
  });
});

$(document).ready(function(){  
  $('.phone').inputmask('+975-12345678');   
});  


$(document).ready(function(){
  $("#sign-up").click(function(){
    $(".modal_box").addClass("active");
  });

  $(".modal_close").click(function(){
    $(".modal_box").removeClass("active");
  });
});

$(document).ready(function(){
  $("#contact").submit(function(){
    alert("Submited!");
    var $inputs = $('#contact :input');

    var values = {};
    $inputs.each(function(){
      values[this.name] = $(this).val();
    });
    alert(values['name']);
    alert(values['email']);
    alert(values['phone']);
  });
});
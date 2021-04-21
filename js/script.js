$(document).ready(function() {
  $("#design").click(function(){
    $("#text1").toggle(1000);
  });
})
$(document).ready(function() {
$("#dev").click(function(){
  $("#text2").toggle(1000);
  });
})
$(document).ready(function() {
  $("#prod").click(function(){
    $("#text3").toggle(1000);
    });
  })

  $(document).ready(function() {
    $("#one").mouseenter(function(){
      $("#oneP").show();
      }),$("#one").mouseleave(function(){
        $("#oneP").hide()
      });
      
    })

    $(document).ready(function() {
      $("#two").mouseenter(function(){
        $("#twoP").show();
        }),$("#two").mouseleave(function(){
          $("#twoP").hide()
        });
        
      })
      $(document).ready(function() {
        $("#three").mouseenter(function(){
          $("#threeP").show();
          }),$("#three").mouseleave(function(){
            $("#threeP").hide()
          });
          
        })
        $(document).ready(function() {
          $("#four").mouseenter(function(){
            $("#fourP").show();
            }),$("#four").mouseleave(function(){
              $("#fourP").hide()
            });
            
          })
          $(document).ready(function() {
            $("#five").mouseenter(function(){
              $("#fiveP").show();
              }),$("#five").mouseleave(function(){
                $("#fiveP").hide()
              });
              
            })
            $(document).ready(function() {
              $("#six").mouseenter(function(){
                $("#sixP").show();
                }),$("#six").mouseleave(function(){
                  $("#sixP").hide()
                });
                
              })
              $(document).ready(function() {
                $("#seven").mouseenter(function(){
                  $("#sevenP").show();
                  }),$("#seven").mouseleave(function(){
                    $("#sevenP").hide()
                  });
                  
                })
                $(document).ready(function() {
                  $("#eight").mouseenter(function(){
                    $("#eightP").show();
                    }),$("#eight").mouseleave(function(){
                      $("#eightP").hide()
                    });
                    
                  })

$(document).ready(function() {
  $("#submit").click(function(){
   if ("name" && "#email" && "#message" !== "null")
   alert("Your message has been received");
   else{
     alert("Please check you have entered correct email address")
   }
  });
})
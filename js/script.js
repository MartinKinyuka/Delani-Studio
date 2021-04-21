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
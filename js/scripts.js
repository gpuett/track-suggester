$(document).ready(function(){
  $("#suggest").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("#develop").val());
    var q2 = parseInt($("#work").val());
    var q3 = parseInt($("#pastime").val());
    console.log(q3);
    var q4 = parseInt($("#tenyears").val());
    var q5 = parseInt($("#describe").val());
    var result = q1 + q2 + q3 + q4 + q5
      if (result <= 5 && q3 === 1) {
        $(".android").show();
      } else if (q4 === 2 || result <=10) {
        $(".react").show();
      } else {
        $(".net").show();
      }
  });
});

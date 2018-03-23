$(document).ready(function(){
  $("#suggest").submit(function(event){
    event.preventDefault();
    $("#quiz").hide();
    var name = $("#name").val();
    var q1 = parseInt($("#develop").val());
    var q2 = parseInt($("#work").val());
    var q3 = parseInt($("#pastime").val());
    var q4 = parseInt($("#tenyears").val());
    var q5 = parseInt($("#describe").val());
    var q6 = parseInt($("#music").val());
    var code = $("input:radio[name=code]:checked").val();
    console.log(code);
    var result = q1 + q2 + q3 + q4 + q5 + q6
      if (q1 === 0 || q2 === 0 || q3 ===0 || q4 === 0 || q5 === 0 || q6 === 0) {
        $(".error").show();
        $("#jupiter").fadeIn();
    } else if ((result <= 6) && (q3 === 1) && (code === "back") ) {
        $(".android").show();
    } else if (result > 10 && code === "back") {
        $(".net").show();
    } else if (result <=10) {
        $(".react").show();
    } else {
        $(".ruby").show();
    }
    $(".name").text(name);
  });
});

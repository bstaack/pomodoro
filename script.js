$(document).ready(function(){

  var workTime, workOrBreak = true, initialWork = 900, initialBreak = 300, clicks = 2;

  function timer() {
    workTime = initialWork;
    wTimer = setInterval(alertFunc, 1000);
  }
  function alertFunc() {

    mins = Math.floor(workTime / 60);
    secs = workTime - (mins * 60);

    if(workTime === 0){
      if(workOrBreak) {
        $(".workOrBreak").html("relax kid");
        workTime = initialBreak;
        workOrBreak = false;
      } else {
        $(".workOrBreak").html("go go go");
        workTime = initialWork;
        workOrBreak  = true;
      }
    }

    workTime -= 1;
    $("#countdown").html(mins + " m " + secs + " s");
  }

  $("#start").click(function() {
    $(".workOrBreak").html("go go go");
      if (clicks % 2 === 0){
          timer();
          $(this).html("reset");
      } else if(clicks % 2 == 1){
          clearInterval(wTimer);
          $(this).html("start");
      }
      ++clicks;
  });

  $("#addMins").click(function(){
    if (initialWork >= 60){
      $("#subMins").prop("disabled",false);}
    initialWork += 60;
    $("#work").html(initialWork/60);
  })
  $("#subMins").click(function(){
    if (initialWork == 120){
      $(this).prop("disabled",true);
    }
    initialWork -= 60;
    $("#work").html(initialWork/60);
  })
  $("#addBreak").click(function(){
    if (initialBreak >= 60){
      $("#subBreak").prop("disabled",false);}
    initialBreak += 60;
    $("#break").html(initialBreak/60);
  })
  $("#subBreak").click(function(){
    if (initialBreak == 120){
      $(this).prop("disabled",true);
    }
    initialBreak -= 60;
    $("#break").html(initialBreak/60);
  })

});

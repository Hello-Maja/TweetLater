var polling =function(jid, status, jqXHR, complete) {
  if (complete) {
    return // stop polling
  }
  else{
    $.get('/status/'+ jid, function(response){
      if (response === "true") {
        complete = true
      
      }
      setTimeout(polling, 1000, jid, status, jqXHR, complete)
    });
  }
}


$(document).ready(function() {
  $('form').submit(function(event){
    event.preventDefault();
    // $("span").text("Processing").show().fadeOut(5000);
    var url = $(this).attr('action');
    // var data = $(this).serialize();
    var data = $('#test').serialize();
    console.log(data);
    $.post(url, data, polling)
    });
  });


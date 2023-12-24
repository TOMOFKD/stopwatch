$(document).ready(function(){
  let hour = 0;
  let minute = 0;
  let second = 0;
  let millisecond = 0;
  let time;

  $('.start').click(function(){
    if (second >= 1){
      time = setInterval(count,100)
      $(this).prop('disabled', true);
      $('.stop,.reset').prop('disabled', false);
    }else{
      hour = 0;
      minute = 0;
      second = 0;
      millisecond = 0;
      $('.now_time').html('0:0:0:0');
      time = setInterval(count,100);
      $(this).prop('disabled', true);
      $('.stop,.reset').prop('disabled', false);
    }
  });

  $('.stop').click(function() {
    clearInterval(time);
    if (second < 1){
      $('.now_time').html('0:0:0:0');
      $(this).prop('disabled', true);
      $('.reset').prop('disabled', true);
      $('.start').prop('disabled', false);
    }else{
      $(this).prop('disabled', true);
      $('.start').prop('disabled', false)
    }
  });

  $('.reset').click(function() {
    hour = 0;
    minite = 0;
    second = 0;
    millisecond = 0;
    $('.now_time').html('0:0:0:0');
    clearInterval(time);

    $('.stop,.reset').prop('disabled', true);
    $('.start').prop('disabled', false);
  });

  function count()
  {
    millisecond += 1;

    if (millisecond >9) {
      millisecond = 0;
      second += 1;
    }

    if (second > 59) {
      second = 0;
      minute += 1;
    }

    if (minute > 59) {
      minute = 0;
      hour += 1;
    }

    $('.now_time').html(hour + ':' +  minute + ':' + second + ':' +millisecond);
  }
})
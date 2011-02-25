// https://github.com/briancollins/color-clock

$(function() {
  var hour1 = $("#digit1"),
  hour2     = $("#digit2"),
  minute1   = $("#digit3"),
  minute2   = $("#digit4"),
  second1   = $("#digit5"),
  second2   = $("#digit6"),
  body      = $("body");

  var frame = function () {
    var t = new Date(),
    h     = t.getHours(),
    m     = t.getMinutes(),
    s     = t.getSeconds();

    hour1.html(Math.floor(h / 10));
    hour2.html(h % 10);

    minute1.html(Math.floor(m / 10));
    minute2.html(m % 10);

    second1.html(Math.floor(s / 10));
    second2.html(s % 10);

    body.animate({"background-color":
                 "rgb(" + parseInt((h / 24) * 255) + "," +
                          parseInt((m / 60) * 255) + "," +
                          parseInt((s / 60) * 255) + ")"});
  };

  frame();
  window.setInterval(frame, 1000);
});

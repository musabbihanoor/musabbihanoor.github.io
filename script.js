document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = [
    " is a Web Developer_ ",
    " is also a student_ ",
    " lives in Karachi_ ",
    " loves to design websites_ ",
  ];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("#msg").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

$(document).ready(function () {
  $(".logo").click(function () {
    $("#home").animate({ top: "0" });
  });
});

$(document).ready(function () {
  $("#spe").click(function () {
    $("#home").animate({ top: "-100vh" });
    $("#specialization").animate({ top: "0" });
  });
});

$(document).ready(function () {
  $("#res").click(function () {
    $("#home").animate({ top: "-100vh" });
    $("#specialization").animate({ top: "-100vh" });
    $("#resume").animate({ top: "0" });
  });
});

$(document).ready(function () {
  $("#ski").click(function () {
    $("#home").animate({ top: "-100vh" });
    $("#specialization").animate({ top: "-100vh" });
    $("#resume").animate({ top: "-200vh" });
    $("#skills").animate({ top: "0" });
  });
});

$(document).ready(function () {
  $("#con").click(function () {
    $("#home").animate({ top: "-100vh" });
    $("#specialization").animate({ top: "-100vh" });
    $("#resume").animate({ top: "-100vh" });
    $("#skills").animate({ top: "-100vh" });
  });
});

$("#home").on("mousewheel DOMMouseScroll", function (e) {
  if (e.originalEvent.wheelDelta < 0) {
    $("#home").animate({ top: "-100vh" });
  }
});

$("#specialization").on("mousewheel DOMMouseScroll", function (e) {
  if (e.originalEvent.wheelDelta < 0) {
    $("#specialization").animate({ top: "-100vh" });
  } else if (e.originalEvent.wheelDelta > 0) {
    $("#home").animate({ top: "0" });
  }
});

$("#resume").on("mousewheel DOMMouseScroll", function (e) {
  if (e.originalEvent.wheelDelta < 0) {
    $("#resume").animate({ top: "-200vh" });
  } else if (e.originalEvent.wheelDelta > 0) {
    $("#specialization").animate({ top: "0" });
  }
});

$("#skills").on("mousewheel DOMMouseScroll", function (e) {
  if (e.originalEvent.wheelDelta < 0) {
    $("#skills").animate({ top: "-100vh" });
  } else if (e.originalEvent.wheelDelta > 0) {
    $("#resume").animate({ top: "0" });
  }
});

$("#contact").on("mousewheel DOMMouseScroll", function (e) {
  if (e.originalEvent.wheelDelta > 0) {
    $("#skills").animate({ top: "0" });
  }
});


var last_scrolTop = 0;
window.onscroll = function() {

  if (document.body.scrollTop + document.documentElement.scrollTop > last_scrolTop) {
    $("header.header > .portrait").slideUp();
  } else {
    $("header.header > .portrait").slideDown();
  }
  last_scrolTop = document.body.scrollTop + document.documentElement.scrollTop 
  
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("header.header > .landscape").css({"background-color": "#000000"})
    $("header.header > .portrait").css({"background-color": "#000000"})
    $("header.header > .landscape .header__logo").css({"width": "200px"})
    $("header.header > .landscape .header__nav .inline-list").css({"padding-top": "5px"})
    $(".header__nav li.haschildren ul").addClass("solid_dropdown")
  } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 80) {
    $("header.header > .landscape").css({"background-color": "transparent"})
    $("header.header > .portrait").css({"background-color": "transparent"})
    $("header.header > .landscape .header__logo").css({"width": "240px"})
    $("header.header > .landscape .header__nav .inline-list").css({"padding-top": "10px"})
    $(".header__nav li.haschildren ul").removeClass("solid_dropdown")
  }
};


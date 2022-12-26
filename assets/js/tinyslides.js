var slider = tns({
  container: ".my-slider",
  items: 6,
  gutter: 2, //中间空隙
  slideBy: 1,
  //controls: false, //控制大按钮
  //nav: false //控制按钮
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: "#custom-control",
  nav: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  center: true,

  responsive: {
    0: {
      items: 1,
    },
    540: {
      items: 4,
    },
    700: {
      items: 3,
    },
    800: {
      items: 5,
    },
    1000: {
      items: 6,
    },
  },
});

document.addEventListener(
  "mousedown",
  function (event) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  },
  false
);

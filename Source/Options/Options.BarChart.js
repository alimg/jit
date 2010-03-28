Options.BarChart = {
  $extend: true,
  
  animate: true,
  type: 'stacked', //stack, group, : gradient
  offset: 25, //page offset
  barsOffset: 3, //distance between bars
  hoveredColor: '#9fd4ff',
  orientation: 'bottom', //top, left, right
  Tips: {
    enable: false,
    onShow: $.empty,
    onHide: $.empty
  }
};
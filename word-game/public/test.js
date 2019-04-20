() => {
  console.log('test');
  var canvas = document.querySelector('#cavsTable');
  var ctx = canvas.getContext('2d');
  var rectH = 50;
  var rectW = 50;
  //绘制横线
  for (var i = 0; i < canvas.height / rectH; i++) {
    ctx.moveTo(0, i * rectH);
    ctx.lineTo(canvas.width, i * rectH);
  }
  //绘制竖线
  for (var j = 0; j < canvas.width / rectW; j++) {
    ctx.moveTo(j * rectW, 0);
    ctx.lineTo(j * rectW, canvas.height);
  }
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = '#555';
  ctx.stroke();
};

'use strict';

var CANVAS_WIDTH = 420;
var CANVAS_HEIGHT = 270;
var CANVAS_FILL = '#ffffff';
var CANVAS_FILL_SHADOW = 'rgba(0, 0, 0, 0.7)';
var CANVAS_LEFT_OFFSET = 155;
var CANVAS_TOP_OFFSET = 35;
var CANVAS_BOTTOM_OFFSET = CANVAS_HEIGHT - CANVAS_TOP_OFFSET / 10;
var COLUMN_MAX_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_OFFSET = 50;

var searchMaxTime = function (times) {
  var maxTime = 0;
  times.forEach(function (item) {
    if (item > maxTime) {
      maxTime = item;
    }
  });
  return maxTime;
};

var getColumnHeightByTime = function (time, maxTime) {
  return time * COLUMN_MAX_HEIGHT / maxTime;
};

var renderCloudWithShadow = function (ctx, x, y, offset) {
  ctx.fillStyle = CANVAS_FILL_SHADOW;
  ctx.fillRect(x + offset, y + offset, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = CANVAS_FILL;
  ctx.fillRect(x, y, CANVAS_WIDTH, CANVAS_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = searchMaxTime(times);
  var columnX = CANVAS_LEFT_OFFSET;
  renderCloudWithShadow(ctx, 100, 10, 10);
  ctx.fillStyle = '#000000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CANVAS_LEFT_OFFSET, CANVAS_TOP_OFFSET);
  ctx.fillText('Список результатов:', CANVAS_LEFT_OFFSET, CANVAS_TOP_OFFSET + 25);
  for (var i = 0; i < names.length; i++) {
    var columnHeight = getColumnHeightByTime(times[i], maxTime);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], columnX, CANVAS_BOTTOM_OFFSET);
    ctx.fillText(Math.round(times[i]), columnX, CANVAS_BOTTOM_OFFSET - columnHeight - 35);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, 100%, 50%, ' + Math.random() + ')';
    ctx.fillRect(columnX, CANVAS_BOTTOM_OFFSET - columnHeight - 25, COLUMN_WIDTH, columnHeight);
    columnX += COLUMN_WIDTH + COLUMN_OFFSET;
  }
};

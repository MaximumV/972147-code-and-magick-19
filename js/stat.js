'use strict';

(function () {
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
  var FONT_STYLE = 'bold 16px PT Mono';
  var FONT_COLOR = '#000000';

  var getColumnHeightByTime = function (time, maxTime) {
    return time * COLUMN_MAX_HEIGHT / maxTime;
  };

  var renderCloudWithShadow = function (ctx, x, y, offset) {
    ctx.fillStyle = CANVAS_FILL_SHADOW;
    ctx.fillRect(x + offset, y + offset, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = CANVAS_FILL;
    ctx.fillRect(x, y, CANVAS_WIDTH, CANVAS_HEIGHT);
  };

  var getFillStyleByName = function (name) {
    return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, 100%, 50%, ' + Math.random() + ')';
  };

  var renderTitle = function (ctx, titleArray) {
    var textY = CANVAS_TOP_OFFSET;
    ctx.fillStyle = FONT_COLOR;
    ctx.font = FONT_STYLE;
    titleArray.forEach(function (item) {
      ctx.fillText(item, CANVAS_LEFT_OFFSET, textY);
      textY += 25;
    });
  };

  var renderColumns = function (ctx, names, times) {
    var maxTime = window.util.searchMaxArrayValue(times);
    var columnX = CANVAS_LEFT_OFFSET;
    var minArrayRange = names.length < times.length ? names.length : names.length;
    for (var i = 0; i < minArrayRange; i++) {
      var columnHeight = getColumnHeightByTime(times[i], maxTime);
      ctx.fillStyle = FONT_COLOR;
      ctx.fillText(names[i], columnX, CANVAS_BOTTOM_OFFSET);
      ctx.fillText(Math.round(times[i]), columnX, CANVAS_BOTTOM_OFFSET - columnHeight - 35);
      ctx.fillStyle = getFillStyleByName(name[i]);
      ctx.fillRect(columnX, CANVAS_BOTTOM_OFFSET - columnHeight - 25, COLUMN_WIDTH, columnHeight);
      columnX += COLUMN_WIDTH + COLUMN_OFFSET;
    }
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloudWithShadow(ctx, 100, 10, 10);
    renderTitle(ctx, ['Ура вы победили!', 'Список результатов:']);
    renderColumns(ctx, names, times);
  };
})();

(function() {
  var metas = document.getElementsByTagName('meta');
  var i;
  var scale = 1;
  var initialScale = 1;

  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      var content = metas[i].content;
      var contentParts = content.split(',');
      for (var j = 0; j < contentParts.length; j++) {
        var part = contentParts[j].trim();
        if (part.indexOf('initial-scale=') === 0) {
          initialScale = parseFloat(part.substring('initial-scale='.length));
          scale = initialScale;
          break;
        }
      }
    }
  }

  if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    if (scale < initialScale) {
      var viewportmeta = document.querySelector('meta[name="viewport"]');
      if (viewportmeta) {
        viewportmeta.content = 'width=device-width, initial-scale=' + initialScale + ', maximum-scale=' + initialScale + ', user-scalable=no';
      }
    }
  }
})();

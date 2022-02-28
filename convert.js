function toDataURL(src, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
      var canvas = document.createElement('CANVAS');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
    }
  }
  
  toDataURL(
    'https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-1/p120x120/67092132_2454483931309654_7701299669409726464_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=yCtV5F_1RzIAX8cQxrB&_nc_ht=scontent.fktm1-1.fna&oh=00_AT_4eXhS4IaT4uwCdh0cD_IvKslOaEBMrUIofJU2Y5NKdA&oe=623A2014',
    function(dataUrl) {
      console.log('RESULT:', dataUrl)
    }
  )

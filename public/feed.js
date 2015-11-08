Parse.initialize("jhnxpZvEYUscSYiUvyRxHndbAN2eT8t8hhZv1GgI", "2SiaYEmB2JYNsueH1Qg90AKtEfMqRkdOasE8ByRT");
var Audio = Parse.Object.extend('Audio');
var aQuery = new Parse.Query(Audio);

var layers = [];
var countAdd = 0;

var addLayer = function(layer) {
  layers.push(layer);
};

var removeLayer = function(layer) {
  var index = layers.indexOf(layer);
  if(index !== -1) {
    layers.splice(index, 1);
  }
}

var clear = function() {
  layers = [];
};

var playLayers = function() {
  var howlers = [];
  //howlers[0] = new Howl({
    //urls: ['http://files.parsetfss.com/d6dcfbd2-d528-447c-9be9-4f5ed7f906e0/tfss-f94928cf-e086-4efe-a4a0-fa45f77d10b5-happybday.mp3']
  //});

  //howlers[1] = new Howl({
    //urls: ['http://files.parsetfss.com/d6dcfbd2-d528-447c-9be9-4f5ed7f906e0/tfss-37655162-0e06-4535-8032-88febf61a022-hbd.mp3']
  //});

  layers.forEach(function(item) {
    howlers.push(new Howl({
      urls: [item]
    }));
  });

  howlers.forEach(function(item) {
    item.play();
  });

  //var wavesurfer = Object.create(WaveSurfer);

  //wavesurfer.init({
    //container: '#lol',
    //waveColor: 'violet',
    //progressColor: 'purple'
  //});

  //wavesurfer.on('ready', function () {
      //wavesurfer.play();
  //});

  //wavesurfer.load('lol.wav');
};

aQuery.find({
  success: function(results) {
    results.forEach(function(item, index) {
      if(item.get('name') !== undefined && item.get('name').toString) {
        var recordingName = item.get('name')
          .toString();
        // Add in the necessary icons and shit
        var newItem = '<li class="layer"><div class="name">' + item.get('name') + '</div><div class="add" id="add' + index + '" data-audio-url="' + item.get('audio').url() + '">+</div></li>';
        newItem += '<br />';
      }

      $('.feed').append(newItem);

      $('#add' + index).click(function(e) {
        var current = $(this).text();
        current = (current === '+') ? '-' : '+';
        if(current === '-') {
          addLayer($(this).data('audio-url'));
        } else {
          removeLayer($(this).data('audio-url'));
        }
        $(this).text(current);
      });
    });
  }
});

$('#play').click(function(e) {
  playLayers();
  // Play something
});

$('#clear').click(function(e) {
  clear();
});

$('#share').click(function() {
  FB.ui({
    method: 'share',
    href: 'http://yhackbyte.heroku.com',
  }, function(response){}); 
});

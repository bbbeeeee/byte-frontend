Parse.initialize("jhnxpZvEYUscSYiUvyRxHndbAN2eT8t8hhZv1GgI", "2SiaYEmB2JYNsueH1Qg90AKtEfMqRkdOasE8ByRT");
var Audio = Parse.Object.extend('Audio');
var aQuery = new Parse.Query(Audio);

var layers = [];
var countAdd = 0;

var addLayer = function(layer) {
  layers.push(layer);
};

var clear = function() {
  layers = [];
};

var playLayers = function() {
  var howlers = [];
  layers.forEach(function(item) {
    howlers.push(new Howl({
      urls: ['lol.wav']
    }));
  });

  howlers.forEach(function(item) {
    console.log('playing' + item.toString());
    console.log(item.play());
    item.play();
  });
};

aQuery.find({
  success: function(results) {
    results.forEach(function(item, index) {
      if(item.get('name') !== undefined && item.get('name').toString) {
        var recordingName = item.get('name')
          .toString();
        // Add in the necessary icons and shit
        var newItem = '<li><div class="name">' + item.get('name') + '</div><div class="add" id="add' + index + '" data-audio-url="' + item.get('audio').url() + '">+</div></li>';
      }

      $('.feed').append(newItem);

      console.log(newItem);
      $('#add' + index).click(function(e) {
        addLayer($(this).data('audio-url'));
      });
    });
  }
});

$('#play').click(function(e) {
  playLayers();
});

$('#clear').click(function(e) {
  clear();
});
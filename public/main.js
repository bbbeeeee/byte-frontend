window.fbAsyncInit = function() {
  FB.init({
    appId      : '159736464379444',
    xfbml      : true,
    version    : 'v2.5'
  });

  $('#share').click(function() {
    FB.ui({
      method: 'feed',
      link: 'http://localhost:3000/',
      caption: 'Hey guys, check out this new stack I made! You can add your own audio to it and make your own!'
    }, function(response){});
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=159736464379444";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


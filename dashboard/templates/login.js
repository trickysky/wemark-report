var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('登录中...');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('欢迎回来!');
    setTimeout(function() {
      window.location.href='../dashboard'
    }, 1000);
  }, 2000);
});
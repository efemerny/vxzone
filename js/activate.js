var elem = document.querySelector('.topic-content');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.topic-item',
  gutter: 0,
});

var container = document.querySelector('.topic-content');
var msnry;
// Инициализация Масонри, после загрузки изображений
imagesLoaded( container, function() {
  msnry = new Masonry( container );
});


var sidebar = new StickySidebar('#sidebar', {
  containerSelector: '#list-side',
  innerWrapperSelector: '.sidebar__inner',
  topSpacing: 1,
  bottomSpacing: 10
});


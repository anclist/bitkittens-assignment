document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.querySelectorAll('.cat-box');

  $('.summon-cats').click(function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json',
    }).done(function(data) {
      for (var i = 0; i < data.cats.length; i++) {
        var image = document.createElement('img');
        image.src = data.cats[i].photo;
        image.alt = data.cats[i].name;
        boxes[i].append(image)
      };
    });
});
  });

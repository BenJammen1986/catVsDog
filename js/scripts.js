$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>MEOW</li>");
    $("ul#dog").prepend("<li>woof</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).after("<img src='img/cat2.jpg' alt='a cat'>");
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).after("<img src='img/dog1.jpg' alt='a dog'>");
    });
  });

  $("button#bark").click(function() {
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>WOOF WOOF</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).after("<img src='img/cat1.png' alt='a cat'>");
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).after("<img src='img/dog1.jpg' alt='a dog'>");
    });
  });
});

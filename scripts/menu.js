function HomeClick()
{
  $.get("Home.html", function (result){
    var html = $('<html />').html(result);
    $("#main_content").html(html.find('#main_content').html())
  })
}

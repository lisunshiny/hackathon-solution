$(document).ready(function() {
  $("button").on("click", function(event) {
    var val = $("input").val();

    $.get("//hackathon.liannsun.com/supermarkets?secret_key=spacecats&location=" + val, function(response) {
      $(".results-container").empty()
      var results = response.results;
      $results = $("<div>")
      $list = $("<ul>");

      $results.append("wow there are <b>" + results.length + "</b> grocery stores near you!</br>")

      for (var i = 0; i < results.length; i++) {
        var name = results[i].name;
        var address = results[i].formatted_address;
        console.log(name)
        console.log(address)

        $el = $("<li>").text(name + " - " + address);
        $list.append($el);
      }
      $results.append($list);
      $(".results-container").append($results);


      // BEGIN EXTRA CREDIT:
      var $img = $("<img>").attr("src", "https://maps.googleapis.com/maps/api/staticmap?center=" + val + "&zoom=13&size=600x300");
      $(".results-container").prepend($img);
    })
  })
})

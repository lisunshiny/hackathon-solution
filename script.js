$(document).ready(function() {
  $("button").on("click", function(event) {
    var val = $("input").val();

    $.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + val + "&type=grocery_or_supermarket&key=AIzaSyAp_xGN8rsxtH80RUiG1Hq07_4QalYvBBs", function(response) {
      $(".results-container").empty()
      var results = response.results;
      $results = $("<div>")
      $list = $("<ul>");

      $results.append("wow there are <b>" + results.length + "</b> grocery stores near you!")

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
    })
  })
})

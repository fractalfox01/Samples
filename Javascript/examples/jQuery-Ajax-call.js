// The following is a snippet of code from twitch.html @ https://github.com/fractalfox01/Portfolio.
// Used to access the Twitch API, this example passes along a Client-ID attribute in the http Header (ID redacted here).
// This specific code block makes a query to the Twitch API -> receives back data in JSON format -> combs through JSON for
// needed blocks (in this case, data for the top 10 currently displayed channels + data on 5 pre-defined channels.) ->
// Assigns the filtered data to html elements and displays to the page.
$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/',
    headers: {'Client-ID': 'Your Client-ID Here(in the same quotes)'},
    // On successfull return, block is executed
    success: function(data) {
      for(var i in data.streams){
        var arg1 = JSON.stringify(data.streams[i]['channel']['name'],null,4);
        arg = "https://go.twitch.tv/" + arg1.toString().slice(1,arg.length-1);
        if(countToTen === 10){
          break;
        }
        else{
          $("#left-box").append("<button id='stream' type='button' value='" + JSON.stringify(data.streams[i]['channel']['name'],null,4).toString() + "' onClick='clicker(" +JSON.stringify(data.streams[i]['channel']['name'],null,4).toString()+ ")'>" + "<img src=" + "" + JSON.stringify(data.streams[i]['channel']['logo'],null,4) + "width='50px'/>\t<h4 style='color:red;'>Live</h4><h4>User " + "<a id='user'>" + JSON.stringify(data.streams[i]['channel']['name'],null,4).toString() + "</a> playing " +  "<a id='user'>" + JSON.stringify(data.streams[i]['game'],null,4) + "</a></h4><p> started at: " + JSON.stringify(data.streams[i]['created_at'],null,4) + "</p><p>Viewers: " + JSON.stringify(data.streams[i]['viewers'],null,4).toString() + "</p></button>" );
          countToTen++;
        }

        //console.log(JSON.stringify(data,null,4));

      }
      ;},
    // On Error return, block is executed.
    error: function(data) {
      console.log("@1 Error: " + JSON.stringify(data,null,4));
    }
  }
  );
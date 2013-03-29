var clippedAPI = "http://clipped.me/algorithm/clippedapi.php";

$('#form').submit(function(){

	$.ajax({
		url: clippedAPI,
		type: "GET",
		dataType: "JSONP",
		data: {url: $('#webAddress').val()}
		}).done(function(json) {
			console.log("JSON Data: " + json.title );
			$('#title').append(json.title);
			for(i = 0; i < json.summary.length; i++){
				$('#summary').append('<li>' + json.summary[i] + '</li>');
			};
		}).fail(function(jqxhr, textStatus, error){
			var err = textStatus + ', ' + error;
			console.log("Request Failed: " + err);

		});

		return false;
	});

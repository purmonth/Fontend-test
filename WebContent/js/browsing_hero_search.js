
$(document).ready(function(){
	$(".SearchBar_Go").click(function(){
		var item = $(".SearchBar_Field").val();
		if(item.length < 3){
			$(".SearchBar_Field").val("");
			return;
		}
		location.replace(location.pathname + "/Browse_Cars?q=" + encodeURI(item));
	});

	$(".SearchBar_Field").keypress(function(e){
		code = (e.keyCode ? e.keyCode : e.which);
		if(code == 13){
			var item = $(".SearchBar_Field").val();
			if(item.length < 3){
			$(".SearchBar_Field").val("");
			return;
			}
			location.replace(location.pathname + "/Browse_Cars?q=" + encodeURI(item));
		}
	});
                      
});





	
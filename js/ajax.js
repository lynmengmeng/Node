$(function(){
	var path = "http://192.168.0.128:8888";
	var readFile = {readFile:30};
	$(".but1").click(function(){
		$.ajax({
			url:path,
			type:'get',
			datatype:'json',
			data:readFile,
			success:function(data){
				var utiltext = data.content ;
				$("#content").append(utiltext);
			},
			error:function(err){
				//请求失败
			}
		})
	});
    $(".but").click(function(){
        refresh();
    });
});


function refresh(){
    window.location.reload();
}

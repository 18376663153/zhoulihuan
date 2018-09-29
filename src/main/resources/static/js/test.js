function openModal(reportId,id){
	$('#related-content').lifecycleInfo({reportId:reportId,id:id});
}
$(function(){
	var options = {
		data:[
			{a:'dcacdas',b:'cdaewa',c:'edcxcdas',d:'edcss'},
			{a:'dcacdas',b:'cdaewa',c:'edcxcdas',d:'edcss'},
			{a:'dcacdas',b:'cdaewa',c:'edcxcdas',d:'edcss'},
			{a:'dcacdas',b:'cdaewa',c:'edcxcdas',d:'edcss'},
			{a:'dcacdas',b:'cdaewa',c:'edcxcdas',d:'edcss'},
			{a:'dcacdas',b:'cdaewa',c:'edcxcdas',d:'edcss'},
			{a:'dcacdas',b:'cdaewa',c:'edcxcdas',d:'edcss'},
		]
	};
	$('button.a-btn').click(function(){
		$('#plugin-content').myTable(options);
	})
	$('html').on('my.click',function(e){
		console.log(e.id);
	});
	$("#b").myEmbedModalTable(options)
})

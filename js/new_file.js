 $(function(){
 	$(".banner .left li").hover(function(){
 	  $('.banner .left li').removeClass('active');
			$('.banner #box div').removeClass('show');
			$(this).addClass('active');	
			$(' #box div').eq($(this).index()).addClass('show');
 })
$(".nav22").hover(function(){
	$(".xian").show()
},function(){
	$(".xian").hide()
})
 })
 

$(function() {

	$(".hadSecButton").hover(function(){
		$(this).find(".secButton").slideDown();
	},
	function(){
		$(this).find(".secButton").slideUp();
	}
	);

	var pageMButtonIO = 0;
	$(".pageMButton").click(function(){

		if(pageMButtonIO == 0){
			$("nav.pageButton").fadeIn();
			$(".pageMButton img").attr("src","images/listClose.png");
			pageMButtonIO = 1;
		}else{
			$("nav.pageButton").fadeOut();
			$(".pageMButton").find("img").attr("src","images/listOpen.png");
			pageMButtonIO = 0;
		};
		

	})


	/*活動說明開關start*/
	var inforBaseIO = 0;

	$(".buttonInfor a").click(function(){
		if(inforBaseIO == 0){
			$(".inforBase .hide").slideDown();
			$(".buttonInfor a").text("關閉活動說明");
			$("html,body").animate({scrollTop:$(".inforBase").offset().top},800);
			inforBaseIO = 1;
		}else{
			$(".inforBase .hide").slideUp();
			$(".buttonInfor a").text("展開活動說明");
			$("html,body").animate({scrollTop:$(".inforBase").offset().top},800);
			inforBaseIO = 0;
		}
		
	})
	/*活動說明開關end*/





/*pra*/



/*pra*/













	/*c26商品slick*/
	$(".group-type-ph").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

	/**/




	
})


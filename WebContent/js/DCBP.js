

$(document).ready(function(){
	$(".PageHeader_MenuPage_Menu").click(function(){
		$(".PageHeader_MenuPage").hide();
	});
	$(".PageHeader_Menu").click(function(){
		$(".PageHeader_MenuPage").show();
	});
	$(".CarBlock_Desc_Favorite").click(function(){
		$(this).toggleClass("CarBlock_Desc_Favorite-selected");
	});


	$(".PageFind_PricingDisplay_Block").click(function(){
		$(".PageFind_PricingDisplay_Block").removeClass("PageFind_PricingDisplay_Block-selected");
		$(this).toggleClass("PageFind_PricingDisplay_Block-selected");
	});
	$(".PageHeader_MenuPage_Language").click(function(){
		$(".PageHeader_MenuPage_Language").removeClass("PageHeader_MenuPage_Language-selected");
		$(this).toggleClass("PageHeader_MenuPage_Language-selected");
	});
	$(".ButtonGroup_Button").click(function(){
		$(".ButtonGroup_Button").removeClass("ButtonGroup_Button-selected");
		$(this).toggleClass("ButtonGroup_Button-selected");
	});
	


	$(".ShoppingPageFlow_Item").click(function(){
		$(".ShoppingPageFlow_Item").removeClass("ShoppingPageFlow_Item-selected")
		$(this).toggleClass("ShoppingPageFlow_Item-selected")
	});
	$(".ItemCart_Row_Trash").click(function(){
		$(this).parent().hide();
	});
	$(".ItemCart_Row_Remove").click(function(){
		$(this).parent().toggleClass("ItemCart_Row-removed");
		$(this).hide();
		$(this).siblings('.ItemCart_Row_Add').show();
	});
	$(".ItemCart_Row_Add").click(function(){
		$(this).parent().toggleClass("ItemCart_Row-removed");
		$(this).hide();
		$(this).siblings('.ItemCart_Row_Remove').show();
	});
	$(".ItemCart_Row_UnitPrice").click(function(){
		console.log($(this).text());
	});

	$(".CarSelectorOption_Item_Caption").click(function(){
		$(this).siblings().toggleClass('CarSelectorOption_Item_Icon-selected');
	});
	$(".Inspection_Block_Icon").click(function(){
		$(this).toggleClass('Inspection_Block_Icon-selected');
	});
	$(".ComparingSheet_Header_Icon").click(function(){
		$(this).parent().parent().toggleClass('ComparingSheet-selected');
	});

	//test
	
	$(".CarFinder_SidebarButton").click(function(){
		$(".BrowsingPageSidebar").toggleClass('BrowsingPageSidebar-selected');
	});
                      
});
/*
function Fade(element) {
	element.mouseenter(function(){
		element.fadeTo('fast',0.8);
	});
	element.mouseleave(function(){
		element.fadeTo('fast',1);
	});
};
*/
/*
function Click(element) {
	$(element).click(function(){
		$(element).removeClass(element+"-selected");
		$(this).toggleClass(this+"-selected");
		console.log(this);
		console.log(element);
	});
}
*/
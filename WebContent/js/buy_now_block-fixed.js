/**
$(window).scroll(function()
{
    if ($(this).scrollTop() >= 346)
    {
        if ($(this).scrollTop() >= 5200)
        {
            $(".BuyNowBlock").css("position", "absolute").css("top", "5550px");
        } else
        {
            $(".BuyNowBlock").css("position", "fixed").css("top", "346px");
        }
    } else 
    {
        $(".BuyNowBlock").css("position", "absolute").css("top", "726px");
    }
});
**/

$(window).scroll(function()
{
    var distance = $(document).height()-1750;
    /**
    * 1750 px equal  
    * footer height 800px  plus 
    * plus buynowblock height 600px
    */
    if ($(this).scrollTop() >= 346)
    {
        
        if ($(this).scrollTop() >= distance)
        {
            $(".BuyNowBlock").css("position", "absolute").css("top", distance+300)
            /*
            buy now block / 2 == 300
             */
        } else
        {
            $(".BuyNowBlock").css("position", "fixed").css("top", "").css("bottom","100px");
        }
    } else 
    {
        $(".BuyNowBlock").css("position", "absolute").css("top", "726px");
    }
});

$(window).scroll(function()
{
    if ($(this).scrollTop() >= 346)
    {
        if ($(this).scrollTop() >= 5350)
        {
            $(".BuyNowBlock").css("position", "absolute").css("top", "5700px");
        } else
        {
            $(".BuyNowBlock").css("position", "fixed").css("top", "346px");
        }
    } else
    {
        $(".BuyNowBlock").css("position", "absolute").css("top", "726px");
    }
});
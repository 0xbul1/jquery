$(function () {
    // 0,监听内容的输入
    // $('.comment').change(function(){
    // //     console.log($(this).val());
    // if($(this).val().length > 0){
    //     $('.send').prop('disabled',false);
    // }else {
    //     $('.send').prop('disabled',true);
    // }
   

    $('body').delegate('.comment','propertychange input',function(){
        // console.log($(this).val());
        // 判断是否输入
        if($(this).val().length > 0){
            $('.send').prop('disabled',false);
        }else {
            $('.send').prop('disabled',true);
        }

    });
 
    // 1,监听发布按钮的点击
    $('.send').click(function () {
        // 获取新创建的微博内容
        var $text = $('.comment').val();
            $weibo = createEle($text);
        $('.messageList').prepend($weibo);    
    });
    $('body').delegate('.infoUp','click',function(){
        // $(this).text() ;
        $(this).text( parseInt($(this).text()) + 1);
    });
    $('body').delegate('.infoDown','click',function(){
        console.log($(this).value);
        $(this).text( parseInt($(this).text()) + 1);
    });
    $('body').delegate('.infoDel','click',function(){
        // $(this).text() ;
        $(this).parents('.info').remove();
    });
function formartDate(){
    var date = new Date();
    
    var date1 = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    // console.log(date1);
    return date1;
}


function createEle(text) {
        var $weibo = $("<div class=\"info\">\n" +
            "            <p class=\"infoText\">"+text+"</p>\n" +
            "            <p class=\"infoOperation\">\n" +
            "                <span class=\"infoTime\">"+formartDate()+"</span>\n" +
            "                <span class=\"infoHandle\">\n" +
            "                    <a href=\"javascript:;\" class='infoUp'>0</a>\n" +
            "                    <a href=\"javascript:;\" class='infoDown'>0</a>\n" +
            "                    <a href=\"javascript:;\" class='infoDel'>删除</a>\n" +
            "                </span>\n" +
            "            </p>\n" +
            "        </div>");
        return $weibo;
    }
});
// vote.php起動関数 2018.3.11 - 2018.11.16  //////////////////////////////////////////////////
$(function(){
     $('.letsVote').on('click' , function(){      
          $this = $(this);
          var id = $this.data("id");            //識別用ID（重複NG）
          var lockId = id;                      //2018.11.16 以下５Step 修正・追加 data-lock属性省略対応
          if( $this.data("lock") ){
             lockId = $this.data("lock");       //排他制御ID
             if(lockId == ""){ lockId = id; }
          }
          var numHtml = "#" + $this.data("id"); //カウント数を表示するHTML
          var nowCount = Number($(numHtml).html()); //現在のカウント数
          var newCount = nowCount + 1;
          var timer = 20;                      //クッキーの有効期限（投票を制限する秒数） time()+60*60*24*30 はクッキーの有効期限を 30 日後にセット
          var phpurl = "vote.php";     // 要修正 *******

          $.ajax({
               type : "POST",
               url : phpurl,
               data: {
                    "file_id" : id,
                    "count" : newCount, "lock_id" : lockId, "cookie_time" : timer
               }
          }).done(function(data , datatype){
                    //送信先のvote.phpから、Completeが返ってきたらカウント更新
                    if(data == "Complete"){
                         $(numHtml).html(newCount);
                    }else{
                         alert("連続投稿はできません！・・・時間をおいてやり直してください。");
                    }
               }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                      $("#XMLHttpRequest").html("XMLHttpRequest : " + XMLHttpRequest.status);
                      $("#textStatus").html("textStatus : " + textStatus);
                      $("#errorThrown").html("errorThrown : " + errorThrown.message);
                  });
 });
});

// getCount.php起動関数 2018.3.11 /////////////////////////////////////////////////////
function getCountSet(id){
        var target = "#" + id;
        var phpurl = "getCount.php";  // 要修正 ******   
        var obj =  $(target).parent("div"); 
        $(obj).css({ "cursor": "pointer" });
        $.ajax({
            url: phpurl,            // ソーシャルボタンカウント取得PHP   if (re.test(str)) 
            dataType: "json",
            data: { countid: id }, 
              }).done(function(data){
                var res = data;
                $(target).text(res);
                var classname = $(target).attr("class");    //吹き出しのCLASS名取得 top/right/bottom/left
                if (/right/.test(classname) || /left/.test(classname)) { 
                  var obj =  $(target).parent("div");                 //親要素OBJ取得、全子要素にFloat属性設定、Float属性解除設定（以下３ステップ）
                  $(obj).children( "div" ).css({ "float": "left" });  //, "margin": "2px" }); //, "display": "inline", "vertical-align": "bottom", "cursor": "pointer" 
                  $(obj).append("<div style='clear: both; display: block;'></div>"); 
                 }
               }).fail(function(data){
                var res = "error";
                $(target).text(res);
             });
}

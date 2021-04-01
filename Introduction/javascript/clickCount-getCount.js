// vote.php起動関数 2018.3.11 - 2018.11.16 //////////////////////////////////////////////////
$(function(){
     $('.letsVote').on('click' , function(){      
          $this = $(this);
          var id = $this.data("id");            //識別用ID（重複NG）
          var lockId = id;                      //2018.11.16 以下５Step 修正・追加 data-lock属性省略対応
          if( $this.data("lock") ){             //2018.11.16
             lockId = $this.data("lock");       //2018.11.16 排他制御ID
             if(lockId == ""){ lockId = id; }   //2018.11.16
          }                                     //2018.11.16
          var numHtml = "#" + $this.data("id"); //カウント数を表示するHTML
          var nowCount = Number($(numHtml).html()); //現在のカウント数
          var newCount = nowCount + 1;
          var timer = 20;              // 修正箇所 クッキーの有効期限（投票を制限する秒数） 日数での設定例：60*60*24*30 はクッキーの有効期限を 30 日後にセット
          var phpurl = "vote.php";     // vote.phpのURL 修正箇所 *******
               console.log(phpurl);
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

// getCount.php起動関数 2018.3.11  /////////////////////////////////////////////////////
function getCountSet(id){
        var target = "#" + id;
        var phpurl = "getCount.php";  // getCount.phpのURL 修正箇所 ******    
        $.ajax({
            url: phpurl,            // ソーシャルボタンカウント取得PHP
            dataType: "json",
            data: { countid: id }, 
              }).done(function(data){
                var res = data;
                $(target).text(res);
                var classname = $(target).attr("class");    //吹き出しのCLASS名取得 top/right/bottom/left
                if (/right/.test(classname) || /left/.test(classname)) { 
                  var obj =  $(target).parent("div");                 //親要素OBJ取得、全子要素にFloat属性設定、Float属性解除設定（以下３ステップ）
                  $(obj).children( "div" ).css({ "float": "left" })   //, "margin": "2px" }); //, "display": "inline", "vertical-align": "bottom", "cursor": "pointer" 
                  $(obj).append("
"); 
                 }
               }).fail(function(data){
                var res = "error";
                $(target).text(res);
                console.log(data);
             });
}
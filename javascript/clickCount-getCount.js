// vote.php起動関数//
$(function(){
     $('.letsVote').on('click' , function(){      
          $this = $(this);
          var id = $this.data("id");
          var lockId = id;
          if( $this.data("lock") ){
             lockId = $this.data("lock");       //排他制御ID
             if(lockId == ""){ lockId = id; }
          }
          var numHtml = "#" + $this.data("id"); //カウント数を表示するHTML
          var nowCount = Number($(numHtml).html()); //現在のカウント数
          var newCount = nowCount + 1;
          var timer = 60;                      //クッキーの有効期限（投票を制限する秒数）
          var phpurl = "vote.php";
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
                         alert("連続投稿はできません！");
                    }
               }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                      $("#XMLHttpRequest").html("XMLHttpRequest : " + XMLHttpRequest.status);
                      $("#textStatus").html("textStatus : " + textStatus);
                      $("#errorThrown").html("errorThrown : " + errorThrown.message);
                  });
 });
});

// getCount.php起動関数//
function getCountSet(id){
        var target = "#" + id;
        var phpurl = "getCount.php";   
        var obj =  $(target).parent("div"); 
        $(obj).css({ "cursor": "pointer" });
        $.ajax({
            url: phpurl,            // ソーシャルボタンカウント取得PHP   if (re.test(str)) 
            dataType: "json",
            data: { countid: id }, 
              }).done(function(data){
                var res = data;
                $(target).text(res);
                var classname = $(target).attr("class");
                if (/right/.test(classname) || /left/.test(classname)) { 
                  var obj =  $(target).parent("div"); 
                  $(obj).children( "div" ).css({ "float": "left" });  //, "margin": "2px" });
                  $(obj).append("<div style='clear: both; display: block;'></div>"); 
                 }
               }).fail(function(data){
                var res = "error";
                $(target).text(res);
                console.log(data);
             });
}
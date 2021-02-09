<?php
// *メイン ****************************************
if (!empty($_GET['countid'])) {
    $id   = empty($_GET['countid']) ? "" : $_GET['countid'];
    $res = getVoteCount($id);
    echo json_encode($res);
 } else {
    echo json_encode("syntax error");
 }

// *関数 ******************************************

function getVoteCount($id){
 //print "***********************";
 //カウント数を書きだしてあるファイル名
 $fileName = "log/" . $id . ".count";

 //fopenでファイルを読み込む (読み込みモード)
 $fp = @fopen($fileName , "r");

 if($fp){
 //カウント数書き込み済みのファイルの内容を取得
 $vote = fgets($fp , 9182);
 }else{
 $vote = 0;
  }

return $vote;
}


?>

//　マップの設定
map=[
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,2,2,2,2,2,2,2,2,2,2,2,2,6,2,2,6,2,2,2,2,2,2,2,2,2,2,2,2,1,
1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,
1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,
1,2,2,2,6,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,6,2,2,2,1,
1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,
1,2,2,2,2,1,1,2,2,2,4,2,2,6,2,2,6,2,2,4,2,2,2,1,1,2,2,2,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,2,2,2,1,1,5,2,2,6,2,2,2,1,1,2,2,2,6,2,2,7,1,1,2,2,2,2,1,
1,1,1,1,2,1,1,2,1,1,12,1,1,1,1,1,1,1,1,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,12,1,1,1,1,1,1,1,1,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,5,2,2,2,1,1,8,12,12,11,11,11,11,12,12,10,1,1,2,2,2,7,1,1,1,1,
1,1,1,1,2,1,1,1,1,1,12,1,1,0,0,0,0,1,1,12,1,1,1,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,1,1,1,12,1,1,0,0,0,0,1,1,12,1,1,1,1,1,2,1,1,1,1,
12,12,12,12,3,2,2,6,12,12,10,1,1,0,0,0,0,1,1,8,12,12,6,2,2,3,12,12,12,12,
1,1,1,1,2,1,1,2,1,1,12,1,1,1,1,1,1,1,1,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,12,1,1,1,1,1,1,1,1,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,12,12,12,9,12,12,9,12,12,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,1,1,1,12,1,1,12,1,1,1,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,1,1,1,12,1,1,12,1,1,1,1,1,2,1,1,2,1,1,1,1,
1,2,2,2,4,2,2,3,2,2,2,2,2,7,1,1,5,2,2,2,2,2,3,2,2,4,2,2,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,5,2,2,2,2,2,3,2,2,2,2,2,3,12,12,3,2,2,2,2,2,3,2,2,2,2,2,7,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,2,2,2,2,2,4,2,2,2,2,2,2,1,1,2,2,2,2,2,2,4,2,2,2,2,2,2,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

dmap=new Array(900);//　ドットだけのマップ

gx=0;//　ゲーム画面の位置
gy=0;

var timeId1,timeId2,timeId3;//　割り込みID
var mInt,tInt;//　割り込み間隔
var fastInt,slowInt,stopInt;//　割り込みプリセット

var key;//　キー入力

var sc,hi=up=10000;//　スコア
var ro;//　ラウンド
var eat;//　食べたドットの数（２７８個でクリア）
var cl,cl2;//　割り込みクリアフラグ
var msc;//　パワーアップ中に食べた敵の数
var mti;//　得点表示時間
var pti;//　パワーアップ時間
var life;//　残りの自分の数
var demo=true;//　デモ画面かどうかのフラグ

v=[0,1,0,-1,0];//　X軸加算量
w=[-1,0,1,0,0];//　Y軸加算量
var mp;//　自分の画像が切り替わったか調べる変数

cross=["   ","   ","   ","   ","013","012","123","023","012","123","023","313"];//　交差点で移動できる方向

var mx,my,md;//　自分の座標、進む向き

tx=new Array(3);//　敵の座標、進む向き
ty=new Array(3);
td=new Array(3);
tk=new Array(3);//　0-基地にいる1-基地を出た2-魂モード
sd=new Array(3);//　敵キャラクターの画像が切り替わったか調べる配列
var tj;//　敵の状態1（巡回2000-2999or追跡0-1999）
tr=new Array(3);//　敵の状態2（0-通常or1-逃亡）
tmode=new Array(4);//　基地での待ち時間

//　背景の読み込み
for(var i=0;i<4;i++)
{
   document.write("<img src=  'images/back"+i+".gif' style='position:absolute;left:"+gx+"px;top:"+gy+"px; width:456px; height:506px; ' name='screen"+i+"'>");
}
//　ドットの読み込み
var dotNo=1;
for(var i=0;i<30;i++)
{
   for(var j=0;j<30;j++)
   {
      var pos=i*30+j;
      if((map[pos]>1)&&(map[pos]<8))
      {
         if((dotNo==95)||(dotNo==100)||(dotNo==241)||(dotNo==246)){var src="images/pow.gif";}else{var src="images/dot.gif";}   
         document.write("<img src="+src+" style='position:absolute;left:"+(gx+j*15)+"px;top:"+(gy+i*15)+"px; width:15px; height:15px; ' name='dot"+dotNo+"'>");
         dmap[pos]=dotNo;//　ドットのマップを作成
         dotNo++;
      }else{
         dmap[pos]=0;
      }
   }
}

//　敵の読み込み
for(var i=0;i<4;i++)
{
   document.write("<img src='images/t0"+i+".gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='t0"+i+"'>");
   document.write("<img src='images/t1"+i+".gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='t1"+i+"'>");
   document.write("<img src='images/t2"+i+".gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='t2"+i+"'>");
}
for(var i=0;i<3;i++)
{
   document.write("<img src='images/tn0.gif' style='position:absolute;left:-100px; width:60px; height:30px; ' name='tn0"+i+"'>");
   document.write("<img src='images/tn1.gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='tn1"+i+"'>");
   document.write("<img src='images/me.gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='me"+i+"'>");
}


//　自分の読み込み
document.write("<img src='images/m0.gif' style='position:absolute;left:-100px; width:30px; height:21px; ' name='m0'>");
document.write("<img src='images/m1.gif' style='position:absolute;left:-100px; width:21px; height:30px; ' name='m1'>");
document.write("<img src='images/m2.gif' style='position:absolute;left:-100px; width:30px; height:21px; ' name='m2'>");
document.write("<img src='images/m3.gif' style='position:absolute;left:-100px; width:21px; height:30px; ' name='m3'>");
document.write("<img src='images/m4.gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='m4'>");

//　タイトルの読み込み
document.write("<img src='images/title.gif' style='position:absolute;left:-200px; width:450px; height:372px; ' name='title' onclick='gameStart()'>");

//　ロゴの読み込み（削除不可）
document.write("<img src='images/pjs_logo.gif' style='position:absolute;left:-100px; width:228px; height:42px; ' name='copyright' onclick='goHome()'>");

//　文字書き込み
document.write("<div id='score' style='position:absolute;left:"+(gx+24)+";top:"+(gy+465)+";font-size:33px;color:rgb(255,255,255);'>0</div>");
document.write("<div id='round' style='position:absolute;left:"+(gx+180)+";top:"+(gy+279)+";font-size:30px;color:rgb(255,0,0);'> </div>");
document.write("<div id='mscore' style='position:absolute;left:-100;font-size:27px;color:rgb(255,255,255);'>200</div>");
document.write("<div id='life' style='position:absolute;left:"+(gx+330)+";top:"+(gy+465)+";font-size:30px;color:rgb(255,0,0);'>●●</div>");
document.write("<div id='over' style='position:absolute;left:"+(gx+144)+";top:"+(gy+279)+";font-size:30px;color:rgb(255,255,255);'> </div>");
document.write("<div id='hi' style='position:absolute;left:"+(gx+240)+";top:"+(gy+306)+";font-size:36px;color:rgb(255,255,255);'> </div>");


var bw=0;//　ブラウザチェック
if(document.getElementById){bw=1;}// ネスケ６～　IE５～なら真
if((document.all)&&(bw==1)){bw=2;}//　IE４～なら真


//　キーイベント処理
if(bw==2)
{
   document.onkeydown=keyCheack;
}else if(bw==1){      
   window.captureEvents(Event.keydown);
   window.onkeydown=keyCheack;
}

Init();

function Init()
{
   //　ブラウザチェック
   if(bw==0)
   {
      alert("ブラウザバージョンが対応していません\n最新のブラウザに更新してください\n推奨バージョン(NN6～,IE5～)\n　　　　+1JavaScript");
      return;
   }
   if(bw==1){fastInt=39;slowInt=43;stopInt=57;}
   if(bw==2){fastInt=42;slowInt=47;stopInt=64;}
   ro=1;
   sc=0;
   up=10000;
   life=3;
   pti=120;
   document.getElementById("score").innerHTML=sc;
   eat=0;//　食べたドットの数（２７８個でクリア）
   dotwrite();
   screenwrite();

   startInit();
}


function startInit()
{
   //　敵画像消去
   for(var i=0;i<4;i++)
   {
      document.images["t0"+i].style.left=-100;
      document.images["t1"+i].style.left=-100;
      document.images["t2"+i].style.left=-100;
   }
   for(var i=0;i<3;i++)
   {
      document.images["tn0"+i].style.left=-100;
      document.images["tn1"+i].style.left=-100;
      document.images["me"+i].style.left=-100;
   }

   //　自画像消去
   for(var i=0;i<5;i++)
   {
      document.images["m"+i].style.left=-100;
   }

   cl=false;//　クリアフラグ

   mx=70;//　自分の初期位置
   my=125;
   md=1;//　最初は右を向いた状態
   mp="m1";
   mInt=slowInt;//　割り込み間隔
   document.images[mp].style.left=mx*3+gx-6;//　画像の表示位置を変更
   document.images[mp].style.top=my*3+gy-6;

   //　敵の初期設定
   tx[0]=72.5;
   ty[0]=65;
   tx[1]=80;
   tx[2]=65;
   ty[1]=ty[2]=80;
   tInt=slowInt;//　割り込み間隔
   tj=2400;//　敵の状態１
   if(ro==1){//　敵待ち時間
      tmode[0]=2;
      tmode[1]=120;
      tmode[2]=60;
   }else if(ro<4){
      tmode[0]=2;
      tmode[1]=80;
      tmode[2]=30;
   }else if(ro<6){
      tmode[0]=2;
      tmode[1]=20;
      tmode[2]=2;
   }else{
      tmode[0]=2;
      tmode[1]=2;
      tmode[2]=2;
   }
   for(var i=0;i<3;i++)
   {
      td[i]=0;//　向きの設定
      tk[i]=0;//　基地を出たかのフラグ
      document.images["tn0"+i].style.left=tx[i]*3+gx-6;//　画像の表示位置を変更
      document.images["tn0"+i].style.top=ty[i]*3+gy-6;
      sd[i]="tn0"+i;
      tr[i]=0;//　敵の状態２
   }
   td[0]=3;

   if(demo==true)
   {
      title();
   }else{
      document.getElementById("round").innerHTML="Round "+ro;
      var lifestr="●●●";
      document.getElementById("life").style.left=gx+420-30*life;
      document.getElementById("life").innerHTML=lifestr.substring(0,life-1);
      setTimeout("main()",1700);
   }
}


function dotwrite()
{
   //　ドットの書き込み
   var dotNo=1;
   for(var i=0;i<30;i++)
   {
      for(var j=0;j<30;j++)
      {
         var pos=i*30+j;
         if((map[pos]>1)&&(map[pos]<8))
         {
            document.images["dot"+dotNo].style.left=gx+j*15;
            document.images["dot"+dotNo].style.top=gy+i*15;
            dmap[pos]=dotNo;//　ドットのマップを作成
            dotNo++;
         }else{
            dmap[pos]=0;
         }
      }
   }
}

function screenwrite()
{
   //　背景の選定
   for(var i=0;i<4;i++)
   {
      document.images["screen"+i].style.left=-600;
   }
   var scno=Math.floor(Math.random()*4);
   document.images["screen"+scno].style.left=gx;
   document.images["screen"+scno].style.top=gy;
}

function title()//　タイトル
{
   mx=65;
   my=155;
   document.images["title"].style.left=gx+3;
   document.images["title"].style.top=gy+87;
   document.images["copyright"].style.left=gx+114;
   document.images["copyright"].style.top=gy+30;
   document.images[mp].style.top=my*3+gy-6;
   document.getElementById("over").innerHTML="";
   document.getElementById("round").innerHTML="";
   document.getElementById("hi").innerHTML=hi;
   tekiMove();
   cl2=false;
   title2();
}

function title2()
{
   mx=Math.floor(Math.random()*150);
   if(Math.random()<.5){my=0;}else{my=150;}
   if(Math.random()<.005){screenwrite();}
   clearTimeout(timeId3);
   if(cl2==false){timeId3=setTimeout("title2()",20);}
}

function gameStart()
{
   key=0;
   cl=true;
   cl2=true;
   clearTimeout(timeId1);
   clearTimeout(timeId2);
   clearTimeout(timeId3);
   demo=false;
   document.images["title"].style.left=-700;
   document.images["copyright"].style.left=-700;
   document.getElementById("hi").innerHTML="";
   Init();
}


function goHome()
{
   window.open("http://plusone.jpn.org/javascript/");
}
function main()
{
   key=0;//　キーバッファのクリア
   document.getElementById("round").innerHTML="";
   myMove();//　自分の移動
   tekiMove();//　敵の移動
}

//　自分の移動
function myMove()
{
   mx+=v[md]*2.5;//　向いている方向に座標を進める
   my+=w[md]*2.5;
   if(mx==0){mx=145;}else{mx=mx-145*(mx==145);}//　ワープ
   if(mx%5+my%5==0)//　５で割り切れる位置にいるときが接触判定のタイミング
   {
      var pos=mx/5+my/5*30;//　地図配列で自分のいる場所
      if(map[pos+v[md]+w[md]*30]<2){md=4;}//　壁との接触判定md=4は止まっている状態
      if(((key==73)||(key==104))&&(map[pos-30]>1)){md=0;}//　キー入力と壁をチェックして
      if(((key==76)||(key==102))&&(map[pos+1]>1)){md=1;}//　方向を変える
      if(((key==75)||(key==98))&&(map[pos+30]>1)){md=2;}
      if(((key==74)||(key==100))&&(map[pos-1]>1)){md=3;}
      if(dmap[pos]!=0){dotGet(i,pos);}//　ドットとの接触判定
   }
   var fn="m"+md;
   if(fn!=mp)
   {
   document.images[mp].style.left=-100;//　画像消去
   mp=fn;
   }
   document.images[fn].style.left=mx*3+gx-6;//　画像の位置を変える
   document.images[fn].style.top=my*3+gy-6;
   mti=mti-(mti>0);
   if(mti==0){document.getElementById("mscore").innerHTML="";}
   clearTimeout(timeId1);
   if(cl==false){timeId1=setTimeout("myMove()",mInt);}//　割り込み処理
}

function dotGet(i,pos)
{
   var m=dmap[pos];
   document.images["dot"+m].style.left=-100;//　食べたドットを消す
   dmap[pos]=0;//　ドットマップも消す
   if((m==95)||(m==100)||(m==241)||(m==246))//　パワーエサかの判定
   {
      for(var i=0;i<3;i++)//　敵が逃げる設定とUターン設定
      {
         document.images["t"+i+""+td[i]].style.left=-100;//　通常キャラを消す
         document.images["tn1"+i].style.left=-100;//　パワーアップ終盤に取った時に備えて時間切れ用キャラも消す
         if((tmode[i]==0)&&(tr[i]==0)&&(tk[i]==1)){td[i]=td[i]+2-(td[i]>1)*4;}//　基地で眠っていない状態＆通常からパワーアップモードに入った＆基地から出ているならUターン
         if(tx[i]%5+ty[i]%5==0)//　５で割り切れるなら壁との接触判定
         {
            if(map[tx[i]/5+ty[i]/5*30+v[td[i]]+w[td[i]]*30]==1){td[i]=td[i]+2-(td[i]>1)*4;}//　行く先が壁ならUターン中止
         }
         msc=0;
         sd[i]="tn0"+i;
         tr[i]=pti;//　パワーアップ時間
      }
      sc+=50;
      mInt=fastInt;//　自分はスピードアップ
      tInt=stopInt;//　敵はスピードダウン
   }else{
      sc+=10;
   }
   if((sc>=up)&&(life<4))
   {
      up+=10000;
      life++;
      var lifestr="●●●";
      document.getElementById("life").style.left=gx+420-30*life;
      document.getElementById("life").innerHTML=lifestr.substring(0,life-1);
      mti=30;
      document.getElementById("mscore").style.left=gx+mx*3;
      document.getElementById("mscore").style.top=gy+my*3-6;
      document.getElementById("mscore").innerHTML="1UP!";
   }
   document.getElementById("score").innerHTML=sc;//　スコアの書き込み
   eat++;
   if(eat==278){clear();}
}

//　キーイベントをここでキャッチ
function keyCheack(e)
{
   if(bw==2){key=event.keyCode;}else{key=e.keyCode;}
}

//　敵の移動
function tekiMove()
{
   for(var i=0;i<3;i++)//　敵3匹分繰り返し
   {
      tr[i]=tr[i]-(tr[i]>1);//　パワーアップモードならカウントダウン
      if(tr[i]==1)//　パワーアップモード終了なら割り込みを通常に戻す
      {
         tr[i]=0;
         if(tr[0]+tr[1]+tr[2]==0)
         {
            mInt=slowInt;
            tInt=slowInt;
         }
      }
      if(tmode[i]>0)//　基地で休む状態の処理
      {
         tmode[i]=tmode[i]-(tr[i]==0);//　パワーアップ中はカウントダウンしない
         continue;
      }
      tj=tj-(tj>0)+(tj==0)*2500;//　敵の状態（待機or追跡）のカウントダウン
      if(tk[i]==2){//　向いている方向に座標を進める
         tx[i]+=v[td[i]]*5;
         ty[i]+=w[td[i]]*5;
   }else{
         tx[i]+=v[td[i]]*2.5;
         ty[i]+=w[td[i]]*2.5;
   }
      if(tx[i]==0){tx[i]=145;}else{tx[i]=tx[i]-(tx[i]==145)*145;}//　ワープ
      if(tx[i]%5+ty[i]%5==0)//　５で割り切れる位置にいるときが接触判定のタイミング
      {
         var pos=tx[i]/5+ty[i]/5*30;//　地図配列で自分のいる場所
         if((map[pos]>2)&&(map[pos]<12))//　現在地が交差点かどうか？
         {
            tekicross(i,pos);//　交差点での方向変換処理
         }else if(map[pos+v[td[i]]+w[td[i]]*30]==1)//　行く先は壁ではないか？
         {
            mitinari(i,pos);//　道なりに方向転換する処理
         }
      }
      var fn
      if(tk[i]==2){fn="me"+i;}else if(tr[i]==0){fn="t"+i+""+td[i];}else if(tr[i]>30){fn="tn0"+i;}else{fn="tn1"+i;}
      if(sd[i]!=fn)
      {
         document.images[sd[i]].style.left=-100;
         sd[i]=fn;
      }
      document.images[fn].style.left=tx[i]*3+gx-6;//　画像の位置を変える
      document.images[fn].style.top=ty[i]*3+gy-6;
      if((Math.abs(mx-tx[i])<5)&&(Math.abs(my-ty[i])<5))//　敵と自分の接触判定
      {
         if(tr[i]>0){tekiEat(i);}else{miss();}//　パワーアップ中なら食べた処理、それ以外はミス
      }
   }
   clearTimeout(timeId2);
   if(cl==false){timeId2=setTimeout("tekiMove()",tInt);}//　割り込み処理
}

//　交差点での方向変換処理
function tekicross(i,pos)
{
   var flag=false;//　思考ルーチン上、すでに方向転換が決定されたかのフラグ
   var d1,d2;//　方向変換の第一希望と第二希望
   var tgx,tgy;//　ターゲットの座標
   var m=map[pos];//　交差点の種類を取得
   var n1=parseInt(cross[m].charAt(0));//　交差点での動ける方向
   var n2=parseInt(cross[m].charAt(1));
   var n3=parseInt(cross[m].charAt(2));
   var backdi=td[i]+2-(td[i]>1)*4;//　バックの方向
   switch(i+1+(tj>1999)*3+(tk[i]==2)*7)
   {
   case 1:
      tgx=mx;
      tgy=my;
      break;
   case 2:
      tgx=tx[0]+(mx-tx[0])*2;
      tgy=ty[0]+(my-ty[0])*2;
      break;
   case 3:
      tgx=mx+v[md]*18;
      tgy=my+w[md]*18;
      break;
   case 4:
      tgx=Math.floor(Math.random()*65)+85;
      tgy=Math.floor(Math.random()*65);
   break;
   case 5:
      tgx=Math.floor(Math.random()*65)+85;
      tgy=Math.floor(Math.random()*65)+85;
      break;
   case 6:
      tgx=Math.floor(Math.random()*65);
      tgy=Math.floor(Math.random()*65);
      break;
   default:
      tgx=70;
      tgy=80;
      break;
   }
   var dx=Math.abs(tgx-tx[i]);//　ターゲットとの距離
   var dy=Math.abs(tgy-ty[i]);

   if(dx>dy)//　方向変換思考ルーチン
   {
      d1=(tgx<tx[i])*3+(tgx>=tx[i]);
      d2=(tgy>=ty[i])*2;
   }else{
      d1=(tgy>=ty[i])*2;
      d2=(tgx<tx[i])*3+(tgx>=tx[i]);
   }
   if((tr[i]>0)&&(tk[i]==1))
   {
      d1=d1+2-(d1>1)*4;
      d2=d2+2-(d2>1)*4;
   }
   if(m==3)
   {
      if(d1!=backdi){td[i]=d1;}else{td[i]=d2;}
   }else{
      if(d1!=backdi)
      {
         if((d1==n1)||(d1==n2)||(d1==n3))
         {
            td[i]=d1;
            flag=true;
         }
      }
      if((d2!=backdi)&&(flag==false))
      {
         if((d2==n1)||(d2==n2)||(d2==n3))
         {
            td[i]=d2;
         }
      }
   }
   if(m==11)
   {
      if(tk[i]==0)
      {
         tk[i]=1;
      }else{
         if(tk[i]==2)
         {
         reset(i);
         }
      } 
  }
}

//　道なりに方向変換する処理
function mitinari(i,pos)
{
   if(td[i]%2==0)//　偶数ならば縦の移動中です
   {
      if(map[pos-1]<2){td[i]=1;}else{td[i]=3;}//　道の形状により方向変換を決定
   }else{
      if(map[pos-30]<2){td[i]=2;}else{td[i]=0;}
   }
}


function tekiEat(i)//　敵を食べた時の処理
{
   if(tk[i]==2){return;}//　敵が食べられて基地へ戻る状態の時はリターン
   tk[i]=2;//　敵の状態
   tx[i]=tx[i]-tx[i]%5;//　５ドットずつの移動になるので座標を５ドット単位に戻す
   ty[i]=ty[i]-ty[i]%5;
   if(tx[i]<5){tx[i]=5;}
   if(tx[i]>140){tx[i]=140;}
   if(ty[i]<5){ty[i]=5;}
   if(ty[i]>140){ty[i]=140;}
   var pos=tx[i]/5+ty[i]/5*30;
   for(var j=0;j<4;j++)
   {
      if(map[pos+v[td[i]]+w[td[i]]*30]!=1){break;}
      td[i]=td[i]+1-(td[i]==3)*4;
   }
   msc++;//　パワーアップ中に食べた敵の数
   mti=30;//　得点の表示時間
   sc+=msc*200;
   document.getElementById("score").innerHTML=sc;//　スコアの書き込み
   document.getElementById("mscore").style.left=gx+tx[i]*3;
   document.getElementById("mscore").style.top=gy+ty[i]*3-6;
   document.getElementById("mscore").innerHTML=msc*200;
   if((sc>=up)&&(life<4))
   {
      up+=10000;
      life++;
      var lifestr="●●●";
      document.getElementById("life").style.left=gx+420-30*life;
      document.getElementById("life").innerHTML=lifestr.substring(0,life-1);
      mti=30;
      document.getElementById("mscore").style.left=gx*3+mx;
      document.getElementById("mscore").style.top=gy*3+my-6;
      document.getElementById("mscore").innerHTML="1UP!";
   }
      document.images["tn0"+i].style.left=-100;
      document.images["tn1"+i].style.left=-100;
}

function reset(i)//　敵が基地に戻ったら敵の状態をリセット
{
   ty[i]=80;
   tk[i]=0;
   td[i]=0;
   tr[i]=0;
   tmode[i]=20;
   if(tr[0]+tr[1]+tr[2]==0)//　敵を全部食べた時は割り込み間隔を戻す
   {
      mInt=slowInt;
      tInt=slowInt;
   }
}

function miss()//　ミスした時の処理
{
   cl=true;
   clearTimeout(timeId1);
   clearTimeout(timeId2);
   life--;
   if(life==0)
   {
      over();
   }else{
      document.getElementById("round").innerHTML="　MISS";
      setTimeout("startInit()",2000);
   }
}

function clear()//　ラウンドクリアの処理
{
   cl=true;
   clearTimeout(timeId1);
   clearTimeout(timeId2);
   document.getElementById("round").innerHTML="CLEAR!";
   pti=pti-(pti>40)*10;
   ro++;
   if(ro>7)//　８面以降はスピードアップ
   {
      fastInt=fastInt-(fastInt>10);
      slowInt=slowInt-(slowInt>10);
      stopInt=stopInt-(stopInt>10);
   }
   setTimeout("clear2()",1500);
}

function clear2()
{
   eat=0;//　食べたドットの数（２７８個でクリア）
   dotwrite();
   screenwrite();
   startInit();
}

function over()//　ゲームオーバーの処理
{
   cl=true;
   clearTimeout(timeId1);
   clearTimeout(timeId2);
   if(sc>hi){hi=sc;}
   document.getElementById("over").innerHTML="GAME OVER";
   demo=true;
   setTimeout("Init()",1500);
}

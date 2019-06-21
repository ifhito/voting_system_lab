//各入力フォームの名前が正しいかの確認用のフラグ
var p1_flag = 0;
var p2_flag = 0;
var p3_flag = 0;
var p4_flag = 0;
var fg1_flag = 0;
var fg2_flag = 0;
var fg3_flag = 0;
var fg4_flag = 0;

//登録する名前
var list = ['ghita','ギータ','ぎーた',
            '小山','koyama','こやま',
            '持田','mochida','もちだ',
            '姚','you','よう',
            '加瀬','kase','かせ',
            '関','seki','せき',
            '張','chou','ちょう',
            '前本','maemoto','まえもと',
            '池田','ikeda','いけだ',
            '坂元','sakamoto','さかもと',
            '荻野','ogino','おぎの'];

//PとFGの人数
var p_flag = 3;
var fg_flag = 3;


//各入力フォームに変化があった場合にそれぞれの関数が実行される
//正しい名前かどうかの確認
function submit_p1(){
  var p_1 = document.getElementById("p_1").value;
      
  if(list.indexOf(p_1) >= 0){
    p1_flag = 1;
    return true;
  }else{
    alert(p_1 + 'はリストに存在しません.');
    p1_flag = 0;
    return false;
  }
}

function submit_p2(){
  var p_2 = document.getElementById("p_2").value;
      
  if(list.indexOf(p_2) >= 0){
    p2_flag = 1;
    return true;
  }else{
    alert(p_2 + 'はリストに存在しません.');
    p2_flag = 0;
    return false;
  }
}

function submit_p3(){
  var p_3 = document.getElementById("p_3").value;
      
  if(list.indexOf(p_3) >= 0){
    p3_flag = 1;
    return true;
  }else{
    alert(p_3 + 'はリストに存在しません.');
    p3_flag = 0;
    return false;
  }
}

function submit_p4(){
  var p_4 = document.getElementById("p_4").value;
      
  if(list.indexOf(p_4) >= 0){
    p4_flag = 1;
    return true;
  }else{
    alert(p_4 + 'はリストに存在しません.');
    p4_flag = 0;
    return false;
  }
}

function submit_fg1(){
  var fg_1 = document.getElementById("fg_1").value;
      
  if(list.indexOf(fg_1) >= 0){
    fg1_flag = 1;
    return true;
  }else{
    alert(fg_1 + 'はリストに存在しません.');
    fg1_flag = 0;
    return false;
  }
}

function submit_fg2(){
  var fg_2 = document.getElementById("fg_2").value;
      
  if(list.indexOf(fg_2) >= 0){
    fg2_flag = 1;
    return true;
  }else{
    alert(fg_2 + 'はリストに存在しません.');
    fg2_flag = 0;
    return false;
  }
}

function submit_fg3(){
  var fg_3 = document.getElementById("fg_3").value;
      
  if(list.indexOf(fg_3) >= 0){
    fg3_flag = 1;
    return true;
  }else{
    alert(fg_3 + 'はリストに存在しません.');
    fg3_flag = 0;
    return false;
  }
}

function submit_fg4(){
  var fg_4 = document.getElementById("fg_4").value;
      
  if(list.indexOf(fg_4) >= 0){
    fg4_flag = 1;
    return true;
  }else{
    alert(fg_4 + 'はリストに存在しません.');
    fg4_flag = 0;
    return false;
  }
}


//入力した名前が全て正しければボタンを押せるようにする
//1秒ごとに入力フォームの状態を確認
function flag_check(){
  if((p1_flag + p2_flag + p3_flag + p4_flag == p_flag) &&
     (fg1_flag + fg2_flag + fg3_flag + fg4_flag == fg_flag)){
    document.send.elements[0].disabled = false;
  }else{
    document.send.elements[0].disabled = true;
  }
}
setInterval(flag_check,1000);

function btn_send(){  
  for(var i = 0; i < document.check.length; i ++){
    if(document.check[i].checked != true){
      alert("チェックされていない項目があります。");
    }
  }
}
var flag = 0;

var p_1 = document.getElementById("p_1").value;
var p_2 = document.getElementById("p_2").value;
var p_3 = document.getElementById("p_3").value;
var p_4 = document.getElementById("p_4").value;
var fg_1 = document.getElementById("fg_1").value;
var fg_2 = document.getElementById("fg_2").value;
var fg_3 = document.getElementById("fg_3").value;
var fg_4 = document.getElementById("fg_4").value;

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

function submit_p1(){
  var p_1 = document.getElementById("p_1").value;
      
  if(list.indexOf(p_1) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(p_2) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_2 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(p_3) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_3 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(p_4) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_4 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(fg_1) >= 0){
    flag += 1;
    return true;
  }else{
    alert(fg_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(fg_2) >= 0){
    flag += 1;
    return true;
  }else{
    alert(fg_2 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(fg_3) >= 0){
    flag += 1;
    return true;
  }else{
    alert(fg_3 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(fg_4) >= 0){
    flag += 1;
    return true;
  }else{
    alert(fg_4 + 'はリストに存在しません.');
    return false;
  }
  
}

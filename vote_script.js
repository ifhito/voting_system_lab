var flag = 0;

function submit(){
  //var p_elem = document.getElementsByClassName("P_box");
  //console.log(p_elem)
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
    alert(p_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(p_3) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(p_4) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(fg_1) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(fg_2) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(fg_3) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(list.indexOf(fg_4) >= 0){
    flag += 1;
    return true;
  }else{
    alert(p_1 + 'はリストに存在しません.');
    return false;
  }
  
  if(flag == 8){
    document.send.elements[0].disabled = false;
  }
}

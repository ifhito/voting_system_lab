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
var list = ['Ghita','ghita','ギータ','ぎーた',
            '小山','Koyama','koyama','こやま',
            '持田','Mochida','mochida','もちだ',
            '姚','You','you','よう',
            '加瀬','Kase','kase','かせ',
            '関','Seki','seki','せき',
            '張','Chou','chou','ちょう',
            '前本','Maemoto','maemoto','まえもと',
            '池田','Ikeda','ikeda','いけだ',
            '坂元','Sakamoto','sakamoto','さかもと',
            '荻野','Ogino','ogino','おぎの'];

//PとFGの人数
var p_flag = 1;
var fg_flag = 1;



//各入力フォームに変化があった場合にそれぞれの関数が実行される
//正しい名前かどうかの確認
/*
function submit_p1(){
  var p1 = document.getElementById("p1").value;
      
  if(list.indexOf(p1) >= 0){
    document.getElementById("p1").style.backgroundColor = "#FFFFFF";
    p1_flag = 1;
    return true;
  }else{
    //alert(p_1 + 'はリストに存在しません.');
    document.getElementById("p1").style.backgroundColor = "mistyrose";
    p1_flag = 0;
    return false;
  }
}

function submit_p2(){
  var p2 = document.getElementById("p2").value;
      
  if(list.indexOf(p2) >= 0){
    document.getElementById("p2").style.backgroundColor = "#FFFFFF";
    p2_flag = 1;
    return true;
  }else{
    document.getElementById("p2").style.backgroundColor = "mistyrose";
    p2_flag = 0;
    return false;
  }
}

function submit_p3(){
  var p3 = document.getElementById("p3").value;
      
  if(list.indexOf(p3) >= 0){
    document.getElementById("p3").style.backgroundColor = "#FFFFFF";
    p3_flag = 1;
    return true;
  }else{
    document.getElementById("p3").style.backgroundColor = "mistyrose";
    p3_flag = 0;
    return false;
  }
}

function submit_p4(){
  var p4 = document.getElementById("p4").value;
      
  if(list.indexOf(p4) >= 0){
    document.getElementById("p4").style.backgroundColor = "#FFFFFF";
    p4_flag = 1;
    return true;
  }else{
    document.getElementById("p4").style.backgroundColor = "mistyrose";
    p4_flag = 0;
    return false;
  }
}

function submit_fg1(){
  var fg1 = document.getElementById("fg1").value;
      
  if(list.indexOf(fg1) >= 0){
    document.getElementById("fg1").style.backgroundColor = "#FFFFFF";
    fg1_flag = 1;
    return true;
  }else{
    document.getElementById("fg1").style.backgroundColor = "mistyrose";
    fg1_flag = 0;
    return false;
  }
}

function submit_fg2(){
  var fg2 = document.getElementById("fg2").value;
      
  if(list.indexOf(fg2) >= 0){
    document.getElementById("fg2").style.backgroundColor = "#FFFFFF";
    fg2_flag = 1;
    return true;
  }else{
    document.getElementById("fg2").style.backgroundColor = "mistyrose";
    fg2_flag = 0;
    return false;
  }
}

function submit_fg3(){
  var fg3 = document.getElementById("fg3").value;
      
  if(list.indexOf(fg3) >= 0){
    document.getElementById("fg3").style.backgroundColor = "#FFFFFF";
    fg3_flag = 1;
    return true;
  }else{
    document.getElementById("fg3").style.backgroundColor = "mistyrose";
    fg3_flag = 0;
    return false;
  }
}

function submit_fg4(){
  var fg4 = document.getElementById("fg4").value;
      
  if(list.indexOf(fg4) >= 0){
    document.getElementById("fg4").style.backgroundColor = "#FFFFFF";
    fg4_flag = 1;
    return true;
  }else{
    document.getElementById("fg4").style.backgroundColor = "mistyrose";
    fg4_flag = 0;
    return false;
  }
}
*/


function submit(thisId){
  var value = document.getElementById(thisId).value;
  
  if(list.indexOf(value) >= 0){
    document.getElementById(thisId).style.backgroundColor = "#FFFFFF";
    switch(thisId){
      case "p1":
        p1_flag = 1;
        break;
      case "p2":
        p2_flag = 1;
        break;
      case "p3":
        p3_flag = 1;
        break;
      case "p4":
        p4_flag = 1;
        break;
      case "fg1":
        fg1_flag = 1;
        break;
      case "fg2":
        fg2_flag = 1;
        break;
      case "fg3":
        fg3_flag = 1;
        break;
      case "fg4":
        fg4_flag = 1;
        break;
    }
    return true;
  }else{
    document.getElementById(thisId).style.backgroundColor = "mistyrose";
    switch(thisId){
      case "p1":
        p1_flag = 0;
        break;
      case "p2":
        p2_flag = 0;
        break;
      case "p3":
        p3_flag = 0;
        break;
      case "p4":
        p4_flag = 0;
        break;
      case "fg1":
        fg1_flag = 0;
        break;
      case "fg2":
        fg2_flag = 0;
        break;
      case "fg3":
        fg3_flag = 0;
        break;
      case "fg4":
        fg4_flag = 0;
        break;
    }
    return false;
  }
}



// チェックボックスを全てチェックすると入力フォームがabledになる
function p_checkbox_check(){
  var check_list = new Array(5);
  
  check_list[0] = document.getElementById("check_p1").checked;
  check_list[1] = document.getElementById("check_p2").checked;
  check_list[2] = document.getElementById("check_p3").checked;
  check_list[3] = document.getElementById("check_p4").checked;
  check_list[4] = document.getElementById("check_p5").checked;
  
  // チェックボックスの状態を確認
  // 押されていないものがあれば名前を入力できない
  var check_flag = 0;
  for(var i = 0; i < check_list.length; i++){
    if(check_list[i] != true){
      check_flag = 1;
      break;
    }
  }
  
  // 全てのチェックボックスがチェックされていたら入力できるようにする
  if(check_flag == 0){
    for(var i=0; i<10; i++){
      document.p_form.elements[i].disabled = false;
      //document.fg_form.elements[i].disabled = false;
    }
  }else if(check_flag != 0){
    for(var i=0; i<10; i++){
      document.p_form.elements[i].disabled = true;
      //document.fg_form.elements[i].disabled = true;
    }
  }
}
function fg_checkbox_check(){
  var check_list = new Array(3);
  
  check_list[0] = document.getElementById("check_fg1").checked;
  check_list[1] = document.getElementById("check_fg2").checked;
  check_list[2] = document.getElementById("check_fg3").checked;
  
  // チェックボックスの状態を確認
  // 押されていないものがあれば名前を入力できない
  var check_flag = 0;
  for(var i = 0; i < check_list.length; i++){
    if(check_list[i] != true){
      check_flag = 1;
      break;
    }
  }
  
  // 全てのチェックボックスがチェックされていたら入力できるようにする
  if(check_flag == 0){
    for(var i=0; i<10; i++){
      //document.p_form.elements[i].disabled = false;
      document.fg_form.elements[i].disabled = false;
    }
  }else if(check_flag != 0){
    for(var i=0; i<10; i++){
      //document.p_form.elements[i].disabled = true;
      document.fg_form.elements[i].disabled = true;
    }
  }
}
setInterval(p_checkbox_check,1000);
setInterval(fg_checkbox_check,1000);



// 入力した名前が全て正しい&全てチェックしたらボタンを押せるようにする
// 1秒ごとに入力フォームとチェックボックスの状態を確認
function flag_check(){
  var check_list = new Array(8);

  check_list[0] = document.getElementById("check_p1").checked;
  check_list[1] = document.getElementById("check_p2").checked;
  check_list[2] = document.getElementById("check_p3").checked;
  check_list[3] = document.getElementById("check_p4").checked;
  check_list[4] = document.getElementById("check_p5").checked;
  check_list[5] = document.getElementById("check_fg1").checked;
  check_list[6] = document.getElementById("check_fg2").checked;
  check_list[7] = document.getElementById("check_fg3").checked;
  
  // チェックボックスの状態を確認
  // 押されていないものがあれば名前を入力できない
  var check_flag = 0;
  for(var i = 0; i < check_list.length; i++){
    if(check_list[i] != true){
      check_flag = 1;
      break;
    }
  }
  
  if(check_flag == 0 && 
     (p1_flag + p2_flag + p3_flag + p4_flag == p_flag) &&
     (fg1_flag + fg2_flag + fg3_flag + fg4_flag == fg_flag)){
    document.send.elements[0].disabled = false;
  }else{
    document.send.elements[0].disabled = true;
  }
}
setInterval(flag_check,1000);



// 投票ボタンを押した時の処理
function btn_send(){  
  /*var check_list = new Array(8);
  
  check_list[0] = document.getElementById("check_p1").checked;
  check_list[1] = document.getElementById("check_p2").checked;
  check_list[2] = document.getElementById("check_p3").checked;
  check_list[3] = document.getElementById("check_p4").checked;
  check_list[4] = document.getElementById("check_p5").checked;
  check_list[5] = document.getElementById("check_fg1").checked;
  check_list[6] = document.getElementById("check_fg2").checked;
  check_list[7] = document.getElementById("check_fg3").checked;
  
  // チェックボックスの状態を確認
  // 押されていないものがあればページ遷移できない
  var check_flag = 0;
  for(var i = 0; i < check_list.length; i++){
    if(check_list[i] != true){
      console.log(check_list);
      alert("チェックされていない項目があります。");
      check_flag = 1;
      break;
    }
  }
  
  // 全てのチェックボックスがチェックされていたら投票結果へ
  if(check_flag == 0){
    window.location.href = "result.html";
  }
  */
  window.location.href = "result.html";
}


function predict(thisInput,thisUl){
  const input = document.getElementById(thisInput);
  const ul = document.getElementById(thisUl);
  const dictMap = new Map([
    ["ギータ", ["ghita", "Ghita","ギータ","ぎーた"]],
    ["小山", ["koyama", "Koyama", "小山", "こやま"]],
    ["持田", ["mochida", "Mochida", "持田", "もちだ"]],
    ["姚", ["you", "You", "姚", "よう"]],
    ["加瀬", ["kase", "Kase", "加瀬", "かせ"]],
    ["関", ["seki", "Seki", "関", "せき"]],
    ["張", ["chou", "Chou", "張", "ちょう"]],
    ["荻野", ["ogino", "Ogino", "荻野", "おぎの"]],
    ["池田", ["ikeda", "Ikeda", "池田", "いけだ"]],
    ["前本", ["maemoto", "Maemoto", "前本", "まえもと"]],
    ["坂元", ["sakamoto", "Sakamoto", "坂元", "さかもと"]],
  ]);
  
  
  dictMap.forEach((v, key) => {
    
    const li = document.createElement("li");
    li.innerHTML = key;
    li.style.display = "none";
    
    // 候補部分をクリックした時
    li.onclick = () => {
      // 1回目の処理
      input.value = li.innerHTML;
      submit(thisInput);
      for (let i = 0; i < ul.children.length; ++i) {
        ul.children[i].style.display = "none";
      }
      
      // 2回目以降
      input.onblur = () => {
        window.setTimeout(
          (function(){
            for (let i = 0; i < ul.children.length; ++i) {
              ul.children[i].style.display = "none";
            }
          })
        ,200);
        window.setTimeout((function(){submit(thisInput)}),100);
      };
      
    };
    ul.appendChild(li);
  });
  
  // フォームに文字を入力した時
  input.onkeyup = () => {
    const str = input.value;
    let idx = 0;
    dictMap.forEach((arr, key) => {
      if (
        str !== ""
        && arr.reduce((acc, cur) => acc || cur.indexOf(str) === 0, false)
      ) {
        ul.children[idx].style.display = "block";
      } else {
        ul.children[idx].style.display = "none";
      }
      ++idx;
    });
    
    input.onblur = () => {
        window.setTimeout(
          ()=>{
            for (let i = 0; i < ul.children.length; ++i) {
              ul.children[i].style.display = "none";
            }
          }
        ,200);
        window.setTimeout(()=>{submit(thisInput)},100);
      };
    
  };
}

/*
//ここから下追加しました(関)
function addValue(thisId){
  let input_sent;//中のtext格納する変数
  //console.log(thisId.id)
  //datalistの情報を取得
  let U = window.document.getElementById("my-friends"+thisId.id)//Uでdatalist内のデータを取得
  //内部に要素がある場合
  if(U.innerHTML!=null){
    //要素を空にする
    U.innerHTML="";
  }
  //console.log(U);
  //console.log(window.document.getElementById("opt")!=null);
  //id="neko"(今回はinput)要素を受け取る
  let idname = thisId.id//idの取得
  //要素の値をinput_sentへ
  input_sent = document.getElementById(idname).value;
  //console.log(input_sent);
  //これが予測変換用の辞書
  const names={
               'seki':'Seki',
               'mochida':'Mochida', 
               'kase':'Kase', 
               'chou':'Chou',
               'you':'You',
               'koyama':'Koyama',
               'ghita':'Ghita',
               'ogino':'Ogino',
               'ikeda':'Ikeda',
               'sakamoto':'Sakamoto',
               'maemoto':'Maemoto',
               'Seki':'Seki',
               'Mochida':'Mochida', 
               'Kase':'Kase', 
               'Chou':'Chou',
               'You':'You',
               'Koyama':'Koyama',
               'Ghita':'Ghita',
               'Ogino':'Ogino',
               'Ikeda':'Ikeda',
               'Sakamoto':'Sakamoto',
               'Maemoto':'Maemoto',
              }
              
  //const names = ['関', '持田', '加瀬', '張','姚','小山','Ghita','荻野','池田','坂元','前本','せき','もちだ'];
  //配列内の単語でfor
  for(let key in names){
    //もしも、配列内の要素の一番初めの要素が合致していた場合(現段階では先頭要素のみ←と思っていたが、後ろ要素はautocompleteが自動的に見てくれているので実質全体見れている)
    if(String(key).charAt(0)==input_sent.charAt(0)){
      //datalist内部のoption要素の作成(これが予測変換として表示される)
      let option = document.createElement('option');
      option.id="opt"+thisId.id;//idの設定
      //console.log(option);
      //optionの値を設定する
      option.value = String(names[key]);//辞書のValueをlistに追加
      option.innerHTML = String(names[key]);
      //console.log(toString.call(option.value));
      //console.log(option.value);
      //datalist内に追加
      U.appendChild(option);//子要素としてappendする
    }
    
  }
  
}
*/
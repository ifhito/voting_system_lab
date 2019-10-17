//投票画面のjsファイル
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
            '姚','Yao','yao','よう',
            '加瀬','Kase','kase','かせ',
            '関','Seki','seki','せき',
            '張','Chou','chou','ちょう','zhang','Zhang',
            '前本','Maemoto','maemoto','まえもと',
            '池田','Ikeda','ikeda','いけだ',
            '坂元','Sakamoto','sakamoto','さかもと',
            '荻野','Ogino','ogino','おぎの'];

//PとFGの人数
//指定した数だけフォームに入力できる & firebaseにデータが送信される
var p_num = 2;
var fg_num = 2;

//投票者のID。ログイン時に割り当てられるようにしとく。
var selfID = "Kase"



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
  var p_form = ['p1','p2','p3','p4','p5','p6'];
  
  if(check_flag == 0){
    for(var i=0; i<p_num; i++){
      document.p_form.elements[i].disabled = false;
      //document.fg_form.elements[i].disabled = false;
      document.getElementById(p_form[i]).style.borderColor = "#000000";
    }
  }else if(check_flag != 0){
    for(var i=0; i<p_num; i++){
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
  var fg_form = ['fg1','fg2','fg3','fg4','fg5','fg6'];
  
  if(check_flag == 0){
    for(var i=0; i<fg_num; i++){
      //document.p_form.elements[i].disabled = false;
      document.fg_form.elements[i].disabled = false;
      document.getElementById(fg_form[i]).style.borderColor = "#000000";
    }
  }else if(check_flag != 0){
    for(var i=0; i<fg_num; i++){
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
  let check_list = new Array(8);
  let check = "";
  for(let i = 1; i<9; i++ ){
    if(i<6){
      check = "check_p"+i;
    }else{
      check = "check_fg"+(i-5);
    }
    check_list[i - 1] = document.getElementById(check).checked;
  }
  // check_list[0] = document.getElementById("check_p1").checked;
  // check_list[1] = document.getElementById("check_p2").checked;
  // check_list[2] = document.getElementById("check_p3").checked;
  // check_list[3] = document.getElementById("check_p4").checked;
  // check_list[4] = document.getElementById("check_p5").checked;
  // check_list[5] = document.getElementById("check_fg1").checked;
  // check_list[6] = document.getElementById("check_fg2").checked;
  // check_list[7] = document.getElementById("check_fg3").checked;
  
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
     (p1_flag + p2_flag + p3_flag + p4_flag == p_num) &&
     (fg1_flag + fg2_flag + fg3_flag + fg4_flag == fg_num)){
    document.send.elements[0].disabled = false;
  }else{
    document.send.elements[0].disabled = true;
  }
}
setInterval(flag_check,1000);



// 投票ボタンを押した時の処理
const fakePairData = {pair1:{P:"Zhang", FG:"Seki"}, pair2:{P:"Koyama", FG:"Mochida"}, pair3:{P:"Yao", FG:"Kase"}};
async function btn_send(){  
  
  /* firebaseにデータを送信 */
  //テキストボックスのidをまとめた配列。検索しやすくするために用意した。
  var p_form = ['p1','p2','p3','p4','p5'];
  var fg_form = ['fg1','fg2','fg3','fg4','fg5'];
  //各テキストボックスの値を記録するための配列。
  var p_form_value = new Array(5);
  var fg_form_value = new Array(5);
  
  //PとFGの数だけテキストボックスの値を取得
  for(let i=0; i<p_num; i++){
    p_form_value[i] = document.getElementById(p_form[i]).value;
  }
  for(let i=0; i<fg_num; i++){
    fg_form_value[i] = document.getElementById(fg_form[i]).value;
  }
  
  //各フォームのデータを成形してfirebaseに送信
  for(let i = 0; i < p_num; i++){
    var p_voteData = {
      votersId: selfID,
      votedId: p_form_value[i],
      voteRank: i+1,
    };
    addVoteData(p_voteData);
  }
  for(let i = 0; i < fg_num; i++){
    var fg_voteData = {
      votersId: selfID,
      votedId: fg_form_value[i],
      voteRank: i+1,
    };
    addVoteData(fg_voteData);
    addPairData(fakePairData);
  }
  
  //投票結果画面へ遷移
  window.location.href = "result.html"
  //setTimeout(move,3000);
}


function predict(thisInput,thisUl){
  const input = document.getElementById(thisInput);
  const ul = document.getElementById(thisUl);
  const dictMap = new Map([
    ["Ghita", ["ghita", "Ghita","ギータ","ぎーた"]],
    ["Koyama", ["koyama", "Koyama", "小山", "こやま"]],
    ["Mochida", ["mochida", "Mochida", "持田", "もちだ"]],
    ["Yao", ["yao", "Yao", "姚", "よう"]],
    ["Kase", ["kase", "Kase", "加瀬", "かせ"]],
    ["Seki", ["seki", "Seki", "関", "せき"]],
    ["Zhang", ["zhang","Zhang","chou", "Chou", "張", "ちょう"]],
    ["Ogino", ["ogino", "Ogino", "荻野", "おぎの"]],
    ["Ikeda", ["ikeda", "Ikeda", "池田", "いけだ"]],
    ["Maemoto", ["maemoto", "Maemoto", "前本", "まえもと"]],
    ["Sakamoto", ["sakamoto", "Sakamoto", "坂元", "さかもと"]],
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



/* firebase関連のscript */
var firebaseConfig = {
        apiKey: "AIzaSyDSW3UfkgT5kO1kTzDIFlv_QsDRkKmUCfs",
        authDomain: "voting-system-6d23d.firebaseapp.com",
        databaseURL: "https://voting-system-6d23d.firebaseio.com",
        projectId: "voting-system-6d23d",
        storageBucket: "voting-system-6d23d.appspot.com",
        messagingSenderId: "515017082682",
        appId: "1:515017082682:web:a20d97cedb8e0105"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

function getTodayTimestamp(){
    var date = new Date();
    var today = date.getTime()
 - date.getMilliseconds()
 - date.getSeconds()*1000
 - date.getMinutes()*1000*60
 - date.getHours()*1000*60*60;
    console.log(today);
    return today;
};

function dayToTimestamp(formattedDayTime){
  return Date.parse(formattedDayTime);
};

function overWriteDataToDB(database, docPath, newData){
  // 注意:この関数を使うと、該当doc内の内容は「書き換えられる(上書きされる)」ので、不用意に使わないでください
  database.doc(docPath).update(
    newData // ←ここは上書きする動作のコード
  ).then (function() {
    console.log("Document written with ID: ");
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  });
};


function addDataToDB(database, docPath, newData){
  // util function to add data to database
  database.doc(docPath).set(
    newData, { merge: true }
  ).then (function() {
    console.log("Document written with ID: ");
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  });
};


// document.getElementById("text-button_update_vote").onclick = async() => {updateVoteData(fakeData);};
// document.getElementById("text-button_add_vote").onclick = async() => {addVoteData(fakeData);};
/*
var fakeData = {
    votersID:"Seki",
    votedID:"Zhang",
    voteRank:3,
}
*/
async function addVoteData(voteData){
  try{
    //document.getElementById("add_vote").innerHTML = "send";
    // Add a new document with a generated id.
    let todayTimestamp = getTodayTimestamp();
    let timestamp = new Date().getTime();
    let jstTime = new Date().toString();
    console.log(timestamp);
    let newData = {
        [timestamp]:{
          voters_id:voteData.votersId,
          voted_id:voteData.votedId,
          vote_rank:voteData.voteRank,
          timestamp:timestamp,
          jst_time:jstTime,
        }
    };
    await addDataToDB(db, "vote_data/"+[todayTimestamp]+"/", newData);
    console.log("update succeed");
  } catch (error){
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  }
};

//var selfID = 'zhang';

function updateStatus(database, dateTimestamp){
  var docPath = 'todays_participant/'+dateTimestamp.toString()+'/';
  var newData = {[selfID]:true}; // ここのセルフIDはブラウザ内部のID管理で取得する、グローバル変数を参照 関数定義の上の二行目
  addDataToDB(database, docPath, newData);
};

function updatePresentationDuration(database, dateTimestamp, presenterID, duration){
  var docPath = 'presentation_duration/'+dateTimestamp.toString()+'/';
  var newData = {[presenterID]:{
    duration:duration,
  }};
  addDataToDB(database, docPath, newData);
};

function getDataFromDB(database, docPath,){
  var docRef = db.doc(docPath);

  docRef.get().then(function(doc) {
      if (doc.exists) {
        var docData = doc.data();
          console.log("Document data:", docData);
        return docData;
      } else {
          console.log("No such document!");
        return "";
      };
  }).catch(function(error) {
      console.log("Error getting document:", error);
    return "";
  });
};

function getVoteData(database, timestamp){
  var data = getDataFromDB(database, "vote_data/"+timestamp.toString());
  return data;
};


async function addPairData(pairData){
  try{
    //document.getElementById("add_vote").innerHTML = "send";
    // Add a new document with a generated id.
    let todayTimestamp = getTodayTimestamp();
    let timestamp = new Date().getTime();
    console.log(timestamp);
    var newData = pairData;
    newData['updated_at'] = timestamp;
      
    await addDataToDB(db, "pair_data/"+[todayTimestamp]+"/", newData);
    console.log("update succeed");
  } catch (error){
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  };
};
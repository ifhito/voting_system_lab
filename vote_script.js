/***** ドラッグ開始時の処理 *****/
function f_dragstart(event){
  //ドラッグするデータのid名をDataTransferオブジェクトにセット
  event.dataTransfer.setData("text", event.target.id);
}

/***** ドラッグ要素がドロップ要素に重なっている間の処理 *****/
function f_dragover(event){
  //dragoverイベントをキャンセルして、ドロップ先の要素がドロップを受け付けるようにする
  event.preventDefault();
}

/***** ドロップ時の処理 *****/
function f_drop(event){  
  //ドラッグされたデータのid名をDataTransferオブジェクトから取得
  var id_name = event.dataTransfer.getData("text");
  //id名からドラッグされた要素を取得
  var drag_elm =document.getElementById(id_name);
  //ドロップ先にドラッグされた要素を追加
  event.currentTarget.appendChild(drag_elm);
  //エラー回避のため、ドロップ処理の最後にdropイベントをキャンセルしておく
  event.preventDefault();
}

function submit(){
  //var p_elem = document.getElementsByClassName("P_box");
  //console.log(p_elem)
  var p_1 = document.getElementsByClassName("p_1");
  var p_2 = document.getElementsByClassName("p_2");
  var p_3 = document.getElementsByClassName("p_3");
  var p_4 = document.getElementsByClassName("p_4");
  var fg_1 = document.getElementsByClassName("fg_1");
  var fg_2 = document.getElementsByClassName("fg_2");
  var fg_3 = document.getElementsByClassName("fg_3");
  var fg_4 = document.getElementsByClassName("fg_4");
  
  var list = ["小山","持田","姚","加瀬","関","張","前本","池田","坂元","荻野"];
  
  if(list.indexOf(p_1) == -1){
    alert("リストに存在しない名前です。")
    return false;
  }
  if(list.indexOf(p_2) == -1){
    alert("リストに存在しない名前です。")
    return;
  }
  if(list.indexOf(p_3) == -1){
    alert("リストに存在しない名前です。")
    return;
  }
  if(list.indexOf(p_4) == -1){
    alert("リストに存在しない名前です。")
    return;
  }
  if(list.indexOf(fg_1) == -1){
    alert("リストに存在しない名前です。")
    return;
  }
  if(list.indexOf(fg_2) == -1){
    alert("リストに存在しない名前です。")
    return;
  }
  if(list.indexOf(fg_3) == -1){
    alert("リストに存在しない名前です。")
    return;
  }
  if(list.indexOf(fg_4) == -1){
    alert("リストに存在しない名前です。")
    return;
  }
}

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
  var p_1 = document.getElementById("p_1").textContent;
  var p_2 = document.getElementById("p_2").textContent;
  var p_3 = document.getElementById("p_3").textContent;
  var p_4 = document.getElementById("p_4").textContent;
  var fg_1 = document.getElementById("fg_1").textContent;
  var fg_2 = document.getElementById("fg_2").textContent;
  var fg_3 = document.getElementById("fg_3").textContent;
  var fg_4 = document.getElementById("fg_4").textContent;
  
  var list = ['小山','持田','姚','加瀬','関','張','前本','池田','坂元','荻野'];
    
  console.log(p_1);
  if(p_1 == "加瀬"){
    document.send.elements[0].disabled = false;
    return true;
  }else{
    alert(p_1);
    return false;
  }
}

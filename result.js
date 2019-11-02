//投票結果画面のjsファイル

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyCD3zAlWdo1Y8e1TlX6FOrLLisviP3gOs0",
//   authDomain: "testdb-32343.firebaseapp.com",
//   databaseURL: "https://testdb-32343.firebaseio.com",
//   projectId: "testdb-32343",
//   storageBucket: "testdb-32343.appspot.com",
//   messagingSenderId: "203459977337",
//   appId: "1:203459977337:web:02b88f0757f9444d"
// };

// var firebaseConfig = {
//   apiKey: "AIzaSyDSW3UfkgT5kO1kTzDIFlv_QsDRkKmUCfs",
//   authDomain: "voting-system-6d23d.firebaseapp.com",
//   databaseURL: "https://voting-system-6d23d.firebaseio.com",
//   projectId: "voting-system-6d23d",
//   storageBucket: "voting-system-6d23d.appspot.com",
//   messagingSenderId: "515017082682",
//   appId: "1:515017082682:web:a20d97cedb8e0105"
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
//heightの設定
let height = 40;
//fgの変数初期化
let fg = new Map();
//pの変数初期化
let p = new Map();
//タイムスタンプの取得
const timestamp = getTodayTimestamp();
//一つの文字のサイズ
let text_size = 100;
//screenheightはwidowの2分の1
let screenheight = window.innerHeight / 2;
//screenwidthはwindowの2分の1
let screenwidth = window.innerWidth / 2;
//canvasの初期化
let canvas = document.getElementById("myCanvas");
//canvasは2d
let ctx = canvas.getContext("2d");

//棒グラフの描写
let drawRect = (x, y, w, h) => {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(x, y, w, h);
};
//文字の設定
let drawWord = (text, x, y, Maxlength) => {
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.font = "20px 'ＭＳ ゴシック'";
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillText(text, x, y, Maxlength);
};
//canpasの描画
const draws = () => {
  //全体のcanpasを作成する
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //描画のリセット
  ctx.beginPath();
  //棒グラフの描画
  ctx.fillStyle = "rgb(255,255,255)";
  //Rectの作成
  ctx.fillRect(0, 0, 740, 300);
  //文字間の幅を決めるためのj
  let j = 0;
  //fgを繰り返しで表示

  drawWord(
    "FG",
    text_size * 1.5,
    (10 + height) * (j + 1) + height / 2,
    text_size
  );
  fg.forEach((value, key, map) => {
    //console.log(key);
    drawWord(key, text_size, (10 + height) * (j + 2) + height / 2, text_size);
    drawRect(text_size * 1.5, (10 + height) * (j + 2), value, height);
    drawWord(
      String(value),
      text_size * 1.5 + value * 3,
      (10 + height) * (j + 2) + height / 2,
      text_size
    );
    j++;
  });
  //次の列に変換なのでjを初期化
  j = 0;
  drawWord("P", text_size * 1.5 + 400, 10 + height + height / 2, text_size);
  p.forEach((value, key, map) => {
    drawWord(
      key,
      text_size + 400,
      (10 + height) * (j + 2) + height / 2,
      text_size
    );
    drawRect(text_size * 1.5 + 400, (10 + height) * (j + 2), value, height);
    drawWord(
      String(value),
      text_size * 1.5 + value * 5 + 400,
      (10 + height) * (j + 2) + height / 2,
      text_size
    );
    j++;
  });
  //canvasの描画
  let canvas = document.getElementById("myCanvas");
  //png化
  let png = canvas.toDataURL();
  document.getElementById("newImg").src = png;
  // console.log("end");
};
//windowがロードされた時
window.onload = async () => {
  // console.log(p, fg);
  await getPairData(db, "pair_data/" + timestamp.toString());
  // console.log("end getPairData");
  if (!Object.keys(fg).length && !Object.keys(p).length) {
    //ここでVoteDataの更新
    await getVoteData(db, timestamp);
  }
  // console.log(fg, p);
  // console.log("end getVoteData");
  setInterval(draws, 1000);
};
//Timestampの取得
function getTodayTimestamp() {
  var date = new Date();
  var today =
    date.getTime() -
    date.getMilliseconds() -
    date.getSeconds() * 1000 -
    date.getMinutes() * 1000 * 60 -
    date.getHours() * 1000 * 60 * 60;
  // console.log(today);
  return today;
}
//DBからデータを持ってくる
function getDataFromDB(database, docPath) {
  var docRef = db.doc(docPath);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        var docData = doc.data();
        //ここでランクの抽出と更新
        //p.set(doc_data[key].voted_id, 0);
        //fg.set(doc_data[key].voted_id, 0);
        doc_data = doc.data();
        // console.log(doc_data);
        //fgの変数初期化
        let fgNum = 0;
        //pの変数初期化
        let pNum = 0;
        p.forEach((value,key) => {
          console.log(key);
          p.set(key, 0);
        });
        fg.forEach((value,key) => {
          fg.set(key, 0);
        })
        Object.keys(doc_data).forEach(function(key) {
          //rankの4-rankを追加する
          // console.log("getDataFromDB_voted_id", doc_data[key].voted_id);
          // console.log("getDataFromDB_vote_rank", doc_data[key].vote_rank);
          if (p.has(doc_data[key].voted_id)) {
            // console.log("getDataFramDB" + p.get(doc_data[key].voted_id));
            pNum = p.get(doc_data[key].voted_id);
            p.set(doc_data[key].voted_id, pNum + 4 - doc_data[key].vote_rank);
            // console.log(p, fg);
          } else if (fg.has(doc_data[key].voted_id)) {
            // console.log("getDataFramDB" + doc_data[key].voted_id);
            fgNum = fg.get(doc_data[key].voted_id);
            // console.log(fgNum);
            fg.set(doc_data[key].voted_id, fgNum + 4 - doc_data[key].vote_rank);
            // console.log(p, fg);
          }
        });
        return docData;
      } else {
        console.log("No such document!");
        return "";
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
      return "";
    });
}

async function getVoteData(database, timestamp) {
  // console.log("x");
  let data = await getDataFromDB(database, "vote_data/" + timestamp.toString());
  // console.log(data);
  return data;
}

async function getPairData(database, docPath) {
  let docRef = db.doc(docPath);

  await docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        //fgとpでデータを分ける
        const docData = doc.data();
        Object.keys(docData).forEach(key => {
          //undefinedでない場合
          if (docData[key].P != undefined && docData[key].FG != undefined) {
            fg.set(docData[key].FG, 0);
            p.set(docData[key].P, 0);
          }
        });
        return docData;
      } else {
        console.log("No such document!");
        return "";
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
      return "";
    });
}

let doc_data = {};
//更新時の更新を行うonSnapshot
db.collection("vote_data")
  .doc(timestamp.toString())
  .onSnapshot(doc => {
    doc_data = doc.data();
    // console.log(doc_data);
    //fgの変数初期化
    let fgNum = 0;
    //pの変数初期化
    let pNum = 0;
    p.forEach((value,key) => {
      console.log(key);
      p.set(key, 0);
    });
    fg.forEach((value,key) => {
      fg.set(key, 0);
    })
    Object.keys(doc_data).forEach(key => {
      //rankの4-rankを追加する
      // console.log("onSnapshot_voted_id", doc_data[key].voted_id);
      // console.log("onSnapshot_vote_rank", doc_data[key].vote_rank);
      if (p.has(doc_data[key].voted_id)) {
        // console.log("onSnapshot" + doc_data[key].voted_id);
        pNum = p.get(doc_data[key].voted_id);
        p.set(
          doc_data[key].voted_id,
          p.get(doc_data[key].voted_id) + 4 - doc_data[key].vote_rank
        );
        // console.log(p, fg);
      } else if (fg.has(doc_data[key].voted_id)) {
        // console.log("onSnapshot" + doc_data[key].voted_id);
        fgNum = fg.get(doc_data[key].voted_id);
        // console.log(fgNum);
        fg.set(
          doc_data[key].voted_id,
          fg.get(doc_data[key].voted_id) + 4 - doc_data[key].vote_rank
        );
        // console.log(p, fg);
      }
      //console.log(p, fg);
    });
    // console.log(p, fg);
  });

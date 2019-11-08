// googleチャートAPIのロード
google.charts.load("current", { packages: ["corechart"] });
//プレゼンターの結果の変数
let presentorResult = new Map();
//ファシリテータの結果の変数
let facilitatorResult = new Map();
//googleで最終的に表示するtableの配列
let table = [["member"]];

//全てのグラフを書く関数
async function drawAllChart(data) {
  presentorResult = new Map();
  facilitatorResult = new Map();
  //voteDataにdataを入れる
  const voteData = data;
  for (let votersId in voteData) {
    table[0].push(votersId);
    for (let votedId in voteData[votersId]) {
      //プレゼンターだった場合
      if (voteData[votersId][votedId]["role"] == "Presentor") {
        //その名前が連想配列内にあるかどうか
        if (presentorResult.has(votedId)) {
          presentorResult
            .get(votedId)
            .push(voteData[votersId][votedId]["vote_rank"]);
        } else {
          presentorResult.set(votedId, [
            voteData[votersId][votedId]["vote_rank"]
          ]);
        }
        //ファシリテータだった場合
      } else if (voteData[votersId][votedId]["role"] == "Facilitator") {
        //その名前が連想配列内にあるかどうか
        if (facilitatorResult.has(votedId)) {
          facilitatorResult
            .get(votedId)
            .push(voteData[votersId][votedId]["vote_rank"]);
        } else {
          facilitatorResult.set(votedId, [
            voteData[votersId][votedId]["vote_rank"]
          ]);
        }
      }
    }
  }
  //プレゼンターとファシリテータのランクの変更およびソート
  presentorResult = fixRankAndSort(presentorResult);
  facilitatorResult = fixRankAndSort(facilitatorResult);
  console.log(facilitatorResult);
  //必要なものを追加する
  table[0].push({ role: "annotation" });
  //チャートを描画する
  google.charts.setOnLoadCallback(drawChart(presentorResult, "chart_div"));
  google.charts.setOnLoadCallback(drawChart(facilitatorResult, "chart_div2"));
}
//sumの計算
const reducer = (accumulator, currentValue) => accumulator + currentValue;
//ランクの変更およびソートする関数(すごく読みにくい)
function fixRankAndSort(result) {
  //Mapを返す
  return new Map(
    [...result.entries()]
      .map(value => [value[0], value[1].map(val => result.size - val)])
      .sort((key1, key2) => key1[1].reduce(reducer) - key2[1].reduce(reducer))
  );
}

//グラフを描く関数
function drawChart(result, locate) {
  //tableをコピーする配列
  let table_dev = [[]];
  //tableのコピー
  table_dev[0] = table[0];
  //投票者の数
  const vorters_number = table[0].length - 2;
  //自分に投票できないためその部分に0を挿入する
  result.forEach((value, key) => {
    let value_len = value.length;
    if (value_len != vorters_number) {
      value.splice(table[0].indexOf(key) - 1, 0, 0);
    }
    //色の指定をするための空文字列
    value.push("");
    //keyとvalueを連結してテーブルに入れる
    table.push([key].concat(value));
  });
  //tableの最初の要素の名前を空白にする
  table[0] = [table[0][0]]
    .concat(Array(table[0].length - 2))
    .fill("")
    .concat([table[0][table[0].length - 1]]);

  const data = google.visualization.arrayToDataTable(table);

  const options = {
    title: locate == "chart_div" ? "Presentor" : "Facilitator",
    titleTextStyle: { fontName: "Meiryo UI", fontSize: 30 },
    width: 600,
    height: 400,
    legend: { position: "top", maxLines: 3 },
    bar: { groupWidth: "75%" },
    hAxis: {
      ticks: [...Array(Math.pow(result.size, 2) + 5).keys()]
    },
    isStacked: true
  };
  // Instantiate and draw our chart, passing in some options.
  const chart = new google.visualization.BarChart(
    document.getElementById(locate)
  );
  google.visualization.events.addListener(chart, "ready", function() {
    locate.innerHTML = '<img src="' + chart.getImageURI() + '">';
  });
  chart.draw(data, options);
  table = table_dev;
}

//snapshotで受け取り
db.collection("vote_data")
  .doc(getTodayTimestamp().toString())
  .onSnapshot(doc => {
    drawAllChart(doc.data());
  });

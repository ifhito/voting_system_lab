# ゼミ用投票システム

* index.htmlがメインファイル
* login.htmlがログイン用
* utilslib.jsが全体用の
* vote_style.cssが全体のCSS

## `XXXX.html` ファイルのhead内のjsファイルの読み込み順序(←移行は未完成)
必ず以下の順番で読み込んでください
1. `/read_firebase.js` ← これはfirebaseの設定を読み込むためのjsファイル
1. `/utilslib.js` ← これは関数だけを置くためのjsファイル
1. `/XXXX.js` ←　ここのXXXXは読み込ませたいhtmlファイルの名前と一致、このファイルの中に特定ページの処理を書く

## 実現した機能
- メアド+パスワードで管理、firebaseのアカウント管理機能に委託
- プレゼンターとファシリテータの要チェック項目をチェックしないと投票できない
- 自分に投票出来ない
- 同じ人に複数票入れられない

## `firestore`のデータ構造
```
voting-system-6d23d
  |-- vote_data (投票データのcollection)
  |     |-- day_timestamp (投票日のタイムスタンプごとにdocumentがある)
  |     |     |-- voters_id_1 (投票者のIDがkey)
  |     |     |     |-- voted_id_1 (被投票者のID)
  |     |     |     |     |-- role (被投票者の役割)
  |     |     |     |     |-- updated_at (投票データがアップデートされた時間)
  |     |     |     |     |-- vote_rank (何位か)
  |     |     |     |-- voted_id_2 (被投票者のID)
  |     |     |     |     |-- role (被投票者の役割)
  |     |     |     |     |-- updated_at (投票データがアップデートされた時間)
  |     |     |     |     |-- vote_rank (何位か)
  |     |     |     |-- . . .
  |     |     |     |-- . . .
  |     |     |-- voters_id_2
  |     |     |-- . . .
  |     |-- . . .
  |     |-- . . .
  |-- todays_participant (今日の参加者情報)
  |     |-- day_timestamp (投票日のタイムスタンプごとにdocumentがある)
  |     |     |-- name_1(出席者の名前がkey) : 最終ログインのタイムスタンプ
  |     |     |-- name_2
  |     |     |-- . . .
  |     |-- . . .
  |     |-- . . .
  |-- user_name (ユーザ名情報)
  |-- 

```

## to do list
- 当日の参加者だけに投票できるようにする
  - 現状、発表にしていない人にも投票できる
- PとFGの違いをチェックできるようにする
  - 現状、どの役割の人で任意に入れて送信が可能
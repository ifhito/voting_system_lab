// Firebase App is always required and must be first-->
src="https://www.gstatic.com/firebasejs/5.9.1/firebase-app.js"
//Add additional services that you want to use-->
src="https://www.gstatic.com/firebasejs/5.9.1/firebase-auth.js"
    
src="https://cdn.firebase.com/libs/firebaseui/4.0.0/firebaseui.js"

src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js"

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyCW_Zgmt2vkpAsUbV4Ksf6dmhtLms58ubM",
        authDomain: "fir-test1-1e20d.firebaseapp.com",
        databaseURL: "https://fir-test1-1e20d.firebaseio.com",
        projectId: "fir-test1-1e20d",
        storageBucket: "fir-test1-1e20d.appspot.com",
        messagingSenderId: "959974201771",
        appId: "1:959974201771:web:643559588a4000bf"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      // FirebaseUIインスタンス初期化
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      
      // FirebaseUIの各種設定
      var uiConfig = {
        callbacks: {
          signInSuccess: function(currentUser, credential, redirectUrl) {
            // サインイン成功時のコールバック関数
            // 戻り値で自動的にリダイレクトするかどうかを指定
            return true;
          },
          uiShown: function() {
            // FirebaseUIウィジェット描画完了時のコールバック関数
            // 読込中で表示しているローダー要素を消す
            document.getElementById('loader').style.display = 'none';
          }
        },
        // リダイレクトではなく、ポップアップでサインインフローを表示
        signInFlow: 'popup',
        signInSuccessUrl: 'vote.html',
        signInOptions: [
          // サポートするプロバイダ(メールアドレス)を指定
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.(サービス利用規約ページの)
        tosUrl: '<your-tos-url>'
      };

      // FirebaseUI描画開始
      ui.start('#firebaseui-auth-container', uiConfig);

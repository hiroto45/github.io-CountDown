'use strict';

{
  function check (){
  //  残り時間 = 終了時刻 - 現在時刻
  let countdown = endTime - new Date().getTime();

  
  // 3タイマーの終了
  
  if (countdown < 0) {
    clearInterval(intervalId);// clearInterval()にsetIInterval()の識別子を渡す。そしてまずはその識別子を取得するところから始める。
    countdown = 3 * 1000;
    btn.disabled = false;
    btn.classList.remove('inactive');
  }


  const totalSeconds = Math.floor(countdown / 1000);//秒換算したもの。小数点以下はいらない。
  //80秒 →　1分20秒
  //80 ÷　60 →　1余り20
  //80 / 60 = 1.33333......→ 1
  //80 % 60 = 20
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesFormatted = String(minutes).padStart(2, '0')//2桁で表示し2桁に満たない場合、0を表示する。
  const secondsFormatted = String(seconds).padStart(2, '0')//2桁で表示し2桁に満たない場合、0を表示する。


  timer.textContent = `${minutesFormatted}:${secondsFormatted}`;//変数を文字列に埋め込むためにテンプレートリテラルを使用する。
};

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');
  let endTime;//check関数で使うため、endtimeは関数の外で定義する必要がある。
  let intervalId;//check関数でも使うので、関数の外で定義する。また値が定まるのはsetInterval()で実行した時なので、この段階では未定義のままにしてletで宣言しておく。

  // 1終了時刻を求める
  btn.addEventListener('click' , ()=>{
     endTime = new Date().getTime() + 300 * 1000;//ミリ秒換算する。
     btn.classList.add('inactive')

     btn.disabled = true;

      // 2残り時間を求める
      intervalId = setInterval(check, 100);//100ミリ秒は0.1秒。
  });

  




}

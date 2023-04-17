// 音名と周波数の対応表
const NOTES = {
    "ド": 261,
    "レ": 294,
    "ミ": 330,
    "ファ": 349,
    "ソ": 392,
    "ラ": 440,
    "シ": 494,
    "ド2": 522
};

// キーコード = [a, s, d, f, j, k, l, m];
const KEYCODE = [65, 83, 68, 70, 74, 75, 76, 186];

// 音を鳴らす
let audioCtx = new AudioContext(); // AudioContextの初期化
let osc = audioCtx.createOscillator(); // オシレーターの作成

// 押された音を画面に表示する
const displayElement = document.getElementById('oto');
function display(e) {
    // 押されたキーコードを取得する（e.keyCodeに入る）
    const key_code = e.keyCode;
    // 押されたキーのインデックスを取得して音名を取得
    const noteName = Object.keys(NOTES)[KEYCODE.indexOf(key_code)];
    // 押された音を画面に表示
    displayElement.innerText = noteName;
}

// キーボードが押された時の処理
function KeyDownFunc(e) {
    // 押されたキーコードを取得する（e.keyCodeに入る）
    const key_code = e.keyCode;
    // キーコードが配列KEYCODEに存在するかチェック
    if (KEYCODE.includes(key_code)) {
        const noteIndex = KEYCODE.indexOf(key_code);
        // オシレーターの周波数を設定して再生
        osc.frequency.value = Object.values(NOTES)[noteIndex];
        osc.connect(audioCtx.destination); // 出力先に接続
        osc.start(); // 再生
        display(e); // 押された音を画面に表示
    }
}

// キーボードが離された時の処理
function KeyUpFunc() {
    // オーディオを止める
    osc.stop();
    osc.disconnect();
    osc = audioCtx.createOscillator();
}

// キーボードが押された時と離された時の処理を登録
window.addEventListener("keydown", KeyDownFunc);
window.addEventListener("keyup", KeyUpFunc);
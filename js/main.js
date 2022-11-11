"use strict";

// 周波数 = [ドレミファソラシド];
const frequency = [261, 294, 330, 349, 392, 440, 494, 522];

// キーコード = [a, s, d, f, j, k, l, m];
const KEYCODE = [65, 83, 68, 70, 74, 75, 76, 186];

// 画面表示用に音の名前を定義
const SCALE = ["ド", "レ", "ミ", "ファ", "ソ", "ラ", "シ", "ド"];



window.addEventListener("keydown", KeyDownFunc);
window.addEventListener("keyup", KeyUpFunc);



// 指定した周波数の音を鳴らす
let audioCtx = new AudioContext();
let osc = audioCtx.createOscillator();

function audioPlay(hz) {
    osc.frequency.value = hz;
    let audDes = audioCtx.destination;
    osc.connect(audDes);
    osc.start = osc.start || osc.noteOn;
    osc.start();
}


// 押された音を画面に表示する
function display(e) {
    // 押されたキーコードを取得する（e.keyCodeに入る）
    const key_code = e.keyCode;

    // 押されたキーのインデックスを取得
    let index = KEYCODE.indexOf(key_code);

    // 押された音を画面に表示
    let element = document.getElementById('oto');
    element.innerText = SCALE[index];
}


// キーボードが押された時の処理
function KeyDownFunc(e) {
    const key_code = e.keyCode;

    switch (key_code) {
        case KEYCODE[0]:
            audioPlay(frequency[0]);
            display(e);
            break;
        case KEYCODE[1]:
            audioPlay(frequency[1]);
            display(e);
            break;
        case KEYCODE[2]:
            audioPlay(frequency[2]);
            display(e);
            break;
        case KEYCODE[3]:
            audioPlay(frequency[3]);
            display(e);
            break;
        case KEYCODE[4]:
            audioPlay(frequency[4]);
            display(e);
            break;
        case KEYCODE[5]:
            audioPlay(frequency[5]);
            display(e);
            break;
        case KEYCODE[6]:
            audioPlay(frequency[6]);
            display(e);
            break;
        case KEYCODE[7]:
            audioPlay(frequency[7]);
            display(e);
            break;
        default:
            return;
    }

}

// キーボードが離された時の処理
function KeyUpFunc() {
    // オーディオを止める
    osc.stop();
    osc = audioCtx.createOscillator();
}
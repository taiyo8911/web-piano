const canvas = document.getElementById('keyboard');
const ctx = canvas.getContext('2d');

const WHITE_KEY_WIDTH = 50;
const WHITE_KEY_HEIGHT = 200;
const BLACK_KEY_WIDTH = 30;
const BLACK_KEY_HEIGHT = 120;

const KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];

function drawWhiteKey(x, y) {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillRect(x, y, WHITE_KEY_WIDTH, WHITE_KEY_HEIGHT);
    ctx.strokeRect(x, y, WHITE_KEY_WIDTH, WHITE_KEY_HEIGHT);
}

function drawBlackKey(x, y) {
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, BLACK_KEY_WIDTH, BLACK_KEY_HEIGHT);
}

// キーボード全体を描画
function drawKeyboard() {
    // 白鍵を描画
    for (let i = 0; i < KEYS.length; i++) {
        if (i === 8 || i === 10) {
            continue; // 白鍵の間には黒鍵を挿入するため、スキップする
        }
        drawWhiteKey(i * WHITE_KEY_WIDTH, 0);
    }

    // 黒鍵を描画
    let blackKeysX = [
        WHITE_KEY_WIDTH - BLACK_KEY_WIDTH / 2,
        WHITE_KEY_WIDTH * 2 - BLACK_KEY_WIDTH / 2,
        WHITE_KEY_WIDTH * 4 - BLACK_KEY_WIDTH / 2,
        WHITE_KEY_WIDTH * 5 - BLACK_KEY_WIDTH / 2,
        WHITE_KEY_WIDTH * 6 - BLACK_KEY_WIDTH / 2,
    ];
    blackKeysX.forEach((x) => {
        drawBlackKey(x, 0);
    });
}

// キーボードを描画
drawKeyboard();

// 押されたキーボードの色を変える
function changeColor(e) {
    const key_code = e.keyCode;
    const noteIndex = KEYCODE.indexOf(key_code);
    const x = noteIndex * 50;
    const y = 0;
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, WHITE_KEY_WIDTH, WHITE_KEY_HEIGHT);
}

// キーボードが押された時と離された時の処理を登録
window.addEventListener("keydown", changeColor);
window.addEventListener("keyup", drawKeyboard);

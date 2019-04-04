//JavaScript file

myImage = new Array( // 画像ファイル名の設定
"daikiti.png",
"suekiti.png",
"kiti.png"
);

function myChange(){ // ボタンが押された
     myRnd = Math.floor( Math.random() * myImage.length ); // 0～(画像の数-1)の乱数を求める
     document.kuji.src = myImage[myRnd]; // 乱数番目の画像を表示する
}

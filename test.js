
function myfunc(parts, id) {
  /*選択されているメニューを変数へ格納*/
  fname = parts.options[parts.selectedIndex].value;
  /*選択された画像のパスを送る*/
  if (fname == 1) id.src = "first.png";
  if (fname == 2) id.src = "2432_JP.png";
  if (fname == 3) id.src = "9434_JP.png";
  if (fname == 4) id.src = "8591_JP.png";
  if (fname == 5) id.src = "2267_JP.png";
  if (fname == 6) id.src = "9042_JP.png";
  if (fname == 7) id.src = "2432_3_JP.png";
  if (fname == 8) id.src = "9434_1_JP.png";
  if (fname == 9) id.src = "8591_1_JP.png";
  if (fname == 10) id.src = "2267_1_JP.png";
  if (fname == 11) id.src = "9042_3_JP.png";
}

function myfunc1() {
  var value = document.getElementById("adress1").value;
  var target = document.getElementById("target");
//   let img = documtnt.getElementById("adress").value;
  var text = '';
  if(value === '文章2'){
    text = '高い場所：2021年1月→ファンフェスティバルやBESTセレクション 低い場所：2020年1月→インターン開始やオープン戦チケット販売';
  }
  else if(value === '文章3'){
    text = '高い場所：2021年11月→秋季キャンプ,選手TV出演 低い場所：2020年12月→日本一達成直後,選手各々契約取引';
  }
  else if(value === '文章4'){
    text = '高い場所：2021年11月→リーグ優勝ならびに日本シリーズ出場 低い場所：2021年1月→野球BANやインタビューなどで選手が登場';
  }
  else if(value === '文章5'){
    text = '高い場所：2021年6月~8月→ペナントレース中盤(優勝チームなので勝ち越しが多い) 低い場所：2021年1月→キャンプインに向けて選手の練習姿が公開';
  }
  else if(value === '文章6'){
    text = '高い場所：2021年6月→交流戦中(12勝8敗),低い場所：2020年4月→交流戦中止が決定';
  }
  else if(value === '文章7'){
    text = '高い場所：2021年11月→秋季キャンプ,選手TV出演 低い場所：2020年10月→ペナントレース終盤で沢山勝ちこしている';
  }
  else if(value === '文章8'){
    text = '高い場所：2021年11月→リーグ優勝ならびに日本シリーズ出場 低い場所：2020年5月→コロナの影響で自主練習や自宅での生活が中心(TVではインタビュー放送)';
  }
  else if(value === '文章9'){
    text = '高い場所：2020年5月→コロナの影響で選手は自粛生活や自主練習 低い場所：2021年1月→キャンプインに向けて選手の練習姿が公開';
  }
  else if(value === '文章10'){
    text = '高い場所：2021年4月→ペナントレース中(17勝7敗)　低い場所：2021年8月→ペナントレース中(9勝1引14敗) ';
  }
  else if(value === '文章11'){
    text = '高い場所：2020年1月→選手のファンサービスが中心に開催されていた。 低い場所：2021年8月→ペナントレース中(9勝1引14敗)';
  }
  target.innerHTML = text;
}
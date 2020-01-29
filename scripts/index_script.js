$(function(){
  //よくある質問をアコーディオンに

  //.questionがクリックされたら
  $('.question').click(function(){
    //子要素の.anserを取得
    $answer = $(this).children('.answer');
    //.answerが.openを持っているか確認
    if($answer.hasClass('open')){
      //持っているとき
      //.openをとる
      $answer.removeClass('open');
      //-を＋に
      $(this).children('.faq_icon').text('ー');
      //隠す
      $answer.slideUp(500);
    }else{
      //持っていないとき
      //.openをつける
      $answer.addClass('open');
      //＋をーに
      $(this).children('.faq_icon').text('＋');
      //見せる
      $answer.slideDown(500);
    }
  });


})

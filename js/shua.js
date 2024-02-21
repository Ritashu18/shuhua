

// 滾動置中
// $(function () {
//   // var headerHeight = 750;
//   $("#moreBtn").on('click', function (e) {
//     e.preventDefault();
//     $(".content:hidden").slice(0, 3).slideDown();
//     if ($(".content:hidden").length == 0) {
//       $("#moreBtn").css('visibility', 'hidden');
//     }
//     var newScrollTop = $(this).offset().top;

//     setTimeout(() => {
//       $('html,body').stop().animate({
//         scrollTop: newScrollTop
//       }, 200);
//     }, 200);
//   });
// });


// test

$(function () {
  // var headerHeight = 750;
  $("#moreBtn").on('click', function (e) {
    e.preventDefault();
    
    // 檢查屏幕寬度，小於 768px 則不執行下滑效果
    if (window.innerWidth >= 768) {
      $(".content:hidden").slice(0, 3).slideDown();
    } else {
      $(".content:hidden").slice(0, 3).show();
    }
    
    if ($(".content:hidden").length == 0) {
      $("#moreBtn").css('visibility', 'hidden');
    }
    
    var newScrollTop = $(this).offset().top;

    setTimeout(() => {
      // 檢查屏幕寬度，小於 768px 則不執行滾動效果
      if (window.innerWidth >= 768) {
        $('html,body').stop().animate({
          scrollTop: newScrollTop
        }, 200);
      }
    }, 200);
  });
});

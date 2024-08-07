

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

    // 點擊切換分頁
    // $('.tabLink').click(function() {
    //   var url = $(this).attr('href');
      
    //   $(this).addClass('active')
    //   .parent().siblings().find('a').removeClass('active');
    //   $(url).siblings('.tab-content').fadeOut(500);
    //   $(url).delay(500).fadeTo(500, 1);
    //   return false;
    // });



    // 頁籤test
    // document.querySelectorAll('[data-tab-target]').forEach(tab => {
    //   tab.addEventListener('click', () => {
    //     document.querySelectorAll('.tab_panel').forEach(content => {
    //       content.classList.remove('active');
    //     });
    //     const target = document.querySelector(tab.dataset.tabTarget);
    //     target.classList.add('active');
    //   });
    // });

    // // 切換換色
    // document.querySelector('.tab_title').addEventListener('click', function() {
    //   this.classList.add('clicked');
    // });
    

// 頁籤+換色
document.querySelectorAll('[data-tab-target]').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' class from all tab panels
    document.querySelectorAll('.tab_panel').forEach(content => {
      content.classList.remove('active');
    });

    // Add 'active' class to the target tab panel
    const target = document.querySelector(tab.dataset.tabTarget);
    target.classList.add('active');

    // Remove 'clicked' class from all tab titles
    document.querySelectorAll('.tab_title').forEach(title => {
      title.classList.remove('clicked');
    });

    // Add 'clicked' class to the clicked tab title
    tab.classList.add('clicked');
  });
});

// Initialize the first tab as active
document.querySelector('.tab_title').classList.add('clicked');




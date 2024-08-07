
export default function loadPage(page) {
  $('[data-page]').off('click')
  $('#main').load(`https://ritashu18.github.io/shuhua/`, function () {
    $(window).scrollTop(0)
  })
}




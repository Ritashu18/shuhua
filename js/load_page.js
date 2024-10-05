
export default function loadPage(page) {
  $('[data-page]').off('click')
  // $('#main').load(`https://ritashu18.github.io/shuhua/${page}.html`, function () {
  $('#main').load(`./${page}.html`, function () {
    
  $(window).scrollTop(0)
  })
}




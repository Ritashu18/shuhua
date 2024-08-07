
export default function loadPage(page) {
  $('[data-page]').off('click')
  $('#main').load(`../${page}.html`, function () {
    $(window).scrollTop(0)
  })
}




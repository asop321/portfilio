/* .visitor-icon */
var btn1 = $('.btn1')
var btn2 = $('.btn2')
  ;
var icon1 = $('.experience-icon1')
var icon2 = $('.experience-icon2')
icon2.hide()
btn2.click(function () {
  //btn2 클릭시
  btn1.removeClass('before') //btn1에 before 클래스를지움
  btn2.addClass('before')
  icon1.hide() //icon1 없애
  icon2.show() //보여
})
btn1.click(function () {
  btn1.addClass('before') //btn1에 before 클래스를지움
  btn2.removeClass('before')
  icon1.show()
  icon2.hide()
})

document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');



/* top btn */
const btt = $('#back-to-top')
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    btt.addClass('visible')
  } else {
    btt.removeClass('visible')
  }
})
btt.click(function (e) {
  e.preventDefault()
  $('html,body').animate(
    {
      scrollTop: 0,
    },
    700,
  )
})


const topmenu = $("nav ul.gnb>li")
const sections = $(".section")
const speed = 500
const secId=sections.attr('id');

//버튼 클릭해서 이동하기
topmenu.click(function (e) {
	e.preventDefault() //#의 기본 기능을 차단
	let target = $(this) //사용자가 클릭한 버튼의 타겟이 저장
	let href = target.find('a').attr('href');
	let offset = $(href).offset().top ; //offset() : 요소의 위치(문서)
	$("html, body").animate({ scrollTop: offset }, 1000, "easeOutCirc") //offset 값을 scrollTop에 대입(애니메이션)
})

setInterval(typing, 200)

$(window).on("scroll", function () {
	let scrollTop = $(window).scrollTop()
	sections.each(function (i, o) {
		let secCur=sections.eq(i);
		if (scrollTop >= secCur.offset().top - speed) {
			secCur.find(".left").addClass("in")
			secCur.find(".right").addClass("in")
			secCur.find("span").addClass("show")
			const secId=sections.eq(i).attr('id');
			topmenu.removeClass('active');
			$('.gnb').find(`.${secId}`).addClass('active');
			if(secId==undefined){
				$('.gnb').find(`.project`).addClass('active');
			}
		}
		
	})
	

})


const content = "디자인 + 코딩 = 하나다."
const text = document.querySelector(".text")
let i = 0

function typing() {
	let txt = content[i++]
	text.innerHTML += txt
	if (i > content.length) {
		text.textContent = ""
		i = 0
	}
}
setInterval(typing, 7000)

$(".hidden").hover(
	function () {
		let ah = $(this).innerHeight()
		let img = $(this).find("img")
		let imgh = img.innerHeight()
		//console.log(`a높이:${ah} img높이:${imgh}`)
		img.stop().animate({ top: ah - imgh }, 3000)
	},
	function () {
		let ah = $(this).innerHeight()
		let img = $(this).find("img")
		let imgh = img.innerHeight()
		//console.log(`a높이:${ah} img높이:${imgh}`)
		img.stop().animate({ top: 0 }, 3000)
	}
)
$(".hidden-phone").hover(
	function () {
		let aph = $(this).innerHeight()
		let img = $(this).find("img")
		let pimgh = img.innerHeight()
		//console.log(`a높이:${ah} img높이:${imgh}`)
		img.stop().animate({ top: aph - pimgh }, 6000)
	},
	function () {
		let aph = $(this).innerHeight()
		let img = $(this).find("img")
		let pimgh = img.innerHeight()
		//console.log(`a높이:${ah} img높이:${imgh}`)
		img.stop().animate({ top: 0 }, 3000)
	}
)
$(".hidden-tablet").hover(
	function () {
		let tah = $(this).innerHeight()
		let img = $(this).find("img")
		let timgh = img.innerHeight()
		//console.log(`a높이:${ah} img높이:${imgh}`)
		img.stop().animate({ top: tah - timgh }, 3000)
	},
	function () {
		let tah = $(this).innerHeight()
		let img = $(this).find("img")
		let timgh = img.innerHeight()
		//console.log(`a높이:${ah} img높이:${imgh}`)
		img.stop().animate({ top: 0 }, 3000)
	}
)
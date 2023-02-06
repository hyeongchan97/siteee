let repName = location.pathname.split('/')[1];

$('body').prepend('<header>');
// $('body').append('<footer>');

$('header').load(`/${repName}/inc.html header>div`,head);
// $('footer').load(`/${repName}/inc.html footer>div`);


function head(){
    let idx = localStorage.idx || 0 ;

    $('header a').eq(idx).addClass('active');
    // 클래스 추가
    
    $('header a').click(function(e){//클릭 이벤트
        e.preventDefault();
        let idx = $(this).index();
        localStorage.idx = idx;
        location.href = '/'+repName+$(this).attr('href');
    })
}

///////////////////////////////////////////////////////


const elMain = document.querySelector(".sub02");
const elAside = document.querySelector("aside");
const elSec = document.querySelectorAll(".sub02 > div");

let move = 0;

// 콘텐츠 위치값 offsetLeft -> 가로기준이니까~~~

elSec.forEach(function (elSection, key) {
  elAside.innerHTML += "<button></button>";
  elSection.addEventListener("mousewheel", function () {
    animation(key);
  });
});
const elBtns = document.querySelectorAll("aside button");
let idx = 0;

elBtns.forEach(function (btn, key) {
  btn.addEventListener("click", function () {
    animation(key);
  });
});

function update(key) {
  elBtns[idx].classList.remove("active");
  elBtns[key].classList.add("active");
  idx = key;
}

function animation(key) {
  try {
    if (event.wheelDelta < 0) {
      move = elSec[key].nextElementSibling.offsetLeft;
      key++
    } else if (event.wheelDelta > 0) {
      move = elSec[key].previousElementSibling.offsetLeft;
      key--
    } else {
      move = elSec[key].offsetLeft;
    }
  } catch (error) {}

  elMain.style = `transform:translateX(-${move}px)`

  update(key);
}

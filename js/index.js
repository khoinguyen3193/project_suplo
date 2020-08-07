// show cart-box
const cartBoxMobile = () => document.getElementById('cart-box-mobile').style.display = 'block';
const hideCartBoxMobile = () => document.getElementById('cart-box-mobile').style.display = 'none';
const myFunction = () => {
  document.getElementById("cart-box").style.display = "block";
}
// hide cart-box
const closeFunction = () => {
  document.getElementById("cart-box").style.display = "none";
}
window.addEventListener('scroll', () => {
  let temp = document.getElementsByClassName('back-to-top')[0];
  if (window.scrollY > 400) {
    temp.style.visibility = "visible";
    temp.style.opacity = "1";
  } else {
    temp.style.visibility = "hidden";
    temp.style.opacity = "0";
  }
})
// sticky mobile nav bar
window.addEventListener('scroll', () => {
  if (window.scrollY > 90) {
    document.getElementsByClassName('mobile-nav')[0].style.position = 'fixed';
    document.getElementsByClassName('mobile-nav')[0].style.top = '0';
  } else {
    document.getElementsByClassName('mobile-nav')[0].style.position = 'relative';
    document.getElementsByClassName('mobile-nav')[0].style.top = '0';
  }
})
document.getElementsByClassName('back-to-top')[0].addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
window.onclick = function (event) {
  if (event.target == document.getElementById('popup-modal')) {
    document.getElementById('popup-modal').style.visibility = "hidden";
  }
}
document.getElementsByClassName('container')[0].onclick = function (event) {
  if (event.target == document.getElementsByClassName('container')[0]) {
    document.getElementsByClassName('mobile-mega-menu')[0].style.right = '-100%';
    document.getElementsByClassName('middle')[0].style.left = '0';
  }
}
// script for mega menu
$(document).ready(function () {
  $(".mega").hover(function () {
    // over
    $(".product").slideDown(300);
  }, function () {
    // out
    $(".product").slideUp(0);
  }
  );
  $(".news").hover(function () {
    // over
    $(".sub-news-1").slideDown(300);
  }, function () {
    // out
    $(".sub-news-1").slideUp(0);
  }
  );
  $(".mega-news").hover(function () {
    // over
    $(".sub-news-2").slideDown(300);
  }, function () {
    // out
    $(".sub-news-2").slideUp(0);
  }
  );
});
// /script for mega menu
// <!-- script for mobile-nav -->
let arr1 = document.getElementsByClassName('sub-menu-show');
for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  element.addEventListener('click', () => {
    let n = element.parentNode;
    if (n.parentNode.childNodes[3].style.display != 'block') {
      n.children[1].style.display = 'none';
      n.children[2].style.display = 'block';
      n.parentNode.children[1].style.display = 'block';
    }
  })
}
let arr2 = document.getElementsByClassName('sub-menu-hidden');
for (let index = 0; index < arr2.length; index++) {
  const element = arr2[index];
  element.addEventListener('click', () => {
    let n = element.parentNode;
    if (n.parentNode.childNodes[3].style.display = 'block') {
      n.children[1].style.display = 'block';
      n.children[2].style.display = 'none';
      n.parentNode.children[1].style.display = 'none';
    }
  })
}
document.getElementsByClassName('mobile-mega-menu')[0].children[0].children[1].addEventListener('click', () => {
  document.getElementsByClassName('mobile-mega-menu')[0].style.right = '-100%';
  for (let index = 0; index < 2; index++) {
    document.getElementsByClassName('middle')[index].style.left = '0';
  }
})
document.getElementsByClassName('mobile-nav')[0].children[1].children[1].addEventListener('click', () => {
  document.getElementsByClassName('mobile-mega-menu')[0].style.right = '0';
  for (let index = 0; index < 2; index++) {
    document.getElementsByClassName('middle')[index].style.left = '-45%';
  }
})
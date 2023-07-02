//effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// effect button

//Get the button
var mybutton = document.getElementById("myBtn");
var fix = document.getElementById("box");

// When scrolls down 20px , show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    // fix.style.position = "fixed";
  } 

  // else if( document.documentElement.scrollTop > 2483){
  //   fix.style.position = "absolute"; 
  // } 
  else {
    mybutton.style.display = "none";
    // fix.style.position = "initial";
    // fix.style.top = "200";
  }

}

window.addEventListener("scroll",function(){
    const x = this.document.documentElement.scrollTop
    console.log(x)
    if(x<2484 && x >186){
        this.document.querySelector(".top").classList.add("active")
    }else {
        this.document.querySelector(".top").classList.remove("active")
    }
  }
)

// window.addEventListener("scroll",function(){
//   const x = this.document.documentElement.scrollTop
//   console.log(x)
//   if(x>2484){
//       this.document.querySelector(".top").classList.add("active1")
//   }else {
//       this.document.querySelector(".top").classList.remove("active1")
//   }
// }
// )

// When clicks on the button, scroll to the top
function topFunction() {
  document.documentElement.scrollTop = 0;
}
// ------------


//effect slide show 
var list = document.getElementsByClassName("slide");
var index = 0;

function Init(){
  if (list && list.length > 0){
    for (let x of list ){
      x.style.display = 'none';
    }
    list[index].style.display = 'block';
  }
}

Init();
function showL(){
  if(list && list.length > 0){
    for (let x of list ){
      x.style.display = 'none';
    }
    if (index < list.length -1 )
      index = index + 1; 
    else
      index = 0;
    list[index].style.display = 'block';
  }
  setTimeout(showL, 2000);
}

function showR() {
  if (list && list.length > 0) {
    for (let x of list) {
      x.style.display = 'none';
    }

    if (index > 0)
    index = index - 1;
    else index = list.length - 1;

    list[index].style.display = 'block';
  }
  
}
setTimeout(showL, 2000);

// phần check data sevice

var data = []; // Khai báo mảng trong javascript

// Refresh
function Refresh(){
    document.getElementById('com').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    
}

// Check chưa nhập thông tin
function CheckInfo(){
  var id = document.getElementById('com').value;
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  if (id && name && email) {
      alert('Rất cảm ơn bạn đã gửi lại cho chúng tôi phản hồi')
  }
  else{
      alert('Vui lòng nhập đầy đủ thông tin trước khi thêm!');
  }
  Refresh();
}


// check thông tin của liên hệ
function checkData(){
  var fullname = document.getElementById('fullname').value;
  document.getElementById('fullname').value = '';

  var mail = document.getElementById('mail').value;
  document.getElementById('mail').value = '';

  var mess = document.getElementById('mess').value;
  document.getElementById('mess').value = '';

  if(fullname && mail && mess){
    alert('Gửi thông tin thành công. Chúng tôi sẽ sớm liên hệ với bạn');
  }
  else{
    alert('Vui lòng nhập đầy đủ thông tin trước khi gửi đi')
  }
  // Refresh();
}

// -------------------
//test
// var enfix = document.getElementById("box");

// window.onscroll = function()
// {
//   scrollFunctionEnfix()
// };
// function scrollFunctionEnfix()
// {
//   if (document.documentElement.scrollTop == 500)
//   {
//     enfix.style.position = 'absolute';
//   }
// }


//---------------------------------------
// phần tour content hidden
var an = document.getElementById('hidden');

function HiddenContent(){
  if (an == 1)
  {
    an.style.display = 'none';
  }
  if (an == 0)
  {
    an.style.display = 'block';
  }
}
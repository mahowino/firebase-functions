function scrollAppear(){
  //select the intro-text class
  var introText = document.querySelector('.aboutMe');
  //getting position of the image from the top
  var introPosition = introText.getBoundingClientRect().top;
  //getting the length of the screen
  var screenPosition = window.innerHeight/2;

  if(introPosition < screenPosition){
    introText.classList.add('fade-in');
  }
}
scrollAppear();

function scrollAppear2() {
  //select the intro-text class
  var introText2 = document.querySelector('.intro_paragraph');
  //getting position of the image from the top
  var introPosition2 = introText2.getBoundingClientRect().top;
  //getting the length of the screen
  var screenPosition2 = window.innerHeight/2.5;

  if(introPosition2 < screenPosition2){
    introText2.classList.add('fade-in');
  }
}
scrollAppear2();

//add event listener
window.addEventListener('scroll',scrollAppear);
window.addEventListener('scroll',scrollAppear2);
function sendMail() {
    var link = "mailto:mahowino@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}
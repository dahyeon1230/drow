//alert("테스트입니다.");

//var btn1=document.querySelector('button');
//btn1.addEventListener('click',btnClick);


//내가한 버전
//var btn2=document.querySelectorAll('button');

 //for(int btn2=1; 1<7; i++){
   //  alert("클릭했어요!!!");
 //}

 //풀이버전
//7개의 버튼을 배열로 변수에 저장
 var btns=document.querySelectorAll('.drum');

 //반복문
 for(var i=0; i<btns.length;i++){

    btns[i].addEventListener('click',btnClick);
   
 }

 //현재 화면(index.html)document에 키보드 이벤트 추가
 document.addEventListener('keypress',keyClick);

//키보드 이벤트 객체를 이용한다.이벤트 키값(매개변수 )키값으로 어떤 키인지 확인
function keyClick(event){
    console.log(event.key);
  drumPlay(event.key)
}













 //실행함수
 function btnClick(){

    //alert('클릭했어요!!!!!');
    //var audio = new Audio('sounds/tom-1.mp3');
    //audio.play();
    console.log(this.textContent);
    drumPlay(this.textContent)
}

function drumPlay(key){
    switch(key){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
           
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
           
            break;
        case 's':
                var audio = new Audio('sounds/tom-3.mp3');
               
                break;
        case 'd':
                var audio = new Audio('sounds/tom-4.mp3');
                
                break;    
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
           
            break;  
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            
            break; 
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
           
            break;  
        default:
            return;

    }
    audio.play(); 
    animationDrum(key)
}

function animationDrum(key){
    //키 값이 w a s j값의 버튼을 선택한다.
    var el=document.querySelector('.'+key);
    el.classList.add('pressed');
    //일정시간 이후에 다시 클래스 pressed를제거한다.
    setTimeout(function(){
        el.classList.remove('pressed');
    },100);



}
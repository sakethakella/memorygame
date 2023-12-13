var arr=[];
var arr1=[];
var arr2=[1,1,2,2,3,3,4,4];
var chec=[];
var count=0;
var count2=0;

function start(){
 for(let a=0;a<8;a++){
    arr[a]=document.getElementById(`${a+1}`);
  }
  arr2=arr2.sort(function(a,b){return(0.5-Math.random())})
  for(let a=0;a<8;a++){
    arr1[a]=document.getElementById(`${a+10}`);
  }
  for(let a=0;a<8;a++){
    arr1[a].innerHTML=arr2[a];
  }
  for(let b=0;b<8;b++){
    console.log(arr1[b].innerHTML);
 }
 
}

function show1(){
   let a=0;
   arr[0].style.display="none";
   arr1[0].style.display="block";
   check(a);
}
function show2(){
    let a=1
    arr[1].style.display="none";
    arr1[1].style.display="block";
    check(a);
 
}
function show3(){
    let a=2;
    arr[2].style.display="none";
    arr1[2].style.display="block";
    check(a);
 
}
function show4(){
    let a=3;
    arr[3].style.display="none";
    arr1[3].style.display="block";
     check(a);
}
function show5(){
    let a=4;
    arr[4].style.display="none";
    arr1[4].style.display="block";
    check(a);
}
function show6(){
    let a=5;
    arr[5].style.display="none";
    arr1[5].style.display="block";
    check(a);
}
function show7(){
    let a=6;
    arr[6].style.display="none";
    arr1[6].style.display="block";
    check(a);
}
function show8(){
    let a=7;
    arr[7].style.display="none";
    arr1[7].style.display="block";
    check(a);
}
function check(a){
   let obj={
      che:arr1[a].innerHTML,
      ind:a,
   };
   chec[count2]=obj;
   check2();
   count2++;
   if(count2%2==0)count2=0;
}
function check2(){
   if(count2%2==1){
     if(chec[0].che==chec[1].che){
       count++;
       console.log(count);
     }
     else{
        arr1[chec[0].ind].style.display="none";
        arr[chec[0].ind].style.display="block";
        arr1[chec[1].ind].style.display="none";
        arr[chec[1].ind].style.display="block";     
     }
    }

    if(count==4){
        document.getElementById("display").innerHTML="you have won the game";
       }
   
   }

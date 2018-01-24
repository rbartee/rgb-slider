var peanutSlider,peanutSlider2,peanutSlider3;

function setup(){
    createCanvas(600,400);
    background(0);
    
   peanutSlider= createSlider(0,255,125);
   peanutSlider.position(20,20)
   
   peanutSlider2= createSlider(0,255,125);
   peanutSlider2.position(20,50);
   
   peanutSlider3= createSlider(0,255,10);
   peanutSlider3.position(20,80);
}

function draw(){
  rv= peanutSlider.value();
  gv= peanutSlider2.value();
  bv= peanutSlider3.value();
  
  background(rv,gv,bv);
  
  textSize(30)
  textAlign(CENTER,CENTER);
  message= "GIVE ME A 10!"
  text(message,width/2,height/2);
}
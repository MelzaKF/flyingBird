let j;
let k;
function setup() {
  createCanvas(600,250);
  background(200);

  x=98;
  y=120;
  k=0;
  j=0;
}

function draw() {
  background(200);
  line(299,0,299,249)

  //badan dan ekor
  fill(254,203,165)
  beginShape();
  vertex(210,30);
  vertex(150,100);
  vertex(135,176);
  vertex(153,178);
  endShape(CLOSE);

  //badan
  beginShape(); 
  vertex(160,115);
  vertex(150,100);
  vertex(105,110);
  vertex(75,138);
  vertex(93,183);
  vertex(140,150);
  endShape(CLOSE);

  //sayapkiri
  triangle(75,138,105,110,10,98);

  //kepala kiri
  beginShape();
  vertex(93,183);
  vertex(105,90);
  vertex(75,107);
  vertex(112,70);
  vertex(140,150);
  endShape(CLOSE);
  triangle(75,107,112,70,103,69);

  //KEPALA KANAN
  triangle(140,150,105,186,112,70);
  triangle(140,150,105,186,142,176)
//Sayap kanan
  triangle(140,150, 160,115, 270,120);

  //BAGIAN ANIMASI
  //badan dan ekor
  fill(255,158,181)
  beginShape();
  vertex(510,30);
  vertex(450,100);
  vertex(435,176);
  vertex(453,178);
  endShape(CLOSE);

  //badan
  beginShape(); 
  vertex(460,115);
  vertex(450,100);
  vertex(405,110);
  vertex(375,138);
  vertex(393,183);
  vertex(440,150);
  endShape(CLOSE);

  var x = 98 + 30 * Math.sin(PI/40*k)
  k+=1
  //sayapkiri
  triangle(375,138,405,110,310,x);

  //kepala kiri
  beginShape();
  vertex(393,183);
  vertex(405,90);
  vertex(375,107);
  vertex(412,70);
  vertex(440,150);
  endShape(CLOSE);
  triangle(375,107,412,70,403,69);

  //KEPALA KANAN
  triangle(440,150,405,186,412,70);
  triangle(440,150,405,186,442,176)
  
  var y = 120 + 30 * Math.sin(PI/40*j)
  j+=1
  
//Sayap kanan
  triangle(440,150,460,115, 570,y);
}

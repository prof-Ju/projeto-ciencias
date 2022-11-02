// VARIAVEIS INICIAIS E DE CONFIG
var apresentacao, apresentacaoImg;

var gameState = 0;

var btn1, btn2, bnt3, btn4, btn5, btn6, btnInicial

var check1
var game1played = false;
var game2played = false;
var finalText

// VARIAVEIS JOGO 1
var peixe, peixeImg, fundo1, fundo1Img, mercurio, topArrow, downArrow

var regras1


// VARIAVEIS JOGO 2
var regras2
var neuronios, neuroniosImg, fundo2, fundo2Img


//variaveis gerais
var contador = 130;
var contadorDisplay;
var vitoriaText
var perdeuText
var mercurioImg, mercurioGroup;
var telaW, telaH
function preload() {
  apresentacaoImg = loadImage("./assets/apresentacao.png")
  fundo1Img = loadImage("./assets/fundo1.png")
  fundo2Img = loadImage("./assets/fundo2.png")
  mercurioImg = loadImage("./assets/mercurio.png")
  peixeImg = loadImage("./assets/peixe.png")
  neuroniosImg = loadImage("./assets/neuronios.png")
}

function setup() {

  //  CONFIGS INICIAIS
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    telaW = displayWidth; 
    telaH = displayHeight; 
    createCanvas(displayWidth+80, displayHeight);
  } 
  else {
    telaW = windowWidth; 
    telaH = windowHeight; 
    createCanvas(windowWidth, windowHeight);
  }
  telaH = windowHeight
  telaW = windowWidth
  apresentacao = createSprite(telaW /2 , telaH /2, 50, 50)
   apresentacao.addImage(apresentacaoImg);
   apresentacao.scale = 2;

   btnInicial = createButton("Continuar");
   btnInicial.position(telaW /2 - 100 , telaH /2)
   btnInicial.class("botaoinicial")

  btn1 = createButton("Desvie do mercúrio");
  btn1.position(telaW /2 - 300 , telaH /2)
  btn1.size(150, 150)
  btn1.hide();
  btn2 = createButton("Salve os neurônios");
  btn2.position(telaW /2 + 200, telaH /2)
  btn2.size(150, 150)
  btn2.hide();

  btn3 = createButton("Continuar");
  btn3.position(telaW /2 - 200 , telaH /2 + 300)
  btn3.size(150, 150)
  btn3.hide();

  btn4 = createButton("Continuar");
  btn4.position(150, 180)
  btn4.hide();

  btn5 = createButton("continue");
  btn5.position(150, 180)
  btn5.hide();

  btn6 = createButton("continue");
  btn6.position(150, 180)
  btn6.hide();


  contadorDisplay = createElement("h1")
  perdeuText = createElement("h1")
  vitoriaText = createElement("h1")

  check1 = createImg("./assets/check.png")
  check1.size(80, 80);
  check1.position(50, 180)
  check1.hide();

  check2 = createImg("./assets/check.png")
  check2.size(80, 80);
  check2.position(250, 180)
  check2.hide();

  mercurioGroup = new Group();

  finalText = createElement("h1")
  finalText.position(100, 50)
 

  // CONFIGS DO JOGO1
  regras1 = createElement("h7");

  fundo1 = createSprite(telaW /2 , telaH /2, 400, 400);
  fundo1.addImage(fundo1Img);
  fundo1.scale = 3
  fundo1.visible = false;

  peixe = createSprite(telaW /2 - 300 , telaH /2 + 300, 50, 50);
  peixe.visible = false;
  peixe.addImage(peixeImg)
  peixe.scale = 0.05

  topArrow = createImg("./assets/top.png")
  topArrow.size(150, 150)
  topArrow.position(telaW /2 - 300 , telaH /2 + 600)
  topArrow.hide()

  downArrow = createImg("./assets/down.png")
  downArrow.size(140, 150)
  downArrow.position(telaW /2 + 200 , telaH /2 + 600)
  downArrow.hide()

  // CONFIGS DO JOGO2
  regras2 = createElement("h7");

  fundo2 = createSprite(200, 200, 400, 400);
  fundo2.addImage(fundo2Img);
  fundo2.scale = 1.5
  fundo2.visible = false;

  neuronios = createSprite(199, 130, 50, 50);
  neuronios.visible = false;
  neuronios.addImage(neuroniosImg)
  neuronios.scale = 0.85
}

function draw() {
  console.log(gameState)
  background(0)

  if (gameState == 0) {
    if (keyDown("space")) {
      gameState = 1
    }

    btnInicial.mouseClicked(() => {
      gameState = 1
    })
  }
  if (gameState == 1) {
    apresentacao.visible = false;
    menu();
  }

  if (gameState == 2) {
    prejogo1();
  }
  if (gameState == 3) {
    jogo1();
    tempo();
  }
  if (gameState == 4) {
    prejogo2();
  }
  if (gameState == 5) {
    jogo2();
    tempo();
  }
  if (gameState == 6) {
    vitoria();
  }
  if (gameState == 7) {
    perdeu();
  }

  if (gameState == 8) {
    fim();
  }


  drawSprites();
}

function menu() {
  btn1.show();
  btn2.show();
  btnInicial.hide()


  if (game1played) {
    check1.show()
    btn1.hide();
  }
  if (game2played) {
    check2.show()
    btn2.hide();
  }

  if (game1played == true && game2played == true) {
     gameState = 8
  }


  btn1.mouseClicked(() => {
    check1.hide()
    check2.hide()
    gameState = 2;
  })

  btn2.mouseClicked(() => {
    check1.hide()
    check2.hide()
    gameState = 4;
  })
}



function prejogo1() {
  btn2.hide();
  btn1.hide();
  btn3.show();

  background(250)

  regras1.html("sobreviva 30 segundos desviando do mercurio, você se pode mover para cima e para baixo para desviar, clique para continuar");
  regras1.position(telaW /2 -200 , telaH /2 - 300)
  regras1.size(350,350)
  regras1.class("regras");

  btn3.mouseClicked(() => {
    gameState = 3;
  })
}

function prejogo2() {
  btn2.hide();
  btn1.hide();
  btn4.show();

  background(250)

  regras2.html("regras do jogo2");
  regras2.position(100, 50)
  regras2.class("regras");

  btn4.mouseClicked(() => {
    gameState = 5;
  })
}

function jogo1() {
  game1played = true
  btn3.hide();
  regras1.hide()
  peixe.visible = true;
  fundo1.visible = true;

  topArrow.show();
  downArrow.show();

  topArrow.mouseClicked(() => {
    if (peixe.y > telaH /2 ) {
      peixe.y = peixe.y - 50.5;
    }
  })

  downArrow.mouseClicked(() => {
    if ( peixe.y < telaH /2 + 580 ) {
      peixe.y = peixe.y + 50.5;
    }
  })

  if (keyDown("up") && peixe.y > telaH /2 ) {
    peixe.y = peixe.y - 5.5;
  }
  if (keyDown("down") && peixe.y < telaH /2 + 580 ) {
    peixe.y = peixe.y + 5.5;
  }

  geradorMercurio();

  if (mercurioGroup.isTouching(peixe)) {
    gameState = 7;
  }



}

function geradorMercurio() {
  if (frameCount % 50 == 0) {
    mercurio = createSprite(telaW /2 + 500 , telaH /2, 30, 30);
    mercurio.velocityX = -5;
    mercurio.y = Math.round(random(telaH /2 , telaH /2 + 580))
    mercurio.addImage(mercurioImg);
    mercurio.scale = 0.6
    mercurio.setCollider("circle", 0, 0, 55)
    mercurio.lifetime = 800 / 5 + 50
    mercurioGroup.add(mercurio)
  }
}

function tempo() {
  contadorDisplay.show();
  contadorDisplay.html(Math.floor(contador).toFixed(1));
  contadorDisplay.position(telaW /2 - 100 , telaH /2 - 290);
  contadorDisplay.class("contador");
  // contadorDisplay.show();
  contador -= 0.06


  if (contador < 0) {
    gameState = 6
  }
}

function vitoria() {
  contadorDisplay.hide();
  mercurioGroup.destroyEach();

  downArrow.hide()
  topArrow.hide()
  background(250)

  fundo1.visible = false;
  peixe.visible = false;

  fundo2.visible = false;
  neuronios.visible = false;

  vitoriaText.show();
  vitoriaText.html("Parabens você passou, Aperte 'espaço' ou no botão para continuar!")
  vitoriaText.class("regras")
  vitoriaText.position(100, 50)
  btn5.show();

  btn5.mouseClicked(() => {
    vitoriaText.hide();
    contador = 30
    btn5.hide();
    gameState = 1
  })


}

function perdeu() {
  contadorDisplay.hide();
  mercurioGroup.destroyEach()
  downArrow.hide()
  topArrow.hide()

  background(250)

  fundo1.visible = false;
  peixe.visible = false;
  
  fundo2.visible = false;
  neuronios.visible = false;

  perdeuText.show();
  perdeuText.html("A não! você nao conseguiu, Aperte 'espaço' ou no botão para continuar!")
  perdeuText.class("regras")
  perdeuText.position(100, 50)

  btn6.show();

  btn6.mouseClicked(() => {
    perdeuText.hide();
    contador = 30;
    btn6.hide();
    gameState = 1

  })
}



function jogo2() {
  game2played = true
  btn4.hide();
  regras2.hide()
  neuronios.visible = true;
  fundo2.visible = true;




}

function fim() {
  background("white");
  finalText.show()
  finalText.html("Obrigada por jogar!")

  check1.hide();
  check2.hide();
}
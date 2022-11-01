var mine;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;

var over = false;

function mineBulid(){
    allwhite();
    var r = Math.floor(Math.random()* 6 + 1);
    var c = Math.floor(Math.random()* 6 + 1);
    mine = r + "" + c ;

    p1 = (r-1) + "" + (c-1);
    p2 = (r-1) + "" + c;
    p3 = (r-1) + "" + (c+1);
    p4 = r + "" + (c-1);
    p5 = r + "" + (c+1);
    p6 = (r+1) + "" + (c-1);
    p7 = (r+1) + "" + c;
    p8 = (r+1) + "" + (c+1);
}
console.log(mine);

function press(obj){

    if(over == false){
    var userpress = obj.id;
    // console.log(userpress);
    
    if(userpress == mine){   //main touch
            obj.style.background = "red";
            obj.innerHTML = "BOOM";
            gameover();
            gameOverDisplay();
    } else if(userpress == p1 || userpress == p2 ||  userpress == p3 ||  userpress == p4 ||  userpress == p5 ||  userpress == p6 || userpress == p7 || userpress == p8){    //around touch
            obj.style.background = "red";
            playClick();
    }else{     //others touch
            obj.style.background = "teal";
            playClick();
    }
    gamewinCheck();       
}
}

function playClick(){
    var playerClick = document.getElementById("clickvoice");
    playerClick.play();
}

function gameover(){
    var gameovervoice = document.getElementById("gameover");
    gameovervoice.play();
}

function gameOverDisplay(){
    ocer = true;
    for(var i = 0 ; i < 36 ; i++){
    document.getElementsByClassName("cell")[i].style.backgroundColor = "red";
    document.getElementsByClassName("cell")[i].style.color = "white";
    }
    document.getElementById("32").innerHTML = "G";
    document.getElementById("33").innerHTML = "A";
    document.getElementById("34").innerHTML = "M";
    document.getElementById("35").innerHTML = "E";
    document.getElementById("42").innerHTML = "O";
    document.getElementById("43").innerHTML = "V";
    document.getElementById("44").innerHTML = "E";
    document.getElementById("45").innerHTML = "R"; 
}

function gamewinCheck(){
    var count = 0;
    for(var i = 0 ; i < 36 ; i++){
    var color = document.getElementsByClassName("cell")[i].style.backgroundColor;
    if(color == "white"){
        count++;
    }
    }
    if(count == 1){
        for(var i = 0 ; i < 36 ; i++){
        document.getElementsByClassName("cell")[i].style.backgroundColor = "green";
        document.getElementsByClassName("cell")[i].style.color = "white";
        }
        document.getElementById("32").innerHTML = "Y";
        document.getElementById("33").innerHTML = "O";
        document.getElementById("34").innerHTML = "U";
        document.getElementById("42").innerHTML = "W";
        document.getElementById("43").innerHTML = "I";
        document.getElementById("44").innerHTML = "N";

    }
}

function allwhite(){
    for(var i = 0 ; i < 36 ; i++){
        document.getElementsByClassName("cell")[i].style.backgroundColor = "white";
        }
}
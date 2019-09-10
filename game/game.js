
var arr=[100,99,98,97,96,95,94,93,92,91,
    81,82,83,84,85,86,87,88,89,90,
    80,79,78,77,76,75,74,73,72,71,
    61,62,63,64,65,66,67,68,69,70,
    60,59,58,57,56,55,54,53,52,51,
    41,42,43,44,45,46,47,48,49,50,
    40,39,38,37,36,35,34,33,32,31,
    21,22,23,24,25,26,27,28,29,30,
    20,19,18,17,16,15,14,13,12,11,
    1,2,3,4,5,6,7,8,9,10]
function hide()
{
    document.getElementById("turn").innerHTML="PLAYER 1 TURN";
    var k=0;
    document.getElementById("snake1").setAttribute("style","visibility:visible");
    document.getElementById("snake2").setAttribute("style","visibility:visible");
    document.getElementById("dice").setAttribute("style","visibility:visible");
    document.getElementById("ladder1").setAttribute("style","visibility:visible");
    document.getElementById("ladder2").setAttribute("style","visibility:visible");
    for(var i=0;i<10;i++)
    {
        for(var j=0;j<10;j++){
        var board=document.createElement("label");
        board.id=arr[k];
        board.innerHTML=arr[k++];
        $("#boxs").append(board);
        $("label").css({"width": "50px", "height": "50px","background-color": "yellow","border":"1px solid blue","float":"left","font-size":"150%"});
        }
        var board =document.createElement("br"); 
        $("#boxs").append(board);
    }
    document.getElementById("hide").remove();

}

var player1=0;
var player2=0;
var flag=1,f=-1;
var text=1;
var text1=1;
function random(){
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("demo").setAttribute("style","visibility:visible");
    console.log("rnd:",x);
    document.getElementById("demo").innerHTML = x;
    
    if(flag==1)
    {   document.getElementById("turn").innerHTML="PLAYER 2 TURN";
        if(player1+x<=100)
        {
            document.getElementById(text).innerHTML = text;
            document.getElementById(text).style.backgroundColor = "yellow"; 
            text=player1+x;
            player1=player1+x;
            if(player1==77) {player1=23;text=23;}
            if(player1==93) {player1=54;text=54;}
            if(player1==22) {player1=78;text=78;}
            if(player1==46) {player1=95;text=95;}
            var s = ""+player1;
            //console.log("s1:",s);
            //console.log("p1:",player1);
            if(player1==player2){
                document.getElementById(s).innerHTML = "p1&p2";
                document.getElementById(text1).style.backgroundColor = "green";
            }
            else{
                document.getElementById(s).innerHTML="P1";
                document.getElementById(s).style.backgroundColor = "red";
                //$("label").css('background-color','red');
            }
        }
        if(player1==100) {alert("Player1 Won the game");window.location.href="game.html"}
        flag=flag*f;
    }
    else
    {
        document.getElementById("turn").innerHTML="PLAYER 1 TURN";
        if(player2+x<=100)
        {
            document.getElementById(text1).innerHTML=text1;
            document.getElementById(text1).style.backgroundColor = "yellow";
            text1=player2+x;
            player2=player2+x;
            if(player2==77) {player2=23;text1=23;}
            if(player2==93) {player2=54;text1=54;}
            if(player2==22) {player2=78;text1=78;}
            if(player2==46){ player2=95;text1=95;}
            var s = ""+player2;
            //console.log("s2:",s);
            //console.log("p2:",player2);
            if(player1==player2){
                document.getElementById(s).innerHTML = "p1&p2";
                document.getElementById(text1).style.backgroundColor = "green";
            }
            else{
                document.getElementById(s).innerHTML="P2";
                document.getElementById(s).style.backgroundColor = "blue";
                //$("label").css('background-color',"blue");
            }
        }
        if(player2==100) {alert("Player2 Won the game");window.location.href="game.html"}
        flag=flag*f;
    }
}

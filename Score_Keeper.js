var btn1=document.getElementsByTagName("button")[0];
var btn2=document.getElementsByTagName("button")[1];
var resett=document.getElementsByTagName("button")[2];
var h1=document.querySelector("#p1Display");
var h2=document.querySelector("#p2Display");
var num=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");

var p1Score=0;
var p2Score=0;
var winningScore=5;

var gameOver=false;

num.addEventListener("change", function(){
	winningScoreDisplay.textContent=num.value;
	winningScore=Number(num.value);
	reset();
})


btn1.addEventListener("click", function(){
	if(!gameOver)
	{
		p1Score+=1;
		if(p1Score===winningScore)
		{
			gameOver=true;
			h1.classList.add("winner");
		}	
		h1.textContent=p1Score;
	}
})

btn2.addEventListener("click", function(){
	if(!gameOver)
	{
		p2Score++;
		if(p2Score===winningScore)
		{
			gameOver=true;
		}
		h2.textContent=p2Score;
	}
})

resett.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	h1.classList.remove("winner");
	h2.classList.remove("winner");
	gameOver=false;
	h1.textContent=0;
	h2.textContent=0;

}

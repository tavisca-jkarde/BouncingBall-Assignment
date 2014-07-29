var min_x = 0;
var min_y=0;
var maxValue_x = window.innerWidth-60;
var maxValue_y = window.innerHeight-60;
var array = [];
var newBallObject ;
 
window.onload = function()
{
	
	newBallObject = document.getElementById('newBall');
	newBallObject.onclick=clickCall;
	
}	

function clickCall()
{
	var newBallDiv=createNewBall();
   var ballBouncing= new classBouncingBall(newBallDiv);
   array.push(ballBouncing);
   window.setInterval(function(){array.forEach(function(elem){elem.init()})},100);
}


function classBouncingBall(newBallDiv)
{
		this.newBallObject = newBallDiv;
  		this.x=(Math.random() * window.innerWidth) + 1;
  		this.y=(Math.random() * window.innerHeight) + 1;
  		this.dx_value=15;  
  		this.dy_value=10;
  		this.newBallTag=newBallDiv;

		this.init =function()
		{	
			this.x = parseInt(this.newBallTag.style.left);
			this.y = parseInt(this.newBallTag.style.top);
			this.moveBall();
			
		}

		this.moveBall = function()
		{
			this.x+=this.dx_value;
			this.y+=this.dy_value;
			this.checkBounderies();
			this.newBallTag.style.left = this.x + "px";
			this.newBallTag.style.top  = this.y + "px";
			
		}

		this.checkBounderies = function()
		{
			if (this.x>maxValue_x || this.x<min_x )
			{
				this.dx_value=- this.dx_value;
			}

			if (this.y>maxValue_y || this.y<min_y)
			{
				this.dy_value=- this.dy_value;

			}
		}

}


function createNewBall()
{
	
	var newBallTag= document.createElement("div");
	var randomBall =(Math.floor((Math.random() * 100) + 1));
	newBallTag.id ="div" + randomBall;
	newBallTag.style.width= 50 + "px";
	newBallTag.style.height=50+ "px";
	newBallTag.style.backgroundColor= '#3b4ba3';
	newBallTag.style.borderRadius='50%';
	newBallTag.style.display='block';
	newBallTag.style.position='absolute';
	newBallTag.style.left= (Math.random()* window.innerWidth ) + "px";
	newBallTag.style.top=(Math.random()* window.innerHeight ) + "px";
	document.body.appendChild(newBallTag);

	return newBallTag;
}


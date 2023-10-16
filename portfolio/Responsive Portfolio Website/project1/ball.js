const ball = document.getElementById('ball');
const ballRadius = 50;
let x = ball.clientWidth / 2;
let y = ball.clientHeight / 2;
let dx = 2; 
let dy = 2; 
function updateBallPosition()
 {
  x += dx;
  y += dy;
  if (x + dx > window.innerWidth - ballRadius || x + dx < ballRadius)
   {
    dx = -dx; 
  }
  if (y + dy > window.innerHeight - ballRadius || y + dy < ballRadius)
   {
    dy = -dy;
  }
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
}
setInterval(updateBallPosition, 10);
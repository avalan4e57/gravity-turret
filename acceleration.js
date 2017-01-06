var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// position
var x = 0;
var y = 350;
// acceleration
var a = 100;
var g = 10;
// velocity
var vx = 100;
var vy = 0;




// animation loop
function animate() {
  // clear canvas
  ctx.clearRect(0, 0, width, height);
  // draw square
  ctx.fillRect(x,y,20,20);
  
  // update velocity with acceleration
  vy += a;
  // update position with velocity
  x += vx;
  y += vy;

  a -= g;
  
  requestAnimationFrame(animate);
  
  // if square is out of view reset position to the start
  if (y > height || x > width) {
    x = 0;
    y = 350;
    // reset velocity
    vx = 100;
    vy = 0;
    a = 100;
  }
}

animate();

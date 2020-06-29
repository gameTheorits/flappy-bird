function Bird() {
  this.y = height / 2;
  this.x = 64;
  //this.image = loadImage()
  this.gravity = 0.07;
  this.lift = -12;
  this.velocity = 0;

  this.show = function() {
    stroke("cyan");  
    fill(0);
    ellipse(this.x, this.y, 32, 32);
  };

  this.up = function() {
    this.velocity += this.lift;
  };

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
      gamestate = 2;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}

class EnemyBasic extends DrawableBase {
    hp = ENEMY_BASIC_HEALTH;

    draw(ctx){
        if (this.isDestroyed) return;

        ctx.beginPath();
        ctx.shadowColor = ENEMY_BASIC_SHADOW_COLOR;
        ctx.shadowBlur = ENEMY_BASIC_SHADOW_BLUR;
        ctx.strokeStyle = ENEMY_BASIC_STROKE_COLOR;
        ctx.lineWidth = ENEMY_BASIC_STROKE_WIDTH;

        const rotate = Math.atan2(this.position.x, -this.position.y);
        const xAx = Math.cos(rotate);
        const xAy = Math.sin(rotate);

        ctx.translate(this.position.x + this.width / 2, this.position.y + this.height/2 );
        ctx.rotate(rotate);

        ctx.rect(- this.width / 2, - this.height / 2, ENEMY_BASIC_WIDTH, ENEMY_BASIC_HEIGHT); 
        ctx.stroke();

        ctx.rotate(-rotate);
        ctx.translate(-(this.position.x + this.width / 2), -(this.position.y + this.height/2 ));
    }

    update(dt) {
      if (this.isDestroyed) return;
      if (this.position.x == 0 && this.position.y == 0)  {
        this.isDestroyed = true;
        return;
      }
    
      var distance = dt / 1000 * ENEMY_BASIC_SPEED;
      var remainingDistance = this.position.distance(new Point(0,0));
      if (remainingDistance < distance) {
        distance = remainingDistance;
      }

      this.position = move_to(this.position, new Point(0, 0), distance);
    }
}
class EnemyBasic extends DrawableBase {
  hp = ENEMY_BASIC_HEALTH;
  remainingDistance = Number.MAX_VALUE;

  draw(ctx) {
    if (this.isDestroyed) return;

    ctx.beginPath();
    ctx.shadowColor = ENEMY_BASIC_SHADOW_COLOR;
    ctx.shadowBlur = ENEMY_BASIC_SHADOW_BLUR;
    ctx.strokeStyle = ENEMY_BASIC_STROKE_COLOR;
    ctx.lineWidth = ENEMY_BASIC_STROKE_WIDTH;

    const rotate = Math.atan2(this.position.x, -this.position.y);
    const xAx = Math.cos(rotate);
    const xAy = Math.sin(rotate);

    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(rotate);

    ctx.rect(- ENEMY_BASIC_WIDTH / 2, - ENEMY_BASIC_HEIGHT / 2, ENEMY_BASIC_WIDTH, ENEMY_BASIC_HEIGHT);
    ctx.stroke();

    ctx.rotate(-rotate);
    ctx.translate(-(this.position.x ), -(this.position.y));
  }

  update(dt) {
    if (this.isDestroyed) return;
    if (this.position.x == 0 && this.position.y == 0) {
      this.isDestroyed = true;
      return;
    }

    var distance = dt / 1000 * ENEMY_BASIC_SPEED;
    this.remainingDistance = this.position.distance(new Point(0, 0));
    if (this.remainingDistance < distance) {
      distance = this.remainingDistance;
    }

    this.position = move_to(this.position, new Point(0, 0), distance);
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.isDestroyed = true;
    }
  }
}
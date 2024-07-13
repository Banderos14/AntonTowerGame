function compareEnemiesDistance(enemy1, enemy2) {
  return enemy1.remainingDistance - enemy2.remainingDistance;
}

class Player extends DrawableBase {
  hp = PLAYER_BASE_HEALTH;
  a = 2 * Math.PI / 6;
  attackCD = 0;
  attackPerSecond = PLAYER_ATTACK_BASE_SPEED;
  range = PLAYER_BASE_RANGE;
  attackDamage = PLAYER_ATTACK_BASE_DAMAGE;

  draw(ctx) {
    // DRAW HEXAGON
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      ctx.lineTo(this.position.x + PLAYER_RADIUS * Math.cos(this.a * i), this.position.y + PLAYER_RADIUS * Math.sin(this.a * i));
    }
    ctx.closePath();

    ctx.shadowColor = PLAYER_SHADOW_COLOR;
    ctx.shadowBlur = PLAYET_SHADOW_BLUR;
    ctx.strokeStyle = PLAYER_STROKE_COLOR;
    ctx.lineWidth = PLAYER_STROKE_WIDTH;
    ctx.stroke();

    ctx.restore();

    // DRAW RANGE
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, PLAYER_BASE_RANGE, 0, 2 * Math.PI, false);
    ctx.lineWidth = PLAYER_RANGE_CIRCLE_WIDTH;
    ctx.strokeStyle = PLAYER_RANGE_CIRCLE_COLOR;
    ctx.stroke();

    ctx.restore();
  }

  update(dt, gameObjects) {

    this.tryToShoot(dt, gameObjects);

  }

  tryToShoot(dt, gameObjects) {
    this.attackCD -= dt;

    if (this.attackCD > 0) return;
    var minimumDistane = Number.MAX_VALUE;
    var targetEnemy = null;

    gameObjects.filter(x => x instanceof EnemyBasic).forEach(element => {
      if (minimumDistane > element.remainingDistance) {
        targetEnemy = element;
        minimumDistane = element.remainingDistance;
      }
    });

    if (targetEnemy != undefined && minimumDistane <= this.range) {
      this.attackCD = 1000 / this.attackPerSecond;

      var attackLine = new AttackLine(new Point(0, 0));
      attackLine.enemyTargetRef = targetEnemy;

      gameObjects.push(attackLine);

      targetEnemy.takeDamage(this.attackDamage);
    }
  }

}
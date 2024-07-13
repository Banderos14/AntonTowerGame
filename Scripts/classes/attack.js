class AttackLine extends DrawableBase {
    enemyTargetRef = undefined;
    lifeSpan = PLAYER_ATTACK_LIVESPAN;

    draw(ctx) {
        if (this.isDestroyed || this.enemyTargetRef == undefined) return;

        ctx.lineWidth = 2;

        // linear gradient from start to end of line
        var gradient = ctx.createLinearGradient(this.position.x, this.position.y, this.enemyTargetRef.position.x, this.enemyTargetRef.position.y);
        gradient.addColorStop(1, PLAYER_ATTACK_COLOR_START);
        gradient.addColorStop(0, DEFAULT_BACKGROUND_COLOR);

        ctx.strokeStyle = gradient;
        ctx.shadowColor = DEFAULT_SHADOW_COLOR;
        ctx.shadowBlur = DEFAULT_SHADOW_BLUR;

        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.enemyTargetRef.position.x, this.enemyTargetRef.position.y);

        ctx.stroke();
    }

    update(dt) {
        this.lifeSpan -= dt;
        console.log(this.lifeSpan);
        if (this.lifeSpan < 0) this.isDestroyed = true;

        //   if (this.isDestroyed) return;

        //   if (this.position.x == 0 && this.position.y == 0)  {
        //     this.isDestroyed = true;
        //     return;
        //   }

        //   var distance = dt / 1000 * ENEMY_BASIC_SPEED;
        //   this.remainingDistance = this.position.distance(new Point(0,0));
        //   if (this.remainingDistance < distance) {
        //     distance = this.remainingDistance;
        //   }

        //   this.position = move_to(this.position, new Point(0, 0), distance);
    }
}
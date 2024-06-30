class Player extends DrawableBase {
    hp = PLAYER_BASE_HEALTH;
    a = 2 * Math.PI / 6;

    draw(ctx){
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

    update(dt) {

    }

}
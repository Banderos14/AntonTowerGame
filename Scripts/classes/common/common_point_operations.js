function move_to(origin, direction, dist){
    let dx = direction.x - origin.x;
    let dy = direction.y - origin.y;
    let coef = dist / origin.distance(direction);

    let x = origin.x + dx * coef;
    let y = origin.y + dy *coef;
    return new Point(x, y)
  }
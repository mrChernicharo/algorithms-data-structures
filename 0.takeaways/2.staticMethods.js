class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static getDistance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.x - p2.y;
    return Math.hypot(dx, dy);
  }
}

const point1 = new Point(2, 2);
const point2 = new Point(4, 0);

console.log(Point.getDistance(point1, point2));

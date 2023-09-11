function circleArea(radius) {
  if (radius <= 0) {
    throw new Error("bad radius")
  }
  return Math.PI * Math.pow(radius, 2);
}
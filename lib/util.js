const x_pi = (3.14159265358979324 * 3000.0) / 180.0;
function gcj02tobd(lng, lat) {
  const x = lng;
  const y = lat;
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
  const bd_lng = z * Math.cos(theta) + 0.0065;
  const bd_lat = z * Math.sin(theta) + 0.006;
  const result = [];
  result.push(bd_lng);
  result.push(bd_lat);
  return result;
}

module.exports = {
  gcj02tobd,
};

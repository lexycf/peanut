export function add(num1,num2) {
  var r1, r2, m, n;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return ((num1 * m + num2 * m) / m).toFixed(n);
}
export function sub(num1, num2) {
  var r1, r2, m, n;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  n = r1 >= r2 ? r1 : r2;
  m = Math.pow(10, Math.max(r1, r2));
  return ((num1 * m - num2 * m) / m).toFixed(n);
}
export function mul(num1, num2) {
  var m = 0;
  try {
    m += num1.toString().split(".")[1].length;
  } catch (e) {
  }
  try {
    m += num2.toString().split(".")[1].length;
  } catch (e) {
  }
  return (
    Number(num1.toString().replace(".", "")) *
    Number(num2.toString().replace(".", "")) /
    Math.pow(10, m)
  );
}
export function div(arg1, arg2) {
  var t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {
  }
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {
  }
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return r1 / r2 * Math.pow(10, t2 - t1);
}
export function fool(n, s) {
  let v = 0;
  switch (s) {
    case 1:
      v = 10;
      break;
    case 2:
      v = 100;
      break;
    case 3:
      v = 1000;
      break;
    case 4:
      v = 10000;
      break;
    case 5:
      v = 100000;
      break;
    case 6:
      v = 1000000;
      break;
    case 7:
      v = 10000000;
      break;
    case 8:
      v = 100000000;
      break;
    default:
      v = 10000;
  }
  return Math.floor(n * v) / v;
}

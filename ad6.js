// Time:        49     78     79     80
// Distance:   298   1185   1066   1181

let time = [49, 78, 79, 80];
let distance = [298, 1185, 1066, 1181];

function solution() {
  let total = 1;
  let totalWays = [];
  for (let i = 0; i < time.length; i++) {
    let currentRecord = distance[i];
    let t = time[i];
    let mid = Math.ceil(t / 2);
    let map = {};
    while (mid * Math.abs((mid - t)) > currentRecord) {
      map[mid] = true;
      map[Math.abs((mid - t))] = true;
      mid--;
    }
    totalWays.push(Object.keys(map).length);
  }
  console.log(totalWays);
  totalWays.forEach((item) => {
    total = total * item;
  });
  console.log(total);
  return total;
}

solution();

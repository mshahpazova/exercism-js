console.log("maria");
let minFactor = 1;
let maxFactor = 100;
for (let i = minFactor; i <= maxFactor; i++) {
  for (let j = i; j <= maxFactor; j++) {
    process.stdout.write(`${i * j} `);
  }
  console.log("");
}

//@ts-check

const sameStones = (stone1, stone2) => {
  return (
    stone1.toString() === stone2.toString() ||
    stone1.toString() === [stone2[1], stone2[0]].toString()
  );
};

const countOccs = (path, stone) => {
  return path.filter((s) => sameStones(s, stone)).length;
};

export const chain = (stones) => {
  if (stones.length === 0) {
    return [];
  }
  if (stones.length === 1) {
    if (stones[0][0] === stones[0][1]) {
      return stones;
    } else {
      return null;
    }
  }
  let counts = stones
    .map((stone) => String(stone.sort()))
    .reduce((acc, el) => ((acc[el] = (acc[el] ?? 0) + 1), acc), {});

  let stack = [[stones[0]]];

  while (stack.length > 0) {
    let lastPath = stack.pop();
    let lastStone = lastPath[lastPath.length - 1];
    for (let i = 0; i < stones.length; i++) {
      if (countOccs(lastPath, stones[i]) < counts[stones[i].toString()]) {
        let stoneToAdd = null;
        if (lastStone[1] === stones[i][0]) {
          stoneToAdd = stones[i];
        } else if (lastStone[1] === stones[i][1]) {
          stoneToAdd = [stones[i][1], stones[i][0]];
        }

        if (stoneToAdd !== null) {
          let newPath = [...lastPath, stoneToAdd];
          if (
            newPath.length === stones.length &&
            newPath[0][0] === newPath[newPath.length - 1][1]
          ) {
            return newPath;
          }
          stack.push(newPath);
        }
      }
    }
  }
  return null;
};

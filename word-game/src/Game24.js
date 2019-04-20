module.exports = (...numbers) => {
  const point24 = (...numbers, resultString) => {
    const nums = [...numbers];
    const n = nums.length;

    if (n === 1) {
      if (nums[0] === 24) {
        return resultString;
      } else return null;
    }
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const next = [];
        const a = nums[i],
          b = nums[j];
        next.push(a + b);
        next.push(Math.abs(a - b));
        next.push(a * b);
        if (b !== 0 && (a / b) * b === a) {
          next.push(a / b);
        } else if (a !== 0 && (b / a) * a === b) {
          next.push(b / a);
        }
        nums.splice(j);
        nums.splice(i);
        for (let k = 0; k < next.length; k++) {
          nums.push(next[k]);
          //对resultString进行处理
          if (point24(...nums, resultString)) return resultString;
          nums.pop();
        }
        nums.splice(i, 0, a);
        nums.splice(j, 0, b);
      }
    }
    return null;
  };
  return this.point24(...numbers, "");
};

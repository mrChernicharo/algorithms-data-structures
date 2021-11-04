// const times = [
//   [1, 8],
//   [3, 6],
//   [12, 16],
//   [15, 18],
//   [17, 20],
//   [25, 28],
//   [31, 33],
//   [32, 34],
// ];

const times = [
  [31, 33],
  [6, 10],
  [15, 18],
  [17, 20],
  [12, 16],
  [25, 28],
  [3, 5],
  [32, 34],
];

const mergeOverlaping = (timeRanges) => {
  const merged = [timeRanges[0]];

  for (let timeRange of timeRanges) {
    let foundOverlaping = false;

    for (let i = 0; i < merged.length; i++) {
      if (hasOverlap(timeRange, merged[i]) === true) {
        foundOverlaping = true;

        const [rangeStart, rangeEnd] = timeRange;
        const [start, end] = merged[i];

        if (start > rangeStart) {
          merged[i][0] = rangeStart;
        }

        if (end < rangeEnd) {
          merged[i][1] = rangeEnd;
        }
      }
    }

    if (!foundOverlaping) {
      merged.push(timeRange);
    }
  }

  return merged;
};

const hasOverlap = (timeRange, item) => {
  const [rangeStart, rangeEnd] = timeRange;
  const [start, end] = item;
  let result = false;

  if (rangeStart <= end && rangeEnd >= start) {
    result = true;
  }

  console.log({ item, timeRange, result });

  return result;
};

console.log(mergeOverlaping(times));

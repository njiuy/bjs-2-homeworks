function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr) {
    return 0;
  }
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let difference;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (!arr) {
    return 0;
  }
let sumEvenElement = 0;
let sumOddElement = 0;
let result;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];  
  } else {
    sumOddElement += arr[i];
  }
}
result = sumEvenElement - sumOddElement;
return result;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
if (arr.length === 0) {
  return 0;
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    countEvenElement ++;
  }
}
return average = sumEvenElement / countEvenElement; 
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func (...arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    const funcResult = func (...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}

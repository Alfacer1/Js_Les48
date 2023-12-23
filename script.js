const getRandomDelay = () => Math.floor(Math.random() * (7 - 3 + 1) + 3);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const a = () => {
  const delayTime = getRandomDelay();
  return delay(delayTime).then(() => delayTime);
};

const b = () => {
  const delayTime = getRandomDelay();
  return delay(delayTime).then(() => delayTime);
};

const c = () => {
  const delayTime = getRandomDelay();
  return delay(delayTime).then(() => delayTime);
};

const waitForAll = () => {
  let delayFromA, delayFromB, delayFromC;

  const promises = [a(), b(), c()];

  Promise.all(promises)
    .then(([aDelay, bDelay, cDelay]) => {
      delayFromA = aDelay;
      delayFromB = bDelay;
      delayFromC = cDelay;

      console.log(delayFromA + delayFromB + delayFromC);
    });
};

// Виклик функції для перевірки
waitForAll();

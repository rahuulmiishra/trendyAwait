const promise = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('1');
      res('promise');
    }, 3000);
  });
};

const runPromise = async (fn) => {
  try {
    const d = await fn();
    return [d, null];
  } catch (e) {
    return [null, e];
  }
};

async function test() {
  const [res] = await runPromise(promise);
  console.log('23', res);
}

test();

//@ts-check

export const promisify = (fetchProductId) => {
  return function (productId) {
    return new Promise((resolve, reject) => {
      fetchProductId(productId, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };
};

export const all = async (promises) => {
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  let results = [];

  return new Promise((resolve, reject) => {
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          results[i] = data;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    }
  });
};

export const allSettled = (promises) => {
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  let results = [];

  return new Promise((resolve, reject) => {
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          results[i] = data;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          count++;
          results.push(error);
          if (count === promises.length) {
            resolve(results);
          }
        });
    }
  });
};

export const race = (promises) => {
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    }
  });
};

export const any = (promises) => {
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  let results = [];

  return new Promise((resolve, reject) => {
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          results.push(error);
          count++;
          if (count === promises.length) {
            reject(results);
          }
        });
    }
  });
};

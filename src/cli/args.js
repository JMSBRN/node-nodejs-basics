const parseArgs = () => {
  const arr = [];
  const args = process.argv.slice(2);
  args.forEach((el, idx) => {
    if (!(idx % 2)) {
      arr.push(el.slice(2));
    } else {
      arr.push(el);
    }
  });
  const newArr = arr.reduce((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
  newArr.forEach(([key, value]) => {
    console.log(`${key} is ${value}`);
  });
};

parseArgs();

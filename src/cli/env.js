const parseEnv = () => {
  const object = process.env;
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (key.includes("RSS_")) console.log(key + "=" + element);
    }
  }
};
parseEnv();

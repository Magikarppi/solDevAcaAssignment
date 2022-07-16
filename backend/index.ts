import fs = require('fs');
import readLine = require('readline');

const processLineByLine = async () => {
  const fileStream = fs.createReadStream('./data/cityBike-trips-2021-05.csv');

  const rlInterface = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rlInterface) {
    console.log('line: ', line);
  }
};

processLineByLine();

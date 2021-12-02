const csv = require('csv-parser');
const fs = require('fs');
const tf = require('@tensorflow/tfjs');

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require('@tensorflow/tfjs-node-gpu');

const houseSalesDataset = [];
fs.createReadStream('kc_house_data.csv')
  .pipe(csv({}))
  .on('data', (data) => houseSalesDataset.push(data));
// .on('end', () => {
//   const points = houseSalesDataset.map((record) => ({
//     x: record.sqft_living,
//     y: record.price,
//   }));
// });

console.log(houseSalesDataset);
const points = houseSalesDataset.map((record) => ({
  x: record.sqft_living,
  y: record.price,
}));

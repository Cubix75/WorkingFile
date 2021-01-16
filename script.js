// Creates NeuralNetwork
const questionNetwork = new brain.NeuralNetwork();
var pitchArray = [1.5,2,3,4,5,6]]

questionNetwork.train([
  { input: [-164,101,23,20,4,4], output: {Question: 1}},
  { input: [7,4,-332,-180,-9,0,0], output: {Question: 1}}, 
  { input: [-7,4,254,26,-241,368], output: {Question: 1}}, 
  { input: [-30,-60,-11,-6,0,0,0,3,24,-23,-23,-23,-23,-280,-41,31,31], output: {Question: 1}},
  { input: [9,-6,-6,0,17,17], output: {Question: 1}},
  { input: [20,0,0,11,11,2,39,-4,-4,0,0,48,48], output: {Excited: 1}},
  { input: [1,-25,-25,-25,-4,0,-183,-183,-60,0,-12,3,3], output: {Tired: 1}},
  { input: [3,-390,-390,-390,-390,0,0,0,1,-14,3,-55,-55,-55,3,-8,12,12], output: {Mad: 1}},
  { input: [9,0,0,-300,-2,45,177,7,-5,-5,-5,-5,0,25,0,0,-17,-17], output: {Surprise: 1}},
  { input: [-115,0,265,265,0,74,-39,164,-8,31,31,31,0,-61,3,3,-157,-157,0,9,-23,73,73], output: {Sad: 1}}
]);

const questionResult = questionNetwork.run(pitchArray)
console.log(questionResult)

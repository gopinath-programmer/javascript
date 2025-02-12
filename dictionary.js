import _ from "lodash";

let synonyms = [
  ["happy", "joyful", "content", "cheerful", "delighted", "glad"],
  ["sad", "unhappy", "sorrowful", "downcast", "miserable", "gloomy"],
  ["fast", "quick", "speedy", "swift", "rapid", "hurried"],
  ["slow", "lethargic", "sluggish", "unhurried", "delayed", "gradual"],
  ["big", "large", "huge", "gigantic", "enormous", "massive"],
  ["small", "tiny", "little", "miniature", "minute", "compact"],
  ["smart", "intelligent", "clever", "brilliant", "sharp", "wise"],
  ["funny", "humorous", "amusing", "witty", "comical", "entertaining"],
];

function Dictionary(word, meaning) {
  for (let i = 0; i < synonyms.length; i++) {
    if (synonyms[i].includes(word) && synonyms[i].includes(meaning)) {
      return synonyms[i];
    } else if (synonyms[i].includes(word) || synonyms[i].includes(meaning)) {
      synonyms[i] = _.uniq([...synonyms[i], word, meaning]);
      return synonyms[i];
    }
  }
  synonyms = [...synonyms, [word, meaning]];
  return _.last(synonyms);
}
const wordAndMeaning = Dictionary("jolly", "happy");
// console.log(wordAndMeaning);
// console.log(synonyms);

const word2AndMeaning = Dictionary("happy", "joyful");
// console.log(word2AndMeaning);

const word3AndMeaning = Dictionary("hi", "bye");
// console.log(word3AndMeaning);

const word4AndMeaning = Dictionary("hi", "byes");
console.log(word4AndMeaning);

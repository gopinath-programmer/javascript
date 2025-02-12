import _ from "lodash";

class Dictionary {
  constructor() {
    this.dictionary = {};
  }
  displayDictionary() {
    console.log(this.dictionary);
  }

  addNewWordAndMeaning(word, meaning) {
    this.dictionary[word] = _.flatten([meaning]);
  }

  addNewMeaningToWord(word, newMean) {
    const wordAndMeanings = _.map(this.dictionary, (meanings, word) => [
      word,
      ...meanings,
    ]);
    const matchedIndex = _.findIndex(wordAndMeanings, (words) =>
      words.includes(word)
    );
    const matchedKey =
      matchedIndex !== -1 ? wordAndMeanings[matchedIndex][0] : false;
    if (matchedKey) {
      this.dictionary[matchedKey] = _.uniq([
        ...this.dictionary[matchedKey],
        newMean,
      ]);
    } else {
      console.log("PLEASE ADD THE WORD");
    }
  }

  searchTheWord(searchWord) {
    const wordAndMeanings = _.map(this.dictionary, (meanings, word) => [
      word,
      ...meanings,
    ]);
    for (let element of wordAndMeanings) {
      if (element.includes(searchWord)) {
        const answer = {};
        answer[searchWord] = _.without(element, searchWord);
        return console.log(answer);
      }
    }
    console.log("THE WORD DOES NOT EXIST");
  }
}

const myWordAndMeaning = new Dictionary();
myWordAndMeaning.addNewWordAndMeaning("happy", "joyful");
myWordAndMeaning.addNewMeaningToWord("happy", "entertain");
myWordAndMeaning.addNewMeaningToWord("joyful", "jolly");
myWordAndMeaning.addNewWordAndMeaning("sad", "sorrowful");
myWordAndMeaning.addNewMeaningToWord("sad", "lonely");
myWordAndMeaning.addNewMeaningToWord("lonely", "worry");
myWordAndMeaning.searchTheWord("happy");
myWordAndMeaning.searchTheWord("joyful");
myWordAndMeaning.searchTheWord("sad");
myWordAndMeaning.searchTheWord("worry");

myWordAndMeaning.displayDictionary();

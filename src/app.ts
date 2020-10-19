import { Word } from "./data-types";

const words: Word[] = [
  {
    word: "JAVASCRIPT",
    clues: ["A programming language"],
    defaultValue: "J_V___R_P_",
  },
  {
    word: "OMNISCIENT",
    clues: ["All-known"],
    defaultValue: "_M_IS_I__T",
  },
  {
    word: "KOMMETJIE",
    clues: ["Small town in South Africa near Cape Town"],
    defaultValue: "K__ME___E",
  },
  {
    word: "SITCOM",
    clues: ["Genre of comedy"],
    defaultValue: "S___OM",
  },
  {
    word: "Uzbekistan",
    clues: ["A Country in Central Asia"],
    defaultValue: "u__ek_s__n",
  },
  {
    word: "Ghost Force",
    clues: ["Novel by Patrick Robinson"],
    defaultValue: "gh___ f__c_",
  },
];

const random = (n: number) => Math.floor(Math.random() * n);

const fix = (origin: string, toFix: string, key: string) => {
  return toFix
    .split("")
    .map((val, i) => (origin[i] == key ? key : val))
    .join("");
};

export class App {
  private keys = {};
  private LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  private selectedWord: Word;
  private letters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((str) =>
    str.split("")
  );

  constructor() {
    this.selectedWord = words[random(words.length)] =
      words[random(words.length)];
    this.selectedWord.word = this.selectedWord.word.toUpperCase();
    this.selectedWord.defaultValue = this.selectedWord.defaultValue.toUpperCase();
    this.selectedWord.showWord = this.selectedWord.defaultValue;
    document.addEventListener("keydown", this.keyPressed.bind(this));

    for (let i in this.LETTERS) {
      this.keys[65 + +i] = this.LETTERS[i];
    }
  }

  checkFinished() {
    if (this.selectedWord.showWord == this.selectedWord.word) {
      window.location.reload();
    }
  }

  checkKey(key: string) {
    console.log(key);
    if (this.selectedWord.word.includes(key)) {
      // replace showWord with correct key;
      let iOfKey = this.selectedWord.word.indexOf(key);
      this.selectedWord.showWord = fix(
        this.selectedWord.word,
        this.selectedWord.showWord,
        key
      );
      this.checkFinished();
    }
  }

  keyClicked(event: MouseEvent) {
    //@ts-ignore
    const letter = event.target.innerText;
    this.checkKey(letter);
  }

  keyPressed(event: KeyboardEvent) {
    this.checkKey(event.key.toUpperCase());
  }
}

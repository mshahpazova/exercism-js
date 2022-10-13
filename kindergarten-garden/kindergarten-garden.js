//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.students = students.sort();
    let [firstRow, secondRow] = diagram
      .split("\n")
      .map((str) => str.match(/\w{1,2}/g));
    let plants = firstRow.reduce(
      (acc, pair, index) => (acc.push(pair + secondRow[index]), acc),
      []
    );
    this.studentPlants = plants.reduce(
      (acc, plants, index) => ((acc[this.students[index]] = plants), acc),
      {}
    );
  }

  plants(student) {
    return this.studentPlants[student]
      .split("")
      .map((abbr) => PLANT_CODES[abbr]);
  }
}

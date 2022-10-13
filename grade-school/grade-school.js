//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster() {
    return Object.keys(this._roster).reduce((acc, k) => (acc[k] = [...this._roster[k]], acc),
      {}
    );
  }

  /**
   *
   * @param {string} name
   * @param {number} grade
   */
  add(name, grade) {
    const removeIfPresent = (name, allGrades) => {
      Object.values(allGrades).forEach((list) => {
        if (list.includes(name)) {
          list.splice(list.indexOf(name), 1);
        }
      });
    };

    removeIfPresent(name, this._roster);

    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    this._roster[grade].push(name);
    this._roster[grade].sort();
  }

  /**
   *
   * @param {number} grade
   * @returns {Array<string>}
   */
  grade(grade) {
    return this._roster[grade] ? [...this._roster[grade]] : [];
  }
}

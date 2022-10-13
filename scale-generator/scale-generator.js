//@ts-check

//prettier-ignore
const SCALE_SHARPS = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
//prettier-ignore
const SCALE_FLATS = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
//prettier-ignore
const SHARPS = ["G", "D", "A", "E", "B", "F#", "e", "b", "f#", "c#", "g#", "d#"];
//prettier-ignore
const FLATS = ["F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb"];
const INTERVALS = ["m", "M", "A"];

export class Scale {
  constructor(tonic) {
    const normalizeTonic = (tonic) => tonic[0].toUpperCase() + (tonic[1] ?? "");
    this.tonic = tonic;
    if (FLATS.includes(this.tonic)) {
      this.scale = SCALE_FLATS;
    } else if (SHARPS.includes(this.tonic)) {
      this.scale = SCALE_SHARPS;
    } else {
      this.scale = SCALE_SHARPS;
    }
    this.step = this.scale.indexOf(normalizeTonic(this.tonic));
  }

  chromatic() {
    let result = [];
    for (let i = this.step; i < this.step + 12; i++) {
      result.push(this.scale[i % this.scale.length]);
    }
    return result;
  }

  interval(intervals) {
    let result = [];
    for (let interval of intervals) {
      result.push(this.scale[this.step]);
      this.step =
        (this.step + INTERVALS.indexOf(interval) + 1) % this.scale.length;
    }
    return result;
  }
}

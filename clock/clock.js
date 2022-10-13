//@ts-check

import { threadId } from "worker_threads";

export class Clock {
  /**
   *
   * @param {number} hours
   * @param {number} minutes
   */
  constructor(hours, minutes = 0) {
    this.totalMinutes = hours * 60 + minutes;
    // //with negative minutes this will substract from the hours
    // //and math.floor will round to -1 instead of zero for negative minutes
    // this.hours = hours + Math.floor(minutes / 60);
    // this.minutes = minutes % 60;

    // if (this.minutes < 0) {
    //   //this converts to positive minutes
    //   this.minutes += 60;
    // }
    // this.hours %= 24;
    // if (this.hours < 0) {
    //   //this converts to positive hours
    //   this.hours += 24;
    // }
  }

  get hours() {
    let hours = Math.floor(this.totalMinutes / 60) % 24;
    if (hours < 0) {
      hours += 24;
    }
    return hours;
  }

  get minutes() {
    let minutes = this.totalMinutes % 60;
    if (minutes < 0) {
      minutes += 60;
    }
    return minutes;
  }

  toString() {
    const padNumbers = (num) => `0${num}`.substr(-2);
    return `${padNumbers(this.hours)}:${padNumbers(this.minutes)}`;
  }

  plus(minutes) {
    this.totalMinutes += minutes;
    return this;
  }

  minus(minutes) {
    this.totalMinutes -= minutes;
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}

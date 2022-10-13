// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = Math.max(1, newWidth);
    this.height = Math.max(1, newHeight);
  }
}

export class Position {
  constructor(x, y) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  move(newX, newY) {
    this.x = Math.max(0, newX);
    this.y = Math.max(0, newY);
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    let { width, height } = size;
    width = Math.min(width, this.screenSize.width - this.position.x);
    height = Math.min(height, this.screenSize.height - this.position.y);
    this.size.resize(width, height);
  }

  move(position) {
    let { x, y } = position;
    x = Math.min(x, this.screenSize.width - this.size.width);
    y = Math.min(y, this.screenSize.height - this.size.height);
    this.position.move(x, y);
  }
}

/**
 *
 * @param {ProgramWindow} window
 */
export function changeWindow(window) {
  window.resize(new Size(400, 300));
  window.move(new Position(100, 150));
  return window;
}

export class Zipper {
  node(value, left, right, up, bad) {
    return {
      value,
      left,
      right,
      up,
      bad,
    };
  }

  zipperFromGoodNode(node) {
    let newZipper = new Zipper();
    newZipper.tree = node;
    newZipper.badRoot = this.badRoot;
    return newZipper;
  }

  constructor(tree = null, parent = null) {
    this.badRoot = tree;
    this.tree = this.betterTree(tree, parent);
  }

  betterTree(badTree, parent) {
    if (badTree === null) {
      return null;
    }
    let newNode = this.node(badTree.value, null, null, parent, badTree);
    let left = this.betterTree(badTree.left, newNode);
    let right = this.betterTree(badTree.right, newNode);
    newNode.left = left;
    newNode.right = right;

    return newNode;
  }

  static fromTree(tree) {
    return new Zipper(this.copyBadTree(tree), null);
  }

  static copyBadTree(badTree) {
    if (badTree === null) {
      return null;
    }

    let node = { value: badTree.value };
    node.left = this.copyBadTree(badTree.left);
    node.right = this.copyBadTree(badTree.right);
    return node;
  }

  toTree() {
    return this.badRoot;
  }

  value() {
    return this.tree.value;
  }

  left() {
    return this.tree.left === null
      ? null
      : this.zipperFromGoodNode(this.tree.left);
  }

  right() {
    return this.tree.right === null
      ? null
      : this.zipperFromGoodNode(this.tree.right);
  }

  up() {
    return this.tree.up === null ? null : this.zipperFromGoodNode(this.tree.up);
  }

  setValue(value) {
    this.tree.value = value;
    this.tree.bad.value = value;
    return this.zipperFromGoodNode(this);
  }

  setLeft(badLeft) {
    let goodLeft = this.betterTree(badLeft, this.tree);
    this.tree.left = goodLeft;
    this.tree.bad.left = badLeft;
    return this.zipperFromGoodNode(this);
  }

  setRight(badRight) {
    let goodRight = this.betterTree(badRight, this.tree);
    this.tree.right = goodRight;
    this.tree.bad.right = badRight;
    return this.zipperFromGoodNode(this);
  }
}

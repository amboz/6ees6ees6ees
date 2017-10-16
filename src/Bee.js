class Bee extends Grub {
  constructor () {
    super();
    this.age = 5
    this.color = 'yellow'
    this.job = 'Keep on growing'
  }
  eat () {
    super.eat()
  }
};

// This assignment must be written with ES6 classes by using the
// new class, extends, and super keywords

// Create a Bee class, in ES6 style, with:
// the Grub superclass
// an age property that is set to 5
// a color property that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a job property that is set to Keep on growing
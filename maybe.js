/**
 * what is a maybe monad:
 * - way to handle null value checking DUN DUN DUNNNN 🎶
 */
class Maybe {

  /**
   * When we want to safely handle a potentially null value
   * we will call Maybe.fromNullable(Potentially Null Value)
   * if the value is null the Maybe class will return a new Nothing Wrapper
   * if the the value is !null, we return a new Just wrapper 🔥
   */ 
  static fromNullable(value) {
    return value ? 
      new Just(value) : 
      new Nothing();
  }

  static just(value) {
    return new Just(value);
  }

  static nothing(value) {
    return new Nothing(value);
  }

  static of() {
    return value;
  }

  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }

}

class Just extends Maybe {

  constructor(value) {
    /**
     *  Must call super if we want the fromNullable method on Maybe Class
     */
    super(); 
    this.value = value;
  }

  map(func) {
    return func(this.value);
  }

  getOrElse() {
    return this.value;
  }

  fitler(func) {
    return Monad.fromNullable(
      func(this.value) ? 
        this.value : 
        null
    );
  }

  get isJust() {
    return true;
  }

  toString() {
    return `Maybe.Just(${this.value})`;
  }

  chain() {
    return this;
  }
}

class Nothing extends Maybe {

  constructor() {
    super();
  }

  map(f) {
    return this;
  }

  get value() {
    throw new TypeError('Can\'t extract the value of nothing');
  }

  getOrElse(other) {
    return other;
  }

  get isNothing() {
    return true;
  }

  toString() {
    return `Maybe.Nothing`;
  }
}

let maybeJust = Maybe.fromNullable(86712934);

console.log(maybeJust.toString());

maybeNothing = Maybe.fromNullable(null)
                    .getOrElse('I\'m a default value' );

console.log(maybeNothing);

var justAndNothing = [
  null, 
  'String value', 
  undefined, 
  2364, 
  false, 
  'another thing'
];

const makeSyncronous = array => Promise.resolve(justAndNothing.map(element => 

  Maybe.fromNullable(element)).getOrElse(`~ default value ~`));

makeSyncronous(justAndNothing).then(console.log);

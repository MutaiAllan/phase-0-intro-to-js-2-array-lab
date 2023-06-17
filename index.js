const cats = ["Milo", "Otis", "Garfield"];

function beforeEach() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
} // Initiallizes the elements of the array `cat`.

function destructivelyAppendCat(name) {
  return (cats.push(name));
} // Appends a cat to the end of the cats array destructively.
// destructivelyAppendCat('Ralph');
// console.log(cats);

beforeEach();
function destructivelyPrependCat(name1) {
  return cats.unshift("Bob");
} // Prepends a cat to the beginning of the cats array destructively.
// destructivelyPrependCat('Bob');
// console.log(cats);

beforeEach();
function destructivelyRemoveLastCat() {
  return cats.pop();
} // Removes the last cat from the cats array destructively.
// destructivelyRemoveLastCat();
// console.log(cats);

beforeEach();
function destructivelyRemoveFirstCat() {
  return cats.shift();
} // Removes the first cat from the cats array destructively.
// destructivelyRemoveFirstCat();
// console.log(cats);

beforeEach();
function appendCat(name) {
  const cats1 = [...cats, name];
  return cats1;
} // Appends a cat to the cats array and returns a new array, leaving the cats array unchanged.
// console.log(appendCat('Broom'));
// console.log(cats);

beforeEach();
function prependCat(name) {
  const cats2 = [name, ...cats];
  return cats2;
} // Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged.
// console.log(prependCat('Arnold'));
// console.log(cats);

beforeEach();
function removeLastCat() {
  return cats.slice(0, -1);
} // Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged.
// console.log(removeLastCat());
// console.log(cats);

beforeEach();
function removeFirstCat() {
  return cats.slice(1);
} // Removes the first cat from the cats array and returns a new array, leaving the cats array unchanged.
// console.log(removeFirstCat());
// console.log(cats);
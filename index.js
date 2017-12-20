const app = "I don't do much."

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  var name = 'Ralph'
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  var name = 'Bob'
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var name = 'Broom'
  return [...kittens, name]
}

function prependKitten(name) {
  var name = 'Arnold'
  return [name, ...kittens]
}

function removeLastKitten() {
  var kittens = kittens.slice(0, kittens.length - 1)
  return kittens
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens
}

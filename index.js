function shout (string)
{
  return string.toUpperCase()
}

function whisper (string)
{
  return string.toLowerCase()
}
function logShout (string)
{
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lowercase = string.toLowerCase()
  if (string === lowercase) {
    return "I can\'t hear you!"
  }
  if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
}

//   it('returns "YES INDEED!" if `string` is uppercase', function() {
//     expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
//   })

//   it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
//     expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
//   })
// })
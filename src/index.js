var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

module.exports = function toReadable (number) {
  if (number < 20) {
      return num[number]};
  var digit = number%10;
  if (number < 100) {
      return tens[Math.floor(number/10)-2] + (digit? " " + num[digit]: "")
  }
  if (number < 1000) {
      return num[Math.floor(number/100)] + ' hundred' + (number%100 == 0? "": " " + toReadable(number%100))
  }
}

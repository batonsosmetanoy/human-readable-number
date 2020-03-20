module.exports = function toReadable (number) {
  let zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
  let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number >= 0 && number <= 9) return zeroToNine[number];
  if (number >= 10 && number <= 19) return tenToNineteen[number - 10];
  if (number >= 20 && number <= 99) {
    let strDigits = String(number).split('');
    let digits = strDigits.map(item => Number(item));
    if (number % 10 === 0) return `${dozens[digits[0] - 1]}`;
    return `${dozens[digits[0] - 1]} ${zeroToNine[digits[1]]}`;
  }
  if (number >= 100 && number <= 999) {
    let strDigits = String(number).split('');
    let digits = strDigits.map(item => Number(item));
    if (number % 100 === 0) return `${zeroToNine[digits[0]]} hundred`;
    else if (number % 100 > 0 && number % 100 <= 9) {
      return `${zeroToNine[digits[0]]} hundred ${zeroToNine[digits[2]]}`;
    }
    else if ((number % 100) % 10 === 0) return `${zeroToNine[digits[0]]} hundred ${dozens[digits[1]-1]}`;
    else if (number % 100 > 10 && number % 100 <= 19) {
      return `${zeroToNine[digits[0]]} hundred ${tenToNineteen[(number % 100) - 10]}`;
    }
    return `${zeroToNine[digits[0]]} hundred ${dozens[digits[1]-1]} ${zeroToNine[digits[2]]}`;
  }
}

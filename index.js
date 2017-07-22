const OFFSET = 32
const BASE = 65535 - OFFSET

let alpha = []

for (let i = 0; i < BASE; i++) {
  alpha.push(String.fromCharCode(i + OFFSET))
}

const encode = exports.encode = num => {
  if (!/^\d+$/.test(num)) throw new Error('Value passed is not an int')
  if (typeof num !== 'number') num = ~num

  const base = alpha.length
  let str = ''

  while (num >= base) {
    const mod = num % base
    str = alpha[mod] + str
    num = (num - mod) / base
  }

  return alpha[num] + str
}

const decode = exports.decode = str => {
  let num = 0

  while(str) {
    let pos = str[0].charCodeAt(0) - OFFSET
    if (pos < 0) throw new Error(`Can't find ${str[0]}`)
    let powerOf = str.length - 1
    num += pos * (Math.pow(BASE, powerOf))
    str = str.substring(1)
  }

  return num
}

/* TEST
for (let i = 0; i < BASE ^ BASE; i += 1) {
  const num = encode(out, out.length)(i)
  console.log(i, num, decode(num))
  if (i !== decode(encode(out, out.length)(i))) console.log('FAIL')
  // process.stdout.write('\033c')
}

const number = 1500682695596
console.log(number)
console.log(encode(number))
console.log(decode(encode(number)))
*/

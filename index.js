// 1 byte    0000 to   007F
// 2 bytes   0080 to   07FF
// 3 bytes   0800 to   FFFF
// 4 bytes  10000 to 10FFFF

const OFFSET = 32
const BASE = 65535 - OFFSET

let alphabet = []

for (let i = 0; i < BASE; i++) {
  alphabet.push(String.fromCharCode(i + OFFSET))
}

export const encode = num => {
  if (!/^\d+$/.test(num)) throw new Error('Value passed is not an int')
  if (typeof num !== 'number') num = ~num

  const base = alphabet.length
  let str = ''

  while (num >= base) {
    const mod = num % base
    str = alphabet[mod] + str
    num = (num - mod) / base
  }

  return alphabet[num] + str
}

export const decode = str => {
  let num = 0

  while (str) {
    let pos = str[0].charCodeAt(0) - OFFSET
    if (pos < 0) throw new Error(`Can't find ${str[0]}`)
    let powerOf = str.length - 1
    num += pos * (Math.pow(BASE, powerOf))
    str = str.substring(1)
  }

  return num
}

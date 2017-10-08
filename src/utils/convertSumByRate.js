export default function convertSumByRate(sum, rate) {
  if (!rate || rate === 1) {
    return sum
  } else {
    return sum * rate
  }
}
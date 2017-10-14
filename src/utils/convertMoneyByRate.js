export default function convertMoneyByRate(money, rate) {
  if (!rate || rate === 1) {
    return money
  } else {
    return money * rate
  }
}
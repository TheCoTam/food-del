export function convertCurrency(amount) {
  let numberStr = amount.toString();
  let formattedNumber = numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${formattedNumber}đ`;
}

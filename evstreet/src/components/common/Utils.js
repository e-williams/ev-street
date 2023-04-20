export const priceToDollars = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);

export const formattedNumbers = (number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  }).format(number);

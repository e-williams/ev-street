
const priceToDollars = (price) => {
  return (
    isNaN(price) ? price :
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(price)
  );
}

const formattedNumbers = (number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  }).format(number);

export default (
  priceToDollars,
  formattedNumbers
)
export function FormatPrice(value) {
  if (!value) return value;

  const formattedPrice = value.replace(/[^\d]/g, '');
  return formattedPrice;
}

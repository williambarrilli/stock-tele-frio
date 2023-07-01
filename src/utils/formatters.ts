export const formattedValue = (value: number) =>
  value?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export const profitPercentage = (
  purchasePrice: number,
  sellingPrice: number,
) => {
  const profitPercentage =
    ((sellingPrice - purchasePrice) / purchasePrice) * 100;
  if (!profitPercentage) return '0';
  return profitPercentage.toFixed(2);
};

export const currencyToInteger = (value: string) => {
  if (!value) return 0;
  const formatted = value
    .replace(/[a-z]|\$/gi, '')
    .replace(/\./gi, '')
    .replace(/,/gi, '.');

  return parseFloat(formatted);
};

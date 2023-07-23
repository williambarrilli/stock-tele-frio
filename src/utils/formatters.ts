export const formattedValue = (value: number | string) => {
  if (typeof value === 'number') {
    return value?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return parseFloat(value.replace(',', '.')).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

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

export function formatarDataHora(data: Date, hours?: boolean) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  if (hours) return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  return `${dia}/${mes}/${ano}`;
}

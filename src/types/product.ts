export enum Categorires {
  'Maquina de lavar',
  'Refrigeração',
  'Ferramentas',
  'Material',
}

export enum unitMeasurement {
  'Unidade',
  'liter',
  'Kg',
  'Mt',
}

export interface iProduct {
  id: string;
  name: string;
  categorie: string;
  brand: string;
  location: string;
  buyPrice: number;
  sellPrice: number;
  salesMargin: number;
  quantity: number;
  alertQuantity: number;
  unitMeasurement: string;
}

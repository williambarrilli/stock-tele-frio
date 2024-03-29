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
  _id?: string;
  id: string | number;
  name: string;
  category: string;
  brand: string;
  buyPrice: number;
  sellPrice: number;
  salesMargin: number;
  quantity: number;
  alertQuantity: number;
  activeAlertQuantity: boolean;
  unitMeasurement: string;
}

export interface OptionsSelect {
  label: string;
  value: string | number;
}

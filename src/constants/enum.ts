export interface EnumDynamicModel {
  key: string;
  value: string;
  desc?: string;
  data?: object;
}

export const getEnumDynamicToList = (enumValue: any): EnumDynamicModel[] => {
  return Object.keys(enumValue).map(k => (enumValue[k as any]));
};

export enum EnumTypeWeb {
  web1 = 1
}
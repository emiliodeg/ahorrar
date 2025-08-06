export interface IOption<T = string> {
  label: string;
  value: T;
}

export interface IOptionIcon<T = string> {
  label: string;
  icon: string;
  value: T;
}

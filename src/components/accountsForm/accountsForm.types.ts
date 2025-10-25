export interface IAccountFormData {
    infos: IInfosAccount[]
}

export interface IInfosAccount {
id: number | null;
tags: string | null;
type: string | null;
login: string | null;
password: string | null;
showPassword: boolean | null;
loginError?: boolean | null;
passwordError?: boolean | null;
}

  export enum AccountType {
  LOCAL = 'Локальная',
  LDAP = 'LDAP'
}
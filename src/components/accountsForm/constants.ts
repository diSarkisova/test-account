import type { ITableHeader } from "../ui/uiTable/uiTable.types";
import { AccountType } from "./accountsForm.types";

export const HEADERS: ITableHeader[] =  [
    { title: "Метки", key: "tags", width: "30%" },
    { title: "Тип записи", key: "type", width: "20%" },
    { title: "Логин", key: "login", width: "25%" },
    { title: "Пароль", key: "password", width: "20%" },
    { title: "", key: "actions", width: "5%", sortable: false },
  ];

export const TYPE_OPTIONS = [AccountType.LOCAL, AccountType.LDAP];
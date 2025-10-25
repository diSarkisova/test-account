import type { IAccountFormData, IInfosAccount } from "@/components/accountsForm/accountsForm.types";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useAccountsStore = defineStore("accountStore", () => {
    
    const nextId = ref(1);

    const formData = reactive<IAccountFormData>({
    infos: [],
  });

    function getEmptyRow(): IInfosAccount {
    return {
      id: nextId.value++,
      tags: "",
      type: "",
      login: "",
      password: "",
      showPassword: false,
      // флаги ошибок
      loginError: false,
      passwordError: false,
    };
  }

  function onUpdateRowValue(newValue: string, field: string, item: any) {
    if (!item) return;
    item[field] = newValue;
    if (!newValue || newValue.toString().trim() === "") {
      item[`${field}Error`] = true;
    } else {
      item[`${field}Error`] = false;
    }

    const isValid = validateRow(item);

    if (isValid) {
      setLocalStorage();
    }
  }

  function onAddRow(): void {
    formData.infos.push(getEmptyRow());
  }

  function deleteAccount(id: number) {
    const index = formData.infos.findIndex((item) => item.id === id);
    if (index !== -1) {
      formData.infos.splice(index, 1);
      setLocalStorage();
    }
  }

  function setLocalStorage() {
    if (!formData.infos) return;

    const updatedFormData = Object.assign({}, formData, {
      infos: formData.infos.map((item) =>
        Object.assign({}, item, {
          tags: convertTagsToObjectArray(item.tags),
        })
      ),
    });

    localStorage.setItem("accountsData", JSON.stringify(updatedFormData));
  }

  function loadFromLocalStorage() {
    const accountsFromLocalStore = localStorage.getItem("accountsData");
    if (accountsFromLocalStore) {
      const parsedData = JSON.parse(accountsFromLocalStore);

      const transformedData = {
        ...parsedData,
        infos: parsedData.infos.map((item: any) => ({
          ...item,
          tags: convertTagsToString(item.tags),
          typeError: false,
          loginError: false,
          passwordError: false,
        })),
      };

      const maxId = transformedData.infos.reduce(
        (max: number, item: any) => Math.max(max, item.id),
        0
      );
      nextId.value = maxId + 1;

      formData.infos = transformedData.infos;
    }
  }

function validateRow(item: any): boolean {
  let isValid = true;

  const requiredFields = item.type === "LDAP"
    ? ["type", "login"] 
    : ["type", "login", "password"];

  requiredFields.forEach((field) => {
    if (!item[field] || item[field].toString().trim() === "") {
      item[`${field}Error`] = true;
      isValid = false;
    } else {
      item[`${field}Error`] = false;
    }
  });

  return isValid;
}
  function convertTagsToObjectArray(tagsString: string): { text: string }[] {
    if (!tagsString) return [];

    return tagsString
      .split(";")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
      .map((tag) => ({ text: tag }));
  }

  function convertTagsToString(tagsArray: { text: string }[]): string {
    if (!tagsArray || !Array.isArray(tagsArray)) return "";

    return tagsArray
      .map((tag) => tag.text)
      .filter((text) => text && text.trim())
      .join("; ");
  }

  return {
    formData,
    onAddRow,
    onUpdateRowValue,
    deleteAccount,
    setLocalStorage,
    loadFromLocalStorage,
  };
});

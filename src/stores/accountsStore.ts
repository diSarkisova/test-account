import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useAccountsStore = defineStore("accountStore", () => {
  const nextId = ref(1);

  const formData = reactive({
    infos: [],
  });

  const headers = computed(() => [
    { title: "Метки", key: "tags", width: "30%" },
    { title: "Тип записи", key: "type", width: "20%" },
    { title: "Логин", key: "login", width: "25%" },
    { title: "Пароль", key: "password", width: "20%" },
    { title: "Действия", key: "actions", width: "5%", sortable: false },
  ]);

  function onUpdateRowValue(newValue: any, field: string, item: any) {
    if (!item) return;
    (item as any)[field] = newValue;
  }

  function onAddRow(): void {
    formData.infos.unshift(getEmptyRow());
  }

  function getEmptyRow() {
    return {
      id: nextId.value++,
      tags: "",
      type: "",
      login: "",
      password: "",
      showPassword: false,
    };
  }

  return {
    formData,
    headers,
    onUpdateRowValue,
    onAddRow,
  };
});

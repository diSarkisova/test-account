import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useAccountsStore = defineStore("accountStore", () => {
  let nextId = 1;

  const formData = reactive({
    id: nextId++,
    tags: "",
    type: "",
    login: "",
    password: "",
    showPassword: false,
  });

  const headers = computed(() => [
    { title: "Метки", key: "tags", width: "30%" },
    { title: "Тип записи", key: "type", width: "20%" },
    { title: "Логин", key: "login", width: "25%" },
    { title: "Пароль", key: "password", width: "20%" },
    { title: "Действия", key: "actions", width: "5%", sortable: false },
  ]);

  function onUpdateRowValue(newValue, field) {
    formData[field] = newValue;
  }

  return {
    formData,
    headers,
    onUpdateRowValue,
  };
});

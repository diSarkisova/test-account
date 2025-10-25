export const tagsRules = [
  (value: string) => {
    if (!value.includes(';')) return 'Используйте ; для разделения меток';
    return true;
  }
];
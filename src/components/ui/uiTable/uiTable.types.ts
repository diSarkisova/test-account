export interface ITableHeader {
  title: string;
  key: string;
  width?: string;
  sortable?: boolean;
  align?: 'start' | 'center' | 'end';
}

export interface ITableItem {
  id: string | number | null;
  [key: string]: unknown; 
}
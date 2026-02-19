export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  /* { id: 1, name: "Topo de bolo", price: 8.0, category: "Festas" },
  { id: 2, name: "Caneca personalizada", price: 25.0, category: "Personalizados" },
  { id: 3, name: "Foto 10x15", price: 2.0, category: "Impressões" },
  { id: 4, name: "Foto A4", price: 5.0, category: "Impressões" },
  { id: 5, name: "Foto Polaroid", price: 3.0, category: "Impressões" },
  { id: 6, name: "Xerox (por unidade)", price: 0.5, category: "Impressões" },
  { id: 7, name: "Impressão adesiva (A4)", price: 7.0, category: "Impressões" },
  { id: 8, name: "Etiqueta escolar (pacote com 10)", price: 12.0, category: "Papelaria" },
  { id: 9, name: "Festa na Caixa", price: 50.0, category: "Festas" },
  { id: 10, name: "Chaveiro personalizado", price: 10.0, category: "Personalizados" },
  { id: 11, name: "Encapar livros/caderno", price: 8.0, category: "Papelaria" }, */


  { id: 12, name: "Topo de bolo (simples)", price: 15.0, category: "Festas" },
  { id: 13, name: "Topo de bolo (2D)", price: 18.0, category: "Festas" },
  { id: 14, name: "Foto 10x15", price: 1.5, category: "Impressões" },
  { id: 15, name: "Foto Polaroid", price: 1.5, category: "Impressões" },
  { id: 16, name: "Encapar caderno", price: 9.0, category: "Papelaria" },
  { id: 17, name: "Caderno", price: 12.0, category: "Papelaria" },
  { id: 18, name: "Xerox (por unidade)", price: 0.75, category: "Impressões" },

];

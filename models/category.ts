class Category {
  id: string;
  title: string;
  color: string;

  constructor({ id, title, color }: { id: string; title: string; color: string }) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;

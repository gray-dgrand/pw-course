export class Library {
  public books: string[] = [];

  constructor(
    public name: string,
    public location: string,
  ) {}

  /**
   * Thêm một cuốn sách mới vào thư viện.
   */
  addBook(bookTitle: string): void {
    this.books.push(bookTitle);
  }

  /**
   * Tìm sách theo tiêu đề. Trả về true nếu tìm thấy.
   */
  findBook(title: string): boolean {
    return this.books.includes(title);
  }
}


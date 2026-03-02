export class Customer {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
  ) {}

  /**
   * Hiển thị thông tin khách hàng dạng chuỗi.
   */
  displayInfo(): string {
    const info = `Customer #${this.id}: ${this.name} - ${this.email} - ${this.phone}`;
    // Có thể log ra console khi chạy thử.
    console.log(info);
    return info;
  }

  /**
   * Cập nhật email mới cho khách hàng.
   */
  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }
}


export type OrderItem = {
  name: string;
  price: number;
  amount: number;
  discount: number; // phần trăm giảm giá, ví dụ 10 nghĩa là giảm 10%
};

export class Order {
  public items: OrderItem[] = [];
  public totalAmount = 0;

  constructor(
    public orderId: string,
    public customerName: string,
  ) {}

  /**
   * Thêm một sản phẩm vào đơn hàng.
   */
  addItem(item: OrderItem): void {
    this.items.push(item);
    this.calculateTotal();
  }

  /**
   * Tính tổng số tiền của đơn hàng sau khi áp dụng giảm giá cho từng sản phẩm.
   */
  calculateTotal(): void {
    this.totalAmount = this.items.reduce((sum, item) => {
      const raw = item.price * item.amount;
      const discountAmount = (raw * item.discount) / 100;
      return sum + (raw - discountAmount);
    }, 0);
  }

  /**
   * Hiển thị thông tin đơn hàng dạng chuỗi.
   */
  displayOrder(): string {
    const lines: string[] = [];
    lines.push(`Order #${this.orderId} - Customer: ${this.customerName}`);
    lines.push('Items:');
    for (const item of this.items) {
      const raw = item.price * item.amount;
      const discountAmount = (raw * item.discount) / 100;
      const final = raw - discountAmount;
      lines.push(
        `- ${item.name}: ${item.amount} x ${item.price} - ${item.discount}% = ${final}`,
      );
    }
    lines.push(`Total amount: ${this.totalAmount}`);
    const result = lines.join('\n');
    console.log(result);
    return result;
  }
}


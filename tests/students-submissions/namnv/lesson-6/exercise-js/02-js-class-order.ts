export type OrderItem = {
  name: string;
  price: number;
  quantity: number;
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
    this.recalculateTotal();
  }

  /**
   * Tính lại tổng tiền dựa trên các sản phẩm hiện có.
   */
  private recalculateTotal(): void {
    this.totalAmount = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }

  /**
   * Hiển thị thông tin đơn hàng dạng chuỗi.
   */
  displayOrder(): string {
    const lines: string[] = [];
    lines.push(`Order #${this.orderId} - Customer: ${this.customerName}`);
    lines.push('Items:');
    for (const item of this.items) {
      lines.push(
        `- ${item.name}: ${item.quantity} x ${item.price} = ${
          item.price * item.quantity
        }`,
      );
    }
    lines.push(`Total amount: ${this.totalAmount}`);
    const result = lines.join('\n');
    console.log(result);
    return result;
  }
}


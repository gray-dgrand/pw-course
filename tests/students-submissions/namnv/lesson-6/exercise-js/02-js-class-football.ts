export class Team {
  public players: string[] = [];

  constructor(public name: string) {}

  /**
   * Thêm một cầu thủ vào đội.
   */
  addPlayer(playerName: string): void {
    this.players.push(playerName);
  }

  /**
   * Liệt kê tất cả cầu thủ trong đội dạng chuỗi.
   */
  listPlayers(): string {
    const header = `Team: ${this.name}`;
    const body =
      this.players.length === 0
        ? 'No players'
        : this.players.map((p, index) => `${index + 1}. ${p}`).join('\n');
    const result = [header, body].join('\n');
    console.log(result);
    return result;
  }
}


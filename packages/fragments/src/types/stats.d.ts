declare module 'stats.js' {
  export default class Stats {
    dom: HTMLElement;
    constructor();
    showPanel(panel?: number): void;
    begin(): void;
    end(): number;
    update?: () => void;
  }
}

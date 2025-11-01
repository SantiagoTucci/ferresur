declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement | null;
    smooth?: boolean;
    lerp?: number;
    multiplier?: number;
    class?: string;
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    update(): void;
    scrollTo(target: number | string | HTMLElement, options?: any): void;
    destroy(): void;
  }

  export default LocomotiveScroll;
}

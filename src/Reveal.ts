/**
 * Class Reveal permet de gerer les animations de site
 *
 *  24/11/2021 - re ecriture en typescript
 *  29/11/2021 - ajout d'un timer pour retarder les animations
 *  12/12/2021 - Amélioration des animations
 */

type InitReveal = {
  infinite?: boolean;
  threshold?: number;
  tpsAnimDisplay?: string;
  tpsAnim?: string;
  timerLoad?: number;
};

/**
 * @property {HTMLElement} element
 * @property {{y: number, variable: boolean}} options
 */
export class Reveal {
  timerLoad = 100; // en milliseconde
  threshold = 0.3;
  tpsAnim = "1.3s";
  tpsAnimDisplay = "3s";
  infinite = false;
  private decalage = 3;
  private element?: HTMLElement;
  private reveal: string = "";
  private isVisible?: boolean;

  constructor(element: HTMLElement, param: InitReveal) {
    this.element = element;
    if (this.element.dataset.reveal) this.reveal = this.element.dataset.reveal;
    this.threshold = param?.threshold ? param.threshold : this.threshold;
    this.infinite = param?.infinite ? param.infinite : this.infinite;
    this.tpsAnimDisplay = param?.tpsAnimDisplay
      ? param.tpsAnimDisplay
      : this.tpsAnimDisplay;
    this.tpsAnim = param?.tpsAnim ? param.tpsAnim : this.tpsAnim;
    this.timerLoad = param?.timerLoad ? param.timerLoad : this.timerLoad;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            document.addEventListener("resize", this.onResize);
            this.isVisible = true;
            window.requestAnimationFrame(() => {
              this.doReveal();
            });
          } else {
            this.isVisible = false;
            if (this.infinite) this.doInit();
            window.removeEventListener("resize", this.onResize);
          }
        }
      },
      {
        threshold: this.threshold
      }
    );
    this.doInit();

    window.addEventListener("load", () => {
      if (!this.element) return;
      const el = this.element;
      this.doInit(true);
      setTimeout(() => observer.observe(el), this.timerLoad);
    });
  }
  /**
   * permet de gerer l'initialisation des éléments reveal
   * @param transition  si vrai alors on ajoute les transactions
   * @returns
   */
  doInit = (transition: boolean = false): void => {
    if (!this.element) return;

    if (!transition) {
      // on initialise les elements
      this.element.style.opacity = "0";
      this.element.style.visibility = "hidden";

      switch (this.reveal) {
        case "top":
          this.element.style.transform = `translate(0, ${
            -1 * this.decalage
          }rem)`;
          break;
        case "left":
          this.element.style.transform = `translate(${-1 * this.decalage}rem)`;
          break;
        case "right":
          this.element.style.transform = `translate(${this.decalage}rem)`;
          break;
        default:
          break;
      }
    } else {
      if (this.reveal == "display")
        this.element.style.transition = `opacity ${this.tpsAnimDisplay} ease-out `;
      else this.element.style.transition = this.tpsAnim;
    }
  };

  doReveal = (): void => {
    if (!this.element) return;
    if (!this.isVisible) return;

    this.element.style.visibility = "inherit";
    this.element.style.opacity = "";

    if (this.reveal != "display") this.element.style.transform = "";
  };

  onResize = (): void => {
    this.doInit();
  };

  static async bind(param: InitReveal = {}) {
    return Array.from(document.querySelectorAll("[data-reveal]")).map(
      (element) => {
        if (element instanceof HTMLElement) return new Reveal(element, param);
      }
    );
  }
}

(() => {
  // dist/Reveal.js
  var Reveal = class {
    constructor(element, param) {
      this.decalage = 3;
      this.tpsAnim = "1.3s";
      this.tpsAnimDisplay = "3s";
      this.threshold = 0.3;
      this.infinite = false;
      this.reveal = "";
      this.doInit = () => {
        if (!this.element)
          return;
        this.element.style.opacity = "0";
        this.element.style.visibility = "hidden";
        if (this.reveal == "display")
          this.element.style.transition = `opacity ${this.tpsAnimDisplay} ease-out `;
        else
          this.element.style.transition = this.tpsAnim;
        if (this.reveal == "top")
          this.element.style.transform = `translate(0, ${-1 * this.decalage}rem)`;
        if (this.reveal == "left")
          this.element.style.transform = `translate(${-1 * this.decalage}rem)`;
        if (this.reveal == "right")
          this.element.style.transform = `translate(${this.decalage}rem)`;
      };
      this.doReveal = () => {
        if (!this.element)
          return;
        if (!this.isVisible)
          return;
        this.element.style.visibility = "inherit";
        this.element.style.opacity = "1";
        if (this.reveal != "display") {
          this.element.style.transform = "translate(0)";
        }
      };
      this.onResize = () => {
        this.doInit();
      };
      this.element = element;
      if (this.element.dataset.reveal)
        this.reveal = this.element.dataset.reveal;
      this.threshold = (param === null || param === void 0 ? void 0 : param.threshold) ? param.threshold : this.threshold;
      this.infinite = (param === null || param === void 0 ? void 0 : param.infinite) ? param.infinite : this.infinite;
      this.tpsAnimDisplay = (param === null || param === void 0 ? void 0 : param.tpsAnimDisplay) ? param.tpsAnimDisplay : this.tpsAnimDisplay;
      this.tpsAnim = (param === null || param === void 0 ? void 0 : param.tpsAnim) ? param.tpsAnim : this.tpsAnim;
      this.decalage = (param === null || param === void 0 ? void 0 : param.decalage) ? param.decalage : this.decalage;
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            document.addEventListener("resize", this.onResize);
            this.isVisible = true;
            this.doReveal();
          } else {
            this.isVisible = false;
            if (this.infinite)
              this.doInit();
            window.removeEventListener("resize", this.onResize);
          }
        }
      }, {
        threshold: this.threshold
      });
      this.doInit();
      window.addEventListener("load", () => {
        if (this.element)
          observer.observe(this.element);
      });
    }
    static async bind(param = {}) {
      return Array.from(document.querySelectorAll("[data-reveal]")).map((element) => {
        if (element instanceof HTMLElement)
          return new Reveal(element, param);
      });
    }
  };

  // tests/test-app.js
  Reveal.bind({ infinite: true, threshold: 0.3 });
  console.log("on est en place");
})();

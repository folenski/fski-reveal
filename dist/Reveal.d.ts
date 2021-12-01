/**
 * Class Reveal permet de gerer les animations de site
 *
 *  24/11 - re ecriture en typescript
 *  29/11 - ajout d'un timer pour retarder les animations
 */
declare type InitReveal = {
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
export declare class Reveal {
    timerLoad: number;
    threshold: number;
    tpsAnim: string;
    tpsAnimDisplay: string;
    infinite: boolean;
    private decalage;
    private element?;
    private reveal;
    private isVisible?;
    constructor(element: HTMLElement, param: InitReveal);
    doInit: () => void;
    doReveal: () => void;
    onResize: () => void;
    static bind(param?: InitReveal): Promise<(Reveal | undefined)[]>;
}
export {};

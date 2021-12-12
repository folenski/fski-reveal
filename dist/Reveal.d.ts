/**
 * Class Reveal permet de gerer les animations de site
 *
 *  24/11/2021 - re ecriture en typescript
 *  29/11/2021 - ajout d'un timer pour retarder les animations
 *  12/12/2021 - Amélioration des animations
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
    /**
     * permet de gerer l'initialisation des éléments reveal
     * @param transition  si vrai alors on ajoute les transactions
     * @returns
     */
    doInit: (transition?: boolean) => void;
    doReveal: () => void;
    onResize: () => void;
    static bind(param?: InitReveal): Promise<(Reveal | undefined)[]>;
}
export {};

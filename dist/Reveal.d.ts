/**
 * Class Reveal permet de gerer les animations de site
 *
 * le 24/11 - re ecriture en typescript
 */
declare type InitReveal = {
    infinite?: boolean;
    threshold?: number;
    tpsAnimDisplay?: string;
    tpsAnim?: string;
    decalage?: number;
};
/**
 * @property {HTMLElement} element
 * @property {{y: number, variable: boolean}} options
 */
export declare class Reveal {
    decalage: number;
    tpsAnim: string;
    tpsAnimDisplay: string;
    threshold: number;
    infinite: boolean;
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

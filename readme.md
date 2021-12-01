# fski-reveal

## Fonctionnalités

- Permet d'animer des éléments du DOM, lorqu'ils sont affichés.

## Nagivateurs testés

Chrome | Firefox| Edge | 
--- | --- | --- | 
Latest ✔ | Latest ✔ |  Latest ✔ | 

## Installation

Using npm:

```bash
$ npm install fski-reveal
```

## Example

Activation en js des animations
```js
import { Reveal } from "fski-reveal";
// Active le chargement des animations
Reveal.bind({infinite:true, threshold:0.3});
```
ou
```js
import { Reveal } from "fski-reveal";
Reveal.bind();   // Valeurs par défaut
```

Sur la page html, il est nécessaire d'indiquer l'effet dans l'attribut data-reveal
```html
<div class="news">
  <div class="item" data-reveal="left">
    <img src="https://picsum.photos/200/300" alt="test" />
  </div>
  <div class="item" data-reveal="right">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
    excepturi quisquam rerum impedit. Iure assumenda reprehenderit
    distinctio dicta! Earum consequatur perferendis sequi facere aliquam
    alias voluptatum eos sint illo inventore?
  </div>
</div>
```

## Documentation

### html, l'attribut **data-reveal**

Ce attribut peut prendre les valeurs suivantes :
- **display**, pour un effet d'apparition
- **top**, pour un effet de déplacement du bas vers le haut
- **left**, pour un effet de déplacement de la gauche vers la droite
- **right**, pour un effet de déplacement de la droite vers la gauche

il est important d'ajouter à l'élément parant, l'attribut css : **overflow-x: hidden;**

### Javascript, la fonction Reveal.bind

On peut passer un objet en paramètre, les parenthèses indiquent les valeurs par défaut, avec les champs  :
- **infinite** : boolean (false), les animations continuent même quand l'element a été affiché une 1ère fois
- **threshold** : number (0.3), % de découverte de l'élément pour lancer l'animation
- **tpsAnimDisplay** : string ("3s"), temps pour l'animation d'apparition
- **tpsAnim** : string ("1.3s"), temps pour les animations de décages
- **timerLoad** : number (300), timer pour déclencher les animations apres l'évènement "load"

## Resources

## License
[MIT](LICENSE)
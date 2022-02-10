# portfolio-website

```
Create a portfolio-website with Ellie
```

## Learning note

### HTML

- data attribute [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

### CSS

- CSS variables [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- media query

### BEM

- Block Element Modifier
- 모듈화 또는 PostCSS 사용 시 필요 없어짐
- block\_\_element--modifier
- Link

1. [Get BEM](http://getbem.com/introduction/)
1. [BEM 101 by CSS-Tricks](https://css-tricks.com/bem-101/)
1. [10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)

### Box Sizing

https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

### Absolute vs Relative vs Static

- Static : 기본값
  - top, left 등 적용 안 됨
- relative : 상대적 - 원래 있던 자리
- absolute
  - 원래 있던 자리에서 빠져나오게 됨
  - 부모 요소 중 static이 아닌 요소를 기준으로 옮겨감 = 상위를 relative로 변경하여 사용

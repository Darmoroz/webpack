import { bred, i, baron, sum, run } from './export';
import Learn from './export-default';
import Article from './article';

import css from './style.css';

const fred = 'Ivan';

const bref = new Learn();
console.log(bref);
console.log(fred);
console.log(i);
console.log(bred);
console.log(baron);
sum(1, 2);

let article = new Article({ head: 'Final', description: 'MU chempion' });
console.log(article);

article.render();

import { multiplica, suma } from './modules/controller.js';
import chalk from 'chalk';

const resultado = multiplica(suma(1, 2), suma(4, 5));

console.log(chalk.green('(1 + 2)(4 + 5) = ', resultado));

/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import * as dz1 from './dz1_6.js';
import makeInteractiveList from './dz7.js';
import { dayOfWeek, examineYounger } from './dz8.js';
import { circleLengthAndSquare, quadricEquation } from './dz9.js';


dz1.dz1_1();
dz1.dz1_2();
dz1.dz1_3();
dz1.dz2_1();
dz1.dz2_2();
dz1.dz2_3();
dz1.dz3_1();
dz1.dz3_2();
dz1.dz3_3();
dz1.dz4();
dz1.dz5();
dz1.dz6_diff();


const dz7 = document.querySelector('#dz7');
makeInteractiveList(dz7);

const dz8 = document.querySelector('#dz8');
const dz8ex1 = document.createElement('div');
const dz8ex2 = document.createElement('div');
dz8.append(dz8ex1);
dz8.append(dz8ex2);

dayOfWeek(dz8ex1);
examineYounger(dz8ex2);

const dz9 = document.querySelector('#dz9');
const dz9ex1 = document.createElement('div');
const dz9ex2 = document.createElement('div');
dz9.append(dz9ex1);
dz9.append(dz9ex2);

circleLengthAndSquare(dz9ex1);
quadricEquation(dz9ex2);

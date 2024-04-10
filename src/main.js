/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import * as dz1 from './dz1_6.js';
import makeInteractiveList from './dz7.js';
import { dayOfWeek, examineYounger } from './dz8.js';
import { circleLengthAndSquare, quadricEquation } from './dz9.js';
import validateString from './dz10.js';

export default function createContainer(id) {
  const container = document.createElement('div');
  container.id = id;
  document.body.append(container);
  return container;
}

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

makeInteractiveList(createContainer('dz7'));
dayOfWeek(createContainer('dz81'));
examineYounger(createContainer('dz82'));
circleLengthAndSquare(createContainer('dz91'));
quadricEquation(createContainer('dz92'));
validateString(createContainer('dz10'));

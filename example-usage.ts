
import { RouteA } from './routeA';
import { RouteB } from './routeB';

const routeA = new RouteA();
const routeB = new RouteB();


const routeAResult = routeA.calculateRoute('Львів', 'Київ');
console.log(routeAResult);


const routeBResult = routeB.calculateRoute('Київ', 'Львів');
console.log(routeBResult);
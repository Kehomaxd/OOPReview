//@kehomaxd
//Main

import {Mobile} from "./Mobile";

let cel1 = new Mobile ("Redmi Note 8T", "M1908C3XG", "Xiaomi", 8, "Blue", true, 5, 180);
let cel2 = new Mobile ("Nokia 3210", "Unknow", "Nokia",  1, "Yellow", false, 0, 12);
let cel3  = new Mobile ("Pixel 4a", "Unknow", "Google", 6, "Black", true, 2, 390); 
let allCel = {cel1, cel2, cel3};
console.log(cel1);
console.log(cel2);
console.log(cel3);

cel2.is5G = true;
cel2.cameraNum = 5;

console.log(allCel);
// cel1.printMobile();
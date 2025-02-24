
let array = [1, 2, 3, 4, 5];


const arrayVolver = (actual, acumulando) => {

  acumulando += actual;

  setTimeout(arrayVolver,2000);

  return acumulando;
  
};



setTimeout(arrayVolver,2000,array,acumulando);


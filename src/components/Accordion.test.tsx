// ver si se esta ejecutando el test runner

/* Tests unitarios: peque;as porciones de codigo que comprueban algo dentro del componente*/


import Accordion from "./Accordion";

// describe para agrupar distintos test
describe("Accordion", () => {
  test("should add two numbers", () => {
    // esta linea de codigo se le llama asercion
    // comprobar el codigo
    expect(1 + 1).toBe(2);
  });
});




/* 

el test se ejecuta en la terminal
-> a;adir en package.json 'test': 'vitest'
terminal: npm test

*/

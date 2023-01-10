// ver si se esta ejecutando el test runner

/* Tests unitarios: peque;as porciones de codigo que comprueban algo dentro del componente*/

import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

// describe para agrupar distintos test
describe("Accordion", () => {
  test("should add two numbers", () => {
    // esta linea de codigo se le llama asercion
    // comprobar el codigo
    render(
      <Accordion title="Holis">
        <h3>My content</h3>
        <p>Some content</p>
      </Accordion>
    );
    // esperar a que exista un elemento con el texto
    expect(screen.getByText("Holis")).toBeDefined();
  });
});

/* 

el test se ejecuta en la terminal
-> a;adir en package.json 'test': 'vitest'
terminal: npm test

*/

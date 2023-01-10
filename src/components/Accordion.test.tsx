// ver si se esta ejecutando el test runner

/* Tests unitarios: peque;as porciones de codigo que comprueban algo dentro del componente*/

import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

// describe para agrupar distintos test
describe("Accordion", () => {
  // Esto se va a a;adir antes de la ejecucion de cada test
  beforeEach(() => {
    render(
      <Accordion title="Holis">
        <h3>My content</h3>
        <p>Some xyz</p>
      </Accordion>
    );
  });

  test("should show the accordion component", () => {
    // esta linea de codigo se le llama asercion
    // comprobar el codigo
    // esperar a que exista un elemento con el texto
    expect(screen.getByText("Holis")).toBeDefined();
  });

  // Comprueba que el contenido este oculto al iniciar la aplicacion
  test("should not display the content at the start", () => {
    // expresion regular para buscar siempre el texto 'content' y la i para que no este relacionado con mayus minus
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  // testear cuando se haga click en open
  test("should display content when button is clicked", () => {
    // crear una variable con el texto a esperarse
    const button = screen.getByText(/Open/i);
    // evento click en el boton
    fireEvent.click(button);
    // esperar que el contenido si aparezca despues del click
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  // testear cuando se haga click en open y que el contenido desaparezca
  test("should hide content when button is clicked", () => {
    // crear una variable con el texto a esperarse
    const button = screen.getByText(/Open/i);
    // evento click en el boton para aparecer, pero luego desaparecer el contenido
    fireEvent.click(button);
    fireEvent.click(button);
    // esperar que el contenido si aparezca despues del click
    expect(screen.queryByText(/content/i)).toBeNull();
  });

});

/* 

el test se ejecuta en la terminal
-> a;adir en package.json 'test': 'vitest'
terminal: npm test

*/

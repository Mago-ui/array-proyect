import React from 'react';
import { render } from '@testing-library/react';
import MatrixDisplay from './../src/app/components/MatrixDisplay';
import '@testing-library/jest-dom';

describe('MatrixDisplay component', () => {
  test('renders matrix and title correctly', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const title = 'Test Matrix';

    const { getByText, getAllByRole } = render(<MatrixDisplay matrix={matrix} title={title} />);

    // Verificar si el título se muestra correctamente
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();

    // Verificar si todas las celdas de la matriz se renderizan correctamente
    const cellElements = getAllByRole('cell');
    expect(cellElements).toHaveLength(9); // 3 filas * 3 columnas = 9 celdas

 
  });
});

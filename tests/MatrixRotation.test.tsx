import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MatrixRotation from './../src/app/components/MatrixRotation';
import '@testing-library/jest-dom';

describe('MatrixRotation component', () => {
  test('rotates matrix correctly', () => {
    render(<MatrixRotation />);
    
    // Introducir un valor para N
    const inputN = screen.getByLabelText('Ingrese el tamaño de la matriz (N):');
    fireEvent.change(inputN, { target: { value: '3' } });

    // Introducir una matriz válida
    const inputMatrix = screen.getByLabelText('Ingrese la matriz como un array de arrays:');
    fireEvent.change(inputMatrix, { target: { value: '[[1,2,3],[4,5,6],[7,8,9]]' } });

    // Rotar la matriz
    const rotateButton = screen.getByText('Rotar en sentido antihorario');
    fireEvent.click(rotateButton);

    // Verificar si la matriz original y la matriz resultante se muestran correctamente
    const originalMatrixElement = screen.getByText('Array Original:');
    expect(originalMatrixElement).toBeInTheDocument();

    const rotatedMatrixElement = screen.getByText('Matriz Resultante:');
    expect(rotatedMatrixElement).toBeInTheDocument();
  });

  test('displays error message when entering invalid N value', () => {
    render(<MatrixRotation />);
    
    // Introducir un valor no numérico para N
    const inputN = screen.getByLabelText('Ingrese el tamaño de la matriz (N):');
    fireEvent.change(inputN, { target: { value: 'abc' } });
  
    // Verificar si se muestra el mensaje de error
    const errorMessage = screen.getByText('Por favor, ingrese un número válido para N.');
    expect(errorMessage).toBeInTheDocument();
  });
  
});

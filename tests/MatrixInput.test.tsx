// MatrixInput.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MatrixInput from '../src/app/components/MatrixInput';
import '@testing-library/jest-dom';


describe('MatrixInput', () => {
  test('renders with correct initial state', () => {
    const { getByLabelText } = render(<MatrixInput onChangeN={() => {}} onChangeMatrix={() => {}} N={3} error={null} />);

    const sizeInput = getByLabelText('Ingrese el tamaño de la matriz (N):');
    expect(sizeInput).toBeInTheDocument();
    expect(sizeInput).toHaveAttribute('value', '3');

    const matrixInput = getByLabelText('Ingrese la matriz como un array de arrays:');
    expect(matrixInput).toBeInTheDocument();
    expect(matrixInput).toHaveAttribute('rows', '3');
    expect(matrixInput).toHaveAttribute('placeholder', 'Ejemplo: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] (Tamaño: 3x3)');
  });

  test('displays error message when error prop is provided', () => {
    const { getByText } = render(<MatrixInput onChangeN={() => {}} onChangeMatrix={() => {}} N={3} error="Error message" />);
    const errorMessage = getByText('Error message');
    expect(errorMessage).toBeInTheDocument();
  });

  test('triggers onChangeN callback when size input changes', () => {
    const handleChangeN = jest.fn();
    const { getByLabelText } = render(<MatrixInput onChangeN={handleChangeN} onChangeMatrix={() => {}} N={3} error={null} />);
    const sizeInput = getByLabelText('Ingrese el tamaño de la matriz (N):');

    fireEvent.change(sizeInput, { target: { value: '5' } });
    expect(handleChangeN).toHaveBeenCalledWith(expect.any(Object)); 
  });


});

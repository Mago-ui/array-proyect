import React from 'react';

interface MatrixInputProps {
  onChangeN: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMatrix: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  N: number;
  error: string | null;
}

const MatrixInput: React.FC<MatrixInputProps> = ({ onChangeN, onChangeMatrix, N, error }) => (
  <div className="mb-4">
    <label htmlFor="sizeInput" className="block mb-2">Ingrese el tamaño de la matriz (N):</label>
    <input
      type="number"
      id="sizeInput"
      min="1"
      value={N}
      onChange={onChangeN}
      className="w-full px-3 py-2 border border-gray-400 rounded-md"
    />
    <label htmlFor="matrixInput" className="block mb-2 mt-4">Ingrese la matriz como un array de arrays:</label>
    <textarea
      id="matrixInput"
      rows={N}
      disabled={N === 0}
      className="w-full px-3 py-2 border border-gray-400 rounded-md resize-none"
      onChange={onChangeMatrix}
      placeholder={`Ejemplo: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] (Tamaño: ${N}x${N})`}
    />
    {error && <p className="text-red-500 mt-1">{error}</p>}
  </div>
);

export default MatrixInput;





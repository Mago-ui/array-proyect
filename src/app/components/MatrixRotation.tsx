import React, { useState } from 'react';
import MatrixInput from './MatrixInput';
import MatrixDisplay from './MatrixDisplay';

const MatrixRotation: React.FC = () => {
  const [N, setN] = useState<number>(0);
  const [matrix, setMatrix] = useState<number[][] | null>(null);
  const [originalMatrix, setOriginalMatrix] = useState<number[][] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChangeN = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    if (!isNaN(newSize)) {
      setN(newSize);
      setMatrix([]);
      setOriginalMatrix([]);
      setError(null);
    } else {
      setError('Por favor, ingrese un número válido para N.');
    }
  };

  const handleChangeMatrix = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value.trim();
    try {
      const parsedMatrix: number[][] = JSON.parse(input);
      if (!Array.isArray(parsedMatrix) || parsedMatrix.length !== N || parsedMatrix.some(row => !Array.isArray(row) || row.length !== N)) {
        throw new Error('La entrada no es una matriz NxN válida.');
      }
      setMatrix(parsedMatrix);
      setOriginalMatrix(parsedMatrix);
      setError(null);
    } catch (err) {
      setError('Error al analizar la entrada de la matriz.');
    }
  };

  const rotateMatrix = () => {
    const matrixSize = matrix.length;
    const rotatedMatrix = matrix.map((_, i) => matrix.map(row => row[matrixSize - i - 1]));
    setMatrix(rotatedMatrix);
  };

  return (
<main className="flex min-h-screen items-center justify-center p-8 bg-gradient-to-br from-blue-400 to-indigo-600">
  <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-xl mt-16">
    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Rotación de Matriz</h2>
    <MatrixInput onChangeN={handleChangeN} onChangeMatrix={handleChangeMatrix} N={N} error={error} />
    <button
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      onClick={rotateMatrix}
      disabled={N === 0 || matrix.length === 0 || error !== null}
    >
      Rotar en sentido antihorario
    </button>
    <div className="mt-8 grid grid-cols-2 gap-8">
      <MatrixDisplay matrix={originalMatrix} title="Array Original:" />
      <MatrixDisplay matrix={matrix} title="Matriz Resultante:" />
    </div>
  </div>
</main>


  
  );
}

export default MatrixRotation;

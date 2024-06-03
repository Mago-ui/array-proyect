import React from 'react';

interface MatrixDisplayProps {
  matrix: number[][];
  title: string;
}

const MatrixDisplay: React.FC<MatrixDisplayProps> = ({ matrix, title }) => (
  <div className="mr-4">
    <p className="font-semibold mb-2">{title}</p>
    <div className="overflow-x-auto">
      <table className="border-collapse">
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="p-2 border border-gray-400 w-12 text-center font-medium">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default MatrixDisplay;

import React from 'react';
import { render, screen } from '@testing-library/react';
import Award from './index';
import '@testing-library/jest-dom';

describe('Componente Award (Premio)', () => {
  const defaultProps = {
    value: 100,
    selected: 0,
    position: 0,
    correct: 0
  };

  it('Pinta el valor del array en premio', () => {
    render(<Award {...defaultProps} />);
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('Asignar clase selected a premio', () => {
    render(<Award {...defaultProps} />);
    const awardElement = screen.getByText('100').closest('.award');
    
    expect(awardElement).toBeInTheDocument();
    expect(awardElement).toHaveClass('selected');
  });
  
});
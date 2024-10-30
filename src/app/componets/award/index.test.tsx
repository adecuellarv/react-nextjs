import React from 'react';
import { render, screen } from '@testing-library/react';
import Award from './index';
import '@testing-library/jest-dom';

describe('Award Component', () => {
  const defaultProps = {
    value: 100,
    selected: 0,
    position: 0,
    correct: 0
  };

  it('renders correctly with given props', () => {
    render(<Award {...defaultProps} />);
    
    expect(screen.getByText('100')).toBeInTheDocument();
  
    const img = screen.getByRole('img');
    console.log()
    expect(img).toHaveAttribute('src', expect.stringContaining('0.png'));
  });
  
});
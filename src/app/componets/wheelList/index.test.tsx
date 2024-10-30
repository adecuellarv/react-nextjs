import React from 'react';
import { render, screen } from '@testing-library/react';
import WheelList from './index';
import '@testing-library/jest-dom';
import * as helpers from './helpers';

jest.mock('./helpers', () => ({
  selectItem: jest.fn(),
  getDisplayedAwards: jest.fn()
}));

describe('Componente WheelList (ruleta)', () => {
  const defaultProps = {
    listAward: [100, 200, 300],
    startGame: false,
    simulateWin: false,
    addCorrect: jest.fn()
  };

  it('renderiza correctamente los premios cuando hay una lista', () => {
    helpers.getDisplayedAwards.mockReturnValue([
      { value: 100, index: 0 },
      { value: 200, index: 1 },
      { value: 300, index: 2 }
    ]);

    render(<WheelList {...defaultProps} />);

    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();
  });

  it('llama a addCorrect con el premio seleccionado al iniciar el juego', () => {
    const props = { ...defaultProps, startGame: true };
    helpers.selectItem.mockReturnValue(1);

    render(<WheelList {...props} />);

    expect(props.addCorrect).toHaveBeenCalledWith(1);
  });

  it('no renderiza premios si la lista está vacía', () => {
    const props = { ...defaultProps, listAward: [] };

    render(<WheelList {...props} />);

    expect(screen.queryByText('100')).not.toBeInTheDocument();
    expect(screen.queryByText('200')).not.toBeInTheDocument();
    expect(screen.queryByText('300')).not.toBeInTheDocument();
  });
});

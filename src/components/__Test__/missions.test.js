import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import Missions from '../Missions';
import Fictions from '../Fictions';

describe('testing operate and calculate function', () => {
  it('should return the changed text', () => {
    render(
      <Provider store={store}>
        <Fictions />
        <Missions />
      </Provider>,
    );
    const tmp = screen.getByText((content, element) => content === 'Join Mission' && element.name === '0');
    fireEvent.click(tmp);
    expect(tmp.innerHTML).toBe('Leave Mission');
    fireEvent.click(tmp);
    expect(tmp.innerHTML).toBe('Join Mission');
  });
});

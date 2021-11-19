import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import Fictions from '../Fictions';
import Dragons from '../dragons';

describe('testing user interaction', () => {
  it('should return the changed text', () => {
    render(
      <Provider store={store}>
        <Fictions />
        <Dragons />
      </Provider>,
    );
    const tmp = screen.getByText((content, element) => content === 'Join Dragon' && element.name === '0');
    fireEvent.click(tmp);
    expect(tmp.innerHTML).toBe('Leave Dragon');
    // fireEvent.click(tmp);
    // expect(tmp.innerHTML).toBe('Join Dragon');
  });
});

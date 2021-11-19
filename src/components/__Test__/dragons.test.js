import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import RocketElement from '../rockets';
import store from '../../Redux/configureStore';

describe('Check if component renders the dragon element', () => {
  it('Renders Dragon elements', () => {
    render(
      <Provider store={store}>
        <RocketElement />
      </Provider>,
    );
    expect(screen.queryByText(/missions/)).toBeNull();
  });
});

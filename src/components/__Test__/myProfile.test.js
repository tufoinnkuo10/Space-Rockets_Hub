import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import MyProfile from '../myProfile';
import store from '../../Redux/configureStore';

describe('Check that reserved rockets and missions renders corrrectly', () => {
  it('Reserve rocket and mission', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.queryByText(/book a flight/)).toBeNull();
  });
});

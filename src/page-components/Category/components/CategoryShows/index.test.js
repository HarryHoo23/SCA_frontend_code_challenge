import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryShows from './index';

describe('CategoryShows component', () => {
  test('the data is not undefined', () => {
    const { data } = render(<CategoryShows />);
    expect(data).not.toBeUndefined;
  });

  test('render number of podcasts as text', () => {
    render(<CategoryShows />);
    const outputElement = screen.getByText('Podcasts', {exact: false});
    expect(outputElement).toBeInTheDocument();
  })
});

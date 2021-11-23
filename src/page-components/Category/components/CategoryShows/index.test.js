import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryShows from './index';
import { sortCategoryList } from './index';

const array = [
  { id: 1, name: 'Jack' },
  { id: 2, name: 'Tom' },
];

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

  test('sort list as Ascending order', () => {
    const testedArrayAscending = [
      { id: 1, name: 'Jack' },
      { id: 2, name: 'Tom' },
    ];
    expect(sortCategoryList(array, "option1")).toEqual(testedArrayAscending)
  })

   test('sort list as Decending order', () => {
     const testedArrayDescending = [
       { id: 2, name: 'Tom' },
       { id: 1, name: 'Jack' },
     ];
     expect(sortCategoryList(array, 'option2')).toEqual(testedArrayDescending);
   });
  
  test('check sort buttons are rendered', () => {
    render(<CategoryShows />);

    const button = screen.getAllByTestId("category-testing-button");
    expect(button).toBeTruthy();

  })
});

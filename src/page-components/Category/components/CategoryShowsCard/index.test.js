import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CategoryShowsCard from './index';

describe('CategoryShowsCard component', () => {
  test('match snapshot', () => {
    const card = {
      id: '6c94c7db-0616-4c10-8745-aa720058d8e8',
      slug: 'adam-carolla-show',
      name: 'Adam Carolla Show',
      description:
        'Welcome to the Adam Carolla Show! The new home for…y, Dana Gould, Doug Benson, and many, many more..',
      images: {
        squareLarge: {
          pixelWidth: 320,
          url: "https://listnr-img-prod.scalabs.com.au/api/assets/mercury/cbea158c-f84a-4904-8fae-220d4d2e91c7/v0?width=320&height=320"
        } 
      }
    };
  
    const tree = renderer.create(<CategoryShowsCard card={card} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
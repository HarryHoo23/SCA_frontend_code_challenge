import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';
import CategoryShowsCard from '../CategoryShowsCard';

function CategoryShows({ shows, description }) {
  console.log(shows);
  const [data, setData] = useState(shows);

  return (
    <StyledCategoryShows>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <StyledBox>
          {description && (
            <TextWrapper>
              <Paragraph text={description} variant="l" transparent />
            </TextWrapper>
          )}
        </StyledBox>
      </Flex>
      <Flex flexWrap="wrap">
        <TextWrapper>
          <Paragraph text={`${data.length} Podcasts`} variant="xl" />
        </TextWrapper>
        
        {data.map((card) => {
          return <CategoryShowsCard key={card.id} card={card} />;
        })}
      </Flex>
    </StyledCategoryShows>
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  })),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;

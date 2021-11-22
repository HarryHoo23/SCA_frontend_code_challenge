import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';
import CategoryShowsCard from '../CategoryShowsCard';
import spacing from 'styling/spacing';
import Header from 'shared-components/Typography/Header';

const StyledFlex = styled(Flex)`
  margin: 0 -${spacing.s};
`;

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
      <Box>
        <Header
          text={`${data.length} Podcasts`}
          variant="m"
          fontWeight="bold"
          mt="m"
          mb="m"
        />
        <StyledFlex flexWrap="wrap">
          {data.map((card) => {
            return <CategoryShowsCard key={card.id} card={card} />;
          })}
        </StyledFlex>
      </Box>
    </StyledCategoryShows>
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.shape({
        squareLarge: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;

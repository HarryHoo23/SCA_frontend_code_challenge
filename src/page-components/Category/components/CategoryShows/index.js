import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';
import CategoryShowsCard from '../CategoryShowsCard';
import spacing from 'styling/spacing';
import Header from 'shared-components/Typography/Header';
import FilterList from 'shared-components/Icons/FilterList';
import SortButton from 'shared-components/SortButton';

const StyledFlex = styled(Flex)`
  margin: 0 -${spacing.s};
`;

function CategoryShows({ shows, description }) {
  const [data, setData] = useState(shows);
  const [isAscending, setIsAscending] = useState(false);

  const clickHander = () => {
    setIsAscending(true);
  }

  const sortCategoryList = (list) => {
    list.sort((firstElement, secondElement) => isAscending ? firstElement.name.toUpperCase() - secondElement.name.toUpperCase() : secondElement.name.toUpperCase() - firstElement.name.toUpperCase());
  }

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
        <Flex justifyContent="space-between" alignItems="center">
          <Header
            text={`${data.length} Podcasts`}
            variant="m"
            fontWeight="bold"
            mt="m"
            mb="m"
          />
          <SortButton onOptionClick={() => {}}
            options={[
              {
                key: 'option1',
                value: 'SORT A-Z'
              },
              {
                key: 'option2',
                value: 'SORT Z-A'
              }
            ]}
            side="left"
          />
        </Flex>
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

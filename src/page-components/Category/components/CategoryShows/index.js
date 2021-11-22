import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';
import CategoryShowsCard from '../CategoryShowsCard';
import spacing from 'styling/spacing';
import Header from 'shared-components/Typography/Header';
import SortButton from 'shared-components/SortButton';

export function sortCategoryList(list, isAscending) {
  const sortedList = list.sort((firstElement, secondElement) =>
    isAscending === 'option1'
      ? firstElement.name.localeCompare(secondElement.name)
      : secondElement.name.localeCompare(firstElement.name)
  );
  return sortedList;
}

const StyledFlex = styled(Flex)`
  margin: 0 -${spacing.s};
`;

function CategoryShows({ shows, description }) {
  const [data, setData] = useState(shows);
  const [sortingKey, setSortingKey] = useState('');

  function sortCategoryList(list) {
    const sortedList = list.sort((firstElement, secondElement) => {
      if (sortingKey === "option1") {
        return firstElement.name.localeCompare(secondElement.name);
      }
      if (sortingKey === "option2") {
        return secondElement.name.localeCompare(firstElement.name);
      }
    });
    return sortedList;
  }

  useEffect(() => {
    const list = [...data];
    setData(sortCategoryList(list));
  }, [sortingKey]);

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
          <SortButton
            onOptionClick={(key) => {
              setSortingKey(key);
            }}
            options={[
              {
                key: 'option1',
                value: 'SORT A-Z',
              },
              {
                key: 'option2',
                value: 'SORT Z-A',
              },
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

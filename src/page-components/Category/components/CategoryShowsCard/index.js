import { Box } from '@rebass/grid';
import Image from 'shared-components/Image';
import spacing from 'src/styling/spacing';
import Paragraph from 'shared-components/Typography/Paragraph';
import styled from 'styled-components';

const StyledCategoryCard = styled(Box)`
  position: relative;
  padding: ${spacing.m} ${spacing.s} ${spacing.l};

  img {
    border-radius: 12px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  max-width: ${props => props.width};
  width: 100%;
`;



const CategoryShowsCard = ({ card }) => {
  return (
    <StyledCategoryCard
      width={[1 / 2, 1 / 3, 1 / 4]}
      color="white"
      bg="primary"
      data-testid={`card-${card.id}`}
    >
      <StyledImage
        src={card.images.squareLarge.url}
        width={`${card.images.squareLarge.pixelWidth}px`}
        height={'auto'}
        alt={card.images.name}
      />
      <Paragraph
        as="h4"
        variant="l"
        linesToShow={1}
        fontWeight="bold"
        text={card.name}
        mt="s"
        mb="s"
      />
      <Paragraph variant='s' text={card.description} linesToShow={3} transparent  />
    </StyledCategoryCard>
  );
};

export default CategoryShowsCard;
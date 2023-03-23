import React from 'react';
import {
  Card,
  TopInfo,
  TitleWrapper,
  Title,
  SubTitle,
  IconBox,
  Price,
  Text,
} from './StickerCard.style';


const StickerCard = ({
  title,
  subtitle,
  icon,
  price,
  indicatorText,
}) => {
  return (
    <Card>
      <TopInfo>
        <TitleWrapper>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </TitleWrapper>

        <IconBox>{icon}</IconBox>
      </TopInfo>

      <Price>{price}</Price>
      {
        <Text style={{ color: '#03D3B5' }}>
           {indicatorText}
        </Text>
      }
    </Card>
  );
};

export default StickerCard;

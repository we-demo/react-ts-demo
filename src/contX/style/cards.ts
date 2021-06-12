import styled from 'styled-components';
import { Card } from '../model/cards';
import { FullFillWrapper } from './common';

export const ControlsWrapper = styled.div`
  margin-bottom: 20px;
`;

const cardWidth = 200;
const cardHeight = 150;

export const CardsArea = styled(FullFillWrapper)`
  position: relative;
  width: calc(100% - ${cardWidth}px);
  height: calc(100% - ${cardHeight}px);
`;

export const CardWrapper = styled.div<{ card: Card }>`
  position: absolute;
  left: ${(props) => `${props.card.position.x * 100}%`};
  top: ${(props) => `${props.card.position.y * 100}%`};
  width: ${cardWidth}px;
  height: ${cardHeight}px;
  background-color: ${(props) => props.card.backColor};
  padding: 16px;
  box-sizing: border-box;
`;

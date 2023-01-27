import styled from 'styled-components';

type CardContainerProps = {
  type: string;
  theme: 'dark' | 'light';
};

export const CardContainer = styled.div<CardContainerProps>`
  min-height: 180px;
  position: relative;
  background-color: ${(props) => (props.type ? `var(--bg-poke-color-${props.theme}-${props.type})` : '#262626')};
  color: #ffffff;
  overflow: hidden;

  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  user-select: none;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 24px 30px 16px ${(props) => `var(--bg-poke-color-shadow-${props.type})`};
    z-index: 99;

    img {
      width: 50%;
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 transparent;
    transition-duration: 0.2s;
  }

  &:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 220%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 99999;
    transform: rotate(45deg);
    top: -50%;
    left: -60%;
    transition: all 0.4s ease;
  }

  &:hover:before {
    left: 180%;
    width: 160px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.2);
    bottom: -50px;
    right: -50px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
`;

export const Name = styled.h3`
  font-size: 1.28rem;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Ability = styled.span`
  font-size: 0.7rem;
  width: fit-content;
  text-transform: capitalize;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 4px 8px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  width: 38%;
  position: absolute;
  bottom: 4px;
  right: 16px;
  z-index: 9999;
  transition: all 0.3s ease;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 32px;
  background-image: url(../../assets/img/bg-pokemon.svg);
  background-repeat: unset;
  background-size: 658px;
  background-position: 169px 40px;
  background-blend-mode: soft-light;
`;

export const GoBackButton = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  background-color: rgb(255, 255, 255, 12%);
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgb(255, 255, 255, 30%);
    transform: scale(1.05);
  }

  &:active {
    background-color: rgb(255, 255, 255, 10%);
    transform: scale(0.95);
  }
`;

export const TopInfo = styled.div`
  padding: 2.8rem;
  color: white;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Name = styled.h3`
  display: inline-block;
  font-size: 2.8rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Id = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Ability = styled.span`
  font-size: 1rem;
  width: fit-content;
  text-transform: capitalize;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 8px 16px;
  border-radius: 50px;
  margin-bottom: 8px;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Icon = styled.img`
  position: absolute;
  height: 280px;
  bottom: -100px;
`;

type AllDetailsProps = {
  isDark?: boolean;
};

export const AllDetails = styled.div<AllDetailsProps>`
  padding: 2.8rem;
  padding-top: 3.6rem;
  border-radius: 32px;

  background-color: ${(props) => (props.isDark ? '#3A3A3A' : '#fff')};
`;

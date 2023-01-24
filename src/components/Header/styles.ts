import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoBox = styled.span`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
  transform: rotate(45deg);
`;

export const LogoText = styled.strong`
  display: inline-block;
  font-size: 1.25rem;
`;

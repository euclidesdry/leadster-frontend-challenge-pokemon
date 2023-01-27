import styled from 'styled-components';

type ContainerProps = {
  isDark?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 100%;
  padding: 64px 64px 0;

  box-shadow: ${(props) => (props.isDark ? '0px 32px 48px rgb(0, 0, 0)' : '0px 32px 48px rgb(0, 0, 0, 10%)')};
  border-radius: 32px 32px 0 0;

  transition-property: background, box-shadow;
  transition: 0.6s ease;

  background-color: ${(props) => (props.isDark ? '#3A3A3A' : '#ffffff')};

  @media (max-width: 640px) {
    padding: 20px 20px 0;
  }
`;

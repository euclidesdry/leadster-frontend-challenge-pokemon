import styled from 'styled-components';

export const TopInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.28rem;
  margin-bottom: 0.8rem;
`;

export const Name = styled.span`
  text-transform: capitalize;
`;

export const PercentBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #ccc;
  margin-bottom: 1.2rem;
  border-radius: 16px;
  overflow: hidden;
`;

export const Percentage = styled.div`
  height: 100%;
  background-color: #191919;
  border-radius: 16px;
`;

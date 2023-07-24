// Styled
import styled from 'styled-components';
// Icons
import { BiPlanet } from 'react-icons/bi';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PlanetIcon = styled(BiPlanet)`
  width: 100%;
  height: 100%;
  color: #3498db;
`;

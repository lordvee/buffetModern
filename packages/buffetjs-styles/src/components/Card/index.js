/**
 *
 * Card
 *
 */

import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const Card = styled.div`
  background: ${colors.white};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  position: relative;
  border-radius: ${({ radius }) => radius || '0.5rem'};
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
    
    &::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }

  @media (min-width: ${sizes.tablet}) {
    .table-wrapper {
      overflow-x: visible;
    }
  }

  /* Content padding */
  padding: ${({ noPadding }) => (noPadding ? '0' : '1.5rem')};

  /* Loading state */
  &[aria-busy="true"] {
    opacity: 0.7;
    pointer-events: none;
  }
`;

Card.defaultProps = {
  radius: '0.5rem',
  noPadding: false,
};

export default Card;


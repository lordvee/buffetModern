/**
 *
 * Button
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import mixins from '../../assets/styles/mixins';

const Button = styled.button`
  /* General style */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${sizes.button.height.large};
  padding: 0 ${sizes.button.padding.leftRight};
  font-weight: 600;
  font-size: 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  outline: 0;
  background-color: ${colors.white};
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-1px);
    ${mixins(colors.lightGreyAlpha).bshadow};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }

  /* Specific style */
  ${({ color }) =>
    color !== 'none' &&
    `
      background-color: ${colors.button[color].backgroundColor};
      border: 1px solid ${colors.button[color].borderColor};
      color: ${colors.button[color].color};

      &:hover {
        background-color: ${
          color === 'primary'
            ? 'rgba(66, 153, 225, 0.9)'
            : colors.button[color].backgroundColor
        };
        border-color: ${
          color === 'primary'
            ? 'rgba(66, 153, 225, 0.9)'
            : colors.button[color].borderColor
        };
      }
    `}

  ${({ disabled }) =>
    disabled &&
    `
      background-color: #f7fafc;
      border-color: #edf2f7;
      color: #a0aec0;
      cursor: not-allowed;
      transform: none;

      &:hover {
        box-shadow: none;
        transform: none;
        background-color: #f7fafc;
        border-color: #edf2f7;
      }
    `}

  ${({ color }) =>
    color === 'success' &&
    `
      min-width: ${sizes.button.minWidth};
    `}
  
  /* FontAwesome icons */
  > span svg {
    font-size: 1.2rem;
    margin-right: 8px;
    position: relative;
    top: -1px;
  }

  /* Custom icons */
  > svg {
    height: 1.2rem;
    width: auto;
    margin-right: 8px;
    position: relative;
    top: -1px;
  }

  /* Loading state */
  &[aria-busy="true"] {
    opacity: 0.7;
    cursor: wait;
  }
`;

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'cancel',
    'success',
    'delete',
    'none',
  ]),
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;

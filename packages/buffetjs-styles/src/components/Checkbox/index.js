/**
 *
 * Checkbox
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Checkbox = styled.input`
  cursor: pointer;
  margin: 0;
  position: relative;
  width: ${sizes.checkbox.width};
  height: ${sizes.checkbox.height};
  opacity: 0;
  z-index: 2;

  &:focus,
  &:active {
    outline: 0;
  }

  /* Custom checkbox design */
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: calc(-${sizes.checkbox.width} / 2);
    width: ${sizes.checkbox.width};
    height: ${sizes.checkbox.height};
    border: 2px solid ${colors.greyIconBkgd};
    background-color: ${colors.white};
    border-radius: 4px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    z-index: 1;
  }

  /* Checkmark using SVG */
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: calc(-${sizes.checkbox.width} / 2);
    width: ${sizes.checkbox.width};
    height: ${sizes.checkbox.height};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.23, 1);
    opacity: 0;
    z-index: 1;
  }

  /* Checked state */
  &:checked {
    &:before {
      border-color: ${colors.darkBlue};
      background-color: ${colors.darkBlue};
    }
    
    &:after {
      opacity: 1;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    }
  }

  /* Indeterminate state */
  ${({ someChecked }) =>
    someChecked &&
    `
      &:before {
        border-color: ${colors.darkBlue};
        background-color: ${colors.darkBlue};
      }
      
      &:after {
        opacity: 1;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
      }
    `}

  /* Hover state */
  &:not(:disabled):hover:before {
    border-color: ${colors.darkBlue};
    transform: scale(1.05);
  }

  /* Focus state */
  &:focus-visible:before {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    
    &:before {
      background-color: ${colors.greyIconBkgd};
      border-color: ${colors.greyIconBkgd};
      opacity: 0.6;
    }
    
    &:after {
      opacity: 0.5;
    }
  }

  /* Label styling */
  & + label {
    display: inline-block;
    margin-left: 8px;
    font-weight: ${sizes.fontWeight.semiBold};
    font-size: ${sizes.input.fontSize};
    line-height: ${sizes.checkbox.height};
    vertical-align: top;
    cursor: pointer;
    user-select: none;
    color: ${colors.darkBlue};
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  &:disabled + label {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

Checkbox.defaultProps = {
  someChecked: false,
  type: 'checkbox',
};

Checkbox.propTypes = {
  someChecked: PropTypes.bool,
  type: PropTypes.string,
};

export default Checkbox;


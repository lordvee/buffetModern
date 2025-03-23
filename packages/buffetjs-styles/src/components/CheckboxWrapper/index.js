/**
 *
 * CheckboxWrapper
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: ${sizes.margin}px;
  padding: ${({ hasSpacing }) => hasSpacing ? '8px 0' : '0'};
  width: 100%;
  
  /* Checkbox and label container */
  .checkbox-container {
    display: inline-flex;
    align-items: flex-start;
    min-height: ${sizes.checkbox.height};
    position: relative;
    flex: 1;
  }

  /* Input styling */
  input[type="checkbox"] {
    margin: 0;
    flex-shrink: 0;
  }

  /* Label styling */
  label {
    display: inline-block;
    width: fit-content;
    max-width: calc(100% - ${sizes.checkbox.width} - ${sizes.margin}px);
    margin: 0;
    padding-top: 1px;
    line-height: 1.4;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    color: ${({ disabled }) => disabled ? colors.greyIconBkgd : 'inherit'};
    transition: color 0.2s ease;
    
    /* Handle text wrapping */
    word-break: break-word;
    hyphens: auto;
  }

  /* Error state */
  ${({ error }) =>
    error &&
    `
      input[type="checkbox"]:before {
        border-color: ${colors.error || '#ff5858'} !important;
      }
      
      .error-message {
        color: ${colors.error || '#ff5858'};
        font-size: 1.2rem;
        margin-top: 4px;
        display: block;
        width: 100%;
      }
    `}

  /* Helper text */
  .helper-text {
    color: ${colors.greyIconBkgd};
    font-size: 1.2rem;
    margin-top: 4px;
    display: block;
    width: 100%;
  }

  /* Group styling for multiple checkboxes */
  &.checkbox-group {
    flex-direction: column;
    gap: 8px;
    
    .checkbox-container {
      width: 100%;
    }
  }

  /* Responsive adjustments */
  @media (max-width: ${sizes.tablet}) {
    label {
      max-width: calc(100% - ${sizes.checkbox.width} - ${sizes.margin / 2}px);
    }
  }
`;

CheckboxWrapper.defaultProps = {
  disabled: false,
  error: null,
  hasSpacing: true,
};

CheckboxWrapper.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  hasSpacing: PropTypes.bool,
};

export default CheckboxWrapper;

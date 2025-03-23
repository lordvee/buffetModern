/**
 *
 * DatePicker
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-dates/lib/css/_datepicker.css';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const DatePicker = styled.div`
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  ${({ isOpen }) =>
    isOpen &&
    `
    z-index: 999;
  `}

  * {
    outline: 0;
    box-sizing: border-box;
  }

  /* Input field styling */
  .DateInput {
    width: 100%;
    position: relative;
    transition: all 0.2s ease;
  }

  /* Calendar icon */
  svg.fa-calendar-alt {
    font-size: 16px;
    color: ${colors.greyIconBkgd};
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    transition: color 0.2s ease;
  }

  /* Input styling */
  input {
    font-weight: ${sizes.fontWeight.regular};
    position: relative;
    z-index: 1;
    width: 100%;
    height: ${sizes.input.height};
    padding: 0 ${sizes.input.padding};
    font-size: ${sizes.input.fontSize};
    cursor: pointer;
    border: 1px solid ${colors.lightGrey};
    border-radius: 8px;
    color: ${colors.black};
    background-color: ${colors.white};
    padding-left: 42px;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${colors.blueBorder};
    }

    &::-webkit-input-placeholder {
      color: ${colors.greyPlaceholder};
    }

    &:disabled {
      background-color: ${colors.greyIconBkgd}20;
      cursor: not-allowed;
      opacity: 0.7;
    }

    &:focus {
      border-color: ${colors.blueBorder};
      box-shadow: 0 0 0 3px ${colors.blueBorder}20;
    }
  }

  /* Calendar container styling */
  .SingleDatePicker,
  .SingleDatePickerInput__withBorder {
    width: 100%;
  }

  .SingleDatePickerInput__withBorder {
    border: 0;
  }

  .DateInput_input__focused {
    border-color: ${colors.blueBorder};
  }

  /* Calendar header styling */
  .DayPicker_weekHeader {
    color: ${colors.black};
    border-top: 1px solid ${colors.lightGrey}40;
    margin-top: -10px;
    padding: 0 8px;

    li {
      padding: 12px 0;
      small {
        font-size: 1.3rem;
        font-weight: 600;
        color: ${colors.greyIconBkgd};
      }
    }
  }

  /* Calendar popup styling */
  .DayPicker__withBorder {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid ${colors.lightGrey}20;
    border-radius: 8px;
    background: ${colors.white};
    position: absolute;
    overflow: hidden;
  }

  .DateInput_fang {
    display: none;
  }

  /* Month caption styling */
  .CalendarMonth_caption {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 24px 0;
    color: ${colors.black};
  }

  .DayPicker_transitionContainer {
    padding: 4px;
  }

  .DayPickerKeyboardShortcuts_show {
    display: none;
  }

  /* Navigation buttons styling */
  .DayPickerNavigation {
    div[role='button'] {
      font-size: 24px;
      width: 40px;
      height: 40px;
      color: ${colors.black};
      border-radius: 50%;
      text-align: center;
      top: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;

      &::before {
        line-height: 1;
      }

      &.DayPickerNavigation_leftButton__horizontalDefault {
        left: 22px;
        &::before {
          content: '‹';
        }
      }

      &.DayPickerNavigation_rightButton__horizontalDefault {
        right: 22px;
        &::before {
          content: '›';
        }
      }

      svg {
        display: none;
      }

      &:hover {
        background: ${colors.lightGrey}20;
        color: ${colors.blueBorder};
      }
    }
  }

  /* Date cells styling */
  td {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
    font-size: 1.4rem;
    border-radius: 50%;
    transition: all 0.2s ease;

    &,
    &.CalendarDay__selected,
    &.CalendarDay__selected:active,
    &.CalendarDay__selected:hover,
    &.CalendarDay__default:hover {
      border: 0;
    }

    &.CalendarDay__default:hover {
      background: ${colors.lightGrey}20;
      color: ${colors.black};
    }

    &.CalendarDay__today {
      font-weight: 600;
      color: ${colors.blueBorder};

      &::before {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: ${colors.blueBorder};
      }
    }

    &.CalendarDay__selected {
      background-color: ${colors.blueBorder};
      color: ${colors.white};
      font-weight: 600;
      transform: scale(0.9);

      &:hover {
        background-color: ${colors.blueBorder};
      }

      &.CalendarDay__today {
        &::before {
          background: ${colors.white};
        }
      }
    }

    &.CalendarDay__blocked_out_of_range {
      color: ${colors.lightGrey};
      cursor: not-allowed;
      
      &:hover {
        background: none;
      }
    }
  }

  /* Mobile optimization */
  @media (max-width: ${sizes.tablet}) {
    .DayPicker__withBorder {
      left: 50% !important;
      transform: translateX(-50%);
      width: calc(100vw - 32px);
    }

    td {
      height: 48px;
    }
  }
`;

DatePicker.defaultProps = {
  isOpen: false,
};

DatePicker.propTypes = {
  isOpen: PropTypes.bool,
};

export default DatePicker;

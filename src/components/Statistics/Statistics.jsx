import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const Statistics = ({ good, neutral, bad }) => {


        return (<ul className={css.list}>
          <li>
            <button className={css.btn} onClick={good}>
              Good
            </button>
          </li>
          <li>
            <button className={css.btn} onClick={neutral}>
              Neutral
            </button>
          </li>
          <li>
            <button className={css.btn} onClick={bad}>
              Bad
            </button>
          </li>
        </ul>)
}
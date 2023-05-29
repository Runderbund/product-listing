import React from 'react';
import CategorySelect from '../CategorySelect/CategorySelect';
import styles from './ControlBar.module.css';

const ControlBar = ({ category, setCategory }) => {
  return (
    <div className={styles.controlBar}>
      <div className={styles.controlBar_item}>
        <CategorySelect category={category} setCategory={setCategory} />
      </div>
    </div>
  );
}



export default ControlBar;
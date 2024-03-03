import React from 'react';
import Card from '../ui/dashboard/card/card';
import styles from '../ui/dashboard/dashboard.module.css';
import Transaction from '../ui/dashboard/transactions/transactions';
import Chart from '../ui/dashboard/chart/chart';
import RightCard from '../ui/dashboard/rightCard/rightCard';
const dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction/>
        <Chart />
      </div>
      <div className={styles.side}>
        <RightCard/>
      </div>
    </div>
  );
};

export default dashboard;
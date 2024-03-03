import Image from 'next/image' 
import styles from './transactions.module.css'
import noavatar from '../../../../public/avatar.png'
const Transaction = ()=>{
return (
  <div className={styles.container}>
    <h2 className={styles.title}>Latest Transactions</h2>
    <table className={styles.table}>
    <thead>
      <tr>
        <td>Image</td>
        <td>Name</td>
        <td>Status</td>
        <td>Date</td>
        <td>Amount</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Image src={noavatar} alt="avatar" width={40} height={40} className={styles.userImage} />
        </td>
        <td>John Doe</td> 
        <td>
          <span className={`${styles.status} ${styles.pending}`}>Pending</span>
        </td>
        <td>12.02.2024</td>
        <td>$230</td>
      </tr>
      <tr>
        <td>
          <Image src={noavatar} alt="avatar" width={40} height={40} className={styles.userImage} />
        </td>
        <td>John Doe</td> 
        <td>
          <span className={`${styles.status} ${styles.done}`}>Done</span>
        </td>
        <td>12.02.2024</td>
        <td>$230</td>
      </tr>
      <tr>
        <td>
          <Image src={noavatar} alt="avatar" width={40} height={40} className={styles.userImage} />
        </td>
        <td>John Doe</td> 
        <td>
          <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
        </td>
        <td>12.02.2024</td>
        <td>$230</td>
      </tr>
      <tr>
        <td>
          <Image src={noavatar} alt="avatar" width={40} height={40} className={styles.userImage} />
        </td>
        <td>John Doe</td> 
        <td>
          <span className={`${styles.status} ${styles.pending}`}>Pending</span>
        </td>
        <td>12.02.2024</td>
        <td>$230</td>
      </tr>
    </tbody>
    </table>
  </div>
);
};

export default Transaction;
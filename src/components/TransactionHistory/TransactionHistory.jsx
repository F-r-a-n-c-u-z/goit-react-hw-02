import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableTh}>Type</th>
          <th className={css.tableTh}>Amount</th>
          <th className={css.tableTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, id) => (
          <tr className={css.tableTr} key={id}>
            <td className={css.tableTh}>{item.type}</td>
            <td className={css.tableTh}>{item.amount}</td>
            <td className={css.tableTh}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

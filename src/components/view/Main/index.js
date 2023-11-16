import { TableStyle, DivStyle } from "./index.style";

export const MainView = (props) => {
  const { books } = props;
  return (
    <TableStyle>
      <thead>
        <td>COUNT</td>
        <td>AMOUNT</td>
        <td>PRICE</td>
      </thead>
      <tbody>
        {
          books && Object.entries(books).map(([key, el]) => (
            <>
              {
                el.count > 0 &&
                <tr key={key}>
                  <td>{el.price}</td>
                  <td>{el.count}</td>
                  <td>{el.amount}</td>
                </tr>
              }
            </>
          ))
        }
      </tbody>
    </TableStyle>
  );
};
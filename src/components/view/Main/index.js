import { BackgroundStyle, TableStyle, ThStyle, TdStyle, ButtonStyle } from "./index.style";

export const MainView = (props) => {
  const { books, handleConnect, handleDisconnect } = props;
  return (
    <BackgroundStyle>
      <div style={{paddingTop: '20px'}}>
        <ButtonStyle onClick={handleConnect}>Connect</ButtonStyle>
        <ButtonStyle onClick={handleDisconnect}>Disconnect</ButtonStyle>
      </div>
      <TableStyle>
        <thead>
          <ThStyle>COUNT</ThStyle>
          <ThStyle>AMOUNT</ThStyle>
          <ThStyle>PRICE</ThStyle>
        </thead>
        <tbody>
          {
            books && Object.entries(books).map(([key, el]) => (
              <>
                {
                  el.count > 0 &&
                  <tr key={key}>
                    <TdStyle>{el.price}</TdStyle>
                    <TdStyle>{el.count}</TdStyle>
                    <TdStyle>{el.amount}</TdStyle>
                  </tr>
                }
              </>
            ))
          }
        </tbody>
      </TableStyle>
    </BackgroundStyle>
  );
};
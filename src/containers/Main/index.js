import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppActions } from "../../redux/store";
import { MainView } from "../../components/view";

export const MainContainer = () => {
  const dispatch = useDispatch();
  const { books, chanId } = useSelector(root => root.book);

  const handleConnect = () => {
    dispatch(AppActions.book.subscribe({
      channel: 'book',
      symbol: 'tBTCUSD',
      prec: 'P0',
      freq: 'F0',
    }));
  }

  const handleDisconnect = () => {
    dispatch(AppActions.book.unsubscribe({
      chanId: chanId,
    }));
  }

  useEffect(() => {
    handleConnect();
  }, []);

  return <MainView books={books} handleConnect={handleConnect} handleDisconnect={handleDisconnect} />
};
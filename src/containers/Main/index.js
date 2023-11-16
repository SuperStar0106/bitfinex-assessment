import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppActions } from "../../redux/store";
import { MainView } from "../../components/view";

export const MainContainer = () => {
  const dispatch = useDispatch();
  const { books } = useSelector(root => root.book);

  useEffect(() => {
    dispatch(AppActions.book.subscribe({
      channel: 'book',
      symbol: 'tBTCUSD',
      prec: 'P0',
      freq: 'F0',
    }));
  }, []);

  return <MainView books={books} />
};
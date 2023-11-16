import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppActions } from "../../redux/store";
import { MainView } from "../../components/view";

export const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppActions.book.subscribe({
      channel: 'book',
      symbol: 'tBTCUSD',
      prec: 'P0',
      freq: 'F1',
      len: '25'
    }));
  }, []);

  return <MainView />
};
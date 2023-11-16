import { AppActions } from '../../store';

export const socketMiddleware = (socket) => {
  return (params) => (next) => (action) => {
    const { dispatch } = params
    const { type } = action

    switch (type) {
      // Connect to the socket when a user logs in
      case AppActions.book.subscribe.type: {
        const { channel, symbol, prec, freq, len, subId } = action.payload;
        console.log('message ');
        socket.onopen = (e) => {
          socket.send(JSON.stringify({
            event: 'conf',
            flags: 536870912,
          }));
          socket.send(JSON.stringify({
            event: 'subscribe',
            channel,
            symbol,
            prec,
            freq,
            len,
            subId,
          }));
        };

        socket.onmessage = (e) => {
          const data = JSON.parse(e.data);
          const { event, chanId } = data;
          console.log('data: ', data);
          if (event === 'subscribed') {
            if (data.chanId) {
              dispatch(AppActions.book.setChanId(chanId))
            }
          } else {
            if (Array.isArray(data))
              dispatch(AppActions.book.setBooks(data));
          }
        }
        break;
      }

      case AppActions.book.unsubscribe.type: {
        const { chanId } = action.payload;

        socket.send(JSON.stringify({
          event: 'unsubscribe',
          chanId,
        }));
        break;
      }
      default: break;
    }

    return next(action)
  }
}
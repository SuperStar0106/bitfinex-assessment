import axios from 'axios';

export const makeAPIRequst = async ({ url, method, data, ...rest }) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers: {
        ...(rest.isTokenIncluded && {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      },
    });

    return response;
  } catch (err) {
    return null;
  }
};

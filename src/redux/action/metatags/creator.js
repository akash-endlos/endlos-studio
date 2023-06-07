import axios from 'axios';

export const getMetatags = (type, payload) => async (dispatch) => {
  try {
    const response = await axios.get(`https://seo-api.endlos.live/api/v1/head/get?webPageUrl=${payload}`);
    const headTag = response.data.data.WebDetails.headTag;
    dispatch({
      type,
      payload: headTag,
    });
  } catch (error) {
    console.error('Failed to fetch meta tags:', error);
  }
};

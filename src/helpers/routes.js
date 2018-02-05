import qs from 'qs';

export const postPath = (id = ':id') => `/posts/${id}`;
export const postsPath = (queryParams = {}) => {
  return `/posts${qs.stringify(queryParams, { addQueryPrefix: true })}`;
};

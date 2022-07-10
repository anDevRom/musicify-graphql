export const createAxiosConfigWithToken = (token: string) => {
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
};

export const createPaginationQuery = (limit?: number, offset?: number) => {
  const params = [];

  if (typeof limit === 'number') {
    params.push(`limit=${limit}`);
  }

  if (typeof offset === 'number') {
    params.push(`offset=${offset}`);
  }

  return params.length ? `?${params.join('&')}` : '';
};
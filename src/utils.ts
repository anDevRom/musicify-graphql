export const modifyEntityId = <T extends object>(entity: T & { _id: string }): T & { id: string } => {
  const id = entity._id;
  delete entity._id;

  return { ...entity, id };
};

export const modifyCollectionEntitiesIds = <T extends object>(collection: {
  items: (T & { _id: string })[],
  limit: number,
  offset: number,
  total: number
}): {
  items: (T & { id: string })[],
  limit: number,
  offset: number,
  total: number
} => {
  return {
    ...collection,
    items: collection.items.map((entity) => modifyEntityId(entity))
  };
};

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
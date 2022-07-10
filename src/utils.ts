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
  if (!limit && !offset) {
    return '';
  }

  const params = new URLSearchParams({ 
    limit: String(limit), 
    offset: String(offset) 
  });

  return `?${params.toString()}`;
}
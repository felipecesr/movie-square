export const normalize = arr =>
  Object.assign({}, ...arr.map(item => ({ [item['id']]: item })));
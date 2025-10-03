export const cleanFilters = (filters = {}) =>
  Object.fromEntries(
    Object.entries(filters).filter(
      ([, v]) => v !== '' && v !== null && v !== undefined,
    ),
  );

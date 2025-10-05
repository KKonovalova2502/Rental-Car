export const selectStyles = {
  control: (base) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 204,
    height: 44,
    borderRadius: 12,
    background: '#f7f7f7',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    color: '#101828',
    lineHeight: '125%',
  }),

  valueContainer: (base) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 112,
    padding: '0 24px 0 16px',
  }),

  placeholder: (base) => ({
    ...base,
    color: '#101828',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }),

  // 👇 тут додаємо перевірку для menu
  menu: (base, state) => {
    const isBrand = state.selectProps.name === 'brand';
    return {
      ...base,
      borderRadius: 12,
      background: '#fff',
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '125%',
      color: '#8d929a',
      border: '1px solid #f7f7f7',
      width: 204,
      marginTop: 4,
      paddingRight: 8,
      paddingTop: 10,
      paddingBottom: 10,
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      zIndex: 10,

      ...(isBrand
        ? { height: 272 } // фіксована висота для BrandSelect
        : { height: 'auto' }), // авто для PriceSelect
    };
  },

  // 👇 menuList без height, тільки scroll для брендів
  menuList: (base, state) => {
    const isBrand = state.selectProps.name === 'brand';
    return {
      ...base,
      borderRadius: 12,
      background: '#fff',
      ...(isBrand
        ? {
            maxHeight: 252,
            overflowY: 'auto',
            '::-webkit-scrollbar': {
              width: '8px',
            },
            '::-webkit-scrollbar-thumb': {
              background: '#dadde1',
              borderRadius: '10px',
            },
          }
        : {}),
    };
  },

  option: (base, state) => ({
    ...base,
    backgroundColor: 'transparent',
    color: state.isSelected ? '#101828' : '#8d929a',
    cursor: 'pointer',
    padding: '4px 18px',
    '&:active': {
      backgroundColor: '#fff',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: (base) => ({
    ...base,
    paddingLeft: 0,
    paddingRight: 16,
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
};

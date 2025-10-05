// eslint-disable-next-line no-unused-vars
import { components } from 'react-select';
import { BsChevronDown } from 'react-icons/bs';

export const DropdownIndicator = (props) => {
  const open = props.selectProps.menuIsOpen;
  return (
    <components.DropdownIndicator {...props}>
      <BsChevronDown
        style={{
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          fontSize: 16,
          color: '#101828',
        }}
      />
    </components.DropdownIndicator>
  );
};

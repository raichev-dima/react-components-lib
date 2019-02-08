import SelectBase from './Select';
import Option from './Option';
import DropDown from './DropDown';

type Extensions = {
  Option: typeof Option;
  DropDown: typeof DropDown;
};

type SelectType = typeof SelectBase & Extensions;

const Select = SelectBase as SelectType;

Select.Option = Option;
Select.DropDown = DropDown;

export default Select;

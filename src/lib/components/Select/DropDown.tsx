import React from 'react';

type CustomProps = {
  is?: React.ElementType;
};

type HtmlProps = React.HTMLAttributes<HTMLElement>;

type Props = CustomProps | HtmlProps;

const DropDown: React.FunctionComponent<Props> = function({
  is: Component = 'div',
  ...rest
}: Props) {
  return <Component {...rest} />;
};

DropDown.displayName = 'Select.DropDown';

export default DropDown;

import React from 'react';

type CustomProps = {
  is?: React.ElementType;
};

type HtmlProps = React.HTMLAttributes<HTMLOptionElement>;

type Props = CustomProps | HtmlProps;

const Option: React.FunctionComponent<Props> = function({
  is: Component = 'option',
  ...rest
}: Props) {
  return <Component {...rest} />;
};

Option.displayName = 'Select.Option';

export default Option;

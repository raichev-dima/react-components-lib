import React, { useReducer, createContext, useContext } from 'react';

const SelectStateContext = createContext(undefined);
const SelectDispatchContext = createContext(undefined);

function reducer(state, action) {
  return state;
}

function SelectContext({ children }) {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <SelectStateContext.Provider value={state}>
      <SelectDispatchContext.Provider
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        value={dispatch}
      >
        {children}
      </SelectDispatchContext.Provider>
    </SelectStateContext.Provider>
  );
}

export function useSelectState() {
  const context = useContext(SelectStateContext);
  if (context === undefined) {
    throw new Error(
      'useSelectState must be used within a SelectContextProvider',
    );
  }
  return context;
}

export function useSelectDispatch() {
  const context = useContext(SelectDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useSelectDispatch must be used within a SelectContextProvider',
    );
  }
  return context;
}

type CustomProps = {
  is?: React.ElementType;
};

type HtmlProps = React.HTMLAttributes<HTMLSelectElement>;

type Props = CustomProps | HtmlProps;

const Select: React.FunctionComponent<Props> = function({
  is: Component = 'select',
  ...rest
}: Props) {
  return (
    <SelectContext>
      <Component {...rest} />
    </SelectContext>
  );
};

Select.displayName = 'Select';

export default Select;

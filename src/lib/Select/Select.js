import React, { useRef, useReducer, useContext } from 'react';

const initialState = { isFocused: false, isExpanded: false };

function reducer(state, action) {
  switch (action.type) {
    case 'focus':
      return { ...state, isFocused: true, isExpanded: !state.isExpanded };
    case 'blur':
      return { ...state, isFocused: false };
    case 'itemSelected':
      return { ...state, itemSelected: action.item };
    case 'itemHovered':
      return { ...state, itemHovered: action.item };
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

const Context = React.createContext({});

function Option ({ render, item }) {
  const { onItemSelected, onItemHovered } = useContext(Context);

  return (
      <div
        onClick={() => onItemSelected(item)}
        onMouseOver={() => onItemHovered(item)}
        onMouseOut={() => onItemHovered(null)}
      >{render()}</div>
  );
}

function DataList ({ render, item }) {
  const { onItemSelected, onItemHovered } = useContext(Context);

  return (
    <div
      onClick={() => onItemSelected(item)}
      onMouseOver={() => onItemHovered(item)}
      onMouseOut={() => onItemHovered(null)}
    >{render()}</div>
  );
}


function Select ({ children, className }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { Provider } = Context;
  const inputEl = useRef(null);

  const onItemSelected = item => {
    dispatch({type: 'itemSelected', item});
    dispatch({ type: 'blur' });

    inputEl.current.focus();
  };

  const onItemHovered = item => {
    dispatch({type: 'itemHovered', item})
  };

  return (
    <Provider value={{ onItemSelected, onItemHovered }}>
      <>
        <input
          className={className}
          onFocus={() => dispatch({ type: 'focus' })}
          onBlur={() => { return state.itemHovered ? null : dispatch({ type: 'blur' })}}
          value={state.itemSelected ? state.itemSelected.value : ''}
          readOnly={true}
          ref={inputEl}
        />
        <div style={{ display: state.isExpanded ? 'block' : 'none', userSelect: 'none', position: 'relative' }}>
          {children}
        </div>
      </>
    </Provider>
  );
}

Select.Option = Option;
Select.DataList = DataList;

export default Select;
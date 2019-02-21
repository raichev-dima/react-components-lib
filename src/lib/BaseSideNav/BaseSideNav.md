

```jsx harmony
import styled from 'styled-components'

const Item = styled.div`
    background-color: red;
    
    :focus {
        background-color: yellow;
    }
`


;<>
    <BaseSideNav>
        <BaseSideNav.Item render={(props) => 
            <Item tabIndex="0" onClick={props.setActive} onFocus={() => console.log('Item')} {...props}>
                Text 1
            </Item>}>
        </BaseSideNav.Item>
        
        <BaseSideNav.Item render={(props) => 
            <Item tabIndex="0" onClick={props.setActive} onFocus={() => console.log('Item')}  {...props}>
                Text 2
            </Item>}>
        </BaseSideNav.Item>
    
    </BaseSideNav>
</>

```
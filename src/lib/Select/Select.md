```jsx

    const items = [
      { value: "us", text: "USA" },
      { value: "by", text: "Belarus" }
    ];

    <Select>
      <Select.Option item={items[0]} render={() => items[0].text}/>
      <Select.Option item={items[1]} render={() => items[1].text}/>
    </Select>

```


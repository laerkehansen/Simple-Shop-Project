import ListItem from "./ListItem";

const List = ({ cartItems, deleteItem }) => {
  return (
    <ul>
      {cartItems.map((cartItem) => (
        <ListItem
          key={cartItem.id}
          title={cartItem.text}
          price={cartItem.price}
          tag={cartItem.tag}
          image={cartItem.image}
          deleteItem={deleteItem}
          itemId={cartItem.id}
        ></ListItem>
      ))}
    </ul>
  );
};

export default List;

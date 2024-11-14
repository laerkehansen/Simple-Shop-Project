import ListItem from "./ListItem";

const List = ({ cartItems }) => {
  return (
    <ul>
      {cartItems.map((cartItem) => (
        <ListItem key={cartItem.id} title={cartItem.text} price={cartItem.price} tag={cartItem.tag} image={cartItem.image}></ListItem>
      ))}
    </ul>
  );
};

export default List;

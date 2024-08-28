function ListGroup() {
  let items = ["Tunisia", "Denmark", "Paris", "London", "Tokyo"];
  items = [];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item found here .</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

function List({listItem, renderItem }) {
    return ( 
        <ul>
            {
                listItem.map((item, index) => (
                    <li key={index}>{renderItem(item,index)}</li>
                ))}
        </ul>
     );
};

export default List;
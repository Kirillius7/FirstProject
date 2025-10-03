import PropTypes from "prop-types"
function List(props){
   /* const fruits = [{name: 'apple', calories: 95}, 
                    {name: 'orange', calories: 81},
                    {name: 'banana', calories: 102}, 
                    {name: 'coconut', calories: 21}];
    */
    //fruits.sort((a,b) => a.name.localeCompare(b.name)) // desc
    //fruits.sort((a,b) => b.name.localeCompare(a.name)) // asc                
    //fruits.sort((a,b) => a.calories - b.calories) // desc
    //fruits.sort((a,b) => b.calories - a.calories) // asc

    const fruits = props.items

    const listItems = fruits.map(fruit => <li key = {fruit.name}>Fruit name: 
                                {fruit.name}&nbsp; <b>Calories: {fruit.calories}</b></li>)
    return( 
        <>
            <h2 className = "list-name">{props.category}</h2>
            <ul className = "list-items">{listItems}</ul>
        </>
        )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                            name: PropTypes.string,
                                            calories: PropTypes.number}))
}

export default List
import React, { useState } from 'react'
import classes from './ShoppingList.module.css'

const ShoppingList = (props) => {

    const [isClicked, setIsClicked] = useState(false);



    const deleteBookHandler = (bookId) => {
        const updatedBooks = props.addedBooks.filter((book) => book.id !== bookId)
        props.setAddedBooks(updatedBooks);
        setIsClicked(true);
        props.decreaseCount();
    }


    return (
        <div className={classes.contain}>
            <h2>Sepetim</h2>
            <ul className={classes.product}>
                {props.addedBooks.map((book) => (
                    <li className={classes.book} key={book.id}>
                        <img src={book.url} alt={book.title} />
                        <span>{book.title}</span>
                        <div className={classes.details}>
                            <span>${book.price}</span>
                            <button onClick={() => deleteBookHandler(book.id)} className={classes.delete}>Delete</button>
                        </div>

                    </li>
                ))}

            </ul>
        </div>
    )
}

export default ShoppingList
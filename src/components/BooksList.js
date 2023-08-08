import React, { useState } from 'react'
import classes from './BooksList.module.css';
import ShoppingList from './ShoppingList';
import { AiOutlineShoppingCart } from 'react-icons/ai'


const AddBooks = (props) => {
    //sepete eklenen kitapların listesi
    const [addedBooks, setAddedBooks] = useState([]);
    const [lookCart, setLookCard] = useState(false);

    const addBookHandler = (event, book) => {
        event.preventDefault();
        //kitap listesine yeni kitap ekle
        setAddedBooks((prevBooks) => [...prevBooks, book]);
    }

    const showShoppingCartHandler = () => {
        setLookCard(true);
    }

    const closeModalHandler = () => {
        setLookCard(false);
    }

    return (
        <>
            <AiOutlineShoppingCart onClick={showShoppingCartHandler} className={classes.icon} />
            <div className={classes.container}  >
                {
                    props.books.map((item) => (
                        <div className={classes.books} key={item.id}>
                            <img src={item.url} />
                            <h2> {item.title}</h2>
                            <h5>{item.author}</h5>
                            <span className={classes.price}>${item.price}</span>
                            <button onClick={(event) => addBookHandler(event, item)} className={classes.btn}>Sepete ekle</button>
                        </div>
                    ))
                }

            </div>
            {lookCart && (addedBooks.length === 0 ?
                <div className={classes.modal}>
                    <div className={classes.modalContent}>
                        <h2>Sepet şu anda boş</h2>
                        <button className={classes.delete} onClick={closeModalHandler}>Exit</button>
                    </div>
                </div>
                : (
                    <div className={classes.modal}>
                        <div className={classes.modalContent}>
                            <ShoppingList setAddedBooks={setAddedBooks} addedBooks={addedBooks} />
                            <button className={classes.delete} onClick={closeModalHandler}>Exit</button>
                        </div>
                    </div>
                ))}
        </>

    )
}

export default AddBooks
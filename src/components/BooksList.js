import React, { useState } from 'react'
import classes from './BooksList.module.css';
import ShoppingList from './ShoppingList';
import { AiOutlineShoppingCart } from 'react-icons/ai'


const AddBooks = (props) => {
    //sepete eklenen kitapların listesi
    const [addedBooks, setAddedBooks] = useState([]);

    //alışveriş sepeti iconu
    const [clickIcon, setClickIcon] = useState(false);

    //sepete eklenen ürün sayısı
    const [count, setCount] = useState(0);


    //toplam fiyatı hesaplar
    const totalPrice = addedBooks.reduce((total, book) => total + book.price, 0);
    //total: işlem sırasında günvellenen değer
    //book:işlem yapılan kitap
    //0 başlangıç değeri

    const addBookHandler = (event, book) => {
        event.preventDefault();


        //eklediğimiz kitapların idlerinin farklı olması için
        const newBook = {
            ...book,
            id: new Date().getTime()
        };


        //kitap listesine yeni kitap ekle
        setAddedBooks((prevBooks) => [...prevBooks, newBook]);

        //sepetteki sayıyı arttır
        setCount(count + 1);
    }


    const showShoppingCartHandler = () => {
        setClickIcon(true);
    }

    const closeModalHandler = () => {
        setClickIcon(false);
    }

    return (
        <>
            <div className={classes.navbar}>
                <AiOutlineShoppingCart onClick={showShoppingCartHandler} className={classes.icon} />
                <span className={classes.count}>{count}</span>
            </div>
            <div className={classes.container}  >
                {
                    props.books.map((item) => (
                        <div className={classes.books} key={item.id}>
                            <img src={item.url} />
                            <h2> {item.title}</h2>
                            <h5>{item.author}</h5>
                            <span className={classes.price}>${item.price}</span>
                            <button onClick={(event) => addBookHandler(event, item)} className={classes.btn}>Add</button>
                        </div>
                    ))
                }

            </div>



            {/* alışveriş sepeti kısmı */}
            {/* sepet iconuna tıklanınca gelir */}
            {clickIcon && (addedBooks.length === 0 ?
                <div className={classes.modal}>
                    <div className={classes.modalContent}>
                        <h2>Cart is currently empty</h2>
                        <button className={classes.delete} onClick={closeModalHandler}>Exit</button>
                    </div>
                </div>
                : (
                    <div className={classes.modal}>
                        <div className={classes.modalContent}>
                            <ShoppingList decreaseCount={() => setCount(count - 1)} setAddedBooks={setAddedBooks} addedBooks={addedBooks} />
                            <h2>You will pay: ${totalPrice}</h2>
                            <button className={classes.delete} onClick={closeModalHandler}>Exit</button>

                        </div>
                    </div>
                ))}
        </>

    )
}

export default AddBooks
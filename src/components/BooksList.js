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
        //kitap listesine yeni kitap ekle
        setAddedBooks((prevBooks) => [...prevBooks, book]);

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
                            <button onClick={(event) => addBookHandler(event, item)} className={classes.btn}>Sepete ekle</button>
                        </div>
                    ))
                }

            </div>


            {clickIcon && (addedBooks.length === 0 ?
                <div className={classes.modal}>
                    <div className={classes.modalContent}>
                        <h2>Sepet şu anda boş</h2>
                        <button className={classes.delete} onClick={closeModalHandler}>Exit</button>
                    </div>
                </div>
                : (
                    <div className={classes.modal}>
                        <div className={classes.modalContent}>
                            <ShoppingList decreaseCount={() => setCount(count - 1)} setAddedBooks={setAddedBooks} addedBooks={addedBooks} />
                            <h2>Toplam Ödenecek Tutar: ${totalPrice}</h2>
                            <button className={classes.delete} onClick={closeModalHandler}>Exit</button>

                        </div>
                    </div>
                ))}
        </>

    )
}

export default AddBooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
    const dispatch = useDispatch();

    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        // const sendCartData = async () => {
        // dispatch(
        //     uiActions.showNotification({
        //         status: 'pending',
        //         title: 'Sending...',
        //         message: 'Sending cart data!',
        //     })
        // );
        // const response = await fetch('https://redux-test-b09aa-default-rtdb.firebaseio.com/cart.json', {
        //     method: 'PUT',
        //     body: JSON.stringify(cart),
        // });
        // if (!response.ok) {
        //     throw new Error('Sending cart data failed');
        // }
        // dispatch(
        //     uiActions.showNotification({
        //         status: 'success',
        //         title: 'Success!',
        //         message: 'Sent cart data successfully!',
        //     })
        // );
        // };
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }

        // sendCartData().catch((error) => {
        //     dispatch(
        //         uiActions.showNotification({
        //             status: 'error',
        //             title: 'Error!',
        //             message: 'Sending cart data failed!',
        //         })
        //     );
        // });
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification status={notification.status} title={notification.title} message={notification.message} />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],        // Масив товарів у корзині
        totalAmount: 0,   // Загальна вартість товарів у корзині
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;  // Отримання нового товару з action
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (!existingItem) {
                // Перевіряємо, що новий товар має поле price
                if (newItem.price !== undefined) {
                    state.items.push({ ...newItem, quantity: 1 });
                } else {
                    console.error('Error: item.price is undefined');
                }
            } else {
                // Якщо товар вже є в корзині, збільшуємо його кількість
                existingItem.quantity++;
            }

            // Оновлюємо загальну вартість
            state.totalAmount += newItem.price;
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                }

                // Зменшуємо загальну вартість
                state.totalAmount -= existingItem.price;
            }
        },
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;


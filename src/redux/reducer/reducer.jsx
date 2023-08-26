const INITIAL_STATE = {
    carts: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.carts.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 };

                return {
                    ...state,
                    carts: [...state.carts, temp],
                };
            }

        case "REMOVE_CART":
            const data = state.carts.filter((e) => e.id !== action.payload);

            return {
                ...state,
                carts: data,
            };

        case "REMOVE_ONE":
            const itemIndexDec = state.carts.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.carts[itemIndexDec].qnty >= 1) {
                const deleteItem = (state.carts[itemIndexDec].qnty -= 1);
                console.log([...state.carts, deleteItem]);

                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else {
                if (state.carts[itemIndexDec].qnty === 1) {
                    const data = state.carts.filter(
                        (e) => e.id !== action.payload.id
                    );
                }
                return {
                    ...state,
                    carts: data,
                };
            }
        default:
            return state;
    }
};

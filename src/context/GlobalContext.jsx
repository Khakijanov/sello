import { createContext, useReducer, useEffect } from "react";
import { produce } from "immer";

// Contextni yaratish
const MyContext = createContext();

const changeState = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'LOG_IN':
            return { ...state, user: payload };
        case 'LOG_OUT':
            return { ...state, user: null };
        case 'IS_AUTH_READY':
            return { ...state, isAuthReady: true };
        case 'ADD_PRODUCT':
            return { ...state, products: payload };
        case 'TOTAL_PRODUCTS':
            return { ...state, totalProduct: payload };
        case 'INCREMENT_COUNT':
            return produce(state, draft => {
                const product = draft.products.find(prod => prod.id === payload);
                if (product) {
                    product.count += 1;
                }
            });
        case 'DICCREMENT_COUNT':
            return produce(state, draft => {
                const product = draft.products.find(prod => prod.id === payload);
                if (product) {
                    product.count -= 1;
                }
            });
        default:
            return state;
    }
};

const data = {
    user: null,
    isAuthReady: false,
    products: [],
    totalProduct: 0,
    totalPrice: 0,
};

const MyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(changeState, data);

    // totalProductni o'zgartirish
    const calculateTotal = () => {
        let totalCount = 0;
        state.products.forEach((product) => {
            totalCount += product.count;
        });

        dispatch({ type: 'TOTAL_PRODUCTS', payload: totalCount });
    };

    // cartga qo'shish funksiyasi
    const addCart = (product) => {
        const findProduct = state.products.find((prod) => prod.id === product.id);

        if (findProduct) {
            const updatedProducts = state.products.map((prod) =>
                prod.id === product.id ? { ...prod, count: prod.count + product.count } : prod
            );
            dispatch({ type: 'ADD_PRODUCT', payload: updatedProducts });
        } else {
            dispatch({ type: 'ADD_PRODUCT', payload: [...state.products, product] });
        }
    };

    const incrementCount = (id) => {
        dispatch({ type: 'INCREMENT_COUNT', payload: id });
    };

    const decrementCount = (id) => {
        dispatch({ type: 'DICCREMENT_COUNT', payload: id });
    };

    useEffect(() => {
        calculateTotal();
    }, [state.products]);

    return (
        <MyContext.Provider value={{ ...state, dispatch, addCart, incrementCount,decrementCount }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };

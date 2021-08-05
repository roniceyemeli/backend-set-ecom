import {
  ADD_PRODUCTS,
  ADD_PRODUCTS_FAIL,
  ADD_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  GET_PRODUCTS,
  GET_PRODUCTS_DETAILS,
  GET_PRODUCTS_DETAILS_FAIL,
  GET_PRODUCTS_DETAILS_RESET,
  GET_PRODUCTS_DETAILS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  REMOVE_TO_CART,
  SIGNUP,
  SIGNIN,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_FAIL,
  UPDATE_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS_FAIL,
  DELETE_PRODUCTS_FAIL,
  DELETE_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS_SUCCESS,
} from "./actionTypes";

// Add products state + reducer
const addProduct = {
  products: null,
  loading: false,
  error: null,
};

export const addProductReducer = (state = addProduct, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
};

// get Products state + reducer
const initProducts = {
  products: [],
  loading: false,
  error: null,
};
export const getProductsReducer = (state = initProducts, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        products: payload,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

// const getProductsAdmin = {
//   products: [],
//   loading: false,
//   error: null,
// };
// export const getProductsReducerAdmin = (state = getProductsAdmin, { type, payload }) => {
//   switch (type) {
//     case GET_PRODUCTS:
//       return {
//         ...state,
//         loading: true,
//         products: payload,
//       };
//     case GET_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         products: payload,
//       };
//     case GET_PRODUCTS_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: payload,
//       };

//     default:
//       return state;
//   }
// };

// get Product details state + reducer

const getProductDetails = {
  product: {},
  loading: false,
  error: null,
};
export const getProductDetailsReducer = (
  state = getProductDetails,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCTS_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    case GET_PRODUCTS_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GET_PRODUCTS_DETAILS_RESET:
      return {
        ...state,
        product: {},
      };

    default:
      return state;
  }
};

//user login, registering state + reducer
const user = {
  users: null,
  loading: false,
  errors: null,
  accesstoken: null,
};

export const userReducer = (state = user, { type, payload }) => {
  switch (type) {
    case SIGNUP:
    case SIGNIN:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_FAIL:
    case SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        users: payload,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        accesstoken: payload,
      };
    default:
      return state;
  }
};

//Cart reducer state + reducer

const cart = {
  cartItems: [],
};

export const cartReducer = (state = cart, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;

      const existItem = state.cartItems.find((i) => i.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existItem.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== payload),
      };

    default:
      return state;
  }
};

//edit and delete reducer

export const updateDeleteReducer = (
  state = initProducts,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_PRODUCTS:
    case DELETE_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PRODUCTS_FAIL:
    case DELETE_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.filter((el) => el._id !== payload._id),
      };
    case UPDATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.map((el) =>
          el._id === payload ? { ...el, ...payload } : el
        ),
      };

    default:
      return state;
  }
};

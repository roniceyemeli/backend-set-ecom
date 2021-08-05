import axios from "axios";
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
  SIGNIN,
  SIGNUP,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_FAIL,
  DELETE_PRODUCTS,
  DELETE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAIL,
  UPDATE_PRODUCTS,
  UPDATE_PRODUCTS_FAIL,
  UPDATE_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCTS,
  });
  try {
    let res = await axios.post("/user/products", newProduct);
    dispatch({
      type: ADD_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};

export const addCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/user/products/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      sold: data.sold,
      qty,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const getProds = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
  });
  try {
    const { data } = await axios.get("/user/products");
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
//get products as an Admin
// export const getProdsAdmin = () => async (dispatch) => {
//   dispatch({
//     type: GET_PRODUCTS,
//   });
//   try {
//     const { data } = await axios.get("/user/products");
//     dispatch({
//       type: GET_PRODUCTS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_PRODUCTS_FAIL,
//         payload:
//         error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

export const getProdDetails = (id) => async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS_DETAILS,
    });
    try {
      const { data } = await axios.get(`/user/products/${id}`);
  
      dispatch({
        type: GET_PRODUCTS_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_DETAILS_FAIL,
          payload:
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

export const rmvProdDetails = () => async(dispatch) => {
    dispatch({
        type: GET_PRODUCTS_DETAILS_RESET,
    });
};

export const signUp = (newUser) => async (dispatch) => {
  dispatch({
    type: SIGNUP,
  });
  try {
    let res = await axios.post("/user/register", newUser);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response.data,
    });
  }
};

export const signIn = (user) => async (dispatch) => {
  dispatch({
    type: SIGNIN,
  });
  try {
    let res = await axios.post("/user/login", user);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data,
    });
      localStorage.setItem('token',res.data.accesstoken)
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteProduct = (id) => async(dispatch) =>{
  dispatch({
    type: DELETE_PRODUCTS,
  });
  try {
    let res = await axios.delete(`/user/products/${id}`)
    dispatch({
      type: DELETE_PRODUCTS_SUCCESS,
      payload:res.data
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCTS_FAIL,
      payload: error
    });
  }
};

export const editProduct = (id,name, price, description, imageUrl) => async(dispatch) =>{
  dispatch({
    type: UPDATE_PRODUCTS,
  });
  try {
    const productEdited = {name, price, description, imageUrl}
    let res = await axios.put(`/user/products/${id}`, productEdited);
    console.log("test edit")
    dispatch({
      type: UPDATE_PRODUCTS_SUCCESS,
      payload: res.data
    })
    
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCTS_FAIL,
      payload: error
    })
  }
}

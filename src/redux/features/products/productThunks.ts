import { getProducts } from "@/services/productServices";
import { getProductsFailure, getProductsStart, getProductsSuccess } from "./productSlice";
import { AppThunk } from "@/redux/store";

export const fetchProducts = (): AppThunk => async (dispatch) => {
    try {
        dispatch(getProductsStart());
        const products = await getProducts();
        dispatch(getProductsSuccess(products));
    } catch (error) {
        dispatch(getProductsFailure(error?.message));
    }
};

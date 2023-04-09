import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        productCategory: "Doe",
        productFreshness: "Doe",
        productPrice: "Doe",
        image: "Doe",
        additionalDescription: "Doe",

    }

];

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: initialState
    },
    reducers: {
        tambahProduct: (state, action) => {
            const newProduct = {
                ...action.payload,
            };
            state.products = [...state.products, newProduct]
        },
        hapusProduct: (state, action) => {
            Swal.fire({
                title: `Are you sure delete  ?`,
                showDenyButton: true,
                confirmButtonText: "Yeah sure",
                denyButtonText: `No, let me think`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(` deleted`, "", "success");
                    state.products = state.products.filter((item) => {
                        return item.id !== action.payload
                    })
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        }
    }
})

export const { tambahProduct, hapusProduct } = productSlice.actions
export default productSlice.reducer
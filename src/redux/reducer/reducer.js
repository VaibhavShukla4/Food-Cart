const INIT_STATE ={
      carts: []
}
export const cartReducer =(state = INIT_STATE, action ) => {
    switch (action.type) {
        //add items to cart array
        case  "AddToCart" :
            
        const itemIndex =state.carts.findIndex((element) => element.id === action.payload.id)
            if(itemIndex >= 0){

                state.carts[itemIndex].qnty +=1 ;
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }
            else{

                const temp ={...action.payload, qnty: 1};

                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
  
            }
            // break;
            case 'RemoveFromCart':
                //filter out those elements whose id doesNot match with payload action
                // in other words if user clicks on delete for one item then return
                // those elements from carts array who are not clicked on delete icon.
                const data = state.carts.filter((element) => element.id !== action.payload)
                return {
                    ...state,
                    carts: data
                }
                // break;

            case 'RemoveSingleQuantity' :
                const itemIndexDec = state.carts.findIndex((element) => element.id === action.payload.id)
                       if(state.carts[itemIndexDec].qnty >= 1) {
                        state.carts[itemIndexDec].qnty -=1;

                        return {
                            ...state,
                            carts: [...state.carts]
                        }
                       }
                       else if(state.carts[itemIndexDec].qnty ===1) {
                        const data =state.carts.filter((element) => element.id !== action.payload)

                        return{
                            ...state,
                            carts: data
                        }
                       }

                       break;
                       default: return state;
                       

    }
}




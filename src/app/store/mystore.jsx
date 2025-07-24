import { create } from 'zustand';
const useStore = create((set, get) => ({
  myData: [],
  notification: null, 


  addtobasket: (newProduct) => {
    set((state) => {
      const existingProduct = state.myData.find((item) => item.id === newProduct.id);

      if (existingProduct) {
        return {
          ...state,
          notification: {
            message: "این محصول قبلاً در سبد شما وجود دارد!",
            type: "warning",
          },
        };
      }

 
      return {
        myData: [...state.myData, { ...newProduct, quantity: 1 }],
        notification: {
          message: "محصول با موفقیت به سبد اضافه شد !",
          type: "success",
        },
      };
    });
  },

  // تابع پاک کردن نوتیفیکیشن
  clearNotification: () => set({ notification: null }),


  ///remove///
  removeFromBasket: (productId) => {
    set((state) => ({
      myData: state.myData.filter((item) => item.id !== productId),
    }));
  },

  increaseQuantity: (productId) => {
    set((state) => ({
      myData: state.myData.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  },

  decreaseQuantity: (productId) => {
    set((state) => ({
      myData: state.myData.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }));
  },
  ///claer///
  clearBasket: () => {
    set({ myData: [] });
  },

  ///add icone sabad number is productesssss/
  getTotalItems: () => {
    return get().myData.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useStore;
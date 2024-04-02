import {create} from 'zustand'


export const useStore = create((set) => ({
    cepData:{},
    setCepData: (data) => set({cepData: data}),
}))
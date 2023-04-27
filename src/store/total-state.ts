import {atom, selector, useRecoilValue} from "recoil";

export const totalState = atom<number>({
    key: 'totalState',
    default: 0
})

const totalStateSelector = selector<number>({
    key: 'totalStateSelector',
    get: ({ get }) => get(totalState)
})

export const useTotalState = () : number => useRecoilValue<number>(totalStateSelector);

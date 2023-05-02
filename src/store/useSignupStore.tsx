import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSignupStore = create(
    // persist( //로컬스토리지나 다른 영속성 레이어에 저장할때 사용되는 라이브러리
    (set) => ({
        userName: '',
        userId: '',
        password: '',
        confirmPwd: '',
        setUserName: (userName: any) => set({ userName }),
        setUserId: (userId: any) => set({ userId }),
        setPassword: (password: any) => set({ password }),
        setConfirmPwd: (confirmPwd: any) => set({ confirmPwd }),
    })
    // )
)
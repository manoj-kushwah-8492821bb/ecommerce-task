import toast from "react-hot-toast";
import { auth } from "../utils/firebase";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";

interface FormValueProps {
    isLogin: boolean;
    callback: any,
    formValue: {
        email: string;
        password: string;
    };
}

// manage auth
export function useManageAuth(payload: FormValueProps) {
    const { isLogin, formValue, callback } = payload;

    const authenticate = async () => {
        try {
            if (isLogin) {
                const userCredential = await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
                const token = await userCredential.user.getIdToken();
                sessionStorage.setItem('authToken', token);
                toast.success("Logged in successfully!");
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);
                const token = await userCredential.user.getIdToken();
                sessionStorage.setItem('authToken', token);
                toast.success("Registration successful!");
            }
        } catch (error) {
            if (error instanceof FirebaseError) {
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred");
            }
            throw error;
        }
    }

    return useMutation({ mutationFn: authenticate, onSuccess: () => callback() });
}

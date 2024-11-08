import { ShoppingBag, LogOut } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import CustomButton from '../component/common/CustomButton';

const Header = ({ isAdmin = false }: { isAdmin: boolean }) => {
    const navigate = useNavigate()
    const { items, setIsCartOpen, manageAuthToken, authToken } = useCartStore((state) => state);

    const logout = async () => {
        await auth.signOut();
        sessionStorage.removeItem('authToken');
        toast.success('logged out success')
        manageAuthToken()
    };

    useEffect(() => {
        manageAuthToken()
    }, [auth])
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">
                        <Link to='/'>ShopEase</Link>
                    </h1>
                    {!isAdmin && <button onClick={() => setIsCartOpen(true)} className="relative p-2 ml-auto text-gray-600 hover:text-gray-900">
                        <ShoppingBag className="w-6 h-6" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {items.length}
                            </span>
                        )}
                    </button>}

                    {authToken ?
                        <button
                            onClick={logout}
                            className="flex items-center gap-2 ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                        >
                            <LogOut className="w-6 h-6" />  Logout
                        </button> : <div className='flex gap-4 ml-4'>
                            <CustomButton title='Sign In' onClick={() => navigate('/auth/login')} isFilled={true} />
                            <CustomButton title='Sign Up' onClick={() => navigate('/auth/register')} />
                        </div>}

                </div>
            </div>
        </header>
    )
}

export default Header

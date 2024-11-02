import { useState } from 'react';
import { PlusCircle, Edit2 } from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import type { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { motion } from 'framer-motion'
import CustomButton from './common/CustomButton';

const ProductSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    price: Yup.number()
        .required('Price is required')
        .min(0, 'Price must be positive'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    image: Yup.string().url('Must be a valid URL').required('Image URL is required'),
});

export function NewProduct() {
    const { isProductOpen, setIsProductOpen } = useCartStore();
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const handleSubmit = async (values: Omit<Product, 'id'>, { resetForm }) => {
        try {
            // TODO: Implement product creation/update logic
            resetForm();
            setIsProductOpen(false)
            setEditingProduct(null);
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    if (!isProductOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsProductOpen(false)} />
            {/* Product Form */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md">
                    <div className="h-full overflow-auto flex flex-col p-4 sm:p-6 bg-white shadow-xl">
                        <h2 className="text-xl font-semibold mb-6">
                            {editingProduct ? 'Edit Product' : 'Add New Product'}
                        </h2>

                        <Formik
                            initialValues={editingProduct || {
                                title: '',
                                price: 0,
                                description: '',
                                category: '',
                                image: '',
                            }}
                            validationSchema={ProductSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="space-y-6">
                                    <div className="grid gap-2.5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <Field
                                                name="title"
                                                className="mt-1 px-3 border py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                            {errors.title && touched.title && (
                                                <div className="text-red-500 text-sm mt-1">{errors.title}</div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Price
                                            </label>
                                            <Field
                                                type="number"
                                                name="price"
                                                className="mt-1 px-3 border py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                            {errors.price && touched.price && (
                                                <div className="text-red-500 text-sm mt-1">{errors.price}</div>
                                            )}
                                        </div>

                                        <div className="">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Description
                                            </label>
                                            <Field
                                                as="textarea"
                                                name="description"
                                                rows={4}
                                                className="mt-1 px-3 border py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                            {errors.description && touched.description && (
                                                <div className="text-red-500 text-sm mt-1">{errors.description}</div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Category
                                            </label>
                                            <Field
                                                as="select"
                                                name="category"
                                                className="mt-1 px-3 border py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            >
                                                <option value="">Select a category</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="clothing">Clothing</option>
                                                <option value="home">Home</option>
                                            </Field>
                                            {errors.category && touched.category && (
                                                <div className="text-red-500 text-sm mt-1">{errors.category}</div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Image URL
                                            </label>
                                            <Field
                                                name="image"
                                                className="mt-1 px-3 border py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                            {errors.image && touched.image && (
                                                <div className="text-red-500 text-sm mt-1">{errors.image}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button
                                            type="submit"
                                            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                                        >
                                            {editingProduct ? (
                                                <>
                                                    <Edit2 className="w-4 h-4" />
                                                    Update Product
                                                </>
                                            ) : (
                                                <>
                                                    <PlusCircle className="w-4 h-4" />
                                                    Add Product
                                                </>
                                            )}
                                        </button>

                                        <CustomButton title="Cancel" onClick={() => {
                                            setIsProductOpen(false);
                                            setEditingProduct(null);
                                        }} />

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </motion.div>
        </div >
    );
}
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { PlusCircle, Edit2, } from 'lucide-react';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import type { Product } from '../../types';

const ProductSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    price: Yup.number()
        .required('Price is required')
        .min(0, 'Price must be positive'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    image: Yup.string().url('Must be a valid URL').required('Image URL is required'),
});

export function AdminDashboard() {
    const [editingProduct, setEditingProduct] = React.useState<Product | null>(null);

    const handleSubmit = async (values: Omit<Product, 'id'>, { resetForm }) => {
        try {
            if (editingProduct) {
                await updateDoc(doc(db, 'products', String(editingProduct.id)), values);
            } else {
                await addDoc(collection(db, 'products'), values);
            }
            resetForm();
            setEditingProduct(null);
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const handleDelete = async (productId: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await deleteDoc(doc(db, 'products', String(productId)));
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <Field
                                    name="title"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {errors.price && touched.price && (
                                    <div className="text-red-500 text-sm mt-1">{errors.price}</div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <Field
                                    as="textarea"
                                    name="description"
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {errors.image && touched.image && (
                                    <div className="text-red-500 text-sm mt-1">{errors.image}</div>
                                )}
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
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
                                {editingProduct && (
                                    <button
                                        type="button"
                                        onClick={() => setEditingProduct(null)}
                                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Star } from 'lucide-react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
// import { useAuth } from '../hooks/useAuth';

interface ReviewFormProps {
    productId: number;
    onSuccess: () => void;
}

const ReviewSchema = Yup.object().shape({
    rating: Yup.number()
        .required('Rating is required')
        .min(1, 'Rating must be at least 1')
        .max(5, 'Rating must be at most 5'),
    comment: Yup.string()
        .required('Comment is required')
        .min(10, 'Comment must be at least 10 characters')
        .max(500, 'Comment must be at most 500 characters'),
});

export function ReviewForm({ productId, onSuccess }: ReviewFormProps) {
    const { currentUser } = auth

    if (!currentUser) {
        return (
            <div className="text-center py-4">
                Please sign in to leave a review.
            </div>
        );
    }
    return (
        <Formik
            initialValues={{ rating: 5, comment: '' }}
            validationSchema={ReviewSchema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    await addDoc(collection(db, 'reviews'), {
                        productId,
                        userId: currentUser?.uid,
                        email: currentUser?.email,
                        rating: values.rating,
                        comment: values.comment,
                        createdAt: new Date(),
                    });
                    resetForm();
                    onSuccess();
                } catch (error) {
                    console.error('Error adding review:', error);
                }
            }}
        >
            {({ values, errors, touched }) => (
                <Form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Rating
                        </label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Field key={star} name="rating">
                                    {({ field }) => (
                                        <button
                                            type="button"
                                            onClick={() => field.onChange({
                                                target: { name: 'rating', value: star }
                                            })}
                                            className="focus:outline-none"
                                        >
                                            <Star
                                                className={`w-6 h-6 ${star <= values.rating
                                                    ? 'fill-yellow-400 stroke-yellow-400'
                                                    : 'stroke-gray-300'
                                                    }`}
                                            />
                                        </button>
                                    )}
                                </Field>
                            ))}
                        </div>
                        {errors.rating && touched.rating && (
                            <div className="text-red-500 text-sm mt-1">{errors.rating}</div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Review
                        </label>
                        <Field
                            as="textarea"
                            name="comment"
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Share your thoughts about this product..."
                        />
                        {errors.comment && touched.comment && (
                            <div className="text-red-500 text-sm mt-1">{errors.comment}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        Submit Review
                    </button>
                </Form>
            )}
        </Formik>
    );
}
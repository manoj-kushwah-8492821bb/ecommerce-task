import { useQuery } from '@tanstack/react-query';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { Star } from 'lucide-react';
import { db } from '../utils/firebase';
import { ReviewForm } from './ReviewForm';
import type { Review } from '../types';

interface ReviewsProps {
  productId: number;
}

export function Reviews({ productId }: ReviewsProps) {
  const { data: reviews, refetch } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: async () => {
      const q = query(
        collection(db, 'reviews'),
        where('productId', '==', productId),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
    }
  });

  const averageRating = reviews?.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <div className="space-y-8">
      <div className="border-t border-b py-4">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${
                  star <= Math.round(averageRating)
                    ? 'fill-yellow-400 stroke-yellow-400'
                    : 'stroke-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-lg font-medium">
            {averageRating.toFixed(1)} out of 5
          </span>
          <span className="text-gray-500">
            ({reviews?.length || 0} {reviews?.length === 1 ? 'review' : 'reviews'})
          </span>
        </div>
      </div>

      <ReviewForm productId={productId} onSuccess={refetch} />

      <div className="space-y-6">
        {reviews?.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? 'fill-yellow-400 stroke-yellow-400'
                        : 'stroke-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{review.userName}</span>
              <span className="text-gray-500 text-sm">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
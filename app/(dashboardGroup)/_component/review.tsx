"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createReview } from "../_action/createReview";

type ReviewProps = {
  paymentId: string;
};

const Review = ({ paymentId }: ReviewProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (!rating) {
      return;
    }

    if (!comment.trim()) {
      return;
    }

    // const reviewData = {
    //   rating,
    //   comment: comment.trim(),
    // };

    const reviewData = {
      paymentId,
      rating,
      comment: comment.trim(),
    };

    const result = await createReview(reviewData);
    console.log(result);
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full cursor-pointer rounded-md bg-green-500 px-4 py-2 text-white transition-all duration-200 hover:bg-green-600">
        Review
      </DialogTrigger>

      <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
        <div className="space-y-6 pt-3">
          {/* Rating */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Your Rating
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Rate your experience from 1 to 5 stars.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => {
                const active = star <= (hoverRating || rating);

                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="cursor-pointer rounded-md p-1 transition-transform duration-150 hover:scale-110 focus:outline-none"
                    aria-label={`Rate ${star} out of 5`}
                  >
                    <Star
                      className={`h-8 w-8 transition-colors ${
                        active
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300 dark:text-gray-700"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {rating > 0 && (
              <p className="text-sm font-medium text-yellow-500">
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </p>
            )}
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <label
              htmlFor="review-comment"
              className="text-sm font-semibold text-gray-900 dark:text-white"
            >
              Your Comment
            </label>

            <Textarea
              id="review-comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us about your experience..."
              className="min-h-32 resize-none border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
              maxLength={500}
            />

            <div className="flex justify-end">
              <span className="text-xs text-gray-400">
                {comment.length}/500
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1 cursor-pointer"
              onClick={() => {
                setRating(0);
                setComment("");
              }}
            >
              Cancel
            </Button>

            <Button
              type="button"
              disabled={!rating || !comment.trim()}
              onClick={handleSubmit}
              className="flex-1 cursor-pointer bg-green-500 text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit Review
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Review;

"use client"
import { notFound } from "next/navigation";

interface ReviewDetailsProps {
  params: {
    reviewId: string;
    productId: string;
  }
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params }: ReviewDetailsProps) {
  const random = getRandomInt(2)
  if (random === 1) {
    throw new Error("Error loading review")
  }

  if (parseInt(params.reviewId) > 1000) notFound();
  return (
    <h1>Review {params.reviewId} for product {params.productId}</h1>
  )
}
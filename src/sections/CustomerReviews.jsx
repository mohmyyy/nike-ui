import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="flex justify-center items-center flex-col max-container">
      <h2 className="font-palanquin text-4xl text-center font-bold">
        What Our <span className="text-coral-red">Customers </span> Say?
      </h2>
      <p className="mt-4 lg:max-w-lg info-text text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

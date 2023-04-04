import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<AiFillStar key={i} className="inline-block text-yellow-500" />);
    }

    if (hasHalfStar) {
        stars.push(<AiFillStar key={fullStars} className="inline-block text-yellow-500" />);
    }

    const emptyStars = 5 - stars.length;

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<AiOutlineStar key={fullStars + (hasHalfStar ? 1 : 0) + i} className="inline-block text-gray-300" />);
    }

    return (
        <div className="mt-2">
        {stars}
        </div>
    );
    };
export default Rating
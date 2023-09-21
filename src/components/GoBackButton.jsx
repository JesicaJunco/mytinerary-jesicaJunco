import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleGoBack}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  shadow-sm font-semibold text-base md:text-xl text-white hover:shadow-2xl hover:bg-purple-900 border-2 border-opacity-50 border-white pt-1.5 pb-2 px-3 my-4"
        >
            Go Back
        </button>
    );
};

export default GoBackButton;
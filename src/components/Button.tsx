interface ButtonProps {
    testo: string;
    type?: "button" | "submit" | "reset";
    /* onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>; */
}

const Button: React.FC<ButtonProps> = ({ testo, type }) => {
    return (
        <button
            type={type}
            className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
            {testo}
        </button>
    );
};

export default Button;

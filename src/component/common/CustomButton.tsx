
const CustomButton = (props: any) => {
    const { title, onClick, isFilled = false } = props

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 border px-4 py-2 rounded-lg  ${isFilled ? 'bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600 ' : "border-stone-300 text-black"}  transition-colors`}
        >
            {title}
        </button>
    )
}

export default CustomButton

import Qr_Image from "../assets/image-qr-code.png";

const CardContainer = () => {
    return (
        <div className="p-4 bg-white font-Outfit rounded-2xl flex flex-col justify-center items-center scale-110 drop-shadow-xl">
            <img src={Qr_Image} alt="qr-image" className="w-[250px] rounded-lg" />
            <div className="w-[240px] text-center">
                <h1 className="font-bold text-[18px] text-Dark-blue pt-5 leading-6">
                    Improve your front-end skills by buliding projects
                </h1>
                <p className="py-3 text-[14px] font-normal text-Grayish-blue leading-4">
                    Scan the QR code to visit Frontend   Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    )
}

export default CardContainer

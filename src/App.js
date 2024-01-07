import React, { useRef } from "react";

const App = () => {

    const fileReader = new FileReader()
    const imgRef = useRef(null);

    const editImage = async (base64) => {
        let rustApp = null

        try {
            rustApp = await import("../pkg")
        } catch (e) {
            console.error(e)
            return
        }

        if (rustApp) {
            let img_data_url = rustApp.grayscale(base64)
            imgRef.current.src = img_data_url;
        }
    }

    fileReader.onloadend = () => {
        const base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/,
            ""
        )
        editImage(base64)
    }

    const handleImageUpload = (input) => {
        fileReader.readAsDataURL(input.files[0])
    }

    return (
        <div>
            <div className="bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0"></div>
            <div className="bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0"></div>
            <div className="bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0"></div>
            <div className="flex items-center justify-center min-h-screen h-100 relative z-100">
                <div className="bg-white bg-opacity-95 border shadow-lg p-10 text-center">
                    <h1 className="text-5xl mb-8">Image Transform</h1>
                    <p className="mb-4">
                        Privately transform images to grayscale directly in your browser, ensuring confidentiality without server involvement.
                    </p>
                    <label className="bg-pink-600 text-white w-full p-6 block cursor-pointer">
                        <input type="file" id="upload" accept=".png" className="hidden" onChange={(e) => handleImageUpload(e.target)} />
                        Upload Image
                    </label>
                    <img className="w-auto mx-auto mt-4" ref={imgRef} />
                </div>
            </div>
        </div>
    );
};

export default App;
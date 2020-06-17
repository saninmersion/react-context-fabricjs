import React, {
    useContext,
}                        from "react"
import { fabric }        from "fabric"
import { FabricContext }          from "../../context/FabricContext"

const supportedImageTypes = ["image/png", "image/apng", "image/bmp", "image/gif", "image/x-icon", "image/jpeg"]

const FabricImage = () => {
    const { canvas } = useContext(FabricContext)

    const addTextBox = (e) => {
        document.getElementById("fabric-image-upload").click()
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        let fileType = e.target.files[0].type;
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            if (supportedImageTypes.indexOf(fileType) !== -1) {
                fabric.Image.fromURL(reader.result, function(img) {
                    img.scaleToWidth(100);
                    canvas.add(img);
                });
            } else if (fileType === 'image/svg+xml') {
                fabric.loadSVGFromURL(reader.result, function(objects, options) {
                    let svg = fabric.util.groupSVGElements(objects, options);
                    svg.scaleToWidth(100);
                    canvas.add(svg);
                });
            }

        }, false);

        if (file) {
            reader.readAsDataURL(file)
            document.getElementById("fabric-image-upload").value = null
        }
    };

    return (
        <>
            <button onClick={addTextBox}>Add Image</button>
            <input type="file" id="fabric-image-upload" accept="image/*" onChange={onImageUpload}
                   style={{ display: "none" }}/>
        </>
    )
}

export default FabricImage

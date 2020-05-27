import React, {useContext} from 'react';
import {fabric} from 'fabric'
import {FabricContext} from "../../context/FabricContext";

const FabricImage = () => {
    const {canvas} = useContext(FabricContext);
    const supportedImageTypes = ['image/png', 'image/apng', 'image/bmp', 'image/gif', 'image/x-icon', 'image/jpeg']

    const addTextBox = (e) => {
        document.getElementById('fabric-image-upload').click()
    }

    const onImageUpload = (e) => {
        let fileType = e.target.files[0].type;
        let url = URL.createObjectURL(e.target.files[0]);
        console.log(e.target.files[0], fileType, url);
        document.getElementById("fabric-image-upload").value = null;

        if (supportedImageTypes.indexOf(fileType) !== -1) {
            fabric.Image.fromURL(url, function(img) {
                img.scaleToWidth(180);
                canvas.add(img);
            });
        } else if (fileType === 'image/svg+xml') {
            fabric.loadSVGFromURL(url, function(objects, options) {
                let svg = fabric.util.groupSVGElements(objects, options);
                svg.scaleToWidth(180);
                canvas.add(svg);
            });
        }
    };

    return (
        <>
            <button onClick={addTextBox}>Add Image</button>
            <input type="file" id="fabric-image-upload" accept="image/*" onChange={onImageUpload} style={{display: "none"}}/>
        </>
    );
};

export default FabricImage;

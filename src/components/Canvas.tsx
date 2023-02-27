import React, {Component, FC} from 'react';
import "../styles/Canvas.scss";


type CanvasState = {

}

const Canvas: FC<CanvasState> = () => {

    return (
        <div className="canvas">
            <canvas width={600} height={600} ></canvas>
        </div>
    )
}
export default Canvas;
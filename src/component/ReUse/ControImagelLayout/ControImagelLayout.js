import React from 'react'
import Button from '../Button/Button'
import ImageComponent from '../ImageComponent/ImageComponent'

function ControlLayout({ handleClose, handleClickPrev, handleClickNext, src }) {
    return (
        <div className="control wide">
            <Button className="control__close" handleClick={handleClose}>
                <i className="fas fa-times close"></i>
            </Button>

            {handleClose &&
                <Button className="control__prev" handleClick={handleClickPrev}>
                    <i className="fas fa-chevron-left"></i>
                </Button>}

            {handleClose && <ImageComponent
                className="control__image"
                src={src}
                alt={"Đây là hình ảnh"} />}

            {handleClose &&
                <Button className="control__next" handleClick={handleClickNext}>
                    <i className="fas fa-chevron-right"></i>
                </Button>}

        </div>
    )
}

export default ControlLayout
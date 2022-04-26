import React from 'react'
import Button from '../Button/Button'
import ImageComponent from '../ImageComponent/ImageComponent'
import Row from '../Row/Row'
import Column from '../Column/Column'
import Text from '../Text/Text'

function ControlLayout( {handleClickClose, handleClickPrev, handleClickNext, dataPassing}) {
    return (
        <Row className="control wide">
            {handleClickClose &&
            <Button className="control__close" handleClick={handleClickClose}>
                <i className="fas fa-times close"></i>
            </Button>}
            
            {handleClickPrev &&
                <Button className="control__prev" handleClick={handleClickPrev}>
                    <i className="fas fa-chevron-left"></i>
                </Button>}

            <Column className='content bg-info'>
               <ImageComponent
                    className="control__image pt-4"
                    src={dataPassing.avatar}
                    alt={"Đây là hình ảnh"} />
                <Text className='h1 text-center text-light'>{dataPassing.name}</Text>
                <Text className='h1 text-center text-light'>{dataPassing.job}</Text>
            </Column>

            {handleClickNext &&
                <Button className="control__next" handleClick={handleClickNext}>
                    <i className="fas fa-chevron-right"></i>
                </Button>}
        </Row>
    )
}

export default ControlLayout
import React, {useState} from 'react';
import Modal from 'react-modal';
import './RobotCard.scss';

const RobotCard = ({image,name,email,code,city,phone}) => {

    const [modalIsOpen, setModalIsOpen]=useState(false);

    return (
        <>
        <div>
            <div className='card'>
            <a className='link' onClick={()=>setModalIsOpen(true)}>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            </a>
            </div>

           
            <Modal className='modal' isOpen={modalIsOpen}>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <h4>email: {email}</h4> 
            <h4>zipcode: {code}</h4>
            <h4>city: {city}</h4>
            <h4>phone: {phone}</h4>
            <a href="#" className='link' onClick={()=>setModalIsOpen(false)}>hide details</a>
            </Modal>
        </div>
        </>
    )
}

export default RobotCard

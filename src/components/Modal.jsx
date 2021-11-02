import React, {useState} from 'react';
import { Modal } from 'react-bootstrap'
import data from '../data.json'

export const ModalInfo = ({id}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>           
      <button onClick={handleShow} type="button" className="btn me-3" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Detalle</button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <h4 style={{textAlign: 'center'}}>{data[id].title}</h4>
          <h5>Detalles del proyecto:</h5>
          <p>{data[id].detalle}</p>
          <hr />
          <p>El proyecto fue desarrollado con:</p>
          {
            data[id].tecnologias.map( e => <li>{e}</li>)
          }       
          <hr />
          <p>Accesos a la página:</p>
          {
            data[id].Accesos.map( (e, index) => <li key={index} >{e}</li>)
          }   
        </Modal.Body>
      </Modal>
    </div>
  )
}

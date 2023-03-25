import { useEffect, useRef } from "react";
import Portal from "./Portal";

React.useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  const errorModal = (props) => {
    return (
    
            <Modal show={props.show} backdrop='static'>
                <Modal.Header>
                    {props.modalHeaderText}
                </Modal.Header>
                <Modal.Body>
                    <p>{props.modalBodyText}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="danger" onClick={props.closeModal}>{props.okButtonText}</Button>
                </Modal.Footer>
            </Modal>
        
    )
}




const Modal = () => {

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            // if (e.key === 'Escape') {
                // onClose()
            // }
        })

        return () => {
            window.removeEventListener('keydown')
        }
    }, [])

    return ( 
        <Portal>
            <div className="overlay">
                <div className="content">
                    hello world
                </div>
            </div>
        </Portal>
    );
}
 
export default Modal;
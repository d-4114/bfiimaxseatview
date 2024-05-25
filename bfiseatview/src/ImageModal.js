

const ImageModal = ({seat, onClose}) => {

    return <div className="modal-overlay" onClick={onClose}>
        <img src={require(`./img/${seat}.jpg`)} />
    </div>
}

export default ImageModal;
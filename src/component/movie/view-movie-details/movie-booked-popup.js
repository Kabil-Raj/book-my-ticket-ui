
import "./movie-booked-popup.css"

export const BookedPopUp = ({ open, description, onClose }) => {
    if (!open) return null;
    return (
        <div className="pop-overlay">
            
            <div className="pop-model">
                <p><span>Hurray!!</span>{description}</p>
                <button className="btn btn-primary" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
export default function Toast({ description, handleClose }) {
  return (
    <div className="toast-wrapper">
      <div className="toast-icon-wrapper">
        <div className="toast-icon" />
      </div>
      <div className="toast-description">{description}</div>
      <div className="toast-icon-wrapper" onClick={handleClose}>
        <div className="toast-close-icon" />
      </div>
    </div>
  );
}

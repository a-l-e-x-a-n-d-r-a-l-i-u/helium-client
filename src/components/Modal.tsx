const Modal = (modalId: string, modalTitle: string) => {
  /* Copy from Bootstrap.js
    data-toggle="modal" opens the modal window
    data-target="#myModal" points to the id of the modal */

  return (
    <div id={modalId} role='dialog' className='modal-dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-content'>
        <div className='modal-header'>
          <button type='button' className='close' data-dismiss='modal'>
            &times;
          </button>
          <h1 id='exampleModalLabel'>{modalTitle}</h1>
        </div>
        <div className='modal-body'>
          <p>Some text in the modal.</p>
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-default' data-dismiss='modal'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

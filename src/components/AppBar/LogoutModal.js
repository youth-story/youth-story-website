import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './LogoutModal.css';

function LogoutModal({ showModal, handleClose, handleLogout }) {
  return (
    <div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-inner">
              <Modal.Header closeButton>
                <Modal.Title><h3>Logout Confirmation</h3></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Are you sure you want to log out?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button style={{margin: '10px', padding: '5px', border: 'none', borderRadius: '10px', color: 'white', backgroundColor: '#850202'}} variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button style={{borderRadius: '10px', padding: '5px', border: 'none', color: 'white', backgroundColor: '#850202'}} variant="primary" onClick={handleLogout}>
                  Logout
                </Button>
              </Modal.Footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoutModal;

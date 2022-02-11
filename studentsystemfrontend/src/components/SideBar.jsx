import * as React from "react";
import { useState, useEffect } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function SideBar({showSideBar, setShowSideBar}) {
    const handleClose = () => setShowSideBar(false);
  
    return (
      <>
        <Offcanvas show={showSideBar} width={10} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Asset Management</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              poop
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
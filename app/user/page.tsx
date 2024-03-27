"use client"
import React, { useState } from "react";
import './user.css';
import Modal from './modal';
//import LinkButton from './linkbutton';

export default function UserPage() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);


    const openAddUserModal = () => {
        setModalContent(
            <form>
                <label>Name: <input type="text" name="name" className="input-border" /></label>
                <label>Username: <input type="text" name="username" className="input-border" /></label>
                <label>Password: <input type="password" name="password" className="input-border" /></label>
                <label>ID Number: <input type="text" name="idNumber" className="input-border" /></label>
                <button type="submit" className="submit-border">Submit</button>
            </form>
        );
        setModalOpen(true);
    };

    const openRemoveUserModal = () => {
        setModalContent(
            <form>
                <label>Username: <input type="text" name="username" className="input-border"/></label>
                <label>ID Number: <input type="text" name="idNumber" className="input-border"/></label>
                <button type="submit" className="submit-border">Submit</button>
            </form>
        );
        setModalOpen(true);
    };

    const openManageUserModal = () => {
        setModalContent(
            <form>
                <label>New Username: <input type="text" name="username" className="input-border" /></label>
                <label>New Password: <input type="password" name="password" className="input-border" /></label>
                <button type="submit" className="submit-border">Submit</button>
            </form>
        );
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <div className="page-center">
                User Management
            </div>
            <div className="buttons-container">
                <div className="add-user-block">
                <div className="add-user-btn">
                    <button onClick={openAddUserModal}>ADD A USER</button>
                </div>
                    Use this button to add a new user to the website.
                </div>

                <div className="remove-user-block">
                    <div className="remove-user-btn">
                        <button onClick={openRemoveUserModal}>REMOVE USER</button>
                    </div>
                    Use this button to remove any existing users.
                </div>

                <div className="manage-user-block">
                    <div className="manage-user-btn">
                        <button onClick={openManageUserModal}>MANAGE USERS</button>
                    </div>
                    Use this button to manage the current users.
                </div>
            </div>
        {isModalOpen && <Modal onClose={closeModal}>{modalContent}</Modal>}
        </div>
    );
}

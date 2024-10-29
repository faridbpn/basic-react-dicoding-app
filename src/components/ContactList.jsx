import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
    return (
        <div className="contact-list">
            {
                contacts.map((contacts) => (
                    <ContactItem key={contacts.id} {...contacts}/>
                ))
            }
        </div>
    );
}

export default ContactList;
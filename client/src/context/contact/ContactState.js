import React, { useReducer } from 'react';
import {v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { 
    ADD_CONTACT,
    DELETE_CONTACT ,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS

} from '../types';

const ContactState = props=>{
    const initialState = {
        contacts:[
            {
                id: 1,
                name: 'Mill Copper',
                email: 'millicryus@gmail.com',
                phone: '123-456-789',
                type: 'Professional'
            },

            {
                id: 2,
                name: 'John Smith',
                email: 'johnsmith@gmail.com',
                phone: '153-421-889',
                type: 'Personal'
            },

            {
                id: 2,
                name: 'Yubin Bista',
                email: 'yubinbista@gmail.com',
                phone: '123-434-789',
                type: 'Personal'
            }
        ]
    };

    const [state, dispatch] = useReducer(
        contactReducer,initialState
    );

    // add contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, 
            payload: contact });
    }

    // delete contact

    //set current contact

    // clear current contact

    //update contact

    // filter contact


    // clear contact

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            addContact
        }}>
             
            {props.children}
        </ContactContext.Provider>

    )
};

export default ContactState;
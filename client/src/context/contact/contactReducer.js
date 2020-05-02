import { 
    ADD_CONTACT,
    DELETE_CONTACT ,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER

} from '../types';

export default (state, action) => {

    switch(action.type){
        case ADD_CONTACT:
        return {
            ...state,
            contacts: [...state.contacts, action.payload]
        };

        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ?
                    action.payload: contact)
            };

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                contact => contact._id !== action.payload)

            };

            case SET_CURRENT:
                return {
                    ...state,
                    current: action.payload
                };

                case SET_CURRENT:
                    return {
                        current: null

                    };

                case FILTER_CONTACTS:
                    return {
                        ...state,
                        filtered: state.contacts.filter(contact => {
                            const regex = new RegExp(`${action.payload}`, 'gi');
                            return contact.name.match(regex) || contact.email.match(regex)
                        })

                    };

                    case CLEAR_FILTER:
                        return
                    
           

        default:
            return {
                ...state,
                filtered: null
            }

            
    }
}
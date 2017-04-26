import React from 'react';
import ContactInfo from './ContactInfo';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                { name : 'Abet', phone : '010-0000-0001' },
                { name : 'Betty', phone : '010-0000-0002' },
                { name : 'Charlie', phone : '010-0000-0003' },
                { name : 'David', phone : '010-0000-0004' }
            ]
        }
    }

    // rendering 내부에 메소드 생성
    render() {
        const mapToComponents = (data) => {
            return data.map( (contact, index) => {
                return (<ContactInfo contact={contact} key={index}/>);
            });
        };
        return (
            <div>
                <h1>Contacts</h1>
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }
}

export default Contact;

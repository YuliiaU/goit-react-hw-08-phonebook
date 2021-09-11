import Container from '../components/Container/Container';
import Form from '../components/Form/Form';
import Contacts from '../components/Contacts/Contacts';
import Filter from '../components/Filter/Filter';
// import AppBar from './Components/AppBar/AppBar';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../redux/contacts';
// import { Switch, Route } from 'react-router-dom';
// import HomeView from './views/HomeView';
// import LoginView from './views/LoginView';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(ContactsView);
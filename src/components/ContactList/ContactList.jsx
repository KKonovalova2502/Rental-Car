// import { useDispatch, useSelector } from 'react-redux';
// import Contact from '../Contact/Contact';
// import { selectFilteredContacts } from '../../redux/contacts/selectors';
// import { deleteContact } from '../../redux/contacts/operations';
// import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
// import { useState } from 'react';

// const ContactList = () => {
//   const contacts = useSelector(selectFilteredContacts);
//   const dispatch = useDispatch();

//   const [modalOpen, setModalOpen] = useState(false);
//   const [contactToDelete, setContactToDelete] = useState(null);

//   const openModal = (contact) => {
//     setContactToDelete(contact);
//     setModalOpen(true);
//   };

//   const handleConfirmDelete = () => {
//     dispatch(deleteContact(contactToDelete.id));
//     setModalOpen(false);
//     setContactToDelete(null);
//   };

//   const handleCancel = () => {
//     setModalOpen(false);
//     setContactToDelete(null);
//   };

//   return (
//     <>
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             <Contact data={contact} onDeleteClick={() => openModal(contact)} />
//           </li>
//         ))}
//       </ul>

//       <ConfirmDeleteModal
//         isOpen={modalOpen}
//         onClose={handleCancel}
//         onConfirm={handleConfirmDelete}
//         contactName={contactToDelete?.name}
//       />
//     </>
//   );
// };

// export default ContactList;

import { useReducer } from "react";
import styles from "./ContactsList.module.css";
import CreateContact from "../CreateContact/CreateContact";
import React from "react";

const initialContacts = [
  {
    id: 1,
    firstName: "Amit",
    lastName: "Sharma",
    contactType: "Personal",
    phoneNumber: "9876546546",
    email: "amit@gmail.com",
    gender: "Male",
  },
  {
    id: 2,
    firstName: "Alex",
    lastName: "Carey",
    contactType: "Business",
    phoneNumber: "978789445",
    email: "alex@gmail.com",
    gender: "Male",
  },
  {
    id: 3,
    firstName: "Adam",
    lastName: "Gilchrist",
    contactType: "Personal",
    phoneNumber: "979654889",
    email: "adamgilli@gmail.com",
    gender: "Male",
  },
  {
    id: 4,
    firstName: "Kumara",
    lastName: "Sangakarra",
    contactType: "Business",
    phoneNumber: "987121578",
    email: "Kumar@gmail.com",
    gender: "Male",
  },
];

const createContactInitialData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  contactType: "Personal",
  gender: "Male",
};

let previousId = initialContacts.length;

function reducer(contactsList, action) {
  if (action.type === "create") {
    const newContact = {
      ...action.newContact,
      id: previousId++,
    };
    console.log(newContact);
    return [...contactsList, newContact];
  }
  if (action.type === "update") {
    return contactsList.map((contact) => {
      if (contact.id === action.updateInfo.id) {
        return action.updateInfo;
      }
      return contact;
    });
  } else if (action.type === "delete") {
    return contactsList.filter((contact) => contact.id !== action.id);
  }
}

function ContactsList() {
  const [contactsList, dispatch] = useReducer(reducer, initialContacts);
  const [createContact, setCreateContact] = React.useState(false);
  const [updateContact, setUpdateContact] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState(0);

  function handleCreateContact() {
    setCreateContact(false);
  }

  function handleUpdateContact() {
    setUpdateContact(false);
  }

  function handleAddNewContact(newContact) {
    console.log(newContact);
    dispatch({
      type: "create",
      newContact,
    });
  }

  function handleUpdateExistingContact(updateInfo) {
    dispatch({
      type: "update",
      updateInfo,
    });
  }

  function handleDeleteContact(id) {
    dispatch({
      type: "delete",
      id,
    });
  }

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          setCreateContact(true);
        }}
      >
        <span className="material-symbols-outlined">add</span>
        <span className={styles.span}>Create contact</span>
      </button>
      <div className={styles.container}>
        <div className={styles.contactsInfo}>
          <div>
            Contacts<span>({contactsList.length})</span>
          </div>
          <div>
            Male
            <span>
              (
              {
                contactsList.filter((contact) => contact.gender === "Male")
                  .length
              }
              )
            </span>
          </div>
          <div>
            Female
            <span>
              (
              {
                contactsList.filter((contact) => contact.gender === "Female")
                  .length
              }
              )
            </span>
          </div>
          <div>
            Personal
            <span>
              (
              {
                contactsList.filter(
                  (contact) => contact.contactType === "Personal"
                ).length
              }
              )
            </span>
          </div>
          <div>
            Business
            <span>
              (
              {
                contactsList.filter(
                  (contact) => contact.contactType === "Business"
                ).length
              }
              )
            </span>
          </div>
        </div>
        <div className={`${styles.row} ${styles.headerRow}`}>
          <div className={styles.contactElement}>Name</div>
          <div className={styles.contactElement}>Email</div>
          <div className={styles.contactElement}>Phone number</div>
          <div className={styles.contactElement}>Contact type</div>
          <div className={styles.contactElement}>Gender</div>
          <div className={styles.emptyDiv}>Actions</div>
        </div>
        {contactsList.map((contact) => (
          <div
            key={contact.id}
            className={`${styles.contactRow} ${styles.row}`}
          >
            <div
              className={styles.contactElement}
            >{`${contact.firstName} ${contact.lastName}`}</div>
            <div className={styles.contactElement}>{contact.email}</div>
            <div className={styles.contactElement}> {contact.phoneNumber}</div>
            <div className={styles.contactElement}>{contact.contactType}</div>
            <div className={styles.contactElement}>{contact.gender}</div>
            <div className={styles.editPng}>
              <span
                onClick={() => {
                  setUpdateContact(true);
                  setSelectedContact(contact.id);
                }}
                className="material-symbols-outlined"
              >
                edit
              </span>
              <span
                onClick={() => handleDeleteContact(contact.id)}
                className="material-symbols-outlined"
              >
                delete
              </span>
            </div>
          </div>
        ))}
      </div>
      {createContact && (
        <CreateContact
          type="create"
          contact={createContactInitialData}
          handleContact={handleCreateContact}
          handleAddNewContact={handleAddNewContact}
        />
      )}
      {updateContact && (
        <CreateContact
          type="update"
          contact={contactsList[selectedContact - 1]}
          handleContact={handleUpdateContact}
          handleAddNewContact={handleUpdateExistingContact}
        />
      )}
    </div>
  );
}

export default ContactsList;

// Please create a Contact List app in React with CRUD operations. Kindly use dummy data to drive the app instead of APIs. The app should only use functional components. It should manage business and personal contacts.
// The app should also keep a running tally of the number of Male and Female Contacts and the number of Personal and Business Contacts.This information should be displayed in the UI

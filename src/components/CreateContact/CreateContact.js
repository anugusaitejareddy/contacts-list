import styles from "./CreateContact.module.css";
import React from "react";

function CreateContact({ type, contact, handleContact, handleNewContact }) {
  const [formData, setFormData] = React.useState(contact);

  function handleFormSubmit(e) {
    e.preventDefault();
    handleNewContact(formData);
    handleContact();
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBackground} onClick={handleContact}></div>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className={styles.input}
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName: e.target.value,
              })
            }
          />
          <div className={styles.borderBottom}></div>
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className={styles.input}
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName: e.target.value,
              })
            }
          />
          <div className={styles.borderBottom}></div>
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
          <div className={styles.borderBottom}></div>
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className={styles.input}
            required
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                phoneNumber: e.target.value,
              })
            }
          />
          <div className={styles.borderBottom}></div>
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.radioGroupLabel}>Contact type</div>
          <input
            type="radio"
            id="personal"
            name="contact-type"
            checked={formData.contactType === "Personal"}
            value="personal"
            onChange={() =>
              setFormData({
                ...formData,
                contactType: "Personal",
              })
            }
          />
          <label className={styles.radioLabel} htmlFor="personal">
            Personal
          </label>
          <input
            type="radio"
            id="business"
            name="contact-type"
            checked={formData.contactType === "Business"}
            value="business"
            onChange={() =>
              setFormData({
                ...formData,
                contactType: "Business",
              })
            }
          />
          <label className={styles.radioLabel} htmlFor="business">
            Business
          </label>
        </div>
        <div className={styles.btnWrapper}>
          <button
            type="submit"
            className={`${styles.button} ${styles.saveButton}`}
          >
            {type === "create" ? "Save" : "Update"}
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.cancelButton}`}
            onClick={handleContact}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateContact;

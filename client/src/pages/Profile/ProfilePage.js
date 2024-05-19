import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Box, Button } from "@mui/material";
import EditForm from "../../components/EditForm/EditForm";
const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "jyothi",
    image: "",
    address: { lane: "", city: "", state: "" },
    interest: "",
    bio: "",
    contact: { email: "", phone: "" },
    socialLinks: { facebook: "", twitter: "", linkedin: "" },
  });

  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  const handleEdit = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsModalOpen(false);
  };
  console.log(`profile:${profile.fullName}`);
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.glass}>
        <div className={styles.left}>
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <h1>Jyothi Kondupally</h1>
          <p>
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className={styles.line}></div>
          <p>
            phone no:
            <br />
            <span className={styles.input}>+91 8008376365</span>
          </p>
          <p>
            Email:
            <br />
            <span className={styles.input}>jyothikondupally@gmail.com</span>
          </p>
          <p>
            address:
            <br />
            <span className={styles.input}>miyapur, hyderadab , Telangana</span>
          </p>
          <button className={styles.btn} onClick={handleEdit}>
            Edit Profile
          </button>
        </div>
        <div className={styles.right}>
          <section>
            <h1>Interest:</h1>
            <ul>
              <li>sports </li>
              <li>planting</li>
              <li>watering</li>
              <li>dfghj</li>
              <li>sports </li>
              <li>planting</li>
              <li>watering</li>
              <li>dfghj</li>
            </ul>
          </section>
          <section>
            <h1>Score:</h1>
            <p className={styles.number}>
              <span>90</span>
            </p>
          </section>
          <section>
            <h1>Achievements:</h1>
            <div className={styles.card}>
              <img src="" alt="cup" />
              <p>hero</p>
            </div>
          </section>
          <div className={styles.icon}>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
          <div className={styles.closebtn} onClick={handleClose}>
            <CloseIcon fontSize="medium" />
          </div>
        </div>
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              boxShadow: 24,
              p: 2,
              height: "100%",
              overflowY: "auto",
            }}
          >
            <EditForm profile={profile} onSubmit={handleFormSubmit} />
            <Button onClick={handleCloseModal} variant="contained" color="grey">
              Cancel
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ProfilePage;

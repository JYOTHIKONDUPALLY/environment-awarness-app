import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const EditForm = ({ profile, onSubmit }) => {
  const [formData, setFormData] = useState(profile);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {image && <img src={image} alt="Profile" width="100" height="100" />}
        <Button variant="contained" component="label" color="primary">
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
      </Box>
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Bio"
        multiline
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box padding={2} margin="normal">
        <Typography variant="h6">Contact</Typography>
        <TextField
          label="Email"
          name="contact.email"
          value={formData.contact.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          name="contact.phone"
          value={formData.contact.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </Box>
      <Box padding={2} margin="normal">
        <Typography variant="h6">Address</Typography>
        <TextField
          label="Lane"
          name="address.lane"
          value={formData.address.lane}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          name="address.city"
          value={formData.address.city}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="State"
          name="address.state"
          value={formData.address.state}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default EditForm;

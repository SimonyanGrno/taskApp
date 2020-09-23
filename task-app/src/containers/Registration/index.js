import React, { useState, useContext, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

import { RegistrationContext } from '@/contexts/registrationContext';
import './styles.css';

const { Group, Control } = Form;

function Registration({ history }) {
  const [, dispatch] = useContext(RegistrationContext);
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [pic, setPic] = useState(null);
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleUploadChange = ({ target: { files } }) => {
    const [file] = files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = ({ target: { result } }) => {
        current.src = result;
        setPic(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!name.length || !education.length || !pic) {
      setValidated(true);
      return;
    }

    dispatch({
      type: 'REGISTRATION',
      payload: {
        name,
        education,
        pic,
      },
    });

    history.push('/user');
  };

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 mt-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div
            className="mb-2 imgParent"
            onClick={() => imageUploader.current.click()}
          >
            <img ref={uploadedImage} alt="" />
            <span>upload image</span>
          </div>

          <Group controlId="ProfPic">
            <Control
              type="file"
              required
              placeholder="Select Profile Picture"
              onChange={handleUploadChange}
              style={{ display: 'none' }}
              ref={imageUploader}
            />
            <Control.Feedback type="invalid">
              Profile Picture is required.
            </Control.Feedback>
          </Group>

          <Group controlId="Name">
            <Control
              type="text"
              autoComplete="off"
              required
              placeholder="Enter name"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
            <Control.Feedback type="invalid">
              Name is required.
            </Control.Feedback>
          </Group>

          <Group controlId="Education">
            <Control
              type="text"
              autoComplete="off"
              required
              placeholder="Enter education"
              value={education}
              onChange={({ target: { value } }) => setEducation(value)}
            />
            <Control.Feedback type="invalid">
              Education is required.
            </Control.Feedback>
          </Group>

          <div className="text-center mt-3">
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Registration;

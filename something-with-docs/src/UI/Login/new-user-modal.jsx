import React, { useEffect, useState } from "react";
import swal from "sweetalert";

import { Modal, Form, Button, Select } from "semantic-ui-react";
import { registerNewUser, login } from "../../services/authService";

import { useStoreActions } from "easy-peasy";
import { useHistory } from "react-router-dom";

const NewUserModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const setToken = useStoreActions(action => action.user.setToken);
  const history = useHistory();

  const handleSubmit = async () => {
    if (email.match(`[a-zA-Z0-9._-]+@[a-z]+.(com|in|net|org|edu)`) === null) {
      swal("Email Error", "Please Enter Email in the proper format", "error");
    } else if (firstName === "" || lastName === "") {
      swal("Name Error", "Empty First Or Last Name", "error");
    } else if (gender === "") {
      swal("Gender Error", "Gender Not Selected", "error");
    } else if (password === "" && password.length < 8) {
      swal("Password Error", "Password too short", "error");
    } else if (password !== repassword) {
      swal("Password Mismatch", "Passwords Don't Match", "error");
    } else {
      setLoading(true);
      const response = await registerNewUser(
        firstName,
        lastName,
        gender,
        email,
        password
      );
      if (response.status === 201) {
        swal("Account Created", "Press OK to Login.", "success").then(
          async () => {
            const response = await login(email, password);
            if (response.status === 200) {
              setToken(response.data.token);
              history.push("/");
            } else if (
              response.status === 400 &&
              response.data.non_field_errors[0] ===
                "Unable to log in with provided credentials."
            ) {
              swal("Error", "Email or Password seems incorrect!", "error");
            } else {
              swal("Oops!", "Something went wrong! Please Retry", "error");
            }
          }
        );
        setOpen(false);
      } else if (
        response.status === 400 &&
        response.data.user.username[0] ===
          "A user with that username already exists."
      ) {
        swal("Oops!", "Email ID Already Registered by another user", "warning");
      } else {
        swal("Oops!", "Something went wrong! Please Retry", "error");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const p = new URL(document.location).searchParams.get("newuser");
    if (p !== null) {
      setOpen(true);
    }
  }, []);

  return (
    <React.Fragment>
      <Modal
        closeIcon
        trigger={
          <p
            style={{ color: "#1E88BE", cursor: "pointer" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            New User?
          </p>
        }
        open={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>Create Account</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input onChange={e => setEmail(e.target.value)} />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <label>First Name</label>
                <input onChange={e => setFirstName(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input onChange={e => setLastName(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Gender</label>
                <Select
                  placeholder="Select"
                  options={[
                    { key: "M", value: "M", text: "Male" },
                    { key: "F", value: "F", text: "Female" }
                  ]}
                  onChange={(e, { value }) => setGender(value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Retype Password</label>
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  onChange={e => setRepassword(e.target.value)}
                />
              </Form.Field>
            </Form.Group>

            <Button
              floated="right"
              color="linkedin"
              loading={loading}
              onClick={handleSubmit}
            >
              Create Account
            </Button>
            <br />
            <br />
          </Form>
        </Modal.Content>
      </Modal>
    </React.Fragment>
  );
};

export default NewUserModal;

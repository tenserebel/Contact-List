import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";
import Header from "../../components/Header";

const RegisterUI = ({
  form: { onChange, form, registerFormValid, onSubmit, loading, fieldErrors },
}) => {
  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Signup Here</SemanticHeader>
          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
                  error={
                    fieldErrors.username && {
                      content: fieldErrors.username,
                      pointing: "below",
                    }
                  }
                ></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.firstName || ""}
                  onChange={onChange}
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                  error={
                    fieldErrors.first_name && {
                      content: fieldErrors.first_name,
                      pointing: "below",
                    }
                  }
                ></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.lastName || ""}
                  onChange={onChange}
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                  error={
                    fieldErrors.last_name && {
                      content: fieldErrors.last_name,
                      pointing: "below",
                    }
                  }
                ></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.email || ""}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  error={
                    fieldErrors.email && {
                      content: fieldErrors.email,
                      pointing: "below",
                    }
                  }
                ></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                  error={
                    fieldErrors.password && {
                      content: fieldErrors.password,
                      pointing: "below",
                    }
                  }
                ></Form.Input>
              </Form.Field>
              <Button
                onClick={onSubmit}
                disabled={registerFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Submit
              </Button>
              <Segment>
                ALready have an account? <Link to="/auth/login">Login</Link>
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default RegisterUI;

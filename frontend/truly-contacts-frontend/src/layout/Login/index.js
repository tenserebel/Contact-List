import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header as SemanticHeader,
  Segment,
  Message,
} from "semantic-ui-react";
import Header from "../../components/Header";

const LoginUI = ({
  form: { onChange, form, loginFormValid, error, onSubmit, loading },
}) => {
  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Login to your account</SemanticHeader>
          <Segment>
            <Form>
              {error && <Message content={error?.details} negative />}
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
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
                ></Form.Input>
              </Form.Field>
              <Button
                onClick={onSubmit}
                disabled={loginFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Submit
              </Button>

              <Segment>
                Need to Register? <Link to="/auth/register">Register</Link>
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginUI;

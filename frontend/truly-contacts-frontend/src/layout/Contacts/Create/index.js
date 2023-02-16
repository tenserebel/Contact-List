import React from "react";
import {
  Button,
  Card,
  Form,
  Grid,
  Header as SemanticHeader,
  Select,
} from "semantic-ui-react";
import Header from "../../../components/Header";
import countries from "../../../utils/countries";
import "./index.css";

const CreateContact = ({ onChange }) => {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader>Create Contact</SemanticHeader>
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <div className="contactpicture">
                  <span>Choose Picture</span>
                </div>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    name="firstName"
                    onChange={onChange}
                    placeholder="First name"
                  />
                  <Form.Input
                    fluid
                    label="Last name"
                    name="lastName"
                    onChange={onChange}
                    placeholder="Last name"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Country"
                    name="country"
                    onChange={onChange}
                    control={Select}
                    options={countries}
                    placeholder="Country"
                  />
                  <Form.Input
                    fluid
                    label="Phonenumber"
                    name="phonenumber"
                    onChange={onChange}
                    placeholder="Phone Number"
                  />
                </Form.Group>
                <Form.Checkbox
                  label="Add to Favourite"
                  name="isFavorite"
                  onChange={(e, data) => {
                    onChange(e, { name: "isFavorite", value: data.checked });
                  }}
                />
                <Button primary type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default CreateContact;

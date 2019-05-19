/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Images from "./Components/Images";

import { Box, Text, Anchor } from "grommet";
import { Button, Menu, Dropdown, Icon, Divider } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import { SocialIcon } from "react-social-icons";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  return (
    <div>
      <Header />
      <Box direction="row" justify="center">
        <Menu size="small" compact>
          <Menu.Item
            name="For Retailers"
            // active={activeItem === 'aboutUs'}
            onClick={() => {}}
          >
            <TextField
              id="date"
              label="DATE"
              type="date"
              defaultValue="2019-02-22"
              // className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Menu.Item>
          <Menu.Item
            name="Log in"
            // active={activeItem === 'locations'}
            onClick={() => {}}
          >
            <TextField
              id="time"
              label="TIME"
              type="time"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </Menu.Item>
          <Menu.Item>
            <Dropdown item text="BRAND">
              <Dropdown.Menu>
                {[1, 2, 3].map((ele, index) => (
                  <Dropdown.Item key={ele}>Option {ele}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown item text="SERVICE">
              <Dropdown.Menu>
                {[1, 2, 3].map((ele, index) => (
                  <Dropdown.Item key={ele}>Option {ele}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
        {/* <Box elevation="small" overflow="hidden" justify="stretch"> */}
        <Button className="button-pink" icon size="massive" floated="right">
          <Icon name="search" />
        </Button>
        {/* </Box> */}
      </Box>
      {/* MAIN */}
      <Box direction="row" justify="evenly" align="center">
        {/* LEFT BOX */}
        <Box direction="column">
          {/* TOP LAYER */}
          <Box
            direction="row"
            justify="between"
            gap="xlarge"
            margin={{ bottom: "large" }}
          >
            <Text size="small">12 STORES AVAILABLE</Text>
            <Dropdown item text="SORT BY" className="dropdown-bold">
              <Dropdown.Menu>
                {[1, 2, 3].map((ele, index) => (
                  <Dropdown.Item key={ele}>Option {ele}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Box>
          {/* loop */}
          {Array.apply(null, Array(3)).map((_, i) => (
            <Box
              direction="row"
              justify="between"
              basis="auto"
              start="start"
              margin={{ bottom: "large" }}
            >
              {/* Left Carousel */}
              <Images />
              {/* right of Carousel */}
              <Box
                direction="column"
                align="start"
                alignContent="start"
                justify="start"
              >
                <Text
                  size="26px"
                  weight="bold"
                  margin={{ bottom: "2px" }}
                  extend={_ => ({ letterSpacing: "4px" })}
                >
                  Lancolm
                </Text>
                <Text
                  size="xsmall"
                  weight="normal"
                  margin={{ bottom: "xsmall" }}
                >
                  Saks Fifth Avenue . 754 5th Avenue, New York
                </Text>
                <Text size="small" weight="bold" margin={{ bottom: "xsmall" }}>
                  1 Product purchase required
                </Text>
                <Box
                  direction="row"
                  justify="start"
                  align="center"
                  margin={{ bottom: "small" }}
                >
                  {[1, 2, 3, 4, 5].map(x => (
                    <i className="star outline icon color-pink" />
                  ))}
                  <Text size="small" weight="normal" margin={{ top: "2px" }}>
                    (40)
                  </Text>
                </Box>
                <Box direction="row" justify="start" align="center">
                  <Button size="mini" className="button-pink">
                    12:00 PM
                  </Button>
                  <Button size="mini" className="button-pink">
                    13:00 PM
                  </Button>
                  <Button size="mini" className="button-pink">
                    14:00 PM
                  </Button>
                  <Button size="mini" className="button-pink">
                    15:00 PM
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
          <Box
            direction="row"
            justify="center"
            align="start"
            alignContent="start"
            alignSelf="end"
          >
            <ul class="pagination">
              <li>
                <a href="#">
                  «
                </a>
              </li>
              <li>
                <a class="active" href="#">
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                >
                  2
                </a>
              </li>
              <li>
                <a href="#">
                  3
                </a>
              </li>
              <li>
                <a href="#">
                  »
                </a>
              </li>
            </ul>
          </Box>
        </Box>
        {/* RIGHT BOX */}
        <Box
          direction="column"
          justify="center"
          height="700px"
          width="600px"
          margin={{ top: "xlarge", bottom: "xlarge" }}
          pad={{ bottom: "xlarge" }}
        >
          {/* <div style={{ height: '100vh', width: '100%' }}> */}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDZae7-htorid1gveLvcmDKspkxor1SRv4"
            }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33
            }}
            defaultZoom={11}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
          {/* </div> */}
        </Box>
      </Box>
      <Divider />
      {/* FOOTER */}
      <Box direction="row" justify="evenly" margin={{ bottom: "xlarge" }}>
        <Box direction="column">
          <Text size="large" weight="bold">
            Company
          </Text>
          <Anchor
            href="#"
            label="Blog"
            margin={{ top: "small" }}
            color="black"
          />
          <Anchor
            href="#"
            label="About Us"
            margin={{ top: "small" }}
            color="black"
          />
          <Anchor
            href="#"
            label="Contact Us"
            margin={{ top: "small" }}
            color="black"
          />
          <Anchor
            href="#"
            label="Privacy Policy"
            margin={{ top: "small" }}
            color="black"
          />
          <Anchor
            href="#"
            label="Terms and Conditions"
            margin={{ top: "small" }}
            color="black"
          />
        </Box>
        <Box direction="column">
          <Text size="large" weight="bold">
            Brands & Retailers
          </Text>
          <Anchor
            href="#"
            label="Partner with Us"
            margin={{ top: "small" }}
            color="black"
          />
          <Anchor
            href="#"
            label="Login"
            margin={{ top: "small" }}
            color="black"
          />
        </Box>
        <Box direction="column">
          <Text size="large" weight="bold" margin={{ bottom: "small" }}>
            Follow Us
          </Text>
          <Box direction="row" alignSelf="stretch">
            <SocialIcon
              className="social-icon"
              network="twitter"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon network="facebook" style={{ height: 30, width: 30 }} />
            <SocialIcon network="instagram" style={{ height: 30, width: 30 }} />
            <SocialIcon network="linkedin" style={{ height: 30, width: 30 }} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;

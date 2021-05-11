import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Grid,Segment } from 'semantic-ui-react'
import Logo from './cib-amazon-aws.svg';
import Logo1 from './cib-google-cloud.svg';
import Tableau from "./tableau";

// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
const data = [
  {
    name: 'Page A',

    second: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',

    second: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  const classes = useStyles();
  const [service, setService] = React.useState("");
  const [clusters, setClusters] = React.useState("");

  const handleChange = (event) => {
    setService(event.target.value);
  };
  const Services = () => {
    console.log(service);
    if (service === 10) {
      console.log("light");
    } else if (service === 20) {
      console.log("Medium");
    } else if (service === 30) {
      console.log("Heavy");
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>

            <Typography variant="h6" color="inherit">
              Test
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <br />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
            Select Service
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={service}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Light</MenuItem>
            <MenuItem value={20}>Medium</MenuItem>
            <MenuItem value={30}>Heavy</MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>

          

        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
            Select Clusters
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={clusters}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>3</MenuItem>
            <MenuItem value={3}>5</MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
      </div>
      <Button variant="contained" onClick={Services}>
        Submit
      </Button>
      <br />
      <br />
      <h1>Metrics</h1>
      <div>
        <div>
          <Tableau />
        </div>
        
            <Grid stackable columns={2}>
            <Grid.Column>
            <Segment>
              <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="first"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="second" stroke="#82ca9d" />
            </LineChart>
            </Segment>
            <img src={Logo}/><h3>Amazon Web Services</h3>
            </Grid.Column>
            <Grid.Column>
            <Segment>
              <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </Segment>
            <img src={Logo1}/><h3>Google Cloud Platform</h3>
            </Grid.Column>
           </Grid>
        
      </div>
    </div>
  );
}

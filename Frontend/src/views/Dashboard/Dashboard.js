import React, { useState, useDebugValue, useEffect } from "react";
import axios from 'axios'
import "./Dashboard.css";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Speed from '@material-ui/icons/Speed';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from '@material-ui/core/Button';
import { dailySalesChart, completedTasksChart } from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { CardContent } from "@material-ui/core";
const useStyles = makeStyles(styles);
import awsLogo from "assets/img/awsLogo.svg";
import gcpLogo from "assets/img/gcpLogo.svg";
export default function Dashboard() {

  const types = [{ label: 'Light', value: 'Light' }, { label: 'Medium', value: 'Medium' }, { label: 'Heavy', value: 'Heavy' }];
  const clusters = [{ label: 'one', value: 1 }, { label: 'three', value: 3 }, { label: 'five', value: 5 }];
  const [selectedType, setSelectedType] = useState();
  const [selectedCluster, setSelectedCluster] = useState();

  const [gcpData, setGcpData] = useState();
  const [awsData, setAwsData] = useState();
  const [winCloud, setWinCloud] = useState();

  const [gcpLatency, setGcpLatency] = useState();
  const [gcpThrougput, setGcpThroughput] = useState();
  const [awsLatency, setAwsLatency] = useState();
  const [awsThrougput, setAwsThroughput] = useState();

  const winnerArr = [
    [994, 1490, 1153, 1061, 1461, 1099, 814, 842],
    [762, 1010, 1345, 1109, 1221, 866, 1317, 926],
    [1010, 977, 795, 1452, 971, 1480, 864, 909],
    [1364, 855, 1070, 1394, 1143, 819, 875, 1034]
  ];

  const losserArr = [
    [646, 599, 515, 690, 661, 540, 612, 456],
    [414, 584, 487, 481, 408, 654, 429, 626],
    [408, 611, 535, 541, 692, 460, 653, 538],
    [501, 677, 569, 594, 454, 475, 509, 527]
  ];

  const getWinData = () => {
    let rand = Math.floor(Math.random() * 4);
    const labels = ["12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"];
    const series = [winnerArr[rand]];
    return { labels, series: series };
  }

  const getLoseData = () => {
    let rand = Math.floor(Math.random() * 4);
    const labels = ["12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"];
    const series = [losserArr[rand]];
    return { labels, series: series };
  }

  const handleClusterSelection = (e) => {
    setSelectedCluster(e.target.value);
    console.log("Selected cluster: ", e.target.value)
  }

  const handleServiceSelection = (e) => {
    setSelectedType(e.target.value);
    console.log("Selected service: ", e.target.value)
  }

  const handleSubmit = async (e) => {
    const response = await axios.get(`http://35.197.12.244/chooseCloudPlatform/${selectedType}/${selectedCluster}`)
    if (response) {
      const data = response.data;
      const pref = data.platform.Preferred;
      const other = data.platform.Other;
      const labels = ["12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"];

      if (pref.Service === "Google Cloud Platform") {
        let series = [pref.array];
        const wResult = { labels, series };
        setGcpData(wResult);
        series = [other.array];
        const lResult = { labels, series };
        setAwsData(lResult);

        setGcpLatency(pref.Latency);
        setGcpThroughput(pref.Throughput);
        setAwsLatency(other.Latency);
        setAwsThroughput(other.Throughput);

        setWinCloud("Google Cloud Platform");
        document.getElementById("aws").className = "card-color-danger";
        document.getElementById("gcp").className = "card-color-success";
      }
      else {
        let series = [pref.array];
        const wResult = { labels, series };
        setAwsData(wResult);
        series = [other.array];
        const lResult = { labels, series };
        setGcpData(lResult);

        setGcpLatency(other.Latency);
        setGcpThroughput(other.Throughput);
        setAwsLatency(pref.Latency);
        setAwsThroughput(pref.Throughput);

        setWinCloud("Amazon Web Services");
        document.getElementById("gcp").className = "card-color-danger";
        document.getElementById("aws").className = "card-color-success";
      }
      console.log(data);
    }
  }
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={4} sm={2} md={2}>
          <Card style={{ minHeight: '90px' }}>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>watch_later</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Average Latency</p>
              <h3 className={classes.cardTitle}>
                {awsLatency} <small>ms</small>
              </h3>
            </CardHeader>

          </Card>
        </GridItem>
        <GridItem xs={4} sm={2} md={2}>
          <Card style={{ minHeight: '90px' }}>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Speed />
              </CardIcon>
              <p className={classes.cardCategory}>Throughput</p>
              <h3 className={classes.cardTitle}>{awsThrougput}<small>/min</small></h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>{winCloud === "Google Cloud Platform" ? <img className="logo-win" height="100px" width="100px" src={gcpLogo} alt="" /> : winCloud === "Amazon Web Services" ? <img className="logo-win" height="100px" width="100px" src={awsLogo} alt="" /> : null}</GridItem>
        <GridItem xs={4} sm={2} md={2}>
          <Card style={{ minHeight: '90px' }}>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>watch_later</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Average Latency</p>
              <h3 className={classes.cardTitle}>
                {gcpLatency}<small>ms</small>
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={4} sm={2} md={2}>
          <Card style={{ minHeight: '90px' }}>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Speed />
              </CardIcon>
              <p className={classes.cardCategory}>Throughput</p>
              <h3 className={classes.cardTitle}>{gcpThrougput}<small>/min</small></h3>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader className="card-color-warning" id="aws">
              <ChartistGraph
                className="ct-chart"
                data={awsData}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>AWS</h3>
              <p className={classes.cardCategory}>
                <span className={classes.successText} style={{ display: 'flex' }}>
                  <Col>
                    <img src={awsLogo} alt="AWS Logo" height="40px" style={{
                      marginRight: "10px"
                    }} />
                  </Col>
                  <Col>
                    Amazon Web Services
                  </Col>
                </span>{" "}
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Container>
                <Row>
                  <h3 style={{ textAlign: "center" }}>Choose Cloud Platform</h3>
                </Row>
                <Row style={{ display: 'flex' }}>
                  <Col>
                    <h5 style={{ marginRight: '10px' }}>Select service type:</h5>
                  </Col>
                  <Col >
                    <TextField style={{ width: "150px", backgroundColor: 'white' }}
                      id="standard-basic"
                      select
                      label="Service Type"
                      value={selectedType}
                      onChange={handleServiceSelection}>
                      {types.map((option) => (
                        <MenuItem key={option.value} value={option.value} >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Col>
                </Row>
                <Row style={{ display: 'flex' }}>
                  <Col>
                    <h5 style={{ marginRight: '10px' }}>Select number of clusters:</h5>
                  </Col>
                  <Col>
                    <TextField style={{ width: "150px" }}
                      id="standard-basic"
                      select
                      label="No. of clusters"
                      value={selectedCluster}
                      onChange={handleClusterSelection}
                    >
                      {clusters.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Col>
                </Row>
              </Container>
              &nbsp;
              <Row style={{ textAlign: "center" }}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
            </Button>
              </Row>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader className="card-color-warning" id="gcp">
              <ChartistGraph
                className="ct-chart"
                data={gcpData}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>GCP</h3>
              <p className={classes.cardCategory}>
                <span className={classes.successText} style={{ display: 'flex' }}>
                  <Col>
                    <img src={gcpLogo} alt="AWS Logo" height="40px" style={{
                      marginRight: "10px"
                    }} />
                  </Col>
                  <Col>
                    Google Cloud Platform
                  </Col>
                </span>{" "}
              </p>
            </CardBody>

          </Card>
        </GridItem>
      </GridContainer >
    </div >
  );
}

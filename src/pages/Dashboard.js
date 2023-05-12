import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTransactions } from "../utils/api";
import TransformationPanel from "../components/TransformationPanel";
import UploadPanel from "../components/UploadPanel";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  title: {
    color: "#237A5A",
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#f7f7f7",
      cursor: "pointer",
    },
  },
}));

function Dashboard() {
  const classes = useStyles();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h4" className={classes.title}>
        Dashboard
      </Typography>
      <div>
        <TransformationPanel />
      </div>
      <div>
        <UploadPanel />
      </div>
      <Divider />
      <Typography variant="h6" className={classes.title}>
        Recent Transactions
      </Typography>
      <List>
        {transactions?.map((transaction) => (
          <React.Fragment key={transaction.id}>
            <ListItem
              className={classes.listItem}
              component={Link}
              to={`/transactions/${transaction.id}`}
            >
              <ListItemText
                primary={`${transaction.merchant} - $${transaction.amount}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default Dashboard;

import {
  Avatar,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Paper } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { green, grey } from "@material-ui/core/colors";
import clsx from "clsx";

import ExtrasContainer from "../../inlines/extras/ExtrasContainer";
import ExtendedExtrasContainer from "../../inlines/extras/ExtendedExtrasContainer";
import HistoryContainer from "../../inlines/history/HistoryContainer";
import { forwardRef } from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginBottom: "10px",
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
    fill: "#2196f3",
  },

  outlined: {
    borderLeft: "none",
    borderRight: "none",
  },

  iconAvatar: {
    width: "35px",
    height: "35px",
    backgroundColor: grey[200],
    color: "black",
  },

  iconAvatarSmall: {
    width: "25px",
    height: "25px",
    marginLeft: "5px",
    backgroundColor: green[500],
    color: "black",
  },
  fabContainer: {
    display: "flex",
    justifyContent: "center",
  },

  fab: {
    position: "fixed",
    bottom: "20px",
    backgroundColor: "white",

    textTransform: "none",
    border: "1px solid #dadce0",
    boxShadow: "0 1px 6px rgb(60 64 67 / 28%)",

    "&:hover": {
      borderColor: " #DADCE0",
      backgroundColor: "#F1F3F4",
      transition: "none",
    },
  },

  divider: {
    margin: "0 24px",
    borderBottom: "1px solid #e8eaed",
  },

  textSmall: {
    fontSize: "0.75rem",
  },
  marginZero: {
    margin: 0,
  },
}));

const MainUnderSearchBar = forwardRef(
  ({ underSearchBar, setUnderSearchBar, shownMore, setShownMore }, ref) => {
    const classes = useStyles();
    const handleUnderSearchBar = () => {
      setUnderSearchBar(!underSearchBar);
    };

    const myPlaces = [
      { name: "Home", iconComponent: HomeOutlinedIcon },
      { name: "Work", iconComponent: WorkOutlinedIcon },
    ];

    return (
      <div ref={ref}>
        <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
          style={{ height: "195px" }}
        >
          <div style={{ marginTop: "6px", marginLeft: "7px" }}>
            <div style={{ height: "50px" }} />
            <HistoryContainer />
          </div>
        </Paper>
        {/* <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
        > */}
          {/* <List>
            {myPlaces.map((item, index) => (
              <div key={index}>
                <ListItem button key={item.name}>
                  <ListItemIcon>
                    <Avatar className={classes.iconAvatar}>
                      <item.iconComponent fontSize="medium" />
                    </Avatar>
                  </ListItemIcon>
                  <div>
                    <ListItemText primary={item.name} style={{ margin: 0 }} />
                    <ListItemText
                      secondary={"Add address"}
                      style={{ margin: 0 }}
                    />
                  </div>
                </ListItem>
                {index < myPlaces.length - 1 ? (
                  <div className={classes.divider}></div>
                ) : null}
              </div>
            ))}
          </List> */}
        {/* </Paper> */}
        {/* <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
        > */}
          {/* <List>
            <ListItem button key={"Traffic"}>
              <ListItemIcon>
                <Avatar
                  className={classes.iconAvatarSmall}
                  style={{ backgroundColor: "#4caf50" }}
                >
                  <DriveEtaIcon
                    fontSize="small"
                    style={{ backgroundColor: "#4caf50", fill: "white" }}
                  />
                </Avatar>
              </ListItemIcon>
              <div>
                <ListItemText
                  primary={"There aren't any traffic jams"}
                  classes={{ root: classes.marginZero }}
                />
                <ListItemText
                  secondary={"Common traffic"}
                  classes={{
                    secondary: classes.textSmall,
                    root: classes.marginZero,
                  }}
                />
              </div>
              <IconButton style={{ position: "absolute", right: "10px" }}>
                <ArrowForwardIosRoundedIcon fontSize="small" />
              </IconButton>
            </ListItem>
          </List> */}
        {/* </Paper> */}
        <Paper
          square
          variant="outlined"
          className={clsx(classes.card, classes.outlined)}
          style={{ margin: shownMore ? 0 : "inherit" }}
        >
          <ExtrasContainer />
        </Paper>
        {shownMore ? <ExtendedExtrasContainer /> : null}
        <div className={classes.fabContainer}>
          <Fab
            size="small"
            variant="extended"
            className={classes.fab}
            onClick={() => {
              handleUnderSearchBar();
              setShownMore(false);
            }}
          >
            <ExpandLessIcon className={classes.extendedIcon} />
            <div style={{ marginRight: "8px", color: "#3C4043" }}>Ocultar</div>
          </Fab>
        </div>
      </div>
    );
  }
);
export default MainUnderSearchBar;

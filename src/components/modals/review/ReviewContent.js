import { Avatar, Button, DialogActions, TextField } from "@material-ui/core";
import {
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { Rating } from "@material-ui/lab";
import clsx from "clsx";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import { useEffect, useState } from "react";
// import { createComment } from "../../../firebase";
import Prompt from "./Prompt";
import PhotoSection from "./PhotoSection";
// import { loadComments } from "../../../redux/comments/actions";

const useStyles = makeStyles((theme) => ({
  root: {},

  dialogTitle: {
    display: "flex",
    justifyContent: "center",
    padding: "24px",
  },
  avatarGroup: {
    display: "flex",
    marginTop: "6px",
  },
  commentHeader: {
    display: "flex",
  },
  commentHeaderName: {
    marginLeft: "16px",
  },
  lineHeightOne: {
    lineHeight: "1.4rem",
  },
  avatar: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignSelf: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  dialogContent: {
    padding: "8px 16px",
  },
  reviewBlock: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "48px",
    paddingTop: "12px",
  },
  ratingLabel: {
    fontSize: "2.2rem",
    paddingRight: "6px",
  },
  textField: {
    paddingTop: "35px",
    height: "90px",
  },
  input: {
    backgroundColor: "#f8f8f8",
    borderBottom: "2px solid #4285f4",
    padding: "10px",
    fontSize: "0.9rem",
  },

  actions: {},
  buttons: {
    margin: "4px 12px",
    padding: "6px 24px",
  },

  disabled: {
    pointerEvents: "none",
    opacity: 0.15,
  },
  "@media screen and (max-width: 540px)": {
    avatar: {
      display: "none",
    },
    reviewBlock:{
      paddingLeft:"8px"
    }
  },
}));

const ReviewContent = ({
  setAddComment,
  setCompleteReview,
  setAddPhoto,
  addPhoto,
  photoFiles,
  setPhotoFiles,
  content,
  loadComments,
  profile,
}) => {
  const classes = useStyles();

  const [prompt, setPrompt] = useState(false);

  const [disabled, setDisabled] = useState(false);

  const onClose = () => {
    setAddComment(false);
    setPhotoFiles([]);
  };

  const handleAddPhoto = () => {
    setAddPhoto(!addPhoto);
  };

  const onCancel = () => {
    setDisabled((v) => !v);
    setPrompt((v) => !v);
  };

  async function onPostClick() {
    setDisabled(true);
    const data = {
      place: content.titulo,
      photoFolder: content.photoFolder || content.titulo,
      author: {
        name: profile.name,
        photoURL: profile.photoURL,
        email: profile.email,
      },
      value: ratingValue,
      photos: photoFiles,
      text: commentText,
    };
    await
    // createComment(data);
    setDisabled(false);
    setPhotoFiles([]);
    setCompleteReview(true);
    // loadComments(content.photoFolder || content.name);
  }

  const [ratingValue, setRatingValue] = useState(0);
  const [commentText, setCommentText] = useState("");

  const changeCommentText = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <>
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h3" component="div">
          {content.name}
        </Typography>
      </DialogTitle>
      {prompt ? <Prompt onCancel={onCancel} onClose={onClose} /> : null}
      <div className={disabled ? classes.disabled : ""}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <div className={classes.avatarGroup}>
            <Avatar src={profile.photoURL} className={classes.avatar} />
            <div className={classes.commentHeaderName}>
              <Typography classes={{ body1: classes.lineHeightOne }}>
                {profile.name}
              </Typography>
              <Typography
                classes={{ body2: classes.lineHeightOne }}
                variant="body2"
                color="textSecondary"
              >
                Postar publicamente
              </Typography>
            </div>
          </div>
          <div className={classes.reviewBlock}>
            <Rating
              name="rating"
              classes={{ label: classes.ratingLabel }}
              icon={<StarOutlineRoundedIcon fontSize="inherit" />}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
            />
            <TextField
              classes={{ root: classes.textField }}
              inputProps={{ "aria-label": "description" }}
              InputProps={{
                classes: { root: classes.input },
                disableUnderline: true,
              }}
              multiline
              rows={4}
              value={commentText}
              onChange={changeCommentText}
            />

            <PhotoSection
              photoFiles={photoFiles}
              setPhotoFiles={setPhotoFiles}
              handleAddPhoto={handleAddPhoto}
            />
          </div>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button
            variant="outlined"
            onClick={onCancel}
            className={classes.buttons}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            disableElevation
            autoFocus
            color="primary"
            className={classes.buttons}
            onClick={onPostClick}
          >
            Postar
          </Button>
        </DialogActions>
      </div>
    </>
  );
};

export default ReviewContent;

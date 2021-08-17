import React, { useState } from 'react';
import firebase from "firebase";
import { storage, db } from "./firebase";
import { Input, Button } from "@material-ui/core";
import "./imageUpload.css";

function ImageUpload({ username }) {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    // visualize imageupload progress bar
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // Error function ...
                alert(error.message);
            },
            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);

                        // post the uploaded image inside firebase
                        db.collection("posts").add({
                            caption: caption,
                            imageUrl: url,
                            username: username,
                            // make the newest upload image at the top
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        });

                        // reset the upload component
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }
        );
    };

    return (
        <div className="imageupload">
          <progress className="imageupload__progress" value={progress} max="100" />
          <Input
            placeholder="Enter a caption here!"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <div>
            <input type="file" onChange={handleChange} />
            <Button className="imageupload__button" onClick={handleUpload}>
              Upload
            </Button>
          </div>
    
          <br />
        </div>
      );
};

export default ImageUpload;

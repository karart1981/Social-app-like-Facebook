import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import "./Register.css";
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../firebase";

const Register = () => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, "usersImages/" + displayName);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "usersPosts", res.user.uid), { messages: [] });
            // console.log(res.user);
          });
        }
      );
    } catch (error) {
      setError(true);
    }
    navigate("/login");
  };
  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">FaceBook</h3>
          <span className="register-desc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="register-right">
          <div className="register-box">
            <div className="top">
              <img
                src={
                  img
                    ? URL.createObjectURL(img)
                    : "https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
                }
                alt=""
                className="profile-img"
              />
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    style={{ display: "none" }}
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
            <div className="bottom">
              <form onSubmit={handleRegister} className="bottom-box">
                <input
                  type="text"
                  placeholder="Name"
                  id="displayName"
                  className="register-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="register-input"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="register-input"
                  minLength={6}
                  required
                />
                {/* <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPasword"
                  className="register-input"
                  required
                /> */}
                <button type="submit" className="register-btn">
                  Sign Up
                </button>
                <Link to="/login">
                  <button className="login-register-btn">
                    Log into Account
                  </button>
                </Link>
                {error && <span>Something went wrong</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
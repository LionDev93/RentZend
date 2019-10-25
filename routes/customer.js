const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/key");
const passport = require("passport");
var multer = require("multer");
const path = require("path");
var fs = require("fs");
// Load User model
const Profile = require("../models/profile");

router.post(
  "/changeemail",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try{
      const user = await User.findOne({_id: req.user._id})
      if(user) {
        user.email = req.body.email;
        const result = await user.save();
        return res.status(200).json({email: result.email})
      }
      return res.status(400).json();
    }catch(err) {
      console.log("changeEmail err", err);
    }
    return res.status(500).json();
  }
)

router.post(
  "/passwordchange",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user._id });
      if (user) {
        bcrypt
          .compare(req.body.oldPassword, user.password)
          .then(isMatch => {
            if (isMatch) {
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.newPassword, salt, (err, hash) => {
                  if (err) {
                    return;
                  }
                  user.password = hash;
                  user
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
              });
            } else {
              return res
                .status(400)
                .json({ message: "oldpassword is not matched" });
            }
          })
          .catch(err => {
            return res.status(500).json();
          });
      } else {
        return res.status(400).json({ message: "user not found" });
      }
    } catch (err) {
      return res.status(500).json();
    }
  }
);
router.get(
  "/avatar",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const profile = await Profile.findOne({ user_id: req.user._id });
      if (profile) {
        return res.status(200).json({ path: profile.avatar });
      }
    } catch (err) {
      return res.status(500).json();
    }
    return res.status(400).json();
  }
);

router.post(
  "/avatar",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      var storage = multer.diskStorage({
        destination: function(req, file, cb) {
          dirPath = "./static/" + req.user._id + "/";
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
          }
          cb(null, dirPath);
        },
        filename: function(req, file, cb) {
          cb(null, "avatar.png");
        }
      });
      var upload = multer({ storage: storage }).single("file");

      upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
      });
      const profile = await Profile.findOne({ user_id: req.user._id });
      if (profile) {
        profile.avatar = "/" + req.user._id + "/avatar.png";
        await profile.save();
        return res.status(200).json({ path: profile.avatar });
      }
    } catch (err) {
      console.log("upload avatar error:", err);
      return res.status(500).json();
    }
    return res.status(400).json({ message: "database error" });
  }
);

router.put(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      console.log("put profile-1");
      const profile = await Profile.findOne({ user_id: req.user._id });
      if (profile) {
        console.log("put profile-2", req.body);
        profile.gender = req.body.gender;
        profile.languageforCorrespondance = req.body.languageforCorrespondance;
        profile.dateOfBirth = req.body.dateOfBirth;
        profile.homePhone = req.body.homePhone;
        // profile.mobilePhone = req.body.mobilePhone;
        profile.workPhone = req.body.workPhone;
        profile.placeOfOrigin = req.body.placeOfOrigin;
        profile.placeOfBirth = req.body.placeOfBirth;
        profile.nationality = req.body.nationality;
        profile.address = req.body.address;
        profile.address2 = req.body.address2;
        profile.postCode = req.body.postCode;
        profile.townCity = req.body.townCity;
        profile.country = req.body.country;

        const result = await profile.save();
        console.log("put profile-3");
        const user = await User.findOne({ _id: req.user.id });
        console.log("user1", user);
        console.log("put profile-4");
        if (user) {
          user.firstname = req.body.firstname;
          user.lastname = req.body.lastname;
          user.phonenumber = req.body.phonenumber;
          console.log("put profile-5", user);
          user
            .save()
            .then(result => {
              console.log("pp", result);
            })
            .catch(err => console.log("pp1", err));

          console.log("put profile-6");
        }
        // user.phonenumber = req.body.mobile
        console.log("put profile-7");
        return res.status(200).json(result);
      }
    } catch (err) {}
  }
);

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const profile = await Profile.findOne({ user_id: req.user._id }).populate(
        "user_id"
      );
      if (!profile) {
        const newone = new Profile({ user_id: req.user._id });
        await newone.save();
        const pp = await Profile.findOne({ user_id: req.user._id }).populate(
          "user_id"
        );
        return res.status(200).json(pp);
      }
      return res.status(200).json(profile);
    } catch (err) {
      console.log("get profile err", err);
      return res.status(500).json();
    }
  }
);


module.exports = router;

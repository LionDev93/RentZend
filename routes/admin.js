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

router.get(
  "/userlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      if (req.user.admin === "admin") {
        const users = await User.find({ admin: { $ne: "admin" } });
        return res.status(200).json({ users: users });
      } else {
        return res.status(400);
      }
    } catch (err) {
      console.log("get userlist err:", err);
    }
    return res.status(500);
  }
);

router.delete(
  "/user",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      if (req.user.admin === "admin") {
        const targetUserId = req.body.user_id;
        await Profile.deleteOne({ user_id: targetUserId });
        await Boat.deleteOne({ user_id: targetUserId });
        await Ads.deleteOne({ user_id: targetUserId });
        await User.deleteOne({ _id: targetUserId });
        return res.status(200).json();
      } else {
        return res.status(400).json();
      }
    } catch (err) {
      console.log("delete user err:", err);
    }
    return res.status(500).json();
  }
);

router.delete(
  "/schedule",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user._id });
      //   user.admin = "admin";
      //   await user.save();
      if (user && user.admin === "admin") {
        const schedule = req.body.ads;
        const ads = await Ads.findOne({ user_id: user._id });
        const boat = await Boat.findOne({ user_id: user._id });
        const adsArray = ads.adsArray;
        var resultIndex = -1;
        for (var i = 0; i < adsArray.length; i++) {
          const ads1 = adsArray[i];
          if (
            schedule.adsType === ads1.adsType &&
            schedule.startHarbour === ads1.harbour &&
            schedule.endHarbour === ads1.destHarbour &&
            schedule.myPlace === boat.myplace &&
            schedule.width === boat.width &&
            schedule.draught === boat.draught &&
            schedule.arrivalDate === ads1.arrivalDate &&
            schedule.leaveDate === ads1.leaveDate
          ) {
            resultIndex = i;
            break;
          }
        }
        if (resultIndex > -1) {
          adsArray.splice(i, 1);
          ads.adsArray = adsArray;
          await ads.save();
          return res.status(200).json({});
        } else {
          return res.status(404).json();
        }
      }
      return res.status(400).json();
    } catch (err) {
      console.log("delete schedule err", err);
    }
    return res.status(500).json();
  }
);

router.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      if (req.user.admin === "admin") {
        return res.status(200).json({ admin: true });
      } else {
        return res.status(400).json();
      }
    } catch (err) {
      console.log("get userlist err:", err);
    }
    return res.status(500).json();
  }
);

module.exports = router;

import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModels.js";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  console.log("bonne requette");
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContact = (req, res) => {
  console.log("contact list");

  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContactWithId = (req, res) => {
  console.log("contact list by Id");

  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const updateContact = (req, res) => {
  console.log("contact update");

  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

export const deleteContact = (req, res) => {
  console.log("contact remove");

  Contact.remove(
    { _id: req.params.contactId },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "message effacé avec succès" });
    }
  );
};

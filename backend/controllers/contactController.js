
const Contact = require("../models/contactModel");

// Save a new contact message
const createContact = async (req, res, next) => {
    try {
        const newContact = new Contact({
            fullName: req.body.fullName,
            email: req.body.email,
            details: req.body.details
        });

        await newContact.save();

        res.status(201).json({
            message: "Message saved!",
            data: newContact
        });

    } catch (error) {
        next(error);
    }
};

// Get all contact messages
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({});

        res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createContact,
    getAllContacts
};

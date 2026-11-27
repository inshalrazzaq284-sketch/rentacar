import Contact from '../models/contactModel.js';

export const createContact = async (req, res, next) => {
    try {
        const newContact = new Contact({
            fullName: req.body.fullName,
            email: req.body.email,
            details: req.body.details
        });
        await newContact.save();
        res.status(201).json({ message: 'Message saved!', data: newContact });
    } catch (err) {
        next(err);
    }
};

export const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({});
        res.status(200).json(contacts);
    } catch (err) {
        next(err);
    }
};
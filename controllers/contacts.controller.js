const Contacts = require('../models/contacts.model');

const getAllContacts = async(req , res) => {

    const contacts = await Contacts.find();
    res.status(200).json(contacts);

}

const getContactById = async(req , res) => {

    const contact = await Contacts.findById(req.params.id);
    res.status(200).json(contact);

}

const createContact = async(req , res) => {

    const contact = await Contacts.create(req.body);
    res.status(201).json(contact);

}

const updateContact = async(req , res) => {

    const contact = await Contacts.findByIdAndUpdate(req.params.id , req.body, {new: true});
    res.status(200).json(contact);

}

const deleteContact = async(req, res) => {

    const contact = await Contacts.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);

}

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}
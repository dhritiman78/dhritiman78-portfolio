import React, { useState, useEffect } from 'react';

const ContactRequests = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  // Fetch contact requests from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/contact/all');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contact requests:', error);
      }
    };

    fetchContacts();
  }, []);

  // Function to view contact details
  const handleView = (contact) => {
    setSelectedContact(contact);
  };

  // Function to delete contact
  const handleDelete = async (id) => {
    if(!window.confirm('Are you sure you want to delete this contact request?')) {
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact._id !== id));
        alert('Contact request deleted successfully');
      } else {
        alert('Failed to delete contact request');
      }
    } catch (error) {
      console.error('Error deleting contact request:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 min-h-screen">
      <h1 className="text-2xl font-semibold text-center mt-16 mb-6">Contact Requests</h1>

      {selectedContact ? (
        // View Selected Contact
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 md:p-6 lg:p-8">
          <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
          <p><strong>Name:</strong> {selectedContact.name}</p>
          <p><strong>Email:</strong> {selectedContact.email}</p>
          <p><strong>Phone:</strong> {selectedContact.phone || 'N/A'}</p>
          <p><strong>Message:</strong> {selectedContact.message}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedContact(null)}
          >
            Close
          </button>
        </div>
      ) : (
        // Display Contact Requests List
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 md:p-6 lg:p-8">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="border-b">
                  <td className="px-4 py-2">{contact.name}</td>
                  <td className="px-4 py-2">{contact.email}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => handleView(contact)}
                    >
                      View
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(contact._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactRequests;
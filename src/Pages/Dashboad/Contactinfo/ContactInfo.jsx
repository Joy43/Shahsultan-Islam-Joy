import useContact from "../../../Hooks/useContant";

const ContactInfo = () => {
  const [contactInfo] = useContact(); // Assuming useContact returns an array of contact information
  console.log(contactInfo);
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {contactInfo.map((contact, index) => (
        <div
          key={index}
          className="bg-white text-black  rounded-lg p-4 shadow-md"
        >
          <h2 className="text-lg font-semibold">Name: {contact.name}</h2>
          <p className="text-gray-600">Email:- {contact.email}</p>
          <h1>Subject:- {contact.subject}</h1>
          <h2>Message:- {contact.message}</h2>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

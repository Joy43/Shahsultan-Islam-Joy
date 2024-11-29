import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import useContact from "../../../Hooks/useContant";

const ContactInfo = () => {
  const [contactInfo] = useContact();

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-24 p-4">
      {contactInfo.map((contact, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-purple-600 via-purple-400 to-purple-300 rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaUser className="text-white text-2xl" />
            <h2 className="text-2xl font-bold text-white">{contact.name}</h2>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-white text-2xl" />
            <p className="font-medium text-white text-lg">
              Email: <span className="text-yellow-200">{contact.email}</span>
            </p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-semibold text-white">
              Subject:{" "}
              <span className="font-semibold text-yellow-100">
                {contact.subject}
              </span>
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <FaRegCommentDots className="text-white text-2xl" />
            <h3 className="text-lg font-semibold text-white">
              Message:{" "}
              <span className="font-semibold text-lg text-yellow-100">
                {contact.message}
              </span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

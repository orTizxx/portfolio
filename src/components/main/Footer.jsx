export const Footer = () => {
  return (
    <footer
      className="bg-black w-screen text-white flex flex-col items-center py-6 pb-16
     mt-8 absolute z-99999"
    >
      <div className="text-sm md:text-base lg:text-lg text-center mb-4">
        &copy; {new Date().getFullYear()} Mohd Nasir Shah. All Rights Reserved.
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/orTizxx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mohd-nasir-shah-4162a4224/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:nasiruddinns08@example.com"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

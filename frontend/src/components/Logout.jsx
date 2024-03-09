import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // Correct icon import

// Inspired by https://www.youtube.com/watch?v=dEGbXY-8YtU
export default function Logout(props) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-opacity ${
        props.isOpen ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow-md p-6 transition-all ${
          props.isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >

        <button className="absolute top-0 right-0 mt-4 mr-4" onClick={props.closeModal}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>

        <h1 className="text-xl font-bold text-black pt-3 text-center">Are you sure you want to log out?</h1>
        <div className="py-4 flex">
        <button 
          className="bg-blue-500 text-white text-xl font-medium px-10 py-3 mb-1 mt-1 mx-2 rounded-lg hover:bg-blue-600"
          onClick={() => console.log("Log out")}
        >Yes, I'm sure!</button>
        <button 
          className="bg-blue-500 text-white text-xl font-medium px-10 py-3 mb-1 mt-1 mx-2 rounded-lg hover:bg-blue-600"
          onClick={props.closeModal}
        >No, I'm not!</button>
        </div>
      </div>
    </div>
  );
}
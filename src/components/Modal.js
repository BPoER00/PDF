import { LockClosedIcon } from "@heroicons/react/24/solid";
const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-lg">
          <div className="relative py-8 px-5 md:px-10 bg-slate-500 shadow-md rounded border border-gray-400">
            <div className="flex items-center justify-start w-full max-h-[75vh]">
              <div className="max-h-[60vh] overflow-y-auto">{children}</div>
            </div>
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              aria-label="close modal"
              role="button"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import NavBar from "@/components/NavBar";
import PDFReader from "@/components/PDFReader";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState(null);

  const handleChange = (e) => {
    setFiles({ [e.target.name]: e.target.value });
  };

  console.log(files);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <NavBar>
        <ul className="flex items-center gap-5">
          <li>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleOpenModal}
            >
              Open Modal
            </button>
          </li>
        </ul>
      </NavBar>

      <form onSubmit={handleSubmit}>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
        />

        <div className="max-w-2xl mx-auto mt-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Upload file
          </label>
          <input
            type="file"
            // accept="image/*, application/pdf"
            name="files"
            onChange={handleChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
          <button
            className="mt-10 relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5"
          >
            Submit
          </button>
        </div>
      </form>

      <Modal open={isOpen} onClose={handleCloseModal}>
        <PDFReader file={files} />
      </Modal>
    </div>
  );
}

export default page;

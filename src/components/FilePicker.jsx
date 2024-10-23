import React from "react";
import CustomButton from "./CustomButton";
import { useSnapshot } from "valtio";
import state from "../store";

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label
          htmlFor="file-upload"
          className="filepicker-label"
          style={{ color: snap.color }}
        >
          Upload File
        </label>

        <p
          className="mt-2 text-gray-600 text-xs truncate"
          style={{ color: snap.color }}
        >
          {" "}
          {/* Apply color to the file name text */}
          {file === "" ? "No file selected" : file.name}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <CustomButton
            type="outline"
            title="Logo"
            handleClick={() => readFile("logo")}
            customStyles={"text-xs"}
          />
          <CustomButton
            type="filled"
            title="Full"
            handleClick={() => readFile("full")}
            customStyles={"text-xs"}
          />
        </div>
      </div>
    </div>
  );
};

export default FilePicker;

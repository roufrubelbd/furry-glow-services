import React, { use } from "react";
import { AuthContext } from "../../main";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        const checkbox = document.getElementById("update_modal");
        if (checkbox) checkbox.checked = false;
      })
      .catch((error) => {
        // console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-green-50 w-11/12 mx-auto flex flex-col justify-center items-center py-2 md:py-10 lg:py-10 h-screen">
      <div className="p-6 bg-base-100 rounded-2xl border border-green-200 flex flex-col justify-center items-center text-center space-y-4">
        <h3 className="font-bold text-amber-600">My profile page</h3>

        <img
          className="w-24 h-24 mx-auto rounded-full border border-green-200"
          src={user?.photoURL}
          alt="Avatar"
        />

        <div>
          <h6 className="font-semibold text-lg">{user?.displayName}</h6>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* DaisyUI Modal Trigger */}
        <label
          htmlFor="update_modal"
          className="btn btn-sm bg-amber-200 text-green-600 hover:text-white  hover:bg-emerald-600"
        >
          <FaRegEdit /> Update Profile
        </label>
      </div>

      {/* DaisyUI Modal */}
      <input type="checkbox" id="update_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-amber-50 text-left">
          <h3 className="font-bold text-lg text-amber-600 mb-4">
            Update Your Profile
          </h3>
          <form onSubmit={handleProfileUpdate} className="space-y-3">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                defaultValue={user?.photoURL || ""}
                placeholder="Enter image URL"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-amber-200 text-green-600 hover:text-white hover:bg-green-600"
              >
                <FaRegEdit />Save Changes
              </button>
              <label
                htmlFor="update_modal"
                className="btn bg-amber-200 text-green-600 hover:text-white hover:bg-green-600"
              >
                <IoClose />Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

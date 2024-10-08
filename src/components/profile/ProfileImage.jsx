import React, { useRef } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import { actions } from "../../actions";
const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();

  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.addEventListener("change", updateImage);
    fileUploadRef.current.click();
  };

  const updateImage = async () => {
    const formData = new FormData();

    for (const file of fileUploadRef.current.files) {
      formData.append("avatar", file);
    }

    const response = await api.post(
      `${import.meta.env.VITE_SERVER_URL}/profile/avatar`,
      formData
    );

    if (response.status === 200){
        try {
            dispatch({type: actions.profile.IMAGE_UPDATED, data: response.data})
        } catch (error) {
            dispatch({
                type: actions.profile.DATA_FETCH_ERROR,
                error: error.message,
              });
        }
    }
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
        {state?.user?.avatar ? (
          <img
            src={`${import.meta.env.VITE_SERVER_URL}/uploads/avatar/${
              state?.user?.avatar
            }`}
            alt="profile image"
            className="rounded-full"
          />
        ) : (
          <span className="">
            {state?.user?.firstName?.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      <form>
        <button
          className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
          type="submit"
          onClick={(event) => handleImageUpload(event)}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input id="file" type="file" ref={fileUploadRef} hidden />
      </form>
    </div>
  );
};

export default ProfileImage;

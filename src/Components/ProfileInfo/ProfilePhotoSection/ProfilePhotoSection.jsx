import { useProfile } from "../../../ProfileProvider/ProfileProvider";
import email from "../../../../public/profile/email.png";
import edit from "../../../../public/profile/edit.png";
import phone from "../../../../public/profile/phone.png";
import birthday from "../../../../public/profile/birthday.png";
import address from "../../../../public/profile/address.png";
import { Link } from "react-router-dom";

const ProfilePhotoSection = () => {
  const { profile } = useProfile();
  console.log(profile);

  const renderAddress = () => {
    if (profile?.address && typeof profile.address === "object") {
      const { city, house, postalCode, street } = profile.address;
      return `${house || ""}, ${street || ""}, ${city || ""}, ${
        postalCode || ""
      }`;
    }
    return profile?.address || "N/A";
  };

  return (
    <div>
      <div className="flex relative items-start gap-6 bg-white shadow-sm shadow-gray-300 border rounded-xl p-5">
        <img
          src={profile?.profilePhoto}
          loading="lazy"
          className="w-44 rounded-2xl object-cover object-top"
          alt=""
        />
        <div className="flex flex-col items-start gap-2">
          <p className="text-4xl font-bold">{profile?.name}</p>
          <div className="flex items-center gap-2">
            <img src={email} loading="lazy" className="w-6 " alt="" />
            <p>{profile?.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={phone} loading="lazy" className="w-6 " alt="" />
            <p>{profile?.phone || "N/A"}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={birthday} loading="lazy" className="w-6 " alt="" />
            <p>{profile?.dateOfBirth || "N/A"}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={address} loading="lazy" className="w-6 " alt="" />
            <p>{renderAddress()}</p>
          </div>
        </div>

        <Link to="/profileEdit/edit/basicInfo">
          {" "}
          <img
            src={edit}
            loading="lazy"
            className="w-6 cursor-pointer absolute top-5 right-5"
            alt=""
          />
        </Link>
      </div>

      <div className="mt-5"></div>
    </div>
  );
};

export default ProfilePhotoSection;

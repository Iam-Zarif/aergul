import OrderHistoryAndCart from "../../Components/ProfileInfo/OrderHistoryAndCart/OrderHistoryAndCart"
import ProfilePhotoSection from "../../Components/ProfileInfo/ProfilePhotoSection/ProfilePhotoSection"


const ProfileInfo = () => {
  return (
    <div className="pb-24"> 
      <div className="max-w-4xl w-full mx-auto mt-20">
        <ProfilePhotoSection/>
        <div className="my-3 bg-gray-200 h-[1px] w-full"></div>
        <OrderHistoryAndCart/>
      </div>
      <div className="mt-10"></div>
    </div>
  )
}

export default ProfileInfo
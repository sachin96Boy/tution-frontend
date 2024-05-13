const Profile = ({ user }: { user: { name: string; image: string } }) => {
  return (
    <div className="flex flex-row items-center">
      <h2 className=" font-montserrat text-[14px] font-[700] mr-2">
        {user.name}
      </h2>
      <img
        src={user.image}
        className=" rounded-md w-[52px] h-[52px] mr-2"
        alt=""
      />
    </div>
  );
};
export default Profile;

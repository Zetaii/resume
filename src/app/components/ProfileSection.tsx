import React from "react"

const ProfileSection = ({ name, imageSrc, description }: any) => (
  <>
    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 mt-6">
      <img
        src={imageSrc}
        alt={name}
        className="object-cover object-center w-full h-full"
      />
    </div>
    <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-6">{name}</h1>
    <p className="text-gray-700 text-xl text-center max-w-2xl mb-10">
      {description}
    </p>
  </>
)

export default ProfileSection

"use client"
import Image from "next/image";


const About = () => {
  return (
    <section className="bg-gray-800 min-h-screen flex flex-col justify-center items-center px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center my-12" style={{ color: "#1a7d85" }}>
        About Us
      </h1>

      <div className="grid grid-cols-1 mb-12 md:grid-cols-2 gap-8 w-full">
        {/* Section 1 */}
        <div className="flex w-full items-center justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden ">
            
            <Image
              src="https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148910730.jpg?t=st=1733379966~exp=1733383566~hmac=714cc8d12fdd4797d1475fef62fbd5872504f14716d9e517384f924bf0f85cd7&w=1060"
              alt="Image 1"
              width={384}
              height={384}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center  w-full px-4 ">
          <h1 className="text-3xl font-semibold mb-4" style={{ color: "#1a7d85" }}>
          Empowering Success Through Coaching


          </h1>
          <p className="text-white  text-lg font-normal ">
          "Our mission is to empower individuals to achieve their personal and professional goals through tailored coaching programs. We believe in unlocking your full potential by providing guidance, support, and actionable strategies."
          </p>
        </div>
        

        {/* Section 2 */}
        
        <div className="flex flex-col justify-center items-start w-full px-4">
          <h1 className="text-3xl font-semibold mb-4" style={{ color: "#1a7d85" }}>
          Customized Coaching for Every Journey
          </h1>
          <p className="text-white text-lg">
          "We understand that every individual’s journey is unique. That’s why we offer personalized coaching solutions that cater to your specific aspirations, challenges, and growth areas."
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden">
            <Image
              src="https://img.freepik.com/free-vector/speaker-communicating-with-media-workers-press-conference-flat-illustration_1284-65933.jpg?t=st=1733380078~exp=1733383678~hmac=578421a85250cdc6a42e56bde4d79fedf5daab5c592c4676c25f12cf0037ff4a&w=1060"
              alt="Image 2"
              width={384}
              height={384}
              className="object-cover"
            />
          </div>
        </div>
        {/* Section 3 */}
        <div className="flex w-full items-center justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden">
            <Image
              src="https://img.freepik.com/free-vector/company-providing-management-training-office-space-business-incubator-business-training-programs-shared-administrative-service-concept-bright-vibrant-violet-isolated-illustration_335657-867.jpg?t=st=1733380175~exp=1733383775~hmac=a104766939cd153130718e55f176a45db5d921f2a207de4ac63e7134fa5e31c4&w=1060"
              alt="Image 3"
              width={384}
              height={384}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-full px-4">
          <h1 className="text-3xl font-semibold mb-4" style={{ color: "#1a7d85" }}>
          Transformative Learning Experiences
          </h1>
          <p className="text-white text-lg">
          "Our approach combines proven methodologies and innovative techniques to ensure a transformative learning experience that equips you with the tools for lasting success."
          </p>
        </div>
        

        {/* Section 4 */}
       
        <div className="flex flex-col justify-center items-start w-full px-4">
          <h1 className="text-3xl font-semibold mb-4 text-[#1a7d85]" >
          A Community of Growth and Support
          </h1>
          <p className="text-white text-lg">
          "Join a thriving community of like-minded individuals, all driven to grow and succeed. Our coaching network fosters collaboration, learning, and mutual support."
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden">
            <Image
              src="https://img.freepik.com/free-vector/global-economi-growth-upward-arrow-green-background_1017-27099.jpg?t=st=1733484766~exp=1733488366~hmac=b153a50530fdcef42cb46eeacff40222f371e2c901b189f331edea9707d84489&w=1060"
              alt="Image 4"
              width={384}
              height={384}
              className="object-cover"
            />
          </div>
        </div>
        {/* section 5 */}
        <div className="flex w-full items-center justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden">
            <Image
              src="https://img.freepik.com/free-vector/business-success-depends-unlocking-keys-leadership-success-team-unity_1150-65806.jpg?t=st=1733484859~exp=1733488459~hmac=59095ad1332167c3726738bab627503a82fbbc68affbd0b5771697a3c052ccb5&w=1060"
              alt="Image 4"
              width={384}
              height={384}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-full px-4">
          <h1 className="text-3xl font-semibold mb-4 text-[#1a7d85]" >
          Unlocking Leadership Potential
          </h1>
          <p className="text-white text-lg">
          "Leadership is not just a role but a mindset. Our programs are designed to cultivate leadership skills, empowering individuals to inspire, influence, and innovate in their personal and professional lives. Whether you're a budding leader or an experienced one seeking growth, we guide you to unlock your leadership potential."
          </p>
        </div>
      
        {/* section 6 */}
        <div className="flex flex-col justify-center items-start w-full px-4">
          <h1 className="text-3xl font-semibold mb-4 text-[#1a7d85]" >
          Building Resilience for Lasting Success

          </h1>
          <p className="text-white  text-lg">
          "Success isn't just about reaching goals; it's about navigating challenges with resilience. Our coaching programs equip you with tools to develop mental toughness, adaptability, and the ability to thrive in the face of adversity."
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden">
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-flat-illustration-people-celebrating-thanksgiving_23-2149138550.jpg?t=st=1733380285~exp=1733383885~hmac=a69b93f9608aabf54e154b03004ed41e8f85e95587c1bce7fc4636ce76163ff7&w=740"
              alt="Image 4"
              width={384}
              height={384}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

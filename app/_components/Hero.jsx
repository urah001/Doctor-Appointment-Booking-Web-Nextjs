import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
   <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/doctors.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full rounded-3xl w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-4xl font-bold sm:text-4xl">
          Find & Book 
          <span className="text-primary"> Appointment </span>
          with your Fav
          <span className="text-primary"> Doctors</span>
        </h2>
        <p className="mt-4 text-gray-500">
          Welcome to Clinico, your trusted platform for connecting with top-rated medical professionals in your area. Whether you're looking for a skilled cardiologist, experienced dermatologist, or a family physician, we make it easy to find the right healthcare provider for your needs. With Clinico, you can browse a wide range of medical specialists, view detailed profiles, and book appointments—all in one place. Our platform ensures that you get the best care by connecting you to certified doctors with expertise across various fields of medicine. Simple. Convenient. Reliable healthcare at your fingertips.
        </p>
        <Button className="mt-10">Explore Now</Button>
      </div>
    </div>

    {/* Second Section */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
        <Image
          alt=""
          src="/map.svg"
          width={800}
          height={800}
          className="absolute inset-0 h-full rounded-3xl w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-4xl font-bold sm:text-4xl">
          <span className="text-primary">Navigate </span>
          to Your Clinic
        </h2>
        <p className="mt-4 text-gray-500">
          We've integrated an interactive map feature into the Clinico app, making it easier than ever to find your nearest clinic's location. With real-time directions and the ability to view nearby clinics, our app helps ensure you reach your appointment on time without any hassle. No more worrying about getting lost—our map guides you every step of the way.
        </p>
        <Button className="mt-10">Try the Map Feature</Button>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero
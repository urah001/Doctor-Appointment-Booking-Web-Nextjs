/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
                        domains:['res.cloudinary.com','lh3.googleusercontent.com',"s3.amazonaws.com","http:localhost:1337"],
        unoptimized:true
    }
};

export default nextConfig;

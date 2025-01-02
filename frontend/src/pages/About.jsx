import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';

function About() {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1="About" text2="Us" />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-12">
                <img
                    src={assets.about_img}
                    className="w-full md:max-w-[450px] md:w-1/2"
                    alt="About Us"
                />
                <div className="flex flex-col justify-center gap-4 text-gray-600 md:w-1/2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at
                        debitis, ad, facere illum inventore labore alias explicabo corrupti
                        beatae nam
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cum
                        iste totam corrupti excepturi velit, debitis sit blanditiis rem unde
                        consequatur magni eaque? Praesentium aspernatur est, eum neque fuga
                        porro?
                    </p>
                    <b>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore reiciendis eaque provident quis natus, ut quidem blanditiis corporis nihil quos alias molestiae dolores cum explicabo perspiciatis neque odio temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perspiciatis totam! Est debitis repellendus iste? Ducimus quod id, pariatur at dicta assumenda quia! Perferendis alias at cumque corporis, possimus odio?</p>

                </div>
            </div>

            <div className='text-2xl py-4'>
                <Title text1={'why'} text2={' us?'}/>
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-10'>
                <div className='border px-10 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum possimus non dignissimos molestias voluptas, accusantium dolore saepe esse amet odit deleniti rerum consequatur et sed.</p>
                </div>
                <div className='border px-10 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convinence</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum possimus non dignissimos molestias voluptas, accusantium dolore saepe esse amet odit deleniti rerum consequatur et sed.</p>
                </div>
                <div className='border px-10 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>24/7 Customer Service</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum possimus non dignissimos molestias voluptas, accusantium dolore saepe esse amet odit deleniti rerum consequatur et sed.</p>
                </div>
            </div>

            <NewsLetter/>
        </div>
    );
}

export default About;

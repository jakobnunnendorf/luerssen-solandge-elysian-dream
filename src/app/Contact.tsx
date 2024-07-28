import React from 'react';

function Contact() {
    return (
        <div className="w-full p-24 flex flex-col items-center justify-center gap-20">
            <div className="text-center flex gap-4 flex-col items-center justify-center">
                <h2 className="text-5xl">Get in Touch</h2>
                <p className="text-lg text-[#666] w-4/5">We&apos;d love to hear from you! Contact us for more information or to get started on your wedding website</p>
            </div>
            <form className="grid grid-cols-2 grid-rows-6 gap-y-6 gap-x-8 w-2/3 text-[#bcbcbc] ">
                <input type="text" name="first-name" placeholder="First Name" className=" bg-[#cfcfcf]/60 border px-4 py-2 rounded-md"/>
                <input type="text" name="last-name" placeholder="Last Name" className=" bg-[#cfcfcf]/60 border px-4 py-2 rounded-md"/>
                <input type="text" name="phone" placeholder="Phone" className=" bg-[#cfcfcf]/60 border px-4 py-2 rounded-md"/>
                <input type="text" name="email" placeholder="Email" className=" bg-[#cfcfcf]/60 border px-4 py-2 rounded-md"/>
                <input type="text" name="subject" placeholder="Subject" className=" bg-[#cfcfcf]/60 border px-4 py-2 rounded-md"/>
                <input type="text" name="website" placeholder="Website" className=" bg-[#cfcfcf]/60 border px-4 py-2 rounded-md"/>
                <textarea name="message" placeholder="Message" className=" bg-[#cfcfcf]/60 border px-4 py-2 col-span-2 row-span-2 rounded-md"/>
                <div className="col-span-2 flex items-center justify-center w-full h-full ">
                    <button type="submit" className="bg-[#A37C45] text-white px-4 py-2 rounded-md">Send Message</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
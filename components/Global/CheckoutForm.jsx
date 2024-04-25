'use client'
import { useRef } from "react";

const CheckoutForm = () => {
    const formRef = useRef(null);
    const action = async (data) => {
        const firstName = data.get("firstName");
        const lastName = data.get("lastName");
        const email = data.get("email");
        const phone = data.get("phone");
        const option = data.get("option");
        const des = data.get("message");

        console.log({name,email,phone,option,des});
      };
  return (
    <div>
        {/* <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form ref={formRef} action={action} className="space-y-4">
                        <div>
                            <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="First Name"
                            type="text"
                            
                            name="firstName"
                            />
                        </div>
                        <div>
                            <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Last Name"
                            type="text"
                            
                            name="lastName"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Email address"
                                type="email"
                                id="email"
                                name="email"
                            />
                            </div>

                            <div>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Phone Number"
                                type="tel"
                                id="phone"
                                name="phone"
                            />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                            <div>
                                <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Full address"
                                type="text"
                                name="address"
                                />
                            </div>

                            <div>

                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>

                            <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Message"
                            rows="8"
                            id="message"
                            name="message"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <button
                            type="submit"
                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                            Send Enquiry
                            </button>
                        </div>
                    </form>
                </div>
                </div>
        </div>
        </section> */}
    </div>
  )
}

export default CheckoutForm
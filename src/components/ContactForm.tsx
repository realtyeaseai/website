"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    client: '',
    cName: '',
    serviceType: '',
  });

  const [loading, setLoading] = useState(false);

  const clients = ['Agent', 'Property owner', 'Service Provider', 'Other'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.message || !form.client) {
      toast.error('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = res.headers.get('Content-Type');
      if (!res.ok || !contentType?.includes('application/json')) {
        console.error('❌ Unexpected response:', await res.text());
        toast.error('Something went wrong. Please try again.');
        return;
      }

      const data = await res.json();
      console.log('✅ Response:', data);

      toast.success('Message sent successfully!', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#1ca2dc',
          color: '#fff',
          fontWeight: '600',
        },
      });
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        client: '',
        cName: '',
        serviceType: '',
      });
    } catch (err: unknown) {
      console.error('❌ Error:', err);
      toast.error('Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // bg-gradient-to-bl from-violet-500 via-purple-800 to-indigo-900
  //bg-[radial-gradient(circle_at_top_right,_#00c26e,_#00d77ab3,_#66e6aab3,_#1e3d2f)]

  return (
    // bg-gradient-to-tr to-[#1ca2dcb5] from-[#1ca2dc]
    <div className="bg-neutral-200 dark:bg-transparent dark:border-[#ffffffb1] h-fit md:min-h-[700px] max-w-4xl w-full md:w-auto rounded-xl flex items-center justify-center flex-col p-6 dark:text-white font-bold text-black dark:border">
  <h2 className="text-2xl text-black dark:text-white mb-8">Get in Touch With Us</h2>
  <form onSubmit={handleSubmit} className="max-w-2xl w-full space-y-4">

    {/*----------------- Name Block ------------- */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <label htmlFor="fname" className="flex flex-col">
        <span className='w-full pb-2 text-[16px]'>First Name</span>
        <input
          type="text"
          placeholder="Jane"
          id='fname'
          className="input p-3 border rounded-[8px]"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          required
        />
      </label>
      <label htmlFor="lname" className="dark:text-white pb-2 flex flex-col">
        <span className='w-full pb-2 text-[16px]'>Last Name</span>
        <input
          type="text"
          placeholder="Doe"
          id='lname'
          className="input p-3 border rounded-[8px]"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          required
        />
      </label>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <label htmlFor="email" className="dark:text-white pb-2 flex flex-col">
        <span className='w-full pb-2 text-[16px]'>Email</span>
        <input
          type="email"
          placeholder="Ex. john.doe@gmail.com"
          id='email'
          className="input p-3 border rounded-[8px]"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </label>
      <label htmlFor="pNumber" className="dark:text-white pb-2 flex flex-col">
        <span className='w-full pb-2 text-[16px]'>Phone Number</span>
        <input
          type="tel"
          placeholder="Phone Number"
          id='pNumber'
          className="input w-full p-3 border rounded-[8px]"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
      </label>
    </div>

    <div className=''>
      <label htmlFor="cName" className="dark:text-white pb-2 flex flex-col">
        <span className='w-full pb-2 text-[16px]'>Company Name</span>
        <input
          type="text"
          placeholder="Ex. Co. M-Dash or N/A"
          id='cName'
          className="input w-full p-3 border rounded-[8px]"
          value={form.cName}
          onChange={(e) => setForm({ ...form, cName: e.target.value })}
          required
        />
      </label>
    </div>

    <div>
      <label className="text-[16px] dark:text-white pb-2 block">Who are you?</label>
      <div className="flex gap-4 flex-wrap">
        {clients.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={form.client === item}
            className={`border border-[#00000000] px-4 py-2 rounded-[8px] cursor-pointer dark:text-white ${
              form.client === item ? ' bg-[#1ca2dc] text-white' : 'border-black dark:border-white'
            }`}
            onClick={() => setForm({ ...form, client: item })}
          >
            {item}
          </button>
        ))}
        {form.client === 'Service Providers' && (
          <div className="mt-4">
            <label className="text-[16px] dark:text-white pb-2 block">Which service do you offer?</label>
            <div className="flex gap-4 flex-wrap">
              {['Web Development', 'Social Media Management', 'Business Development'].map((type) => (
                <button
                  key={type}
                  type="button"
                  aria-pressed={form.serviceType === type}
                  className={`border px-4 py-2 rounded-[8px] cursor-pointer dark:text-white ${
                    form.serviceType === type
                      ? 'border-2 border-black bg-gradient-to-tl from-green-400 to-green-600'
                      : 'border-white'
                  }`}
                  onClick={() =>
                    setForm({
                      ...form,
                      serviceType: type,
                    })
                  }
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

    <textarea
      placeholder="Type your message here ..."
      className="input min-h-32 w-full border rounded-[4px] p-2 overflow-auto no-scrollbar"
      value={form.message}
      onChange={(e) => setForm({ ...form, message: e.target.value })}
      required
    />

    <div className="flex mb-4 justify-center">
      <button
        type="submit"
        disabled={loading}
        className="bg-[#1ca2dc] dark:bg-white text-white dark:text-black hover:bg-[#1ca2dcd7] dark:hover:bg-neutral-300 w-full px-6 py-3 rounded-md font-medium disabled:opacity-60 cursor-pointer transition duration-300 "
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </div>
  </form>
</div>

  );
}


// 'use client';

// import Image from 'next/image';
// // import React from 'react';
// // import React, { useState } from 'react';
// // import toast from 'react-hot-toast';

// const ContactPage = () => {
//   //   const [form, setForm] = useState({
//   //   firstName: '',
//   //   lastName: '',
//   //   email: '',
//   //   phone: '',
//   //   message: '',
//   //   client: '',
//   // });

//   // const [loading, setLoading] = useState(false);

//   // const reasons = ['Agent', 'Property owners', 'Specialized Services', 'Others'];

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.message || !form.client) {
//   //     toast.error('All fields are required.');
//   //     setLoading(false);
//   //     return;
//   //   }

//   //   try {
//   //     const res = await fetch('/api/contact', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(form),
//   //     });

//   //     const contentType = res.headers.get('Content-Type');
//   //     if (!res.ok || !contentType?.includes('application/json')) {
//   //       console.error('❌ Unexpected response:', await res.text());
//   //       toast.error('Something went wrong. Please try again.');
//   //       return;
//   //     }

//   //     const data = await res.json();
//   //     console.log('✅ Response:', data);

//   //     toast.success('Message sent successfully!', {
//   //       icon: '✅',
//   //       style: {
//   //         borderRadius: '10px',
//   //         background: '#22c55e', // Tailwind green-500
//   //         color: '#fff',
//   //         fontWeight: '600',
//   //       },
//   //     });
//   //     setForm({
//   //       firstName: '',
//   //       lastName: '',
//   //       email: '',
//   //       phone: '',
//   //       message: '',
//   //       client: '',
//   //     });
//   //   } catch (err: unknown) {
//   //     console.error('❌ Error:', err);
//   //     toast.error('Failed to send. Please try again later.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black">
//       <div className="bg-gray-900 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-5xl w-full">
//         {/* Image */}
//         <div className="md:w-1/2">
//           <Image
//             src="/assets/img/team/working2.png" // 🔁 Replace with your actual path
//             alt="Support agent"
//             width={600}
//             height={500}
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Form */}
//         <div className="md:w-1/2 p-8">
//           <h2 className="text-2xl md:text-3xl font-bold pb-2">Send us a message</h2>
//           <p className="text-gray-400 mb-6">
//             Your satisfaction is our top priority, and we are committed to providing exceptional service and support
//           </p>

//           <form className="space-y-4">
//             <div>
//               <label className="block text-md font-medium text-gray-500 mb-1">
//                 Your Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 required
//                 placeholder="Name"
//                 className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-md font-medium text-gray-500 mb-1">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 required
//                 placeholder="Email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-md font-medium text-gray-500 mb-1">
//                 Phone Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 required
//                 placeholder="Phone"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-md font-medium text-gray-500 mb-1">
//                 Description <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 required
//                 placeholder="Message"
//                 rows={4}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 dark:text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

// pages/admin/dashboard.tsx
"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import "../../globals.css"

interface Contact {
  _id: string
  firstName: string
  lastName: string
  cName : string
  email: string
  phone: string
  client: string
  message: string
  createdAt: string
}

export default function Dashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('admin-auth') === 'true'
    if (!isAuthenticated) {
      router.push('/admin/login')
    }

    const fetchContacts = async () => {
      try {
        const res = await fetch('/api/contact', {
          headers: { 'Cache-Control': 'no-cache' }
        })
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setContacts(data.contacts)
      } catch (err) {
        console.error('Failed to load contacts:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchContacts()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin-auth')
    router.push('/admin/login')
  }

  if (loading) {
    return <div className="p-10 text-white">Loading contacts...</div>
  }

  if (error) {
    return <div className="p-10 text-red-500">Failed to load contacts.</div>
  }

  return (
    <motion.div
      className="p-10 text-white min-h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contact Submissions
        </motion.h1>
        <motion.button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded cursor-pointer"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Logout
        </motion.button>
      </div>

      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {contacts.map((contact, idx) => (
            <motion.div
              key={contact._id}
              className="border border-neutral-700 p-4 rounded-lg bg-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <p><strong>Name:</strong> {contact.firstName} {contact.lastName}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>cName:</strong> {contact.cName}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Reason:</strong> {contact.client}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <p className="text-xs text-neutral-500 mt-2">
                <strong>Submitted:</strong> {new Date(contact.createdAt).toLocaleString()}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

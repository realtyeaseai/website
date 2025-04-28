// pages/admin/dashboard.tsx
"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import "../../globals.css"
import { toast } from 'react-hot-toast'
import { IoTrashBin } from "react-icons/io5";

interface Contact {
  _id: string
  firstName: string
  lastName: string
  cName: string
  email: string
  phone: string
  client: string
  serviceType: string
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

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) {
        throw new Error('Failed to delete')
      }
      setContacts(prev => prev.filter(contact => contact._id !== id))
      toast.success('Contact deleted successfully!')
    } catch (err) {
      console.error('Delete error:', err)
      toast.error('Failed to delete contact.')
    }
  }

  const handleClearAll = async () => {
    if (!confirm('Are you sure you want to delete ALL contacts? This action cannot be undone.')) {
      return
    }
    try {
      const res = await fetch('/api/contact/clear', {
        method: 'DELETE',
      })
      if (!res.ok) {
        throw new Error('Failed to clear all contacts')
      }
      setContacts([]) // Clear UI
      toast.success('All contacts deleted successfully!')
    } catch (err) {
      console.error('Clear all error:', err)
      toast.error('Failed to delete all contacts.')
    }
  }

  if (loading) {
    return <div className="p-10 text-white">Loading contacts...</div>
  }

  if (error) {
    return <div className="p-10 text-red-500">Failed to load contacts.</div>
  }

  return (
    <motion.div
      className="p-10 text-white min-h-screen bg-black relative"
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
        <div className="flex gap-4">
          <motion.button
            onClick={handleClearAll}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded cursor-pointer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
           ⚠️ Clear All
          </motion.button>
          <motion.button
            onClick={handleLogout}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded cursor-pointer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Logout
          </motion.button>
        </div>
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
              className="border border-neutral-700 p-4 rounded-lg bg-neutral-900 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <p><strong>Name:</strong> {contact.firstName} {contact.lastName}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>cName:</strong> {contact.cName}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Client:</strong> {contact.client}</p>
              <p><strong>Service Type:</strong> {contact.serviceType}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <p className="text-xs text-neutral-500 mt-2">
                <strong>Submitted:</strong> {new Date(contact.createdAt).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(contact._id)}
                className="absolute bottom-2 right-2 bg-red-800 hover:bg-red-700 text-white rounded px-3 py-1 text-lg flex justify-center items-center gap-1 cursor-pointer"
              >
                <IoTrashBin /> Delete
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

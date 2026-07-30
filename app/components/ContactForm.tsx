'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FaWhatsapp } from 'react-icons/fa'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(9, 'Enter a valid phone number'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  device: z.string().min(2, 'Please describe your device'),
  issue: z.string().min(10, 'Please describe the issue (at least 10 characters)'),
  houseVisit: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>

const WHATSAPP_NUMBER = '254799554997'
const BASE_MESSAGE = 'hey Ben I was checking on your website and I have a question'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    // Build WhatsApp message
    const lines = [
      BASE_MESSAGE,
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Device: ${data.device}`,
      `Issue: ${data.issue}`,
    ]
    if (data.houseVisit) {
      lines.push('House visit requested: Yes')
    }
    const message = encodeURIComponent(lines.join('\n'))
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

    setSubmitted(true)
    // Small delay so user sees the success state, then open WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank')
    }, 400)
  }

  const inputClass =
    'w-full px-4 py-3 bg-dark-600 border border-dark-400 rounded-lg text-white placeholder-steel-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-steel-lighter mb-1.5">Full Name *</label>
          <input
            {...register('name')}
            className={inputClass}
            placeholder="e.g. John Kamau"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-steel-lighter mb-1.5">Phone / WhatsApp *</label>
          <input
            {...register('phone')}
            className={inputClass}
            placeholder="+254 7XX XXX XXX"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-steel-lighter mb-1.5">Email (optional)</label>
        <input
          {...register('email')}
          type="email"
          className={inputClass}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-steel-lighter mb-1.5">Your Device *</label>
        <input
          {...register('device')}
          className={inputClass}
          placeholder="e.g. Samsung Galaxy A32, iPhone 12, Tecno Spark 7"
        />
        {errors.device && <p className="text-red-400 text-xs mt-1.5">{errors.device.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-steel-lighter mb-1.5">Describe the Issue *</label>
        <textarea
          {...register('issue')}
          rows={4}
          className={inputClass}
          placeholder="e.g. Cracked screen, battery not charging, phone hanging..."
        />
        {errors.issue && <p className="text-red-400 text-xs mt-1.5">{errors.issue.message}</p>}
      </div>

      <div className="flex items-start gap-3 bg-dark-600 border border-dark-400 rounded-lg p-4">
        <input
          {...register('houseVisit')}
          type="checkbox"
          id="houseVisit"
          className="mt-0.5 accent-accent"
        />
        <label htmlFor="houseVisit" className="text-sm text-steel-lighter cursor-pointer">
          <span className="text-white font-medium">Request house-to-house visit</span>
          <br />
          <span className="text-xs">Our technician comes to your location in Limuru and surrounding areas.</span>
        </label>
      </div>

      {submitted ? (
        <div className="bg-green-900/30 border border-green-600/40 text-green-400 p-4 rounded-lg text-sm flex items-center gap-3">
          <FaWhatsapp className="text-2xl shrink-0" />
          <div>
            <div className="font-semibold text-green-300 mb-0.5">Opening WhatsApp...</div>
            <div>Your message is being sent to Ben on WhatsApp (+254 799 554997).</div>
          </div>
        </div>
      ) : (
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-accent w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          <FaWhatsapp className="text-xl" />
          Send via WhatsApp
        </button>
      )}

      <p className="text-xs text-steel text-center">
        Submitting this form opens WhatsApp with your details pre-filled to +254 799 554997
      </p>
    </form>
  )
}

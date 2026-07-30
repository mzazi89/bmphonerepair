export interface Service {
  id: string
  name: string
  description: string
  price: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

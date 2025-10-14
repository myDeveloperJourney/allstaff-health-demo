import { z } from 'zod'

export const clinicianApplicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  
  // Location
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please enter your state'),
  
  // Professional Information
  specialty: z.string().min(1, 'Please select your specialty'),
  yearsExperience: z.string().min(1, 'Please select your experience level'),
  
  // Shift Preferences
  shiftPreferences: z.array(z.string()).min(1, 'Please select at least one shift preference'),
  
  // Resume Upload (optional for demo)
  resume: z.any().optional(),
  
  // Consent
  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and privacy policy'
  })
})

export const facilityRequestSchema = z.object({
  // Contact Information
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
  workEmail: z.string().email('Please enter a valid work email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  
  // Organization
  organizationName: z.string().min(2, 'Organization name must be at least 2 characters'),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please enter your state'),
  
  // Staffing Needs
  roleNeeded: z.string().min(1, 'Please specify the role needed'),
  numberOfOpenings: z.string().min(1, 'Please specify number of openings'),
  shiftType: z.string().min(1, 'Please select shift type'),
  startDate: z.string().min(1, 'Please provide approximate start date'),
  contractLength: z.string().min(1, 'Please select contract length'),
  
  // Optional
  budgetRange: z.string().optional(),
  notes: z.string().optional(),
  
  // Consent
  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and privacy policy'
  })
})

export type ClinicianApplication = z.infer<typeof clinicianApplicationSchema>
export type FacilityRequest = z.infer<typeof facilityRequestSchema>
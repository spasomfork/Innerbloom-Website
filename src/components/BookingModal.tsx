import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Mail, Phone } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Mindfulness-Based Therapy',
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a date';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate responsive JS submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Mindfulness-Based Therapy',
      preferredDate: '',
      preferredTime: '10:00 AM',
      notes: '',
    });
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="booking-modal-content"
        className="relative w-full max-w-lg bg-[#fbfcfb] rounded-2xl shadow-2xl border border-emerald-900/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1e2f1d] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Book A Session</h3>
            <p className="text-xs text-emerald-200/90 mt-0.5">
              InnerBloom Somatic Psychotherapy & Consultation
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-emerald-200/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-[#1e2f1d]">Appointment Requested!</h4>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold">{formData.fullName}</span>. We have scheduled your consultation for{' '}
                  <span className="font-semibold text-emerald-800">
                    {formData.preferredDate} at {formData.preferredTime}
                  </span>.
                </p>
              </div>

              <div className="bg-[#f0f4ef] rounded-xl p-4 text-xs text-left text-gray-700 space-y-1.5 border border-emerald-900/10">
                <div>
                  <span className="font-medium text-gray-500">Service:</span> {formData.service}
                </div>
                <div>
                  <span className="font-medium text-gray-500">Confirmation Sent To:</span>{' '}
                  {formData.email}
                </div>
                <div>
                  <span className="font-medium text-gray-500">Phone:</span> {formData.phone}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Book Another Session
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-[#5e8252] hover:bg-[#507045] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-[11px] mt-0.5">{errors.fullName}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-[11px] mt-0.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 012-3456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-0.5">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Select Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="Mindfulness-Based Therapy">Mindfulness-Based Therapy</option>
                  <option value="Trauma Recovery">Trauma Recovery & Somatic Release</option>
                  <option value="Emotional Transitions">Emotional Transitions Support</option>
                  <option value="Anxiety Management">Anxiety & Nervous System Reset</option>
                  <option value="Personal Growth">Personal Growth & Empowerment</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
                        errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-red-500 text-[11px] mt-0.5">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:30 PM">03:30 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-[#5e8252] hover:bg-[#507045] disabled:opacity-60 transition-all shadow-md active:scale-98"
                >
                  {isSubmitting ? 'Confirming Appointment...' : 'Confirm Session Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

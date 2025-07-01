import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const services = [
    'Audit de sécurité',
    'Conception réseau',
    'Migration cloud',
    'Supervision infrastructure',
    'Virtualisation',
    'Support technique',
    'Formation équipe',
    'Autre'
  ]

  const budgetRanges = [
    'Moins de 5 000€',
    '5 000€ - 15 000€',
    '15 000€ - 30 000€',
    '30 000€ - 50 000€',
    'Plus de 50 000€',
    'À discuter'
  ]

  const timelines = [
    'Urgent (< 1 mois)',
    'Court terme (1-3 mois)',
    'Moyen terme (3-6 mois)',
    'Long terme (6+ mois)',
    'Flexible'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  if (submitStatus === 'success') {
    return (
      <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
              Message envoyé avec succès !
            </h3>
            <p className="text-green-600 dark:text-green-300">
              Je vous répondrai dans les plus brefs délais, généralement sous 24h.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
          Démarrer un projet
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Décrivez votre projet et recevez un devis personnalisé sous 24h
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations personnelles */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Nom de votre entreprise"
            />
          </div>

          {/* Type de service */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Type de service recherché *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {services.map((service) => (
                <label key={service} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value={service}
                    checked={formData.service === service}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <Badge
                    variant={formData.service === service ? "default" : "outline"}
                    className={`w-full text-center py-2 cursor-pointer transition-colors ${
                      formData.service === service
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    {service}
                  </Badge>
                </label>
              ))}
            </div>
          </div>

          {/* Budget et timeline */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget estimé
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Sélectionner un budget</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Délai souhaité
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Sélectionner un délai</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description du projet *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Décrivez votre projet, vos besoins spécifiques, votre infrastructure actuelle, etc."
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.service || !formData.message}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Envoyer ma demande
              </>
            )}
          </Button>

          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <AlertCircle className="w-4 h-4 inline mr-1" />
            Réponse garantie sous 24h • Devis gratuit et sans engagement
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm


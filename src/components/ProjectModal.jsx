import { X, Github, ExternalLink, Calendar, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null

  const projectDetails = {
    1: {
      duration: "3 mois",
      team: "Projet personnel",
      status: "Déployé en production",
      challenges: [
        "Intégration complexe entre Zabbix et Asterisk",
        "Configuration avancée de la sécurité OPNsense",
        "Optimisation des performances VoIP",
        "Mise en place de la surveillance proactive"
      ],
      results: [
        "Réduction de 80% du temps de détection des pannes",
        "Amélioration de 95% de la qualité des appels",
        "Sécurisation complète contre les attaques VoIP",
        "Surveillance en temps réel 24/7"
      ],
      architecture: "Architecture en 3 tiers avec DMZ sécurisée, serveur de supervision centralisé et infrastructure VoIP redondante.",
      github: "https://github.com/mohamed-elallaoui/voisecure",
      demo: "https://demo.voisecure.com"
    },
    2: {
      duration: "2 mois",
      team: "Équipe de 3 personnes",
      status: "Déployé et opérationnel",
      challenges: [
        "Conception d'une architecture réseau complexe sur 5 étages",
        "Implémentation de la redondance HSRP",
        "Configuration des VLANs et du routage inter-VLAN",
        "Intégration de la téléphonie IP Cisco CME"
      ],
      results: [
        "Infrastructure réseau haute disponibilité",
        "Segmentation sécurisée par département",
        "Téléphonie IP intégrée pour 200+ utilisateurs",
        "Redondance complète des services critiques"
      ],
      architecture: "Architecture hiérarchique avec switches d'étage, cœur de réseau redondant et services centralisés.",
      github: "https://github.com/mohamed-elallaoui/enterprise-network",
      demo: null
    },
    3: {
      duration: "1 mois",
      team: "Projet personnel",
      status: "En production",
      challenges: [
        "Configuration sécurisée d'un serveur cloud public",
        "Mise en place du HTTPS avec Let's Encrypt",
        "Gestion des utilisateurs et des quotas",
        "Sauvegarde automatisée des données"
      ],
      results: [
        "50 comptes étudiants actifs",
        "3 espaces collaboratifs professeurs",
        "99.9% de disponibilité du service",
        "Sauvegardes automatiques quotidiennes"
      ],
      architecture: "Serveur dédié avec pile LAMP, accès sécurisé HTTPS et système de sauvegarde automatisé.",
      github: "https://github.com/mohamed-elallaoui/nextcloud-school",
      demo: "https://cloud.school-demo.com"
    }
  }

  const details = projectDetails[project.id] || {}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{project.subtitle}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Info Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Durée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{details.duration}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Équipe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{details.team}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Statut
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">{details.status}</p>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description du projet</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Architecture */}
          {details.architecture && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Architecture technique</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{details.architecture}</p>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {details.challenges && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Défis techniques</h3>
              <ul className="space-y-2">
                {details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {details.results && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Résultats obtenus</h3>
              <ul className="space-y-2">
                {details.results.map((result, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Fonctionnalités clés</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {details.github && (
              <Button className="flex-1" onClick={() => window.open(details.github, '_blank')}>
                <Github className="w-4 h-4 mr-2" />
                Voir le code source
              </Button>
            )}
            {details.demo && (
              <Button variant="outline" className="flex-1" onClick={() => window.open(details.demo, '_blank')}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir la démo
              </Button>
            )}
            <Button variant="outline" onClick={onClose}>
              Fermer
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal


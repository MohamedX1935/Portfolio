import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Shield, Cloud, Network, Monitor, Database } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import ContactForm from './components/ContactForm.jsx'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const projects = [
    {
      id: 1,
      title: "VOISECURE",
      subtitle: "Surveillance avancée et amélioration de téléphonie IP",
      description: "Intégration d'un serveur Zabbix pour la surveillance avancée d'une infrastructure de téléphonie IP basée sur Asterisk et sécurisée par OPNsense.",
      technologies: ["Zabbix", "Asterisk", "OPNsense", "Ubuntu Server", "VMware ESXi", "VoIP", "Cybersécurité"],
      category: "security",
      features: [
        "Surveillance en temps réel",
        "Détection proactive des problèmes",
        "Protection contre les attaques VoIP",
        "Segmentation réseau (DMZ/LAN)"
      ]
    },
    {
      id: 2,
      title: "Réseau d'Entreprise",
      subtitle: "Conception et mise en place d'un réseau sur 5 étages",
      description: "Conception, dimensionnement et implémentation d'un réseau local (LAN) pour une entreprise avec segmentation en 5 VLANs et équipements Cisco.",
      technologies: ["Cisco Catalyst", "VLANs", "HSRP", "EtherChannel", "VTP", "DHCP", "CME"],
      category: "network",
      features: [
        "Segmentation réseau avancée",
        "Redondance des services (HSRP)",
        "Agrégation de liens (EtherChannel)",
        "Téléphonie IP (CME)"
      ]
    },
    {
      id: 3,
      title: "Cloud Scolaire Privé",
      subtitle: "Nextcloud pour usage éducatif",
      description: "Mise en place d'un serveur cloud privé pour un usage scolaire avec configuration avancée pour la sécurité et l'accessibilité.",
      technologies: ["Nextcloud", "Ubuntu Server", "Apache", "MariaDB", "Let's Encrypt", "DDNS"],
      category: "cloud",
      features: [
        "Cloud privé accessible via Internet",
        "Espaces personnels étudiants (50 comptes)",
        "Authentification sécurisée",
        "Système de sauvegarde automatisé"
      ]
    }
  ]

  const skills = {
    "Virtualisation & Cloud": ["VMware ESXi", "Proxmox", "Hyper-V", "Nextcloud", "Docker"],
    "Réseaux": ["Cisco", "VLANs", "VPN", "OSPF", "HSRP", "EtherChannel"],
    "Sécurité": ["PFSense", "OPNsense", "Fortinet", "Palo Alto", "Suricata", "IDS/IPS"],
    "Supervision": ["Zabbix", "Centreon", "Nagios", "SNMP", "Monitoring"],
    "Systèmes": ["Linux", "Windows Server", "Active Directory", "PowerShell"],
    "Téléphonie IP": ["Asterisk", "FreePBX", "Cisco CME", "VoIP", "SIP"]
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'security': return <Shield className="w-6 h-6" />
      case 'network': return <Network className="w-6 h-6" />
      case 'cloud': return <Cloud className="w-6 h-6" />
      default: return <Code className="w-6 h-6" />
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'security': return 'bg-red-500/10 text-red-400 border-red-500/20'
      case 'network': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
      case 'cloud': return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ME</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">Mohamed El Allaoui</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Accueil</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projets</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Compétences</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="text-gray-700 dark:text-gray-300"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Accueil</a>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projets</a>
                <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Compétences</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Monitor className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Mohamed El Allaoui
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Technicien Spécialisé en Infrastructure Digitale
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/20">
                <Shield className="w-4 h-4 mr-1" />
                Cybersécurité
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                <Cloud className="w-4 h-4 mr-1" />
                Cloud Computing
              </Badge>
              <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                <Network className="w-4 h-4 mr-1" />
                Réseaux
              </Badge>
              <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                <Database className="w-4 h-4 mr-1" />
                Virtualisation
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir mes projets
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-700">
                <Mail className="w-4 h-4 mr-2" />
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mes Projets
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Découvrez mes réalisations techniques en infrastructure digitale, cybersécurité et administration systèmes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)}
                    </div>
                    <Badge variant="outline" className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fonctionnalités clés :</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" onClick={() => openProjectModal(project)}>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Détails
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Compétences Techniques
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expertise approfondie en infrastructure IT, cybersécurité et administration systèmes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-blue-500/10 hover:text-blue-400 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contactez-moi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Prêt à collaborer sur vos projets d'infrastructure digitale et de cybersécurité
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      Informations de contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">mohammedelalaoui532@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">0712695714</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">Rabat, Maroc</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">Mohammed EL Alaoui</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      Services proposés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center">
                        <Shield className="w-4 h-4 text-red-400 mr-2" />
                        Audit et sécurisation d'infrastructure
                      </li>
                      <li className="flex items-center">
                        <Network className="w-4 h-4 text-cyan-400 mr-2" />
                        Conception et déploiement de réseaux
                      </li>
                      <li className="flex items-center">
                        <Cloud className="w-4 h-4 text-blue-400 mr-2" />
                        Migration et gestion cloud
                      </li>
                      <li className="flex items-center">
                        <Monitor className="w-4 h-4 text-green-400 mr-2" />
                        Supervision et monitoring
                      </li>
                      <li className="flex items-center">
                        <Database className="w-4 h-4 text-purple-400 mr-2" />
                        Virtualisation d'infrastructure
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        Disponibilité
                      </h3>
                      <p className="text-blue-600 dark:text-blue-300 mb-4">
                        Actuellement disponible pour de nouveaux projets
                      </p>
                      <div className="flex justify-center space-x-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Missions courtes
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Projets long terme
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Mohamed El Allaoui. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  )
}

export default App


/* Site behavior: i18n, navigation, and progressive enhancement. */
const translations = {
  en: {
    nav: {
      experience: "Experience",
      impact: "Impact",
      skills: "Skills",
      education: "Education",
      volunteering: "Volunteering",
      contact: "Contact"
    },
    hero: {
      kicker: "Manager • Monetization Analytics • Retail Media",
      title: "Driving revenue growth through data-driven monetization strategies.",
      lead: "Analytics leader specializing in retail media monetization, yield optimization, and product analytics. I transform complex data into actionable insights that drive business decisions and revenue growth. Expert in AI-assisted development, Vibe Coding, and modern AI-powered coding workflows that accelerate delivery and enhance code quality.",
      viewExperience: "View Experience",
      connect: "Connect",
      recommendations: "Professional Recommendations"
    },
    sections: {
      experience: "Professional Experience",
      experienceDesc: "Progressive leadership in retail media analytics with a strong technical foundation.",
      impact: "Key Achievements",
      impactDesc: "Measurable impact across analytics, engineering, and business outcomes.",
      skills: "Core Competencies",
      skillsDesc: "Technical expertise and analytical capabilities.",
      education: "Education",
      educationDesc: "Advanced degrees in analytics, business administration, and engineering.",
      volunteering: "Community Engagement",
      volunteeringDesc: "Dedicated service to community and faith-based organizations.",
      contact: "Contact",
      contactDesc: "Open to discussing opportunities and collaborations."
    },
    experience: {
      manager1: {
        1: "Lead monetization analytics strategy, partnering with cross-functional stakeholders to enhance measurement frameworks and drive data-informed decision-making.",
        2: "Develop and present executive-level insights and performance narratives that align leadership teams on key metrics and strategic priorities.",
        3: "Architect scalable analytics workflows using Python and SQL, reducing analysis time by 40% while improving accuracy and reproducibility.",
        4: "Leverage AI-assisted development and Vibe Coding methodologies to accelerate project delivery, enhance code quality, and maintain high standards in analytics engineering."
      },
      manager2: {
        1: "Owned yield analytics and insights delivery, providing critical data that directly informed monetization strategy and pricing decisions.",
        2: "Translated complex analytical findings into actionable business recommendations, driving cross-functional alignment and measurable outcomes.",
        3: "Established standardized reporting frameworks that improved stakeholder visibility into yield performance by 60%."
      },
      manager3: {
        1: "Led advanced analytics initiatives that directly supported monetization strategy and product roadmap decisions.",
        2: "Built predictive models and measurement frameworks that improved revenue forecasting accuracy and product performance insights.",
        3: "Collaborated with product and engineering teams to implement data-driven optimizations that increased monetization efficiency."
      },
      manager4: {
        1: "Delivered comprehensive analytics and insights that informed product development and monetization strategy.",
        2: "Developed key performance indicators and dashboards that enabled data-driven decision-making across product and business teams.",
        3: "Established analytics best practices and documentation standards that improved team efficiency and knowledge sharing."
      },
      engineer: {
        1: "Built a streaming pipeline from IoT collection into centralized storage using a Databricks Delta Lake architecture.",
            2: "Reduced AWS storage + instance costs by <strong>88%</strong> through deduplication, compute management, and Python ingestion.",
        3: "Created responsive Python dashboards enabling real-time company-wide data visualization and analytics."
      },
      consultant: {
        1: "Delivered technical consultation for SAP rollout and database performance topics (SAP HANA, Oracle, MS SQL, Sybase).",
            2: "Completed <strong>200+</strong> technical projects; earned multiple certifications including Certified SAP Associate.",
        3: "Created knowledge-base documentation used for onboarding and internal reference."
      }
    },
    achievements: {
      cost: {
        title: "Cost optimization",
        pill: "Data Engineering",
            desc: "Reduced AWS storage + instance costs by <strong>88%</strong> via deduplication, resource management, and Python tooling."
      },
      volume: {
        title: "High-volume delivery",
        pill: "Enterprise Support",
            desc: "Completed <strong>200+ technical projects</strong> across SAP/database work with strong client outcomes."
      },
      retail: {
        title: "Retail media leadership",
        pill: "Monetization",
        desc: "Led yield and monetization analytics initiatives that improved measurement accuracy and enabled data-driven strategic decisions across retail media operations."
      },
      data: {
        title: "Data-driven decision making",
        pill: "Analytics Leadership",
        desc: "Designed and deployed executive dashboards and analytical frameworks that enable data-driven decision-making across technical and business teams."
      },
      ai: {
        title: "AI-powered development",
        pill: "Modern Workflows",
        desc: "Experienced in AI-assisted development and vibe coding, leveraging cutting-edge AI tools to accelerate development cycles and enhance code quality."
      }
    }
  },
  es: {
    nav: {
      experience: "Experiencia",
      impact: "Impacto",
      skills: "Habilidades",
      education: "Educación",
      volunteering: "Voluntariado",
      contact: "Contacto"
    },
    hero: {
      kicker: "Gerente • Análisis de Monetización • Medios Minoristas",
      title: "Impulsando el crecimiento de ingresos a través de estrategias de monetización basadas en datos.",
      lead: "Líder en análisis especializado en monetización de medios minoristas, optimización de rendimiento y análisis de productos. Transformo datos complejos en insights accionables que impulsan decisiones comerciales y crecimiento de ingresos. Experto en desarrollo asistido por IA, Vibe Coding y flujos de trabajo modernos de codificación impulsados por IA que aceleran la entrega y mejoran la calidad del código.",
      viewExperience: "Ver Experiencia",
      connect: "Conectar",
      recommendations: "Recomendaciones Profesionales"
    },
    sections: {
      experience: "Experiencia Profesional",
      experienceDesc: "Liderazgo progresivo en análisis de medios minoristas con una base técnica sólida.",
      impact: "Logros Clave",
      impactDesc: "Impacto medible en análisis, ingeniería y resultados comerciales.",
      skills: "Competencias Principales",
      skillsDesc: "Experiencia técnica y capacidades analíticas.",
      education: "Educación",
      educationDesc: "Títulos avanzados en análisis, administración de empresas e ingeniería.",
      volunteering: "Compromiso Comunitario",
      volunteeringDesc: "Servicio dedicado a organizaciones comunitarias y basadas en la fe.",
      contact: "Contacto",
      contactDesc: "Abierto a discutir oportunidades y colaboraciones."
    },
    experience: {
      manager1: {
        1: "Liderar estrategia de análisis de monetización, colaborando con partes interesadas multifuncionales para mejorar marcos de medición e impulsar la toma de decisiones basada en datos.",
        2: "Desarrollar y presentar insights de nivel ejecutivo y narrativas de rendimiento que alinean equipos de liderazgo en métricas clave y prioridades estratégicas.",
        3: "Arquitecturar flujos de trabajo de análisis escalables usando Python y SQL, reduciendo el tiempo de análisis en 40% mientras se mejora la precisión y reproducibilidad.",
        4: "Aprovechar metodologías de desarrollo asistido por IA y Vibe Coding para acelerar la entrega de proyectos, mejorar la calidad del código y mantener altos estándares en ingeniería de análisis."
      },
      manager2: {
        1: "Gestioné análisis de rendimiento y entrega de insights, proporcionando datos críticos que informaron directamente la estrategia de monetización y decisiones de precios.",
        2: "Traduje hallazgos analíticos complejos en recomendaciones comerciales accionables, impulsando alineación multifuncional y resultados medibles.",
        3: "Establecí marcos de informes estandarizados que mejoraron la visibilidad de las partes interesadas en el rendimiento de yield en un 60%."
      },
      manager3: {
        1: "Lideré iniciativas de análisis avanzado que apoyaron directamente decisiones de estrategia de monetización y hoja de ruta de productos.",
        2: "Construí modelos predictivos y marcos de medición que mejoraron la precisión de pronósticos de ingresos e insights de rendimiento de productos.",
        3: "Colaboré con equipos de producto e ingeniería para implementar optimizaciones basadas en datos que aumentaron la eficiencia de monetización."
      },
      manager4: {
        1: "Entregué análisis e insights integrales que informaron el desarrollo de productos y la estrategia de monetización.",
        2: "Desarrollé indicadores clave de rendimiento y dashboards que permitieron la toma de decisiones basada en datos en equipos de producto y negocios.",
        3: "Establecí mejores prácticas de análisis y estándares de documentación que mejoraron la eficiencia del equipo y el intercambio de conocimientos."
      },
      engineer: {
        1: "Construí una canalización de transmisión desde la recopilación de IoT hasta almacenamiento centralizado usando una arquitectura Databricks Delta Lake.",
        2: "Reduje los costos de almacenamiento e instancias de AWS en 88% mediante deduplicación, gestión de cómputo e ingestión de Python.",
        3: "Creé dashboards responsivos de Python que permiten visualización de datos y análisis en tiempo real en toda la empresa."
      },
      consultant: {
        1: "Proporcioné consultoría técnica para implementación de SAP y temas de rendimiento de bases de datos (SAP HANA, Oracle, MS SQL, Sybase).",
        2: "Completé más de 200 proyectos técnicos; obtuve múltiples certificaciones incluyendo Asociado Certificado de SAP.",
        3: "Creé documentación de base de conocimientos utilizada para incorporación y referencia interna."
      }
    },
    achievements: {
      cost: {
        title: "Optimización de costos",
        pill: "Ingeniería de Datos",
        desc: "Reduje los costos de almacenamiento e instancias de AWS en 88% mediante deduplicación, gestión de recursos y herramientas de Python."
      },
      volume: {
        title: "Entrega de alto volumen",
        pill: "Soporte Empresarial",
        desc: "Completé más de 200 proyectos técnicos en trabajo SAP/base de datos con fuertes resultados para clientes."
      },
      retail: {
        title: "Liderazgo en medios minoristas",
        pill: "Monetización",
        desc: "Lideré iniciativas de análisis de yield y monetización que mejoraron la precisión de medición y permitieron decisiones estratégicas basadas en datos en operaciones de medios minoristas."
      },
      data: {
        title: "Toma de decisiones basada en datos",
        pill: "Liderazgo en Análisis",
        desc: "Diseñé e implementé dashboards ejecutivos y marcos analíticos que permiten la toma de decisiones basada en datos en equipos técnicos y comerciales."
      },
      ai: {
        title: "Desarrollo impulsado por IA",
        pill: "Flujos de Trabajo Modernos",
        desc: "Experimentado en desarrollo asistido por IA y codificación intuitiva, aprovechando herramientas de IA de vanguardia para acelerar ciclos de desarrollo y mejorar la calidad del código."
      }
    }
  },
  de: {
    nav: {
      experience: "Erfahrung",
      impact: "Wirkung",
      skills: "Fähigkeiten",
      education: "Bildung",
      volunteering: "Ehrenamt",
      contact: "Kontakt"
    },
    hero: {
      kicker: "Manager • Monetarisierungsanalyse • Einzelhandelsmedien",
      title: "Umsatzwachstum durch datengesteuerte Monetarisierungsstrategien vorantreiben.",
      lead: "Analytics-Leiter mit Spezialisierung auf Einzelhandelsmedien-Monetarisierung, Yield-Optimierung und Produktanalysen. Ich transformiere komplexe Daten in umsetzbare Erkenntnisse, die Geschäftsentscheidungen und Umsatzwachstum vorantreiben. Experte in KI-unterstützter Entwicklung, Vibe Coding und modernen KI-gestützten Codierungs-Workflows, die die Lieferung beschleunigen und die Codequalität verbessern.",
      viewExperience: "Erfahrung anzeigen",
      connect: "Verbinden",
      recommendations: "Professionelle Empfehlungen"
    },
    sections: {
      experience: "Berufserfahrung",
      experienceDesc: "Fortschrittliche Führung in Einzelhandelsmedien-Analysen mit starker technischer Grundlage.",
      impact: "Wichtige Erfolge",
      impactDesc: "Messbare Auswirkungen in Analyse, Engineering und Geschäftsergebnissen.",
      skills: "Kernkompetenzen",
      skillsDesc: "Technische Expertise und analytische Fähigkeiten.",
      education: "Bildung",
      educationDesc: "Fortgeschrittene Abschlüsse in Analyse, Betriebswirtschaft und Ingenieurwesen.",
      volunteering: "Gemeinschaftliches Engagement",
      volunteeringDesc: "Hingebungsvoller Dienst an Gemeinschafts- und glaubensbasierten Organisationen.",
      contact: "Kontakt",
      contactDesc: "Offen für Diskussionen über Möglichkeiten und Zusammenarbeit."
    },
    experience: {
      manager1: {
        1: "Leitung der Monetarisierungsanalyse-Strategie, Partnerschaft mit funktionsübergreifenden Stakeholdern zur Verbesserung von Messframeworks und datengestützter Entscheidungsfindung.",
        2: "Entwicklung und Präsentation von Erkenntnissen auf Führungsebene und Leistungsnarrativen, die Führungsteams auf Schlüsselkennzahlen und strategische Prioritäten ausrichten.",
        3: "Architektur skalierbarer Analyse-Workflows mit Python und SQL, Reduzierung der Analysezeit um 40% bei gleichzeitiger Verbesserung von Genauigkeit und Reproduzierbarkeit.",
        4: "Nutzung von KI-unterstützten Entwicklungs- und Vibe Coding-Methodologien zur Beschleunigung der Projektlieferung, Verbesserung der Codequalität und Aufrechterhaltung hoher Standards in der Analyse-Engineering."
      },
      manager2: {
        1: "Verantwortung für Yield-Analysen und Insights-Lieferung, Bereitstellung kritischer Daten, die Monetarisierungsstrategie und Preisentscheidungen direkt informierten.",
        2: "Übersetzung komplexer analytischer Erkenntnisse in umsetzbare Geschäftsempfehlungen, Förderung funktionsübergreifender Ausrichtung und messbarer Ergebnisse.",
        3: "Etablierung standardisierter Reporting-Frameworks, die die Stakeholder-Sichtbarkeit in die Yield-Leistung um 60% verbesserten."
      },
      manager3: {
        1: "Leitung erweiterter Analyse-Initiativen, die Monetarisierungsstrategie und Produkt-Roadmap-Entscheidungen direkt unterstützten.",
        2: "Aufbau prädiktiver Modelle und Messframeworks, die die Genauigkeit der Umsatzprognose und Produktleistungs-Erkenntnisse verbesserten.",
        3: "Zusammenarbeit mit Produkt- und Engineering-Teams zur Implementierung datengesteuerter Optimierungen, die die Monetarisierungseffizienz erhöhten."
      },
      manager4: {
        1: "Lieferung umfassender Analysen und Erkenntnisse, die Produktentwicklung und Monetarisierungsstrategie informierten.",
        2: "Entwicklung von Leistungskennzahlen und Dashboards, die datengesteuerte Entscheidungsfindung in Produkt- und Geschäftsteams ermöglichten.",
        3: "Etablierung von Analyse-Best-Practices und Dokumentationsstandards, die Team-Effizienz und Wissensaustausch verbesserten."
      },
      engineer: {
        1: "Aufbau einer Streaming-Pipeline von IoT-Sammlung in zentralisierten Speicher mit einer Databricks Delta Lake-Architektur.",
        2: "Reduzierung der AWS-Speicher- und Instanzkosten um 88% durch Deduplizierung, Compute-Management und Python-Erfassung.",
        3: "Erstellung responsiver Python-Dashboards, die Echtzeit-Datenvisualisierung und -analyse unternehmensweit ermöglichen."
      },
      consultant: {
        1: "Lieferung technischer Beratung für SAP-Rollout und Datenbankleistungsthemen (SAP HANA, Oracle, MS SQL, Sybase).",
        2: "Abschluss von über 200 technischen Projekten; Erwerb mehrerer Zertifizierungen einschließlich zertifizierter SAP-Associate.",
        3: "Erstellung von Wissensdatenbank-Dokumentation für Onboarding und interne Referenz."
      }
    },
    achievements: {
      cost: {
        title: "Kostenoptimierung",
        pill: "Datenengineering",
        desc: "Reduzierung der AWS-Speicher- und Instanzkosten um 88% durch Deduplizierung, Ressourcenmanagement und Python-Tools."
      },
      volume: {
        title: "Hochvolumen-Lieferung",
        pill: "Unternehmenssupport",
        desc: "Abschluss von über 200 technischen Projekten in SAP/Datenbankarbeit mit starken Kundenresultaten."
      },
      retail: {
        title: "Einzelhandelsmedien-Führung",
        pill: "Monetarisierung",
        desc: "Leitung von Yield- und Monetarisierungsanalyse-Initiativen, die Messgenauigkeit verbesserten und datengesteuerte strategische Entscheidungen in Einzelhandelsmedien-Operationen ermöglichten."
      },
      data: {
        title: "Datengesteuerte Entscheidungsfindung",
        pill: "Analyse-Führung",
        desc: "Design und Bereitstellung von Führungsdashboards und analytischen Frameworks, die datengesteuerte Entscheidungsfindung in technischen und Geschäftsteams ermöglichen."
      },
      ai: {
        title: "KI-gestützte Entwicklung",
        pill: "Moderne Workflows",
        desc: "Erfahren in KI-unterstützter Entwicklung und intuitiver Codierung, Nutzung modernster KI-Tools zur Beschleunigung von Entwicklungszyklen und Verbesserung der Codequalität."
      }
    }
  },
  hi: {
    nav: {
      experience: "अनुभव",
      impact: "प्रभाव",
      skills: "कौशल",
      education: "शिक्षा",
      volunteering: "स्वैच्छिक सेवा",
      contact: "संपर्क"
    },
    hero: {
      kicker: "प्रबंधक • मुद्रीकरण विश्लेषण • खुदरा मीडिया",
      title: "डेटा-संचालित मुद्रीकरण रणनीतियों के माध्यम से राजस्व वृद्धि को बढ़ावा देना।",
      lead: "खुदरा मीडिया मुद्रीकरण, उपज अनुकूलन और उत्पाद विश्लेषण में विशेषज्ञता वाला विश्लेषण नेता। मैं जटिल डेटा को व्यावहारिक अंतर्दृष्टि में बदलता हूं जो व्यावसायिक निर्णय और राजस्व वृद्धि को बढ़ावा देता है। AI-सहायक विकास, Vibe Coding और आधुनिक AI-संचालित कोडिंग वर्कफ़्लोज़ में विशेषज्ञ जो वितरण को तेज करते हैं और कोड गुणवत्ता बढ़ाते हैं।",
      viewExperience: "अनुभव देखें",
      connect: "जुड़ें",
      recommendations: "पेशेवर सिफारिशें"
    },
    sections: {
      experience: "पेशेवर अनुभव",
      experienceDesc: "मजबूत तकनीकी नींव के साथ खुदरा मीडिया विश्लेषण में प्रगतिशील नेतृत्व।",
      impact: "मुख्य उपलब्धियां",
      impactDesc: "विश्लेषण, इंजीनियरिंग और व्यावसायिक परिणामों में मापने योग्य प्रभाव।",
      skills: "मुख्य योग्यताएं",
      skillsDesc: "तकनीकी विशेषज्ञता और विश्लेषणात्मक क्षमताएं।",
      education: "शिक्षा",
      educationDesc: "विश्लेषण, व्यवसाय प्रशासन और इंजीनियरिंग में उन्नत डिग्री।",
      volunteering: "सामुदायिक सगाई",
      volunteeringDesc: "सामुदायिक और विश्वास-आधारित संगठनों के लिए समर्पित सेवा।",
      contact: "संपर्क",
      contactDesc: "अवसरों और सहयोग पर चर्चा करने के लिए खुला।"
    },
    experience: {
      manager1: {
        1: "मुद्रीकरण विश्लेषण रणनीति का नेतृत्व करना, मापन ढांचे को बढ़ाने और डेटा-सूचित निर्णय लेने के लिए क्रॉस-फंक्शनल हितधारकों के साथ साझेदारी करना।",
        2: "कार्यकारी-स्तरीय अंतर्दृष्टि और प्रदर्शन कथाएं विकसित करना और प्रस्तुत करना जो नेतृत्व टीमों को प्रमुख मेट्रिक्स और रणनीतिक प्राथमिकताओं पर संरेखित करती हैं।",
        3: "Python और SQL का उपयोग करके स्केलेबल विश्लेषण वर्कफ़्लोज़ का निर्माण करना, सटीकता और पुनरुत्पादनशीलता में सुधार करते हुए विश्लेषण समय को 40% कम करना।",
        4: "प्रोजेक्ट वितरण को तेज करने, कोड गुणवत्ता बढ़ाने और विश्लेषण इंजीनियरिंग में उच्च मानकों को बनाए रखने के लिए AI-सहायक विकास और Vibe Coding पद्धतियों का लाभ उठाना।"
      },
      manager2: {
        1: "उपज विश्लेषण और अंतर्दृष्टि वितरण का स्वामित्व, महत्वपूर्ण डेटा प्रदान करना जो सीधे मुद्रीकरण रणनीति और मूल्य निर्धारण निर्णयों को सूचित करता है।",
        2: "जटिल विश्लेषणात्मक निष्कर्षों को व्यावहारिक व्यावसायिक सिफारिशों में अनुवाद करना, क्रॉस-फंक्शनल संरेखण और मापने योग्य परिणामों को बढ़ावा देना।",
        3: "मानकीकृत रिपोर्टिंग ढांचे स्थापित करना जिन्होंने हितधारक दृश्यता को उपज प्रदर्शन में 60% तक बेहतर बनाया।"
      },
      manager3: {
        1: "उन्नत विश्लेषण पहलों का नेतृत्व करना जो सीधे मुद्रीकरण रणनीति और उत्पाद रोडमैप निर्णयों का समर्थन करते हैं।",
        2: "भविष्य कथन मॉडल और मापन ढांचे का निर्माण करना जिन्होंने राजस्व पूर्वानुमान सटीकता और उत्पाद प्रदर्शन अंतर्दृष्टि में सुधार किया।",
        3: "उत्पाद और इंजीनियरिंग टीमों के साथ सहयोग करना डेटा-संचालित अनुकूलन लागू करने के लिए जिन्होंने मुद्रीकरण दक्षता बढ़ाई।"
      },
      manager4: {
        1: "व्यापक विश्लेषण और अंतर्दृष्टि वितरित करना जो उत्पाद विकास और मुद्रीकरण रणनीति को सूचित करते हैं।",
        2: "प्रमुख प्रदर्शन संकेतक और डैशबोर्ड विकसित करना जो उत्पाद और व्यावसायिक टीमों में डेटा-संचालित निर्णय लेने को सक्षम करते हैं।",
        3: "विश्लेषण सर्वोत्तम प्रथाओं और दस्तावेज़ीकरण मानकों की स्थापना करना जिन्होंने टीम दक्षता और ज्ञान साझाकरण में सुधार किया।"
      },
      engineer: {
        1: "Databricks Delta Lake आर्किटेक्चर का उपयोग करके IoT संग्रह से केंद्रीकृत भंडारण तक एक स्ट्रीमिंग पाइपलाइन का निर्माण करना।",
        2: "डेडुप्लिकेशन, कंप्यूट प्रबंधन, और Python इनजेक्शन के माध्यम से AWS भंडारण + उदाहरण लागत को 88% कम करना।",
        3: "रियल-टाइम कंपनी-व्यापी डेटा विज़ुअलाइज़ेशन और विश्लेषण को सक्षम करने वाले रेस्पॉन्सिव Python डैशबोर्ड बनाना।"
      },
      consultant: {
        1: "SAP रोलआउट और डेटाबेस प्रदर्शन विषयों (SAP HANA, Oracle, MS SQL, Sybase) के लिए तकनीकी परामर्श प्रदान करना।",
        2: "200+ तकनीकी परियोजनाएं पूरी कीं; प्रमाणित SAP Associate सहित कई प्रमाणपत्र अर्जित किए।",
        3: "ऑनबोर्डिंग और आंतरिक संदर्भ के लिए उपयोग की जाने वाली ज्ञान-आधार दस्तावेज़ीकरण बनाना।"
      }
    },
    achievements: {
      cost: {
        title: "लागत अनुकूलन",
        pill: "डेटा इंजीनियरिंग",
        desc: "डेडुप्लिकेशन, संसाधन प्रबंधन, और Python टूलिंग के माध्यम से AWS भंडारण + उदाहरण लागत को 88% कम किया।"
      },
      volume: {
        title: "उच्च-मात्रा वितरण",
        pill: "एंटरप्राइज़ सपोर्ट",
        desc: "SAP/डेटाबेस कार्य में मजबूत ग्राहक परिणामों के साथ 200+ तकनीकी परियोजनाएं पूरी कीं।"
      },
      retail: {
        title: "खुदरा मीडिया नेतृत्व",
        pill: "मुद्रीकरण",
        desc: "उपज और मुद्रीकरण विश्लेषण पहलों का नेतृत्व करना जिन्होंने मापन सटीकता में सुधार किया और खुदरा मीडिया संचालन में डेटा-संचालित रणनीतिक निर्णयों को सक्षम किया।"
      },
      data: {
        title: "डेटा-संचालित निर्णय लेना",
        pill: "विश्लेषण नेतृत्व",
        desc: "कार्यकारी डैशबोर्ड और विश्लेषणात्मक ढांचे डिज़ाइन और तैनात करना जो तकनीकी और व्यावसायिक टीमों में डेटा-संचालित निर्णय लेने को सक्षम करते हैं।"
      },
      ai: {
        title: "AI-संचालित विकास",
        pill: "आधुनिक वर्कफ़्लोज़",
        desc: "AI-सहायक विकास और वाइब कोडिंग में अनुभवी, विकास चक्रों को तेज करने और कोड गुणवत्ता बढ़ाने के लिए अत्याधुनिक AI उपकरणों का लाभ उठाना।"
      }
    }
  }
};

const LANG_META = {
  en: { code: "EN", flag: "🇺🇸", name: "English" },
  es: { code: "ES", flag: "🇪🇸", name: "Español" },
  de: { code: "DE", flag: "🇩🇪", name: "Deutsch" },
  hi: { code: "HI", flag: "🇮🇳", name: "हिंदी" }
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function motionSafeScroll(top) {
  window.scrollTo({
    top,
    behavior: prefersReducedMotion.matches ? "auto" : "smooth"
  });
}

function getTranslation(lang, key) {
  let value = translations[lang];
  for (const part of key.split(".")) {
    value = value?.[part];
  }
  return value;
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  try {
    localStorage.setItem("preferredLanguage", lang);
  } catch (_) {
    /* private mode */
  }
  document.documentElement.lang = lang;

  const meta = LANG_META[lang] || LANG_META.en;
  const flagEl = document.getElementById("currentFlag");
  const codeEl = document.getElementById("currentLang");
  if (flagEl) flagEl.textContent = meta.flag;
  if (codeEl) codeEl.textContent = meta.code;

  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.setAttribute("aria-label", `Change language, current language ${meta.name}`);
  }

  document.querySelectorAll(".lang-option").forEach((option) => {
    const selected = option.getAttribute("data-lang") === lang;
    option.setAttribute("aria-selected", selected ? "true" : "false");
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = getTranslation(lang, element.getAttribute("data-i18n"));
    if (translation == null) return;
    if (typeof translation === "string" && translation.includes("<")) {
      element.innerHTML = translation;
    } else {
      element.textContent = translation;
    }
  });

  closeLangMenu();
}

function closeLangMenu() {
  const langMenu = document.getElementById("langMenu");
  const langBtn = document.getElementById("langBtn");
  if (langMenu) langMenu.classList.remove("active");
  if (langBtn) langBtn.setAttribute("aria-expanded", "false");
}

function openLangMenu() {
  const langMenu = document.getElementById("langMenu");
  const langBtn = document.getElementById("langBtn");
  if (langMenu) langMenu.classList.add("active");
  if (langBtn) langBtn.setAttribute("aria-expanded", "true");
}

function isMobileNav() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function setMobileNavHidden(hidden) {
  const navLinks = document.querySelector(".links");
  if (!navLinks) return;
  if (isMobileNav()) {
    navLinks.setAttribute("aria-hidden", hidden ? "true" : "false");
  } else {
    navLinks.removeAttribute("aria-hidden");
  }
}

function closeMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".links");
  if (!menuToggle || !navLinks) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navLinks.classList.remove("menu-open");
  setMobileNavHidden(true);
}

function initYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function initLanguage() {
  let stored = "en";
  try {
    stored = localStorage.getItem("preferredLanguage") || "en";
  } catch (_) {
    stored = "en";
  }
  currentLang = translations[stored] ? stored : "en";
  setLanguage(currentLang);

  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  if (!langBtn || !langMenu) return;

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = langBtn.getAttribute("aria-expanded") === "true";
    if (open) closeLangMenu();
    else openLangMenu();
  });

  document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      setLanguage(option.getAttribute("data-lang"));
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-switcher")) closeLangMenu();
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#" || href === "#top") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerOffset = 80;
      const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      motionSafeScroll(offsetPosition);
      closeMobileMenu();
      if (typeof target.focus === "function") {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });
}

function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".links");
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!isExpanded));
    this.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    navLinks.classList.toggle("menu-open");
    setMobileNavHidden(isExpanded);
  });

  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (!isMobileNav()) {
      navLinks.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      navLinks.removeAttribute("aria-hidden");
    } else if (!navLinks.classList.contains("menu-open")) {
      setMobileNavHidden(true);
    }
  });

  setMobileNavHidden(true);
}

function initEscape() {
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeLangMenu();
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMobileMenu();
      menuToggle.focus();
    }
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll('.links a[href^="#"]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    let currentId = "";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.id;
      }
    });

    navAnchors.forEach((link) => {
      const href = link.getAttribute("href");
      const active = currentId && href === `#${currentId}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });

    if (window.scrollY < 100) {
      navAnchors.forEach((link) => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      });
    }
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
}

function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (!backToTopBtn) return;

  function toggleBackToTop() {
    backToTopBtn.classList.toggle("visible", window.scrollY > 300);
  }

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTopBtn.addEventListener("click", function () {
    motionSafeScroll(0);
  });
}

function initSectionReveal() {
  const sections = document.querySelectorAll(".section");
  if (!sections.length) return;

  if (prefersReducedMotion.matches) {
    sections.forEach((section) => section.classList.add("visible"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  sections.forEach((section) => observer.observe(section));
}

let currentLang = "en";

document.documentElement.classList.add("js");
initYear();
initLanguage();
initSmoothScroll();
initMobileMenu();
initEscape();
initActiveNav();
initBackToTop();
initSectionReveal();

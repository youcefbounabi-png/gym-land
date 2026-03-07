export type TranslationKey = keyof typeof translations.en;

export const translations = {
    en: {
        // ===== NAVBAR =====
        nav_home: 'HOME',
        nav_about: 'ABOUT',
        nav_services: 'SERVICES',
        nav_membership: 'MEMBERSHIP',
        nav_trainers: 'COACHES',
        nav_transformations: 'RESULTS',
        nav_contact: 'CONTACT',
        nav_cta: 'JOIN NOW',
        nav_mobile_cta: 'JOIN THE GYM',

        // ===== HOME =====
        hero_badge: 'PREMIUM FITNESS CENTER',
        hero_title_1: 'BUILD YOUR',
        hero_title_2: 'BEST BODY.',
        hero_subtitle: 'Welcome to The Gym Land — Algiers\' largest premium fitness center. Over 1,600m² of space, world-class equipment, and expert coaches to help you reach your goals.',
        hero_cta_primary: 'JOIN NOW',
        hero_cta_secondary: 'LEARN MORE',
        hero_scroll: 'SCROLL DOWN',

        // Stats
        stat_surface: 'Surface',
        stat_equipment: 'Machines',
        stat_uptime: 'Open',
        stat_members: 'Members',

        // Services Section (Home)
        home_services_badge: 'OUR PROGRAMS',
        home_services_title_1: 'TRAINING',
        home_services_title_2: 'PROGRAMS',
        home_services_desc: 'Dedicated training zones designed for strength, cardio, and functional fitness.',
        home_service_link: 'LEARN MORE',
        home_protocol_label: 'ZONE',

        // Women Zone (Home)
        women_badge: 'Private Area',
        women_title_1: 'Women-Only',
        women_title_2: 'Zone',
        women_desc: 'A private, dedicated space exclusively for women. Featuring separate changing rooms, premium amenities, and full workout access in a safe, comfortable environment.',
        women_cta: 'View Details',

        // Perks (Home)
        perks_badge: 'Facility Amenities',
        perks_title_1: 'Facility',
        perks_title_2: 'Extras',
        perk_snack_title: 'Snack Bar / Nutrition',
        perk_snack_desc: 'Homemade pre and post-workout nutrition options designed for optimal recovery.',
        perk_library_title: 'Library / Study Area',
        perk_library_desc: 'A quiet space for reading, learning, seminars, or focused work.',
        perk_hygiene_title: 'Hygiene & Safety',
        perk_hygiene_desc: 'Strict equipment cleaning and safety protocols to protect all members.',

        // Comparison (Home)
        comp_badge: 'Why Choose Us',
        comp_title_1: 'The Gym Land',
        comp_title_2: 'Standard',
        comp_space_label: 'Space',
        comp_space_bad: 'Overcrowded',
        comp_space_good: 'Spacious 1,600m²',
        comp_equip_label: 'Equipment',
        comp_equip_bad: 'Limited',
        comp_equip_good: '120+ Machines',
        comp_env_label: 'Environment',
        comp_env_bad: 'Basic Layout',
        comp_env_good: 'Multi-Zone Design',
        comp_coach_label: 'Coaching',
        comp_coach_bad: 'Basic Supervision',
        comp_coach_good: 'Expert Coaches',
        comp_rating_source: 'Based on Local Ratings',
        comp_review_quote: '"Amazing atmosphere. The equipment is top-notch and the layout is incredible."',
        comp_reviewer: 'Member',
        comp_review_badge: 'Verified Review',
        comp_gymland: 'Gym Land',

        // Equipment (Home)
        equip_badge: 'PREMIUM EQUIPMENT',
        equip_title: 'FOR BETTER SESSIONS',
        equip_desc: 'To help you push your limits every session, our gym is equipped with the latest generation of professional fitness equipment across all zones.',

        // Final CTA (Home)
        cta_title_1: 'JOIN',
        cta_title_2: 'THE GYM',
        cta_desc: 'Your best shape isn\'t luck — it\'s the result of consistent training and the right environment. Start your journey with us today.',
        cta_button: 'GET STARTED',

        // ===== ABOUT =====
        about_badge: 'ABOUT US',
        about_title_1: 'FITNESS',
        about_title_2: 'REDEFINED.',
        about_desc: 'The Gym Land isn\'t just a gym — it\'s a premium fitness center built for serious results. Located in the heart of Algiers, we\'ve created the city\'s largest training facility where expert coaching meets top-tier equipment.',
        about_overlay_badge: 'Our Facility',
        about_overlay_title: 'FITNESS CENTER',
        about_stat_surface: 'Surface Area',
        about_stat_surface_val: '1.6K M²',
        about_stat_equip: 'Equipment',
        about_stat_equip_val: '120+',
        about_stat_uptime: 'Availability',
        about_stat_uptime_val: '99.9%',
        about_stat_programs: 'Programs',
        about_stat_programs_val: 'Custom',
        about_methodology: 'Our approach focuses on proper form, progressive overload, and long-term health for sustainable results.',

        // Comparison (About)
        about_comp_badge: 'Comparison',
        about_comp_title_1: 'THE',
        about_comp_title_2: 'DIFFERENCE.',
        about_comp_rating: 'SYSTEM RATING',
        about_comp_typical: 'TYPICAL GYMS',
        about_comp_gymland: 'THE GYM LAND',
        about_comp_footnote: 'While smaller gyms struggle with space and limited equipment, The Gym Land offers a premium, spacious experience with top-tier machines and expert guidance.',

        // Values (About)
        about_values_title_1: 'OUR',
        about_values_title_2: 'VALUES.',
        about_val_longevity: 'Longevity',
        about_val_longevity_desc: 'Building sustainable fitness habits. We train for the long game — keeping your body healthy for years to come.',
        about_val_strength: 'Strength',
        about_val_strength_desc: 'Unlocking your full potential. Real strength built through proper technique and progressive training.',
        about_val_community: 'Community',
        about_val_community_desc: 'A supportive environment where members motivate each other to achieve their best.',

        // ===== SERVICES =====
        services_badge: 'Training Zones',
        services_title_1: 'OUR TRAINING',
        services_title_2: 'AREAS.',
        services_desc: 'Every corner of our 1,600m² facility is designed for a specific type of training.',
        services_features: ['Quality Equipment', 'Expert Supervision', 'Clean Environment', 'Personal Coaching'],
        services_cta: 'BOOK A VISIT',

        // Women Zone (Services)
        services_women_private: 'PRIVATE & SECURE',
        services_women_dedicated: 'DEDICATED FACILITIES',

        // Classes
        classes_badge: 'Group Classes',
        classes_title_1: 'GROUP',
        classes_title_2: 'CLASSES.',
        classes_desc: 'High-energy group training sessions led by expert coaches. Train together, grow together.',
        classes_impact: 'Benefit',

        // Extras
        extras_badge: 'Additional Services',
        extras_title_1: 'BEYOND THE',
        extras_title_2: 'GYM.',
        extras_desc: 'Enhancing your experience through nutrition support, learning spaces, and a healthy environment.',
        extras_cta: 'ASK ABOUT OUR AMENITIES',

        // ===== MEMBERSHIP =====
        membership_badge: 'PRICING',
        membership_title_1: 'CHOOSE YOUR',
        membership_title_2: 'PLAN.',
        membership_desc: 'Simple, transparent pricing designed for your goals. No hidden fees, just great training.',
        membership_popular: 'BEST VALUE',
        membership_cta: 'SELECT',
        membership_period: 'DA/MONTH',
        membership_corp_title: 'CORPORATE PLANS',
        membership_corp_desc: 'Get your team in shape with our special corporate membership rates.',
        membership_corp_cta: 'REQUEST A QUOTE',

        // Plan names
        plan_core: 'BASIC ACCESS',
        plan_titan: 'PREMIUM',
        plan_apex: 'VIP',

        // Plan features
        feat_equipment: 'Full Equipment Access',
        feat_analytics: 'Progress Tracking',
        feat_lockers: 'Personal Lockers',
        feat_app: 'App Access',
        feat_zones: 'All Training Zones',
        feat_conditioning: 'Coaching Sessions',
        feat_guest: 'Guest Passes',
        feat_nutrition: 'Nutrition Guidance',
        feat_strategy: 'Personal Training Plan',
        feat_recovery: 'Recovery Area Access',
        feat_priority: 'Priority Booking',
        feat_supplements: 'Supplement Advice',

        // ===== TRAINERS =====
        trainers_badge: 'Our Team',
        trainers_title_1: 'THE',
        trainers_title_2: 'COACHES.',
        trainers_desc: 'Our coaches are experts in their field, dedicated to helping you grow stronger and healthier.',

        // ===== TRANSFORMATIONS =====
        transf_title_1: 'REAL',
        transf_title_2: 'RESULTS.',
        transf_desc: 'Real people. Real effort. See the progress of those who committed to training at The Gym Land.',
        transf_before: 'BEFORE',
        transf_after: 'AFTER',
        transf_evolution: 'Transformation',
        transf_read_more: 'READ FULL STORY',
        transf_cta_title_1: 'YOUR TURN',
        transf_cta_title_2: 'IS NEXT.',
        transf_cta_desc: 'Start your fitness transformation today. Results in as little as 12 weeks.',
        transf_cta_button: 'START NOW',

        // ===== CONTACT =====
        contact_badge: 'Get in Touch',
        contact_title_1: 'CONTACT',
        contact_title_2: 'US.',
        contact_desc: 'Have questions about our gym, memberships, or corporate rates? Send us a message.',
        contact_location: 'Location',
        contact_communication: 'Phone',
        contact_hours: 'Hours',
        contact_social: 'Social',
        contact_hours_val: 'Daily: 06:00 — 00:00\nFriday: 15:00 — 00:00',
        contact_social_val: '@thegymland_dz\nfacebook.com/The-Gymland',

        // Form
        form_name_label: 'Full Name',
        form_name_placeholder: 'E.G. JOHN DOE',
        form_email_label: 'Email',
        form_email_placeholder: 'YOUR@EMAIL.COM',
        form_phone_label: 'Phone',
        form_phone_placeholder: '+213...',
        form_age_label: 'Age',
        form_age_placeholder: 'YEARS',
        form_goal_label: 'Goal',
        form_goal_tone: 'Toning / Definition',
        form_goal_muscle: 'Muscle Gain',
        form_goal_fitness: 'General Fitness',
        form_goal_weight: 'Weight Loss',
        form_training_label: 'Training Preference',
        form_training_solo: 'Solo',
        form_training_group: 'Group',
        form_training_coached: 'Coached',
        form_message_label: 'Message',
        form_message_placeholder: 'HOW CAN WE HELP YOU?',
        form_pricing_note: '* Contact us directly for final pricing',
        form_submit: 'SEND MESSAGE',

        // Map
        map_title: 'OUR LOCATION',
        map_desc: 'VISIT THE GYM LAND IN ALGIERS.',

        // ===== FOOTER =====
        footer_desc: 'Premium fitness center in the heart of Algiers. 1,600m² of space, world-class equipment, and expert coaches. Join us today.',
        footer_explore: 'Explore',
        footer_hq: 'Address',
        footer_newsletter_title: 'Stay Updated',
        footer_newsletter_desc: 'Get training tips and membership updates.',
        footer_copyright: '© 2026 THE GYMLAND. ALL RIGHTS RESERVED.',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms of Use',
    },

    fr: {
        // ===== NAVBAR =====
        nav_home: 'ACCUEIL',
        nav_about: 'À PROPOS',
        nav_services: 'SERVICES',
        nav_membership: 'ABONNEMENTS',
        nav_trainers: 'COACHS',
        nav_transformations: 'RÉSULTATS',
        nav_contact: 'CONTACT',
        nav_cta: 'REJOINDRE',
        nav_mobile_cta: 'REJOINDRE LA SALLE',

        // ===== HOME =====
        hero_badge: 'CENTRE DE FITNESS PREMIUM',
        hero_title_1: 'CONSTRUISEZ VOTRE',
        hero_title_2: 'MEILLEURE FORME.',
        hero_subtitle: 'Bienvenue au Gym Land — le plus grand centre de fitness premium d\'Alger. Plus de 1 600m² d\'espace, des équipements de classe mondiale et des coachs experts pour vous aider à atteindre vos objectifs.',
        hero_cta_primary: 'REJOINDRE',
        hero_cta_secondary: 'EN SAVOIR PLUS',
        hero_scroll: 'DÉFILER VERS LE BAS',

        // Stats
        stat_surface: 'Surface',
        stat_equipment: 'Machines',
        stat_uptime: 'Ouvert',
        stat_members: 'Membres',

        // Services Section (Home)
        home_services_badge: 'NOS PROGRAMMES',
        home_services_title_1: 'PROGRAMMES',
        home_services_title_2: 'D\'ENTRAÎNEMENT',
        home_services_desc: 'Des zones d\'entraînement dédiées, conçues pour la musculation, le cardio et le fitness fonctionnel.',
        home_service_link: 'EN SAVOIR PLUS',
        home_protocol_label: 'ZONE',

        // Women Zone (Home)
        women_badge: 'Espace Privé',
        women_title_1: 'Espace',
        women_title_2: 'Femmes',
        women_desc: 'Un espace privé et dédié exclusivement aux femmes. Avec des vestiaires séparés, des équipements premium et un accès complet à la salle dans un environnement sécurisé et confortable.',
        women_cta: 'Voir les détails',

        // Perks (Home)
        perks_badge: 'Équipements & Services',
        perks_title_1: 'Les',
        perks_title_2: 'Extras',
        perk_snack_title: 'Snack Bar / Nutrition',
        perk_snack_desc: 'Options de nutrition pré et post-entraînement, faites maison, conçues pour une récupération optimale.',
        perk_library_title: 'Bibliothèque / Espace Étude',
        perk_library_desc: 'Un espace calme pour la lecture, l\'apprentissage, les séminaires ou le travail concentré.',
        perk_hygiene_title: 'Hygiène & Sécurité',
        perk_hygiene_desc: 'Protocoles stricts de nettoyage des équipements et mesures de sécurité pour protéger tous les membres.',

        // Comparison (Home)
        comp_badge: 'Pourquoi Nous Choisir',
        comp_title_1: 'Le Standard',
        comp_title_2: 'Gym Land',
        comp_space_label: 'Espace',
        comp_space_bad: 'Surpeuplé',
        comp_space_good: 'Spacieux 1 600m²',
        comp_equip_label: 'Équipement',
        comp_equip_bad: 'Limité',
        comp_equip_good: '120+ Machines',
        comp_env_label: 'Environnement',
        comp_env_bad: 'Basique',
        comp_env_good: 'Multi-Zone',
        comp_coach_label: 'Coaching',
        comp_coach_bad: 'Supervision Basique',
        comp_coach_good: 'Coachs Experts',
        comp_rating_source: 'Basé sur les avis locaux',
        comp_review_quote: '"Ambiance incroyable. Les équipements sont de qualité supérieure et l\'agencement est exceptionnel."',
        comp_reviewer: 'Membre',
        comp_review_badge: 'Avis Vérifié',
        comp_gymland: 'Gym Land',

        // Equipment (Home)
        equip_badge: 'ÉQUIPEMENT PREMIUM',
        equip_title: 'POUR DE MEILLEURES SÉANCES',
        equip_desc: 'Pour vous aider à repousser vos limites à chaque séance, notre salle est équipée des dernières générations d\'équipements de fitness professionnels dans toutes les zones.',

        // Final CTA (Home)
        cta_title_1: 'REJOIGNEZ',
        cta_title_2: 'LA SALLE',
        cta_desc: 'Votre meilleure forme n\'est pas le fruit du hasard — c\'est le résultat d\'un entraînement régulier et du bon environnement. Commencez votre parcours avec nous aujourd\'hui.',
        cta_button: 'COMMENCER',

        // ===== ABOUT =====
        about_badge: 'À PROPOS',
        about_title_1: 'LE FITNESS',
        about_title_2: 'REDÉFINI.',
        about_desc: 'Le Gym Land n\'est pas une simple salle de sport — c\'est un centre de fitness premium construit pour des résultats sérieux. Situé au cœur d\'Alger, nous avons créé le plus grand centre d\'entraînement de la ville, où le coaching expert rencontre les meilleurs équipements.',
        about_overlay_badge: 'Notre Centre',
        about_overlay_title: 'CENTRE DE FITNESS',
        about_stat_surface: 'Surface',
        about_stat_surface_val: '1.6K M²',
        about_stat_equip: 'Équipement',
        about_stat_equip_val: '120+',
        about_stat_uptime: 'Disponibilité',
        about_stat_uptime_val: '99.9%',
        about_stat_programs: 'Programmes',
        about_stat_programs_val: 'Sur Mesure',
        about_methodology: 'Notre approche se concentre sur la bonne technique, la progression et la santé à long terme pour des résultats durables.',

        // Comparison (About)
        about_comp_badge: 'Comparaison',
        about_comp_title_1: 'LA',
        about_comp_title_2: 'DIFFÉRENCE.',
        about_comp_rating: 'NOTE GLOBALE',
        about_comp_typical: 'SALLES CLASSIQUES',
        about_comp_gymland: 'THE GYM LAND',
        about_comp_footnote: 'Les salles classiques souffrent souvent d\'un manque d\'espace et d\'équipement limité. The Gym Land offre une expérience premium, spacieuse, avec des machines de qualité et un accompagnement expert.',

        // Values (About)
        about_values_title_1: 'NOS',
        about_values_title_2: 'VALEURS.',
        about_val_longevity: 'Longévité',
        about_val_longevity_desc: 'Construire des habitudes fitness durables. Nous entraînons pour le long terme — garder votre corps en bonne santé pour les années à venir.',
        about_val_strength: 'Force',
        about_val_strength_desc: 'Libérer votre plein potentiel. Une vraie force construite grâce à une technique correcte et un entraînement progressif.',
        about_val_community: 'Communauté',
        about_val_community_desc: 'Un environnement bienveillant où les membres se motivent mutuellement pour donner le meilleur d\'eux-mêmes.',

        // ===== SERVICES =====
        services_badge: 'Zones d\'Entraînement',
        services_title_1: 'NOS ZONES',
        services_title_2: 'D\'ENTRAÎNEMENT.',
        services_desc: 'Chaque espace de nos 1 600m² est conçu pour un type d\'entraînement spécifique.',
        services_features: ['Équipement de Qualité', 'Supervision Expert', 'Environnement Propre', 'Coaching Personnalisé'],
        services_cta: 'RÉSERVER UNE VISITE',

        // Women Zone (Services)
        services_women_private: 'PRIVÉ & SÉCURISÉ',
        services_women_dedicated: 'INSTALLATIONS DÉDIÉES',

        // Classes
        classes_badge: 'Cours Collectifs',
        classes_title_1: 'COURS',
        classes_title_2: 'COLLECTIFS.',
        classes_desc: 'Des séances d\'entraînement en groupe dynamiques, encadrées par des coachs experts. Entraînez-vous ensemble, progressez ensemble.',
        classes_impact: 'Avantage',

        // Extras
        extras_badge: 'Services Supplémentaires',
        extras_title_1: 'AU-DELÀ DE LA',
        extras_title_2: 'SALLE.',
        extras_desc: 'Améliorer votre expérience avec un soutien nutritionnel, des espaces d\'apprentissage et un environnement sain.',
        extras_cta: 'RENSEIGNEZ-VOUS',

        // ===== MEMBERSHIP =====
        membership_badge: 'TARIFS',
        membership_title_1: 'CHOISISSEZ VOTRE',
        membership_title_2: 'FORMULE.',
        membership_desc: 'Des tarifs simples et transparents adaptés à vos objectifs. Pas de frais cachés, juste du bon entraînement.',
        membership_popular: 'MEILLEUR RAPPORT',
        membership_cta: 'CHOISIR',
        membership_period: 'DA/MOIS',
        membership_corp_title: 'OFFRES ENTREPRISES',
        membership_corp_desc: 'Mettez votre équipe en forme avec nos tarifs spéciaux pour entreprises.',
        membership_corp_cta: 'DEMANDER UN DEVIS',

        // Plan names
        plan_core: 'ACCÈS DE BASE',
        plan_titan: 'PREMIUM',
        plan_apex: 'VIP',

        // Plan features
        feat_equipment: 'Accès Complet aux Équipements',
        feat_analytics: 'Suivi de Progression',
        feat_lockers: 'Casiers Personnels',
        feat_app: 'Accès Application',
        feat_zones: 'Toutes les Zones',
        feat_conditioning: 'Séances de Coaching',
        feat_guest: 'Pass Invité',
        feat_nutrition: 'Conseils Nutritionnels',
        feat_strategy: 'Plan d\'Entraînement Personnel',
        feat_recovery: 'Accès Zone Récupération',
        feat_priority: 'Réservation Prioritaire',
        feat_supplements: 'Conseils en Suppléments',

        // ===== TRAINERS =====
        trainers_badge: 'Notre Équipe',
        trainers_title_1: 'LES',
        trainers_title_2: 'COACHS.',
        trainers_desc: 'Nos coachs sont des experts dans leur domaine, dédiés à vous aider à devenir plus fort et en meilleure santé.',

        // ===== TRANSFORMATIONS =====
        transf_title_1: 'DES RÉSULTATS',
        transf_title_2: 'RÉELS.',
        transf_desc: 'Des vrais gens. De vrais efforts. Découvrez les progrès de ceux qui se sont engagés à s\'entraîner au Gym Land.',
        transf_before: 'AVANT',
        transf_after: 'APRÈS',
        transf_evolution: 'Transformation',
        transf_read_more: 'LIRE L\'HISTOIRE COMPLÈTE',
        transf_cta_title_1: 'C\'EST VOTRE',
        transf_cta_title_2: 'TOUR.',
        transf_cta_desc: 'Commencez votre transformation physique dès aujourd\'hui. Des résultats en seulement 12 semaines.',
        transf_cta_button: 'COMMENCER',

        // ===== CONTACT =====
        contact_badge: 'Nous Contacter',
        contact_title_1: 'CONTACTEZ-',
        contact_title_2: 'NOUS.',
        contact_desc: 'Des questions sur notre salle, nos abonnements ou nos tarifs entreprises ? Envoyez-nous un message.',
        contact_location: 'Adresse',
        contact_communication: 'Téléphone',
        contact_hours: 'Horaires',
        contact_social: 'Réseaux Sociaux',
        contact_hours_val: 'Tous les jours : 06h00 — 00h00\nVendredi : 15h00 — 00h00',
        contact_social_val: '@thegymland_dz\nfacebook.com/The-Gymland',

        // Form
        form_name_label: 'Nom Complet',
        form_name_placeholder: 'EX: ALI BENALI',
        form_email_label: 'Email',
        form_email_placeholder: 'VOTRE@EMAIL.COM',
        form_phone_label: 'Téléphone',
        form_phone_placeholder: '+213...',
        form_age_label: 'Âge',
        form_age_placeholder: 'ANS',
        form_goal_label: 'Objectif',
        form_goal_tone: 'Tonification / Définition',
        form_goal_muscle: 'Prise de Muscle',
        form_goal_fitness: 'Remise en Forme',
        form_goal_weight: 'Perte de Poids',
        form_training_label: 'Préférence d\'Entraînement',
        form_training_solo: 'Solo',
        form_training_group: 'Groupe',
        form_training_coached: 'Coaché',
        form_message_label: 'Message',
        form_message_placeholder: 'COMMENT POUVONS-NOUS VOUS AIDER ?',
        form_pricing_note: '* Contactez-nous directement pour les tarifs',
        form_submit: 'ENVOYER LE MESSAGE',

        // Map
        map_title: 'NOTRE EMPLACEMENT',
        map_desc: 'VISITEZ THE GYM LAND À ALGER.',

        // ===== FOOTER =====
        footer_desc: 'Centre de fitness premium au cœur d\'Alger. 1 600m² d\'espace, équipements de classe mondiale et coachs experts. Rejoignez-nous dès aujourd\'hui.',
        footer_explore: 'Explorer',
        footer_hq: 'Adresse',
        footer_newsletter_title: 'Restez Informé',
        footer_newsletter_desc: 'Recevez nos conseils d\'entraînement et nos offres.',
        footer_copyright: '© 2026 THE GYMLAND. TOUS DROITS RÉSERVÉS.',
        footer_privacy: 'Politique de Confidentialité',
        footer_terms: 'Conditions d\'Utilisation',
    }
} as const;

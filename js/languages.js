window.IntoNatureLanguages = (() => {
  const supportedLanguages = {
    en: {
      label: "English",
      shortLabel: "EN",
      nextLabel: "FR",
      htmlLang: "en",
      toggleAria: "Switch language to French",
    },
    fr: {
      label: "français",
      shortLabel: "FR",
      nextLabel: "EN",
      htmlLang: "fr",
      toggleAria: "Changer la langue en anglais",
    },
  };

  const pageMeta = {
    "index.html": {
      en: {
        title: "Into Nature Arctic Adventures | Tromsø Region",
        description:
          "Small-group dog sledding and Arctic wilderness adventures near Tromsø, based in Malangen.",
      },
      fr: {
        title: "Into Nature Arctic Adventures | Région de Tromsø",
        description:
          "Excursions en traîneau à chiens et aventures arctiques en petits groupes près de Tromsø, basées à Malangen.",
      },
    },
    "terms-and-conditions.html": {
      en: {
        title: "Terms and Conditions | Into Nature Arctic Adventures",
        description:
          "Terms and conditions for booking Arctic wilderness experiences with Into Nature AS.",
      },
      fr: {
        title: "Conditions générales | Into Nature Arctic Adventures",
        description:
          "Conditions générales pour réserver des expériences en pleine nature arctique avec Into Nature AS.",
      },
    },
    "privacy.html": {
      en: {
        title: "Privacy | Into Nature Arctic Adventures",
        description:
          "Privacy information for guests booking Arctic wilderness experiences with Into Nature AS.",
      },
      fr: {
        title: "Confidentialité | Into Nature Arctic Adventures",
        description:
          "Informations de confidentialité pour les clients réservant des expériences en pleine nature arctique avec Into Nature AS.",
      },
    },
    "adventures.html": {
      en: {
        title: "Adventures | Into Nature Arctic Adventures",
        description:
          "Compare dog sledding, aurora tours, ice fishing and snowshoe adventures with Into Nature near Tromsø.",
      },
      fr: {
        title: "Aventures | Into Nature Arctic Adventures",
        description:
          "Comparez les excursions en traîneau à chiens, les sorties aurores, la pêche sur glace et les raquettes avec Into Nature près de Tromsø.",
      },
    },
  };

  const translations = {
    fr: {
      "Into Nature Arctic Adventures home": "Accueil Into Nature Arctic Adventures",
      "Primary navigation": "Navigation principale",
      "Main menu": "Menu principal",
      "Mobile menu": "Menu mobile",
      "Homepage actions": "Actions de la page d'accueil",
      "Quick booking details": "Informations rapides de réservation",
      "Key booking facts": "Informations clés pour réserver",
      "Dog welfare highlights": "Points clés sur le bien-être des chiens",
      "Dog sled team crossing a snowy Arctic landscape":
        "Attelage de chiens traversant un paysage arctique enneigé",
      "Huskies on a snowy trail in Arctic light":
        "Huskies sur une piste enneigée dans la lumière arctique",
      "Mountain and fjord landscape near Malangen":
        "Paysage de montagne et de fjord près de Malangen",
      "Arctic wilderness and fjord landscape":
        "Nature sauvage arctique et paysage de fjord",
      "Read more about Into Nature dog welfare":
        "En savoir plus sur le bien-être des chiens chez Into Nature",
      "Guest reviews": "Avis des clients",
      "Google review highlights": "Avis Google sélectionnés",
      "5 out of 5 stars": "5 étoiles sur 5",
      "Read more frequently asked questions": "Lire plus de questions fréquentes",
      "Legal links": "Liens légaux",
      "Adventure sections": "Sections des aventures",
      "Social media links": "Liens vers les réseaux sociaux",
      "Into Nature on Instagram": "Into Nature sur Instagram",
      "Into Nature on Facebook": "Into Nature sur Facebook",

      "Adventures": "Aventures",
      "Dogs & Welfare": "Chiens & bien-être",
      "About": "À propos",
      "FAQ": "FAQ",
      "Menu": "Menu",
      "Book": "Réserver",
      "Arctic adventures near Tromsø": "Aventures arctiques près de Tromsø",
      "A small family-run kennel and outdoor company where dogs, nature and authentic Arctic experiences come first.":
        "Une petite entreprise familiale de chenil et d'activités en plein air où les chiens, la nature et les expériences arctiques authentiques passent avant tout.",
      "View winter tours": "Voir les excursions d'hiver",
      "Plan a private trip": "Planifier une excursion privée",
      "Into Nature we go": "Into Nature we go",
      "Remote, personal, dog-first experiences":
        "Des expériences isolées, personnelles et centrées sur les chiens",
      "Small groups, local hosts and a working husky kennel outside the busy city tour routes.":
        "Petits groupes, hôtes locaux et chenil de huskies en activité, loin des circuits touristiques bondés de la ville.",
      "Built for travelers who want the real Arctic, not a rushed tourist stop.":
        "Conçu pour les voyageurs qui veulent découvrir le véritable Arctique, pas une étape touristique précipitée.",
      "Based on the Malangen Fjord peninsula, approximately 90 minutes from Tromsø, Into Nature specialises in calm, authentic wilderness experiences for small and private groups.":
        "Basée sur la péninsule du fjord de Malangen, à environ 90 minutes de Tromsø, Into Nature est spécialisée dans les expériences calmes et authentiques en pleine nature pour petits groupes et groupes privés.",
      "Group style": "Type de groupe",
      "Small and private options": "Options en petit groupe et privées",
      "Base": "Base",
      "Malangen, near Tromsø": "Malangen, près de Tromsø",
      "Best for": "Idéal pour",
      "Couples, families and curious travelers": "Couples, familles et voyageurs curieux",
      "Choose the right winter adventure": "Choisissez la bonne aventure hivernale",
      "We are offering a selection of 5 unique trips in the arctic wilderness ranging from a relaxing trip to a more hands-on experience.":
        "Nous proposons une sélection de 5 excursions uniques dans la nature arctique, allant d'une sortie relaxante à une expérience plus active.",

      "Dog Sledding - Be the Musher": "Traîneau à chiens - Devenez musher",
      "Hands-on husky sledding through quiet forest trails and open Arctic landscapes.":
        "Conduite active d'un traîneau de huskies à travers des sentiers forestiers paisibles et de grands paysages arctiques.",
      "First-time friendly": "Adapté aux débutants",
      "Approx. 3 hours": "Environ 3 heures",
      "1 hour dog sledding": "1 heure de traîneau à chiens",
      "max 6-8 guests": "max. 6-8 personnes",
      "Warm clothing included": "Vêtements chauds inclus",
      "Small group pace": "Rythme de petit groupe",
      "From NOK 2,490,-": "À partir de NOK 2,490,-",
      "Transport from Tromsø not included.": "Transport depuis Tromsø non inclus.",
      "View tour": "Voir l'excursion",
      "Aurora Dog Sledding": "Traîneau à chiens sous les aurores",
      "A guided evening sled ride through snowy wilderness, with a chance to see the Northern Lights.":
        "Une sortie guidée en soirée en traîneau dans la nature enneigée, avec une chance d'observer les aurores boréales.",
      "Guided sled ride": "Sortie guidée en traîneau",
      "Evening tour": "Excursion en soirée",
      "Racing huskies": "Huskies de course",
      "Aurora chance": "Chance d'aurores",
      "NOK 3,690,-": "NOK 3,690,-",
      "Dog Sledding Full Day": "Journée complète en traîneau à chiens",
      "A full-day hands-on sledding experience across forests, hills, lakes and rivers, with campfire lunch in the Arctic landscape.":
        "Une journée complète de conduite de traîneau à travers forêts, collines, lacs et rivières, avec déjeuner autour du feu dans le paysage arctique.",
      "Drive your own sled": "Conduisez votre propre traîneau",
      "Light meal included": "Repas léger inclus",
      "Max 4 guests": "Max. 4 personnes",
      "Approx. 5 hours sledding": "Environ 5 heures de traîneau",
      "6 hours total": "6 heures au total",
      "NOK 8,000,-": "NOK 8,000,-",
      "Ice Fishing": "Pêche sur glace",
      "A slower Arctic day with local guiding, frozen lakes and warm breaks.":
        "Une journée arctique plus douce avec guide local, lacs gelés et pauses au chaud.",
      "Snowshoe hike": "Randonnée en raquettes",
      "Trout or arctic char fishing": "Pêche à la truite ou à l'omble arctique",
      "Bonfire & snacks": "Feu de camp & en-cas",
      "Max 8 guests": "Max. 8 personnes",
      "10.30AM start": "Départ à 10h30",
      "3-4 hours": "3-4 heures",
      "NOK 1,995,-": "NOK 1,995,-",
      "Husky Snowshoes": "Raquettes avec huskies",
      "A calm snowshoe hike through Arctic nature, frozen lake scenery and small hills, with bonfire and hot drinks.":
        "Une randonnée paisible en raquettes à travers la nature arctique, les paysages de lacs gelés et de petites collines, avec feu de camp et boissons chaudes.",
      "Bonfire & hot drink": "Feu de camp & boisson chaude",
      "10.30 AM start": "Départ à 10h30",
      "NOK 1,650,-": "NOK 1,650,-",

      "Winter adventures": "Aventures hivernales",
      "Choose your Arctic experience": "Choisissez votre expérience arctique",
      "Compare Into Nature's dog sledding, aurora, snowshoe and ice fishing activities. Each experience is small-scale, local and based from Malangen near Tromsø.":
        "Comparez les activités de traîneau à chiens, d'aurores, de raquettes et de pêche sur glace d'Into Nature. Chaque expérience est locale, en petit groupe et basée à Malangen près de Tromsø.",
      "A first-time friendly way to try driving a dog sled with local guides.":
        "Une façon adaptée aux débutants d'essayer de conduire un traîneau à chiens avec des guides locaux.",
      "Hands-on husky sledding through quiet forest trails and open Arctic landscapes. A first-time friendly way to try driving a dog sled with local guides.":
        "Conduite active d'un traîneau de huskies à travers des sentiers forestiers paisibles et de grands paysages arctiques. Une façon adaptée aux débutants d'essayer de conduire un traîneau à chiens avec des guides locaux.",
      "Dog sledding": "Traîneau à chiens",
      "Price": "Prix",
      "Duration": "Durée",
      "Sledding time": "Temps en traîneau",
      "Group size": "Taille du groupe",
      "Tour style": "Type d'excursion",
      "Time of day": "Moment de la journée",
      "Highlight": "Point fort",
      "Total duration": "Durée totale",
      "Start time": "Heure de départ",
      "Included": "Inclus",
      "Good to know": "Bon à savoir",
      "Guided husky sledding experience": "Expérience guidée en traîneau avec huskies",
      "Guests should be prepared for a physical outdoor activity.":
        "Les clients doivent être prêts pour une activité physique en plein air.",
      "Book this tour": "Réserver cette excursion",
      "A guided evening sled ride through snowy wilderness, with a chance to see the Northern Lights while travelling with racing huskies.":
        "Une sortie guidée en soirée en traîneau dans la nature enneigée, avec une chance d'observer les aurores boréales en compagnie de huskies de course.",
      "Evening wilderness experience": "Expérience en pleine nature le soir",
      "Northern Lights sightings can never be guaranteed.":
        "L'observation des aurores boréales ne peut jamais être garantie.",
      "Full Day": "Journée complète",
      "Full day sledding": "Journée complète en traîneau",
      "A full-day hands-on sledding experience across forests, hills, lakes and rivers, with a campfire lunch in the Arctic landscape.":
        "Une journée complète de conduite de traîneau à travers forêts, collines, lacs et rivières, avec déjeuner autour du feu dans le paysage arctique.",
      "Long hands-on sledding experience": "Longue expérience active en traîneau",
      "Small group format with a maximum of 4 guests.":
        "Format en petit groupe avec un maximum de 4 personnes.",
      "Slow Arctic day": "Journée arctique douce",
      "A slower Arctic day with local guiding, frozen lakes, snowshoe hiking, ice fishing and warm breaks around a bonfire.":
        "Une journée arctique plus calme avec guide local, lacs gelés, raquettes, pêche sur glace et pauses chaudes autour d'un feu de camp.",
      "Ice fishing": "Pêche sur glace",
      "Bonfire, hot drink, snack and marshmallows":
        "Feu de camp, boisson chaude, en-cas et marshmallows",
      "A quieter activity for guests who want a slower Arctic day.":
        "Une activité plus tranquille pour les clients qui veulent une journée arctique plus douce.",
      "A calm snowshoe hike through Arctic nature, frozen lake scenery and small hills, with bonfire, hot drinks and time outdoors with Into Nature's huskies.":
        "Une randonnée paisible en raquettes dans la nature arctique, entre paysages de lacs gelés et petites collines, avec feu de camp, boissons chaudes et du temps dehors avec les huskies d'Into Nature.",
      "Snack and marshmallows": "En-cas et marshmallows",
      "Frozen lake scenery and small hills": "Paysages de lacs gelés et petites collines",
      "A calm outdoor experience at small group pace.":
        "Une expérience calme en plein air au rythme d'un petit groupe.",
      "Booking will be added here": "La réservation sera ajoutée ici",
      "This site will later embed the 2izii booking and payment service. Until then, the booking buttons stay internal and do not send visitors to the old Wix site.":
        "Ce site intégrera plus tard le service de réservation et de paiement 2izii. En attendant, les boutons de réservation restent internes et n'envoient pas les visiteurs vers l'ancien site Wix.",
      "Contact Into Nature": "Contacter Into Nature",

      "Small groups": "Petits groupes",
      "A calmer experience and more time with the guide and dogs.":
        "Une expérience plus calme et plus de temps avec le guide et les chiens.",
      "Only 90 min from Tromsø": "À seulement 90 min de Tromsø",
      "Remote but still close to Tromsø city.": "Isolé, tout en restant proche de la ville de Tromsø.",
      "Our husky family": "Notre famille de huskies",
      "Our dogs are being cared for with love and respect.":
        "Nos chiens sont soignés avec amour et respect.",
      "Clothing guidance": "Conseils vestimentaires",
      "Warm clothes are being provided, but gloves\\mittens and hat needs to be brought.":
        "Des vêtements chauds sont fournis, mais les gants\\moufles et le bonnet doivent être apportés.",
      "What our guests say": "Ce que disent nos clients",
      "Real feedback from guests who joined us for husky experiences, quiet Arctic days and wilderness adventures in Malangen.":
        "De vrais retours de clients qui nous ont rejoints pour des expériences avec les huskies, des journées arctiques paisibles et des aventures en pleine nature à Malangen.",
      "Read more Google reviews": "Lire plus d'avis Google",
      "Google review": "Avis Google",
      "The only place you should go for a husky experience. Truly amazing! Absolutely phenomenal.":
        "Le seul endroit où aller pour vivre une expérience avec des huskies. Vraiment incroyable ! Absolument phénoménal.",
      "“The only place you should go for a husky experience. Truly amazing! Absolutely phenomenal.”":
        "« Le seul endroit où aller pour vivre une expérience avec des huskies. Vraiment incroyable ! Absolument phénoménal. »",
      "A wonderful place! Everything about Into Nature is absolutely fantastic.":
        "Un endroit merveilleux ! Tout chez Into Nature est absolument fantastique.",
      "“A wonderful place! Everything about Into Nature is absolutely fantastic.”":
        "« Un endroit merveilleux ! Tout chez Into Nature est absolument fantastique. »",
      "Google guests": "Clients Google",
      "More reviews": "Plus d'avis",
      "Guests mention the dogs, calm guiding and personal feeling as reasons the experience stands out.":
        "Les clients mentionnent les chiens, l'accompagnement calme et l'ambiance personnelle comme raisons qui rendent l'expérience unique.",
      "Dogs & welfare": "Chiens & bien-être",
      "Our dogs are family before they are athletes.":
        "Nos chiens sont une famille avant d'être des athlètes.",
      "Into Nature is a small family-run kennel where every tour starts with respect for the dogs. Daily care, rest, training and time in nature are part of the work, not an afterthought.":
        "Into Nature est un petit chenil familial où chaque excursion commence par le respect des chiens. Les soins quotidiens, le repos, l'entraînement et le temps passé dans la nature font partie du travail, pas un détail secondaire.",
      "Individual care": "Soins individuels",
      "Each dog is known by personality, needs, training rhythm and recovery.":
        "Chaque chien est connu par sa personnalité, ses besoins, son rythme d'entraînement et sa récupération.",
      "Room to be dogs": "De l'espace pour être des chiens",
      "A large natural forest enclosure gives the pack space to move, play and relax.":
        "Un grand enclos naturel en forêt donne à la meute de l'espace pour bouger, jouer et se détendre.",
      "Rest and recovery": "Repos et récupération",
      "Paw care, massage, feeding and downtime are part of the routine through the season.":
        "Soins des pattes, massage, alimentation et temps de repos font partie de la routine pendant la saison.",
      "Lifetime responsibility": "Responsabilité à vie",
      "Their care continues after working life, because the dogs remain part of the family.":
        "Leur prise en charge continue après leur vie de travail, car les chiens restent membres de la famille.",
      "Meet our dogs": "Rencontrer nos chiens",
      "Plan your Arctic day with confidence.": "Planifiez votre journée arctique en toute confiance.",
      "Everything you need to know before joining us in Malangen, from transport and clothing to weather, safety and what happens on the day.":
        "Tout ce que vous devez savoir avant de nous rejoindre à Malangen, du transport et des vêtements à la météo, la sécurité et le déroulement de la journée.",
      "Getting here": "Venir jusqu'ici",
      "Our base is in Malangen, around 90 minutes from Tromsø. Transport is unfortunally not included, so guests usually arrive by car or taxi.":
        "Notre base se trouve à Malangen, à environ 90 minutes de Tromsø. Le transport n'est malheureusement pas inclus, les clients arrivent donc généralement en voiture ou en taxi.",
      "What to wear": "Que porter",
      "Warm outerwear and winter boots are provided for selected tours. Bring your own hat, gloves or mittens, and warm base layers.":
        "Des vêtements d'extérieur chauds et des bottes d'hiver sont fournis pour certaines excursions. Apportez votre bonnet, vos gants ou moufles, ainsi que des sous-couches chaudes.",
      "Weather & safety": "Météo & sécurité",
      "Tours are adapted to Arctic conditions. If weather or trail conditions affect safety, we’ll help you reschedule or find the best option.":
        "Les excursions sont adaptées aux conditions arctiques. Si la météo ou l'état des pistes affectent la sécurité, nous vous aiderons à reprogrammer ou à trouver la meilleure option.",
      "Most experiences are kept small, giving you more time with the guides, dogs and landscape.":
        "La plupart des expériences restent en petit groupe, pour vous donner plus de temps avec les guides, les chiens et le paysage.",
      "Good to know before you book": "Bon à savoir avant de réserver",
      "A few practical answers about transport, clothing, weather and choosing the right tour.":
        "Quelques réponses pratiques sur le transport, les vêtements, la météo et le choix de la bonne excursion.",
      "Is transport from and to Tromsø included?": "Le transport depuis et vers Tromsø est-il inclus ?",
      "Unfortunally no. Transport to and from our activities is not included. Most guests drive themselves or arrange a taxi to our base in Malangen.":
        "Malheureusement non. Le transport vers et depuis nos activités n'est pas inclus. La plupart des clients viennent en voiture ou organisent un taxi jusqu'à notre base à Malangen.",
      "Can I see the Northern Lights?": "Puis-je voir les aurores boréales ?",
      "The Aurora dog sledding package is offering evening trips for a better chance of seeing the Northern Lights. Unfortunally we can not promise that you will see the Northern Lights.":
        "L'offre de traîneau à chiens sous les aurores propose des sorties en soirée pour augmenter les chances de voir les aurores boréales. Malheureusement, nous ne pouvons pas garantir que vous les verrez.",
      "What is included, and what should I bring?": "Qu'est-ce qui est inclus, et que dois-je apporter ?",
      "We are supplying warm clothes and snow shoes except for gloves\\mittens and hat. Please look at the activity you want to do for information about what is included.":
        "Nous fournissons des vêtements chauds et des raquettes, sauf les gants\\moufles et le bonnet. Veuillez consulter l'activité souhaitée pour savoir ce qui est inclus.",
      "What happens if there is bad weather?": "Que se passe-t-il en cas de mauvais temps ?",
      "Arctic weather can change quickly, so routes or programs may be adjusted for safety. If conditions are unsafe, Into Nature may cancel the activity. In that case, guests receive an 80% refund. Safety always comes first.":
        "La météo arctique peut changer rapidement, les itinéraires ou programmes peuvent donc être adaptés pour des raisons de sécurité. Si les conditions ne sont pas sûres, Into Nature peut annuler l'activité. Dans ce cas, les clients reçoivent un remboursement de 80 %. La sécurité passe toujours en premier.",
      "More frequently asked questions": "Plus de questions fréquentes",
      "Start planning your day in Malangen": "Commencez à planifier votre journée à Malangen",
      "Dog sledding, aurora evenings, snowshoe hikes and ice fishing, guided by a small family-run kennel outside Tromsø.":
        "Traîneau à chiens, soirées sous les aurores, randonnées en raquettes et pêche sur glace, guidés par un petit chenil familial près de Tromsø.",
      "Choose your tour": "Choisir votre excursion",
      "Terms and conditions": "Conditions générales",
      "Privacy": "Confidentialité",

      "Terms and Conditions for Activities / Accommodation / Rentals at Into Nature":
        "Conditions générales pour les activités / hébergements / locations chez Into Nature",
      "1. Agreement": "1. Accord",
      "Unless a separate written agreement is made, this is a binding agreement between Into Nature (hereafter referred to as \"The Arranger\") and the customer (referred to as \"The Client\"). All laws and regulations related to tourism in Norway and Svalbard apply to package tours and other travel with Into Nature.":
        "Sauf accord écrit séparé, ceci constitue un accord contraignant entre Into Nature (ci-après appelé « L'Organisateur ») et le client (appelé « Le Client »). Toutes les lois et réglementations relatives au tourisme en Norvège et au Svalbard s'appliquent aux voyages à forfait et autres voyages avec Into Nature.",
      "2. Booking": "2. Réservation",
      "When the Arranger sends the booking confirmation to the Client, the booking is considered accepted unless the Client immediately notifies the Arranger in writing about discrepancies or errors in the booking.":
        "Lorsque l'Organisateur envoie la confirmation de réservation au Client, la réservation est considérée comme acceptée, sauf si le Client informe immédiatement l'Organisateur par écrit de divergences ou d'erreurs dans la réservation.",
      "3. Payment": "3. Paiement",
      "Bookings are paid via bank transfer. Reservations under NOK 10,000 and reservations made online will be charged in full immediately.":
        "Les réservations sont payées par virement bancaire. Les réservations inférieures à NOK 10,000 et les réservations effectuées en ligne seront facturées intégralement immédiatement.",
      "For amounts over NOK 10,000:": "Pour les montants supérieurs à NOK 10,000 :",
      "100% of the total amount must be paid upon the Client's confirmation order.":
        "100 % du montant total doit être payé lors de la confirmation de commande du Client.",
      "4. Cancellation Rules": "4. Règles d'annulation",
      "Only written cancellations are valid. No refunds will be given due to flight cancellations, lack of a valid driver's license/passport, or illness. We recommend that our customers always book additional personal travel insurance in case of cancellations. Please contact your insurance company for more information.":
        "Seules les annulations écrites sont valables. Aucun remboursement ne sera accordé en cas d'annulation de vol, d'absence de permis de conduire/passeport valide ou de maladie. Nous recommandons à nos clients de toujours souscrire une assurance voyage personnelle supplémentaire en cas d'annulation. Veuillez contacter votre compagnie d'assurance pour plus d'informations.",
      "Cancellation 30 days or more prior to the agreed activity start date":
        "Annulation 30 jours ou plus avant la date de début convenue de l'activité",
      "→ You will be automatically refunded the full activity price, minus the booking fee.":
        "→ Le prix complet de l'activité vous sera automatiquement remboursé, moins les frais de réservation.",
      "Cancellation between 30 and 10 days prior to the agreed activity start date":
        "Annulation entre 30 et 10 jours avant la date de début convenue de l'activité",
      "→ You are entitled to a 50% refund.": "→ Vous avez droit à un remboursement de 50 %.",
      "Cancellation 10 days or less prior to the agreed activity start date":
        "Annulation 10 jours ou moins avant la date de début convenue de l'activité",
      "→ This will be considered a last-minute cancellation. No refund will be issued.":
        "→ Cela sera considéré comme une annulation de dernière minute. Aucun remboursement ne sera effectué.",
      "5. Program Changes on a Guided Tour": "5. Modifications du programme lors d'une excursion guidée",
      "Circumstances such as extreme temperatures or rapid weather changes may force changes in our programs to ensure the safety of our guests. In the event of unforeseen circumstances or weather conditions affecting the routes related to the program, no refunds will be issued. The safety of our guests is always our top priority. Into Nature also reserves the right to cancel the activity if the minimum number of participants is not reached or if the conditions are deemed unsafe.":
        "Des circonstances telles que des températures extrêmes ou des changements météorologiques rapides peuvent nous obliger à modifier nos programmes afin d'assurer la sécurité de nos clients. En cas de circonstances imprévues ou de conditions météorologiques affectant les itinéraires liés au programme, aucun remboursement ne sera effectué. La sécurité de nos clients est toujours notre priorité absolue. Into Nature se réserve également le droit d'annuler l'activité si le nombre minimum de participants n'est pas atteint ou si les conditions sont jugées dangereuses.",
      "In such cases, the Client will receive an 80% refund.":
        "Dans de tels cas, le Client recevra un remboursement de 80 %.",
      "6. Responsibility and Liability": "6. Responsabilité",
      "Participants are responsible for evaluating whether they are physically and mentally prepared for the activities they have booked. Participants must follow all instructions given by our tour guides. Into Nature reserves the right to refuse participation if the participant is considered a safety risk. In this case, the participant will receive a 40% refund of the total amount.":
        "Les participants sont responsables d'évaluer s'ils sont physiquement et mentalement prêts pour les activités qu'ils ont réservées. Les participants doivent suivre toutes les instructions données par nos guides. Into Nature se réserve le droit de refuser la participation si le participant est considéré comme présentant un risque pour la sécurité. Dans ce cas, le participant recevra un remboursement de 40 % du montant total.",
      "During our activities, participants must not be under the influence of alcohol or other intoxicants. If damage to equipment or the dogs occurs due to negligent behavior, the Client may be held responsible and liable.":
        "Pendant nos activités, les participants ne doivent pas être sous l'influence de l'alcool ou d'autres substances intoxicantes. Si des dommages au matériel ou aux chiens surviennent en raison d'un comportement négligent, le Client peut être tenu responsable.",
      "7. Complaint": "7. Réclamation",
      "If the Client wishes to make a complaint about the product, this should be addressed to Into Nature at the earliest opportunity. If the issue cannot be resolved, and the Client wishes to complain further, the complaint must be made as soon as possible after the activity. Complaints must be submitted in writing and received no later than one month after the date of the booked activity/accommodation/rental.":
        "Si le Client souhaite formuler une réclamation concernant le produit, celle-ci doit être adressée à Into Nature dès que possible. Si le problème ne peut pas être résolu et que le Client souhaite poursuivre sa réclamation, celle-ci doit être faite dès que possible après l'activité. Les réclamations doivent être soumises par écrit et reçues au plus tard un mois après la date de l'activité/l'hébergement/la location réservé(e).",
      "8. Insurance": "8. Assurance",
      "Into Nature’s activities are not covered by insurance, so please ensure your travel insurance covers these types of activities. Into Nature is not liable for accidents, injuries, damages, or losses that are outside the company’s control.":
        "Les activités d'Into Nature ne sont pas couvertes par une assurance. Veuillez donc vous assurer que votre assurance voyage couvre ce type d'activités. Into Nature n'est pas responsable des accidents, blessures, dommages ou pertes qui échappent au contrôle de l'entreprise.",
      "9. Misprints and Price Changes": "9. Erreurs d'impression et modifications de prix",
      "Into Nature is not responsible for typographical errors and reserves the right to change the program and adjust prices without prior notice.":
        "Into Nature n'est pas responsable des erreurs typographiques et se réserve le droit de modifier le programme et d'ajuster les prix sans préavis.",
      "10. Physical Condition": "10. Condition physique",
      "A good physical condition is required to complete this tour. This is defined as:":
        "Une bonne condition physique est requise pour effectuer cette excursion. Elle est définie comme suit :",
      "Being able to maintain balance on the sled.": "Être capable de garder l'équilibre sur le traîneau.",
      "No injuries affecting the knees, back, or arms.":
        "Ne pas avoir de blessures affectant les genoux, le dos ou les bras.",
      "No heart conditions or other pre-existing conditions that could increase risk during physical activity, including obesity.":
        "Ne pas avoir de problèmes cardiaques ou d'autres conditions préexistantes pouvant augmenter les risques pendant une activité physique, y compris l'obésité.",
      "Not being intoxicated.": "Ne pas être sous l'influence de substances.",
      "Ability to push the sled uphill.": "Être capable de pousser le traîneau en montée.",
      "It is the responsibility of the purchasing party to ensure that all participants are properly informed of the physical requirements before booking. Participants who do not meet these criteria may have their activity canceled without refund.":
        "Il est de la responsabilité de la personne effectuant l'achat de s'assurer que tous les participants sont correctement informés des exigences physiques avant la réservation. Les participants qui ne répondent pas à ces critères peuvent voir leur activité annulée sans remboursement.",
      "You should not participate in this tour if you are, for example:":
        "Vous ne devez pas participer à cette excursion si vous êtes, par exemple :",
      "Pregnant": "Enceinte",
      "Recovering from surgery": "En convalescence après une opération",
      "Not accustomed to physical exercise": "Peu habitué(e) à l'exercice physique",
      "Experiencing back or joint pain": "Souffrant de douleurs au dos ou aux articulations",
      "Have a history of narcolepsy or blackouts": "Ayant des antécédents de narcolepsie ou de pertes de connaissance",
      "Please contact us if you have any questions.": "Veuillez nous contacter si vous avez des questions.",

      "Privacy": "Confidentialité",
      "Last updated: June 2026": "Dernière mise à jour : juin 2026",
      "Who we are": "Qui nous sommes",
      "Into Nature AS offers small-group Arctic activities from Malangen, Norway. We handle guest information carefully and only use it for relevant booking and communication needs.":
        "Into Nature AS propose des activités arctiques en petits groupes depuis Malangen, en Norvège. Nous traitons les informations des clients avec soin et les utilisons uniquement pour les besoins pertinents liés à la réservation et à la communication.",
      "Information we collect": "Informations que nous collectons",
      "When you contact us or book an activity, we may collect:":
        "Lorsque vous nous contactez ou réservez une activité, nous pouvons collecter :",
      "Name and contact details": "Nom et coordonnées",
      "Booking details, group size and selected activity":
        "Détails de réservation, taille du groupe et activité choisie",
      "Relevant messages, preferences or safety information you choose to share":
        "Messages pertinents, préférences ou informations de sécurité que vous choisissez de partager",
      "Payment or transaction details handled through our booking/payment providers":
        "Détails de paiement ou de transaction traités par nos prestataires de réservation/paiement",
      "How we use information": "Comment nous utilisons les informations",
      "We use guest information to manage bookings, answer questions, prepare safe activities, process payments and send practical updates related to a tour.":
        "Nous utilisons les informations des clients pour gérer les réservations, répondre aux questions, préparer des activités sûres, traiter les paiements et envoyer des informations pratiques liées à une excursion.",
      "Sharing information": "Partage des informations",
      "We do not sell personal information. Information may be shared with trusted service providers when needed for booking, payment, communication or legal requirements.":
        "Nous ne vendons pas les informations personnelles. Les informations peuvent être partagées avec des prestataires de confiance lorsque cela est nécessaire pour la réservation, le paiement, la communication ou les obligations légales.",
      "Your rights": "Vos droits",
      "You may contact us to ask what information we hold about you, request corrections or ask for deletion where applicable. Contact us at info@intonaturearctic.com.":
        "Vous pouvez nous contacter pour savoir quelles informations nous détenons à votre sujet, demander des corrections ou demander leur suppression lorsque cela est applicable. Contactez-nous à info@intonaturearctic.com.",
    },
  };

  const textNodeSources = new WeakMap();

  const normalize = (value) => value.replace(/\s+/g, " ").trim();

  const getPageName = () => {
    const pageName = window.location.pathname.split("/").pop();
    return pageName || "index.html";
  };

  const translateValue = (value, language) => {
    if (language === "en") {
      return value;
    }

    return translations[language]?.[normalize(value)] || value;
  };

  const applyMeta = (language) => {
    const meta = pageMeta[getPageName()]?.[language];
    if (!meta) return;

    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  };

  const applyKeyedTranslations = (language) => {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = translations[language]?.[key] || translations.en?.[key];
      if (translation) {
        element.textContent = translation;
      }
    });
  };

  const applyAttributeTranslations = (language) => {
    document.querySelectorAll("[aria-label]").forEach((element) => {
      if (element.classList.contains("language-toggle")) return;

      if (!element.dataset.i18nAriaSource) {
        element.dataset.i18nAriaSource = element.getAttribute("aria-label");
      }

      element.setAttribute(
        "aria-label",
        translateValue(element.dataset.i18nAriaSource, language)
      );
    });

    document.querySelectorAll("img[alt]").forEach((element) => {
      if (!element.dataset.i18nAltSource) {
        element.dataset.i18nAltSource = element.getAttribute("alt");
      }

      element.setAttribute("alt", translateValue(element.dataset.i18nAltSource, language));
    });
  };

  const applyTextNodeTranslations = (language) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, svg, .language-toggle, [data-i18n-skip]")) {
          return NodeFilter.FILTER_REJECT;
        }

        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });

    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => {
      if (!textNodeSources.has(node)) {
        textNodeSources.set(node, normalize(node.nodeValue));
      }

      const source = textNodeSources.get(node);
      const translated = translateValue(source, language);
      const leadingWhitespace = node.nodeValue.match(/^\s*/)?.[0] || "";
      const trailingWhitespace = node.nodeValue.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;
    });
  };

  const applyLanguage = (language) => {
    const activeLanguage = supportedLanguages[language] ? language : "en";
    document.documentElement.lang = supportedLanguages[activeLanguage].htmlLang;
    applyMeta(activeLanguage);
    applyKeyedTranslations(activeLanguage);
    applyAttributeTranslations(activeLanguage);
    applyTextNodeTranslations(activeLanguage);
  };

  return {
    applyLanguage,
    supportedLanguages,
  };
})();

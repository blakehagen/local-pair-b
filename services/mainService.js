angular.module('localPair').service('mainService', function () {

  var expertData = [
    {
      "id": 1,
      "gender": "Male",
      "first_name": "Bobby",
      "last_name": "Jenkins",
      "email": "bjenkins0@addthis.com",
      "city": "Krasnoarmeysk",
      "country": "Russia",
      "skills": [
        "Tumblr",
        "Pyrotechnics",
        "LLBLGen Pro",
        "Fly Tying",
        "Counseling Psychology",
        "CTA",
        "Solution Architecture",
        "FCC"
      ],
      "description": "sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis",
      "img": "https://randomuser.me/api/portraits/med/men/84.jpg"
    },
    {
      "id": 2,
      "gender": "Male",
      "first_name": "Joseph",
      "last_name": "Rice",
      "email": "jrice1@networkadvertising.org",
      "city": "El Rancho",
      "country": "Honduras",
      "skills": [
        "Yacc",
        "Smartforms",
        "QCAT",
        "Fund Accounting",
        "Festivals",
        "EEO Investigations",
        "Lyric Soprano",
        "Apache Ivy"
      ],
      "description": "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor",
      "img": "https://randomuser.me/api/portraits/med/men/85.jpg"
    },
    {
      "id": 3,
      "gender": "Male",
      "first_name": "Harry",
      "last_name": "Cunningham",
      "email": "hcunningham2@theatlantic.com",
      "city": "Juncalito Abajo",
      "country": "Dominican Republic",
      "skills": [
        "VAT",
        "EES",
        "VSA",
        "NBFC",
        "Police",
        "Eye Exams",
        "CDMA",
        "BIM"
      ],
      "description": "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit",
      "img": "https://randomuser.me/api/portraits/med/men/86.jpg"
    },
    {
      "id": 4,
      "gender": "Male",
      "first_name": "William",
      "last_name": "Cooper",
      "email": "wcooper3@rediff.com",
      "city": "Fuxing",
      "country": "China",
      "skills": [
        "FM200",
        "CPLD",
        "Aeronautics",
        "Solaris Zones",
        "Clinical Research",
        "CPG Industry",
        "Lua",
        "Flexo"
      ],
      "description": "id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci",
      "img": "https://randomuser.me/api/portraits/med/men/87.jpg"
    },
    {
      "id": 5,
      "gender": "Female",
      "first_name": "Dorothy",
      "last_name": "Meyer",
      "email": "dmeyer4@umn.edu",
      "city": "Hongwŏn",
      "country": "North Korea",
      "skills": [
        "Fedora",
        "AV",
        "Erosion Control",
        "Fire Alarm",
        "RSView",
        "FPGA",
        "PPPoE",
        "Kitchen Cabinets"
      ],
      "description": "consequat morbi a ipsum integer a nibh in quis justo maecenas",
      "img": "https://randomuser.me/api/portraits/med/women/12.jpg"
    },
    {
      "id": 6,
      "gender": "Female",
      "first_name": "Teresa",
      "last_name": "Harvey",
      "email": "tharvey5@hud.gov",
      "city": "Nyuksenitsa",
      "country": "Russia",
      "skills": [
        "eCTD",
        "Company Set-up",
        "IKB",
        "Ideas NX",
        "Icon Design",
        "Oxy-acetylene",
        "MPEG",
        "Gas Chromatography"
      ],
      "description": "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut",
      "img": "https://randomuser.me/api/portraits/med/women/13.jpg"
    },
    {
      "id": 7,
      "gender": "Female",
      "first_name": "Jessica",
      "last_name": "Turner",
      "email": "jturner6@cyberchimps.com",
      "city": "Couto",
      "state": "Braga",
      "postal_code": "4750-417",
      "country": "Portugal",
      "skills": [
        "Access Control",
        "MVT",
        "Kubuntu",
        "Wind",
        "RF Design",
        "Term Life Insurance",
        "Lightroom",
        "Audio Typing"
      ],
      "description": "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
      "img": "https://randomuser.me/api/portraits/med/women/14.jpg"
    },
    {
      "id": 8,
      "gender": "Male",
      "first_name": "Todd",
      "last_name": "Myers",
      "email": "tmyers7@hao123.com",
      "city": "Kanye",
      "country": "Botswana",
      "skills": [
        "FCAW",
        "CVE",
        "Avid DS Nitris",
        "Experimentation",
        "Quality by Design",
        "Governance",
        "Hospitality Management",
        "RCFA"
      ],
      "description": "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
      "img": "https://randomuser.me/api/portraits/med/men/88.jpg"
    },
    {
      "id": 9,
      "gender": "Male",
      "first_name": "David",
      "last_name": "Morrison",
      "email": "dmorrison8@devhub.com",
      "city": "Uglegorsk",
      "country": "Russia",
      "skills": [
        "wxWidgets",
        "Ayurveda",
        "Youth Outreach",
        "Commercial Piloting",
        "Oil \u0026amp; Gas Law",
        "CWTS",
        "Smart Metering",
        "Lead Generation"
      ],
      "description": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non",
      "img": "https://randomuser.me/api/portraits/med/men/75.jpg"
    },
    {
      "id": 10,
      "gender": "Male",
      "first_name": "Ronald",
      "last_name": "Snyder",
      "email": "rsnyder9@disqus.com",
      "city": "Sadahayu",
      "country": "Indonesia",
      "skills": [
        "ISO",
        "NPR Report Writing",
        "OData",
        "Autodesk Inventor",
        "RWD Info Pak",
        "MKS",
        "IGOR Pro",
        "Topographic Surveys"
      ],
      "description": "porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus",
      "img": "https://randomuser.me/api/portraits/med/men/89.jpg"
    },
    {
      "id": 11,
      "gender": "Male",
      "first_name": "Christopher",
      "last_name": "Garrett",
      "email": "cgarretta@hubpages.com",
      "city": "Huangqiang",
      "country": "China",
      "skills": [
        "WSAD",
        "Utility Regulation",
        "IVF",
        "Eagle PCB",
        "VMware Certified Professional",
        "Zenworks",
        "IaaS",
        "GPS Applications"
      ],
      "description": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
      "img": "https://randomuser.me/api/portraits/med/men/81.jpg"
    },
    {
      "id": 12,
      "gender": "Male",
      "first_name": "Chris",
      "last_name": "Montgomery",
      "email": "cmontgomeryb@usatoday.com",
      "city": "Huping",
      "country": "China",
      "skills": [
        "Driving Results",
        "Clinical Research",
        "CGI/Perl",
        "SEM",
        "XML Gateway",
        "Equity Derivatives",
        "HSUPA",
        "JReport"
      ],
      "description": "libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
      "img": "https://randomuser.me/api/portraits/med/men/80.jpg"
    },
    {
      "id": 13,
      "gender": "Male",
      "first_name": "Phillip",
      "last_name": "Burns",
      "email": "pburnsc@hc360.com",
      "city": "Ilha Solteira",
      "country": "Brazil",
      "skills": [
        "DFMEA",
        "PTCRB",
        "RBAC",
        "QML",
        "DVP\u0026amp;R",
        "Nios II",
        "Olfaction",
        "Cycle Time Reduction"
      ],
      "description": "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
      "img": "https://randomuser.me/api/portraits/med/men/92.jpg"
    },
    {
      "id": 14,
      "gender": "Male",
      "first_name": "Jose",
      "last_name": "Nelson",
      "email": "jnelsond@lulu.com",
      "city": "Liangjing",
      "country": "China",
      "skills": [
        "Db4o",
        "JSP",
        "Jeep",
        "Klarity",
        "Process Engineering",
        "Kinematics",
        "PDH",
        "cPanel"
      ],
      "description": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
      "img": "https://randomuser.me/api/portraits/med/men/93.jpg"
    },
    {
      "id": 15,
      "gender": "Female",
      "first_name": "Kathryn",
      "last_name": "Roberts",
      "email": "krobertse@harvard.edu",
      "city": "Parizh",
      "country": "Russia",
      "skills": [
        "Case Management",
        "NTSC",
        "SRDS",
        "TGI",
        "Job Costing",
        "Private Banking",
        "Term Life Insurance",
        "Food"
      ],
      "description": "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
      "img": "https://randomuser.me/api/portraits/med/women/15.jpg"
    },
    {
      "id": 16,
      "gender": "Female",
      "first_name": "Norma",
      "last_name": "Adams",
      "email": "nadamsf@about.com",
      "city": "Paulba",
      "country": "Philippines",
      "skills": [
        "Forklift Operation",
        "DLPAR",
        "Urban Economics",
        "SaaS",
        "HUD",
        "Tour Operators",
        "BPF",
        "Newsletters"
      ],
      "description": "venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
      "img": "https://randomuser.me/api/portraits/med/women/16.jpg"
    },
    {
      "id": 17,
      "gender": "Female",
      "first_name": "Judith",
      "last_name": "Lewis",
      "email": "jlewisg@studiopress.com",
      "city": "Tīkāpur",
      "country": "Nepal",
      "skills": [
        "Hmong",
        "Aerohive",
        "HBSS",
        "Consumer Electronics",
        "TDMA",
        "WHMIS",
        "Waste",
        "Radio Promotions"
      ],
      "description": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
      "img": "https://randomuser.me/api/portraits/med/women/17.jpg"
    },
    {
      "id": 18,
      "gender": "Female",
      "first_name": "Sandra",
      "last_name": "Lawson",
      "email": "slawsonh@tinypic.com",
      "city": "Linoan",
      "country": "Philippines",
      "skills": [
        "Attorneys",
        "Historical Research",
        "VB.NET",
        "IEEE 802.11",
        "DVB-H",
        "DFD",
        "CPG Industry",
        "Civil Society"
      ],
      "description": "ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend",
      "img": "https://randomuser.me/api/portraits/med/women/18.jpg"
    },
    {
      "id": 19,
      "gender": "Female",
      "first_name": "Lillian",
      "last_name": "Little",
      "email": "llittlei@noaa.gov",
      "city": "Koumra",
      "country": "Chad",
      "skills": [
        "GMLAN",
        "Pharmacy",
        "Flex",
        "Procurement Outsourcing",
        "GCIH",
        "WDS",
        "DQL",
        "Rent to Own"
      ],
      "description": "lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat",
      "img": "https://randomuser.me/api/portraits/med/women/19.jpg"
    },
    {
      "id": 20,
      "gender": "Male",
      "first_name": "Jeremy",
      "last_name": "Ward",
      "email": "jwardj@jugem.jp",
      "city": "Antananarivo",
      "country": "Madagascar",
      "skills": [
        "RTO",
        "Algorithm Design",
        "Kontakt",
        "Slovak",
        "Overall Wellness",
        "XSL-FO",
        "TDMA",
        "Rock Music"
      ],
      "description": "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci",
      "img": "https://randomuser.me/api/portraits/med/men/95.jpg"
    }
  ];

  this.getExperts = function () {
    return expertData;
  };

  this.getSelectedExpert = function (id) {
    for (var i = 0; i < expertData.length; i++) {
      if (expertData[i].id === id) {
        return expertData[i];
      }
    }
    return "No matches found."
  }

});
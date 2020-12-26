var regioni = [
        "",
        "Abruzzo",
        "Basilicata",
        "Calabria",
        "Campania",
        "Emilia Romagna",
        "Friuli",
        "Lazio",
        "Liguria",
        "Lombardia",
        "Marche",
        "Molise",
        "Piemonte",
        "Puglia",
        "San Marino",
        "Sardegna",
        "Sicilia",
        "Toscana",
        "Trentino",
        "Umbria",
        "Valle d'Aosta",
        "Veneto"
];


var regioniProvincie = {

    "Sicilia": [{
        "nome": "Agrigento ",
        "sigla": "AG"
    }, {
        "nome": "Caltanissetta ",
        "sigla": "CL"
    }, {
        "nome": "Catania ",
        "sigla": "CT"
    }, {
        "nome": "Enna ",
        "sigla": "EN"
    }, {
        "nome": "Messina ",
        "sigla": "ME"
    }, {
        "nome": "Palermo ",
        "sigla": "PA"
    }, {
        "nome": "Ragusa ",
        "sigla": "RG"
    }, {
        "nome": "Siracusa ",
        "sigla": "SR"
    }, {
        "nome": "Trapani ",
        "sigla": "TP"
    }],
    "Piemonte": [{
        "nome": "Alessandria",
        "sigla": "AL"
    }, {
        "nome": "Asti ",
        "sigla": "AT"
    }, {
        "nome": "Biella ",
        "sigla": "BI"
    }, {
        "nome": "Cuneo ",
        "sigla": "CN"
    }, {
        "nome": "Novara ",
        "sigla": "NO"
    }, {
        "nome": "Torino ",
        "sigla": "TO"
    }, {
        "nome": "Verbano-Cusio-Ossola ",
        "sigla": "VB"
    }, {
        "nome": "Vercelli ",
        "sigla": "VC"
    }],
    "Marche": [{
        "nome": "Ancona ",
        "sigla": "AN"
    }, {
        "nome": "Ascoli Piceno ",
        "sigla": "AP"
    }, {
        "nome": "Macerata ",
        "sigla": "MC"
    }, {
        "nome": "Pesaro e Urbino ",
        "sigla": "PU"
    }, {
        "nome": "Fermo ",
        "sigla": "FM"
    }],
    "Valle d'Aosta": [{
        "nome": "Aosta ",
        "sigla": "AO"
    }],
    "Toscana": [{
        "nome": "Arezzo ",
        "sigla": "AR"
    }, {
        "nome": "Firenze ",
        "sigla": "FI"
    }, {
        "nome": "Grosseto ",
        "sigla": "GR"
    }, {
        "nome": "Livorno ",
        "sigla": "LI"
    }, {
        "nome": "Lucca ",
        "sigla": "LU"
    }, {
        "nome": "Massa-Carrara ",
        "sigla": "MS"
    }, {
        "nome": "Pisa ",
        "sigla": "PI"
    }, {
        "nome": "Pistoia ",
        "sigla": "PT"
    }, {
        "nome": "Prato ",
        "sigla": "PO"
    }, {
        "nome": "Siena ",
        "sigla": "SI"
    }],
    "Campania": [{
        "nome": "Avellino ",
        "sigla": "AV"
    }, {
        "nome": "Benevento ",
        "sigla": "BN"
    }, {
        "nome": "Caserta ",
        "sigla": "CE"
    }, {
        "nome": "Napoli ",
        "sigla": "NA"
    }, {
        "nome": "Salerno ",
        "sigla": "SA"
    }],
    "Puglia": [{
        "nome": "Bari ",
        "sigla": "BA"
    }, {
        "nome": "Brindisi ",
        "sigla": "BR"
    }, {
        "nome": "Barletta-Andria-Trani ",
        "sigla": "BT"
    }, {
        "nome": "Foggia ",
        "sigla": "FG"
    }, {
        "nome": "Lecce ",
        "sigla": "LE"
    }, {
        "nome": "Taranto ",
        "sigla": "TA"
    }],
    "Veneto": [{
        "nome": "Belluno ",
        "sigla": "BL"
    }, {
        "nome": "Padova ",
        "sigla": "PD"
    }, {
        "nome": "Rovigo ",
        "sigla": "RO"
    }, {
        "nome": "Treviso ",
        "sigla": "TV"
    }, {
        "nome": "Venezia ",
        "sigla": "VE"
    }, {
        "nome": "Verona ",
        "sigla": "VR"
    }, {
        "nome": "Vicenza ",
        "sigla": "VI"
    }],
    "Lombardia": [{
        "nome": "Bergamo ",
        "sigla": "BG"
    }, {
        "nome": "Brescia ",
        "sigla": "BS"
    }, {
        "nome": "Como ",
        "sigla": "CO"
    }, {
        "nome": "Cremona ",
        "sigla": "CR"
    }, {
        "nome": "Lecco ",
        "sigla": "LC"
    }, {
        "nome": "Lodi ",
        "sigla": "LO"
    }, {
        "nome": "Mantova ",
        "sigla": "MN"
    }, {
        "nome": "Milano ",
        "sigla": "MI"
    }, {
        "nome": "Monza e della Brianza ",
        "sigla": "MB"
    }, {
        "nome": "Pavia ",
        "sigla": "PV"
    }, {
        "nome": "Sondrio ",
        "sigla": "SO"
    }, {
        "nome": "Varese ",
        "sigla": "VA"
    }],
    "Emilia Romagna": [{
        "nome": "Bologna ",
        "sigla": "BO"
    }, {
        "nome": "Ferrara ",
        "sigla": "FE"
    }, {
        "nome": "Forlì Cesena ",
        "sigla": "FC"
    }, {
        "nome": "Modena ",
        "sigla": "MO"
    }, {
        "nome": "Parma ",
        "sigla": "PR"
    }, {
        "nome": "Piacenza ",
        "sigla": "PC"
    }, {
        "nome": "Ravenna ",
        "sigla": "RA"
    }, {
        "nome": "Reggio Emilia ",
        "sigla": "RE"
    }, {
        "nome": "Rimini ",
        "sigla": "RN"
    }],
    "Trentino": [{
        "nome": "Bolzano ",
        "sigla": "BZ"
    }, {
        "nome": "Trento ",
        "sigla": "TN"
    }],
    "Sardegna": [{
        "nome": "Cagliari ",
        "sigla": "CA"
    }, {
        "nome": "Carbonia-Iglesias ",
        "sigla": "CI"
    }, {
        "nome": "Medio Campidano ",
        "sigla": "VS"
    }, {
        "nome": "Nuoro ",
        "sigla": "NU"
    }, {
        "nome": "Ogliastra ",
        "sigla": "OG"
    }, {
        "nome": "Olbia-Tempio ",
        "sigla": "OT"
    }, {
        "nome": "Oristano ",
        "sigla": "OR"
    }, {
        "nome": "Sassari ",
        "sigla": "SS"
    }],
    "Molise": [{
        "nome": "Campobasso ",
        "sigla": "CB"
    }, {
        "nome": "Isernia ",
        "sigla": "IS"
    }],
    "Calabria": [{
        "nome": "Catanzaro ",
        "sigla": "CZ"
    }, {
        "nome": "Cosenza ",
        "sigla": "CS"
    }, {
        "nome": "Crotone ",
        "sigla": "KR"
    }, {
        "nome": "Reggio Calabria ",
        "sigla": "RC"
    }, {
        "nome": "Vibo Valentia ",
        "sigla": "VV"
    }],
    "Abruzzo": [{
        "nome": "Chieti ",
        "sigla": "CH"
    }, {
        "nome": "L'Aquila ",
        "sigla": "AQ"
    }, {
        "nome": "Pescara ",
        "sigla": "PE"
    }, {
        "nome": "Teramo ",
        "sigla": "TE"
    }],
    "Lazio": [{
        "nome": "Frosinone ",
        "sigla": "FR"
    }, {
        "nome": "Latina ",
        "sigla": "LT"
    }, {
        "nome": "Rieti ",
        "sigla": "RI"
    }, {
        "nome": "Roma ",
        "sigla": "RM"
    }, {
        "nome": "Viterbo ",
        "sigla": "VT"
    }],
    "Liguria": [{
        "nome": "Genova ",
        "sigla": "GE"
    }, {
        "nome": "Imperia ",
        "sigla": "IM"
    }, {
        "nome": "La Spezia ",
        "sigla": "SP"
    }, {
        "nome": "Savona ",
        "sigla": "SV"
    }],
    "Friuli": [{
        "nome": "Gorizia ",
        "sigla": "GO"
    }, {
        "nome": "Pordenone ",
        "sigla": "PN"
    }, {
        "nome": "Trieste ",
        "sigla": "TS"
    }, {
        "nome": "Udine ",
        "sigla": "UD"
    }],
    "Basilicata": [{
        "nome": "Matera ",
        "sigla": "MT"
    }, {
        "nome": "Potenza ",
        "sigla": "PZ"
    }],
    "Umbria": [{
        "nome": "Perugia ",
        "sigla": "PG"
    }, {
        "nome": "Terni ",
        "sigla": "TR"
    }],
    "San Marino": [{
        "nome": "Repubblica di San Marino ",
        "sigla": "RSM"
    }]
};


var nazioni = [
{ "codice": "4", "nome": "Afghanistan" },
{ "codice": "248", "nome": "Åland Islands" },
{ "codice": "8", "nome": "Albania" },
{ "codice": "12", "nome": "Algeria" },
{ "codice": "16", "nome": "American Samoa" },
{ "codice": "20", "nome": "Andorra" },
{ "codice": "24", "nome": "Angola" },
{ "codice": "660", "nome": "Anguilla" },
{ "codice": "10", "nome": "Antarctica" },
{ "codice": "28", "nome": "Antigua and Barbuda" },
{ "codice": "32", "nome": "Argentina" },
{ "codice": "51", "nome": "Armenia" },
{ "codice": "533", "nome": "Aruba" },
{ "codice": "36", "nome": "Australia" },
{ "codice": "40", "nome": "Austria" },
{ "codice": "31", "nome": "Azerbaijan" },
{ "codice": "44", "nome": "Bahamas" },
{ "codice": "48", "nome": "Bahrain" },
{ "codice": "50", "nome": "Bangladesh" },
{ "codice": "52", "nome": "Barbados" },
{ "codice": "112", "nome": "Belarus" },
{ "codice": "56", "nome": "Belgium" },
{ "codice": "84", "nome": "Belize" },
{ "codice": "204", "nome": "Benin" },
{ "codice": "60", "nome": "Bermuda" },
{ "codice": "64", "nome": "Bhutan" },
{ "codice": "68", "nome": "Bolivia, Plurinational State of" },
{ "codice": "535", "nome": "Bonaire, Sint Eustatius and Saba" },
{ "codice": "70", "nome": "Bosnia and Herzegovina" },
{ "codice": "72", "nome": "Botswana" },
{ "codice": "74", "nome": "Bouvet Island" },
{ "codice": "76", "nome": "Brazil" },
{ "codice": "86", "nome": "British Indian Ocean Territory" },
{ "codice": "96", "nome": "Brunei Darussalam" },
{ "codice": "100", "nome": "Bulgaria" },
{ "codice": "854", "nome": "Burkina Faso" },
{ "codice": "108", "nome": "Burundi" },
{ "codice": "116", "nome": "Cambodia" },
{ "codice": "120", "nome": "Cameroon" },
{ "codice": "124", "nome": "Canada" },
{ "codice": "132", "nome": "Cape Verde" },
{ "codice": "136", "nome": "Cayman Islands" },
{ "codice": "140", "nome": "Central African Republic" },
{ "codice": "148", "nome": "Chad" },
{ "codice": "152", "nome": "Chile" },
{ "codice": "156", "nome": "China" },
{ "codice": "162", "nome": "Christmas Island" },
{ "codice": "166", "nome": "Cocos (Keeling) Islands" },
{ "codice": "170", "nome": "Colombia" },
{ "codice": "174", "nome": "Comoros" },
{ "codice": "178", "nome": "Congo" },
{ "codice": "180", "nome": "Congo, the Democratic Republic of the" },
{ "codice": "184", "nome": "Cook Islands" },
{ "codice": "188", "nome": "Costa Rica" },
{ "codice": "384", "nome": "Côte d\'Ivoire" },
{ "codice": "191", "nome": "Croatia" },
{ "codice": "192", "nome": "Cuba" },
{ "codice": "531", "nome": "Curaçao" },
{ "codice": "196", "nome": "Cyprus" },
{ "codice": "203", "nome": "Czech Republic" },
{ "codice": "208", "nome": "Denmark" },
{ "codice": "262", "nome": "Djibouti" },
{ "codice": "212", "nome": "Dominica" },
{ "codice": "214", "nome": "Dominican Republic" },
{ "codice": "218", "nome": "Ecuador" },
{ "codice": "818", "nome": "Egypt" },
{ "codice": "222", "nome": "El Salvador" },
{ "codice": "226", "nome": "Equatorial Guinea" },
{ "codice": "232", "nome": "Eritrea" },
{ "codice": "233", "nome": "Estonia" },
{ "codice": "231", "nome": "Ethiopia" },
{ "codice": "238", "nome": "Falkland Islands (Malvinas)" },
{ "codice": "234", "nome": "Faroe Islands" },
{ "codice": "242", "nome": "Fiji" },
{ "codice": "246", "nome": "Finland" },
{ "codice": "250", "nome": "France" },
{ "codice": "254", "nome": "French Guiana" },
{ "codice": "258", "nome": "French Polynesia" },
{ "codice": "260", "nome": "French Southern Territories" },
{ "codice": "266", "nome": "Gabon" },
{ "codice": "270", "nome": "Gambia" },
{ "codice": "268", "nome": "Georgia" },
{ "codice": "276", "nome": "Germany" },
{ "codice": "288", "nome": "Ghana" },
{ "codice": "292", "nome": "Gibraltar" },
{ "codice": "300", "nome": "Greece" },
{ "codice": "304", "nome": "Greenland" },
{ "codice": "308", "nome": "Grenada" },
{ "codice": "312", "nome": "Guadeloupe" },
{ "codice": "316", "nome": "Guam" },
{ "codice": "320", "nome": "Guatemala" },
{ "codice": "831", "nome": "Guernsey" },
{ "codice": "324", "nome": "Guinea" },
{ "codice": "624", "nome": "Guinea-Bissau" },
{ "codice": "328", "nome": "Guyana" },
{ "codice": "332", "nome": "Haiti" },
{ "codice": "334", "nome": "Heard Island and McDonald Islands" },
{ "codice": "336", "nome": "Holy See (Vatican City State)" },
{ "codice": "340", "nome": "Honduras" },
{ "codice": "344", "nome": "Hong Kong" },
{ "codice": "348", "nome": "Hungary" },
{ "codice": "352", "nome": "Iceland" },
{ "codice": "356", "nome": "India" },
{ "codice": "360", "nome": "Indonesia" },
{ "codice": "364", "nome": "Iran, Islamic Republic of" },
{ "codice": "368", "nome": "Iraq" },
{ "codice": "372", "nome": "Ireland" },
{ "codice": "833", "nome": "Isle of Man" },
{ "codice": "376", "nome": "Israel" },
{ "codice": "380", "nome": "Italy" },
{ "codice": "388", "nome": "Jamaica" },
{ "codice": "392", "nome": "Japan" },
{ "codice": "832", "nome": "Jersey" },
{ "codice": "400", "nome": "Jordan" },
{ "codice": "398", "nome": "Kazakhstan" },
{ "codice": "404", "nome": "Kenya" },
{ "codice": "296", "nome": "Kiribati" },
{ "codice": "408", "nome": "Korea, Democratic People\'s Republic of" },
{ "codice": "410", "nome": "Korea, Republic of" },
{ "codice": "414", "nome": "Kuwait" },
{ "codice": "417", "nome": "Kyrgyzstan" },
{ "codice": "418", "nome": "Lao People\'s Democratic Republic" },
{ "codice": "428", "nome": "Latvia" },
{ "codice": "422", "nome": "Lebanon" },
{ "codice": "426", "nome": "Lesotho" },
{ "codice": "430", "nome": "Liberia" },
{ "codice": "434", "nome": "Libya" },
{ "codice": "438", "nome": "Liechtenstein" },
{ "codice": "440", "nome": "Lithuania" },
{ "codice": "442", "nome": "Luxembourg" },
{ "codice": "446", "nome": "Macao" },
{ "codice": "807", "nome": "Macedonia, the former Yugoslav Republic of" },
{ "codice": "450", "nome": "Madagascar" },
{ "codice": "454", "nome": "Malawi" },
{ "codice": "458", "nome": "Malaysia" },
{ "codice": "462", "nome": "Maldives" },
{ "codice": "466", "nome": "Mali" },
{ "codice": "470", "nome": "Malta" },
{ "codice": "584", "nome": "Marshall Islands" },
{ "codice": "474", "nome": "Martinique" },
{ "codice": "478", "nome": "Mauritania" },
{ "codice": "480", "nome": "Mauritius" },
{ "codice": "175", "nome": "Mayotte" },
{ "codice": "484", "nome": "Mexico" },
{ "codice": "583", "nome": "Micronesia, Federated States of" },
{ "codice": "498", "nome": "Moldova, Republic of" },
{ "codice": "492", "nome": "Monaco" },
{ "codice": "496", "nome": "Mongolia" },
{ "codice": "499", "nome": "Montenegro" },
{ "codice": "500", "nome": "Montserrat" },
{ "codice": "504", "nome": "Morocco" },
{ "codice": "508", "nome": "Mozambique" },
{ "codice": "104", "nome": "Myanmar" },
{ "codice": "516", "nome": "Namibia" },
{ "codice": "520", "nome": "Nauru" },
{ "codice": "524", "nome": "Nepal" },
{ "codice": "528", "nome": "Netherlands" },
{ "codice": "540", "nome": "New Caledonia" },
{ "codice": "554", "nome": "New Zealand" },
{ "codice": "558", "nome": "Nicaragua" },
{ "codice": "562", "nome": "Niger" },
{ "codice": "566", "nome": "Nigeria" },
{ "codice": "570", "nome": "Niue" },
{ "codice": "574", "nome": "Norfolk Island" },
{ "codice": "580", "nome": "Northern Mariana Islands" },
{ "codice": "578", "nome": "Norway" },
{ "codice": "512", "nome": "Oman" },
{ "codice": "586", "nome": "Pakistan" },
{ "codice": "585", "nome": "Palau" },
{ "codice": "275", "nome": "Palestinian Territory, Occupied" },
{ "codice": "591", "nome": "Panama" },
{ "codice": "598", "nome": "Papua New Guinea" },
{ "codice": "600", "nome": "Paraguay" },
{ "codice": "604", "nome": "Peru" },
{ "codice": "608", "nome": "Philippines" },
{ "codice": "612", "nome": "Pitcairn" },
{ "codice": "616", "nome": "Poland" },
{ "codice": "620", "nome": "Portugal" },
{ "codice": "630", "nome": "Puerto Rico" },
{ "codice": "634", "nome": "Qatar" },
{ "codice": "638", "nome": "Réunion" },
{ "codice": "642", "nome": "Romania" },
{ "codice": "643", "nome": "Russian Federation" },
{ "codice": "646", "nome": "Rwanda" },
{ "codice": "652", "nome": "Saint Barthélemy" },
{ "codice": "654", "nome": "Saint Helena, Ascension and Tristan da Cunha" },
{ "codice": "659", "nome": "Saint Kitts and Nevis" },
{ "codice": "662", "nome": "Saint Lucia" },
{ "codice": "663", "nome": "Saint Martin (French part)" },
{ "codice": "666", "nome": "Saint Pierre and Miquelon" },
{ "codice": "670", "nome": "Saint Vincent and the Grenadines" },
{ "codice": "882", "nome": "Samoa" },
{ "codice": "674", "nome": "San Marino" },
{ "codice": "678", "nome": "Sao Tome and Principe" },
{ "codice": "682", "nome": "Saudi Arabia" },
{ "codice": "686", "nome": "Senegal" },
{ "codice": "688", "nome": "Serbia" },
{ "codice": "690", "nome": "Seychelles" },
{ "codice": "694", "nome": "Sierra Leone" },
{ "codice": "702", "nome": "Singapore" },
{ "codice": "534", "nome": "Sint Maarten (Dutch part)" },
{ "codice": "703", "nome": "Slovakia" },
{ "codice": "705", "nome": "Slovenia" },
{ "codice": "90", "nome": "Solomon Islands" },
{ "codice": "706", "nome": "Somalia" },
{ "codice": "710", "nome": "South Africa" },
{ "codice": "239", "nome": "South Georgia and the South Sandwich Islands" },
{ "codice": "728", "nome": "South Sudan" },
{ "codice": "724", "nome": "Spain" },
{ "codice": "144", "nome": "Sri Lanka" },
{ "codice": "729", "nome": "Sudan" },
{ "codice": "740", "nome": "Suriname" },
{ "codice": "744", "nome": "Svalbard and Jan Mayen" },
{ "codice": "748", "nome": "Swaziland" },
{ "codice": "752", "nome": "Sweden" },
{ "codice": "756", "nome": "Switzerland" },
{ "codice": "760", "nome": "Syrian Arab Republic" },
{ "codice": "158", "nome": "Taiwan, Province of China" },
{ "codice": "762", "nome": "Tajikistan" },
{ "codice": "834", "nome": "Tanzania, United Republic of" },
{ "codice": "764", "nome": "Thailand" },
{ "codice": "626", "nome": "Timor-Leste" },
{ "codice": "768", "nome": "Togo" },
{ "codice": "772", "nome": "Tokelau" },
{ "codice": "776", "nome": "Tonga" },
{ "codice": "780", "nome": "Trinidad and Tobago" },
{ "codice": "788", "nome": "Tunisia" },
{ "codice": "792", "nome": "Turkey" },
{ "codice": "795", "nome": "Turkmenistan" },
{ "codice": "796", "nome": "Turks and Caicos Islands" },
{ "codice": "798", "nome": "Tuvalu" },
{ "codice": "800", "nome": "Uganda" },
{ "codice": "804", "nome": "Ukraine" },
{ "codice": "784", "nome": "United Arab Emirates" },
{ "codice": "826", "nome": "United Kingdom" },
{ "codice": "840", "nome": "United States" },
{ "codice": "581", "nome": "United States Minor Outlying Islands" },
{ "codice": "858", "nome": "Uruguay" },
{ "codice": "860", "nome": "Uzbekistan" },
{ "codice": "548", "nome": "Vanuatu" },
{ "codice": "862", "nome": "Venezuela, Bolivarian Republic of" },
{ "codice": "704", "nome": "Viet Nam" },
{ "codice": "92", "nome": "Virgin Islands, British" },
{ "codice": "850", "nome": "Virgin Islands, U.S." },
{ "codice": "876", "nome": "Wallis and Futuna" },
{ "codice": "732", "nome": "Western Sahara" },
{ "codice": "887", "nome": "Yemen" },
{ "codice": "894", "nome": "Zambia" },
{ "codice": "716", "nome": "Zimbabwe" },
];


function returnCountry(countryId)
{
    for (var i = 0; i < nazioni.length; i++ )
    {
        if (nazioni[i].codice == countryId)
        {
            return nazioni[i].nome;
        }
    }
}

function returnRegion(regionId)
{ 
    return regioni[regionId];
}

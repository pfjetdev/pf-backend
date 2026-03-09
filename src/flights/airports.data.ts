// Auto-generated from airports CSV — 3110 cities, 3225 airports
// Run: node scripts/generate-airports.mjs

export interface Airport {
  code: string;
  name: string;
}

export interface City {
  code: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  airports: Airport[];
  keywords?: string[];
}

export const cities: City[] = [
  { code: "AUH", name: "Abu Dhabi", country: "United Arab Emirates", lat: 24.441, lng: 54.6492, airports: [
      { code: "AUH", name: "Zayed Intl" },
    ] },
  { code: "AAN", name: "Al Ain", country: "United Arab Emirates", lat: 24.2617, lng: 55.6092, airports: [
      { code: "AAN", name: "Al Ain Intl" },
    ] },
  { code: "DXB", name: "Dubai", country: "United Arab Emirates", lat: 25.2528, lng: 55.3644, airports: [
      { code: "DXB", name: "Dubai Intl" },
      { code: "DWC", name: "Al Maktoum Intl" },
    ], keywords: ["uae", "al maktoum", "jebel ali", "dxb", "dwc"] },
  { code: "FJR", name: "Fujairah", country: "United Arab Emirates", lat: 25.1084, lng: 56.3281, airports: [
      { code: "FJR", name: "Fujairah Intl" },
    ] },
  { code: "RKT", name: "Ras Al Khaimah", country: "United Arab Emirates", lat: 25.6135, lng: 55.9388, airports: [
      { code: "RKT", name: "Ras Al Khaimah Intl" },
    ] },
  { code: "SHJ", name: "Sharjah", country: "United Arab Emirates", lat: 25.3286, lng: 55.5172, airports: [
      { code: "SHJ", name: "Sharjah Intl" },
    ] },
  { code: "HEA", name: "Guzara", country: "Afghanistan", lat: 34.21, lng: 62.2283, airports: [
      { code: "HEA", name: "Herat - Khwaja Abdullah Ansari Intl" },
    ] },
  { code: "KBL", name: "Kabul", country: "Afghanistan", lat: 34.5659, lng: 69.2123, airports: [
      { code: "KBL", name: "Kabul Intl" },
    ] },
  { code: "KDH", name: "Khvoshab", country: "Afghanistan", lat: 31.5058, lng: 65.848, airports: [
      { code: "KDH", name: "Ahmad Shah Baba Intl Airport / Kandahar Airfield" },
    ] },
  { code: "MMZ", name: "Maymana", country: "Afghanistan", lat: 35.9308, lng: 64.7609, airports: [
      { code: "MMZ", name: "Maymana Zahiraddin Faryabi" },
    ] },
  { code: "MZR", name: "Mazar-i-Sharif", country: "Afghanistan", lat: 36.7041, lng: 67.2105, airports: [
      { code: "MZR", name: "Mazar-i-Sharif Intl" },
    ] },
  { code: "BBQ", name: "Codrington", country: "Antigua and Barbuda", lat: 17.6358, lng: -61.8286, airports: [
      { code: "BBQ", name: "Codrington" },
    ] },
  { code: "ANU", name: "Osbourn", country: "Antigua and Barbuda", lat: 17.1367, lng: -61.7927, airports: [
      { code: "ANU", name: "V. C. Bird Intl" },
    ] },
  { code: "AXA", name: "The Valley", country: "AI", lat: 18.2048, lng: -63.0538, airports: [
      { code: "AXA", name: "Clayton J. Lloyd Intl" },
    ] },
  { code: "TIA", name: "Rinas", country: "Albania", lat: 41.4147, lng: 19.7206, airports: [
      { code: "TIA", name: "Tirana Intl Airport Mother Teresa" },
    ] },
  { code: "LWN", name: "Gyumri", country: "Armenia", lat: 40.7504, lng: 43.8593, airports: [
      { code: "LWN", name: "Shirak Intl" },
    ] },
  { code: "EVN", name: "Yerevan", country: "Armenia", lat: 40.1489, lng: 44.3979, airports: [
      { code: "EVN", name: "Zvartnots Intl" },
    ] },
  { code: "CAB", name: "Cabinda", country: "Angola", lat: -5.5984, lng: 12.1881, airports: [
      { code: "CAB", name: "Cabinda" },
    ] },
  { code: "CBT", name: "Catumbela", country: "Angola", lat: -12.4792, lng: 13.4869, airports: [
      { code: "CBT", name: "Catumbela" },
    ] },
  { code: "DUE", name: "Chitato", country: "Angola", lat: -7.4009, lng: 20.8185, airports: [
      { code: "DUE", name: "Dundo" },
    ] },
  { code: "NOV", name: "Huambo", country: "Angola", lat: -12.8089, lng: 15.7605, airports: [
      { code: "NOV", name: "Albano Machado" },
    ] },
  { code: "LAD", name: "Luanda", country: "Angola", lat: -8.8584, lng: 13.2312, airports: [
      { code: "LAD", name: "Quatro de Fevereiro Intl" },
    ] },
  { code: "SDD", name: "Lubango", country: "Angola", lat: -14.9248, lng: 13.5767, airports: [
      { code: "SDD", name: "Lubango Mukanka Intl" },
    ] },
  { code: "MEG", name: "Malanje", country: "Angola", lat: -9.5251, lng: 16.3124, airports: [
      { code: "MEG", name: "Malanje" },
    ] },
  { code: "SSY", name: "Mbanza Congo", country: "Angola", lat: -6.2699, lng: 14.247, airports: [
      { code: "SSY", name: "Mbanza Congo" },
    ] },
  { code: "SPP", name: "Menongue", country: "Angola", lat: -14.6576, lng: 17.7198, airports: [
      { code: "SPP", name: "Menongue" },
    ] },
  { code: "MSZ", name: "Moçâmedes", country: "Angola", lat: -15.2612, lng: 12.1468, airports: [
      { code: "MSZ", name: "Welwitschia Mirabilis Intl" },
    ] },
  { code: "GXG", name: "Negage", country: "Angola", lat: -7.7545, lng: 15.2877, airports: [
      { code: "GXG", name: "Negage" },
    ] },
  { code: "VPE", name: "Ngiva", country: "Angola", lat: -17.0435, lng: 15.6838, airports: [
      { code: "VPE", name: "Ngjiva Pereira" },
    ] },
  { code: "SZA", name: "Soyo", country: "Angola", lat: -6.1411, lng: 12.3718, airports: [
      { code: "SZA", name: "Soyo" },
    ] },
  { code: "BHI", name: "Bahía Blanca", country: "Argentina", lat: -38.725, lng: -62.1693, airports: [
      { code: "BHI", name: "Comandante Espora" },
    ] },
  { code: "BUE", name: "Buenos Aires", country: "Argentina", lat: -34.8222, lng: -58.5358, airports: [
      { code: "EZE", name: "Ezeiza Intl Airport - Ministro Pistarini" },
      { code: "AEP", name: "Aeroparque Jorge Newbery" },
    ], keywords: ["ezeiza", "aeroparque", "argentina", "eze", "aep"] },
  { code: "CTC", name: "Catamarca", country: "Argentina", lat: -28.5931, lng: -65.7512, airports: [
      { code: "CTC", name: "Coronel Felipe Varela Intl" },
    ] },
  { code: "CPC", name: "Chapelco/San Martin de los Andes", country: "Argentina", lat: -40.0754, lng: -71.1373, airports: [
      { code: "CPC", name: "Aviador C. Campos" },
    ] },
  { code: "CRD", name: "Comodoro Rivadavia", country: "Argentina", lat: -45.7869, lng: -67.4634, airports: [
      { code: "CRD", name: "General Enrique Mosconi Intl" },
    ] },
  { code: "COR", name: "Cordoba", country: "Argentina", lat: -31.3123, lng: -64.2083, airports: [
      { code: "COR", name: "Ingeniero Aeronáutico Ambrosio L.V. Taravella Intl" },
    ] },
  { code: "CNQ", name: "Corrientes", country: "Argentina", lat: -27.4455, lng: -58.7619, airports: [
      { code: "CNQ", name: "Corrientes" },
    ] },
  { code: "FTE", name: "El Calafate", country: "Argentina", lat: -50.282, lng: -72.0539, airports: [
      { code: "FTE", name: "El Calafate - Commander Armando Tola Intl" },
    ] },
  { code: "EQS", name: "Esquel", country: "Argentina", lat: -42.908, lng: -71.1395, airports: [
      { code: "EQS", name: "Esquel Brigadier Antonio Parodi Intl" },
    ] },
  { code: "FMA", name: "Formosa", country: "Argentina", lat: -26.2127, lng: -58.2281, airports: [
      { code: "FMA", name: "Formosa National" },
    ] },
  { code: "IRJ", name: "La Rioja", country: "Argentina", lat: -29.3816, lng: -66.7958, airports: [
      { code: "IRJ", name: "Capitan V A Almonacid" },
    ] },
  { code: "LHS", name: "Las Heras", country: "Argentina", lat: -46.5385, lng: -68.9653, airports: [
      { code: "LHS", name: "Las Heras" },
    ] },
  { code: "MDQ", name: "Mar del Plata", country: "Argentina", lat: -37.9342, lng: -57.5733, airports: [
      { code: "MDQ", name: "Ástor Piazzola Intl" },
    ] },
  { code: "MDZ", name: "Mendoza", country: "Argentina", lat: -32.8317, lng: -68.7929, airports: [
      { code: "MDZ", name: "Governor Francisco Gabrielli Intl" },
    ] },
  { code: "NEC", name: "Necochea", country: "Argentina", lat: -38.4907, lng: -58.8163, airports: [
      { code: "NEC", name: "Necochea" },
    ] },
  { code: "NQN", name: "Neuquen", country: "Argentina", lat: -38.949, lng: -68.1557, airports: [
      { code: "NQN", name: "Presidente Peron" },
    ] },
  { code: "PRA", name: "Parana", country: "Argentina", lat: -31.7948, lng: -60.4804, airports: [
      { code: "PRA", name: "General Urquiza" },
    ] },
  { code: "PMQ", name: "Perito Moreno", country: "Argentina", lat: -46.5379, lng: -70.9787, airports: [
      { code: "PMQ", name: "Perito Moreno Jalil Hamer" },
    ] },
  { code: "PSS", name: "Posadas", country: "Argentina", lat: -27.3858, lng: -55.9707, airports: [
      { code: "PSS", name: "Libertador Gral D Jose De San Martin" },
    ] },
  { code: "PUD", name: "Puerto Deseado", country: "Argentina", lat: -47.7353, lng: -65.9041, airports: [
      { code: "PUD", name: "Puerto Deseado" },
    ] },
  { code: "IGR", name: "Puerto Iguazu", country: "Argentina", lat: -25.7373, lng: -54.4734, airports: [
      { code: "IGR", name: "Cataratas Del Iguazú Intl" },
    ] },
  { code: "PMY", name: "Puerto Madryn", country: "Argentina", lat: -42.7592, lng: -65.1027, airports: [
      { code: "PMY", name: "El Tehuelche" },
    ] },
  { code: "REL", name: "Rawson", country: "Argentina", lat: -43.2105, lng: -65.2703, airports: [
      { code: "REL", name: "Almirante Marco Andres Zar" },
    ] },
  { code: "RES", name: "Resistencia", country: "Argentina", lat: -27.45, lng: -59.0561, airports: [
      { code: "RES", name: "Resistencia Intl" },
    ] },
  { code: "RGL", name: "Rio Gallegos", country: "Argentina", lat: -51.6088, lng: -69.3089, airports: [
      { code: "RGL", name: "Piloto Civil Norberto Fernández Intl" },
    ] },
  { code: "RGA", name: "Rio Grande", country: "Argentina", lat: -53.7777, lng: -67.7494, airports: [
      { code: "RGA", name: "Hermes Quijada Intl" },
    ] },
  { code: "ROS", name: "Rosario", country: "Argentina", lat: -32.9036, lng: -60.785, airports: [
      { code: "ROS", name: "Rosario Islas Malvinas Intl" },
    ] },
  { code: "SLA", name: "Salta", country: "Argentina", lat: -24.856, lng: -65.4862, airports: [
      { code: "SLA", name: "Martin Miguel De Guemes Intl" },
    ] },
  { code: "BRC", name: "San Carlos de Bariloche", country: "Argentina", lat: -41.1512, lng: -71.1575, airports: [
      { code: "BRC", name: "Teniente Luis Candelaria Intl" },
    ] },
  { code: "UAQ", name: "San Juan", country: "Argentina", lat: -31.5715, lng: -68.4182, airports: [
      { code: "UAQ", name: "Domingo Faustino Sarmiento" },
    ] },
  { code: "LUQ", name: "San Luis", country: "Argentina", lat: -33.2732, lng: -66.3564, airports: [
      { code: "LUQ", name: "Brigadier Mayor D Cesar Raul Ojeda" },
    ] },
  { code: "TUC", name: "San Miguel de Tucumán", country: "Argentina", lat: -26.8409, lng: -65.1049, airports: [
      { code: "TUC", name: "Teniente Benjamin Matienzo" },
    ] },
  { code: "AFA", name: "San Rafael", country: "Argentina", lat: -34.5883, lng: -68.4039, airports: [
      { code: "AFA", name: "Suboficial Ay Santiago Germano" },
    ] },
  { code: "JUJ", name: "San Salvador de Jujuy", country: "Argentina", lat: -24.3928, lng: -65.0978, airports: [
      { code: "JUJ", name: "Gobernador Horacio Guzman Intl" },
    ] },
  { code: "SFN", name: "Santa Fe", country: "Argentina", lat: -31.7117, lng: -60.8117, airports: [
      { code: "SFN", name: "Sauce Viejo" },
    ] },
  { code: "RSA", name: "Santa Rosa", country: "Argentina", lat: -36.5883, lng: -64.2757, airports: [
      { code: "RSA", name: "Santa Rosa" },
    ] },
  { code: "SST", name: "Santa Teresita", country: "Argentina", lat: -36.5423, lng: -56.7218, airports: [
      { code: "SST", name: "Santa Teresita" },
    ] },
  { code: "SDE", name: "Santiago del Estero", country: "Argentina", lat: -27.7656, lng: -64.31, airports: [
      { code: "SDE", name: "Vicecomodoro Angel D. La Paz Aragonés" },
    ] },
  { code: "RHD", name: "Termas de Río Hondo", country: "Argentina", lat: -27.4966, lng: -64.9359, airports: [
      { code: "RHD", name: "Termas de Río Hondo Intl" },
    ] },
  { code: "USH", name: "Ushuaia", country: "Argentina", lat: -54.8433, lng: -68.2958, airports: [
      { code: "USH", name: "Ushuaia - Malvinas Argentinas Intl" },
    ] },
  { code: "VDM", name: "Viedma / Carmen de Patagones", country: "Argentina", lat: -40.8692, lng: -63.0004, airports: [
      { code: "VDM", name: "Gobernador Castello" },
    ] },
  { code: "PPG", name: "Pago Pago", country: "American Samoa", lat: -14.331, lng: -170.71, airports: [
      { code: "PPG", name: "Pago Pago Intl" },
    ] },
  { code: "GRZ", name: "Feldkirchen bei Graz", country: "Austria", lat: 46.9911, lng: 15.4396, airports: [
      { code: "GRZ", name: "Graz" },
    ] },
  { code: "INN", name: "Innsbruck", country: "Austria", lat: 47.2602, lng: 11.344, airports: [
      { code: "INN", name: "Innsbruck" },
    ] },
  { code: "KLU", name: "Klagenfurt am Wörthersee", country: "Austria", lat: 46.6425, lng: 14.3377, airports: [
      { code: "KLU", name: "Klagenfurt" },
    ] },
  { code: "LNZ", name: "Linz", country: "Austria", lat: 48.2354, lng: 14.1881, airports: [
      { code: "LNZ", name: "Linz-Hörsching" },
    ] },
  { code: "SZG", name: "Salzburg", country: "Austria", lat: 47.7933, lng: 13.0043, airports: [
      { code: "SZG", name: "Salzburg" },
    ] },
  { code: "VIE", name: "Vienna", country: "Austria", lat: 48.1103, lng: 16.5697, airports: [
      { code: "VIE", name: "Vienna Intl" },
    ] },
  { code: "ADL", name: "Adelaide", country: "Australia", lat: -34.9475, lng: 138.5334, airports: [
      { code: "ADL", name: "Adelaide Intl" },
    ] },
  { code: "ALH", name: "Albany", country: "Australia", lat: -34.9433, lng: 117.8089, airports: [
      { code: "ALH", name: "Albany" },
    ] },
  { code: "WOL", name: "Albion Park Rail", country: "Australia", lat: -34.5611, lng: 150.789, airports: [
      { code: "WOL", name: "Shellharbour" },
    ] },
  { code: "ASP", name: "Alice Springs", country: "Australia", lat: -23.8066, lng: 133.9034, airports: [
      { code: "ASP", name: "Alice Springs" },
    ] },
  { code: "ARM", name: "Armidale", country: "Australia", lat: -30.5281, lng: 151.617, airports: [
      { code: "ARM", name: "Armidale" },
    ] },
  { code: "BNK", name: "Ballina", country: "Australia", lat: -28.8332, lng: 153.5615, airports: [
      { code: "BNK", name: "Ballina Byron Gateway" },
    ] },
  { code: "BCI", name: "Barcaldine", country: "Australia", lat: -23.5663, lng: 145.3021, airports: [
      { code: "BCI", name: "Barcaldine" },
    ] },
  { code: "BHS", name: "Bathurst", country: "Australia", lat: -33.4068, lng: 149.6512, airports: [
      { code: "BHS", name: "Bathurst" },
    ] },
  { code: "BEU", name: "Bedourie", country: "Australia", lat: -24.3461, lng: 139.46, airports: [
      { code: "BEU", name: "Bedourie" },
    ] },
  { code: "THG", name: "Biloela", country: "Australia", lat: -24.4949, lng: 150.578, airports: [
      { code: "THG", name: "Thangool" },
    ] },
  { code: "BVI", name: "Birdsville", country: "Australia", lat: -25.8975, lng: 139.348, airports: [
      { code: "BVI", name: "Birdsville" },
    ] },
  { code: "BKQ", name: "Blackall", country: "Australia", lat: -24.4317, lng: 145.4297, airports: [
      { code: "BKQ", name: "Blackall" },
    ] },
  { code: "BQL", name: "Boulia", country: "Australia", lat: -22.9133, lng: 139.9, airports: [
      { code: "BQL", name: "Boulia" },
    ] },
  { code: "BRK", name: "Bourke", country: "Australia", lat: -30.0392, lng: 145.952, airports: [
      { code: "BRK", name: "Bourke" },
    ] },
  { code: "BNE", name: "Brisbane", country: "Australia", lat: -27.3842, lng: 153.117, airports: [
      { code: "BNE", name: "Brisbane Intl" },
    ] },
  { code: "KGI", name: "Broadwood", country: "Australia", lat: -30.7915, lng: 121.4646, airports: [
      { code: "KGI", name: "Kalgoorlie Boulder" },
    ] },
  { code: "BHQ", name: "Broken Hill", country: "Australia", lat: -32.0014, lng: 141.472, airports: [
      { code: "BHQ", name: "Broken Hill" },
    ] },
  { code: "BME", name: "Broome", country: "Australia", lat: -17.9492, lng: 122.2283, airports: [
      { code: "BME", name: "Broome Intl" },
    ] },
  { code: "BDB", name: "Bundaberg", country: "Australia", lat: -24.905, lng: 152.3226, airports: [
      { code: "BDB", name: "Bundaberg" },
    ] },
  { code: "BWT", name: "Burnie", country: "Australia", lat: -40.997, lng: 145.726, airports: [
      { code: "BWT", name: "Wynyard" },
    ] },
  { code: "CNS", name: "Cairns", country: "Australia", lat: -16.8789, lng: 145.7495, airports: [
      { code: "CNS", name: "Cairns Intl" },
    ] },
  { code: "CBR", name: "Canberra", country: "Australia", lat: -35.3069, lng: 149.195, airports: [
      { code: "CBR", name: "Canberra" },
    ] },
  { code: "CVQ", name: "Carnarvon", country: "Australia", lat: -24.8843, lng: 113.6664, airports: [
      { code: "CVQ", name: "Carnarvon" },
    ] },
  { code: "CED", name: "Ceduna", country: "Australia", lat: -32.1306, lng: 133.71, airports: [
      { code: "CED", name: "Ceduna" },
    ] },
  { code: "CTL", name: "Charleville", country: "Australia", lat: -26.4133, lng: 146.262, airports: [
      { code: "CTL", name: "Charleville" },
    ] },
  { code: "CNJ", name: "Cloncurry", country: "Australia", lat: -20.6686, lng: 140.504, airports: [
      { code: "CNJ", name: "Cloncurry" },
    ] },
  { code: "CAZ", name: "Cobar", country: "Australia", lat: -31.5383, lng: 145.794, airports: [
      { code: "CAZ", name: "Cobar" },
    ] },
  { code: "CUQ", name: "Coen", country: "Australia", lat: -13.7611, lng: 143.1133, airports: [
      { code: "CUQ", name: "Coen" },
    ] },
  { code: "CFS", name: "Coffs Harbour", country: "Australia", lat: -30.3206, lng: 153.116, airports: [
      { code: "CFS", name: "Coffs Harbour" },
    ] },
  { code: "CPD", name: "Coober Pedy", country: "Australia", lat: -29.0383, lng: 134.7222, airports: [
      { code: "CPD", name: "Coober Pedy" },
    ] },
  { code: "CTN", name: "Cooktown", country: "Australia", lat: -15.4436, lng: 145.1832, airports: [
      { code: "CTN", name: "Cooktown" },
    ] },
  { code: "OOM", name: "Cooma", country: "Australia", lat: -36.3004, lng: 148.9724, airports: [
      { code: "OOM", name: "Cooma Snowy Mountains" },
    ] },
  { code: "CNB", name: "Coonamble", country: "Australia", lat: -30.9809, lng: 148.3778, airports: [
      { code: "CNB", name: "Coonamble" },
    ] },
  { code: "CMA", name: "Cunnamulla", country: "Australia", lat: -28.03, lng: 145.622, airports: [
      { code: "CMA", name: "Cunnamulla" },
    ] },
  { code: "DRW", name: "Darwin", country: "Australia", lat: -12.415, lng: 130.8818, airports: [
      { code: "DRW", name: "Darwin Intl Airport / RAAF Darwin" },
    ] },
  { code: "MJK", name: "Denham", country: "Australia", lat: -25.8973, lng: 113.5758, airports: [
      { code: "MJK", name: "Shark Bay" },
    ] },
  { code: "DPO", name: "Devonport", country: "Australia", lat: -41.1697, lng: 146.43, airports: [
      { code: "DPO", name: "Devonport" },
    ] },
  { code: "DBO", name: "Dubbo", country: "Australia", lat: -32.2167, lng: 148.575, airports: [
      { code: "DBO", name: "Dubbo City Regional" },
    ] },
  { code: "ABX", name: "East Albury", country: "Australia", lat: -36.0668, lng: 146.9591, airports: [
      { code: "ABX", name: "Albury" },
    ] },
  { code: "ELC", name: "Elcho Island", country: "Australia", lat: -12.0194, lng: 135.571, airports: [
      { code: "ELC", name: "Elcho Island" },
    ] },
  { code: "EMD", name: "Emerald", country: "Australia", lat: -23.5675, lng: 148.179, airports: [
      { code: "EMD", name: "Emerald" },
    ] },
  { code: "EPR", name: "Esperance", country: "Australia", lat: -33.6844, lng: 121.823, airports: [
      { code: "EPR", name: "Esperance" },
    ] },
  { code: "MEB", name: "Essendon Fields", country: "Australia", lat: -37.7281, lng: 144.902, airports: [
      { code: "MEB", name: "Melbourne Essendon" },
    ] },
  { code: "LEA", name: "Exmouth", country: "Australia", lat: -22.2352, lng: 114.09, airports: [
      { code: "LEA", name: "Learmonth" },
    ] },
  { code: "FIZ", name: "Fitzroy Crossing", country: "Australia", lat: -18.1836, lng: 125.5598, airports: [
      { code: "FIZ", name: "Fitzroy Crossing" },
    ] },
  { code: "WGA", name: "Forest Hill", country: "Australia", lat: -35.1635, lng: 147.4683, airports: [
      { code: "WGA", name: "Wagga Wagga" },
    ] },
  { code: "AVV", name: "Geelong/Melbourne", country: "Australia", lat: -38.0403, lng: 144.4672, airports: [
      { code: "AVV", name: "Melbourne Avalon Intl" },
    ] },
  { code: "GLT", name: "Gladstone", country: "Australia", lat: -23.8698, lng: 151.2254, airports: [
      { code: "GLT", name: "Gladstone" },
    ] },
  { code: "OOL", name: "Gold Coast", country: "Australia", lat: -28.166, lng: 153.5066, airports: [
      { code: "OOL", name: "Gold Coast" },
    ] },
  { code: "GFF", name: "Griffith", country: "Australia", lat: -34.2508, lng: 146.067, airports: [
      { code: "GFF", name: "Griffith" },
    ] },
  { code: "GTE", name: "Groote Eylandt", country: "Australia", lat: -13.9724, lng: 136.4586, airports: [
      { code: "GTE", name: "Groote Eylandt" },
    ] },
  { code: "HTI", name: "Hamilton Island", country: "Australia", lat: -20.3581, lng: 148.952, airports: [
      { code: "HTI", name: "Hamilton Island" },
    ] },
  { code: "HVB", name: "Hervey Bay", country: "Australia", lat: -25.3201, lng: 152.8807, airports: [
      { code: "HVB", name: "Hervey Bay" },
    ] },
  { code: "HBA", name: "Hobart (Cambridge)", country: "Australia", lat: -42.837, lng: 147.513, airports: [
      { code: "HBA", name: "Hobart Intl" },
    ] },
  { code: "HID", name: "Horn", country: "Australia", lat: -10.5856, lng: 142.2928, airports: [
      { code: "HID", name: "Horn Island" },
    ] },
  { code: "KTA", name: "Karratha", country: "Australia", lat: -20.7122, lng: 116.773, airports: [
      { code: "KTA", name: "Karratha" },
    ] },
  { code: "KNS", name: "King Island", country: "Australia", lat: -39.8775, lng: 143.878, airports: [
      { code: "KNS", name: "King Island" },
    ] },
  { code: "KGC", name: "Kingscote", country: "Australia", lat: -35.7139, lng: 137.521, airports: [
      { code: "KGC", name: "Kingscote" },
    ] },
  { code: "KWM", name: "Kowanyama", country: "Australia", lat: -15.4854, lng: 141.7526, airports: [
      { code: "KWM", name: "Kowanyama" },
    ] },
  { code: "KNX", name: "Kununurra", country: "Australia", lat: -15.7781, lng: 128.708, airports: [
      { code: "KNX", name: "East Kimberley Regional (Kununurra)" },
    ] },
  { code: "LST", name: "Launceston (Western Junction)", country: "Australia", lat: -41.5449, lng: 147.2108, airports: [
      { code: "LST", name: "Launceston" },
    ] },
  { code: "LER", name: "Leinster", country: "Australia", lat: -27.8433, lng: 120.703, airports: [
      { code: "LER", name: "Leinster" },
    ] },
  { code: "LNO", name: "Leonora", country: "Australia", lat: -28.8781, lng: 121.315, airports: [
      { code: "LNO", name: "Leonora" },
    ] },
  { code: "LHG", name: "Lightning Ridge", country: "Australia", lat: -29.4529, lng: 147.9771, airports: [
      { code: "LHG", name: "Lightning Ridge" },
    ] },
  { code: "LSY", name: "Lismore", country: "Australia", lat: -28.8307, lng: 153.2584, airports: [
      { code: "LSY", name: "Lismore" },
    ] },
  { code: "IRG", name: "Lockhart River", country: "Australia", lat: -12.7869, lng: 143.305, airports: [
      { code: "IRG", name: "Lockhart River" },
    ] },
  { code: "LRE", name: "Longreach", country: "Australia", lat: -23.4342, lng: 144.28, airports: [
      { code: "LRE", name: "Longreach" },
    ] },
  { code: "MKY", name: "Mackay", country: "Australia", lat: -21.1708, lng: 149.1826, airports: [
      { code: "MKY", name: "Mackay" },
    ] },
  { code: "MNG", name: "Maningrida", country: "Australia", lat: -12.0561, lng: 134.234, airports: [
      { code: "MNG", name: "Maningrida" },
    ] },
  { code: "MCY", name: "Maroochydore", country: "Australia", lat: -26.5933, lng: 153.0832, airports: [
      { code: "MCY", name: "Sunshine Coast" },
    ] },
  { code: "MKR", name: "Meekatharra", country: "Australia", lat: -26.6117, lng: 118.548, airports: [
      { code: "MKR", name: "Meekatharra" },
    ] },
  { code: "MEL", name: "Melbourne", country: "Australia", lat: -37.6707, lng: 144.8379, airports: [
      { code: "MEL", name: "Melbourne" },
      { code: "MBW", name: "Melbourne Moorabbin" },
    ], keywords: ["tullamarine", "avalon", "australia", "mel"] },
  { code: "MIM", name: "Merimbula", country: "Australia", lat: -36.9086, lng: 149.901, airports: [
      { code: "MIM", name: "Merimbula" },
    ] },
  { code: "MQL", name: "Mildura", country: "Australia", lat: -34.2292, lng: 142.086, airports: [
      { code: "MQL", name: "Mildura" },
    ] },
  { code: "SNB", name: "Milikapiti", country: "Australia", lat: -11.4177, lng: 130.6485, airports: [
      { code: "SNB", name: "Snake Bay" },
    ] },
  { code: "GET", name: "Moonyoonooka", country: "Australia", lat: -28.7961, lng: 114.707, airports: [
      { code: "GET", name: "Geraldton" },
    ] },
  { code: "MOV", name: "Moranbah", country: "Australia", lat: -22.0578, lng: 148.077, airports: [
      { code: "MOV", name: "Moranbah" },
    ] },
  { code: "MRZ", name: "Moree", country: "Australia", lat: -29.4989, lng: 149.845, airports: [
      { code: "MRZ", name: "Moree" },
    ] },
  { code: "MYA", name: "Moruya", country: "Australia", lat: -35.8978, lng: 150.144, airports: [
      { code: "MYA", name: "Moruya" },
    ] },
  { code: "MGB", name: "Mount Gambier", country: "Australia", lat: -37.7444, lng: 140.7806, airports: [
      { code: "MGB", name: "Mount Gambier" },
    ] },
  { code: "MHU", name: "Mount Hotham", country: "Australia", lat: -37.0475, lng: 147.334, airports: [
      { code: "MHU", name: "Mount Hotham" },
    ] },
  { code: "ISA", name: "Mount Isa", country: "Australia", lat: -20.6664, lng: 139.4885, airports: [
      { code: "ISA", name: "Mount Isa" },
    ] },
  { code: "MMG", name: "Mount Magnet", country: "Australia", lat: -28.1161, lng: 117.842, airports: [
      { code: "MMG", name: "Mount Magnet" },
    ] },
  { code: "NAA", name: "Narrabri", country: "Australia", lat: -30.3192, lng: 149.827, airports: [
      { code: "NAA", name: "Narrabri" },
    ] },
  { code: "NRA", name: "Narrandera", country: "Australia", lat: -34.7022, lng: 146.512, airports: [
      { code: "NRA", name: "Narrandera" },
    ] },
  { code: "ZNE", name: "Newman", country: "Australia", lat: -23.4178, lng: 119.803, airports: [
      { code: "ZNE", name: "Newman" },
    ] },
  { code: "GOV", name: "Nhulunbuy", country: "Australia", lat: -12.2694, lng: 136.818, airports: [
      { code: "GOV", name: "Gove" },
    ] },
  { code: "NTN", name: "Normanton", country: "Australia", lat: -17.6841, lng: 141.0697, airports: [
      { code: "NTN", name: "Normanton" },
    ] },
  { code: "OKY", name: "Oakey Army Aviation Centre", country: "Australia", lat: -27.4093, lng: 151.7367, airports: [
      { code: "OKY", name: "Oakey Army Aviation Centre" },
    ] },
  { code: "PBO", name: "Paraburdoo", country: "Australia", lat: -23.1711, lng: 117.745, airports: [
      { code: "PBO", name: "Paraburdoo" },
    ] },
  { code: "PKE", name: "Parkes", country: "Australia", lat: -33.1314, lng: 148.239, airports: [
      { code: "PKE", name: "Parkes" },
    ] },
  { code: "PER", name: "Perth", country: "Australia", lat: -31.9403, lng: 115.967, airports: [
      { code: "PER", name: "Perth Intl" },
    ] },
  { code: "PUG", name: "Port Augusta", country: "Australia", lat: -32.5069, lng: 137.717, airports: [
      { code: "PUG", name: "Port Augusta" },
    ] },
  { code: "PHE", name: "Port Hedland", country: "Australia", lat: -20.3828, lng: 118.6298, airports: [
      { code: "PHE", name: "Port Hedland Intl" },
    ] },
  { code: "PLO", name: "Port Lincoln", country: "Australia", lat: -34.6053, lng: 135.88, airports: [
      { code: "PLO", name: "Port Lincoln" },
    ] },
  { code: "PQQ", name: "Port Macquarie", country: "Australia", lat: -31.4358, lng: 152.863, airports: [
      { code: "PQQ", name: "Port Macquarie" },
    ] },
  { code: "PTJ", name: "Portland", country: "Australia", lat: -38.3181, lng: 141.471, airports: [
      { code: "PTJ", name: "Portland" },
    ] },
  { code: "PPP", name: "Proserpine", country: "Australia", lat: -20.4944, lng: 148.5536, airports: [
      { code: "PPP", name: "Proserpine Whitsunday Coast" },
    ] },
  { code: "ULP", name: "Quilpie", country: "Australia", lat: -26.6092, lng: 144.2537, airports: [
      { code: "ULP", name: "Quilpie" },
    ] },
  { code: "ROK", name: "Rockhampton", country: "Australia", lat: -23.38, lng: 150.4754, airports: [
      { code: "ROK", name: "Rockhampton" },
    ] },
  { code: "RMA", name: "Roma", country: "Australia", lat: -26.545, lng: 148.775, airports: [
      { code: "RMA", name: "Roma" },
    ] },
  { code: "SYD", name: "Sydney", country: "Australia", lat: -33.9461, lng: 151.177, airports: [
      { code: "SYD", name: "Sydney Kingsford Smith Intl" },
    ], keywords: ["kingsford smith", "australia", "syd"] },
  { code: "TMW", name: "Tamworth", country: "Australia", lat: -31.0779, lng: 150.8455, airports: [
      { code: "TMW", name: "Tamworth" },
    ] },
  { code: "TCA", name: "Tennant Creek", country: "Australia", lat: -19.6344, lng: 134.183, airports: [
      { code: "TCA", name: "Tennant Creek" },
    ] },
  { code: "XTG", name: "Thargomindah", country: "Australia", lat: -27.9864, lng: 143.8121, airports: [
      { code: "XTG", name: "Thargomindah" },
    ] },
  { code: "WTB", name: "Toowoomba", country: "Australia", lat: -27.5583, lng: 151.7933, airports: [
      { code: "WTB", name: "Toowoomba Wellcamp" },
    ] },
  { code: "TSV", name: "Townsville", country: "Australia", lat: -19.2529, lng: 146.7665, airports: [
      { code: "TSV", name: "Townsville Airport / RAAF Base Townsville" },
    ] },
  { code: "WGE", name: "Walgett", country: "Australia", lat: -30.0328, lng: 148.126, airports: [
      { code: "WGE", name: "Walgett" },
    ] },
  { code: "WEI", name: "Weipa", country: "Australia", lat: -12.6775, lng: 141.9226, airports: [
      { code: "WEI", name: "Weipa" },
    ] },
  { code: "WYA", name: "Whyalla", country: "Australia", lat: -33.0589, lng: 137.514, airports: [
      { code: "WYA", name: "Whyalla" },
    ] },
  { code: "NTL", name: "Williamtown", country: "Australia", lat: -32.7961, lng: 151.835, airports: [
      { code: "NTL", name: "Newcastle" },
    ] },
  { code: "WUN", name: "Wiluna", country: "Australia", lat: -26.6292, lng: 120.221, airports: [
      { code: "WUN", name: "Wiluna" },
    ] },
  { code: "WNR", name: "Windorah", country: "Australia", lat: -25.4106, lng: 142.6684, airports: [
      { code: "WNR", name: "Windorah" },
    ] },
  { code: "WIN", name: "Winton", country: "Australia", lat: -22.3636, lng: 143.086, airports: [
      { code: "WIN", name: "Winton" },
    ] },
  { code: "AYQ", name: "Yulara", country: "Australia", lat: -25.1859, lng: 130.977, airports: [
      { code: "AYQ", name: "Ayers Rock Connellan" },
    ] },
  { code: "AUA", name: "Oranjestad", country: "Aruba", lat: 12.5011, lng: -70.0143, airports: [
      { code: "AUA", name: "Queen Beatrix Intl" },
    ] },
  { code: "GYD", name: "Baku", country: "Azerbaijan", lat: 40.4675, lng: 50.0467, airports: [
      { code: "GYD", name: "Heydar Aliyev Intl" },
    ] },
  { code: "GBB", name: "Gabala", country: "Azerbaijan", lat: 40.8086, lng: 47.7254, airports: [
      { code: "GBB", name: "Gabala Intl" },
    ] },
  { code: "GNJ", name: "Ganja", country: "Azerbaijan", lat: 40.7387, lng: 46.3204, airports: [
      { code: "GNJ", name: "Ganja Intl" },
    ] },
  { code: "NAJ", name: "Nakhchivan", country: "Azerbaijan", lat: 39.1888, lng: 45.4584, airports: [
      { code: "NAJ", name: "Nakhchivan" },
    ] },
  { code: "TZL", name: "Dubrave Gornje", country: "Bosnia and Herzegovina", lat: 44.4599, lng: 18.7236, airports: [
      { code: "TZL", name: "Tuzla Intl" },
    ] },
  { code: "BNX", name: "Mahovljani", country: "Bosnia and Herzegovina", lat: 44.9414, lng: 17.2975, airports: [
      { code: "BNX", name: "Banja Luka Intl" },
    ] },
  { code: "OMO", name: "Mostar", country: "Bosnia and Herzegovina", lat: 43.2825, lng: 17.8461, airports: [
      { code: "OMO", name: "Mostar Intl" },
    ] },
  { code: "SJJ", name: "Sarajevo", country: "Bosnia and Herzegovina", lat: 43.8246, lng: 18.3315, airports: [
      { code: "SJJ", name: "Sarajevo Intl" },
    ] },
  { code: "BGI", name: "Bridgetown", country: "Barbados", lat: 13.0747, lng: -59.491, airports: [
      { code: "BGI", name: "Grantley Adams Intl" },
    ] },
  { code: "BZL", name: "Barisal", country: "Bangladesh", lat: 22.801, lng: 90.3012, airports: [
      { code: "BZL", name: "Barisal" },
    ] },
  { code: "CGP", name: "Chattogram (Chittagong)", country: "Bangladesh", lat: 22.2496, lng: 91.8133, airports: [
      { code: "CGP", name: "Shah Amanat Intl" },
    ] },
  { code: "CXB", name: "Cox's Bazar", country: "Bangladesh", lat: 21.4575, lng: 91.9633, airports: [
      { code: "CXB", name: "Cox's Bazar" },
    ] },
  { code: "DAC", name: "Dhaka", country: "Bangladesh", lat: 23.8433, lng: 90.3978, airports: [
      { code: "DAC", name: "Hazrat Shahjalal Intl" },
    ] },
  { code: "JSR", name: "Jashore (Jessore)", country: "Bangladesh", lat: 23.1838, lng: 89.1608, airports: [
      { code: "JSR", name: "Jessore" },
    ] },
  { code: "RJH", name: "Rajshahi", country: "Bangladesh", lat: 24.4372, lng: 88.6165, airports: [
      { code: "RJH", name: "Shah Makhdum" },
    ] },
  { code: "SPD", name: "Saidpur", country: "Bangladesh", lat: 25.7592, lng: 88.9089, airports: [
      { code: "SPD", name: "Saidpur" },
    ] },
  { code: "ZYL", name: "Sylhet", country: "Bangladesh", lat: 24.9631, lng: 91.8669, airports: [
      { code: "ZYL", name: "Osmany Intl" },
    ] },
  { code: "ANR", name: "Antwerp", country: "Belgium", lat: 51.1907, lng: 4.4632, airports: [
      { code: "ANR", name: "Antwerp Intl Airport (Deurne)" },
    ] },
  { code: "BRU", name: "Brussels", country: "Belgium", lat: 50.9014, lng: 4.4844, airports: [
      { code: "BRU", name: "Brussels" },
      { code: "CRL", name: "Brussels South Charleroi" },
    ], keywords: ["belgium", "bruxelles", "brussel", "bru", "crl"] },
  { code: "LGG", name: "Grâce-Hollogne", country: "Belgium", lat: 50.6386, lng: 5.4439, airports: [
      { code: "LGG", name: "Liège" },
    ] },
  { code: "OST", name: "Oostende", country: "Belgium", lat: 51.1998, lng: 2.8747, airports: [
      { code: "OST", name: "Ostend-Bruges Intl" },
    ] },
  { code: "BOY", name: "Bobo Dioulasso", country: "Burkina Faso", lat: 11.1601, lng: -4.331, airports: [
      { code: "BOY", name: "Bobo Dioulasso" },
    ] },
  { code: "OUA", name: "Ouagadougou", country: "Burkina Faso", lat: 12.3532, lng: -1.5124, airports: [
      { code: "OUA", name: "Ouagadougou Thomas Sankara Intl" },
    ] },
  { code: "BOJ", name: "Burgas", country: "Bulgaria", lat: 42.5699, lng: 27.5152, airports: [
      { code: "BOJ", name: "Burgas" },
    ] },
  { code: "PDV", name: "Plovdiv", country: "Bulgaria", lat: 42.0678, lng: 24.8508, airports: [
      { code: "PDV", name: "Plovdiv Intl" },
    ] },
  { code: "SOF", name: "Sofia", country: "Bulgaria", lat: 42.6964, lng: 23.4177, airports: [
      { code: "SOF", name: "Sofia" },
    ] },
  { code: "VAR", name: "Varna", country: "Bulgaria", lat: 43.2321, lng: 27.8251, airports: [
      { code: "VAR", name: "Varna" },
    ] },
  { code: "BAH", name: "Manama", country: "Bahrain", lat: 26.2673, lng: 50.6376, airports: [
      { code: "BAH", name: "Bahrain Intl" },
    ] },
  { code: "BJM", name: "Bujumbura", country: "Burundi", lat: -3.324, lng: 29.3185, airports: [
      { code: "BJM", name: "Bujumbura Melchior Ndadaye Intl" },
    ] },
  { code: "GID", name: "Gitega", country: "Burundi", lat: -3.4172, lng: 29.9113, airports: [
      { code: "GID", name: "Gitega" },
    ] },
  { code: "COO", name: "Cotonou", country: "Benin", lat: 6.3572, lng: 2.3844, airports: [
      { code: "COO", name: "Cotonou Cadjehoun Intl" },
    ] },
  { code: "SBH", name: "Gustavia", country: "BL", lat: 17.9044, lng: -62.8433, airports: [
      { code: "SBH", name: "St. Jean" },
    ] },
  { code: "BDA", name: "Hamilton", country: "Bermuda", lat: 32.3638, lng: -64.6782, airports: [
      { code: "BDA", name: "L.F. Wade Intl" },
    ] },
  { code: "BWN", name: "Bandar Seri Begawan", country: "Brunei", lat: 4.9442, lng: 114.928, airports: [
      { code: "BWN", name: "Brunei Intl" },
    ] },
  { code: "CIJ", name: "Cobija", country: "Bolivia", lat: -11.0391, lng: -68.7828, airports: [
      { code: "CIJ", name: "Capitán Aníbal Arab" },
    ] },
  { code: "CBB", name: "Cochabamba", country: "Bolivia", lat: -17.4211, lng: -66.1771, airports: [
      { code: "CBB", name: "Jorge Wilsterman Intl" },
    ] },
  { code: "GYA", name: "Guayaramerín", country: "Bolivia", lat: -10.8886, lng: -65.381, airports: [
      { code: "GYA", name: "Guayaramerín" },
    ] },
  { code: "LPB", name: "La Paz / El Alto", country: "Bolivia", lat: -16.5103, lng: -68.1894, airports: [
      { code: "LPB", name: "El Alto Intl" },
    ] },
  { code: "PSZ", name: "Puerto Suárez", country: "Bolivia", lat: -18.9753, lng: -57.8206, airports: [
      { code: "PSZ", name: "Capitán Av. Salvador Ogaya G." },
    ] },
  { code: "RIB", name: "Riberalta", country: "Bolivia", lat: -11.0094, lng: -66.0755, airports: [
      { code: "RIB", name: "Capitán Av. Selin Zeitun Lopez" },
    ] },
  { code: "VVI", name: "Santa Cruz", country: "Bolivia", lat: -17.8116, lng: -63.1715, airports: [
      { code: "VVI", name: "Viru Viru Intl" },
      { code: "SRZ", name: "El Trompillo" },
    ] },
  { code: "SRE", name: "Sucre", country: "Bolivia", lat: -19.2468, lng: -65.1496, airports: [
      { code: "SRE", name: "Alcantarí Intl" },
    ] },
  { code: "TJA", name: "Tarija", country: "Bolivia", lat: -21.5557, lng: -64.7013, airports: [
      { code: "TJA", name: "Capitan Oriel Lea Plaza" },
    ] },
  { code: "TDD", name: "Trinidad", country: "Bolivia", lat: -14.8187, lng: -64.918, airports: [
      { code: "TDD", name: "Teniente Av. Jorge Henrich Arauz" },
    ] },
  { code: "BON", name: "Kralendijk", country: "BQ", lat: 12.131, lng: -68.2685, airports: [
      { code: "BON", name: "Flamingo Intl" },
    ] },
  { code: "EUX", name: "Oranjestad", country: "BQ", lat: 17.4965, lng: -62.9794, airports: [
      { code: "EUX", name: "F. D. Roosevelt" },
    ] },
  { code: "SAB", name: "Zion's Hill", country: "BQ", lat: 17.6453, lng: -63.2205, airports: [
      { code: "SAB", name: "Juancho E. Yrausquin" },
    ] },
  { code: "AFL", name: "Alta Floresta", country: "Brazil", lat: -9.8664, lng: -56.1063, airports: [
      { code: "AFL", name: "Piloto Osvaldo Marques Dias" },
    ] },
  { code: "ATM", name: "Altamira", country: "Brazil", lat: -3.2531, lng: -52.2539, airports: [
      { code: "ATM", name: "Altamira Interstate" },
    ] },
  { code: "AJU", name: "Aracaju", country: "Brazil", lat: -10.9841, lng: -37.0718, airports: [
      { code: "AJU", name: "Aracaju - Santa Maria Intl" },
    ] },
  { code: "ARU", name: "Araçatuba", country: "Brazil", lat: -21.1415, lng: -50.4246, airports: [
      { code: "ARU", name: "Araçatuba" },
    ] },
  { code: "AUX", name: "Araguaína", country: "Brazil", lat: -7.2279, lng: -48.2405, airports: [
      { code: "AUX", name: "Araguaína" },
    ] },
  { code: "AQA", name: "Araraquara", country: "Brazil", lat: -21.812, lng: -48.133, airports: [
      { code: "AQA", name: "Araraquara" },
    ] },
  { code: "AAX", name: "Araxá", country: "Brazil", lat: -19.5632, lng: -46.9604, airports: [
      { code: "AAX", name: "Romeu Zema" },
    ] },
  { code: "JTC", name: "Bauru", country: "Brazil", lat: -22.1608, lng: -49.0703, airports: [
      { code: "JTC", name: "Bauru/Arealva–Moussa Nakhal Tobias State" },
    ] },
  { code: "BEL", name: "Belém", country: "Brazil", lat: -1.3793, lng: -48.4762, airports: [
      { code: "BEL", name: "Val de Cans/Júlio Cezar Ribeiro Intl" },
    ] },
  { code: "CNF", name: "Belo Horizonte", country: "Brazil", lat: -19.6357, lng: -43.9669, airports: [
      { code: "CNF", name: "Tancredo Neves Intl" },
    ] },
  { code: "BVB", name: "Boa Vista", country: "Brazil", lat: 2.8459, lng: -60.6909, airports: [
      { code: "BVB", name: "Atlas Brasil Cantanhede" },
    ] },
  { code: "BSB", name: "Brasília", country: "Brazil", lat: -15.8692, lng: -47.9208, airports: [
      { code: "BSB", name: "Presidente Juscelino Kubitschek Intl" },
    ] },
  { code: "CPV", name: "Campina Grande", country: "Brazil", lat: -7.2697, lng: -35.8961, airports: [
      { code: "CPV", name: "Presidente João Suassuna" },
    ] },
  { code: "CGR", name: "Campo Grande", country: "Brazil", lat: -20.47, lng: -54.674, airports: [
      { code: "CGR", name: "Campo Grande" },
    ] },
  { code: "CAW", name: "Campos dos Goytacazes", country: "Brazil", lat: -21.6983, lng: -41.3017, airports: [
      { code: "CAW", name: "Bartolomeu Lisandro" },
    ] },
  { code: "CAC", name: "Cascavel", country: "Brazil", lat: -25.0003, lng: -53.5012, airports: [
      { code: "CAC", name: "Coronel Adalberto Mendes da Silva" },
    ] },
  { code: "CXJ", name: "Caxias Do Sul", country: "Brazil", lat: -29.1972, lng: -51.1876, airports: [
      { code: "CXJ", name: "Hugo Cantergiani Regional" },
    ] },
  { code: "XAP", name: "Chapecó", country: "Brazil", lat: -27.1342, lng: -52.6566, airports: [
      { code: "XAP", name: "Serafin Enoss Bertaso" },
    ] },
  { code: "CMG", name: "Corumbá", country: "Brazil", lat: -19.0119, lng: -57.6728, airports: [
      { code: "CMG", name: "Corumbá Intl" },
    ] },
  { code: "CCM", name: "Criciúma", country: "Brazil", lat: -28.7257, lng: -49.4245, airports: [
      { code: "CCM", name: "Forquilhinha - Criciúma " },
    ] },
  { code: "JJD", name: "Cruz", country: "Brazil", lat: -2.9064, lng: -40.3573, airports: [
      { code: "JJD", name: "Comandante Ariston Pessoa" },
    ] },
  { code: "CZS", name: "Cruzeiro Do Sul", country: "Brazil", lat: -7.5999, lng: -72.7695, airports: [
      { code: "CZS", name: "Cruzeiro do Sul" },
    ] },
  { code: "CGB", name: "Cuiabá", country: "Brazil", lat: -15.6529, lng: -56.1167, airports: [
      { code: "CGB", name: "Marechal Rondon" },
    ] },
  { code: "CWB", name: "Curitiba", country: "Brazil", lat: -25.5285, lng: -49.1758, airports: [
      { code: "CWB", name: "Curitiba-Afonso Pena Intl" },
    ] },
  { code: "FEC", name: "Feira de Santana", country: "Brazil", lat: -12.2007, lng: -38.9062, airports: [
      { code: "FEC", name: "João Durval Carneiro" },
    ] },
  { code: "FEN", name: "Fernando de Noronha", country: "Brazil", lat: -3.8545, lng: -32.423, airports: [
      { code: "FEN", name: "Fernando de Noronha" },
    ] },
  { code: "FLN", name: "Florianópolis", country: "Brazil", lat: -27.6703, lng: -48.5525, airports: [
      { code: "FLN", name: "Hercílio Luz Intl" },
    ] },
  { code: "FOR", name: "Fortaleza", country: "Brazil", lat: -3.7758, lng: -38.5322, airports: [
      { code: "FOR", name: "Pinto Martins Intl" },
    ] },
  { code: "IGU", name: "Foz do Iguaçu", country: "Brazil", lat: -25.5942, lng: -54.4894, airports: [
      { code: "IGU", name: "Cataratas Intl" },
    ] },
  { code: "GYN", name: "Goiânia", country: "Brazil", lat: -16.632, lng: -49.2207, airports: [
      { code: "GYN", name: "Santa Genoveva Intl" },
    ] },
  { code: "GVR", name: "Governador Valadares", country: "Brazil", lat: -18.8959, lng: -41.9829, airports: [
      { code: "GVR", name: "Coronel Altino Machado" },
    ] },
  { code: "IOS", name: "Ilhéus", country: "Brazil", lat: -14.8159, lng: -39.0335, airports: [
      { code: "IOS", name: "Bahia - Jorge Amado" },
    ] },
  { code: "IMP", name: "Imperatriz", country: "Brazil", lat: -5.5313, lng: -47.46, airports: [
      { code: "IMP", name: "Prefeito Renato Moreira" },
    ] },
  { code: "IPN", name: "Ipatinga", country: "Brazil", lat: -19.4707, lng: -42.4876, airports: [
      { code: "IPN", name: "Usiminas" },
    ] },
  { code: "ITB", name: "Itaituba", country: "Brazil", lat: -4.2421, lng: -56.0007, airports: [
      { code: "ITB", name: "Itaituba" },
    ] },
  { code: "JPA", name: "João Pessoa", country: "Brazil", lat: -7.1487, lng: -34.9506, airports: [
      { code: "JPA", name: "Presidente Castro Pinto Intl" },
    ] },
  { code: "JOI", name: "Joinville", country: "Brazil", lat: -26.2245, lng: -48.7974, airports: [
      { code: "JOI", name: "Lauro Carneiro de Loyola" },
    ] },
  { code: "JDF", name: "Juiz de Fora", country: "Brazil", lat: -21.7915, lng: -43.3861, airports: [
      { code: "JDF", name: "Francisco de Assis" },
      { code: "IZA", name: "Presidente Itamar Franco" },
    ] },
  { code: "LAJ", name: "Lages", country: "Brazil", lat: -27.7821, lng: -50.2815, airports: [
      { code: "LAJ", name: "Lages" },
    ] },
  { code: "LDB", name: "Londrina", country: "Brazil", lat: -23.3344, lng: -51.1284, airports: [
      { code: "LDB", name: "Governor José Richa" },
    ] },
  { code: "MCP", name: "Macapá", country: "Brazil", lat: 0.0507, lng: -51.0722, airports: [
      { code: "MCP", name: "Macapá - Alberto Alcolumbre Intl" },
    ] },
  { code: "MCZ", name: "Maceió", country: "Brazil", lat: -9.5126, lng: -35.7918, airports: [
      { code: "MCZ", name: "Zumbi dos Palmares Intl" },
    ] },
  { code: "MAO", name: "Manaus", country: "Brazil", lat: -3.0386, lng: -60.0497, airports: [
      { code: "MAO", name: "Eduardo Gomes Intl" },
    ] },
  { code: "MNX", name: "Manicoré", country: "Brazil", lat: -5.8114, lng: -61.2783, airports: [
      { code: "MNX", name: "Manicoré" },
    ] },
  { code: "MAB", name: "Marabá", country: "Brazil", lat: -5.3686, lng: -49.138, airports: [
      { code: "MAB", name: "João Correa da Rocha" },
    ] },
  { code: "MII", name: "Marília", country: "Brazil", lat: -22.1969, lng: -49.9265, airports: [
      { code: "MII", name: "Frank Miloye Milenkowichi–Marília State" },
    ] },
  { code: "MGF", name: "Maringá", country: "Brazil", lat: -23.4761, lng: -52.0162, airports: [
      { code: "MGF", name: "Regional de Maringá - Sílvio Name Júnior" },
    ] },
  { code: "MOC", name: "Montes Claros", country: "Brazil", lat: -16.7069, lng: -43.8189, airports: [
      { code: "MOC", name: "Mário Ribeiro" },
    ] },
  { code: "MVF", name: "Mossoró", country: "Brazil", lat: -5.2019, lng: -37.3643, airports: [
      { code: "MVF", name: "Dix-Sept Rosado" },
    ] },
  { code: "NAT", name: "Natal", country: "Brazil", lat: -5.7685, lng: -35.3664, airports: [
      { code: "NAT", name: "Rio Grande do Norte/São Gonçalo do Amarante–Governador Aluízio Alves Intl" },
    ] },
  { code: "NVT", name: "Navegantes", country: "Brazil", lat: -26.8794, lng: -48.651, airports: [
      { code: "NVT", name: "Ministro Victor Konder Intl" },
    ] },
  { code: "TMT", name: "Oriximiná", country: "Brazil", lat: -1.4896, lng: -56.3968, airports: [
      { code: "TMT", name: "Trombetas" },
    ] },
  { code: "PMW", name: "Palmas", country: "Brazil", lat: -10.2915, lng: -48.357, airports: [
      { code: "PMW", name: "Brigadeiro Lysias Rodrigues" },
    ] },
  { code: "CKS", name: "Parauapebas", country: "Brazil", lat: -6.1178, lng: -50.0034, airports: [
      { code: "CKS", name: "Carajás" },
    ] },
  { code: "PHB", name: "Parnaíba", country: "Brazil", lat: -2.8937, lng: -41.732, airports: [
      { code: "PHB", name: "Parnaíba - Prefeito Doutor João Silva Filho Intl" },
    ] },
  { code: "PFB", name: "Passo Fundo", country: "Brazil", lat: -28.244, lng: -52.3278, airports: [
      { code: "PFB", name: "Lauro Kurtz" },
    ] },
  { code: "PAV", name: "Paulo Afonso", country: "Brazil", lat: -9.4009, lng: -38.2506, airports: [
      { code: "PAV", name: "Paulo Afonso" },
    ] },
  { code: "PET", name: "Pelotas", country: "Brazil", lat: -31.7173, lng: -52.328, airports: [
      { code: "PET", name: "João Simões Lopes Neto Intl" },
    ] },
  { code: "PNZ", name: "Petrolina", country: "Brazil", lat: -9.3624, lng: -40.5691, airports: [
      { code: "PNZ", name: "Senador Nilo Coelho" },
    ] },
  { code: "PGZ", name: "Ponta Grossa", country: "Brazil", lat: -25.1845, lng: -50.1438, airports: [
      { code: "PGZ", name: "Ponta Grossa Airport - Comandante Antonio Amilton Beraldo" },
    ] },
  { code: "PMG", name: "Ponta Porã", country: "Brazil", lat: -22.5496, lng: -55.7026, airports: [
      { code: "PMG", name: "Ponta Porã" },
    ] },
  { code: "POA", name: "Porto Alegre", country: "Brazil", lat: -29.994, lng: -51.1675, airports: [
      { code: "POA", name: "Porto Alegre-Salgado Filho Intl" },
    ] },
  { code: "BPS", name: "Porto Seguro", country: "Brazil", lat: -16.4384, lng: -39.0806, airports: [
      { code: "BPS", name: "Porto Seguro" },
    ] },
  { code: "PVH", name: "Porto Velho", country: "Brazil", lat: -8.7079, lng: -63.9024, airports: [
      { code: "PVH", name: "Governador Jorge Teixeira de Oliveira" },
    ] },
  { code: "PPB", name: "Presidente Prudente", country: "Brazil", lat: -22.1751, lng: -51.4246, airports: [
      { code: "PPB", name: "Presidente Prudente" },
    ] },
  { code: "REC", name: "Recife", country: "Brazil", lat: -8.1275, lng: -34.923, airports: [
      { code: "REC", name: "Recife/Guararapes - Gilberto Freyre Intl" },
    ] },
  { code: "RAO", name: "Ribeirão Preto", country: "Brazil", lat: -21.1343, lng: -47.7741, airports: [
      { code: "RAO", name: "Leite Lopes" },
    ] },
  { code: "RBR", name: "Rio Branco", country: "Brazil", lat: -9.869, lng: -67.894, airports: [
      { code: "RBR", name: "Rio Branco-Plácido de Castro Intl" },
    ] },
  { code: "RIO", name: "Rio de Janeiro", country: "Brazil", lat: -22.81, lng: -43.2506, airports: [
      { code: "GIG", name: "Rio Galeão – Tom Jobim Intl" },
      { code: "SDU", name: "Santos Dumont" },
    ], keywords: ["galeao", "santos dumont", "gig", "sdu"] },
  { code: "ROO", name: "Rondonópolis", country: "Brazil", lat: -16.5843, lng: -54.7248, airports: [
      { code: "ROO", name: "Maestro Marinho Franco" },
    ] },
  { code: "SSA", name: "Salvador", country: "Brazil", lat: -12.9086, lng: -38.3225, airports: [
      { code: "SSA", name: "Deputado Luiz Eduardo Magalhães Intl" },
    ] },
  { code: "RIA", name: "Santa Maria", country: "Brazil", lat: -29.7114, lng: -53.6882, airports: [
      { code: "RIA", name: "Santa Maria" },
    ] },
  { code: "STM", name: "Santarém", country: "Brazil", lat: -2.4224, lng: -54.7931, airports: [
      { code: "STM", name: "Santarém - Maestro Wilson Fonseca Intl" },
    ] },
  { code: "GEL", name: "Santo Ângelo", country: "Brazil", lat: -28.2825, lng: -54.1696, airports: [
      { code: "GEL", name: "Santo Ângelo" },
    ] },
  { code: "SJL", name: "São Gabriel da Cachoeira", country: "Brazil", lat: -0.1483, lng: -66.9855, airports: [
      { code: "SJL", name: "São Gabriel da Cachoeira" },
    ] },
  { code: "SJP", name: "São José do Rio Preto", country: "Brazil", lat: -20.8171, lng: -49.407, airports: [
      { code: "SJP", name: "Prof. Eribelto Manoel Reino State" },
    ] },
  { code: "SJK", name: "São José Dos Campos", country: "Brazil", lat: -23.2292, lng: -45.8615, airports: [
      { code: "SJK", name: "Professor Urbano Ernesto Stumpf" },
    ] },
  { code: "SLZ", name: "São Luís", country: "Brazil", lat: -2.5864, lng: -44.235, airports: [
      { code: "SLZ", name: "Marechal Cunha Machado Intl" },
    ] },
  { code: "SAO", name: "São Paulo", country: "Brazil", lat: -23.4313, lng: -46.47, airports: [
      { code: "GRU", name: "São Paulo/Guarulhos–Governor André Franco Montoro Intl" },
      { code: "VCP", name: "Viracopos Intl" },
      { code: "CGH", name: "Congonhas" },
    ], keywords: ["guarulhos", "congonhas", "viracopos", "sp", "gru", "cgh"] },
  { code: "JSO", name: "Sobral", country: "Brazil", lat: -3.6145, lng: -40.2314, airports: [
      { code: "JSO", name: "Dr. Luciano de Arruda Coelho Regional" },
    ] },
  { code: "TBT", name: "Tabatinga", country: "Brazil", lat: -4.2557, lng: -69.9358, airports: [
      { code: "TBT", name: "Tabatinga" },
    ] },
  { code: "TFF", name: "Tefé", country: "Brazil", lat: -3.3829, lng: -64.7241, airports: [
      { code: "TFF", name: "Tefé" },
    ] },
  { code: "THE", name: "Teresina", country: "Brazil", lat: -5.0602, lng: -42.8237, airports: [
      { code: "THE", name: "Senador Petrônio Portela" },
    ] },
  { code: "TUR", name: "Tucuruí", country: "Brazil", lat: -3.786, lng: -49.7203, airports: [
      { code: "TUR", name: "Tucuruí" },
    ] },
  { code: "UBA", name: "Uberaba", country: "Brazil", lat: -19.765, lng: -47.9648, airports: [
      { code: "UBA", name: "Mário de Almeida Franco" },
    ] },
  { code: "UDI", name: "Uberlândia", country: "Brazil", lat: -18.8836, lng: -48.2259, airports: [
      { code: "UDI", name: "Ten. Cel. Aviador César Bombonato" },
    ] },
  { code: "URG", name: "Uruguaiana", country: "Brazil", lat: -29.7822, lng: -57.0382, airports: [
      { code: "URG", name: "Rubem Berta" },
    ] },
  { code: "BVH", name: "Vilhena", country: "Brazil", lat: -12.6944, lng: -60.0983, airports: [
      { code: "BVH", name: "Brigadeiro Camarão" },
    ] },
  { code: "VIX", name: "Vitória", country: "Brazil", lat: -20.258, lng: -40.285, airports: [
      { code: "VIX", name: "Eurico de Aguiar Salles" },
    ] },
  { code: "VDC", name: "Vitória da Conquista", country: "Brazil", lat: -14.9079, lng: -40.9148, airports: [
      { code: "VDC", name: "Glauber de Andrade Rocha" },
    ] },
  { code: "MYG", name: "Abraham Bay Settlement", country: "Bahamas", lat: 22.3795, lng: -73.0135, airports: [
      { code: "MYG", name: "Mayaguana" },
    ] },
  { code: "TZN", name: "Andros", country: "Bahamas", lat: 24.1587, lng: -77.5898, airports: [
      { code: "TZN", name: "Congo Town" },
    ] },
  { code: "SAQ", name: "Andros Island", country: "Bahamas", lat: 25.0538, lng: -78.049, airports: [
      { code: "SAQ", name: "San Andros" },
    ] },
  { code: "ATC", name: "Arthur's Town", country: "Bahamas", lat: 24.6294, lng: -75.6738, airports: [
      { code: "ATC", name: "Arthur's Town" },
    ] },
  { code: "TBI", name: "Cat Island", country: "Bahamas", lat: 24.3153, lng: -75.4523, airports: [
      { code: "TBI", name: "New Bight" },
    ] },
  { code: "CCZ", name: "Chub Cay", country: "Bahamas", lat: 25.4171, lng: -77.8809, airports: [
      { code: "CCZ", name: "Chub Cay" },
    ] },
  { code: "CRI", name: "Colonel Hill", country: "Bahamas", lat: 22.7456, lng: -74.1824, airports: [
      { code: "CRI", name: "Colonel Hill" },
    ] },
  { code: "LGI", name: "Deadman's Cay", country: "Bahamas", lat: 23.179, lng: -75.0936, airports: [
      { code: "LGI", name: "Deadman's Cay" },
    ] },
  { code: "FPO", name: "Freeport", country: "Bahamas", lat: 26.558, lng: -78.6956, airports: [
      { code: "FPO", name: "Grand Bahama Intl" },
    ] },
  { code: "GHB", name: "Governor's Harbour", country: "Bahamas", lat: 25.2847, lng: -76.331, airports: [
      { code: "GHB", name: "Governor's Harbour" },
    ] },
  { code: "MHH", name: "Marsh Harbour", country: "Bahamas", lat: 26.5107, lng: -77.0843, airports: [
      { code: "MHH", name: "Leonard M. Thompson Intl" },
    ] },
  { code: "IGA", name: "Matthew Town", country: "Bahamas", lat: 20.975, lng: -73.6669, airports: [
      { code: "IGA", name: "Inagua" },
    ] },
  { code: "GGT", name: "Moss Town", country: "Bahamas", lat: 23.5626, lng: -75.878, airports: [
      { code: "GGT", name: "Exuma Intl" },
    ] },
  { code: "NAS", name: "Nassau", country: "Bahamas", lat: 25.039, lng: -77.4662, airports: [
      { code: "NAS", name: "Lynden Pindling Intl" },
    ] },
  { code: "ELH", name: "North Eleuthera", country: "Bahamas", lat: 25.4758, lng: -76.6808, airports: [
      { code: "ELH", name: "North Eleuthera" },
    ] },
  { code: "RSD", name: "Rock Sound", country: "Bahamas", lat: 24.8916, lng: -76.1776, airports: [
      { code: "RSD", name: "Rock Sound Intl" },
    ] },
  { code: "ZSA", name: "San Salvador", country: "Bahamas", lat: 24.063, lng: -74.5232, airports: [
      { code: "ZSA", name: "San Salvador Intl" },
    ] },
  { code: "BIM", name: "South Bimini", country: "Bahamas", lat: 25.6999, lng: -79.2647, airports: [
      { code: "BIM", name: "South Bimini" },
    ] },
  { code: "AXP", name: "Spring Point", country: "Bahamas", lat: 22.4418, lng: -73.9709, airports: [
      { code: "AXP", name: "Spring Point" },
    ] },
  { code: "SML", name: "Stella Maris", country: "Bahamas", lat: 23.5823, lng: -75.2686, airports: [
      { code: "SML", name: "Stella Maris" },
    ] },
  { code: "TCB", name: "Treasure Cay", country: "Bahamas", lat: 26.7453, lng: -77.3913, airports: [
      { code: "TCB", name: "Treasure Cay" },
    ] },
  { code: "PBH", name: "Paro", country: "Bhutan", lat: 27.4032, lng: 89.4246, airports: [
      { code: "PBH", name: "Paro Intl" },
    ] },
  { code: "FRW", name: "Francistown", country: "Botswana", lat: -21.1592, lng: 27.4688, airports: [
      { code: "FRW", name: "Phillip Gaonwe Matante Intl" },
    ] },
  { code: "GBE", name: "Gaborone", country: "Botswana", lat: -24.5552, lng: 25.9182, airports: [
      { code: "GBE", name: "Sir Seretse Khama Intl" },
    ] },
  { code: "BBK", name: "Kasane", country: "Botswana", lat: -17.8317, lng: 25.1662, airports: [
      { code: "BBK", name: "Kasane Intl" },
    ] },
  { code: "MUB", name: "Maun", country: "Botswana", lat: -19.9705, lng: 23.4314, airports: [
      { code: "MUB", name: "Maun Intl" },
    ] },
  { code: "BQT", name: "Brest", country: "Belarus", lat: 52.1081, lng: 23.8968, airports: [
      { code: "BQT", name: "Brest Intl" },
    ] },
  { code: "GME", name: "Gomel", country: "Belarus", lat: 52.527, lng: 31.0167, airports: [
      { code: "GME", name: "Gomel" },
    ] },
  { code: "MSQ", name: "Minsk", country: "Belarus", lat: 53.8881, lng: 28.04, airports: [
      { code: "MSQ", name: "Minsk National" },
    ] },
  { code: "MVQ", name: "Mogilev", country: "Belarus", lat: 53.9549, lng: 30.0951, airports: [
      { code: "MVQ", name: "Mogilev" },
    ] },
  { code: "BZE", name: "Belize City", country: "Belize", lat: 17.5172, lng: -88.1958, airports: [
      { code: "BZE", name: "Philip S. W. Goldson Intl" },
      { code: "TZA", name: "Sir Barry Bowen Municipal" },
    ] },
  { code: "CUK", name: "Caye Caulker", country: "Belize", lat: 17.735, lng: -88.0329, airports: [
      { code: "CUK", name: "Caye Caulker" },
    ] },
  { code: "CYC", name: "Caye Chapel", country: "Belize", lat: 17.6838, lng: -88.045, airports: [
      { code: "CYC", name: "Caye Chapel" },
    ] },
  { code: "CZH", name: "Corozal", country: "Belize", lat: 18.3822, lng: -88.4119, airports: [
      { code: "CZH", name: "Corozal" },
    ] },
  { code: "DGA", name: "Dangriga", country: "Belize", lat: 16.9825, lng: -88.231, airports: [
      { code: "DGA", name: "Dangriga" },
    ] },
  { code: "PLJ", name: "Placencia", country: "Belize", lat: 16.537, lng: -88.3615, airports: [
      { code: "PLJ", name: "Placencia" },
    ] },
  { code: "SPR", name: "San Pedro", country: "Belize", lat: 17.9139, lng: -87.9711, airports: [
      { code: "SPR", name: "John Greif II" },
    ] },
  { code: "YXX", name: "Abbotsford", country: "Canada", lat: 49.0253, lng: -122.361, airports: [
      { code: "YXX", name: "Abbotsford Intl" },
    ] },
  { code: "YAA", name: "Anahim Lake", country: "Canada", lat: 52.4515, lng: -125.3038, airports: [
      { code: "YAA", name: "Anahim Lake" },
    ] },
  { code: "YBC", name: "Baie-Comeau", country: "Canada", lat: 49.1325, lng: -68.2044, airports: [
      { code: "YBC", name: "Baie-Comeau" },
    ] },
  { code: "YBK", name: "Baker Lake", country: "Canada", lat: 64.2989, lng: -96.0778, airports: [
      { code: "YBK", name: "Baker Lake" },
    ] },
  { code: "YLK", name: "Barrie", country: "Canada", lat: 44.4851, lng: -79.5547, airports: [
      { code: "YLK", name: "Barrie-Lake Simcoe Regional" },
    ] },
  { code: "ZEL", name: "Bella Bella", country: "Canada", lat: 52.185, lng: -128.157, airports: [
      { code: "ZEL", name: "Bella Bella (Campbell Island)" },
    ] },
  { code: "QBC", name: "Bella Coola", country: "Canada", lat: 52.3875, lng: -126.596, airports: [
      { code: "QBC", name: "Bella Coola" },
    ] },
  { code: "YBX", name: "Blanc-Sablon", country: "Canada", lat: 51.4436, lng: -57.1853, airports: [
      { code: "YBX", name: "Lourdes-de-Blanc-Sablon" },
    ] },
  { code: "YVB", name: "Bonaventure", country: "Canada", lat: 48.0711, lng: -65.4603, airports: [
      { code: "YVB", name: "Bonaventure" },
    ] },
  { code: "YBY", name: "Bonnyville", country: "Canada", lat: 54.3042, lng: -110.744, airports: [
      { code: "YBY", name: "Bonnyville" },
    ] },
  { code: "YBR", name: "Brandon", country: "Canada", lat: 49.91, lng: -99.9519, airports: [
      { code: "YBR", name: "Brandon Municipal" },
    ] },
  { code: "YKF", name: "Breslau", country: "Canada", lat: 43.4608, lng: -80.3786, airports: [
      { code: "YKF", name: "Region of Waterloo Intl" },
    ] },
  { code: "YPZ", name: "Burns Lake", country: "Canada", lat: 54.3764, lng: -125.951, airports: [
      { code: "YPZ", name: "Burns Lake" },
    ] },
  { code: "YYC", name: "Calgary", country: "Canada", lat: 51.1188, lng: -114.0099, airports: [
      { code: "YYC", name: "Calgary Intl" },
    ] },
  { code: "YCB", name: "Cambridge Bay", country: "Canada", lat: 69.1081, lng: -105.138, airports: [
      { code: "YCB", name: "Cambridge Bay" },
    ] },
  { code: "YBL", name: "Campbell River", country: "Canada", lat: 49.9508, lng: -125.271, airports: [
      { code: "YBL", name: "Campbell River" },
    ] },
  { code: "YCG", name: "Castlegar", country: "Canada", lat: 49.2964, lng: -117.632, airports: [
      { code: "YCG", name: "Castlegar/West Kootenay Regional" },
    ] },
  { code: "YCL", name: "Charlo", country: "Canada", lat: 47.9908, lng: -66.3303, airports: [
      { code: "YCL", name: "Charlo" },
    ] },
  { code: "YYG", name: "Charlottetown", country: "Canada", lat: 46.2889, lng: -63.1252, airports: [
      { code: "YYG", name: "Charlottetown" },
    ] },
  { code: "YMT", name: "Chibougamau", country: "Canada", lat: 49.7719, lng: -74.5281, airports: [
      { code: "YMT", name: "Chapais" },
    ] },
  { code: "YYQ", name: "Churchill", country: "Canada", lat: 58.7392, lng: -94.065, airports: [
      { code: "YYQ", name: "Churchill" },
    ] },
  { code: "YQQ", name: "Comox", country: "Canada", lat: 49.7108, lng: -124.887, airports: [
      { code: "YQQ", name: "Comox Valley Intl Airport / CFB Comox" },
    ] },
  { code: "YZS", name: "Coral Harbour", country: "Canada", lat: 64.1933, lng: -83.3594, airports: [
      { code: "YZS", name: "Coral Harbour" },
    ] },
  { code: "YXC", name: "Cranbrook", country: "Canada", lat: 49.6108, lng: -115.782, airports: [
      { code: "YXC", name: "Cranbrook/Canadian Rockies Intl" },
    ] },
  { code: "YDN", name: "Dauphin", country: "Canada", lat: 51.1008, lng: -100.052, airports: [
      { code: "YDN", name: "Dauphin Barker" },
    ] },
  { code: "YDA", name: "Dawson City", country: "Canada", lat: 64.0431, lng: -139.128, airports: [
      { code: "YDA", name: "Dawson City" },
    ] },
  { code: "YDF", name: "Deer Lake", country: "Canada", lat: 49.2082, lng: -57.3961, airports: [
      { code: "YDF", name: "Deer Lake" },
    ] },
  { code: "YEG", name: "Edmonton", country: "Canada", lat: 53.3097, lng: -113.58, airports: [
      { code: "YEG", name: "Edmonton Intl" },
    ] },
  { code: "YPY", name: "Fort Chipewyan", country: "Canada", lat: 58.7672, lng: -111.117, airports: [
      { code: "YPY", name: "Fort Chipewyan" },
    ] },
  { code: "YAG", name: "Fort Frances", country: "Canada", lat: 48.6557, lng: -93.4435, airports: [
      { code: "YAG", name: "Fort Frances Municipal" },
    ] },
  { code: "YMM", name: "Fort McMurray", country: "Canada", lat: 56.6533, lng: -111.222, airports: [
      { code: "YMM", name: "Fort McMurray Intl" },
    ] },
  { code: "YYE", name: "Fort Nelson", country: "Canada", lat: 58.8364, lng: -122.597, airports: [
      { code: "YYE", name: "Fort Nelson" },
    ] },
  { code: "YXJ", name: "Fort Saint John", country: "Canada", lat: 56.2381, lng: -120.74, airports: [
      { code: "YXJ", name: "Fort St John / North Peace Regional" },
    ] },
  { code: "YFS", name: "Fort Simpson", country: "Canada", lat: 61.7602, lng: -121.237, airports: [
      { code: "YFS", name: "Fort Simpson" },
    ] },
  { code: "YSM", name: "Fort Smith", country: "Canada", lat: 60.0203, lng: -111.962, airports: [
      { code: "YSM", name: "Fort Smith" },
    ] },
  { code: "YFC", name: "Fredericton", country: "Canada", lat: 45.8687, lng: -66.5299, airports: [
      { code: "YFC", name: "Fredericton Intl" },
    ] },
  { code: "YQX", name: "Gander", country: "Canada", lat: 48.9363, lng: -54.5677, airports: [
      { code: "YQX", name: "Gander Intl" },
    ] },
  { code: "YGP", name: "Gaspé", country: "Canada", lat: 48.7749, lng: -64.4819, airports: [
      { code: "YGP", name: "Michel-Pouliot Gaspé" },
    ] },
  { code: "YND", name: "Gatineau", country: "Canada", lat: 45.5217, lng: -75.5636, airports: [
      { code: "YND", name: "Ottawa / Gatineau" },
    ] },
  { code: "YYR", name: "Goose Bay", country: "Canada", lat: 53.3192, lng: -60.4258, airports: [
      { code: "YYR", name: "Goose Bay" },
    ] },
  { code: "YQU", name: "Grande Prairie", country: "Canada", lat: 55.1797, lng: -118.885, airports: [
      { code: "YQU", name: "Grande Prairie" },
    ] },
  { code: "YQA", name: "Gravenhurst", country: "Canada", lat: 44.9754, lng: -79.3065, airports: [
      { code: "YQA", name: "Muskoka" },
    ] },
  { code: "YHZ", name: "Halifax", country: "Canada", lat: 44.8808, lng: -63.5086, airports: [
      { code: "YHZ", name: "Halifax / Stanfield Intl" },
    ] },
  { code: "YGV", name: "Havre-Saint-Pierre", country: "Canada", lat: 50.2819, lng: -63.6114, airports: [
      { code: "YGV", name: "Havre-Saint-Pierre" },
    ] },
  { code: "YHY", name: "Hay River", country: "Canada", lat: 60.8397, lng: -115.783, airports: [
      { code: "YHY", name: "Hay River / Merlyn Carter" },
    ] },
  { code: "YOJ", name: "High Level", country: "Canada", lat: 58.6214, lng: -117.165, airports: [
      { code: "YOJ", name: "High Level" },
    ] },
  { code: "YEV", name: "Inuvik", country: "Canada", lat: 68.3042, lng: -133.483, airports: [
      { code: "YEV", name: "Inuvik Mike Zubko" },
    ] },
  { code: "YFB", name: "Iqaluit", country: "Canada", lat: 63.7564, lng: -68.5558, airports: [
      { code: "YFB", name: "Iqaluit" },
    ] },
  { code: "YIV", name: "Island Lake", country: "Canada", lat: 53.8572, lng: -94.6536, airports: [
      { code: "YIV", name: "Island Lake" },
    ] },
  { code: "YKA", name: "Kamloops", country: "Canada", lat: 50.703, lng: -120.4486, airports: [
      { code: "YKA", name: "Kamloops John Moose Fulton Field Regional" },
    ] },
  { code: "XKS", name: "Kasabonika", country: "Canada", lat: 53.5247, lng: -88.6428, airports: [
      { code: "XKS", name: "Kasabonika" },
    ] },
  { code: "YLW", name: "Kelowna", country: "Canada", lat: 49.9561, lng: -119.378, airports: [
      { code: "YLW", name: "Kelowna Intl" },
    ] },
  { code: "YQK", name: "Kenora", country: "Canada", lat: 49.7883, lng: -94.3631, airports: [
      { code: "YQK", name: "Kenora" },
    ] },
  { code: "YVP", name: "Kuujjuaq", country: "Canada", lat: 58.0961, lng: -68.4269, airports: [
      { code: "YVP", name: "Kuujjuaq" },
    ] },
  { code: "YGW", name: "Kuujjuarapik", country: "Canada", lat: 55.2819, lng: -77.7653, airports: [
      { code: "YGW", name: "Kuujjuarapik" },
    ] },
  { code: "YGL", name: "La Grande Rivière", country: "Canada", lat: 53.6253, lng: -77.7042, airports: [
      { code: "YGL", name: "La Grande Rivière" },
    ] },
  { code: "YVC", name: "La Ronge", country: "Canada", lat: 55.1514, lng: -105.262, airports: [
      { code: "YVC", name: "La Ronge" },
    ] },
  { code: "YGR", name: "Les Îles-de-la-Madeleine", country: "Canada", lat: 47.4252, lng: -61.7786, airports: [
      { code: "YGR", name: "Îles-de-la-Madeleine" },
    ] },
  { code: "YQL", name: "Lethbridge", country: "Canada", lat: 49.6303, lng: -112.8, airports: [
      { code: "YQL", name: "Lethbridge County" },
    ] },
  { code: "YLL", name: "Lloydminster", country: "Canada", lat: 53.3092, lng: -110.073, airports: [
      { code: "YLL", name: "Lloydminster" },
    ] },
  { code: "YXU", name: "London", country: "Canada", lat: 43.0328, lng: -81.149, airports: [
      { code: "YXU", name: "London Intl" },
    ] },
  { code: "YYL", name: "Lynn Lake", country: "Canada", lat: 56.8639, lng: -101.076, airports: [
      { code: "YYL", name: "Lynn Lake" },
    ] },
  { code: "ZMT", name: "Masset", country: "Canada", lat: 54.0275, lng: -132.125, airports: [
      { code: "ZMT", name: "Masset" },
    ] },
  { code: "YXH", name: "Medicine Hat", country: "Canada", lat: 50.0189, lng: -110.721, airports: [
      { code: "YXH", name: "Medicine Hat Regional" },
    ] },
  { code: "YQM", name: "Moncton", country: "Canada", lat: 46.1132, lng: -64.6772, airports: [
      { code: "YQM", name: "Greater Moncton Roméo LeBlanc Intl" },
    ] },
  { code: "YYY", name: "Mont-Joli", country: "Canada", lat: 48.6086, lng: -68.2081, airports: [
      { code: "YYY", name: "Mont Joli" },
    ] },
  { code: "YUL", name: "Montréal", country: "Canada", lat: 45.5175, lng: -73.4169, airports: [
      { code: "YUL", name: "Montreal / Pierre Elliott Trudeau Intl" },
      { code: "YMX", name: "Montreal Mirabel Intl" },
      { code: "YHU", name: "Montréal / Saint-Hubert Metropolitan" },
    ] },
  { code: "YMO", name: "Moosonee", country: "Canada", lat: 51.2911, lng: -80.6078, airports: [
      { code: "YMO", name: "Moosonee" },
    ] },
  { code: "YQN", name: "Nakina", country: "Canada", lat: 50.1828, lng: -86.6964, airports: [
      { code: "YQN", name: "Nakina" },
    ] },
  { code: "YCD", name: "Nanaimo", country: "Canada", lat: 49.055, lng: -123.8699, airports: [
      { code: "YCD", name: "Nanaimo" },
    ] },
  { code: "YNA", name: "Natashquan", country: "Canada", lat: 50.1901, lng: -61.789, airports: [
      { code: "YNA", name: "Natashquan" },
    ] },
  { code: "YCM", name: "Niagara-on-the-Lake", country: "Canada", lat: 43.1916, lng: -79.1717, airports: [
      { code: "YCM", name: "Niagara District" },
    ] },
  { code: "YVQ", name: "Norman Wells", country: "Canada", lat: 65.2816, lng: -126.798, airports: [
      { code: "YVQ", name: "Norman Wells" },
    ] },
  { code: "YYB", name: "North Bay", country: "Canada", lat: 46.3636, lng: -79.4228, airports: [
      { code: "YYB", name: "North Bay Jack Garland" },
    ] },
  { code: "YOW", name: "Ottawa", country: "Canada", lat: 45.3225, lng: -75.6692, airports: [
      { code: "YOW", name: "Ottawa Macdonald-Cartier Intl" },
      { code: "YRO", name: "Ottawa / Rockcliffe" },
    ] },
  { code: "YPE", name: "Peace River", country: "Canada", lat: 56.2269, lng: -117.447, airports: [
      { code: "YPE", name: "Peace River" },
    ] },
  { code: "YYF", name: "Penticton", country: "Canada", lat: 49.4631, lng: -119.602, airports: [
      { code: "YYF", name: "Penticton" },
    ] },
  { code: "YPL", name: "Pickle Lake", country: "Canada", lat: 51.4464, lng: -90.2142, airports: [
      { code: "YPL", name: "Pickle Lake" },
    ] },
  { code: "YNL", name: "Points North Landing", country: "Canada", lat: 58.2767, lng: -104.082, airports: [
      { code: "YNL", name: "Points North Landing" },
    ] },
  { code: "YZT", name: "Port Hardy", country: "Canada", lat: 50.6806, lng: -127.367, airports: [
      { code: "YZT", name: "Port Hardy" },
    ] },
  { code: "YPN", name: "Port-Menier", country: "Canada", lat: 49.8364, lng: -64.2886, airports: [
      { code: "YPN", name: "Port-Menier" },
    ] },
  { code: "YPW", name: "Powell River", country: "Canada", lat: 49.8342, lng: -124.5, airports: [
      { code: "YPW", name: "Powell River" },
    ] },
  { code: "YPA", name: "Prince Albert", country: "Canada", lat: 53.2142, lng: -105.673, airports: [
      { code: "YPA", name: "Prince Albert Glass Field" },
    ] },
  { code: "YXS", name: "Prince George", country: "Canada", lat: 53.8843, lng: -122.6666, airports: [
      { code: "YXS", name: "Prince George (Intl)" },
    ] },
  { code: "YPR", name: "Prince Rupert", country: "Canada", lat: 54.2861, lng: -130.445, airports: [
      { code: "YPR", name: "Prince Rupert" },
    ] },
  { code: "YPX", name: "Puvirnituq", country: "Canada", lat: 60.0506, lng: -77.2869, airports: [
      { code: "YPX", name: "Puvirnituq" },
    ] },
  { code: "XQU", name: "Qualicum Beach", country: "Canada", lat: 49.3375, lng: -124.3931, airports: [
      { code: "XQU", name: "Qualicum Beach" },
    ] },
  { code: "YQB", name: "Quebec", country: "Canada", lat: 46.7911, lng: -71.3933, airports: [
      { code: "YQB", name: "Quebec Jean Lesage Intl" },
    ] },
  { code: "YQZ", name: "Quesnel", country: "Canada", lat: 53.0261, lng: -122.51, airports: [
      { code: "YQZ", name: "Quesnel" },
    ] },
  { code: "YRT", name: "Rankin Inlet", country: "Canada", lat: 62.8114, lng: -92.1158, airports: [
      { code: "YRT", name: "Rankin Inlet" },
    ] },
  { code: "YRL", name: "Red Lake", country: "Canada", lat: 51.0669, lng: -93.7931, airports: [
      { code: "YRL", name: "Red Lake" },
    ] },
  { code: "YQR", name: "Regina", country: "Canada", lat: 50.4319, lng: -104.6609, airports: [
      { code: "YQR", name: "Regina Intl" },
    ] },
  { code: "YRB", name: "Resolute Bay", country: "Canada", lat: 74.7169, lng: -94.9694, airports: [
      { code: "YRB", name: "Resolute Bay" },
    ] },
  { code: "YXK", name: "Rimouski", country: "Canada", lat: 48.4776, lng: -68.4963, airports: [
      { code: "YXK", name: "Rimouski" },
    ] },
  { code: "YRJ", name: "Roberval", country: "Canada", lat: 48.5197, lng: -72.2657, airports: [
      { code: "YRJ", name: "Roberval" },
    ] },
  { code: "YUY", name: "Rouyn-Noranda", country: "Canada", lat: 48.2061, lng: -78.8356, airports: [
      { code: "YUY", name: "Rouyn Noranda" },
    ] },
  { code: "YBG", name: "Saguenay", country: "Canada", lat: 48.3301, lng: -70.992, airports: [
      { code: "YBG", name: "Saguenay-Bagotville" },
    ] },
  { code: "YSJ", name: "Saint John", country: "Canada", lat: 45.3161, lng: -65.8903, airports: [
      { code: "YSJ", name: "Saint John" },
    ] },
  { code: "YZP", name: "Sandspit", country: "Canada", lat: 53.2543, lng: -131.814, airports: [
      { code: "YZP", name: "Sandspit" },
    ] },
  { code: "ZSJ", name: "Sandy Lake", country: "Canada", lat: 53.0642, lng: -93.3444, airports: [
      { code: "ZSJ", name: "Sandy Lake" },
    ] },
  { code: "YUX", name: "Sanirajak", country: "Canada", lat: 68.7761, lng: -81.2425, airports: [
      { code: "YUX", name: "Hall Beach" },
    ] },
  { code: "YXE", name: "Saskatoon", country: "Canada", lat: 52.1707, lng: -106.7008, airports: [
      { code: "YXE", name: "Saskatoon John G. Diefenbaker Intl" },
    ] },
  { code: "YAM", name: "Sault Ste Marie", country: "Canada", lat: 46.4832, lng: -84.5085, airports: [
      { code: "YAM", name: "Sault Ste Marie" },
    ] },
  { code: "YKL", name: "Schefferville", country: "Canada", lat: 54.8053, lng: -66.8053, airports: [
      { code: "YKL", name: "Schefferville" },
    ] },
  { code: "YZV", name: "Sept-Îles", country: "Canada", lat: 50.2233, lng: -66.2656, airports: [
      { code: "YZV", name: "Sept-Îles" },
    ] },
  { code: "YXL", name: "Sioux Lookout", country: "Canada", lat: 50.1139, lng: -91.9053, airports: [
      { code: "YXL", name: "Sioux Lookout" },
    ] },
  { code: "YYD", name: "Smithers", country: "Canada", lat: 54.8247, lng: -127.183, airports: [
      { code: "YYD", name: "Smithers" },
    ] },
  { code: "ZBF", name: "South Tetagouche", country: "Canada", lat: 47.6297, lng: -65.7389, airports: [
      { code: "ZBF", name: "Bathurst" },
    ] },
  { code: "YIF", name: "St-Augustin", country: "Canada", lat: 51.2117, lng: -58.6583, airports: [
      { code: "YIF", name: "St Augustin" },
    ] },
  { code: "YAY", name: "St. Anthony", country: "Canada", lat: 51.3919, lng: -56.0832, airports: [
      { code: "YAY", name: "St. Anthony" },
    ] },
  { code: "YYT", name: "St. John's", country: "Canada", lat: 47.6186, lng: -52.7519, airports: [
      { code: "YYT", name: "St. John's Intl" },
    ] },
  { code: "YJT", name: "Stephenville", country: "Canada", lat: 48.5434, lng: -58.5529, airports: [
      { code: "YJT", name: "Stephenville Dymond Intl" },
    ] },
  { code: "YSF", name: "Stony Rapids", country: "Canada", lat: 59.2503, lng: -105.841, airports: [
      { code: "YSF", name: "Stony Rapids" },
    ] },
  { code: "YSB", name: "Sudbury", country: "Canada", lat: 46.625, lng: -80.7989, airports: [
      { code: "YSB", name: "Sudbury" },
    ] },
  { code: "YQY", name: "Sydney", country: "Canada", lat: 46.1614, lng: -60.0478, airports: [
      { code: "YQY", name: "Sydney / J.A. Douglas McCurdy" },
    ] },
  { code: "YXT", name: "Terrace", country: "Canada", lat: 54.4685, lng: -128.576, airports: [
      { code: "YXT", name: "Northwest Regional Airport Terrace-Kitimat" },
    ] },
  { code: "YQD", name: "The Pas", country: "Canada", lat: 53.9714, lng: -101.091, airports: [
      { code: "YQD", name: "The Pas" },
    ] },
  { code: "YTH", name: "Thompson", country: "Canada", lat: 55.8011, lng: -97.8642, airports: [
      { code: "YTH", name: "Thompson" },
    ] },
  { code: "YQT", name: "Thunder Bay", country: "Canada", lat: 48.3719, lng: -89.3239, airports: [
      { code: "YQT", name: "Thunder Bay Intl" },
    ] },
  { code: "YTS", name: "Timmins", country: "Canada", lat: 48.5697, lng: -81.3767, airports: [
      { code: "YTS", name: "Timmins/Victor M. Power" },
    ] },
  { code: "YAZ", name: "Tofino", country: "Canada", lat: 49.0798, lng: -125.7756, airports: [
      { code: "YAZ", name: "Tofino / Long Beach" },
    ] },
  { code: "YTO", name: "Toronto", country: "Canada", lat: 43.6759, lng: -79.6294, airports: [
      { code: "YYZ", name: "Toronto Pearson Intl" },
      { code: "YHM", name: "John C. Munro Hamilton Intl" },
      { code: "YTZ", name: "Billy Bishop Toronto City" },
    ], keywords: ["gta", "ontario", "pearson", "yyz"] },
  { code: "YVO", name: "Val-d'Or", country: "Canada", lat: 48.0533, lng: -77.7828, airports: [
      { code: "YVO", name: "Val-d'Or" },
    ] },
  { code: "YVR", name: "Vancouver", country: "Canada", lat: 49.1939, lng: -123.184, airports: [
      { code: "YVR", name: "Vancouver Intl" },
    ] },
  { code: "YYJ", name: "Victoria", country: "Canada", lat: 48.6472, lng: -123.4278, airports: [
      { code: "YYJ", name: "Victoria Intl" },
    ] },
  { code: "YWK", name: "Wabush", country: "Canada", lat: 52.9219, lng: -66.8644, airports: [
      { code: "YWK", name: "Wabush" },
    ] },
  { code: "YQH", name: "Watson Lake", country: "Canada", lat: 60.1168, lng: -128.822, airports: [
      { code: "YQH", name: "Watson Lake" },
    ] },
  { code: "YZU", name: "Whitecourt", country: "Canada", lat: 54.1439, lng: -115.787, airports: [
      { code: "YZU", name: "Whitecourt" },
    ] },
  { code: "YXY", name: "Whitehorse", country: "Canada", lat: 60.7085, lng: -135.0657, airports: [
      { code: "YXY", name: "Whitehorse / Erik Nielsen Intl" },
    ] },
  { code: "YVV", name: "Wiarton", country: "Canada", lat: 44.7458, lng: -81.1072, airports: [
      { code: "YVV", name: "Wiarton" },
    ] },
  { code: "YWL", name: "Williams Lake", country: "Canada", lat: 52.1831, lng: -122.054, airports: [
      { code: "YWL", name: "Williams Lake" },
    ] },
  { code: "YQG", name: "Windsor", country: "Canada", lat: 42.2756, lng: -82.9556, airports: [
      { code: "YQG", name: "Windsor Intl" },
    ] },
  { code: "YWG", name: "Winnipeg", country: "Canada", lat: 49.91, lng: -97.2399, airports: [
      { code: "YWG", name: "Winnipeg / James Armstrong Richardson Intl" },
    ] },
  { code: "YZF", name: "Yellowknife", country: "Canada", lat: 62.4628, lng: -114.44, airports: [
      { code: "YZF", name: "Yellowknife Intl" },
    ] },
  { code: "CCK", name: "West Island", country: "CC", lat: -12.1922, lng: 96.8341, airports: [
      { code: "CCK", name: "Cocos (Keeling) Islands" },
    ] },
  { code: "FDU", name: "Bandundu", country: "DR Congo", lat: -3.3113, lng: 17.3817, airports: [
      { code: "FDU", name: "Bandundu" },
    ] },
  { code: "BUX", name: "Bunia", country: "DR Congo", lat: 1.5657, lng: 30.2207, airports: [
      { code: "BUX", name: "Bunia" },
    ] },
  { code: "BDT", name: "Gbadolite", country: "DR Congo", lat: 4.2527, lng: 20.9753, airports: [
      { code: "BDT", name: "Gbadolite" },
    ] },
  { code: "GMA", name: "Gemena", country: "DR Congo", lat: 3.2354, lng: 19.7713, airports: [
      { code: "GMA", name: "Gemena" },
    ] },
  { code: "GOM", name: "Goma", country: "DR Congo", lat: -1.6668, lng: 29.238, airports: [
      { code: "GOM", name: "Goma Intl" },
    ] },
  { code: "IRP", name: "Isiro", country: "DR Congo", lat: 2.8276, lng: 27.5883, airports: [
      { code: "IRP", name: "Matari" },
    ] },
  { code: "FMI", name: "Kalemie", country: "DR Congo", lat: -5.8756, lng: 29.25, airports: [
      { code: "FMI", name: "Kalemie" },
    ] },
  { code: "KGA", name: "Kananga", country: "DR Congo", lat: -5.9, lng: 22.4692, airports: [
      { code: "KGA", name: "Kananga" },
    ] },
  { code: "KKW", name: "Kikwit", country: "DR Congo", lat: -5.0358, lng: 18.7856, airports: [
      { code: "KKW", name: "Kikwit" },
    ] },
  { code: "KND", name: "Kindu", country: "DR Congo", lat: -2.9192, lng: 25.9154, airports: [
      { code: "KND", name: "Kindu" },
    ] },
  { code: "FIH", name: "Kinshasa", country: "DR Congo", lat: -4.3857, lng: 15.4446, airports: [
      { code: "FIH", name: "Ndjili Intl" },
    ] },
  { code: "FKI", name: "Kisangani", country: "DR Congo", lat: 0.4816, lng: 25.338, airports: [
      { code: "FKI", name: "Bangoka Intl" },
    ] },
  { code: "KWZ", name: "Kolwezi", country: "DR Congo", lat: -10.7659, lng: 25.5057, airports: [
      { code: "KWZ", name: "Kolwezi" },
    ] },
  { code: "FBM", name: "Lubumbashi", country: "DR Congo", lat: -11.5915, lng: 27.5308, airports: [
      { code: "FBM", name: "Lubumbashi Intl" },
    ] },
  { code: "MDK", name: "Mbandaka", country: "DR Congo", lat: 0.0226, lng: 18.2887, airports: [
      { code: "MDK", name: "Mbandaka" },
    ] },
  { code: "MJM", name: "Mbuji Mayi", country: "DR Congo", lat: -6.1212, lng: 23.569, airports: [
      { code: "MJM", name: "Mbuji Mayi" },
    ] },
  { code: "BGF", name: "Bangui", country: "Central African Republic", lat: 4.3985, lng: 18.5188, airports: [
      { code: "BGF", name: "Bangui M'Poko Intl" },
    ] },
  { code: "BZV", name: "Brazzaville", country: "Republic of the Congo", lat: -4.2517, lng: 15.253, airports: [
      { code: "BZV", name: "Maya-Maya Intl" },
    ] },
  { code: "PNR", name: "Pointe Noire", country: "Republic of the Congo", lat: -4.816, lng: 11.8866, airports: [
      { code: "PNR", name: "Antonio Agostinho-Neto Intl" },
    ] },
  { code: "LUG", name: "Agno", country: "Switzerland", lat: 46.0043, lng: 8.9106, airports: [
      { code: "LUG", name: "Lugano" },
    ] },
  { code: "BRN", name: "Bern", country: "Switzerland", lat: 46.9127, lng: 7.4988, airports: [
      { code: "BRN", name: "Bern" },
    ] },
  { code: "GVA", name: "Geneva", country: "Switzerland", lat: 46.2381, lng: 6.109, airports: [
      { code: "GVA", name: "Geneva Cointrin Intl" },
    ] },
  { code: "ACH", name: "St. Gallen", country: "Switzerland", lat: 47.485, lng: 9.5608, airports: [
      { code: "ACH", name: "Sankt Gallen Altenrhein" },
    ] },
  { code: "ZRH", name: "Zurich", country: "Switzerland", lat: 47.4581, lng: 8.5481, airports: [
      { code: "ZRH", name: "Zürich" },
    ] },
  { code: "ABJ", name: "Abidjan", country: "Ivory Coast", lat: 5.2614, lng: -3.9263, airports: [
      { code: "ABJ", name: "Félix-Houphouët-Boigny Intl" },
    ] },
  { code: "BYK", name: "Bouaké", country: "Ivory Coast", lat: 7.7388, lng: -5.0737, airports: [
      { code: "BYK", name: "Bouaké" },
    ] },
  { code: "HGO", name: "Korhogo", country: "Ivory Coast", lat: 9.3872, lng: -5.5567, airports: [
      { code: "HGO", name: "Korhogo" },
    ] },
  { code: "SPY", name: "San Pedro", country: "Ivory Coast", lat: 4.7467, lng: -6.6608, airports: [
      { code: "SPY", name: "San Pedro" },
    ] },
  { code: "RAR", name: "Avarua", country: "CK", lat: -21.2027, lng: -159.806, airports: [
      { code: "RAR", name: "Rarotonga Intl" },
    ] },
  { code: "ANF", name: "Antofagasta", country: "Chile", lat: -23.4453, lng: -70.4452, airports: [
      { code: "ANF", name: "Andrés Sabella Gálvez Intl" },
    ] },
  { code: "ARI", name: "Arica", country: "Chile", lat: -18.3485, lng: -70.3387, airports: [
      { code: "ARI", name: "Chacalluta" },
    ] },
  { code: "BBA", name: "Balmaceda", country: "Chile", lat: -45.916, lng: -71.6895, airports: [
      { code: "BBA", name: "Balmaceda" },
    ] },
  { code: "CJC", name: "Calama", country: "Chile", lat: -22.4982, lng: -68.9036, airports: [
      { code: "CJC", name: "El Loa" },
    ] },
  { code: "CCP", name: "Concepcion", country: "Chile", lat: -36.7724, lng: -73.0628, airports: [
      { code: "CCP", name: "Carriel Sur Intl" },
    ] },
  { code: "CPO", name: "Copiapo", country: "Chile", lat: -27.2612, lng: -70.7792, airports: [
      { code: "CPO", name: "Desierto de Atacama" },
    ] },
  { code: "ESR", name: "El Salvador", country: "Chile", lat: -26.3111, lng: -69.7652, airports: [
      { code: "ESR", name: "Ricardo García Posada" },
    ] },
  { code: "IQQ", name: "Iquique", country: "Chile", lat: -20.5352, lng: -70.1813, airports: [
      { code: "IQQ", name: "Diego Aracena" },
    ] },
  { code: "IPC", name: "Isla De Pascua", country: "Chile", lat: -27.1654, lng: -109.421, airports: [
      { code: "IPC", name: "Mataveri Intl" },
    ] },
  { code: "LSC", name: "La Serena-Coquimbo", country: "Chile", lat: -29.9162, lng: -71.1995, airports: [
      { code: "LSC", name: "La Florida" },
    ] },
  { code: "ZOS", name: "Osorno", country: "Chile", lat: -40.6112, lng: -73.061, airports: [
      { code: "ZOS", name: "Cañal Bajo Carlos Hott Siebert" },
    ] },
  { code: "PMC", name: "Puerto Montt", country: "Chile", lat: -41.4431, lng: -73.0941, airports: [
      { code: "PMC", name: "El Tepual Intl" },
    ] },
  { code: "PNT", name: "Puerto Natales", country: "Chile", lat: -51.6707, lng: -72.5291, airports: [
      { code: "PNT", name: "Lieutenant Julio Gallardo" },
    ] },
  { code: "PUQ", name: "Punta Arenas", country: "Chile", lat: -53.0026, lng: -70.8546, airports: [
      { code: "PUQ", name: "President Carlos Ibáñez Intl" },
    ] },
  { code: "SCL", name: "Santiago", country: "Chile", lat: -33.393, lng: -70.7858, airports: [
      { code: "SCL", name: "Comodoro Arturo Merino Benítez Intl" },
    ] },
  { code: "ZCO", name: "Temuco", country: "Chile", lat: -38.9259, lng: -72.6515, airports: [
      { code: "ZCO", name: "La Araucanía" },
    ] },
  { code: "ZAL", name: "Valdivia", country: "Chile", lat: -39.65, lng: -73.0861, airports: [
      { code: "ZAL", name: "Pichoy" },
    ] },
  { code: "DLA", name: "Douala", country: "Cameroon", lat: 4.0061, lng: 9.7195, airports: [
      { code: "DLA", name: "Douala Intl" },
    ] },
  { code: "GOU", name: "Garoua", country: "Cameroon", lat: 9.3359, lng: 13.3701, airports: [
      { code: "GOU", name: "Garoua Intl" },
    ] },
  { code: "MVR", name: "Maroua", country: "Cameroon", lat: 10.4514, lng: 14.2574, airports: [
      { code: "MVR", name: "Salak" },
    ] },
  { code: "NGE", name: "N'Gaoundéré", country: "Cameroon", lat: 7.357, lng: 13.5592, airports: [
      { code: "NGE", name: "N'Gaoundéré" },
    ] },
  { code: "NSI", name: "Yaoundé", country: "Cameroon", lat: 3.7226, lng: 11.5533, airports: [
      { code: "NSI", name: "Yaoundé Nsimalen Intl" },
    ] },
  { code: "AKU", name: "Aksu (Onsu)", country: "China", lat: 41.2625, lng: 80.2917, airports: [
      { code: "AKU", name: "Aksu Hongqipo" },
    ] },
  { code: "AAT", name: "Altay", country: "China", lat: 47.7499, lng: 88.0858, airports: [
      { code: "AAT", name: "Altay Xuedu" },
    ] },
  { code: "AQG", name: "Anqing", country: "China", lat: 30.5822, lng: 117.05, airports: [
      { code: "AQG", name: "Anqing Tianzhushan Airport / Anqing North" },
    ] },
  { code: "AOG", name: "Anshan", country: "China", lat: 41.1053, lng: 122.854, airports: [
      { code: "AOG", name: "Anshan Teng'ao Airport / Anshan" },
    ] },
  { code: "AVA", name: "Anshun (Xixiu)", country: "China", lat: 26.2606, lng: 105.8733, airports: [
      { code: "AVA", name: "Anshun Huangguoshu" },
    ] },
  { code: "YIE", name: "Arxan", country: "China", lat: 47.3106, lng: 119.9117, airports: [
      { code: "YIE", name: "Arxan Yi'ershi" },
    ] },
  { code: "DBC", name: "Baicheng", country: "China", lat: 45.5053, lng: 123.0197, airports: [
      { code: "DBC", name: "Baicheng Chang'an" },
    ] },
  { code: "AEB", name: "Baise (Tianyang)", country: "China", lat: 23.7206, lng: 106.96, airports: [
      { code: "AEB", name: "Baise (Bose) Bama" },
    ] },
  { code: "NBS", name: "Baishan", country: "China", lat: 42.0669, lng: 127.6022, airports: [
      { code: "NBS", name: "Changbaishan" },
    ] },
  { code: "BPX", name: "Bangda", country: "China", lat: 30.5536, lng: 97.1083, airports: [
      { code: "BPX", name: "Qamdo Bangda" },
    ] },
  { code: "BSD", name: "Baoshan (Longyang)", country: "China", lat: 25.0533, lng: 99.1683, airports: [
      { code: "BSD", name: "Baoshan Yunrui" },
    ] },
  { code: "TCZ", name: "Baoshan (Tengchong)", country: "China", lat: 24.9381, lng: 98.4858, airports: [
      { code: "TCZ", name: "Tengchong Tuofeng" },
    ] },
  { code: "BAV", name: "Baotou", country: "China", lat: 40.56, lng: 109.997, airports: [
      { code: "BAV", name: "Baotou Donghe Intl" },
    ] },
  { code: "RLK", name: "Bavannur", country: "China", lat: 40.926, lng: 107.7428, airports: [
      { code: "RLK", name: "Bayannur Tianjitai" },
    ] },
  { code: "AXF", name: "Bayanhot", country: "China", lat: 38.7483, lng: 105.5842, airports: [
      { code: "AXF", name: "Alxa Left Banner Bayanhot" },
    ] },
  { code: "BHY", name: "Beihai (Yinhai)", country: "China", lat: 21.5394, lng: 109.294, airports: [
      { code: "BHY", name: "Beihai Fucheng" },
    ] },
  { code: "BJS", name: "Beijing", country: "China", lat: 40.0801, lng: 116.585, airports: [
      { code: "PEK", name: "Beijing Capital Intl" },
      { code: "PKX", name: "Beijing Daxing Intl" },
    ], keywords: ["peking", "daxing", "capital", "pek", "pkx", "china"] },
  { code: "BFJ", name: "Bijie", country: "China", lat: 27.2671, lng: 105.4721, airports: [
      { code: "BFJ", name: "Bijie Feixiong" },
    ] },
  { code: "BPL", name: "Bole", country: "China", lat: 44.8955, lng: 82.3001, airports: [
      { code: "BPL", name: "Bole Alashankou" },
    ] },
  { code: "KJI", name: "Burqin", country: "China", lat: 48.2223, lng: 86.9959, airports: [
      { code: "KJI", name: "Burqin Kanas" },
    ] },
  { code: "CGQ", name: "Changchun", country: "China", lat: 43.9962, lng: 125.685, airports: [
      { code: "CGQ", name: "Changchun Longjia Intl" },
    ] },
  { code: "CGD", name: "Changde (Dingcheng)", country: "China", lat: 28.9189, lng: 111.64, airports: [
      { code: "CGD", name: "Changde Taohuayuan" },
    ] },
  { code: "CSX", name: "Changsha (Changsha)", country: "China", lat: 28.1892, lng: 113.22, airports: [
      { code: "CSX", name: "Changsha Huanghua Intl" },
    ] },
  { code: "CZX", name: "Changzhou", country: "China", lat: 31.9205, lng: 119.7755, airports: [
      { code: "CZX", name: "Changzhou Benniu Intl" },
    ] },
  { code: "CDE", name: "Chengde", country: "China", lat: 41.1225, lng: 118.0739, airports: [
      { code: "CDE", name: "Chengde Puning" },
    ] },
  { code: "TFU", name: "Chengdu (Jianyang)", country: "China", lat: 30.3125, lng: 104.4413, airports: [
      { code: "TFU", name: "Chengdu Tianfu Intl" },
    ] },
  { code: "CTU", name: "Chengdu (Shuangliu)", country: "China", lat: 30.5583, lng: 103.946, airports: [
      { code: "CTU", name: "Chengdu Shuangliu Intl" },
    ] },
  { code: "HCZ", name: "Chenzhou", country: "China", lat: 25.7534, lng: 112.8454, airports: [
      { code: "HCZ", name: "Chenzhou Beihu" },
    ] },
  { code: "CIF", name: "Chifeng", country: "China", lat: 42.1597, lng: 118.841, airports: [
      { code: "CIF", name: "Chifeng Yulong" },
    ] },
  { code: "CKG", name: "Chongqing", country: "China", lat: 29.7123, lng: 106.6519, airports: [
      { code: "CKG", name: "Chongqing Jiangbei Intl" },
    ] },
  { code: "DLU", name: "Dali (Xiaguan)", country: "China", lat: 25.6494, lng: 100.319, airports: [
      { code: "DLU", name: "Dali Fengyi" },
    ] },
  { code: "DLC", name: "Dalian (Ganjingzi)", country: "China", lat: 38.9657, lng: 121.5385, airports: [
      { code: "DLC", name: "Dalian Zhoushuizi Intl" },
    ] },
  { code: "DDG", name: "Dandong (Zhenxing)", country: "China", lat: 40.0255, lng: 124.2867, airports: [
      { code: "DDG", name: "Dandong Langtou Intl" },
    ] },
  { code: "DAT", name: "Datong", country: "China", lat: 40.0614, lng: 113.4805, airports: [
      { code: "DAT", name: "Datong Yungang Intl" },
    ] },
  { code: "DZH", name: "Dazhou (Dachuan)", country: "China", lat: 31.0488, lng: 107.4356, airports: [
      { code: "DZH", name: "Dazhou Jinya" },
    ] },
  { code: "LUM", name: "Dehong (Mangshi)", country: "China", lat: 24.4011, lng: 98.5317, airports: [
      { code: "LUM", name: "Dehong Mangshi Intl" },
    ] },
  { code: "DIG", name: "Diqing (Shangri-La)", country: "China", lat: 27.7936, lng: 99.6772, airports: [
      { code: "DIG", name: "Diqing Shangri-La" },
    ] },
  { code: "DOY", name: "Dongying (Kenli)", country: "China", lat: 37.5014, lng: 118.7899, airports: [
      { code: "DOY", name: "Dongying Shengli" },
    ] },
  { code: "DNH", name: "Dunhuang", country: "China", lat: 40.164, lng: 94.8117, airports: [
      { code: "DNH", name: "Dunhuang Mogao Intl" },
    ] },
  { code: "ENH", name: "Enshi (Enshi)", country: "China", lat: 30.3203, lng: 109.485, airports: [
      { code: "ENH", name: "Enshi Xujiaping" },
    ] },
  { code: "ERL", name: "Erenhot", country: "China", lat: 43.4241, lng: 112.0911, airports: [
      { code: "ERL", name: "Erenhot Saiwusu Intl" },
    ] },
  { code: "EHU", name: "Ezhou", country: "China", lat: 30.3412, lng: 115.0393, airports: [
      { code: "EHU", name: "Ezhou Huahu" },
    ] },
  { code: "FUO", name: "Foshan (Nanhai)", country: "China", lat: 23.0825, lng: 113.0708, airports: [
      { code: "FUO", name: "Foshan Shadi" },
    ] },
  { code: "FYJ", name: "Fuyuan", country: "China", lat: 48.1972, lng: 134.363, airports: [
      { code: "FYJ", name: "Fuyuan Dongji" },
    ] },
  { code: "FYN", name: "Fuyun", country: "China", lat: 46.8042, lng: 89.512, airports: [
      { code: "FYN", name: "Fuyun Koktokay" },
    ] },
  { code: "FOC", name: "Fuzhou (Changle)", country: "China", lat: 25.9293, lng: 119.6725, airports: [
      { code: "FOC", name: "Fuzhou Changle Intl" },
    ] },
  { code: "GXH", name: "Gannan (Xiahe)", country: "China", lat: 34.819, lng: 102.6223, airports: [
      { code: "GXH", name: "Gannan Xiahe" },
    ] },
  { code: "DCY", name: "Garzê (Daocheng)", country: "China", lat: 29.3163, lng: 100.0603, airports: [
      { code: "DCY", name: "Daocheng Yading" },
    ] },
  { code: "KGT", name: "Garzê (Kangding)", country: "China", lat: 30.1425, lng: 101.7387, airports: [
      { code: "KGT", name: "Kangding" },
    ] },
  { code: "GOQ", name: "Golmud", country: "China", lat: 36.4006, lng: 94.7861, airports: [
      { code: "GOQ", name: "Golmud" },
    ] },
  { code: "GMQ", name: "Golog (Maqên)", country: "China", lat: 34.4181, lng: 100.3011, airports: [
      { code: "GMQ", name: "Golog Maqên" },
    ] },
  { code: "GYS", name: "Guangyuan (Lizhou)", country: "China", lat: 32.3903, lng: 105.6946, airports: [
      { code: "GYS", name: "Guangyuan Panlong" },
    ] },
  { code: "CAN", name: "Guangzhou (Huadu)", country: "China", lat: 23.3924, lng: 113.299, airports: [
      { code: "CAN", name: "Guangzhou Baiyun Intl" },
    ] },
  { code: "KWL", name: "Guilin (Lingui)", country: "China", lat: 25.2198, lng: 110.0396, airports: [
      { code: "KWL", name: "Guilin Liangjiang Intl" },
    ] },
  { code: "KWE", name: "Guiyang (Nanming)", country: "China", lat: 26.5418, lng: 106.804, airports: [
      { code: "KWE", name: "Guiyang Longdongbao Intl" },
    ] },
  { code: "GYU", name: "Guyuan (Yuanzhou)", country: "China", lat: 36.0789, lng: 106.2169, airports: [
      { code: "GYU", name: "Guyuan Liupanshan" },
    ] },
  { code: "XNN", name: "Haidong (Huzhu Tu Autonomous County)", country: "China", lat: 36.5278, lng: 102.0402, airports: [
      { code: "XNN", name: "Xining Caojiabao Intl" },
    ] },
  { code: "HAK", name: "Haikou (Meilan)", country: "China", lat: 19.9349, lng: 110.459, airports: [
      { code: "HAK", name: "Haikou Meilan Intl" },
    ] },
  { code: "HLD", name: "Hailar", country: "China", lat: 49.2086, lng: 119.8223, airports: [
      { code: "HLD", name: "Hulunbuir Hailar" },
    ] },
  { code: "HMI", name: "Hami", country: "China", lat: 42.8414, lng: 93.6692, airports: [
      { code: "HMI", name: "Hami" },
    ] },
  { code: "HDG", name: "Handan", country: "China", lat: 36.5248, lng: 114.4241, airports: [
      { code: "HDG", name: "Handan" },
    ] },
  { code: "HGH", name: "Hangzhou", country: "China", lat: 30.2361, lng: 120.4289, airports: [
      { code: "HGH", name: "Hangzhou Xiaoshan Intl" },
    ] },
  { code: "HRB", name: "Harbin", country: "China", lat: 45.6234, lng: 126.25, airports: [
      { code: "HRB", name: "Harbin Taiping Intl" },
    ] },
  { code: "HCJ", name: "Hechi (Jinchengjiang)", country: "China", lat: 24.8043, lng: 107.7108, airports: [
      { code: "HCJ", name: "Hechi Jinchengjiang" },
    ] },
  { code: "HFE", name: "Hefei", country: "China", lat: 31.9878, lng: 116.9769, airports: [
      { code: "HFE", name: "Hefei Xinqiao Intl" },
    ] },
  { code: "HEK", name: "Heihe", country: "China", lat: 48.441, lng: 126.1284, airports: [
      { code: "HEK", name: "Heihe Aihui" },
      { code: "DTU", name: "Wudalianchi Dedu" },
    ] },
  { code: "HZA", name: "Heze (Dingtao)", country: "China", lat: 35.213, lng: 115.7367, airports: [
      { code: "HZA", name: "Heze Mudan" },
    ] },
  { code: "HET", name: "Hohhot", country: "China", lat: 40.8497, lng: 111.8246, airports: [
      { code: "HET", name: "Hohhot Baita Intl" },
    ] },
  { code: "HUO", name: "Holingol", country: "China", lat: 45.4872, lng: 119.4072, airports: [
      { code: "HUO", name: "Holingol Huolinhe" },
    ] },
  { code: "HTN", name: "Hotan", country: "China", lat: 37.0385, lng: 79.8649, airports: [
      { code: "HTN", name: "Hotan" },
    ] },
  { code: "HIA", name: "Huai'an", country: "China", lat: 33.7908, lng: 119.125, airports: [
      { code: "HIA", name: "Huai'an Lianshui Intl" },
    ] },
  { code: "HJJ", name: "Huaihua", country: "China", lat: 27.4431, lng: 109.7047, airports: [
      { code: "HJJ", name: "Huaihua Zhijiang" },
    ] },
  { code: "TXN", name: "Huangshan", country: "China", lat: 29.7333, lng: 118.256, airports: [
      { code: "TXN", name: "Tunxi Intl" },
    ] },
  { code: "HUZ", name: "Huizhou (Pingtan)", country: "China", lat: 23.05, lng: 114.6, airports: [
      { code: "HUZ", name: "Huizhou Pingtan" },
    ] },
  { code: "JGS", name: "Ji'an", country: "China", lat: 26.8569, lng: 114.737, airports: [
      { code: "JGS", name: "Jinggangshan" },
    ] },
  { code: "JGD", name: "Jiagedaqi", country: "China", lat: 50.3714, lng: 124.1175, airports: [
      { code: "JGD", name: "Daxing'anling Elunchun" },
    ] },
  { code: "JMU", name: "Jiamusi", country: "China", lat: 46.8428, lng: 130.4643, airports: [
      { code: "JMU", name: "Jiamusi Songjiang Intl" },
    ] },
  { code: "JSJ", name: "Jiansanjiang", country: "China", lat: 47.1082, lng: 132.6579, airports: [
      { code: "JSJ", name: "Jiansanjiang Shidi" },
    ] },
  { code: "JGN", name: "Jiayuguan", country: "China", lat: 39.8591, lng: 98.3393, airports: [
      { code: "JGN", name: "Jiayuguan Intl" },
    ] },
  { code: "SWA", name: "Jieyang (Rongcheng)", country: "China", lat: 23.552, lng: 116.5033, airports: [
      { code: "SWA", name: "Jieyang Chaoshan Intl" },
    ] },
  { code: "TNA", name: "Jinan (Licheng)", country: "China", lat: 36.8572, lng: 117.216, airports: [
      { code: "TNA", name: "Jinan Yaoqiang Intl" },
    ] },
  { code: "JDZ", name: "Jingdezhen", country: "China", lat: 29.3386, lng: 117.176, airports: [
      { code: "JDZ", name: "Jingdezhen Luojia" },
    ] },
  { code: "JHG", name: "Jinghong (Gasa)", country: "China", lat: 21.9746, lng: 100.7622, airports: [
      { code: "JHG", name: "Xishuangbanna Gasa Intl" },
    ] },
  { code: "SHS", name: "Jingzhou (Shashi)", country: "China", lat: 30.2928, lng: 112.4485, airports: [
      { code: "SHS", name: "Jingzhou Shashi" },
    ] },
  { code: "YIW", name: "Jinhua (Yiwu)", country: "China", lat: 29.3421, lng: 120.0312, airports: [
      { code: "YIW", name: "Yiwu" },
    ] },
  { code: "JNG", name: "Jining", country: "China", lat: 35.6474, lng: 116.7433, airports: [
      { code: "JNG", name: "Jining Da'an" },
    ] },
  { code: "JNZ", name: "Jinzhou (Linghai)", country: "China", lat: 40.936, lng: 121.2771, airports: [
      { code: "JNZ", name: "Jinzhou Bay" },
    ] },
  { code: "JXA", name: "Jixi", country: "China", lat: 45.293, lng: 131.193, airports: [
      { code: "JXA", name: "Jixi Xingkaihu" },
    ] },
  { code: "KJH", name: "Kaili  (Huangping)", country: "China", lat: 26.972, lng: 107.988, airports: [
      { code: "KJH", name: "Kaili Huangping" },
    ] },
  { code: "KHG", name: "Kashgar", country: "China", lat: 39.5429, lng: 76.02, airports: [
      { code: "KHG", name: "Kashgar Laining Intl" },
    ] },
  { code: "KRL", name: "Korla", country: "China", lat: 41.615, lng: 86.1408, airports: [
      { code: "KRL", name: "Korla Licheng" },
    ] },
  { code: "KMG", name: "Kunming", country: "China", lat: 25.1103, lng: 102.9367, airports: [
      { code: "KMG", name: "Kunming Changshui Intl" },
    ] },
  { code: "LHW", name: "Lanzhou (Yongdeng)", country: "China", lat: 36.5152, lng: 103.62, airports: [
      { code: "LHW", name: "Lanzhou Zhongchuan Intl" },
    ] },
  { code: "XIC", name: "Liangshan (Xichang)", country: "China", lat: 27.9891, lng: 102.184, airports: [
      { code: "XIC", name: "Xichang Qingshan" },
    ] },
  { code: "LYG", name: "Lianyungang", country: "China", lat: 34.4141, lng: 119.179, airports: [
      { code: "LYG", name: "Lianyungang Huaguoshan Intl" },
    ] },
  { code: "LJG", name: "Lijiang (Gucheng)", country: "China", lat: 26.68, lng: 100.246, airports: [
      { code: "LJG", name: "Lijiang Sanyi Intl" },
    ] },
  { code: "LNJ", name: "Lincang", country: "China", lat: 23.7381, lng: 100.025, airports: [
      { code: "LNJ", name: "Lincang Boshang" },
    ] },
  { code: "CWJ", name: "Lincang (Cangyuan)", country: "China", lat: 23.2763, lng: 99.3732, airports: [
      { code: "CWJ", name: "Cangyuan Washan" },
    ] },
  { code: "LFQ", name: "Linfen (Yaodu)", country: "China", lat: 36.1326, lng: 111.6412, airports: [
      { code: "LFQ", name: "Linfen Yaodu" },
    ] },
  { code: "LYI", name: "Linyi (Hedong)", country: "China", lat: 35.0529, lng: 118.4118, airports: [
      { code: "LYI", name: "Linyi Qiyang" },
    ] },
  { code: "HZH", name: "Liping", country: "China", lat: 26.3222, lng: 109.1499, airports: [
      { code: "HZH", name: "Liping" },
    ] },
  { code: "LPF", name: "Liupanshui (Zhongshan)", country: "China", lat: 26.6094, lng: 104.979, airports: [
      { code: "LPF", name: "Liupanshui Yuezhao" },
    ] },
  { code: "LZH", name: "Liuzhou (Liujiang)", country: "China", lat: 24.2075, lng: 109.391, airports: [
      { code: "LZH", name: "Liuzhou Bailian Airport / Bailian" },
    ] },
  { code: "LNL", name: "Longnan (Cheng)", country: "China", lat: 33.7899, lng: 105.79, airports: [
      { code: "LNL", name: "Longnan Chengzhou" },
    ] },
  { code: "LCX", name: "Longyan (Liancheng)", country: "China", lat: 25.6759, lng: 116.7459, airports: [
      { code: "LCX", name: "Liancheng Guanzhishan" },
    ] },
  { code: "LLV", name: "Lüliang", country: "China", lat: 37.6833, lng: 111.1428, airports: [
      { code: "LLV", name: "Lüliang Dawu" },
    ] },
  { code: "LYA", name: "Luoyang (Laocheng)", country: "China", lat: 34.7411, lng: 112.388, airports: [
      { code: "LYA", name: "Luoyang Beijiao" },
    ] },
  { code: "LZO", name: "Luzhou (Yunlong)", country: "China", lat: 29.0304, lng: 105.4684, airports: [
      { code: "LZO", name: "Luzhou Yunlong" },
    ] },
  { code: "NZH", name: "Manzhouli", country: "China", lat: 49.5667, lng: 117.33, airports: [
      { code: "NZH", name: "Manzhouli Xijiao" },
    ] },
  { code: "HTT", name: "Mengnai", country: "China", lat: 38.2016, lng: 90.8378, airports: [
      { code: "HTT", name: "Huatugou" },
    ] },
  { code: "MIG", name: "Mianyang (Fucheng)", country: "China", lat: 31.4281, lng: 104.741, airports: [
      { code: "MIG", name: "Mianyang Nanjiao" },
    ] },
  { code: "OHE", name: "Mohe", country: "China", lat: 52.9169, lng: 122.4228, airports: [
      { code: "OHE", name: "Mohe Gulian" },
    ] },
  { code: "MDG", name: "Mudanjiang", country: "China", lat: 44.5252, lng: 129.5686, airports: [
      { code: "MDG", name: "Mudanjiang Hailang Intl" },
    ] },
  { code: "KHN", name: "Nanchang", country: "China", lat: 28.8648, lng: 115.9027, airports: [
      { code: "KHN", name: "Nanchang Changbei Intl" },
    ] },
  { code: "LZG", name: "Nanchong (Langzhong)", country: "China", lat: 31.5019, lng: 106.0344, airports: [
      { code: "LZG", name: "Langzhong Gucheng" },
    ] },
  { code: "NKG", name: "Nanjing", country: "China", lat: 31.735, lng: 118.8659, airports: [
      { code: "NKG", name: "Nanjing Lukou Intl" },
    ] },
  { code: "NNG", name: "Nanning (Jiangnan)", country: "China", lat: 22.5981, lng: 108.1819, airports: [
      { code: "NNG", name: "Nanning Wuxu Intl" },
    ] },
  { code: "NTG", name: "Nantong (Tongzhou)", country: "China", lat: 32.0736, lng: 120.9801, airports: [
      { code: "NTG", name: "Nantong Xingdong Intl" },
    ] },
  { code: "JZH", name: "Ngawa (Songpan)", country: "China", lat: 32.8533, lng: 103.6822, airports: [
      { code: "JZH", name: "Jiuzhai Huanglong" },
    ] },
  { code: "NGB", name: "Ningbo", country: "China", lat: 29.8267, lng: 121.462, airports: [
      { code: "NGB", name: "Ningbo Lishe Intl" },
    ] },
  { code: "NLH", name: "Ninglang", country: "China", lat: 27.5403, lng: 100.7593, airports: [
      { code: "NLH", name: "Ninglang Luguhu" },
    ] },
  { code: "LZY", name: "Nyingchi (Mainling)", country: "China", lat: 29.3033, lng: 94.3353, airports: [
      { code: "LZY", name: "Nyingchi Mainling" },
    ] },
  { code: "DSN", name: "Ordos", country: "China", lat: 39.4935, lng: 109.8599, airports: [
      { code: "DSN", name: "Ordos Ejin Horo Intl" },
    ] },
  { code: "PZI", name: "Panzhihua (Renhe)", country: "China", lat: 26.54, lng: 101.7985, airports: [
      { code: "PZI", name: "Panzhihua Bao'anying" },
    ] },
  { code: "JMJ", name: "Pu'er (Lancang)", country: "China", lat: 22.4177, lng: 99.784, airports: [
      { code: "JMJ", name: "Lancang Jingmai" },
    ] },
  { code: "YSQ", name: "Qian Gorlos Mongol Autonomous County", country: "China", lat: 44.9311, lng: 124.5521, airports: [
      { code: "YSQ", name: "Songyuan Chaganhu" },
    ] },
  { code: "JIQ", name: "Qianjiang", country: "China", lat: 29.5133, lng: 108.8311, airports: [
      { code: "JIQ", name: "Qianjiang Wulingshan" },
    ] },
  { code: "IQM", name: "Qiemo", country: "China", lat: 38.2345, lng: 85.4655, airports: [
      { code: "IQM", name: "Qiemo Yudu" },
    ] },
  { code: "TAO", name: "Qingdao (Jiaozhou)", country: "China", lat: 36.362, lng: 120.0882, airports: [
      { code: "TAO", name: "Qingdao Jiaodong Intl" },
    ] },
  { code: "IQN", name: "Qingyang (Xifeng)", country: "China", lat: 35.8026, lng: 107.5989, airports: [
      { code: "IQN", name: "Qingyang Xifeng" },
    ] },
  { code: "BPE", name: "Qinhuangdao (Changli)", country: "China", lat: 39.6664, lng: 119.0614, airports: [
      { code: "BPE", name: "Qinhuangdao Beidaihe" },
    ] },
  { code: "BAR", name: "Qionghai (Basuo)", country: "China", lat: 19.141, lng: 110.4528, airports: [
      { code: "BAR", name: "Qionghai Bo'ao" },
    ] },
  { code: "NDG", name: "Qiqihar", country: "China", lat: 47.23, lng: 123.9142, airports: [
      { code: "NDG", name: "Qiqihar Sanjiazi" },
    ] },
  { code: "JJN", name: "Quanzhou", country: "China", lat: 24.7959, lng: 118.5886, airports: [
      { code: "JJN", name: "Quanzhou Jinjiang Intl" },
    ] },
  { code: "JUZ", name: "Quzhou (Kezheng)", country: "China", lat: 28.9661, lng: 118.8988, airports: [
      { code: "JUZ", name: "Quzhou" },
    ] },
  { code: "RIZ", name: "Rizhao (Donggang)", country: "China", lat: 35.405, lng: 119.3244, airports: [
      { code: "RIZ", name: "Rizhao Shanzihe" },
    ] },
  { code: "RQA", name: "Ruoqiang Town", country: "China", lat: 38.9747, lng: 88.0083, airports: [
      { code: "RQA", name: "Ruoqiang Loulan" },
    ] },
  { code: "SQJ", name: "Sanming (Sha)", country: "China", lat: 26.4263, lng: 117.8336, airports: [
      { code: "SQJ", name: "Sanming Shaxian" },
    ] },
  { code: "SYX", name: "Sanya (Tianya)", country: "China", lat: 18.3029, lng: 109.412, airports: [
      { code: "SYX", name: "Sanya Phoenix Intl" },
    ] },
  { code: "QSZ", name: "Shache", country: "China", lat: 38.2454, lng: 77.0561, airports: [
      { code: "QSZ", name: "Shache" },
    ] },
  { code: "SHA", name: "Shanghai (Minhang)", country: "China", lat: 31.1981, lng: 121.3343, airports: [
      { code: "SHA", name: "Shanghai Hongqiao Intl" },
    ] },
  { code: "PVG", name: "Shanghai (Pudong)", country: "China", lat: 31.1434, lng: 121.805, airports: [
      { code: "PVG", name: "Shanghai Pudong Intl" },
    ] },
  { code: "SQD", name: "Shangrao (Hengfeng)", country: "China", lat: 28.3797, lng: 117.9643, airports: [
      { code: "SQD", name: "Shangrao Sanqingshan" },
    ] },
  { code: "LXA", name: "Shannan (Gonggar)", country: "China", lat: 29.298, lng: 90.912, airports: [
      { code: "LXA", name: "Lhasa Gonggar Intl" },
    ] },
  { code: "HSC", name: "Shaoguan", country: "China", lat: 24.9786, lng: 113.421, airports: [
      { code: "HSC", name: "Shaoguan Danxia" },
    ] },
  { code: "WGN", name: "Shaoyang (Wugang)", country: "China", lat: 26.8061, lng: 110.641, airports: [
      { code: "WGN", name: "Shaoyang Wugang" },
    ] },
  { code: "HPG", name: "Shennongjia (Hongping)", country: "China", lat: 31.626, lng: 110.34, airports: [
      { code: "HPG", name: "Shennongjia Hongping" },
    ] },
  { code: "SHE", name: "Shenyang", country: "China", lat: 41.6398, lng: 123.4837, airports: [
      { code: "SHE", name: "Shenyang Taoxian Intl" },
    ] },
  { code: "SZX", name: "Shenzhen", country: "China", lat: 22.6395, lng: 113.8033, airports: [
      { code: "SZX", name: "Shenzhen Bao'an Intl" },
    ] },
  { code: "SJW", name: "Shijiazhuang", country: "China", lat: 38.2807, lng: 114.697, airports: [
      { code: "SJW", name: "Shijiazhuang Zhengding Intl" },
    ] },
  { code: "NGQ", name: "Shiquanhe", country: "China", lat: 32.0979, lng: 80.054, airports: [
      { code: "NGQ", name: "Ngari Gunsa" },
    ] },
  { code: "WDS", name: "Shiyan (Maojian)", country: "China", lat: 32.5929, lng: 110.9063, airports: [
      { code: "WDS", name: "Shiyan Wudangshan" },
    ] },
  { code: "CHG", name: "Shuangta, Chaoyang", country: "China", lat: 41.5381, lng: 120.435, airports: [
      { code: "CHG", name: "Chaoyang" },
    ] },
  { code: "TYN", name: "Taiyuan", country: "China", lat: 37.7469, lng: 112.628, airports: [
      { code: "TYN", name: "Taiyuan Wusu Intl" },
    ] },
  { code: "HYN", name: "Taizhou (Luqiao)", country: "China", lat: 28.5622, lng: 121.429, airports: [
      { code: "HYN", name: "Taizhou Luqiao" },
    ] },
  { code: "WUZ", name: "Tangbu", country: "China", lat: 23.4032, lng: 111.0933, airports: [
      { code: "WUZ", name: "Wuzhou Xijiang" },
    ] },
  { code: "HQL", name: "Tashikuergan", country: "China", lat: 37.6613, lng: 75.2889, airports: [
      { code: "HQL", name: "Tashikuergan Hongqilafu" },
    ] },
  { code: "TSN", name: "Tianjin", country: "China", lat: 39.1244, lng: 117.346, airports: [
      { code: "TSN", name: "Tianjin Binhai Intl" },
    ] },
  { code: "THQ", name: "Tianshui (Maiji)", country: "China", lat: 34.5601, lng: 105.8603, airports: [
      { code: "THQ", name: "Tianshui Maijishan" },
    ] },
  { code: "TNH", name: "Tonghua", country: "China", lat: 42.0484, lng: 125.734, airports: [
      { code: "TNH", name: "Tonghua Sanyuanpu" },
    ] },
  { code: "TGO", name: "Tongliao", country: "China", lat: 43.5567, lng: 122.2, airports: [
      { code: "TGO", name: "Tongliao" },
    ] },
  { code: "TEN", name: "Tongren (Daxing)", country: "China", lat: 27.8833, lng: 109.3089, airports: [
      { code: "TEN", name: "Tongren Fenghuang" },
    ] },
  { code: "TLQ", name: "Turpan", country: "China", lat: 43.0308, lng: 89.0987, airports: [
      { code: "TLQ", name: "Turpan Jiaohe" },
    ] },
  { code: "UCB", name: "Ulanqab", country: "China", lat: 41.1303, lng: 113.1073, airports: [
      { code: "UCB", name: "Ulanqab Jining" },
    ] },
  { code: "URC", name: "Ürümqi", country: "China", lat: 43.9126, lng: 87.4795, airports: [
      { code: "URC", name: "Ürümqi Tianshan Intl" },
    ] },
  { code: "WEF", name: "Weifang (Kuiwen)", country: "China", lat: 36.6467, lng: 119.119, airports: [
      { code: "WEF", name: "Weifang Nanyuan" },
    ] },
  { code: "WEH", name: "Weihai", country: "China", lat: 37.1871, lng: 122.229, airports: [
      { code: "WEH", name: "Weihai Dashuibo" },
    ] },
  { code: "WNZ", name: "Wenzhou (Longwan)", country: "China", lat: 27.9106, lng: 120.8535, airports: [
      { code: "WNZ", name: "Wenzhou Longwan Intl" },
    ] },
  { code: "WUH", name: "Wuhan (Huangpi)", country: "China", lat: 30.7748, lng: 114.2137, airports: [
      { code: "WUH", name: "Wuhan Tianhe Intl" },
    ] },
  { code: "WHA", name: "Wuhu", country: "China", lat: 31.1045, lng: 118.6669, airports: [
      { code: "WHA", name: "Wuhu Xuanzhou" },
    ] },
  { code: "CQW", name: "Wulong", country: "China", lat: 29.4657, lng: 107.6937, airports: [
      { code: "CQW", name: "Chongqing Xiannüshan" },
    ] },
  { code: "WUX", name: "Wuxi", country: "China", lat: 31.497, lng: 120.4304, airports: [
      { code: "WUX", name: "Sunan Shuofang Intl" },
    ] },
  { code: "WUS", name: "Wuyishan", country: "China", lat: 27.7019, lng: 118.001, airports: [
      { code: "WUS", name: "Nanping Wuyishan" },
    ] },
  { code: "XMN", name: "Xiamen", country: "China", lat: 24.5439, lng: 118.1275, airports: [
      { code: "XMN", name: "Xiamen Gaoqi Intl" },
    ] },
  { code: "XFN", name: "Xiangyang (Xiangzhou)", country: "China", lat: 32.1522, lng: 112.2917, airports: [
      { code: "XFN", name: "Xiangyang Liuji" },
    ] },
  { code: "XIY", name: "Xianyang (Weicheng)", country: "China", lat: 34.4471, lng: 108.752, airports: [
      { code: "XIY", name: "Xi'an Xianyang Intl" },
    ] },
  { code: "DDR", name: "Xigazê (Dingri)", country: "China", lat: 28.6046, lng: 86.798, airports: [
      { code: "DDR", name: "Rikaze Dingri" },
    ] },
  { code: "RKZ", name: "Xigazê (Samzhubzê)", country: "China", lat: 29.3509, lng: 89.2992, airports: [
      { code: "RKZ", name: "Xigaze Peace Airport / Shigatse" },
    ] },
  { code: "XIL", name: "Xilinhot", country: "China", lat: 43.9156, lng: 115.964, airports: [
      { code: "XIL", name: "Xilinhot" },
    ] },
  { code: "ACX", name: "Xingyi", country: "China", lat: 25.0834, lng: 104.9608, airports: [
      { code: "ACX", name: "Xingyi Wanfenglin" },
    ] },
  { code: "XAI", name: "Xinyang", country: "China", lat: 32.5408, lng: 114.0791, airports: [
      { code: "XAI", name: "Xinyang Minggang" },
    ] },
  { code: "NLT", name: "Xinyuan", country: "China", lat: 43.4318, lng: 83.3786, airports: [
      { code: "NLT", name: "Xinyuan Nalati" },
    ] },
  { code: "XUZ", name: "Xuzhou", country: "China", lat: 34.0591, lng: 117.5553, airports: [
      { code: "XUZ", name: "Xuzhou Guanyin Intl" },
    ] },
  { code: "ENY", name: "Yan'an (Baota)", country: "China", lat: 36.4794, lng: 109.4641, airports: [
      { code: "ENY", name: "Yan'an Nanniwan" },
    ] },
  { code: "YNZ", name: "Yancheng (Tinghu)", country: "China", lat: 33.4258, lng: 120.2031, airports: [
      { code: "YNZ", name: "Yancheng Nanyang Intl" },
    ] },
  { code: "YTY", name: "Yangzhou", country: "China", lat: 32.5634, lng: 119.7198, airports: [
      { code: "YTY", name: "Yangzhou Taizhou" },
    ] },
  { code: "YNJ", name: "Yanji", country: "China", lat: 42.8828, lng: 129.451, airports: [
      { code: "YNJ", name: "Yanji Chaoyangchuan" },
    ] },
  { code: "YNT", name: "Yantai", country: "China", lat: 37.6597, lng: 120.9781, airports: [
      { code: "YNT", name: "Yantai Penglai Intl" },
    ] },
  { code: "YBP", name: "Yibin (Cuiping)", country: "China", lat: 28.8584, lng: 104.5262, airports: [
      { code: "YBP", name: "Yibin Wuliangye" },
    ] },
  { code: "YIH", name: "Yichang (Xiaoting)", country: "China", lat: 30.5541, lng: 111.4826, airports: [
      { code: "YIH", name: "Yichang Sanxia" },
    ] },
  { code: "LDS", name: "Yichun", country: "China", lat: 27.8025, lng: 114.3062, airports: [
      { code: "LDS", name: "Yichun Lindu" },
      { code: "YIC", name: "Yichun Mingyueshan" },
    ] },
  { code: "INC", name: "Yinchuan", country: "China", lat: 38.3228, lng: 106.3932, airports: [
      { code: "INC", name: "Yinchuan Hedong Intl" },
    ] },
  { code: "YKH", name: "Yingkou (Laobian)", country: "China", lat: 40.5425, lng: 122.3586, airports: [
      { code: "YKH", name: "Yingkou Lanqi" },
    ] },
  { code: "FUG", name: "Yingzhou, Fuyang", country: "China", lat: 32.8822, lng: 115.7344, airports: [
      { code: "FUG", name: "Fuyang Xiguan" },
    ] },
  { code: "LLF", name: "Yongzhou", country: "China", lat: 26.3387, lng: 111.61, airports: [
      { code: "LLF", name: "Yongzhou Lingling" },
    ] },
  { code: "YYA", name: "Yueyang (Yueyanglou)", country: "China", lat: 29.3117, lng: 113.2816, airports: [
      { code: "YYA", name: "Yueyang Sanhe" },
    ] },
  { code: "YLX", name: "Yulin", country: "China", lat: 22.433, lng: 110.12, airports: [
      { code: "YLX", name: "Yulin Fumian" },
      { code: "UYN", name: "Yulin Yuyang" },
    ] },
  { code: "YCU", name: "Yuncheng (Yanhu)", country: "China", lat: 35.1178, lng: 111.034, airports: [
      { code: "YCU", name: "Yuncheng Yanhu Intl" },
    ] },
  { code: "YUS", name: "Yushu (Batang)", country: "China", lat: 32.8364, lng: 97.0364, airports: [
      { code: "YUS", name: "Yushu Batang" },
    ] },
  { code: "NZL", name: "Zhalantun", country: "China", lat: 47.8659, lng: 122.7687, airports: [
      { code: "NZL", name: "Zhalantun Genghis Khan" },
    ] },
  { code: "DYG", name: "Zhangjiajie (Yongding)", country: "China", lat: 29.1047, lng: 110.4428, airports: [
      { code: "DYG", name: "Zhangjiajie Hehua Intl" },
    ] },
  { code: "ZQZ", name: "Zhangjiakou", country: "China", lat: 40.7386, lng: 114.9303, airports: [
      { code: "ZQZ", name: "Zhangjiakou Ningyuan" },
    ] },
  { code: "YZY", name: "Zhangye (Ganzhou)", country: "China", lat: 38.8019, lng: 100.675, airports: [
      { code: "YZY", name: "Zhangye Ganzhou" },
    ] },
  { code: "ZHA", name: "Zhanjiang", country: "China", lat: 21.4817, lng: 110.5903, airports: [
      { code: "ZHA", name: "Zhanjiang Wuchuan Intl" },
    ] },
  { code: "CGO", name: "Zhengzhou", country: "China", lat: 34.5265, lng: 113.8492, airports: [
      { code: "CGO", name: "Zhengzhou Xinzheng Intl" },
    ] },
  { code: "ZHY", name: "Zhongwei (Shapotou)", country: "China", lat: 37.5731, lng: 105.1545, airports: [
      { code: "ZHY", name: "Zhongwei Shapotou" },
    ] },
  { code: "HSN", name: "Zhoushan", country: "China", lat: 29.9342, lng: 122.362, airports: [
      { code: "HSN", name: "Zhoushan Putuoshan" },
    ] },
  { code: "ZUH", name: "Zhuhai (Jinwan)", country: "China", lat: 22.0064, lng: 113.376, airports: [
      { code: "ZUH", name: "Zhuhai Jinwan" },
    ] },
  { code: "WMT", name: "Zunyi", country: "China", lat: 27.9618, lng: 106.4354, airports: [
      { code: "WMT", name: "Zunyi Maotai" },
      { code: "ZYI", name: "Zunyi Xinzhou" },
    ] },
  { code: "AUC", name: "Arauca", country: "Colombia", lat: 7.0689, lng: -70.7369, airports: [
      { code: "AUC", name: "Santiago Perez" },
    ] },
  { code: "AXM", name: "Armenia", country: "Colombia", lat: 4.4528, lng: -75.7664, airports: [
      { code: "AXM", name: "El Eden" },
    ] },
  { code: "BSC", name: "Bahía Solano", country: "Colombia", lat: 6.2029, lng: -77.3947, airports: [
      { code: "BSC", name: "José Celestino Mutis" },
    ] },
  { code: "EJA", name: "Barrancabermeja", country: "Colombia", lat: 7.0243, lng: -73.8068, airports: [
      { code: "EJA", name: "Yariguíes" },
    ] },
  { code: "BAQ", name: "Barranquilla", country: "Colombia", lat: 10.8896, lng: -74.7808, airports: [
      { code: "BAQ", name: "Ernesto Cortissoz Intl" },
    ] },
  { code: "BOG", name: "Bogota", country: "Colombia", lat: 4.7016, lng: -74.1469, airports: [
      { code: "BOG", name: "El Dorado Intl" },
    ] },
  { code: "BGA", name: "Bucaramanga", country: "Colombia", lat: 7.1265, lng: -73.1848, airports: [
      { code: "BGA", name: "Palonegro" },
    ] },
  { code: "BUN", name: "Buenaventura", country: "Colombia", lat: 3.8196, lng: -76.9898, airports: [
      { code: "BUN", name: "Gerardo Tobar López" },
    ] },
  { code: "CLO", name: "Cali", country: "Colombia", lat: 3.5427, lng: -76.3819, airports: [
      { code: "CLO", name: "Alfonso Bonilla Aragon Intl" },
    ] },
  { code: "APO", name: "Carepa", country: "Colombia", lat: 7.812, lng: -76.7164, airports: [
      { code: "APO", name: "Antonio Roldán Betancur" },
    ] },
  { code: "CTG", name: "Cartagena", country: "Colombia", lat: 10.4424, lng: -75.513, airports: [
      { code: "CTG", name: "Rafael Nuñez Intl" },
    ] },
  { code: "PSO", name: "Chachagüí", country: "Colombia", lat: 1.3963, lng: -77.2915, airports: [
      { code: "PSO", name: "Antonio Nariño" },
    ] },
  { code: "CZU", name: "Corozal", country: "Colombia", lat: 9.3327, lng: -75.2856, airports: [
      { code: "CZU", name: "Las Brujas" },
    ] },
  { code: "CUC", name: "Cúcuta", country: "Colombia", lat: 7.9276, lng: -72.5115, airports: [
      { code: "CUC", name: "Camilo Daza Intl" },
    ] },
  { code: "FLA", name: "Florencia", country: "Colombia", lat: 1.5892, lng: -75.5644, airports: [
      { code: "FLA", name: "Gustavo Artunduaga Paredes" },
    ] },
  { code: "GPI", name: "Guapi", country: "Colombia", lat: 2.5701, lng: -77.898, airports: [
      { code: "GPI", name: "Guapi" },
    ] },
  { code: "IBE", name: "Ibagué", country: "Colombia", lat: 4.4216, lng: -75.1333, airports: [
      { code: "IBE", name: "Perales" },
    ] },
  { code: "IPI", name: "Ipiales", country: "Colombia", lat: 0.8619, lng: -77.6718, airports: [
      { code: "IPI", name: "San Luis" },
    ] },
  { code: "LET", name: "Leticia", country: "Colombia", lat: -4.1935, lng: -69.9432, airports: [
      { code: "LET", name: "Alfredo Vásquez Cobo Intl" },
    ] },
  { code: "MZL", name: "Manizales", country: "Colombia", lat: 5.0296, lng: -75.4647, airports: [
      { code: "MZL", name: "La Nubia" },
    ] },
  { code: "MDE", name: "Medellín", country: "Colombia", lat: 6.2197, lng: -75.5906, airports: [
      { code: "MDE", name: "Jose Maria Córdova Intl" },
      { code: "EOH", name: "Enrique Olaya Herrera" },
    ] },
  { code: "MVP", name: "Mitú", country: "Colombia", lat: 1.2537, lng: -70.2339, airports: [
      { code: "MVP", name: "Fabio Alberto Leon Bentley" },
    ] },
  { code: "MTR", name: "Montería", country: "Colombia", lat: 8.8237, lng: -75.8258, airports: [
      { code: "MTR", name: "Los Garzones" },
    ] },
  { code: "NVA", name: "Neiva", country: "Colombia", lat: 2.9502, lng: -75.294, airports: [
      { code: "NVA", name: "Benito Salas" },
    ] },
  { code: "PEI", name: "Pereira", country: "Colombia", lat: 4.8127, lng: -75.7395, airports: [
      { code: "PEI", name: "Matecaña Intl" },
    ] },
  { code: "PPN", name: "Popayán", country: "Colombia", lat: 2.4544, lng: -76.6093, airports: [
      { code: "PPN", name: "Guillermo León Valencia" },
    ] },
  { code: "PVA", name: "Providencia", country: "Colombia", lat: 13.3575, lng: -81.358, airports: [
      { code: "PVA", name: "El Embrujo" },
    ] },
  { code: "PUU", name: "Puerto Asís", country: "Colombia", lat: 0.5052, lng: -76.5008, airports: [
      { code: "PUU", name: "Tres De Mayo" },
    ] },
  { code: "PCR", name: "Puerto Carreño", country: "Colombia", lat: 6.1847, lng: -67.4932, airports: [
      { code: "PCR", name: "German Olano" },
    ] },
  { code: "PDA", name: "Puerto Inírida", country: "Colombia", lat: 3.8535, lng: -67.9062, airports: [
      { code: "PDA", name: "Obando Cesar Gaviria Trujillo" },
    ] },
  { code: "UIB", name: "Quibdó", country: "Colombia", lat: 5.6908, lng: -76.6412, airports: [
      { code: "UIB", name: "El Caraño" },
    ] },
  { code: "RCH", name: "Riohacha", country: "Colombia", lat: 11.5262, lng: -72.926, airports: [
      { code: "RCH", name: "Almirante Padilla" },
    ] },
  { code: "ADZ", name: "San Andrés", country: "Colombia", lat: 12.5836, lng: -81.7112, airports: [
      { code: "ADZ", name: "Gustavo Rojas Pinilla Intl" },
    ] },
  { code: "SJE", name: "San José Del Guaviare", country: "Colombia", lat: 2.5797, lng: -72.6394, airports: [
      { code: "SJE", name: "Jorge E. Gonzalez Torres" },
    ] },
  { code: "SVI", name: "San Vicente Del Caguán", country: "Colombia", lat: 2.1522, lng: -74.7663, airports: [
      { code: "SVI", name: "Eduardo Falla Solano" },
    ] },
  { code: "SMR", name: "Santa Marta", country: "Colombia", lat: 11.1196, lng: -74.2306, airports: [
      { code: "SMR", name: "Simón Bolívar Intl" },
    ] },
  { code: "TME", name: "Tame", country: "Colombia", lat: 6.4511, lng: -71.7603, airports: [
      { code: "TME", name: "Gustavo Vargas" },
    ] },
  { code: "TCO", name: "Tumaco", country: "Colombia", lat: 1.8144, lng: -78.7492, airports: [
      { code: "TCO", name: "La Florida" },
    ] },
  { code: "VUP", name: "Valledupar", country: "Colombia", lat: 10.435, lng: -73.2495, airports: [
      { code: "VUP", name: "Alfonso López Pumarejo" },
    ] },
  { code: "VVC", name: "Villavicencio", country: "Colombia", lat: 4.1679, lng: -73.6138, airports: [
      { code: "VVC", name: "Vanguardia" },
    ] },
  { code: "EYP", name: "Yopal", country: "Colombia", lat: 5.3191, lng: -72.384, airports: [
      { code: "EYP", name: "El Alcaravan - Yopal" },
    ] },
  { code: "GLF", name: "Golfito", country: "Costa Rica", lat: 8.654, lng: -83.1822, airports: [
      { code: "GLF", name: "Golfito" },
    ] },
  { code: "LIR", name: "Liberia", country: "Costa Rica", lat: 10.5933, lng: -85.5444, airports: [
      { code: "LIR", name: "Guanacaste" },
    ] },
  { code: "NOB", name: "Nicoya", country: "Costa Rica", lat: 9.9765, lng: -85.653, airports: [
      { code: "NOB", name: "Nosara" },
    ] },
  { code: "PJM", name: "Puerto Jimenez", country: "Costa Rica", lat: 8.5333, lng: -83.3, airports: [
      { code: "PJM", name: "Puerto Jimenez" },
    ] },
  { code: "LIO", name: "Puerto Limon", country: "Costa Rica", lat: 9.958, lng: -83.022, airports: [
      { code: "LIO", name: "Limon Intl" },
    ] },
  { code: "XQP", name: "Quepos", country: "Costa Rica", lat: 9.4432, lng: -84.1298, airports: [
      { code: "XQP", name: "Quepos Managua" },
    ] },
  { code: "SYQ", name: "San Jose", country: "Costa Rica", lat: 9.9571, lng: -84.1398, airports: [
      { code: "SYQ", name: "Tobías Bolaños Intl" },
    ] },
  { code: "SJO", name: "San José (Alajuela)", country: "Costa Rica", lat: 9.9939, lng: -84.2088, airports: [
      { code: "SJO", name: "Juan Santamaría Intl" },
    ] },
  { code: "BCA", name: "Baracoa", country: "Cuba", lat: 20.3653, lng: -74.5062, airports: [
      { code: "BCA", name: "Gustavo Rizo" },
    ] },
  { code: "BYM", name: "Bayamo", country: "Cuba", lat: 20.3964, lng: -76.6214, airports: [
      { code: "BYM", name: "Carlos Manuel de Cespedes" },
    ] },
  { code: "CMW", name: "Camaguey", country: "Cuba", lat: 21.4199, lng: -77.848, airports: [
      { code: "CMW", name: "Ignacio Agramonte Intl" },
    ] },
  { code: "CCC", name: "Cayo Coco", country: "Cuba", lat: 22.461, lng: -78.3284, airports: [
      { code: "CCC", name: "Jardines Del Rey" },
    ] },
  { code: "CYO", name: "Cayo Largo del Sur", country: "Cuba", lat: 21.6165, lng: -81.546, airports: [
      { code: "CYO", name: "Vilo Acuña Intl" },
    ] },
  { code: "CFG", name: "Cienfuegos", country: "Cuba", lat: 22.15, lng: -80.4142, airports: [
      { code: "CFG", name: "Jaime Gonzalez" },
    ] },
  { code: "HAV", name: "Havana", country: "Cuba", lat: 22.9892, lng: -82.4091, airports: [
      { code: "HAV", name: "José Martí Intl" },
    ] },
  { code: "HOG", name: "Holguin", country: "Cuba", lat: 20.7851, lng: -76.3155, airports: [
      { code: "HOG", name: "Frank Pais Intl" },
    ] },
  { code: "VTU", name: "Las Tunas", country: "Cuba", lat: 20.9876, lng: -76.9358, airports: [
      { code: "VTU", name: "Hermanos Ameijeiras" },
    ] },
  { code: "MZO", name: "Manzanillo", country: "Cuba", lat: 20.2886, lng: -77.0875, airports: [
      { code: "MZO", name: "Sierra Maestra Intl" },
    ] },
  { code: "VRA", name: "Matanzas", country: "Cuba", lat: 23.0344, lng: -81.4353, airports: [
      { code: "VRA", name: "Juan Gualberto Gomez Intl" },
    ] },
  { code: "GER", name: "Nueva Gerona", country: "Cuba", lat: 21.8347, lng: -82.7838, airports: [
      { code: "GER", name: "Rafael Cabrera" },
    ] },
  { code: "SNU", name: "Santa Clara", country: "Cuba", lat: 22.4922, lng: -79.9431, airports: [
      { code: "SNU", name: "Abel Santamaria Intl" },
    ] },
  { code: "SCU", name: "Santiago", country: "Cuba", lat: 19.9747, lng: -75.8355, airports: [
      { code: "SCU", name: "Antonio Maceo Intl" },
    ] },
  { code: "TND", name: "Trinidad", country: "Cuba", lat: 21.7883, lng: -79.9972, airports: [
      { code: "TND", name: "Alberto Delgado" },
    ] },
  { code: "SID", name: "Espargos", country: "Cape Verde", lat: 16.7414, lng: -22.9494, airports: [
      { code: "SID", name: "Amílcar Cabral Intl" },
    ] },
  { code: "RAI", name: "Praia", country: "Cape Verde", lat: 14.9411, lng: -23.4847, airports: [
      { code: "RAI", name: "Nelson Mandela Intl" },
    ] },
  { code: "SNE", name: "Preguiça", country: "Cape Verde", lat: 16.5889, lng: -24.2841, airports: [
      { code: "SNE", name: "Preguiça" },
    ] },
  { code: "BVC", name: "Rabil", country: "Cape Verde", lat: 16.1365, lng: -22.8889, airports: [
      { code: "BVC", name: "Aristides Pereira Intl" },
    ] },
  { code: "VXE", name: "São Pedro", country: "Cape Verde", lat: 16.8334, lng: -25.0553, airports: [
      { code: "VXE", name: "Cesaria Evora Intl" },
    ] },
  { code: "MMO", name: "Vila do Maio", country: "Cape Verde", lat: 15.1559, lng: -23.2137, airports: [
      { code: "MMO", name: "Maio" },
    ] },
  { code: "CUR", name: "Willemstad", country: "Curaçao", lat: 12.1889, lng: -68.9598, airports: [
      { code: "CUR", name: "Hato Intl" },
    ] },
  { code: "XCH", name: "Flying Fish Cove", country: "CX", lat: -10.4504, lng: 105.6911, airports: [
      { code: "XCH", name: "Christmas Island Intl" },
    ] },
  { code: "LCA", name: "Larnaca", country: "Cyprus", lat: 34.8751, lng: 33.6249, airports: [
      { code: "LCA", name: "Larnaca Intl" },
    ] },
  { code: "GEC", name: "Lefkoniko (Geçitkale)", country: "Cyprus", lat: 35.2359, lng: 33.7201, airports: [
      { code: "GEC", name: "Lefkoniko Airport / Geçitkale" },
    ] },
  { code: "PFO", name: "Paphos", country: "Cyprus", lat: 34.718, lng: 32.4857, airports: [
      { code: "PFO", name: "Paphos Intl" },
    ] },
  { code: "ECN", name: "Tymbou (Kirklar)", country: "Cyprus", lat: 35.1531, lng: 33.5074, airports: [
      { code: "ECN", name: "Ercan Intl" },
    ] },
  { code: "BRQ", name: "Brno", country: "Czech Republic", lat: 49.1513, lng: 16.694, airports: [
      { code: "BRQ", name: "Brno-Tuřany" },
    ] },
  { code: "JCL", name: "České Budějovice", country: "Czech Republic", lat: 48.9482, lng: 14.4283, airports: [
      { code: "JCL", name: "České Budějovice South Bohemian" },
    ] },
  { code: "KLV", name: "Karlovy Vary", country: "Czech Republic", lat: 50.203, lng: 12.915, airports: [
      { code: "KLV", name: "Karlovy Vary" },
    ] },
  { code: "OSR", name: "Mošnov", country: "Czech Republic", lat: 49.6963, lng: 18.1111, airports: [
      { code: "OSR", name: "Leoš Janáček Airport Ostrava" },
    ] },
  { code: "PED", name: "Pardubice", country: "Czech Republic", lat: 50.015, lng: 15.7398, airports: [
      { code: "PED", name: "Pardubice" },
    ] },
  { code: "PRG", name: "Prague", country: "Czech Republic", lat: 50.1009, lng: 14.2599, airports: [
      { code: "PRG", name: "Václav Havel Airport Prague" },
    ] },
  { code: "BER", name: "Berlin", country: "Germany", lat: 52.3617, lng: 13.5023, airports: [
      { code: "BER", name: "Berlin Brandenburg Willy Brandt" },
    ], keywords: ["germany", "brandenburg"] },
  { code: "BRE", name: "Bremen", country: "Germany", lat: 53.0468, lng: 8.7893, airports: [
      { code: "BRE", name: "Bremen" },
    ] },
  { code: "PAD", name: "Büren", country: "Germany", lat: 51.6125, lng: 8.6175, airports: [
      { code: "PAD", name: "Paderborn Lippstadt" },
    ] },
  { code: "KSF", name: "Calden", country: "Germany", lat: 51.4184, lng: 9.3916, airports: [
      { code: "KSF", name: "Kassel" },
    ] },
  { code: "DTM", name: "Dortmund", country: "Germany", lat: 51.5183, lng: 7.6122, airports: [
      { code: "DTM", name: "Dortmund" },
    ] },
  { code: "DRS", name: "Dresden", country: "Germany", lat: 51.1341, lng: 13.7678, airports: [
      { code: "DRS", name: "Dresden" },
    ] },
  { code: "DUS", name: "Düsseldorf / Cologne", country: "Germany", lat: 51.2895, lng: 6.7668, airports: [
      { code: "DUS", name: "Düsseldorf" },
      { code: "CGN", name: "Cologne Bonn" },
    ], keywords: ["cologne", "koln", "dusseldorf", "germany"] },
  { code: "ERF", name: "Erfurt", country: "Germany", lat: 50.9783, lng: 10.9607, airports: [
      { code: "ERF", name: "Erfurt-Weimar" },
    ] },
  { code: "FRA", name: "Frankfurt", country: "Germany", lat: 50.0302, lng: 8.5611, airports: [
      { code: "FRA", name: "Frankfurt" },
      { code: "HHN", name: "Frankfurt-Hahn" },
    ], keywords: ["hahn", "germany", "fra"] },
  { code: "FDH", name: "Friedrichshafen", country: "Germany", lat: 47.6713, lng: 9.5115, airports: [
      { code: "FDH", name: "Bodensee Airport Friedrichshafen" },
    ] },
  { code: "FMO", name: "Greven", country: "Germany", lat: 52.1338, lng: 7.6885, airports: [
      { code: "FMO", name: "Münster Osnabrück" },
    ] },
  { code: "HAM", name: "Hamburg", country: "Germany", lat: 53.6304, lng: 9.9882, airports: [
      { code: "HAM", name: "Hamburg Helmut Schmidt" },
    ] },
  { code: "HAJ", name: "Hannover", country: "Germany", lat: 52.4611, lng: 9.6851, airports: [
      { code: "HAJ", name: "Hannover" },
    ] },
  { code: "RLG", name: "Laage", country: "Germany", lat: 53.9182, lng: 12.2783, airports: [
      { code: "RLG", name: "Rostock-Laage" },
    ] },
  { code: "LBC", name: "Lübeck", country: "Germany", lat: 53.8054, lng: 10.7192, airports: [
      { code: "LBC", name: "Lübeck Blankensee" },
    ] },
  { code: "MHG", name: "Mannheim", country: "Germany", lat: 49.4731, lng: 8.5142, airports: [
      { code: "MHG", name: "Mannheim-City" },
    ] },
  { code: "FMM", name: "Memmingen", country: "Germany", lat: 47.9881, lng: 10.2382, airports: [
      { code: "FMM", name: "Memmingen Allgau" },
    ] },
  { code: "MUC", name: "Munich", country: "Germany", lat: 48.3538, lng: 11.7861, airports: [
      { code: "MUC", name: "Munich" },
    ] },
  { code: "NUE", name: "Nuremberg", country: "Germany", lat: 49.4987, lng: 11.0781, airports: [
      { code: "NUE", name: "Nuremberg" },
    ] },
  { code: "FKB", name: "Rheinmünster", country: "Germany", lat: 48.7794, lng: 8.0805, airports: [
      { code: "FKB", name: "Karlsruhe Baden-Baden" },
    ] },
  { code: "SCN", name: "Saarbrücken", country: "Germany", lat: 49.2176, lng: 7.1117, airports: [
      { code: "SCN", name: "Saarbrücken" },
    ] },
  { code: "LEJ", name: "Schkeuditz", country: "Germany", lat: 51.4207, lng: 12.2327, airports: [
      { code: "LEJ", name: "Leipzig/Halle" },
    ] },
  { code: "STR", name: "Stuttgart", country: "Germany", lat: 48.6899, lng: 9.222, airports: [
      { code: "STR", name: "Stuttgart" },
    ] },
  { code: "GWT", name: "Sylt", country: "Germany", lat: 54.9132, lng: 8.3405, airports: [
      { code: "GWT", name: "Westerland Sylt" },
    ] },
  { code: "NRN", name: "Weeze", country: "Germany", lat: 51.6014, lng: 6.1412, airports: [
      { code: "NRN", name: "Weeze (Niederrhein)" },
    ] },
  { code: "FCN", name: "Wurster Nordseeküste", country: "Germany", lat: 53.7677, lng: 8.6592, airports: [
      { code: "FCN", name: "Sea-Airport Cuxhaven/Nordholz / Nordholz Naval Airbase" },
    ] },
  { code: "HDF", name: "Zirchow", country: "Germany", lat: 53.8787, lng: 14.1523, airports: [
      { code: "HDF", name: "Heringsdorf" },
    ] },
  { code: "JIB", name: "Djibouti City", country: "Djibouti", lat: 11.5473, lng: 43.1595, airports: [
      { code: "JIB", name: "Djibouti-Ambouli" },
    ] },
  { code: "AAL", name: "Aalborg", country: "Denmark", lat: 57.0948, lng: 9.8499, airports: [
      { code: "AAL", name: "Aalborg" },
    ] },
  { code: "AAR", name: "Aarhus", country: "Denmark", lat: 56.3033, lng: 10.6183, airports: [
      { code: "AAR", name: "Aarhus" },
    ] },
  { code: "BLL", name: "Billund", country: "Denmark", lat: 55.7403, lng: 9.157, airports: [
      { code: "BLL", name: "Billund" },
    ] },
  { code: "CPH", name: "Copenhagen", country: "Denmark", lat: 55.6179, lng: 12.656, airports: [
      { code: "CPH", name: "Copenhagen Kastrup" },
      { code: "MMX", name: "Malmö Sturup" },
    ], keywords: ["kobenhavn", "kastrup", "denmark", "cph"] },
  { code: "EBJ", name: "Esbjerg", country: "Denmark", lat: 55.5259, lng: 8.5534, airports: [
      { code: "EBJ", name: "Esbjerg" },
    ] },
  { code: "KRP", name: "Karup", country: "Denmark", lat: 56.2971, lng: 9.1043, airports: [
      { code: "KRP", name: "Midtjyllands Airport / Air Base Karup" },
    ] },
  { code: "ODE", name: "Odense", country: "Denmark", lat: 55.4753, lng: 10.3272, airports: [
      { code: "ODE", name: "Odense Hans Christian Andersen" },
    ] },
  { code: "RNN", name: "Rønne", country: "Denmark", lat: 55.0633, lng: 14.7596, airports: [
      { code: "RNN", name: "Bornholm" },
    ] },
  { code: "RKE", name: "Roskilde", country: "Denmark", lat: 55.5856, lng: 12.1314, airports: [
      { code: "RKE", name: "Copenhagen Roskilde" },
    ] },
  { code: "SGD", name: "Sønderborg", country: "Denmark", lat: 54.9644, lng: 9.7917, airports: [
      { code: "SGD", name: "Sønderborg" },
    ] },
  { code: "DCF", name: "Canefield", country: "Dominica", lat: 15.3367, lng: -61.3921, airports: [
      { code: "DCF", name: "Canefield" },
    ] },
  { code: "DOM", name: "Marigot", country: "Dominica", lat: 15.5464, lng: -61.3005, airports: [
      { code: "DOM", name: "Douglas-Charles" },
    ] },
  { code: "BRX", name: "Barahona", country: "Dominican Republic", lat: 18.2515, lng: -71.1204, airports: [
      { code: "BRX", name: "Maria Montez Intl" },
    ] },
  { code: "JBQ", name: "La Isabela", country: "Dominican Republic", lat: 18.5725, lng: -69.9856, airports: [
      { code: "JBQ", name: "La Isabela Intl" },
    ] },
  { code: "LRM", name: "La Romana", country: "Dominican Republic", lat: 18.4522, lng: -68.9111, airports: [
      { code: "LRM", name: "Casa De Campo Intl" },
    ] },
  { code: "POP", name: "Puerto Plata", country: "Dominican Republic", lat: 19.7579, lng: -70.57, airports: [
      { code: "POP", name: "Gregorio Luperon Intl" },
    ] },
  { code: "PUJ", name: "Punta Cana", country: "Dominican Republic", lat: 18.5671, lng: -68.3646, airports: [
      { code: "PUJ", name: "Punta Cana Intl" },
    ] },
  { code: "AZS", name: "Samana", country: "Dominican Republic", lat: 19.2693, lng: -69.7374, airports: [
      { code: "AZS", name: "Samaná El Catey Intl" },
    ] },
  { code: "STI", name: "Santiago", country: "Dominican Republic", lat: 19.4041, lng: -70.6044, airports: [
      { code: "STI", name: "Cibao Intl" },
    ] },
  { code: "SDQ", name: "Santo Domingo", country: "Dominican Republic", lat: 18.4297, lng: -69.6689, airports: [
      { code: "SDQ", name: "Las Américas Intl" },
    ] },
  { code: "AZR", name: "Adrar", country: "Algeria", lat: 27.8376, lng: -0.1864, airports: [
      { code: "AZR", name: "Touat-Cheikh Sidi Mohamed Belkebir" },
    ] },
  { code: "ALG", name: "Algiers", country: "Algeria", lat: 36.6939, lng: 3.2145, airports: [
      { code: "ALG", name: "Houari Boumediene" },
    ] },
  { code: "AAE", name: "Annaba", country: "Algeria", lat: 36.8268, lng: 7.8133, airports: [
      { code: "AAE", name: "Annaba Rabah Bitat" },
    ] },
  { code: "BLJ", name: "Batna", country: "Algeria", lat: 35.7521, lng: 6.3086, airports: [
      { code: "BLJ", name: "Batna Mostefa Ben Boulaid" },
    ] },
  { code: "CBH", name: "Béchar", country: "Algeria", lat: 31.6457, lng: -2.2699, airports: [
      { code: "CBH", name: "Béchar Boudghene Ben Ali Lotfi" },
    ] },
  { code: "BJA", name: "Béjaïa", country: "Algeria", lat: 36.7125, lng: 5.0699, airports: [
      { code: "BJA", name: "Soummam–Abane Ramdane" },
    ] },
  { code: "BSK", name: "Biskra", country: "Algeria", lat: 34.7932, lng: 5.7389, airports: [
      { code: "BSK", name: "Biskra - Mohamed Khider" },
    ] },
  { code: "CFK", name: "Chlef", country: "Algeria", lat: 36.2166, lng: 1.3411, airports: [
      { code: "CFK", name: "Chlef Aboubakr Belkaid Intl" },
    ] },
  { code: "CZL", name: "Constantine", country: "Algeria", lat: 36.276, lng: 6.6204, airports: [
      { code: "CZL", name: "Mohamed Boudiaf Intl" },
    ] },
  { code: "DJG", name: "Djanet", country: "Algeria", lat: 24.2854, lng: 9.4637, airports: [
      { code: "DJG", name: "Djanet Inedbirene" },
    ] },
  { code: "GHA", name: "El Atteuf", country: "Algeria", lat: 32.3841, lng: 3.7941, airports: [
      { code: "GHA", name: "Noumérat - Moufdi Zakaria" },
    ] },
  { code: "ELG", name: "El Menia", country: "Algeria", lat: 30.5807, lng: 2.8616, airports: [
      { code: "ELG", name: "El Golea" },
    ] },
  { code: "ORN", name: "Es-Sénia", country: "Algeria", lat: 35.6206, lng: -0.6225, airports: [
      { code: "ORN", name: "Oran Es-Sénia (Ahmed Ben Bella) Intl" },
    ] },
  { code: "ELU", name: "Guemar", country: "Algeria", lat: 33.5114, lng: 6.7768, airports: [
      { code: "ELU", name: "Guemar Airport - مطار قمار بالوادي" },
    ] },
  { code: "HME", name: "Hassi Messaoud", country: "Algeria", lat: 31.673, lng: 6.1404, airports: [
      { code: "HME", name: "Hassi Messaoud-Oued Irara Krim Belkacem" },
    ] },
  { code: "VVZ", name: "Illizi", country: "Algeria", lat: 26.7235, lng: 8.6227, airports: [
      { code: "VVZ", name: "Illizi Takhamalt" },
    ] },
  { code: "IAM", name: "In Aménas", country: "Algeria", lat: 28.0515, lng: 9.6429, airports: [
      { code: "IAM", name: "Zarzaitine - In Aménas" },
    ] },
  { code: "INZ", name: "In Salah", country: "Algeria", lat: 27.251, lng: 2.512, airports: [
      { code: "INZ", name: "In Salah" },
    ] },
  { code: "OGX", name: "Ouargla", country: "Algeria", lat: 31.9172, lng: 5.4128, airports: [
      { code: "OGX", name: "Ain Beida" },
    ] },
  { code: "QSF", name: "Sétif", country: "Algeria", lat: 36.1785, lng: 5.3299, airports: [
      { code: "QSF", name: "Ain Arnat" },
    ] },
  { code: "GJL", name: "Tahir", country: "Algeria", lat: 36.7941, lng: 5.8737, airports: [
      { code: "GJL", name: "Jijel Ferhat Abbas" },
    ] },
  { code: "TMR", name: "Tamanrasset", country: "Algeria", lat: 22.8115, lng: 5.4511, airports: [
      { code: "TMR", name: "Aguenar – Hadj Bey Akhamok" },
    ] },
  { code: "TEE", name: "Tébessi", country: "Algeria", lat: 35.4316, lng: 8.1207, airports: [
      { code: "TEE", name: "Cheikh Larbi Tébessi" },
    ] },
  { code: "TMX", name: "Timimoun", country: "Algeria", lat: 29.2371, lng: 0.276, airports: [
      { code: "TMX", name: "Timimoun" },
    ] },
  { code: "TIN", name: "Tindouf", country: "Algeria", lat: 27.7004, lng: -8.1671, airports: [
      { code: "TIN", name: "Tindouf" },
    ] },
  { code: "TGR", name: "Touggourt", country: "Algeria", lat: 33.0678, lng: 6.0887, airports: [
      { code: "TGR", name: "Touggourt Sidi Madhi" },
    ] },
  { code: "TLM", name: "Zenata", country: "Algeria", lat: 35.0127, lng: -1.4571, airports: [
      { code: "TLM", name: "Zenata – Messali El Hadj" },
    ] },
  { code: "OCC", name: "Coca", country: "Ecuador", lat: -0.4629, lng: -76.9868, airports: [
      { code: "OCC", name: "Francisco De Orellana" },
    ] },
  { code: "CUE", name: "Cuenca", country: "Ecuador", lat: -2.8895, lng: -78.9844, airports: [
      { code: "CUE", name: "Mariscal Lamar" },
    ] },
  { code: "GYE", name: "Guayaquil", country: "Ecuador", lat: -2.1574, lng: -79.8836, airports: [
      { code: "GYE", name: "José Joaquín de Olmedo Intl" },
    ] },
  { code: "GPS", name: "Isla Baltra", country: "Ecuador", lat: -0.4538, lng: -90.2659, airports: [
      { code: "GPS", name: "Seymour Galapagos Ecological" },
    ] },
  { code: "LTX", name: "Latacunga", country: "Ecuador", lat: -0.9068, lng: -78.6158, airports: [
      { code: "LTX", name: "Cotopaxi Intl" },
    ] },
  { code: "XMS", name: "Macas", country: "Ecuador", lat: -2.2992, lng: -78.1208, airports: [
      { code: "XMS", name: "Coronel E Carvajal" },
    ] },
  { code: "MEC", name: "Manta", country: "Ecuador", lat: -0.9461, lng: -80.6788, airports: [
      { code: "MEC", name: "Eloy Alfaro Intl" },
    ] },
  { code: "UIO", name: "Quito", country: "Ecuador", lat: -0.1254, lng: -78.3543, airports: [
      { code: "UIO", name: "Mariscal Sucre Intl" },
    ] },
  { code: "SNC", name: "Salinas/La Libertad", country: "Ecuador", lat: -2.2101, lng: -80.9851, airports: [
      { code: "SNC", name: "General Ulpiano Paez Intl" },
    ] },
  { code: "ETR", name: "Santa Rosa", country: "Ecuador", lat: -3.442, lng: -79.997, airports: [
      { code: "ETR", name: "Santa Rosa - Artillery Colonel Victor Larrea Intl" },
    ] },
  { code: "ESM", name: "Tachina", country: "Ecuador", lat: 0.9785, lng: -79.6266, airports: [
      { code: "ESM", name: "Carlos Concha Torres Intl" },
    ] },
  { code: "TUA", name: "Tulcán", country: "Ecuador", lat: 0.8095, lng: -77.7081, airports: [
      { code: "TUA", name: "Lieutenant Colonel Luis A. Mantilla Intl" },
    ] },
  { code: "KDL", name: "Kärdla", country: "Estonia", lat: 58.9908, lng: 22.8307, airports: [
      { code: "KDL", name: "Kärdla" },
    ] },
  { code: "URE", name: "Kuressaare", country: "Estonia", lat: 58.2299, lng: 22.5095, airports: [
      { code: "URE", name: "Kuressaare" },
    ] },
  { code: "EPU", name: "Pärnu", country: "Estonia", lat: 58.419, lng: 24.4728, airports: [
      { code: "EPU", name: "Pärnu" },
    ] },
  { code: "TLL", name: "Tallinn", country: "Estonia", lat: 59.4132, lng: 24.8326, airports: [
      { code: "TLL", name: "Lennart Meri Tallinn" },
    ] },
  { code: "TAY", name: "Tartu", country: "Estonia", lat: 58.3074, lng: 26.6865, airports: [
      { code: "TAY", name: "Tartu" },
    ] },
  { code: "ABS", name: "Abu Simbel", country: "Egypt", lat: 22.3744, lng: 31.6099, airports: [
      { code: "ABS", name: "Abu Simbel" },
    ] },
  { code: "SPX", name: "Al Jiza", country: "Egypt", lat: 30.1082, lng: 30.8957, airports: [
      { code: "SPX", name: "Sphinx Intl" },
    ] },
  { code: "HBE", name: "Alexandria", country: "Egypt", lat: 30.9325, lng: 29.6964, airports: [
      { code: "HBE", name: "Alexandria Intl" },
    ] },
  { code: "ASW", name: "Aswan", country: "Egypt", lat: 23.9611, lng: 32.8204, airports: [
      { code: "ASW", name: "Aswan Intl" },
    ] },
  { code: "ATZ", name: "Asyut", country: "Egypt", lat: 27.046, lng: 31.0128, airports: [
      { code: "ATZ", name: "Asyut Intl" },
    ] },
  { code: "CAI", name: "Cairo", country: "Egypt", lat: 30.1115, lng: 31.3967, airports: [
      { code: "CAI", name: "Cairo Intl" },
    ], keywords: ["egypt", "cai"] },
  { code: "DBB", name: "El Alamein", country: "Egypt", lat: 30.9243, lng: 28.4616, airports: [
      { code: "DBB", name: "El Alamein Intl" },
    ] },
  { code: "AAC", name: "El Arish", country: "Egypt", lat: 31.0553, lng: 33.828, airports: [
      { code: "AAC", name: "El Arish Intl" },
    ] },
  { code: "HRG", name: "Hurghada", country: "Egypt", lat: 27.1768, lng: 33.7967, airports: [
      { code: "HRG", name: "Hurghada Intl" },
    ] },
  { code: "LXR", name: "Luxor", country: "Egypt", lat: 25.671, lng: 32.7064, airports: [
      { code: "LXR", name: "Luxor Intl" },
    ] },
  { code: "RMF", name: "Marsa Alam", country: "Egypt", lat: 25.5555, lng: 34.5925, airports: [
      { code: "RMF", name: "Marsa Alam Intl" },
    ] },
  { code: "MUH", name: "Marsa Matruh", country: "Egypt", lat: 31.3243, lng: 27.2223, airports: [
      { code: "MUH", name: "Mersa Matruh Intl" },
    ] },
  { code: "PSD", name: "Port Said", country: "Egypt", lat: 31.2793, lng: 32.2406, airports: [
      { code: "PSD", name: "Port Said Intl" },
    ] },
  { code: "SKV", name: "Saint Catherine", country: "Egypt", lat: 28.6843, lng: 34.0644, airports: [
      { code: "SKV", name: "Saint Catherine Intl" },
    ] },
  { code: "SSH", name: "Sharm El Sheikh", country: "Egypt", lat: 27.9773, lng: 34.3947, airports: [
      { code: "SSH", name: "Sharm El Sheikh Intl" },
    ] },
  { code: "HMB", name: "Suhaj", country: "Egypt", lat: 26.3425, lng: 31.743, airports: [
      { code: "HMB", name: "Sohag Intl" },
    ] },
  { code: "TCP", name: "Taba", country: "Egypt", lat: 29.5945, lng: 34.7758, airports: [
      { code: "TCP", name: "Taba Intl" },
    ] },
  { code: "VIL", name: "Dakhla", country: "EH", lat: 23.7183, lng: -15.932, airports: [
      { code: "VIL", name: "Dakhla" },
    ] },
  { code: "EUN", name: "El Aaiún", country: "EH", lat: 27.1425, lng: -13.2249, airports: [
      { code: "EUN", name: "Laayoune Hassan I Intl" },
    ] },
  { code: "ASM", name: "Asmara", country: "Eritrea", lat: 15.2919, lng: 38.9107, airports: [
      { code: "ASM", name: "Asmara Intl" },
    ] },
  { code: "ASA", name: "Assab", country: "Eritrea", lat: 13.0718, lng: 42.645, airports: [
      { code: "ASA", name: "Assab Intl" },
    ] },
  { code: "MSW", name: "Massawa", country: "Eritrea", lat: 15.67, lng: 39.3701, airports: [
      { code: "MSW", name: "Massawa Intl" },
    ] },
  { code: "VIT", name: "Alava", country: "Spain", lat: 42.8828, lng: -2.7245, airports: [
      { code: "VIT", name: "Vitoria" },
    ] },
  { code: "ALC", name: "Alicante", country: "Spain", lat: 38.2822, lng: -0.5582, airports: [
      { code: "ALC", name: "Alicante-Elche Miguel Hernández" },
    ] },
  { code: "LEI", name: "Almería", country: "Spain", lat: 36.8439, lng: -2.3701, airports: [
      { code: "LEI", name: "Almería" },
    ] },
  { code: "BJZ", name: "Badajoz", country: "Spain", lat: 38.8913, lng: -6.8213, airports: [
      { code: "BJZ", name: "Badajoz" },
    ] },
  { code: "BCN", name: "Barcelona", country: "Spain", lat: 41.2971, lng: 2.0785, airports: [
      { code: "BCN", name: "Josep Tarradellas Barcelona-El Prat" },
    ], keywords: ["spain", "el prat", "bcn"] },
  { code: "BIO", name: "Bilbao", country: "Spain", lat: 43.3011, lng: -2.9106, airports: [
      { code: "BIO", name: "Bilbao" },
    ] },
  { code: "CDT", name: "Castellón de la Plana", country: "Spain", lat: 40.2139, lng: 0.0733, airports: [
      { code: "CDT", name: "Castellón-Costa Azahar" },
    ] },
  { code: "RMU", name: "Corvera", country: "Spain", lat: 37.8029, lng: -1.1249, airports: [
      { code: "RMU", name: "Region of Murcia Intl" },
    ] },
  { code: "LCG", name: "Culleredo", country: "Spain", lat: 43.3021, lng: -8.3773, airports: [
      { code: "LCG", name: "A Coruña" },
    ] },
  { code: "VDE", name: "El Hierro Island", country: "Spain", lat: 27.8148, lng: -17.8871, airports: [
      { code: "VDE", name: "El Hierro" },
    ] },
  { code: "FUE", name: "El Matorral", country: "Spain", lat: 28.4527, lng: -13.8638, airports: [
      { code: "FUE", name: "Fuerteventura" },
    ] },
  { code: "GRO", name: "Girona", country: "Spain", lat: 41.9046, lng: 2.7618, airports: [
      { code: "GRO", name: "Girona-Costa Brava" },
    ] },
  { code: "LPA", name: "Gran Canaria Island", country: "Spain", lat: 27.9319, lng: -15.3866, airports: [
      { code: "LPA", name: "Gran Canaria" },
    ] },
  { code: "GRX", name: "Granada", country: "Spain", lat: 37.1887, lng: -3.7774, airports: [
      { code: "GRX", name: "F.G.L. Airport Granada-Jaén" },
    ] },
  { code: "EAS", name: "Hondarribia", country: "Spain", lat: 43.3565, lng: -1.7906, airports: [
      { code: "EAS", name: "San Sebastián" },
    ] },
  { code: "IBZ", name: "Ibiza (Eivissa)", country: "Spain", lat: 38.8729, lng: 1.3731, airports: [
      { code: "IBZ", name: "Ibiza" },
    ] },
  { code: "XRY", name: "Jerez de la Frontera", country: "Spain", lat: 36.7446, lng: -6.0601, airports: [
      { code: "XRY", name: "Jerez" },
    ] },
  { code: "LEU", name: "La Seu d'Urgell Pyrenees and Andorra", country: "Spain", lat: 42.3386, lng: 1.4092, airports: [
      { code: "LEU", name: "Pirineus - la Seu d'Urgel" },
    ] },
  { code: "LEN", name: "La Virgen Del Camino", country: "Spain", lat: 42.5907, lng: -5.6534, airports: [
      { code: "LEN", name: "León Int'l" },
    ] },
  { code: "ILD", name: "Lleida", country: "Spain", lat: 41.7282, lng: 0.535, airports: [
      { code: "ILD", name: "Lleida-Alguaire" },
    ] },
  { code: "MAD", name: "Madrid", country: "Spain", lat: 40.4719, lng: -3.5626, airports: [
      { code: "MAD", name: "Adolfo Suárez Madrid–Barajas" },
    ], keywords: ["spain", "barajas", "mad"] },
  { code: "MAH", name: "Mahón (Maó)", country: "Spain", lat: 39.8626, lng: 4.2187, airports: [
      { code: "MAH", name: "Menorca" },
    ] },
  { code: "AGP", name: "Málaga", country: "Spain", lat: 36.6749, lng: -4.4991, airports: [
      { code: "AGP", name: "Málaga-Costa del Sol" },
    ] },
  { code: "MLN", name: "Melilla", country: "Spain", lat: 35.2798, lng: -2.9563, airports: [
      { code: "MLN", name: "Melilla" },
    ] },
  { code: "PMI", name: "Palma de Mallorca", country: "Spain", lat: 39.5517, lng: 2.7388, airports: [
      { code: "PMI", name: "Palma de Mallorca" },
    ] },
  { code: "PNA", name: "Pamplona", country: "Spain", lat: 42.77, lng: -1.6463, airports: [
      { code: "PNA", name: "Pamplona" },
    ] },
  { code: "OVD", name: "Ranón", country: "Spain", lat: 43.5636, lng: -6.0346, airports: [
      { code: "OVD", name: "Asturias" },
    ] },
  { code: "REU", name: "Reus", country: "Spain", lat: 41.1475, lng: 1.1684, airports: [
      { code: "REU", name: "Reus" },
    ] },
  { code: "SLM", name: "Salamanca", country: "Spain", lat: 40.9521, lng: -5.502, airports: [
      { code: "SLM", name: "Salamanca" },
    ] },
  { code: "ACE", name: "San Bartolomé", country: "Spain", lat: 28.9455, lng: -13.6052, airports: [
      { code: "ACE", name: "César Manrique-Lanzarote" },
    ] },
  { code: "SDR", name: "Santander", country: "Spain", lat: 43.4271, lng: -3.82, airports: [
      { code: "SDR", name: "Seve Ballesteros-Santander" },
    ] },
  { code: "SCQ", name: "Santiago de Compostela", country: "Spain", lat: 42.8963, lng: -8.4151, airports: [
      { code: "SCQ", name: "Santiago-Rosalía de Castro" },
    ] },
  { code: "SVQ", name: "Seville", country: "Spain", lat: 37.418, lng: -5.8931, airports: [
      { code: "SVQ", name: "Seville" },
    ] },
  { code: "SPC", name: "Sta Cruz de la Palma, La Palma Island", country: "Spain", lat: 28.6265, lng: -17.7556, airports: [
      { code: "SPC", name: "La Palma" },
    ] },
  { code: "TFN", name: "Tenerife", country: "Spain", lat: 28.0445, lng: -16.5725, airports: [
      { code: "TFN", name: "Tenerife Norte-Ciudad de La Laguna" },
      { code: "TFS", name: "Tenerife Sur" },
    ] },
  { code: "VLC", name: "Valencia", country: "Spain", lat: 39.4893, lng: -0.4816, airports: [
      { code: "VLC", name: "Valencia" },
    ] },
  { code: "VLL", name: "Valladolid", country: "Spain", lat: 41.7061, lng: -4.8519, airports: [
      { code: "VLL", name: "Valladolid" },
    ] },
  { code: "VGO", name: "Vigo", country: "Spain", lat: 42.2318, lng: -8.6268, airports: [
      { code: "VGO", name: "Vigo" },
    ] },
  { code: "ZAZ", name: "Zaragoza", country: "Spain", lat: 41.6662, lng: -1.0415, airports: [
      { code: "ZAZ", name: "Zaragoza" },
    ] },
  { code: "ADD", name: "Addis Ababa", country: "Ethiopia", lat: 8.9779, lng: 38.7993, airports: [
      { code: "ADD", name: "Addis Ababa Bole Intl" },
    ] },
  { code: "AMH", name: "Arba Minch", country: "Ethiopia", lat: 6.0394, lng: 37.5905, airports: [
      { code: "AMH", name: "Arba Minch" },
    ] },
  { code: "ASO", name: "Asosa", country: "Ethiopia", lat: 10.0185, lng: 34.5863, airports: [
      { code: "ASO", name: "Asosa" },
    ] },
  { code: "AXU", name: "Axum", country: "Ethiopia", lat: 14.1468, lng: 38.7728, airports: [
      { code: "AXU", name: "Axum" },
    ] },
  { code: "GDQ", name: "Azezo", country: "Ethiopia", lat: 12.5199, lng: 37.434, airports: [
      { code: "GDQ", name: "Gondar" },
    ] },
  { code: "BJR", name: "Bahir Dar", country: "Ethiopia", lat: 11.6081, lng: 37.3216, airports: [
      { code: "BJR", name: "Bahir Dar" },
    ] },
  { code: "DIR", name: "Dire Dawa", country: "Ethiopia", lat: 9.6235, lng: 41.855, airports: [
      { code: "DIR", name: "Aba Tenna Dejazmach Yilma Intl" },
    ] },
  { code: "GMB", name: "Gambela", country: "Ethiopia", lat: 8.1288, lng: 34.5631, airports: [
      { code: "GMB", name: "Gambela" },
    ] },
  { code: "GDE", name: "Gode", country: "Ethiopia", lat: 5.9351, lng: 43.5786, airports: [
      { code: "GDE", name: "Gode" },
    ] },
  { code: "AWA", name: "Hawassa", country: "Ethiopia", lat: 7.1006, lng: 38.3965, airports: [
      { code: "AWA", name: "Hawassa Intl" },
    ] },
  { code: "JIJ", name: "Jijiga", country: "Ethiopia", lat: 9.3319, lng: 42.9118, airports: [
      { code: "JIJ", name: "Gerad Wilwal Intl" },
    ] },
  { code: "JIM", name: "Jimma", country: "Ethiopia", lat: 7.6661, lng: 36.8166, airports: [
      { code: "JIM", name: "Jimma" },
    ] },
  { code: "ABK", name: "Kebri Dahar", country: "Ethiopia", lat: 6.7326, lng: 44.2413, airports: [
      { code: "ABK", name: "Kebri Dahar" },
    ] },
  { code: "MQX", name: "Mekele", country: "Ethiopia", lat: 13.4674, lng: 39.5335, airports: [
      { code: "MQX", name: "Alula Aba Nega" },
    ] },
  { code: "ENF", name: "Enontekio", country: "Finland", lat: 68.3626, lng: 23.4243, airports: [
      { code: "ENF", name: "Enontekio" },
    ] },
  { code: "HEL", name: "Helsinki (Vantaa)", country: "Finland", lat: 60.3184, lng: 24.9633, airports: [
      { code: "HEL", name: "Helsinki Vantaa" },
    ] },
  { code: "IVL", name: "Ivalo", country: "Finland", lat: 68.6073, lng: 27.4053, airports: [
      { code: "IVL", name: "Ivalo" },
    ] },
  { code: "JOE", name: "Joensuu", country: "Finland", lat: 62.6588, lng: 29.6194, airports: [
      { code: "JOE", name: "Joensuu" },
    ] },
  { code: "JYV", name: "Jyväskylän Maalaiskunta", country: "Finland", lat: 62.3995, lng: 25.6783, airports: [
      { code: "JYV", name: "Jyväskylä" },
    ] },
  { code: "KAJ", name: "Kajaani", country: "Finland", lat: 64.2855, lng: 27.6924, airports: [
      { code: "KAJ", name: "Kajaani" },
    ] },
  { code: "KEM", name: "Kemi / Tornio", country: "Finland", lat: 65.7787, lng: 24.5821, airports: [
      { code: "KEM", name: "Kemi-Tornio" },
    ] },
  { code: "KTT", name: "Kittilä", country: "Finland", lat: 67.701, lng: 24.8468, airports: [
      { code: "KTT", name: "Kittilä Intl" },
    ] },
  { code: "KOK", name: "Kokkola / Kruunupyy", country: "Finland", lat: 63.7212, lng: 23.1431, airports: [
      { code: "KOK", name: "Kokkola-Pietarsaari" },
    ] },
  { code: "KUO", name: "Kuopio / Siilinjärvi", country: "Finland", lat: 63.0071, lng: 27.7978, airports: [
      { code: "KUO", name: "Kuopio" },
    ] },
  { code: "KAO", name: "Kuusamo", country: "Finland", lat: 65.9876, lng: 29.2394, airports: [
      { code: "KAO", name: "Kuusamo" },
    ] },
  { code: "LPP", name: "Lappeenranta", country: "Finland", lat: 61.0446, lng: 28.1447, airports: [
      { code: "LPP", name: "Lappeenranta" },
    ] },
  { code: "MHQ", name: "Mariehamn", country: "Finland", lat: 60.1222, lng: 19.8982, airports: [
      { code: "MHQ", name: "Mariehamn" },
    ] },
  { code: "OUL", name: "Oulu / Oulunsalo", country: "Finland", lat: 64.9301, lng: 25.3546, airports: [
      { code: "OUL", name: "Oulu" },
    ] },
  { code: "POR", name: "Pori", country: "Finland", lat: 61.4617, lng: 21.8, airports: [
      { code: "POR", name: "Pori" },
    ] },
  { code: "RVN", name: "Rovaniemi", country: "Finland", lat: 66.5633, lng: 25.8298, airports: [
      { code: "RVN", name: "Rovaniemi" },
    ] },
  { code: "SVL", name: "Savonlinna", country: "Finland", lat: 61.9431, lng: 28.9451, airports: [
      { code: "SVL", name: "Savonlinna" },
    ] },
  { code: "TMP", name: "Tampere / Pirkkala", country: "Finland", lat: 61.4141, lng: 23.6044, airports: [
      { code: "TMP", name: "Tampere-Pirkkala" },
    ] },
  { code: "TKU", name: "Turku", country: "Finland", lat: 60.5141, lng: 22.2628, airports: [
      { code: "TKU", name: "Turku" },
    ] },
  { code: "VAA", name: "Vaasa", country: "Finland", lat: 63.0502, lng: 21.7625, airports: [
      { code: "VAA", name: "Vaasa" },
    ] },
  { code: "LBS", name: "Labasa", country: "Fiji", lat: -16.4667, lng: 179.34, airports: [
      { code: "LBS", name: "Labasa" },
    ] },
  { code: "NAN", name: "Nadi", country: "Fiji", lat: -17.7618, lng: 177.4378, airports: [
      { code: "NAN", name: "Nadi Intl" },
    ] },
  { code: "SUV", name: "Nausori", country: "Fiji", lat: -18.0442, lng: 178.5615, airports: [
      { code: "SUV", name: "Nausori Intl" },
    ] },
  { code: "MPN", name: "Mount Pleasant", country: "Falkland Islands", lat: -51.8226, lng: -58.4458, airports: [
      { code: "MPN", name: "Mount Pleasant Airport / RAF Mount Pleasant" },
    ] },
  { code: "KSA", name: "Okat", country: "FM", lat: 5.357, lng: 162.958, airports: [
      { code: "KSA", name: "Kosrae Intl" },
    ] },
  { code: "PNI", name: "Pohnpei Island", country: "FM", lat: 6.9851, lng: 158.2099, airports: [
      { code: "PNI", name: "Pohnpei Intl" },
    ] },
  { code: "TKK", name: "Weno Island", country: "FM", lat: 7.4619, lng: 151.843, airports: [
      { code: "TKK", name: "Chuuk Intl" },
    ] },
  { code: "YAP", name: "Yap Island", country: "FM", lat: 9.4989, lng: 138.083, airports: [
      { code: "YAP", name: "Yap Intl" },
    ] },
  { code: "FAE", name: "Vágar", country: "FO", lat: 62.0633, lng: -7.2758, airports: [
      { code: "FAE", name: "Vágar" },
    ] },
  { code: "AJA", name: "Ajaccio", country: "France", lat: 41.9236, lng: 8.8029, airports: [
      { code: "AJA", name: "Ajaccio Napoléon Bonaparte" },
    ] },
  { code: "NCY", name: "Annecy", country: "France", lat: 45.9289, lng: 6.0987, airports: [
      { code: "NCY", name: "Annecy Meythet" },
    ] },
  { code: "AUR", name: "Aurillac", country: "France", lat: 44.8914, lng: 2.4219, airports: [
      { code: "AUR", name: "Aurillac" },
    ] },
  { code: "AVN", name: "Avignon", country: "France", lat: 43.9073, lng: 4.9018, airports: [
      { code: "AVN", name: "Avignon Caumont" },
    ] },
  { code: "BSL", name: "Bâle / Mulhouse", country: "France", lat: 47.6007, lng: 7.5211, airports: [
      { code: "BSL", name: "EuroAirport Basel–Mulhouse–Freiburg" },
    ] },
  { code: "BIA", name: "Bastia", country: "France", lat: 42.5527, lng: 9.4837, airports: [
      { code: "BIA", name: "Bastia-Poretta Intl" },
    ] },
  { code: "EGC", name: "Bergerac", country: "France", lat: 44.8253, lng: 0.5186, airports: [
      { code: "EGC", name: "Bergerac Dordogne-Périgord" },
    ] },
  { code: "BZR", name: "Béziers", country: "France", lat: 43.3235, lng: 3.3539, airports: [
      { code: "BZR", name: "Béziers Vias" },
    ] },
  { code: "BIQ", name: "Biarritz", country: "France", lat: 43.4684, lng: -1.5232, airports: [
      { code: "BIQ", name: "Biarritz Pays Basque" },
    ] },
  { code: "BOD", name: "Bordeaux", country: "France", lat: 44.8287, lng: -0.7154, airports: [
      { code: "BOD", name: "Bordeaux–Mérignac" },
    ] },
  { code: "BES", name: "Brest", country: "France", lat: 48.4479, lng: -4.4185, airports: [
      { code: "BES", name: "Brest Bretagne" },
    ] },
  { code: "BVE", name: "Brive", country: "France", lat: 45.0397, lng: 1.4856, airports: [
      { code: "BVE", name: "Brive Souillac" },
    ] },
  { code: "CFR", name: "Caen", country: "France", lat: 49.1768, lng: -0.4549, airports: [
      { code: "CFR", name: "Caen Carpiquet" },
    ] },
  { code: "CLY", name: "Calvi", country: "France", lat: 42.5304, lng: 8.793, airports: [
      { code: "CLY", name: "Calvi Sainte Catherine" },
    ] },
  { code: "CCF", name: "Carcassonne", country: "France", lat: 43.216, lng: 2.3063, airports: [
      { code: "CCF", name: "Carcassonne Salvaza" },
    ] },
  { code: "DCM", name: "Castres", country: "France", lat: 43.5563, lng: 2.2892, airports: [
      { code: "DCM", name: "Castres Mazamet" },
    ] },
  { code: "XCR", name: "Chalons en Champagne", country: "France", lat: 48.7733, lng: 4.2061, airports: [
      { code: "XCR", name: "Chalons Vatry" },
    ] },
  { code: "CMF", name: "Chambéry", country: "France", lat: 45.6381, lng: 5.8802, airports: [
      { code: "CMF", name: "Chambéry Aix les Bains" },
    ] },
  { code: "CFE", name: "Clermont-Ferrand", country: "France", lat: 45.7867, lng: 3.1692, airports: [
      { code: "CFE", name: "Clermont-Ferrand Auvergne" },
    ] },
  { code: "LYS", name: "Colombier-Saugnieu, Rhône", country: "France", lat: 45.726, lng: 5.0901, airports: [
      { code: "LYS", name: "Lyon Saint-Exupéry" },
    ] },
  { code: "DOL", name: "Deauville", country: "France", lat: 49.3652, lng: 0.1545, airports: [
      { code: "DOL", name: "Deauville Normandie" },
    ] },
  { code: "DIJ", name: "Dijon", country: "France", lat: 47.2689, lng: 5.09, airports: [
      { code: "DIJ", name: "Dijon Longvic" },
    ] },
  { code: "DNR", name: "Dinard", country: "France", lat: 48.5877, lng: -2.08, airports: [
      { code: "DNR", name: "Dinard Pleurtuit Saint-Malo" },
    ] },
  { code: "DLE", name: "Dole", country: "France", lat: 47.039, lng: 5.4276, airports: [
      { code: "DLE", name: "Dole Tavaux" },
    ] },
  { code: "FSC", name: "Figari", country: "France", lat: 41.5019, lng: 9.0971, airports: [
      { code: "FSC", name: "Figari Sud-Corse" },
    ] },
  { code: "ETZ", name: "Goin", country: "France", lat: 48.9821, lng: 6.2513, airports: [
      { code: "ETZ", name: "Metz-Nancy-Lorraine" },
    ] },
  { code: "GNB", name: "Grenoble", country: "France", lat: 45.3629, lng: 5.3294, airports: [
      { code: "GNB", name: "Grenoble Alpes Isère" },
    ] },
  { code: "TLN", name: "Hyères, Var", country: "France", lat: 43.0973, lng: 6.146, airports: [
      { code: "TLN", name: "Toulon-Hyères" },
    ] },
  { code: "LRH", name: "La Rochelle", country: "France", lat: 46.1792, lng: -1.1953, airports: [
      { code: "LRH", name: "La Rochelle Île de Ré" },
    ] },
  { code: "LME", name: "Le Mans, Sarthe", country: "France", lat: 47.9486, lng: 0.2017, airports: [
      { code: "LME", name: "Le Mans-Arnage" },
    ] },
  { code: "LIL", name: "Lesquin", country: "France", lat: 50.5666, lng: 3.1024, airports: [
      { code: "LIL", name: "Lille" },
    ] },
  { code: "LIG", name: "Limoges/Bellegarde", country: "France", lat: 45.8628, lng: 1.1794, airports: [
      { code: "LIG", name: "Limoges" },
    ] },
  { code: "LRT", name: "Lorient/Lann/Bihoué", country: "France", lat: 47.7606, lng: -3.44, airports: [
      { code: "LRT", name: "Lorient South Brittany (Bretagne Sud)" },
    ] },
  { code: "MRS", name: "Marignane, Bouches-du-Rhône", country: "France", lat: 43.4381, lng: 5.2125, airports: [
      { code: "MRS", name: "Marseille Provence" },
    ] },
  { code: "MPL", name: "Montpellier/Méditerranée", country: "France", lat: 43.5762, lng: 3.963, airports: [
      { code: "MPL", name: "Montpellier-Méditerranée" },
    ] },
  { code: "NTE", name: "Nantes", country: "France", lat: 47.1532, lng: -1.6107, airports: [
      { code: "NTE", name: "Nantes Atlantique" },
    ] },
  { code: "NCE", name: "Nice, Alpes-Maritimes", country: "France", lat: 43.6584, lng: 7.2159, airports: [
      { code: "NCE", name: "Nice-Côte d'Azur" },
    ] },
  { code: "FNI", name: "Nîmes/Garons", country: "France", lat: 43.7574, lng: 4.4164, airports: [
      { code: "FNI", name: "Nîmes-Arles-Camargue" },
    ] },
  { code: "PAR", name: "Paris", country: "France", lat: 49.009, lng: 2.5541, airports: [
      { code: "CDG", name: "Charles de Gaulle Intl" },
      { code: "BVA", name: "Beauvais-Tillé" },
      { code: "LBG", name: "Paris-Le Bourget Intl" },
      { code: "ORY", name: "Paris-Orly" },
    ], keywords: ["france", "cdg", "charles de gaulle", "orly", "beauvais", "roissy", "le bourget"] },
  { code: "PUF", name: "Pau/Pyrénées (Uzein)", country: "France", lat: 43.38, lng: -0.4186, airports: [
      { code: "PUF", name: "Pau Pyrénées" },
    ] },
  { code: "PGF", name: "Perpignan/Rivesaltes", country: "France", lat: 42.7404, lng: 2.8707, airports: [
      { code: "PGF", name: "Perpignan-Rivesaltes (Llabanère)" },
    ] },
  { code: "PIS", name: "Poitiers/Biard", country: "France", lat: 46.5877, lng: 0.3067, airports: [
      { code: "PIS", name: "Poitiers-Biard" },
    ] },
  { code: "RDZ", name: "Rodez/Marcillac", country: "France", lat: 44.4079, lng: 2.4827, airports: [
      { code: "RDZ", name: "Rodez–Aveyron" },
    ] },
  { code: "RNS", name: "Saint-Jacques-de-la-Lande, Ille-et-Vilaine", country: "France", lat: 48.0695, lng: -1.7348, airports: [
      { code: "RNS", name: "Rennes-Saint-Jacques" },
    ] },
  { code: "SNR", name: "Saint-Nazaire/Montoir", country: "France", lat: 47.3114, lng: -2.1526, airports: [
      { code: "SNR", name: "Saint-Nazaire-Montoir" },
    ] },
  { code: "SXB", name: "Strasbourg", country: "France", lat: 48.5383, lng: 7.6282, airports: [
      { code: "SXB", name: "Strasbourg" },
    ] },
  { code: "LDE", name: "Tarbes/Lourdes/Pyrénées", country: "France", lat: 43.1787, lng: -0.0064, airports: [
      { code: "LDE", name: "Tarbes-Lourdes-Pyrénées" },
    ] },
  { code: "TLS", name: "Toulouse/Blagnac", country: "France", lat: 43.6291, lng: 1.3638, airports: [
      { code: "TLS", name: "Toulouse-Blagnac" },
    ] },
  { code: "TUF", name: "Tours, Indre-et-Loire", country: "France", lat: 47.4322, lng: 0.7276, airports: [
      { code: "TUF", name: "Tours Val de Loire" },
    ] },
  { code: "MVB", name: "Franceville", country: "Gabon", lat: -1.6562, lng: 13.438, airports: [
      { code: "MVB", name: "M'Vengue El Hadj Omar Bongo Ondimba Intl" },
    ] },
  { code: "LBV", name: "Libreville", country: "Gabon", lat: 0.4586, lng: 9.4123, airports: [
      { code: "LBV", name: "Libreville Leon M'ba Intl" },
    ] },
  { code: "MKU", name: "Makokou", country: "Gabon", lat: 0.5792, lng: 12.8909, airports: [
      { code: "MKU", name: "Makokou" },
    ] },
  { code: "OYE", name: "Oyem", country: "Gabon", lat: 1.5431, lng: 11.5814, airports: [
      { code: "OYE", name: "Oyem" },
    ] },
  { code: "POG", name: "Port Gentil", country: "Gabon", lat: -0.7117, lng: 8.7544, airports: [
      { code: "POG", name: "Port Gentil Intl" },
    ] },
  { code: "ABZ", name: "Aberdeen", country: "United Kingdom", lat: 57.2019, lng: -2.1978, airports: [
      { code: "ABZ", name: "Aberdeen Intl" },
    ] },
  { code: "TRE", name: "Balemartine, Argyll and Bute", country: "United Kingdom", lat: 56.4992, lng: -6.8692, airports: [
      { code: "TRE", name: "Tiree" },
    ] },
  { code: "BEB", name: "Balivanich", country: "United Kingdom", lat: 57.4811, lng: -7.3628, airports: [
      { code: "BEB", name: "Benbecula" },
    ] },
  { code: "BFS", name: "Belfast", country: "United Kingdom", lat: 54.6575, lng: -6.2158, airports: [
      { code: "BFS", name: "Belfast Intl" },
      { code: "BHD", name: "George Best Belfast City" },
    ] },
  { code: "BHX", name: "Birmingham, West Midlands", country: "United Kingdom", lat: 52.4539, lng: -1.748, airports: [
      { code: "BHX", name: "Birmingham" },
    ] },
  { code: "BOH", name: "Bournemouth", country: "United Kingdom", lat: 50.7805, lng: -1.8396, airports: [
      { code: "BOH", name: "Bournemouth" },
    ] },
  { code: "BRS", name: "Bristol", country: "United Kingdom", lat: 51.3823, lng: -2.7165, airports: [
      { code: "BRS", name: "Bristol" },
    ] },
  { code: "CAL", name: "Campbeltown", country: "United Kingdom", lat: 55.4372, lng: -5.6864, airports: [
      { code: "CAL", name: "Campbeltown" },
    ] },
  { code: "CWL", name: "Cardiff", country: "United Kingdom", lat: 51.3967, lng: -3.3433, airports: [
      { code: "CWL", name: "Cardiff Intl" },
    ] },
  { code: "MME", name: "Darlington, Durham", country: "United Kingdom", lat: 54.5092, lng: -1.4294, airports: [
      { code: "MME", name: "Teesside Intl" },
    ] },
  { code: "LDY", name: "Derry, Derry and Strabane", country: "United Kingdom", lat: 55.0428, lng: -7.1611, airports: [
      { code: "LDY", name: "City of Derry" },
    ] },
  { code: "DND", name: "Dundee", country: "United Kingdom", lat: 56.4525, lng: -3.0258, airports: [
      { code: "DND", name: "Dundee" },
    ] },
  { code: "EOI", name: "Eday", country: "United Kingdom", lat: 59.1906, lng: -2.7722, airports: [
      { code: "EOI", name: "Eday" },
    ] },
  { code: "EDI", name: "Edinburgh", country: "United Kingdom", lat: 55.9501, lng: -3.3723, airports: [
      { code: "EDI", name: "Edinburgh" },
    ] },
  { code: "BRR", name: "Eoligarry", country: "United Kingdom", lat: 57.0228, lng: -7.4431, airports: [
      { code: "BRR", name: "Barra" },
    ] },
  { code: "EXT", name: "Exeter, Devon", country: "United Kingdom", lat: 50.7343, lng: -3.414, airports: [
      { code: "EXT", name: "Exeter Intl" },
    ] },
  { code: "GLA", name: "Glasgow", country: "United Kingdom", lat: 55.8719, lng: -4.4331, airports: [
      { code: "GLA", name: "Glasgow" },
    ] },
  { code: "HUY", name: "Grimsby, Lincolnshire", country: "United Kingdom", lat: 53.5762, lng: -0.3495, airports: [
      { code: "HUY", name: "Humberside" },
    ] },
  { code: "INV", name: "Inverness", country: "United Kingdom", lat: 57.5425, lng: -4.0475, airports: [
      { code: "INV", name: "Inverness" },
    ] },
  { code: "ILY", name: "Isle of Islay, Argyll and Bute", country: "United Kingdom", lat: 55.6827, lng: -6.2575, airports: [
      { code: "ILY", name: "Islay" },
    ] },
  { code: "KOI", name: "Kirkwall, Orkney Islands", country: "United Kingdom", lat: 58.9579, lng: -2.9051, airports: [
      { code: "KOI", name: "Kirkwall" },
    ] },
  { code: "LBA", name: "Leeds, West Yorkshire", country: "United Kingdom", lat: 53.8659, lng: -1.6606, airports: [
      { code: "LBA", name: "Leeds Bradford" },
    ] },
  { code: "LSI", name: "Lerwick, Shetland", country: "United Kingdom", lat: 59.8789, lng: -1.2956, airports: [
      { code: "LSI", name: "Sumburgh" },
    ] },
  { code: "LPL", name: "Liverpool", country: "United Kingdom", lat: 53.3349, lng: -2.8496, airports: [
      { code: "LPL", name: "Liverpool John Lennon" },
    ] },
  { code: "LON", name: "London", country: "United Kingdom", lat: 51.4707, lng: -0.4599, airports: [
      { code: "LHR", name: "London Heathrow" },
      { code: "LGW", name: "London Gatwick" },
      { code: "LTN", name: "London Luton" },
      { code: "STN", name: "London Stansted" },
      { code: "LCY", name: "London City" },
      { code: "SEN", name: "London Southend" },
    ], keywords: ["uk", "england", "heathrow", "gatwick", "stansted", "luton", "city airport", "lhr", "lgw", "stn", "ltn"] },
  { code: "MAN", name: "Manchester, Greater Manchester", country: "United Kingdom", lat: 53.3494, lng: -2.2795, airports: [
      { code: "MAN", name: "Manchester" },
    ] },
  { code: "NCL", name: "Newcastle upon Tyne, Tyne and Wear", country: "United Kingdom", lat: 55.038, lng: -1.6896, airports: [
      { code: "NCL", name: "Newcastle Intl" },
    ] },
  { code: "NQY", name: "Newquay", country: "United Kingdom", lat: 50.4406, lng: -4.9954, airports: [
      { code: "NQY", name: "Cornwall Airport Newquay" },
    ] },
  { code: "NWI", name: "Norwich, Norfolk", country: "United Kingdom", lat: 52.6758, lng: 1.2828, airports: [
      { code: "NWI", name: "Norwich" },
    ] },
  { code: "EMA", name: "Nottingham", country: "United Kingdom", lat: 52.8311, lng: -1.3281, airports: [
      { code: "EMA", name: "East Midlands" },
    ] },
  { code: "PIK", name: "Prestwick, South Ayrshire", country: "United Kingdom", lat: 55.502, lng: -4.587, airports: [
      { code: "PIK", name: "Glasgow Prestwick" },
    ] },
  { code: "SOU", name: "Southampton", country: "United Kingdom", lat: 50.9503, lng: -1.3568, airports: [
      { code: "SOU", name: "Southampton" },
    ] },
  { code: "SYY", name: "Stornoway, Western Isles", country: "United Kingdom", lat: 58.2156, lng: -6.3311, airports: [
      { code: "SYY", name: "Stornoway" },
    ] },
  { code: "WIC", name: "Wick", country: "United Kingdom", lat: 58.4589, lng: -3.0931, airports: [
      { code: "WIC", name: "Wick John O'Groats" },
    ] },
  { code: "GND", name: "Saint George's", country: "Grenada", lat: 12.004, lng: -61.7853, airports: [
      { code: "GND", name: "Maurice Bishop Intl" },
    ] },
  { code: "BUS", name: "Batumi", country: "Georgia", lat: 41.6094, lng: 41.6003, airports: [
      { code: "BUS", name: "Alexander Kartveli Batumi Intl" },
    ] },
  { code: "KUT", name: "Kopitnari", country: "Georgia", lat: 42.1774, lng: 42.4854, airports: [
      { code: "KUT", name: "David the Builder Kutaisi Intl" },
    ] },
  { code: "SUI", name: "Sukhumi", country: "Georgia", lat: 42.8582, lng: 41.1281, airports: [
      { code: "SUI", name: "Vladislav Ardzinba Sukhum Intl" },
    ] },
  { code: "TBS", name: "Tbilisi", country: "Georgia", lat: 41.6692, lng: 44.9547, airports: [
      { code: "TBS", name: "Tbilisi Intl" },
    ] },
  { code: "CAY", name: "Matoury", country: "French Guiana", lat: 4.82, lng: -52.3613, airports: [
      { code: "CAY", name: "Cayenne – Félix Eboué" },
    ] },
  { code: "ACI", name: "Saint Anne", country: "GG", lat: 49.7061, lng: -2.2147, airports: [
      { code: "ACI", name: "Alderney" },
    ] },
  { code: "GCI", name: "Saint Peter Port", country: "GG", lat: 49.435, lng: -2.602, airports: [
      { code: "GCI", name: "Guernsey" },
    ] },
  { code: "ACC", name: "Accra", country: "Ghana", lat: 5.6052, lng: -0.1668, airports: [
      { code: "ACC", name: "Kotoka Intl" },
    ] },
  { code: "KMS", name: "Kumasi", country: "Ghana", lat: 6.7146, lng: -1.5908, airports: [
      { code: "KMS", name: "Prempeh I Intl" },
    ] },
  { code: "TKD", name: "Sekondi-Takoradi", country: "Ghana", lat: 4.8961, lng: -1.7748, airports: [
      { code: "TKD", name: "Takoradi" },
    ] },
  { code: "NYI", name: "Sunyani", country: "Ghana", lat: 7.3618, lng: -2.3288, airports: [
      { code: "NYI", name: "Sunyani" },
    ] },
  { code: "TML", name: "Tamale", country: "Ghana", lat: 9.5539, lng: -0.8661, airports: [
      { code: "TML", name: "Tamale Intl" },
    ] },
  { code: "GIB", name: "Gibraltar", country: "GI", lat: 36.1517, lng: -5.3498, airports: [
      { code: "GIB", name: "Gibraltar" },
    ] },
  { code: "JEG", name: "Aasiaat", country: "GL", lat: 68.7218, lng: -52.7847, airports: [
      { code: "JEG", name: "Aasiaat" },
    ] },
  { code: "JAV", name: "Ilulissat", country: "GL", lat: 69.2432, lng: -51.0571, airports: [
      { code: "JAV", name: "Ilulissat" },
    ] },
  { code: "SFJ", name: "Kangerlussuaq", country: "GL", lat: 67.0104, lng: -50.7153, airports: [
      { code: "SFJ", name: "Kangerlussuaq Intl" },
    ] },
  { code: "KUS", name: "Kulusuk", country: "GL", lat: 65.5736, lng: -37.1236, airports: [
      { code: "KUS", name: "Kulusuk" },
    ] },
  { code: "UAK", name: "Narsarsuaq", country: "GL", lat: 61.1605, lng: -45.426, airports: [
      { code: "UAK", name: "Narsarsuaq Intl" },
    ] },
  { code: "CNP", name: "Neerlerit Inaat", country: "GL", lat: 70.7431, lng: -22.6505, airports: [
      { code: "CNP", name: "Neerlerit Inaat" },
    ] },
  { code: "GOH", name: "Nuuk", country: "GL", lat: 64.1911, lng: -51.6791, airports: [
      { code: "GOH", name: "Nuuk Intl" },
    ] },
  { code: "THU", name: "Pituffik", country: "GL", lat: 76.5306, lng: -68.7005, airports: [
      { code: "THU", name: "Pituffik Space Base" },
    ] },
  { code: "NAQ", name: "Qaanaaq", country: "GL", lat: 77.4886, lng: -69.3887, airports: [
      { code: "NAQ", name: "Qaanaaq" },
    ] },
  { code: "JHS", name: "Sisimiut", country: "GL", lat: 66.9513, lng: -53.7293, airports: [
      { code: "JHS", name: "Sisimiut" },
    ] },
  { code: "BJL", name: "Yundum", country: "Gambia", lat: 13.338, lng: -16.6522, airports: [
      { code: "BJL", name: "Banjul Intl" },
    ] },
  { code: "CKY", name: "Conakry", country: "Guinea", lat: 9.5769, lng: -13.612, airports: [
      { code: "CKY", name: "Conakry Intl" },
    ] },
  { code: "GBJ", name: "Grand-Bourg", country: "Guadeloupe", lat: 15.8689, lng: -61.2701, airports: [
      { code: "GBJ", name: "Marie-Galante" },
    ] },
  { code: "PTP", name: "Pointe-à-Pitre", country: "Guadeloupe", lat: 16.2654, lng: -61.5328, airports: [
      { code: "PTP", name: "Maryse Condé Intl" },
    ] },
  { code: "BSG", name: "Bata", country: "Equatorial Guinea", lat: 1.9055, lng: 9.8057, airports: [
      { code: "BSG", name: "Bata Intl" },
    ] },
  { code: "OCS", name: "Corisco Island", country: "Equatorial Guinea", lat: 0.9109, lng: 9.3303, airports: [
      { code: "OCS", name: "Corisco Intl" },
    ] },
  { code: "SSG", name: "Malabo", country: "Equatorial Guinea", lat: 3.7553, lng: 8.7087, airports: [
      { code: "SSG", name: "Malabo Intl" },
    ] },
  { code: "AXD", name: "Alexandroupolis", country: "Greece", lat: 40.8559, lng: 25.9563, airports: [
      { code: "AXD", name: "Alexandroupoli Democritus" },
    ] },
  { code: "JKH", name: "Chios Island", country: "Greece", lat: 38.3432, lng: 26.1406, airports: [
      { code: "JKH", name: "Chios Island National" },
    ] },
  { code: "JSH", name: "Crete Island", country: "Greece", lat: 35.2161, lng: 26.1013, airports: [
      { code: "JSH", name: "Sitia" },
    ] },
  { code: "HER", name: "Heraklion", country: "Greece", lat: 35.3397, lng: 25.1803, airports: [
      { code: "HER", name: "Heraklion Intl Nikos Kazantzakis" },
    ] },
  { code: "IOA", name: "Ioannina", country: "Greece", lat: 39.6964, lng: 20.8225, airports: [
      { code: "IOA", name: "Ioannina King Pyrrhus National" },
    ] },
  { code: "KLX", name: "Kalamata", country: "Greece", lat: 37.0683, lng: 22.0255, airports: [
      { code: "KLX", name: "Kalamata" },
    ] },
  { code: "AOK", name: "Karpathos Island", country: "Greece", lat: 35.4214, lng: 27.146, airports: [
      { code: "AOK", name: "Karpathos" },
    ] },
  { code: "KVA", name: "Kavala", country: "Greece", lat: 40.9133, lng: 24.6192, airports: [
      { code: "KVA", name: "Kavala Alexander the Great Intl" },
    ] },
  { code: "EFL", name: "Kefallinia Island", country: "Greece", lat: 38.1201, lng: 20.5005, airports: [
      { code: "EFL", name: "Kefallinia" },
    ] },
  { code: "CFU", name: "Kerkyra (Corfu)", country: "Greece", lat: 39.6015, lng: 19.9122, airports: [
      { code: "CFU", name: "Corfu Ioannis Kapodistrias Intl" },
    ] },
  { code: "KGS", name: "Kos Island", country: "Greece", lat: 36.7945, lng: 27.0912, airports: [
      { code: "KGS", name: "Kos" },
    ] },
  { code: "KZI", name: "Kozani", country: "Greece", lat: 40.2861, lng: 21.8408, airports: [
      { code: "KZI", name: "Kozani National Airport Filippos" },
    ] },
  { code: "JMK", name: "Mykonos", country: "Greece", lat: 37.4351, lng: 25.3481, airports: [
      { code: "JMK", name: "Mykonos Island National" },
    ] },
  { code: "MJT", name: "Mytilene", country: "Greece", lat: 39.0574, lng: 26.5986, airports: [
      { code: "MJT", name: "Mytilene Intl" },
    ] },
  { code: "VOL", name: "Nea Anchialos", country: "Greece", lat: 39.2196, lng: 22.7943, airports: [
      { code: "VOL", name: "Nea Anchialos National" },
    ] },
  { code: "GPA", name: "Patras", country: "Greece", lat: 38.1511, lng: 21.4256, airports: [
      { code: "GPA", name: "Patras Araxos Agamemnon" },
    ] },
  { code: "PVK", name: "Preveza", country: "Greece", lat: 38.9255, lng: 20.7653, airports: [
      { code: "PVK", name: "Aktion National" },
    ] },
  { code: "RHO", name: "Rhodes", country: "Greece", lat: 36.4054, lng: 28.0862, airports: [
      { code: "RHO", name: "Diagoras" },
    ] },
  { code: "SMI", name: "Samos Island", country: "Greece", lat: 37.69, lng: 26.9117, airports: [
      { code: "SMI", name: "Samos" },
    ] },
  { code: "JTR", name: "Santorini Island", country: "Greece", lat: 36.4, lng: 25.4786, airports: [
      { code: "JTR", name: "Santorini Intl" },
    ] },
  { code: "JSI", name: "Skiathos", country: "Greece", lat: 39.1771, lng: 23.5037, airports: [
      { code: "JSI", name: "Skiathos Island National" },
    ] },
  { code: "CHQ", name: "Souda", country: "Greece", lat: 35.5312, lng: 24.1507, airports: [
      { code: "CHQ", name: "Chania Intl" },
    ] },
  { code: "ATH", name: "Spata-Artemida", country: "Greece", lat: 37.9364, lng: 23.9445, airports: [
      { code: "ATH", name: "Athens Eleftherios Venizelos Intl" },
    ] },
  { code: "SKG", name: "Thessaloniki", country: "Greece", lat: 40.5193, lng: 22.97, airports: [
      { code: "SKG", name: "Thessaloniki Macedonia Intl" },
    ] },
  { code: "ZTH", name: "Zakynthos", country: "Greece", lat: 37.7509, lng: 20.8843, airports: [
      { code: "ZTH", name: "Zakynthos Intl Airport Dionysios Solomos" },
    ] },
  { code: "GUA", name: "Guatemala City", country: "Guatemala", lat: 14.5829, lng: -90.5275, airports: [
      { code: "GUA", name: "La Aurora Intl" },
    ] },
  { code: "PBR", name: "Puerto Barrios", country: "Guatemala", lat: 15.7309, lng: -88.5838, airports: [
      { code: "PBR", name: "Puerto Barrios" },
    ] },
  { code: "RER", name: "Retalhuleu", country: "Guatemala", lat: 14.5214, lng: -91.697, airports: [
      { code: "RER", name: "Retalhuleu" },
    ] },
  { code: "FRS", name: "San Benito", country: "Guatemala", lat: 16.9124, lng: -89.8648, airports: [
      { code: "FRS", name: "Mundo Maya Intl" },
    ] },
  { code: "GUM", name: "Hagåtña", country: "Guam", lat: 13.485, lng: 144.7973, airports: [
      { code: "GUM", name: "Antonio B. Won Pat Intl" },
    ] },
  { code: "OXB", name: "Bissau", country: "Guinea-Bissau", lat: 11.8943, lng: -15.6536, airports: [
      { code: "OXB", name: "Osvaldo Vieira Intl" },
    ] },
  { code: "GEO", name: "Georgetown", country: "Guyana", lat: 6.4986, lng: -58.2541, airports: [
      { code: "GEO", name: "Cheddi Jagan Intl" },
    ] },
  { code: "KAI", name: "Kaieteur Falls", country: "Guyana", lat: 5.1773, lng: -59.489, airports: [
      { code: "KAI", name: "Kaieteur Intl" },
    ] },
  { code: "LTM", name: "Lethem", country: "Guyana", lat: 3.3728, lng: -59.7894, airports: [
      { code: "LTM", name: "Lethem" },
    ] },
  { code: "OGL", name: "Ogle", country: "Guyana", lat: 6.8063, lng: -58.1059, airports: [
      { code: "OGL", name: "Eugene F. Correia Intl" },
    ] },
  { code: "HKG", name: "Hong Kong", country: "Hong Kong", lat: 22.3089, lng: 113.915, airports: [
      { code: "HKG", name: "Hong Kong Intl" },
    ], keywords: ["hkg", "chek lap kok"] },
  { code: "RTB", name: "Coxen Hole", country: "Honduras", lat: 16.3168, lng: -86.523, airports: [
      { code: "RTB", name: "Juan Manuel Gálvez Intl" },
    ] },
  { code: "GJA", name: "Guanaja", country: "Honduras", lat: 16.4454, lng: -85.9066, airports: [
      { code: "GJA", name: "La Laguna" },
    ] },
  { code: "LCE", name: "La Ceiba", country: "Honduras", lat: 15.7425, lng: -86.853, airports: [
      { code: "LCE", name: "Golosón Intl" },
    ] },
  { code: "XPL", name: "Palmerola", country: "Honduras", lat: 14.3824, lng: -87.6212, airports: [
      { code: "XPL", name: "Palmerola Intl Airport / José Enrique Soto Cano" },
    ] },
  { code: "SAP", name: "San Pedro Sula", country: "Honduras", lat: 15.4526, lng: -87.9236, airports: [
      { code: "SAP", name: "Ramón Villeda Morales Intl" },
    ] },
  { code: "TGU", name: "Tegucigalpa", country: "Honduras", lat: 14.0609, lng: -87.2172, airports: [
      { code: "TGU", name: "Toncontín Intl" },
    ] },
  { code: "DBV", name: "Dubrovnik", country: "Croatia", lat: 42.5622, lng: 18.2655, airports: [
      { code: "DBV", name: "Dubrovnik Ruđer Bošković" },
    ] },
  { code: "BWK", name: "Gornji Humac", country: "Croatia", lat: 43.2845, lng: 16.6784, airports: [
      { code: "BWK", name: "Brač" },
    ] },
  { code: "OSI", name: "Osijek(Klisa)", country: "Croatia", lat: 45.4624, lng: 18.8113, airports: [
      { code: "OSI", name: "Osijek" },
    ] },
  { code: "PUY", name: "Pula", country: "Croatia", lat: 44.8935, lng: 13.9222, airports: [
      { code: "PUY", name: "Pula" },
    ] },
  { code: "RJK", name: "Rijeka(Omišalj)", country: "Croatia", lat: 45.2164, lng: 14.5709, airports: [
      { code: "RJK", name: "Rijeka" },
    ] },
  { code: "SPU", name: "Split", country: "Croatia", lat: 43.5389, lng: 16.298, airports: [
      { code: "SPU", name: "Split Saint Jerome" },
    ] },
  { code: "ZAG", name: "Velika Gorica", country: "Croatia", lat: 45.7429, lng: 16.0688, airports: [
      { code: "ZAG", name: "Zagreb Franjo Tuđman Intl" },
    ] },
  { code: "ZAD", name: "Zadar", country: "Croatia", lat: 44.097, lng: 15.3536, airports: [
      { code: "ZAD", name: "Zadar" },
    ] },
  { code: "CAP", name: "Cap Haitien", country: "Haiti", lat: 19.7255, lng: -72.2007, airports: [
      { code: "CAP", name: "Cap Haitien Intl" },
    ] },
  { code: "JEE", name: "Carrefour Sanon", country: "Haiti", lat: 18.6631, lng: -74.1703, airports: [
      { code: "JEE", name: "Jérémie" },
    ] },
  { code: "CYA", name: "Les Cayes", country: "Haiti", lat: 18.2711, lng: -73.7883, airports: [
      { code: "CYA", name: "Antoine-Simon Intl" },
    ] },
  { code: "PAP", name: "Port-au-Prince", country: "Haiti", lat: 18.58, lng: -72.2926, airports: [
      { code: "PAP", name: "Toussaint Louverture Intl" },
    ] },
  { code: "BUD", name: "Budapest", country: "Hungary", lat: 47.4302, lng: 19.2624, airports: [
      { code: "BUD", name: "Budapest Liszt Ferenc Intl" },
    ] },
  { code: "DEB", name: "Debrecen", country: "Hungary", lat: 47.4895, lng: 21.6163, airports: [
      { code: "DEB", name: "Debrecen Intl" },
    ] },
  { code: "PEV", name: "Pécs", country: "Hungary", lat: 45.9889, lng: 18.242, airports: [
      { code: "PEV", name: "Pécs-Pogány" },
    ] },
  { code: "SOB", name: "Sármellék", country: "Hungary", lat: 46.6864, lng: 17.1591, airports: [
      { code: "SOB", name: "Hévíz–Balaton" },
    ] },
  { code: "AMQ", name: "Ambon", country: "Indonesia", lat: -3.7103, lng: 128.089, airports: [
      { code: "AMQ", name: "Pattimura Intl" },
    ] },
  { code: "BPN", name: "Balikpapan", country: "Indonesia", lat: -1.2683, lng: 116.8945, airports: [
      { code: "BPN", name: "Sultan Aji Muhammad Sulaiman Sepinggan Intl" },
    ] },
  { code: "BTJ", name: "Banda Aceh", country: "Indonesia", lat: 5.5251, lng: 95.42, airports: [
      { code: "BTJ", name: "Sultan Iskandar Muda Intl" },
    ] },
  { code: "TKG", name: "Bandar Lampung", country: "Indonesia", lat: -5.2468, lng: 105.1825, airports: [
      { code: "TKG", name: "Radin Inten II Intl" },
    ] },
  { code: "BDO", name: "Bandung", country: "Indonesia", lat: -6.9006, lng: 107.576, airports: [
      { code: "BDO", name: "Husein Sastranegara Intl" },
    ] },
  { code: "BTH", name: "Batam", country: "Indonesia", lat: 1.121, lng: 104.119, airports: [
      { code: "BTH", name: "Hang Nadim Intl" },
    ] },
  { code: "BKS", name: "Bengkulu", country: "Indonesia", lat: -3.8637, lng: 102.339, airports: [
      { code: "BKS", name: "Fatmawati Soekarno" },
    ] },
  { code: "KNO", name: "Beringin", country: "Indonesia", lat: 3.6378, lng: 98.8706, airports: [
      { code: "KNO", name: "Kualanamu Intl" },
    ] },
  { code: "BIK", name: "Biak", country: "Indonesia", lat: -1.19, lng: 136.108, airports: [
      { code: "BIK", name: "Frans Kaisiepo" },
    ] },
  { code: "UGU", name: "Bilogai", country: "Indonesia", lat: -3.7395, lng: 137.0312, airports: [
      { code: "UGU", name: "Bilorai" },
    ] },
  { code: "CXP", name: "Cilacap", country: "Indonesia", lat: -7.6451, lng: 109.034, airports: [
      { code: "CXP", name: "Tunggul Wulung" },
    ] },
  { code: "DUM", name: "Dumai", country: "Indonesia", lat: 1.609, lng: 101.4335, airports: [
      { code: "DUM", name: "Pinang Kampai" },
    ] },
  { code: "FKQ", name: "Fakfak", country: "Indonesia", lat: -2.9205, lng: 132.267, airports: [
      { code: "FKQ", name: "Fakfak" },
    ] },
  { code: "GNS", name: "Gunungsitoli", country: "Indonesia", lat: 1.1663, lng: 97.7043, airports: [
      { code: "GNS", name: "Binaka" },
    ] },
  { code: "HLP", name: "Jakarta", country: "Indonesia", lat: -6.2672, lng: 106.8917, airports: [
      { code: "HLP", name: "Halim Perdanakusuma Intl" },
      { code: "CGK", name: "Soekarno-Hatta Intl" },
    ] },
  { code: "KNG", name: "Kaimana", country: "Indonesia", lat: -3.6446, lng: 133.6951, airports: [
      { code: "KNG", name: "Utarom" },
    ] },
  { code: "KJT", name: "Kertajati", country: "Indonesia", lat: -6.6474, lng: 108.1656, airports: [
      { code: "KJT", name: "Kertajati Intl" },
    ] },
  { code: "KTG", name: "Ketapang", country: "Indonesia", lat: -1.8172, lng: 109.9635, airports: [
      { code: "KTG", name: "Rahadi Osman" },
    ] },
  { code: "KXB", name: "Kolaka", country: "Indonesia", lat: -4.3382, lng: 121.524, airports: [
      { code: "KXB", name: "Sangia Nibandera" },
    ] },
  { code: "MEQ", name: "Kuala Pesisir", country: "Indonesia", lat: 4.041, lng: 96.2533, airports: [
      { code: "MEQ", name: "Cut Nyak Dhien" },
    ] },
  { code: "DPS", name: "Kuta, Badung", country: "Indonesia", lat: -8.7484, lng: 115.1671, airports: [
      { code: "DPS", name: "Denpasar I Gusti Ngurah Rai Intl" },
    ] },
  { code: "LSR", name: "Kutacane", country: "Indonesia", lat: 3.3915, lng: 97.8637, airports: [
      { code: "LSR", name: "Alas Leuser" },
    ] },
  { code: "BDJ", name: "Landasan Ulin", country: "Indonesia", lat: -3.4424, lng: 114.763, airports: [
      { code: "BDJ", name: "Syamsudin Noor Intl" },
    ] },
  { code: "LUV", name: "Langgur", country: "Indonesia", lat: -5.7603, lng: 132.7594, airports: [
      { code: "LUV", name: "Karel Sadsuitubun" },
    ] },
  { code: "UPG", name: "Makassar", country: "Indonesia", lat: -5.0755, lng: 119.5537, airports: [
      { code: "UPG", name: "Sultan Hasanuddin Intl" },
    ] },
  { code: "MLG", name: "Malang", country: "Indonesia", lat: -7.9291, lng: 112.7142, airports: [
      { code: "MLG", name: "Abdul Rachman Saleh" },
    ] },
  { code: "MDC", name: "Manado", country: "Indonesia", lat: 1.5486, lng: 124.9263, airports: [
      { code: "MDC", name: "Sam Ratulangi Intl" },
    ] },
  { code: "MKW", name: "Manokwari", country: "Indonesia", lat: -0.8918, lng: 134.049, airports: [
      { code: "MKW", name: "Rendani" },
    ] },
  { code: "LOP", name: "Mataram (Pujut, Lombok Tengah)", country: "Indonesia", lat: -8.76, lng: 116.2782, airports: [
      { code: "LOP", name: "Lombok Intl" },
    ] },
  { code: "MKQ", name: "Merauke", country: "Indonesia", lat: -8.5239, lng: 140.4197, airports: [
      { code: "MKQ", name: "Mopah Intl" },
    ] },
  { code: "NAM", name: "Namniwel", country: "Indonesia", lat: -3.1432, lng: 126.9765, airports: [
      { code: "NAM", name: "Namniwel" },
    ] },
  { code: "NPO", name: "Nanga Pinoh-Borneo Island", country: "Indonesia", lat: -0.3486, lng: 111.7462, airports: [
      { code: "NPO", name: "Nanga Pinoh" },
    ] },
  { code: "OKL", name: "Oksibil", country: "Indonesia", lat: -4.9071, lng: 140.6277, airports: [
      { code: "OKL", name: "Oksibil" },
    ] },
  { code: "PDG", name: "Padang (Katapiang)", country: "Indonesia", lat: -0.786, lng: 100.2804, airports: [
      { code: "PDG", name: "Minangkabau Intl" },
    ] },
  { code: "PKY", name: "Palangkaraya", country: "Indonesia", lat: -2.2271, lng: 113.9434, airports: [
      { code: "PKY", name: "Tjilik Riwut" },
    ] },
  { code: "PLM", name: "Palembang", country: "Indonesia", lat: -2.8977, lng: 104.6981, airports: [
      { code: "PLM", name: "Sultan Mahmud Badaruddin II" },
    ] },
  { code: "PLW", name: "Palu", country: "Indonesia", lat: -0.9165, lng: 119.9086, airports: [
      { code: "PLW", name: "Mutiara - SIS Al-Jufrie" },
    ] },
  { code: "PGK", name: "Pangkal Pinang", country: "Indonesia", lat: -2.1622, lng: 106.139, airports: [
      { code: "PGK", name: "Depati Amir" },
    ] },
  { code: "PKU", name: "Pekanbaru", country: "Indonesia", lat: 0.4586, lng: 101.4443, airports: [
      { code: "PKU", name: "Sultan Syarif Kasim II Intl Airport / Roesmin Nurjadin AFB" },
    ] },
  { code: "PNK", name: "Pontianak", country: "Indonesia", lat: -0.153, lng: 109.4047, airports: [
      { code: "PNK", name: "Supadio Intl" },
    ] },
  { code: "PSU", name: "Putussibau-Borneo Island", country: "Indonesia", lat: 0.8346, lng: 112.9402, airports: [
      { code: "PSU", name: "Pangsuma" },
    ] },
  { code: "NTX", name: "Ranai-Natuna Besar Island", country: "Indonesia", lat: 3.9087, lng: 108.388, airports: [
      { code: "NTX", name: "Ranai" },
    ] },
  { code: "AAP", name: "Samarinda", country: "Indonesia", lat: -0.3745, lng: 117.2501, airports: [
      { code: "AAP", name: "Aji Pangeran Tumenggung Pranoto Intl" },
    ] },
  { code: "SRG", name: "Semarang", country: "Indonesia", lat: -6.9707, lng: 110.3732, airports: [
      { code: "SRG", name: "Jenderal Ahmad Yani" },
    ] },
  { code: "DJJ", name: "Sentani", country: "Indonesia", lat: -2.5796, lng: 140.5199, airports: [
      { code: "DJJ", name: "Dortheys Hiyo Eluay Intl" },
    ] },
  { code: "FLZ", name: "Sibolga (Pinangsori)", country: "Indonesia", lat: 1.5571, lng: 98.8871, airports: [
      { code: "FLZ", name: "Dr. Ferdinand Lumban Tobing" },
    ] },
  { code: "SQG", name: "Sintang", country: "Indonesia", lat: -0.0452, lng: 111.458, airports: [
      { code: "SQG", name: "Tebelian" },
    ] },
  { code: "SOQ", name: "Sorong", country: "Indonesia", lat: -0.894, lng: 131.287, airports: [
      { code: "SOQ", name: "Domine Eduard Osok" },
    ] },
  { code: "SUB", name: "Surabaya", country: "Indonesia", lat: -7.3798, lng: 112.787, airports: [
      { code: "SUB", name: "Juanda Intl" },
    ] },
  { code: "SOC", name: "Surakarta", country: "Indonesia", lat: -7.516, lng: 110.7575, airports: [
      { code: "SOC", name: "Adisumarmo" },
    ] },
  { code: "NAH", name: "Tabukan Utara, Sangihe Islands", country: "Indonesia", lat: 3.6848, lng: 125.5272, airports: [
      { code: "NAH", name: "Naha" },
    ] },
  { code: "TXE", name: "Takengon", country: "Indonesia", lat: 4.7211, lng: 96.8519, airports: [
      { code: "TXE", name: "Rembele" },
    ] },
  { code: "PDO", name: "Talang Gudang-Sumatra Island", country: "Indonesia", lat: -3.2861, lng: 103.88, airports: [
      { code: "PDO", name: "Pendopo" },
    ] },
  { code: "TMH", name: "Tanah Merah", country: "Indonesia", lat: -6.0967, lng: 140.3035, airports: [
      { code: "TMH", name: "Tanah Merah" },
    ] },
  { code: "TNJ", name: "Tanjung Pinang-Bintan Island", country: "Indonesia", lat: 0.924, lng: 104.5334, airports: [
      { code: "TNJ", name: "Raja Haji Fisabilillah Intl" },
    ] },
  { code: "BEJ", name: "Tanjung Redeb - Borneo Island", country: "Indonesia", lat: 2.1478, lng: 117.4307, airports: [
      { code: "BEJ", name: "Kalimarau" },
    ] },
  { code: "TJG", name: "Tanta-Tabalong", country: "Indonesia", lat: -2.2166, lng: 115.436, airports: [
      { code: "TJG", name: "Warukin" },
    ] },
  { code: "TRK", name: "Tarakan", country: "Indonesia", lat: 3.3251, lng: 117.5642, airports: [
      { code: "TRK", name: "Juwata Intl Airport / Suharnoko Harbani AFB" },
    ] },
  { code: "TTE", name: "Ternate", country: "Indonesia", lat: 0.831, lng: 127.3816, airports: [
      { code: "TTE", name: "Sultan Babullah" },
    ] },
  { code: "TIM", name: "Timika", country: "Indonesia", lat: -4.5298, lng: 136.8874, airports: [
      { code: "TIM", name: "Mozes Kilangin" },
    ] },
  { code: "TRT", name: "Toraja", country: "Indonesia", lat: -3.1858, lng: 119.9178, airports: [
      { code: "TRT", name: "Toraja" },
    ] },
  { code: "WMX", name: "Wamena", country: "Indonesia", lat: -4.0973, lng: 138.9524, airports: [
      { code: "WMX", name: "Wamena" },
    ] },
  { code: "WNI", name: "Wangi-wangi Island", country: "Indonesia", lat: -5.2921, lng: 123.6362, airports: [
      { code: "WNI", name: "Matahora" },
    ] },
  { code: "JOG", name: "Yogyakarta", country: "Indonesia", lat: -7.9053, lng: 110.0573, airports: [
      { code: "JOG", name: "Adisutjipto Intl" },
      { code: "YIA", name: "Yogyakarta Intl" },
    ] },
  { code: "NOC", name: "Charlestown", country: "Ireland", lat: 53.9104, lng: -8.817, airports: [
      { code: "NOC", name: "Ireland West Airport Knock" },
    ] },
  { code: "ORK", name: "Cork", country: "Ireland", lat: 51.8413, lng: -8.4911, airports: [
      { code: "ORK", name: "Cork Intl" },
    ] },
  { code: "CFN", name: "Donegal", country: "Ireland", lat: 55.0442, lng: -8.341, airports: [
      { code: "CFN", name: "Donegal" },
    ] },
  { code: "DUB", name: "Dublin", country: "Ireland", lat: 53.4287, lng: -6.2621, airports: [
      { code: "DUB", name: "Dublin" },
    ] },
  { code: "KIR", name: "Farranfore", country: "Ireland", lat: 52.1809, lng: -9.5238, airports: [
      { code: "KIR", name: "Kerry" },
    ] },
  { code: "SNN", name: "Shannon", country: "Ireland", lat: 52.702, lng: -8.9248, airports: [
      { code: "SNN", name: "Shannon" },
    ] },
  { code: "ETM", name: "Eilat", country: "Israel", lat: 29.727, lng: 35.0141, airports: [
      { code: "ETM", name: "Ramon Intl" },
    ] },
  { code: "HFA", name: "Haifa", country: "Israel", lat: 32.8102, lng: 35.0437, airports: [
      { code: "HFA", name: "Uri Michaeli Haifa Intl" },
    ] },
  { code: "TLV", name: "Tel Aviv", country: "Israel", lat: 32.0114, lng: 34.8867, airports: [
      { code: "TLV", name: "Ben Gurion Intl" },
    ] },
  { code: "IOM", name: "Castletown", country: "IM", lat: 54.0831, lng: -4.6239, airports: [
      { code: "IOM", name: "Isle of Man" },
    ] },
  { code: "IXA", name: "Agartala", country: "India", lat: 23.887, lng: 91.2404, airports: [
      { code: "IXA", name: "Agartala - Maharaja Bir Bikram" },
    ] },
  { code: "AGX", name: "Agatti", country: "India", lat: 10.8237, lng: 72.176, airports: [
      { code: "AGX", name: "Agatti" },
    ] },
  { code: "AGR", name: "Agra", country: "India", lat: 27.158, lng: 77.961, airports: [
      { code: "AGR", name: "Agra Airport / Agra Air Force Station" },
    ] },
  { code: "AMD", name: "Ahmedabad", country: "India", lat: 23.0772, lng: 72.6347, airports: [
      { code: "AMD", name: "Sardar Vallabh Patel Intl" },
    ] },
  { code: "AJL", name: "Aizawl (Lengpui)", country: "India", lat: 23.8406, lng: 92.6197, airports: [
      { code: "AJL", name: "Lengpui" },
    ] },
  { code: "KQH", name: "Ajmer (Kishangarh)", country: "India", lat: 26.591, lng: 74.813, airports: [
      { code: "KQH", name: "Kishangarh Airport Ajmer" },
    ] },
  { code: "IXD", name: "Allahabad", country: "India", lat: 25.4401, lng: 81.7339, airports: [
      { code: "IXD", name: "Prayagraj" },
    ] },
  { code: "AHA", name: "Ambikapur", country: "India", lat: 22.9875, lng: 83.1961, airports: [
      { code: "AHA", name: "Maa Mahamaya" },
    ] },
  { code: "ATQ", name: "Amritsar", country: "India", lat: 31.7096, lng: 74.7973, airports: [
      { code: "ATQ", name: "Sri Guru Ram Das Ji Intl" },
    ] },
  { code: "IXU", name: "Aurangabad", country: "India", lat: 19.8627, lng: 75.3981, airports: [
      { code: "IXU", name: "Aurangabad" },
    ] },
  { code: "BLR", name: "Bangaluru", country: "India", lat: 13.1979, lng: 77.7063, airports: [
      { code: "BLR", name: "Kempegowda Intl Airport Bengaluru" },
    ] },
  { code: "BEK", name: "Bareilly", country: "India", lat: 28.4221, lng: 79.4508, airports: [
      { code: "BEK", name: "Bareilly Air Force Station" },
    ] },
  { code: "IXG", name: "Belgaum", country: "India", lat: 15.8593, lng: 74.6183, airports: [
      { code: "IXG", name: "Belagavi" },
    ] },
  { code: "BHU", name: "Bhavnagar", country: "India", lat: 21.7522, lng: 72.1852, airports: [
      { code: "BHU", name: "Bhavnagar" },
    ] },
  { code: "BHO", name: "Bhopal", country: "India", lat: 23.2875, lng: 77.3374, airports: [
      { code: "BHO", name: "Raja Bhoj Intl" },
    ] },
  { code: "BBI", name: "Bhubaneswar", country: "India", lat: 20.251, lng: 85.8147, airports: [
      { code: "BBI", name: "Biju Patnaik Intl" },
    ] },
  { code: "BHJ", name: "Bhuj", country: "India", lat: 23.2878, lng: 69.6702, airports: [
      { code: "BHJ", name: "Bhuj" },
    ] },
  { code: "KUU", name: "Bhuntar", country: "India", lat: 31.8767, lng: 77.1544, airports: [
      { code: "KUU", name: "Kullu Manali" },
    ] },
  { code: "PAB", name: "Bilaspur", country: "India", lat: 21.9884, lng: 82.111, airports: [
      { code: "PAB", name: "Bilaspur" },
    ] },
  { code: "CCJ", name: "Calicut", country: "India", lat: 11.136, lng: 75.9552, airports: [
      { code: "CCJ", name: "Calicut Intl" },
    ] },
  { code: "IXC", name: "Chandigarh", country: "India", lat: 30.6735, lng: 76.7885, airports: [
      { code: "IXC", name: "Shaheed Bhagat Singh Intl" },
    ] },
  { code: "MAA", name: "Chennai", country: "India", lat: 12.99, lng: 80.1693, airports: [
      { code: "MAA", name: "Chennai Intl" },
    ] },
  { code: "SDW", name: "Chipi", country: "India", lat: 16.0026, lng: 73.5298, airports: [
      { code: "SDW", name: "Sindhudurg" },
    ] },
  { code: "CJB", name: "Coimbatore", country: "India", lat: 11.03, lng: 77.0434, airports: [
      { code: "CJB", name: "Coimbatore Intl" },
    ] },
  { code: "DBR", name: "Darbhanga", country: "India", lat: 26.1928, lng: 85.9169, airports: [
      { code: "DBR", name: "Darbhanga" },
    ] },
  { code: "DED", name: "Dehradun (Jauligrant)", country: "India", lat: 30.1892, lng: 78.1767, airports: [
      { code: "DED", name: "Dehradun Jolly Grant" },
    ] },
  { code: "DEL", name: "Delhi", country: "India", lat: 28.5556, lng: 77.0952, airports: [
      { code: "DEL", name: "Indira Gandhi Intl" },
    ], keywords: ["new delhi", "india", "indira gandhi", "del"] },
  { code: "DIB", name: "Dibrugarh", country: "India", lat: 27.4839, lng: 95.0169, airports: [
      { code: "DIB", name: "Dibrugarh" },
    ] },
  { code: "DMU", name: "Dimapur", country: "India", lat: 25.8839, lng: 93.7711, airports: [
      { code: "DMU", name: "Dimapur" },
    ] },
  { code: "RDP", name: "Durgapur", country: "India", lat: 23.6225, lng: 87.243, airports: [
      { code: "RDP", name: "Kazi Nazrul Islam" },
    ] },
  { code: "AYJ", name: "Faizabad", country: "India", lat: 26.7477, lng: 82.1637, airports: [
      { code: "AYJ", name: "Maharshi Valmiki Intl" },
    ] },
  { code: "GAY", name: "Gaya", country: "India", lat: 24.7443, lng: 84.9512, airports: [
      { code: "GAY", name: "Gaya" },
    ] },
  { code: "GDB", name: "Gondia", country: "India", lat: 21.5268, lng: 80.2903, airports: [
      { code: "GDB", name: "Gondia" },
    ] },
  { code: "GOP", name: "Gorakhpur", country: "India", lat: 26.7397, lng: 83.4497, airports: [
      { code: "GOP", name: "Gorakhpur" },
    ] },
  { code: "GAU", name: "Guwahati", country: "India", lat: 26.1067, lng: 91.5852, airports: [
      { code: "GAU", name: "Lokpriya Gopinath Bordoloi Intl" },
    ] },
  { code: "GWL", name: "Gwalior", country: "India", lat: 26.2933, lng: 78.2278, airports: [
      { code: "GWL", name: "Gwalior" },
    ] },
  { code: "HSS", name: "Hisar", country: "India", lat: 29.1861, lng: 75.7414, airports: [
      { code: "HSS", name: "Maharaja Agrasen Intl" },
    ] },
  { code: "HGI", name: "Hollongi", country: "India", lat: 26.9668, lng: 93.6388, airports: [
      { code: "HGI", name: "Itanagar Donyi Polo Hollongi" },
    ] },
  { code: "HBX", name: "Hubballi", country: "India", lat: 15.3611, lng: 75.0821, airports: [
      { code: "HBX", name: "Hubballi" },
    ] },
  { code: "HYD", name: "Hyderabad", country: "India", lat: 17.2313, lng: 78.4299, airports: [
      { code: "HYD", name: "Rajiv Gandhi Intl" },
    ] },
  { code: "IMF", name: "Imphal", country: "India", lat: 24.76, lng: 93.8967, airports: [
      { code: "IMF", name: "Bir Tikendrajit Intl" },
    ] },
  { code: "IDR", name: "Indore", country: "India", lat: 22.7214, lng: 75.8005, airports: [
      { code: "IDR", name: "Devi Ahilya Bai Holkar Intl" },
    ] },
  { code: "JLR", name: "Jabalpur", country: "India", lat: 23.1778, lng: 80.052, airports: [
      { code: "JLR", name: "Jabalpur" },
    ] },
  { code: "JAI", name: "Jaipur", country: "India", lat: 26.8242, lng: 75.8122, airports: [
      { code: "JAI", name: "Jaipur Intl" },
    ] },
  { code: "JSA", name: "Jaisalmer", country: "India", lat: 26.8887, lng: 70.865, airports: [
      { code: "JSA", name: "Jaisalmer" },
    ] },
  { code: "IXJ", name: "Jammu", country: "India", lat: 32.6888, lng: 74.8382, airports: [
      { code: "IXJ", name: "Jammu" },
    ] },
  { code: "JGA", name: "Jamnagar", country: "India", lat: 22.4655, lng: 70.0126, airports: [
      { code: "JGA", name: "Jamnagar" },
    ] },
  { code: "JDH", name: "Jodhpur", country: "India", lat: 26.2511, lng: 73.0489, airports: [
      { code: "JDH", name: "Jodhpur" },
    ] },
  { code: "JRH", name: "Jorhat", country: "India", lat: 26.7305, lng: 94.1754, airports: [
      { code: "JRH", name: "Jorhat" },
    ] },
  { code: "CDP", name: "Kadapa", country: "India", lat: 14.5132, lng: 78.7692, airports: [
      { code: "CDP", name: "Kadapa" },
    ] },
  { code: "SAG", name: "Kakadi", country: "India", lat: 19.6892, lng: 74.3737, airports: [
      { code: "SAG", name: "Shirdi Intl" },
    ] },
  { code: "IXY", name: "Kandla", country: "India", lat: 23.1127, lng: 70.1003, airports: [
      { code: "IXY", name: "Kandla" },
    ] },
  { code: "DHM", name: "Kangra", country: "India", lat: 32.1649, lng: 76.263, airports: [
      { code: "DHM", name: "Kangra" },
    ] },
  { code: "CNN", name: "Kannur", country: "India", lat: 11.9163, lng: 75.545, airports: [
      { code: "CNN", name: "Kannur Intl" },
    ] },
  { code: "KNU", name: "Kanpur", country: "India", lat: 26.4043, lng: 80.4101, airports: [
      { code: "KNU", name: "Kanpur" },
    ] },
  { code: "IXK", name: "Keshod", country: "India", lat: 21.3171, lng: 70.2704, airports: [
      { code: "IXK", name: "Keshod" },
    ] },
  { code: "HJR", name: "Khajuraho", country: "India", lat: 24.8172, lng: 79.9186, airports: [
      { code: "HJR", name: "Khajuraho" },
    ] },
  { code: "COK", name: "Kochi", country: "India", lat: 10.151, lng: 76.4008, airports: [
      { code: "COK", name: "Cochin Intl" },
    ] },
  { code: "KLH", name: "Kolhapur", country: "India", lat: 16.6647, lng: 74.2894, airports: [
      { code: "KLH", name: "Kolhapur" },
    ] },
  { code: "CCU", name: "Kolkata", country: "India", lat: 22.654, lng: 88.4477, airports: [
      { code: "CCU", name: "Netaji Subhash Chandra Bose Intl" },
    ] },
  { code: "LTU", name: "Latur", country: "India", lat: 18.4115, lng: 76.4647, airports: [
      { code: "LTU", name: "Murod Kond" },
    ] },
  { code: "IXL", name: "Leh", country: "India", lat: 34.1359, lng: 77.5465, airports: [
      { code: "IXL", name: "Leh Kushok Bakula Rimpochee" },
    ] },
  { code: "IXI", name: "Lilabari", country: "India", lat: 27.2957, lng: 94.0973, airports: [
      { code: "IXI", name: "Lilabari North Lakhimpur" },
    ] },
  { code: "LKO", name: "Lucknow", country: "India", lat: 26.7606, lng: 80.8893, airports: [
      { code: "LKO", name: "Chaudhary Charan Singh Intl" },
    ] },
  { code: "RJA", name: "Madhurapudi", country: "India", lat: 17.1058, lng: 81.8132, airports: [
      { code: "RJA", name: "Rajahmundry" },
    ] },
  { code: "IXM", name: "Madurai", country: "India", lat: 9.8345, lng: 78.0934, airports: [
      { code: "IXM", name: "Madurai" },
    ] },
  { code: "IXE", name: "Mangaluru", country: "India", lat: 12.9554, lng: 74.8849, airports: [
      { code: "IXE", name: "Mangaluru Intl" },
    ] },
  { code: "GOX", name: "Mopa", country: "India", lat: 15.7443, lng: 73.8606, airports: [
      { code: "GOX", name: "Manohar Intl" },
    ] },
  { code: "MZS", name: "Moradabad", country: "India", lat: 28.8175, lng: 78.9219, airports: [
      { code: "MZS", name: "Moradabad" },
    ] },
  { code: "BOM", name: "Mumbai", country: "India", lat: 19.0887, lng: 72.8679, airports: [
      { code: "BOM", name: "Chhatrapati Shivaji Maharaj Intl" },
    ], keywords: ["bombay", "india", "bom"] },
  { code: "MYQ", name: "Mysore", country: "India", lat: 12.2298, lng: 76.6537, airports: [
      { code: "MYQ", name: "Mysore" },
    ] },
  { code: "NAG", name: "Nagpur", country: "India", lat: 21.0922, lng: 79.0472, airports: [
      { code: "NAG", name: "Dr. Babasaheb Ambedkar Intl" },
    ] },
  { code: "NDC", name: "Nanded", country: "India", lat: 19.1833, lng: 77.3167, airports: [
      { code: "NDC", name: "Nanded" },
    ] },
  { code: "ISK", name: "Nasik", country: "India", lat: 20.1191, lng: 73.9129, airports: [
      { code: "ISK", name: "Nashik" },
    ] },
  { code: "NMI", name: "Navi Mumbai", country: "India", lat: 18.9846, lng: 73.0653, airports: [
      { code: "NMI", name: "Navi Mumbai Intl" },
    ] },
  { code: "KJB", name: "Orvakal", country: "India", lat: 15.7163, lng: 78.1692, airports: [
      { code: "KJB", name: "Kurnool" },
    ] },
  { code: "PGH", name: "Pantnagar", country: "India", lat: 29.0334, lng: 79.4737, airports: [
      { code: "PGH", name: "Pantnagar" },
    ] },
  { code: "IXP", name: "Pathankot", country: "India", lat: 32.2336, lng: 75.6344, airports: [
      { code: "IXP", name: "Pathankot" },
    ] },
  { code: "PAT", name: "Patna", country: "India", lat: 25.5913, lng: 85.088, airports: [
      { code: "PAT", name: "Jay Prakash Narayan" },
    ] },
  { code: "PBD", name: "Porbandar", country: "India", lat: 21.6495, lng: 69.6564, airports: [
      { code: "PBD", name: "Porbandar" },
    ] },
  { code: "IXZ", name: "Port Blair", country: "India", lat: 11.6402, lng: 92.729, airports: [
      { code: "IXZ", name: "Veer Savarkar Intl Airport / INS Utkrosh" },
    ] },
  { code: "PNY", name: "Puducherry (Pondicherry)", country: "India", lat: 11.968, lng: 79.812, airports: [
      { code: "PNY", name: "Pondicherry" },
    ] },
  { code: "PNQ", name: "Pune", country: "India", lat: 18.5821, lng: 73.9197, airports: [
      { code: "PNQ", name: "Pune Intl" },
    ] },
  { code: "RPR", name: "Raipur", country: "India", lat: 21.1804, lng: 81.7388, airports: [
      { code: "RPR", name: "Swami Vivekananda" },
    ] },
  { code: "IXR", name: "Ranchi", country: "India", lat: 23.3143, lng: 85.3217, airports: [
      { code: "IXR", name: "Birsa Munda" },
    ] },
  { code: "REW", name: "Rewa", country: "India", lat: 24.5034, lng: 81.2203, airports: [
      { code: "REW", name: "Rewa Airport, Chorhata, REWA" },
    ] },
  { code: "SHL", name: "Shillong", country: "India", lat: 25.7036, lng: 91.9787, airports: [
      { code: "SHL", name: "Shillong" },
    ] },
  { code: "IXS", name: "Silchar", country: "India", lat: 24.9129, lng: 92.9787, airports: [
      { code: "IXS", name: "Silchar" },
    ] },
  { code: "IXB", name: "Siliguri", country: "India", lat: 26.6812, lng: 88.3286, airports: [
      { code: "IXB", name: "Bagdogra" },
    ] },
  { code: "SXR", name: "Srinagar", country: "India", lat: 33.9871, lng: 74.7742, airports: [
      { code: "SXR", name: "Sheikh ul Alam Intl" },
    ] },
  { code: "STV", name: "Surat", country: "India", lat: 21.1155, lng: 72.7433, airports: [
      { code: "STV", name: "Surat Intl" },
    ] },
  { code: "TEZ", name: "Tezpur", country: "India", lat: 26.7091, lng: 92.7847, airports: [
      { code: "TEZ", name: "Tezpur" },
    ] },
  { code: "TRV", name: "Thiruvananthapuram", country: "India", lat: 8.4819, lng: 76.92, airports: [
      { code: "TRV", name: "Thiruvananthapuram Intl" },
    ] },
  { code: "TRZ", name: "Tiruchirappalli", country: "India", lat: 10.7629, lng: 78.7177, airports: [
      { code: "TRZ", name: "Tiruchirappalli Intl" },
    ] },
  { code: "TIR", name: "Tirupati", country: "India", lat: 13.632, lng: 79.5399, airports: [
      { code: "TIR", name: "Tirupati Intl" },
    ] },
  { code: "UDR", name: "Udaipur", country: "India", lat: 24.6177, lng: 73.8961, airports: [
      { code: "UDR", name: "Maharana Pratap" },
    ] },
  { code: "BDQ", name: "Vadodara", country: "India", lat: 22.3362, lng: 73.2263, airports: [
      { code: "BDQ", name: "Vadodara Intl" },
    ] },
  { code: "VNS", name: "Varanasi", country: "India", lat: 25.4522, lng: 82.8625, airports: [
      { code: "VNS", name: "Lal Bahadur Shastri Intl" },
    ] },
  { code: "GOI", name: "Vasco da Gama", country: "India", lat: 15.3801, lng: 73.8333, airports: [
      { code: "GOI", name: "Goa Dabolim Intl" },
    ] },
  { code: "VGA", name: "Vijayawada", country: "India", lat: 16.53, lng: 80.8049, airports: [
      { code: "VGA", name: "Vijayawada Intl" },
    ] },
  { code: "VTZ", name: "Visakhapatnam", country: "India", lat: 17.7235, lng: 83.2277, airports: [
      { code: "VTZ", name: "Visakhapatnam Intl" },
    ] },
  { code: "EBL", name: "Arbil", country: "Iraq", lat: 36.236, lng: 43.9466, airports: [
      { code: "EBL", name: "Erbil Intl" },
    ] },
  { code: "BGW", name: "Baghdad", country: "Iraq", lat: 33.2625, lng: 44.2346, airports: [
      { code: "BGW", name: "Baghdad Intl Airport / New Al Muthana" },
    ] },
  { code: "BSR", name: "Basra", country: "Iraq", lat: 30.5491, lng: 47.6621, airports: [
      { code: "BSR", name: "Basra Intl" },
    ] },
  { code: "NJF", name: "Najaf", country: "Iraq", lat: 31.9911, lng: 44.405, airports: [
      { code: "NJF", name: "Al Najaf Intl" },
    ] },
  { code: "ISU", name: "Sulaymaniyah", country: "Iraq", lat: 35.5617, lng: 45.3167, airports: [
      { code: "ISU", name: "Sulaymaniyah Intl" },
    ] },
  { code: "ABD", name: "Abadan", country: "Iran", lat: 30.3679, lng: 48.2301, airports: [
      { code: "ABD", name: "Abadan Ayatollah Jami Intl" },
    ] },
  { code: "AEU", name: "Abu Musa", country: "Iran", lat: 25.8757, lng: 55.033, airports: [
      { code: "AEU", name: "Abu Musa Island" },
    ] },
  { code: "AWZ", name: "Ahvaz", country: "Iran", lat: 31.3364, lng: 48.7638, airports: [
      { code: "AWZ", name: "Qasem Soleimani Intl" },
    ] },
  { code: "ADU", name: "Ardabil", country: "Iran", lat: 38.3257, lng: 48.4244, airports: [
      { code: "ADU", name: "Ardabil" },
    ] },
  { code: "BXR", name: "Bam", country: "Iran", lat: 29.0842, lng: 58.45, airports: [
      { code: "BXR", name: "Bam" },
    ] },
  { code: "BND", name: "Bandar Abbas", country: "Iran", lat: 27.2183, lng: 56.3778, airports: [
      { code: "BND", name: "Bandar Abbas Intl" },
    ] },
  { code: "BDH", name: "Bandar Lengeh", country: "Iran", lat: 26.5323, lng: 54.8248, airports: [
      { code: "BDH", name: "Bandar Lengeh Intl" },
    ] },
  { code: "XBJ", name: "Birjand", country: "Iran", lat: 32.8965, lng: 59.2813, airports: [
      { code: "XBJ", name: "Birjand Intl" },
    ] },
  { code: "BJB", name: "Bojnord", country: "Iran", lat: 37.493, lng: 57.3082, airports: [
      { code: "BJB", name: "Bojnord" },
    ] },
  { code: "BUZ", name: "Bushehr", country: "Iran", lat: 28.9448, lng: 50.8346, airports: [
      { code: "BUZ", name: "Bushehr" },
    ] },
  { code: "DEF", name: "Dezful", country: "Iran", lat: 32.4344, lng: 48.3976, airports: [
      { code: "DEF", name: "Dezful" },
    ] },
  { code: "GCH", name: "Gachsaran", country: "Iran", lat: 30.3339, lng: 50.8338, airports: [
      { code: "GCH", name: "Gachsaran" },
    ] },
  { code: "HDM", name: "Hamadan", country: "Iran", lat: 34.8692, lng: 48.5525, airports: [
      { code: "HDM", name: "Hamadan" },
    ] },
  { code: "IFN", name: "Isfahan", country: "Iran", lat: 32.7551, lng: 51.8839, airports: [
      { code: "IFN", name: "Isfahan Shahid Beheshti Intl" },
    ] },
  { code: "PYK", name: "Karaj", country: "Iran", lat: 35.7761, lng: 50.8267, airports: [
      { code: "PYK", name: "Payam Karaj Intl" },
    ] },
  { code: "KKS", name: "Kashan", country: "Iran", lat: 33.8953, lng: 51.577, airports: [
      { code: "KKS", name: "Kashan" },
    ] },
  { code: "KER", name: "Kerman", country: "Iran", lat: 30.2713, lng: 56.9497, airports: [
      { code: "KER", name: "Ayatollah Hashemi Rafsanjani Intl" },
    ] },
  { code: "KSH", name: "Kermanshah", country: "Iran", lat: 34.3459, lng: 47.1581, airports: [
      { code: "KSH", name: "Shahid Ashrafi Esfahani" },
    ] },
  { code: "KHK", name: "Khark", country: "Iran", lat: 29.2605, lng: 50.3222, airports: [
      { code: "KHK", name: "Khark" },
    ] },
  { code: "PGU", name: "Khiyaroo", country: "Iran", lat: 27.3796, lng: 52.7377, airports: [
      { code: "PGU", name: "Persian Gulf Intl" },
    ] },
  { code: "KHD", name: "Khoram Abad", country: "Iran", lat: 33.4354, lng: 48.2829, airports: [
      { code: "KHD", name: "Khoram Abad" },
    ] },
  { code: "KIH", name: "Kish Island", country: "Iran", lat: 26.5254, lng: 53.9805, airports: [
      { code: "KIH", name: "Kish Intl" },
    ] },
  { code: "ZBR", name: "Konarak", country: "Iran", lat: 25.4432, lng: 60.3822, airports: [
      { code: "ZBR", name: "Chabahar Konarak Intl" },
    ] },
  { code: "LFM", name: "Lamerd", country: "Iran", lat: 27.3727, lng: 53.1888, airports: [
      { code: "LFM", name: "Lamerd" },
    ] },
  { code: "LRR", name: "Lar", country: "Iran", lat: 27.6747, lng: 54.3833, airports: [
      { code: "LRR", name: "Lar" },
    ] },
  { code: "MRX", name: "Mahshahr", country: "Iran", lat: 30.5562, lng: 49.1519, airports: [
      { code: "MRX", name: "Mahshahr" },
    ] },
  { code: "MHD", name: "Mashhad", country: "Iran", lat: 36.2348, lng: 59.6429, airports: [
      { code: "MHD", name: "Mashhad Intl" },
    ] },
  { code: "NSH", name: "Nowshahr", country: "Iran", lat: 36.6643, lng: 51.4627, airports: [
      { code: "NSH", name: "Nowshahr" },
    ] },
  { code: "GSM", name: "Qeshm(Dayrestan)", country: "Iran", lat: 26.7546, lng: 55.9024, airports: [
      { code: "GSM", name: "Qeshm Intl" },
    ] },
  { code: "RJN", name: "Rafsanjan", country: "Iran", lat: 30.2983, lng: 56.049, airports: [
      { code: "RJN", name: "Rafsanjan" },
    ] },
  { code: "RZR", name: "Ramsar", country: "Iran", lat: 36.907, lng: 50.6873, airports: [
      { code: "RZR", name: "Ramsar" },
    ] },
  { code: "RAS", name: "Rasht", country: "Iran", lat: 37.3233, lng: 49.6178, airports: [
      { code: "RAS", name: "Sardar-e-Jangal" },
    ] },
  { code: "AFZ", name: "Sabzevar", country: "Iran", lat: 36.1681, lng: 57.5952, airports: [
      { code: "AFZ", name: "Sabzevar National" },
    ] },
  { code: "SDG", name: "Sanandaj", country: "Iran", lat: 35.2459, lng: 47.0092, airports: [
      { code: "SDG", name: "Sanandaj" },
    ] },
  { code: "SRY", name: "Sari", country: "Iran", lat: 36.6444, lng: 53.1888, airports: [
      { code: "SRY", name: "Sari Dasht-e Naz Intl" },
    ] },
  { code: "SYZ", name: "Shiraz", country: "Iran", lat: 29.5392, lng: 52.5898, airports: [
      { code: "SYZ", name: "Shiraz Shahid Dastghaib Intl" },
    ] },
  { code: "TBZ", name: "Tabriz", country: "Iran", lat: 38.1339, lng: 46.235, airports: [
      { code: "TBZ", name: "Tabriz Intl" },
    ] },
  { code: "IKA", name: "Tehran", country: "Iran", lat: 35.4161, lng: 51.1522, airports: [
      { code: "IKA", name: "Imam Khomeini Intl" },
      { code: "THR", name: "Mehrabad Intl" },
    ] },
  { code: "OMH", name: "Urmia", country: "Iran", lat: 37.6681, lng: 45.0687, airports: [
      { code: "OMH", name: "Urmia" },
    ] },
  { code: "AZD", name: "Yazd", country: "Iran", lat: 31.9049, lng: 54.2765, airports: [
      { code: "AZD", name: "Shahid Sadooghi" },
    ] },
  { code: "ZAH", name: "Zahedan", country: "Iran", lat: 29.4757, lng: 60.9062, airports: [
      { code: "ZAH", name: "Zahedan Intl" },
    ] },
  { code: "AEY", name: "Akureyri", country: "Iceland", lat: 65.6566, lng: -18.072, airports: [
      { code: "AEY", name: "Akureyri Intl" },
    ] },
  { code: "EGS", name: "Egilsstaðir", country: "Iceland", lat: 65.2833, lng: -14.4014, airports: [
      { code: "EGS", name: "Egilsstaðir" },
    ] },
  { code: "GRY", name: "Grímsey/Sandvík", country: "Iceland", lat: 66.5458, lng: -18.0173, airports: [
      { code: "GRY", name: "Grímsey" },
    ] },
  { code: "HFN", name: "Höfn", country: "Iceland", lat: 64.2956, lng: -15.2272, airports: [
      { code: "HFN", name: "Hornafjörður" },
    ] },
  { code: "IFJ", name: "Ísafjörður", country: "Iceland", lat: 66.0581, lng: -23.1353, airports: [
      { code: "IFJ", name: "Ísafjörður" },
    ] },
  { code: "KEF", name: "Reykjavík", country: "Iceland", lat: 63.985, lng: -22.6056, airports: [
      { code: "KEF", name: "Keflavik Intl" },
      { code: "RKV", name: "Reykjavík Domestic" },
    ] },
  { code: "AHO", name: "Alghero", country: "Italy", lat: 40.6321, lng: 8.2908, airports: [
      { code: "AHO", name: "Alghero-Fertilia" },
    ] },
  { code: "BRI", name: "Bari", country: "Italy", lat: 41.1389, lng: 16.7606, airports: [
      { code: "BRI", name: "Bari Karol Wojtyła Intl" },
    ] },
  { code: "BLQ", name: "Bologna", country: "Italy", lat: 44.5354, lng: 11.2887, airports: [
      { code: "BLQ", name: "Bologna Guglielmo Marconi" },
    ] },
  { code: "BZO", name: "Bolzano (BZ)", country: "Italy", lat: 46.4592, lng: 11.3261, airports: [
      { code: "BZO", name: "Bolzano" },
    ] },
  { code: "BDS", name: "Brindisi", country: "Italy", lat: 40.6576, lng: 17.947, airports: [
      { code: "BDS", name: "Brindisi" },
    ] },
  { code: "CAG", name: "Cagliari", country: "Italy", lat: 39.2515, lng: 9.0543, airports: [
      { code: "CAG", name: "Cagliari Elmas" },
    ] },
  { code: "EBA", name: "Campo nell'Elba (LI)", country: "Italy", lat: 42.7609, lng: 10.2398, airports: [
      { code: "EBA", name: "Marina di Campo" },
    ] },
  { code: "VRN", name: "Caselle (VR)", country: "Italy", lat: 45.395, lng: 10.8873, airports: [
      { code: "VRN", name: "Verona Villafranca Valerio Catullo" },
    ] },
  { code: "TRN", name: "Caselle Torinese (TO)", country: "Italy", lat: 45.2008, lng: 7.6496, airports: [
      { code: "TRN", name: "Turin" },
    ] },
  { code: "CTA", name: "Catania", country: "Italy", lat: 37.4668, lng: 15.0664, airports: [
      { code: "CTA", name: "Catania-Fontanarossa" },
    ] },
  { code: "CIY", name: "Comiso", country: "Italy", lat: 36.9958, lng: 14.6089, airports: [
      { code: "CIY", name: "Comiso" },
    ] },
  { code: "AOI", name: "Falconara Marittima (AN)", country: "Italy", lat: 43.6163, lng: 13.3623, airports: [
      { code: "AOI", name: "Marche" },
    ] },
  { code: "FLR", name: "Firenze (FI)", country: "Italy", lat: 43.8086, lng: 11.2028, airports: [
      { code: "FLR", name: "Florence Airport, Peretola" },
    ] },
  { code: "FOG", name: "Foggia (FG)", country: "Italy", lat: 41.4336, lng: 15.5346, airports: [
      { code: "FOG", name: "Foggia Gino Lisa" },
    ] },
  { code: "FRL", name: "Forlì (FC)", country: "Italy", lat: 44.1948, lng: 12.0701, airports: [
      { code: "FRL", name: "Forlì-Luigi Ridolfi Intl" },
    ] },
  { code: "GOA", name: "Genova (GE)", country: "Italy", lat: 44.412, lng: 8.8407, airports: [
      { code: "GOA", name: "Genoa Cristoforo Colombo" },
    ] },
  { code: "CRV", name: "Isola di Capo Rizzuto (KR)", country: "Italy", lat: 38.9972, lng: 17.0802, airports: [
      { code: "CRV", name: "Crotone Sant'Anna Pythagoras" },
    ] },
  { code: "SUF", name: "Lamezia Terme (CZ)", country: "Italy", lat: 38.9062, lng: 16.246, airports: [
      { code: "SUF", name: "Lamezia Terme Sant'Eufemia Intl" },
    ] },
  { code: "LMP", name: "Lampedusa", country: "Italy", lat: 35.4979, lng: 12.6181, airports: [
      { code: "LMP", name: "Lampedusa" },
    ] },
  { code: "CUF", name: "Levaldigi (CN)", country: "Italy", lat: 44.5475, lng: 7.623, airports: [
      { code: "CUF", name: "Cuneo Intl" },
    ] },
  { code: "MIL", name: "Milan", country: "Italy", lat: 45.6306, lng: 8.7281, airports: [
      { code: "MXP", name: "Milan Malpensa Intl" },
      { code: "BGY", name: "Il Caravaggio Intl" },
      { code: "LIN", name: "Milano Linate" },
    ], keywords: ["milano", "malpensa", "linate", "bergamo", "mxp"] },
  { code: "VBS", name: "Montichiari (BS)", country: "Italy", lat: 45.4289, lng: 10.3306, airports: [
      { code: "VBS", name: "Brescia Gabriele d'Annunzio" },
    ] },
  { code: "NAP", name: "Napoli", country: "Italy", lat: 40.886, lng: 14.2908, airports: [
      { code: "NAP", name: "Naples Intl" },
    ] },
  { code: "OLB", name: "Olbia (SS)", country: "Italy", lat: 40.899, lng: 9.5185, airports: [
      { code: "OLB", name: "Olbia Costa Smeralda" },
    ] },
  { code: "PMO", name: "Palermo", country: "Italy", lat: 38.176, lng: 13.091, airports: [
      { code: "PMO", name: "Falcone–Borsellino" },
    ] },
  { code: "PNL", name: "Pantelleria (TP)", country: "Italy", lat: 36.8165, lng: 11.9689, airports: [
      { code: "PNL", name: "Pantelleria" },
    ] },
  { code: "PMF", name: "Parma (PR)", country: "Italy", lat: 44.8264, lng: 10.2971, airports: [
      { code: "PMF", name: "Parma" },
    ] },
  { code: "PEG", name: "Perugia (PG)", country: "Italy", lat: 43.0959, lng: 12.5132, airports: [
      { code: "PEG", name: "Perugia San Francesco d'Assisi – Umbria Intl" },
    ] },
  { code: "PSR", name: "Pescara", country: "Italy", lat: 42.4311, lng: 14.183, airports: [
      { code: "PSR", name: "Abruzzo" },
    ] },
  { code: "PSA", name: "Pisa (PI)", country: "Italy", lat: 43.6839, lng: 10.3927, airports: [
      { code: "PSA", name: "Pisa Intl" },
    ] },
  { code: "REG", name: "Reggio Calabria", country: "Italy", lat: 38.0712, lng: 15.6516, airports: [
      { code: "REG", name: "Reggio Calabria" },
    ] },
  { code: "RMI", name: "Rimini (RN)", country: "Italy", lat: 44.02, lng: 12.6122, airports: [
      { code: "RMI", name: "Federico Fellini Intl" },
    ] },
  { code: "ROM", name: "Rome", country: "Italy", lat: 41.8045, lng: 12.252, airports: [
      { code: "FCO", name: "Rome–Fiumicino Leonardo da Vinci Intl" },
      { code: "CIA", name: "Ciampino–G. B. Pastine Intl" },
    ], keywords: ["roma", "fiumicino", "ciampino", "fco"] },
  { code: "TRS", name: "Ronchi dei Legionari/Trieste", country: "Italy", lat: 45.8275, lng: 13.4722, airports: [
      { code: "TRS", name: "Trieste" },
    ] },
  { code: "QSR", name: "Salerno", country: "Italy", lat: 40.6204, lng: 14.9113, airports: [
      { code: "QSR", name: "Salerno Costa d'Amalfi" },
    ] },
  { code: "TPS", name: "Trapani (TP)", country: "Italy", lat: 37.9114, lng: 12.488, airports: [
      { code: "TPS", name: "Vincenzo Florio Airport Trapani-Birgi" },
    ] },
  { code: "TSF", name: "Treviso (TV)", country: "Italy", lat: 45.6484, lng: 12.1944, airports: [
      { code: "TSF", name: "Treviso" },
    ] },
  { code: "VCE", name: "Venezia (VE)", country: "Italy", lat: 45.5053, lng: 12.3519, airports: [
      { code: "VCE", name: "Venice Marco Polo" },
    ] },
  { code: "JER", name: "St. Peter", country: "JE", lat: 49.2079, lng: -2.1955, airports: [
      { code: "JER", name: "Jersey" },
    ] },
  { code: "OCJ", name: "Boscobel", country: "Jamaica", lat: 18.4041, lng: -76.9698, airports: [
      { code: "OCJ", name: "Ian Fleming Intl" },
    ] },
  { code: "KIN", name: "Kingston", country: "Jamaica", lat: 17.9357, lng: -76.7875, airports: [
      { code: "KIN", name: "Norman Manley Intl" },
    ] },
  { code: "MBJ", name: "Montego Bay", country: "Jamaica", lat: 18.5034, lng: -77.9132, airports: [
      { code: "MBJ", name: "Sangster Intl" },
    ] },
  { code: "KTP", name: "Tinson Pen", country: "Jamaica", lat: 17.9886, lng: -76.8238, airports: [
      { code: "KTP", name: "Tinson Pen" },
    ] },
  { code: "ADJ", name: "Amman", country: "Jordan", lat: 31.7226, lng: 35.9932, airports: [
      { code: "ADJ", name: "Marka Intl (Amman Civil)" },
      { code: "AMM", name: "Queen Alia Intl" },
    ] },
  { code: "AQJ", name: "Aqaba", country: "Jordan", lat: 29.6116, lng: 35.0181, airports: [
      { code: "AQJ", name: "King Hussein Intl" },
    ] },
  { code: "AXT", name: "Akita", country: "Japan", lat: 39.6156, lng: 140.219, airports: [
      { code: "AXT", name: "Akita" },
    ] },
  { code: "TKN", name: "Amagi", country: "Japan", lat: 27.8364, lng: 128.8814, airports: [
      { code: "TKN", name: "Tokunoshima" },
    ] },
  { code: "ASJ", name: "Amami", country: "Japan", lat: 28.4306, lng: 129.713, airports: [
      { code: "ASJ", name: "Amami" },
    ] },
  { code: "AOJ", name: "Aomori", country: "Japan", lat: 40.7338, lng: 140.6895, airports: [
      { code: "AOJ", name: "Aomori" },
    ] },
  { code: "FUK", name: "Fukuoka", country: "Japan", lat: 33.5859, lng: 130.451, airports: [
      { code: "FUK", name: "Fukuoka" },
    ] },
  { code: "FUJ", name: "Goto", country: "Japan", lat: 32.6663, lng: 128.833, airports: [
      { code: "FUJ", name: "Fukue" },
    ] },
  { code: "HAC", name: "Hachijojima", country: "Japan", lat: 33.1148, lng: 139.7856, airports: [
      { code: "HAC", name: "Hachijojima" },
    ] },
  { code: "HKD", name: "Hakodate", country: "Japan", lat: 41.77, lng: 140.822, airports: [
      { code: "HKD", name: "Hakodate" },
    ] },
  { code: "HNA", name: "Hanamaki", country: "Japan", lat: 39.4286, lng: 141.135, airports: [
      { code: "HNA", name: "Iwate Hanamaki" },
    ] },
  { code: "AKJ", name: "Higashikagura", country: "Japan", lat: 43.6708, lng: 142.447, airports: [
      { code: "AKJ", name: "Asahikawa" },
    ] },
  { code: "GAJ", name: "Higashine", country: "Japan", lat: 38.4119, lng: 140.371, airports: [
      { code: "GAJ", name: "Yamagata" },
    ] },
  { code: "HIJ", name: "Hiroshima", country: "Japan", lat: 34.4361, lng: 132.919, airports: [
      { code: "HIJ", name: "Hiroshima" },
    ] },
  { code: "IKI", name: "Iki", country: "Japan", lat: 33.749, lng: 129.785, airports: [
      { code: "IKI", name: "Iki" },
    ] },
  { code: "ISG", name: "Ishigaki", country: "Japan", lat: 24.3964, lng: 124.245, airports: [
      { code: "ISG", name: "New Ishigaki" },
    ] },
  { code: "IWK", name: "Iwakuni", country: "Japan", lat: 34.1463, lng: 132.2472, airports: [
      { code: "IWK", name: "Iwakuni Kintaikyo" },
    ] },
  { code: "OIM", name: "Izu Oshima", country: "Japan", lat: 34.782, lng: 139.36, airports: [
      { code: "OIM", name: "Oshima" },
    ] },
  { code: "IZO", name: "Izumo", country: "Japan", lat: 35.4136, lng: 132.89, airports: [
      { code: "IZO", name: "Izumo Enmusubi" },
    ] },
  { code: "KOJ", name: "Kagoshima", country: "Japan", lat: 31.8034, lng: 130.719, airports: [
      { code: "KOJ", name: "Kagoshima" },
    ] },
  { code: "KMQ", name: "Kanazawa", country: "Japan", lat: 36.3934, lng: 136.4069, airports: [
      { code: "KMQ", name: "Komatsu Airport / JASDF Komatsu" },
    ] },
  { code: "KKX", name: "Kikai", country: "Japan", lat: 28.3213, lng: 129.928, airports: [
      { code: "KKX", name: "Kikai" },
    ] },
  { code: "ONJ", name: "Kitaakita", country: "Japan", lat: 40.1919, lng: 140.371, airports: [
      { code: "ONJ", name: "Odate Noshiro" },
    ] },
  { code: "KTD", name: "Kitadaitōjima", country: "Japan", lat: 25.9447, lng: 131.327, airports: [
      { code: "KTD", name: "Kitadaito" },
    ] },
  { code: "KKJ", name: "Kitakyushu", country: "Japan", lat: 33.8459, lng: 131.035, airports: [
      { code: "KKJ", name: "Kitakyushu" },
    ] },
  { code: "UKB", name: "Kobe", country: "Japan", lat: 34.6328, lng: 135.224, airports: [
      { code: "UKB", name: "Kobe" },
    ] },
  { code: "KMJ", name: "Kumamoto", country: "Japan", lat: 32.8373, lng: 130.855, airports: [
      { code: "KMJ", name: "Kumamoto" },
    ] },
  { code: "UEO", name: "Kumejima", country: "Japan", lat: 26.3634, lng: 126.7138, airports: [
      { code: "UEO", name: "Kumejima" },
    ] },
  { code: "KUH", name: "Kushiro", country: "Japan", lat: 43.041, lng: 144.193, airports: [
      { code: "KUH", name: "Kushiro" },
    ] },
  { code: "FSZ", name: "Makinohara / Shimada", country: "Japan", lat: 34.795, lng: 138.191, airports: [
      { code: "FSZ", name: "Mount Fuji Shizuoka" },
    ] },
  { code: "IWJ", name: "Masuda", country: "Japan", lat: 34.6764, lng: 131.79, airports: [
      { code: "IWJ", name: "Iwami" },
    ] },
  { code: "MMJ", name: "Matsumoto", country: "Japan", lat: 36.1668, lng: 137.923, airports: [
      { code: "MMJ", name: "Shinshu-Matsumoto" },
    ] },
  { code: "MYJ", name: "Matsuyama", country: "Japan", lat: 33.8269, lng: 132.7001, airports: [
      { code: "MYJ", name: "Matsuyama" },
    ] },
  { code: "MMD", name: "Minamidaito", country: "Japan", lat: 25.8465, lng: 131.263, airports: [
      { code: "MMD", name: "Minamidaito" },
    ] },
  { code: "MSJ", name: "Misawa", country: "Japan", lat: 40.7032, lng: 141.368, airports: [
      { code: "MSJ", name: "Misawa Airport / Misawa" },
    ] },
  { code: "MYE", name: "Miyakejima", country: "Japan", lat: 34.0736, lng: 139.56, airports: [
      { code: "MYE", name: "Miyakejima" },
    ] },
  { code: "MMY", name: "Miyakojima", country: "Japan", lat: 24.7828, lng: 125.295, airports: [
      { code: "MMY", name: "Miyako" },
      { code: "SHI", name: "Shimojishima" },
    ] },
  { code: "KMI", name: "Miyazaki", country: "Japan", lat: 31.8772, lng: 131.449, airports: [
      { code: "KMI", name: "Miyazaki" },
    ] },
  { code: "MBE", name: "Monbetsu", country: "Japan", lat: 44.3039, lng: 143.404, airports: [
      { code: "MBE", name: "Monbetsu" },
    ] },
  { code: "NGS", name: "Nagasaki", country: "Japan", lat: 32.9169, lng: 129.914, airports: [
      { code: "NGS", name: "Nagasaki" },
    ] },
  { code: "NKM", name: "Nagoya", country: "Japan", lat: 35.2558, lng: 136.9241, airports: [
      { code: "NKM", name: "Nagoya Airport / JASDF Komaki" },
    ] },
  { code: "OKA", name: "Naha", country: "Japan", lat: 26.1924, lng: 127.6398, airports: [
      { code: "OKA", name: "Naha Intl" },
    ] },
  { code: "SHB", name: "Nakashibetsu", country: "Japan", lat: 43.5775, lng: 144.96, airports: [
      { code: "SHB", name: "Nakashibetsu" },
    ] },
  { code: "KCZ", name: "Nankoku", country: "Japan", lat: 33.5452, lng: 133.6702, airports: [
      { code: "KCZ", name: "Kochi Ryoma" },
    ] },
  { code: "SDJ", name: "Natori", country: "Japan", lat: 38.1397, lng: 140.917, airports: [
      { code: "SDJ", name: "Sendai" },
    ] },
  { code: "KIJ", name: "Niigata", country: "Japan", lat: 37.9542, lng: 139.1122, airports: [
      { code: "KIJ", name: "Niigata" },
    ] },
  { code: "OBO", name: "Obihiro", country: "Japan", lat: 42.7333, lng: 143.217, airports: [
      { code: "OBO", name: "Tokachi-Obihiro" },
    ] },
  { code: "OIT", name: "Oita", country: "Japan", lat: 33.4794, lng: 131.737, airports: [
      { code: "OIT", name: "Oita" },
    ] },
  { code: "OKJ", name: "Okayama", country: "Japan", lat: 34.7569, lng: 133.855, airports: [
      { code: "OKJ", name: "Okayama Momotaro" },
    ] },
  { code: "OKI", name: "Okinoshima", country: "Japan", lat: 36.1784, lng: 133.3236, airports: [
      { code: "OKI", name: "Oki Global Geopark" },
    ] },
  { code: "OIR", name: "Okushiri Island", country: "Japan", lat: 42.0717, lng: 139.433, airports: [
      { code: "OIR", name: "Okushiri" },
    ] },
  { code: "IBR", name: "Omitama", country: "Japan", lat: 36.1815, lng: 140.4144, airports: [
      { code: "IBR", name: "Ibaraki Intl" },
    ] },
  { code: "KIX", name: "Osaka", country: "Japan", lat: 34.4273, lng: 135.244, airports: [
      { code: "KIX", name: "Kansai Intl" },
      { code: "ITM", name: "Osaka Itami Intl" },
    ] },
  { code: "MMB", name: "Ōzora", country: "Japan", lat: 43.8806, lng: 144.164, airports: [
      { code: "MMB", name: "Memanbetsu" },
    ] },
  { code: "RIS", name: "Rishiri", country: "Japan", lat: 45.242, lng: 141.186, airports: [
      { code: "RIS", name: "Rishiri" },
    ] },
  { code: "SDS", name: "Sado", country: "Japan", lat: 38.0602, lng: 138.414, airports: [
      { code: "SDS", name: "Sado" },
    ] },
  { code: "HSG", name: "Saga", country: "Japan", lat: 33.1497, lng: 130.302, airports: [
      { code: "HSG", name: "Kyushu Saga Intl" },
    ] },
  { code: "CTS", name: "Sapporo", country: "Japan", lat: 42.7748, lng: 141.6904, airports: [
      { code: "CTS", name: "New Chitose" },
      { code: "OKD", name: "Sapporo Okadama" },
    ] },
  { code: "SHM", name: "Shirahama", country: "Japan", lat: 33.6622, lng: 135.364, airports: [
      { code: "SHM", name: "Nanki Shirahama" },
    ] },
  { code: "SYO", name: "Shonai", country: "Japan", lat: 38.8122, lng: 139.787, airports: [
      { code: "SYO", name: "Shonai" },
    ] },
  { code: "FKS", name: "Sukagawa", country: "Japan", lat: 37.2274, lng: 140.431, airports: [
      { code: "FKS", name: "Fukushima" },
    ] },
  { code: "TAK", name: "Takamatsu", country: "Japan", lat: 34.215, lng: 134.0155, airports: [
      { code: "TAK", name: "Takamatsu" },
    ] },
  { code: "TNE", name: "Tanegashima", country: "Japan", lat: 30.6051, lng: 130.991, airports: [
      { code: "TNE", name: "New Tanegashima" },
    ] },
  { code: "TRA", name: "Tarama", country: "Japan", lat: 24.6538, lng: 124.6755, airports: [
      { code: "TRA", name: "Tarama" },
    ] },
  { code: "NGO", name: "Tokoname", country: "Japan", lat: 34.8584, lng: 136.805, airports: [
      { code: "NGO", name: "Chubu Centrair Intl" },
    ] },
  { code: "TKS", name: "Tokushima", country: "Japan", lat: 34.1326, lng: 134.6078, airports: [
      { code: "TKS", name: "Tokushima Awaodori Airport / JMSDF Tokushima" },
    ] },
  { code: "TYO", name: "Tokyo", country: "Japan", lat: 35.5497, lng: 139.787, airports: [
      { code: "HND", name: "Tokyo Haneda Intl" },
      { code: "NRT", name: "Narita Intl" },
    ], keywords: ["haneda", "narita", "japan", "hnd", "nrt"] },
  { code: "TTJ", name: "Tottori", country: "Japan", lat: 35.5301, lng: 134.165, airports: [
      { code: "TTJ", name: "Tottori Sand Dunes Conan" },
    ] },
  { code: "TOY", name: "Toyama", country: "Japan", lat: 36.6484, lng: 137.1874, airports: [
      { code: "TOY", name: "Toyama Kitokito" },
    ] },
  { code: "TJH", name: "Toyooka", country: "Japan", lat: 35.5128, lng: 134.787, airports: [
      { code: "TJH", name: "Konotori Tajima" },
    ] },
  { code: "TSJ", name: "Tsushima", country: "Japan", lat: 34.2849, lng: 129.331, airports: [
      { code: "TSJ", name: "Tsushima" },
    ] },
  { code: "UBJ", name: "Ube", country: "Japan", lat: 33.93, lng: 131.279, airports: [
      { code: "UBJ", name: "Yamaguchi Ube" },
    ] },
  { code: "OKE", name: "Wadomari", country: "Japan", lat: 27.4316, lng: 128.7056, airports: [
      { code: "OKE", name: "Okinoerabu" },
    ] },
  { code: "NTQ", name: "Wajima", country: "Japan", lat: 37.2931, lng: 136.962, airports: [
      { code: "NTQ", name: "Noto Satoyama" },
    ] },
  { code: "WKJ", name: "Wakkanai", country: "Japan", lat: 45.4042, lng: 141.801, airports: [
      { code: "WKJ", name: "Wakkanai" },
    ] },
  { code: "KUM", name: "Yakushima", country: "Japan", lat: 30.3856, lng: 130.659, airports: [
      { code: "KUM", name: "Yakushima" },
    ] },
  { code: "YGJ", name: "Yonago", country: "Japan", lat: 35.4922, lng: 133.236, airports: [
      { code: "YGJ", name: "Yonago Kitaro Airport / JASDF Miho" },
    ] },
  { code: "OGN", name: "Yonaguni", country: "Japan", lat: 24.4673, lng: 122.9798, airports: [
      { code: "OGN", name: "Yonaguni" },
    ] },
  { code: "RNJ", name: "Yoron", country: "Japan", lat: 27.0438, lng: 128.4016, airports: [
      { code: "RNJ", name: "Yoron" },
    ] },
  { code: "ASV", name: "Amboseli National Park", country: "Kenya", lat: -2.6451, lng: 37.2531, airports: [
      { code: "ASV", name: "Amboseli" },
    ] },
  { code: "EDL", name: "Eldoret", country: "Kenya", lat: 0.4045, lng: 35.2389, airports: [
      { code: "EDL", name: "Eldoret Intl" },
    ] },
  { code: "KIS", name: "Kisumu", country: "Kenya", lat: -0.0861, lng: 34.7289, airports: [
      { code: "KIS", name: "Kisumu Intl" },
    ] },
  { code: "LAU", name: "Lamu", country: "Kenya", lat: -2.2524, lng: 40.9129, airports: [
      { code: "LAU", name: "Manda" },
    ] },
  { code: "MYD", name: "Malindi", country: "Kenya", lat: -3.2293, lng: 40.1017, airports: [
      { code: "MYD", name: "Malindi Intl" },
    ] },
  { code: "MRE", name: "Masai Mara", country: "Kenya", lat: -1.4061, lng: 35.0081, airports: [
      { code: "MRE", name: "Mara Serena Lodge Airstrip" },
    ] },
  { code: "MBA", name: "Mombasa", country: "Kenya", lat: -4.0348, lng: 39.5942, airports: [
      { code: "MBA", name: "Moi Intl" },
    ] },
  { code: "NBO", name: "Nairobi", country: "Kenya", lat: -1.3192, lng: 36.9278, airports: [
      { code: "NBO", name: "Jomo Kenyatta Intl" },
      { code: "WIL", name: "Nairobi Wilson" },
    ], keywords: ["jomo kenyatta", "kenya", "nbo"] },
  { code: "NYK", name: "Nanyuki", country: "Kenya", lat: -0.0624, lng: 37.041, airports: [
      { code: "NYK", name: "Nanyuki" },
    ] },
  { code: "WJR", name: "Wajir", country: "Kenya", lat: 1.7332, lng: 40.0916, airports: [
      { code: "WJR", name: "Wajir" },
    ] },
  { code: "BSZ", name: "Bishkek", country: "Kyrgyzstan", lat: 43.0613, lng: 74.4776, airports: [
      { code: "BSZ", name: "Manas Intl" },
    ] },
  { code: "OSS", name: "Osh", country: "Kyrgyzstan", lat: 40.609, lng: 72.7933, airports: [
      { code: "OSS", name: "Osh Intl" },
    ] },
  { code: "IKU", name: "Tamchy", country: "Kyrgyzstan", lat: 42.5856, lng: 76.7012, airports: [
      { code: "IKU", name: "Issyk-Kul Intl" },
    ] },
  { code: "BBM", name: "Battambang", country: "Cambodia", lat: 13.0956, lng: 103.224, airports: [
      { code: "BBM", name: "Battambang" },
    ] },
  { code: "KTI", name: "Phnom Penh (Boeng Khyang)", country: "Cambodia", lat: 11.36, lng: 104.9213, airports: [
      { code: "KTI", name: "Techo Intl" },
    ] },
  { code: "KOS", name: "Preah Sihanouk", country: "Cambodia", lat: 10.5706, lng: 103.6321, airports: [
      { code: "KOS", name: "Sihanouk Intl" },
    ] },
  { code: "SAI", name: "Siem Reap", country: "Cambodia", lat: 13.3697, lng: 104.2238, airports: [
      { code: "SAI", name: "Siem Reap-Angkor Intl" },
    ] },
  { code: "CXI", name: "Kiritimati", country: "KI", lat: 1.9863, lng: -157.35, airports: [
      { code: "CXI", name: "Cassidy Intl" },
    ] },
  { code: "TRW", name: "South Tarawa", country: "KI", lat: 1.3816, lng: 173.147, airports: [
      { code: "TRW", name: "Bonriki Intl" },
    ] },
  { code: "HAH", name: "Moroni", country: "Comoros", lat: -11.5337, lng: 43.2719, airports: [
      { code: "HAH", name: "Prince Said Ibrahim Intl" },
    ] },
  { code: "AJN", name: "Ouani", country: "Comoros", lat: -12.131, lng: 44.43, airports: [
      { code: "AJN", name: "Ouani" },
    ] },
  { code: "SKB", name: "Basseterre", country: "KN", lat: 17.3108, lng: -62.7191, airports: [
      { code: "SKB", name: "Robert L. Bradshaw Intl" },
    ] },
  { code: "NEV", name: "Charlestown", country: "KN", lat: 17.2057, lng: -62.5899, airports: [
      { code: "NEV", name: "Vance W. Amory Intl" },
    ] },
  { code: "RGO", name: "Hoemun-ri", country: "KP", lat: 41.4285, lng: 129.6476, airports: [
      { code: "RGO", name: "Orang (Chongjin)" },
    ] },
  { code: "FNJ", name: "Pyongyang", country: "KP", lat: 39.2241, lng: 125.67, airports: [
      { code: "FNJ", name: "Pyongyang Sunan Intl" },
    ] },
  { code: "DSO", name: "Sŏndŏng-ni", country: "KP", lat: 39.7452, lng: 127.474, airports: [
      { code: "DSO", name: "Sondok" },
    ] },
  { code: "WOS", name: "Wonsan", country: "KP", lat: 39.1668, lng: 127.486, airports: [
      { code: "WOS", name: "Wonsan Kalma Intl" },
    ] },
  { code: "PUS", name: "Busan", country: "South Korea", lat: 35.1795, lng: 128.938, airports: [
      { code: "PUS", name: "Gimhae Intl" },
    ] },
  { code: "CJJ", name: "Cheongju", country: "South Korea", lat: 36.7156, lng: 127.5003, airports: [
      { code: "CJJ", name: "Cheongju Intl Airport/Cheongju Air Base (K-59/G-513)" },
    ] },
  { code: "TAE", name: "Daegu", country: "South Korea", lat: 35.8944, lng: 128.657, airports: [
      { code: "TAE", name: "Daegu Intl" },
    ] },
  { code: "YNY", name: "Gonghang-ro", country: "South Korea", lat: 38.0605, lng: 128.6698, airports: [
      { code: "YNY", name: "Yangyang Intl" },
    ] },
  { code: "KUV", name: "Gunsan", country: "South Korea", lat: 35.9038, lng: 126.616, airports: [
      { code: "KUV", name: "Gunsan Airport / Gunsan" },
    ] },
  { code: "KWJ", name: "Gwangju", country: "South Korea", lat: 35.1232, lng: 126.8054, airports: [
      { code: "KWJ", name: "Gwangju" },
    ] },
  { code: "CJU", name: "Jeju City", country: "South Korea", lat: 33.5121, lng: 126.4925, airports: [
      { code: "CJU", name: "Jeju Intl" },
    ] },
  { code: "MWX", name: "Muan (Piseo-ri)", country: "South Korea", lat: 34.9914, lng: 126.3828, airports: [
      { code: "MWX", name: "Muan Intl" },
    ] },
  { code: "KPO", name: "Pohang", country: "South Korea", lat: 35.988, lng: 129.4204, airports: [
      { code: "KPO", name: "Pohang Airport (G-815/K-3)" },
    ] },
  { code: "HIN", name: "Sacheon", country: "South Korea", lat: 35.0886, lng: 128.0717, airports: [
      { code: "HIN", name: "Sacheon Airport / Sacheon" },
    ] },
  { code: "SEL", name: "Seoul", country: "South Korea", lat: 37.4691, lng: 126.451, airports: [
      { code: "ICN", name: "Incheon Intl" },
      { code: "GMP", name: "Gimpo Intl" },
    ], keywords: ["incheon", "gimpo", "korea", "icn", "gmp"] },
  { code: "USN", name: "Ulsan", country: "South Korea", lat: 35.5935, lng: 129.352, airports: [
      { code: "USN", name: "Ulsan" },
    ] },
  { code: "WJU", name: "Wonju", country: "South Korea", lat: 37.4371, lng: 127.9601, airports: [
      { code: "WJU", name: "Wonju Airport / Hoengseong Air Base (K-38/K-46)" },
    ] },
  { code: "RSU", name: "Yeosu", country: "South Korea", lat: 34.8423, lng: 127.617, airports: [
      { code: "RSU", name: "Yeosu" },
    ] },
  { code: "KWI", name: "Kuwait City", country: "Kuwait", lat: 29.2245, lng: 47.9698, airports: [
      { code: "KWI", name: "Kuwait Intl" },
    ] },
  { code: "GCM", name: "George Town", country: "Cayman Islands", lat: 19.2928, lng: -81.3577, airports: [
      { code: "GCM", name: "Owen Roberts Intl" },
    ] },
  { code: "CYB", name: "West End", country: "Cayman Islands", lat: 19.687, lng: -79.8828, airports: [
      { code: "CYB", name: "Charles Kirkconnell Intl" },
    ] },
  { code: "SCO", name: "Aktau", country: "Kazakhstan", lat: 43.8601, lng: 51.0909, airports: [
      { code: "SCO", name: "Aktau Intl" },
    ] },
  { code: "AKX", name: "Aktobe", country: "Kazakhstan", lat: 50.2481, lng: 57.2041, airports: [
      { code: "AKX", name: "Aktobe Intl" },
    ] },
  { code: "ALA", name: "Almaty", country: "Kazakhstan", lat: 43.3543, lng: 77.0428, airports: [
      { code: "ALA", name: "Almaty Intl" },
    ] },
  { code: "NQZ", name: "Astana", country: "Kazakhstan", lat: 51.027, lng: 71.4671, airports: [
      { code: "NQZ", name: "Nursultan Nazarbayev Intl" },
    ] },
  { code: "GUW", name: "Atyrau", country: "Kazakhstan", lat: 47.1213, lng: 51.8203, airports: [
      { code: "GUW", name: "Atyrau Intl" },
    ] },
  { code: "BXY", name: "Baikonur", country: "Kazakhstan", lat: 45.622, lng: 63.2108, airports: [
      { code: "BXY", name: "Baikonur Krayniy Intl" },
    ] },
  { code: "BXH", name: "Balkhash", country: "Kazakhstan", lat: 46.8942, lng: 75.0045, airports: [
      { code: "BXH", name: "Balkhash" },
    ] },
  { code: "KGF", name: "Karaganda", country: "Kazakhstan", lat: 49.6708, lng: 73.3344, airports: [
      { code: "KGF", name: "Sary-Arka" },
    ] },
  { code: "KOV", name: "Kokshetau", country: "Kazakhstan", lat: 53.3291, lng: 69.5946, airports: [
      { code: "KOV", name: "Kokshetau Intl" },
    ] },
  { code: "KSN", name: "Kostanay", country: "Kazakhstan", lat: 53.2069, lng: 63.5503, airports: [
      { code: "KSN", name: "Kostanay Intl" },
    ] },
  { code: "KZO", name: "Kyzylorda", country: "Kazakhstan", lat: 44.7069, lng: 65.5925, airports: [
      { code: "KZO", name: "Korkyt Ata Intl" },
    ] },
  { code: "PWQ", name: "Pavlodar", country: "Kazakhstan", lat: 52.195, lng: 77.0731, airports: [
      { code: "PWQ", name: "Pavlodar Intl" },
    ] },
  { code: "PPK", name: "Petropavl", country: "Kazakhstan", lat: 54.7756, lng: 69.1874, airports: [
      { code: "PPK", name: "Petropavl Intl" },
    ] },
  { code: "PLX", name: "Semey", country: "Kazakhstan", lat: 50.3513, lng: 80.2344, airports: [
      { code: "PLX", name: "Semei Intl" },
    ] },
  { code: "CIT", name: "Shymkent", country: "Kazakhstan", lat: 42.365, lng: 69.4756, airports: [
      { code: "CIT", name: "Shymkent Intl" },
    ] },
  { code: "TDK", name: "Taldykorgan", country: "Kazakhstan", lat: 45.1225, lng: 78.4428, airports: [
      { code: "TDK", name: "Taldykorgan" },
    ] },
  { code: "DMB", name: "Taraz", country: "Kazakhstan", lat: 42.8536, lng: 71.3036, airports: [
      { code: "DMB", name: "Taraz Intl" },
    ] },
  { code: "HSA", name: "Turkıstan", country: "Kazakhstan", lat: 43.3117, lng: 68.5502, airports: [
      { code: "HSA", name: "Hazrat Sultan Intl" },
    ] },
  { code: "URA", name: "Uralsk", country: "Kazakhstan", lat: 51.152, lng: 51.5437, airports: [
      { code: "URA", name: "Manshuk Mametova Intl" },
    ] },
  { code: "UKK", name: "Ust-Kamenogorsk (Oskemen)", country: "Kazakhstan", lat: 50.035, lng: 82.4961, airports: [
      { code: "UKK", name: "Oskemen Intl" },
    ] },
  { code: "DZN", name: "Zhezkazgan", country: "Kazakhstan", lat: 47.709, lng: 67.7381, airports: [
      { code: "DZN", name: "Zhezkazgan National" },
    ] },
  { code: "LPQ", name: "Luang Phabang", country: "Laos", lat: 19.9043, lng: 102.1672, airports: [
      { code: "LPQ", name: "Luang Phabang Intl" },
    ] },
  { code: "PKZ", name: "Pakse", country: "Laos", lat: 15.134, lng: 105.7799, airports: [
      { code: "PKZ", name: "Pakse Intl" },
    ] },
  { code: "BOR", name: "Ton Phueng", country: "Laos", lat: 20.324, lng: 100.1654, airports: [
      { code: "BOR", name: "Bokeo Intl" },
    ] },
  { code: "VTE", name: "Vientiane", country: "Laos", lat: 17.9851, lng: 102.5667, airports: [
      { code: "VTE", name: "Wattay Intl" },
    ] },
  { code: "BEY", name: "Beirut", country: "Lebanon", lat: 33.8198, lng: 35.4874, airports: [
      { code: "BEY", name: "Beirut Rafic Hariri Intl" },
    ] },
  { code: "SLU", name: "Castries", country: "Saint Lucia", lat: 14.0202, lng: -60.9929, airports: [
      { code: "SLU", name: "George F. L. Charles" },
    ] },
  { code: "UVF", name: "Vieux Fort", country: "Saint Lucia", lat: 13.7332, lng: -60.9526, airports: [
      { code: "UVF", name: "Hewanorra Intl" },
    ] },
  { code: "BTC", name: "Batticaloa", country: "Sri Lanka", lat: 7.7051, lng: 81.6772, airports: [
      { code: "BTC", name: "Batticaloa Intl" },
    ] },
  { code: "CMB", name: "Colombo", country: "Sri Lanka", lat: 7.1808, lng: 79.8841, airports: [
      { code: "CMB", name: "Bandaranaike Intl Colombo" },
      { code: "RML", name: "Colombo Ratmalana" },
    ] },
  { code: "KCT", name: "Galle", country: "Sri Lanka", lat: 5.9937, lng: 80.3203, airports: [
      { code: "KCT", name: "Koggala" },
    ] },
  { code: "JAF", name: "Jaffna", country: "Sri Lanka", lat: 9.7923, lng: 80.0701, airports: [
      { code: "JAF", name: "Jaffna Intl" },
    ] },
  { code: "HRI", name: "Mattala", country: "Sri Lanka", lat: 6.2839, lng: 81.1242, airports: [
      { code: "HRI", name: "Mattala Rajapaksa Intl" },
    ] },
  { code: "TRR", name: "Trincomalee", country: "Sri Lanka", lat: 8.5392, lng: 81.1813, airports: [
      { code: "TRR", name: "China Bay" },
    ] },
  { code: "ROB", name: "Monrovia", country: "Liberia", lat: 6.2891, lng: -10.7587, airports: [
      { code: "ROB", name: "Roberts Intl" },
      { code: "MLW", name: "Spriggs Payne" },
    ] },
  { code: "MSU", name: "Maseru(Mazenod)", country: "Lesotho", lat: -29.4563, lng: 27.5545, airports: [
      { code: "MSU", name: "Moshoeshoe I Intl" },
    ] },
  { code: "KUN", name: "Kaunas", country: "Lithuania", lat: 54.964, lng: 24.0858, airports: [
      { code: "KUN", name: "Kaunas Intl" },
    ] },
  { code: "PLQ", name: "Palanga", country: "Lithuania", lat: 55.9732, lng: 21.0939, airports: [
      { code: "PLQ", name: "Palanga Intl" },
    ] },
  { code: "VNO", name: "Vilnius", country: "Lithuania", lat: 54.6341, lng: 25.2858, airports: [
      { code: "VNO", name: "Vilnius Intl" },
    ] },
  { code: "LUX", name: "Luxembourg", country: "Luxembourg", lat: 49.6233, lng: 6.2044, airports: [
      { code: "LUX", name: "Luxembourg-Findel Intl" },
    ] },
  { code: "RIX", name: "Riga", country: "Latvia", lat: 56.9208, lng: 23.9707, airports: [
      { code: "RIX", name: "Riga Intl" },
    ] },
  { code: "LAQ", name: "Al Albraq", country: "Libya", lat: 32.789, lng: 21.9549, airports: [
      { code: "LAQ", name: "Al Abraq Intl" },
    ] },
  { code: "BEN", name: "Benina", country: "Libya", lat: 32.0968, lng: 20.2695, airports: [
      { code: "BEN", name: "Benina Intl" },
    ] },
  { code: "GHT", name: "Ghat", country: "Libya", lat: 25.1456, lng: 10.1426, airports: [
      { code: "GHT", name: "Ghat" },
    ] },
  { code: "AKF", name: "Kufra", country: "Libya", lat: 24.1787, lng: 23.314, airports: [
      { code: "AKF", name: "Kufra" },
    ] },
  { code: "SEB", name: "Sabha", country: "Libya", lat: 26.9925, lng: 14.4662, airports: [
      { code: "SEB", name: "Sabha" },
    ] },
  { code: "MJI", name: "Tripoli", country: "Libya", lat: 32.8918, lng: 13.2879, airports: [
      { code: "MJI", name: "Mitiga Intl" },
    ] },
  { code: "AGA", name: "Agadir (Temsia)", country: "Morocco", lat: 30.3225, lng: -9.412, airports: [
      { code: "AGA", name: "Al Massira" },
    ] },
  { code: "OUD", name: "Ahl Angad", country: "Morocco", lat: 34.7896, lng: -1.926, airports: [
      { code: "OUD", name: "Oujda Angads" },
    ] },
  { code: "NDR", name: "Al Aaroui", country: "Morocco", lat: 34.9888, lng: -3.0282, airports: [
      { code: "NDR", name: "Nador Al Aaroui Intl" },
    ] },
  { code: "CMN", name: "Casablanca", country: "Morocco", lat: 33.3675, lng: -7.59, airports: [
      { code: "CMN", name: "Mohammed V Intl" },
    ] },
  { code: "ERH", name: "Errachidia", country: "Morocco", lat: 31.9475, lng: -4.3983, airports: [
      { code: "ERH", name: "Moulay Ali Cherif" },
    ] },
  { code: "ESU", name: "Essaouira", country: "Morocco", lat: 31.3975, lng: -9.6817, airports: [
      { code: "ESU", name: "Essaouira-Mogador" },
    ] },
  { code: "RAK", name: "Marrakesh", country: "Morocco", lat: 31.6048, lng: -8.0358, airports: [
      { code: "RAK", name: "Marrakesh Menara" },
    ] },
  { code: "OZZ", name: "Ouarzazate", country: "Morocco", lat: 30.9391, lng: -6.9094, airports: [
      { code: "OZZ", name: "Ouarzazate Intl" },
    ] },
  { code: "BEM", name: "Oulad Yaich", country: "Morocco", lat: 32.4019, lng: -6.3159, airports: [
      { code: "BEM", name: "Beni Mellal" },
    ] },
  { code: "RBA", name: "Rabat", country: "Morocco", lat: 34.0515, lng: -6.7515, airports: [
      { code: "RBA", name: "Rabat-Salé" },
    ] },
  { code: "FEZ", name: "Saïss", country: "Morocco", lat: 33.9273, lng: -4.978, airports: [
      { code: "FEZ", name: "Fes Saïss Intl" },
    ] },
  { code: "TTA", name: "Tan Tan", country: "Morocco", lat: 28.4482, lng: -11.1613, airports: [
      { code: "TTA", name: "Tan Tan" },
    ] },
  { code: "TNG", name: "Tangier", country: "Morocco", lat: 35.7317, lng: -5.9215, airports: [
      { code: "TNG", name: "Tangier Ibn Battuta" },
    ] },
  { code: "TTU", name: "Tétouan", country: "Morocco", lat: 35.5943, lng: -5.32, airports: [
      { code: "TTU", name: "Sania Ramel" },
    ] },
  { code: "OZG", name: "Zagora", country: "Morocco", lat: 30.2658, lng: -5.8608, airports: [
      { code: "OZG", name: "Zagora" },
    ] },
  { code: "RMO", name: "Chişinău", country: "Moldova", lat: 46.9277, lng: 28.9317, airports: [
      { code: "RMO", name: "Chişinău Intl" },
    ] },
  { code: "TGD", name: "Podgorica", country: "Montenegro", lat: 42.3594, lng: 19.2519, airports: [
      { code: "TGD", name: "Podgorica Airport / Podgorica Golubovci Airbase" },
    ] },
  { code: "TIV", name: "Tivat", country: "Montenegro", lat: 42.4047, lng: 18.7233, airports: [
      { code: "TIV", name: "Tivat" },
    ] },
  { code: "SFG", name: "Grand Case", country: "MF", lat: 18.1001, lng: -63.0474, airports: [
      { code: "SFG", name: "Grand Case-l'Espérance" },
    ] },
  { code: "TNR", name: "Antananarivo", country: "Madagascar", lat: -18.7969, lng: 47.4788, airports: [
      { code: "TNR", name: "Ivato Intl" },
    ] },
  { code: "DIE", name: "Antisiranana", country: "Madagascar", lat: -12.3494, lng: 49.2917, airports: [
      { code: "DIE", name: "Arrachart" },
    ] },
  { code: "BPY", name: "Besalampy", country: "Madagascar", lat: -16.7445, lng: 44.4825, airports: [
      { code: "BPY", name: "Besalampy" },
    ] },
  { code: "MJN", name: "Mahajanga", country: "Madagascar", lat: -15.6668, lng: 46.3512, airports: [
      { code: "MJN", name: "Amborovy" },
    ] },
  { code: "MNJ", name: "Mananjary", country: "Madagascar", lat: -21.2018, lng: 48.3583, airports: [
      { code: "MNJ", name: "Mananjary" },
    ] },
  { code: "WMN", name: "Maroantsetra", country: "Madagascar", lat: -15.4377, lng: 49.6891, airports: [
      { code: "WMN", name: "Maroantsetra" },
    ] },
  { code: "MOQ", name: "Morondava", country: "Madagascar", lat: -20.2847, lng: 44.3176, airports: [
      { code: "MOQ", name: "Morondava" },
    ] },
  { code: "NOS", name: "Nosy Be", country: "Madagascar", lat: -13.3121, lng: 48.3148, airports: [
      { code: "NOS", name: "Nosy Be-Fascene Intl" },
    ] },
  { code: "SVB", name: "Sambava", country: "Madagascar", lat: -14.2786, lng: 50.1747, airports: [
      { code: "SVB", name: "Sambava" },
    ] },
  { code: "TMM", name: "Toamasina", country: "Madagascar", lat: -18.1135, lng: 49.3923, airports: [
      { code: "TMM", name: "Toamasina Ambalamanasy" },
    ] },
  { code: "FTU", name: "Tôlanaro", country: "Madagascar", lat: -25.0381, lng: 46.9561, airports: [
      { code: "FTU", name: "Tôlanaro" },
    ] },
  { code: "TLE", name: "Toliara", country: "Madagascar", lat: -23.3834, lng: 43.7285, airports: [
      { code: "TLE", name: "Toliara" },
    ] },
  { code: "SMS", name: "Vohilava", country: "Madagascar", lat: -17.0939, lng: 49.8158, airports: [
      { code: "SMS", name: "Sainte Marie" },
    ] },
  { code: "KWA", name: "Kwajalein", country: "MH", lat: 8.7201, lng: 167.732, airports: [
      { code: "KWA", name: "Bucholz Army Air Field" },
    ] },
  { code: "MAJ", name: "Majuro Atoll", country: "MH", lat: 7.0651, lng: 171.2717, airports: [
      { code: "MAJ", name: "Marshall Islands Intl" },
    ] },
  { code: "SKP", name: "Ilinden", country: "North Macedonia", lat: 41.9581, lng: 21.6226, airports: [
      { code: "SKP", name: "Skopje Intl" },
    ] },
  { code: "OHD", name: "Ohrid", country: "North Macedonia", lat: 41.18, lng: 20.7423, airports: [
      { code: "OHD", name: "Ohrid St. Paul the Apostle" },
    ] },
  { code: "BKO", name: "Bamako", country: "Mali", lat: 12.5335, lng: -7.9499, airports: [
      { code: "BKO", name: "Modibo Keita Intl" },
    ] },
  { code: "GAQ", name: "Gao", country: "Mali", lat: 16.2485, lng: -0.0054, airports: [
      { code: "GAQ", name: "Gao Intl" },
    ] },
  { code: "KYS", name: "Kayes", country: "Mali", lat: 14.4825, lng: -11.3993, airports: [
      { code: "KYS", name: "Kayes Dag Dag" },
    ] },
  { code: "MZI", name: "Sévaré", country: "Mali", lat: 14.5128, lng: -4.0796, airports: [
      { code: "MZI", name: "Mopti Ambodédjo Intl" },
    ] },
  { code: "TOM", name: "Timbuktu", country: "Mali", lat: 16.7305, lng: -3.0076, airports: [
      { code: "TOM", name: "Tombouktou" },
    ] },
  { code: "TVY", name: "Dawei", country: "Myanmar", lat: 14.1039, lng: 98.2036, airports: [
      { code: "TVY", name: "Dawei" },
    ] },
  { code: "KAW", name: "Kawthoung", country: "Myanmar", lat: 10.0493, lng: 98.538, airports: [
      { code: "KAW", name: "Kawthoung" },
    ] },
  { code: "KET", name: "Kengtung", country: "Myanmar", lat: 21.3016, lng: 99.636, airports: [
      { code: "KET", name: "Kengtung" },
    ] },
  { code: "KYP", name: "Kyaukpyu", country: "Myanmar", lat: 19.4264, lng: 93.5348, airports: [
      { code: "KYP", name: "Kyaukpyu" },
    ] },
  { code: "LSH", name: "Lashio", country: "Myanmar", lat: 22.9779, lng: 97.7522, airports: [
      { code: "LSH", name: "Lashio" },
    ] },
  { code: "LIW", name: "Loikaw", country: "Myanmar", lat: 19.6915, lng: 97.2148, airports: [
      { code: "LIW", name: "Loikaw" },
    ] },
  { code: "MDL", name: "Mandalay", country: "Myanmar", lat: 21.7022, lng: 95.9779, airports: [
      { code: "MDL", name: "Mandalay Intl" },
    ] },
  { code: "MGZ", name: "Mkeik", country: "Myanmar", lat: 12.4398, lng: 98.6215, airports: [
      { code: "MGZ", name: "Myeik" },
    ] },
  { code: "MOG", name: "Mong Hsat", country: "Myanmar", lat: 20.5168, lng: 99.2568, airports: [
      { code: "MOG", name: "Mong Hsat" },
    ] },
  { code: "MYT", name: "Myitkyina", country: "Myanmar", lat: 25.3836, lng: 97.3519, airports: [
      { code: "MYT", name: "Myitkyina" },
    ] },
  { code: "NYT", name: "Naypyitaw", country: "Myanmar", lat: 19.6235, lng: 96.201, airports: [
      { code: "NYT", name: "Nay Pyi Taw Intl" },
    ] },
  { code: "PBU", name: "Putao", country: "Myanmar", lat: 27.3299, lng: 97.4263, airports: [
      { code: "PBU", name: "Putao" },
    ] },
  { code: "AKY", name: "Sittwe", country: "Myanmar", lat: 20.1332, lng: 92.8707, airports: [
      { code: "AKY", name: "Sittwe" },
    ] },
  { code: "THL", name: "Tachileik", country: "Myanmar", lat: 20.4838, lng: 99.9354, airports: [
      { code: "THL", name: "Tachileik" },
    ] },
  { code: "SNW", name: "Thandwe", country: "Myanmar", lat: 18.4607, lng: 94.3001, airports: [
      { code: "SNW", name: "Thandwe" },
    ] },
  { code: "RGN", name: "Yangon", country: "Myanmar", lat: 16.9073, lng: 96.1332, airports: [
      { code: "RGN", name: "Yangon Intl" },
    ] },
  { code: "LTI", name: "Altai", country: "Mongolia", lat: 46.3764, lng: 96.2211, airports: [
      { code: "LTI", name: "Altai" },
    ] },
  { code: "AVK", name: "Arvaikheer", country: "Mongolia", lat: 46.2503, lng: 102.802, airports: [
      { code: "AVK", name: "Arvaikheer" },
    ] },
  { code: "BYN", name: "Bayankhongor", country: "Mongolia", lat: 46.1633, lng: 100.704, airports: [
      { code: "BYN", name: "Bayankhongor" },
    ] },
  { code: "UGA", name: "Bulgan", country: "Mongolia", lat: 48.855, lng: 103.476, airports: [
      { code: "UGA", name: "Bulgan" },
    ] },
  { code: "COQ", name: "Choibalsan", country: "Mongolia", lat: 48.1354, lng: 114.6472, airports: [
      { code: "COQ", name: "Choibalsan" },
    ] },
  { code: "DLZ", name: "Dalanzadgad", country: "Mongolia", lat: 43.6086, lng: 104.3677, airports: [
      { code: "DLZ", name: "Dalanzadgad" },
    ] },
  { code: "HVD", name: "Khovd", country: "Mongolia", lat: 47.9541, lng: 91.6282, airports: [
      { code: "HVD", name: "Khovd" },
    ] },
  { code: "MXV", name: "Mörön", country: "Mongolia", lat: 49.6637, lng: 100.1, airports: [
      { code: "MXV", name: "Mörön" },
    ] },
  { code: "ULG", name: "Ölgii", country: "Mongolia", lat: 48.9933, lng: 89.9225, airports: [
      { code: "ULG", name: "Ölgii Mongolei Intl" },
    ] },
  { code: "UBN", name: "Ulaanbaatar (Sergelen)", country: "Mongolia", lat: 47.6469, lng: 106.8198, airports: [
      { code: "UBN", name: "Ulaanbaatar Chinggis Khaan Intl" },
    ] },
  { code: "ULO", name: "Ulaangom", country: "Mongolia", lat: 50.0666, lng: 91.9383, airports: [
      { code: "ULO", name: "Ulaangom" },
    ] },
  { code: "MFM", name: "Nossa Senhora do Carmo", country: "Macau", lat: 22.1496, lng: 113.592, airports: [
      { code: "MFM", name: "Macau Intl" },
    ] },
  { code: "SPN", name: "I Fadang, Saipan", country: "Northern Mariana Islands", lat: 15.1194, lng: 145.7288, airports: [
      { code: "SPN", name: "Saipan Intl" },
    ] },
  { code: "ROP", name: "Rota Island", country: "Northern Mariana Islands", lat: 14.1733, lng: 145.2411, airports: [
      { code: "ROP", name: "Rota Intl" },
    ] },
  { code: "TIQ", name: "Tinian Island", country: "Northern Mariana Islands", lat: 15.0005, lng: 145.619, airports: [
      { code: "TIQ", name: "Tinian Intl" },
    ] },
  { code: "FDF", name: "Fort-de-France", country: "Martinique", lat: 14.591, lng: -61.0032, airports: [
      { code: "FDF", name: "Martinique Aimé Césaire Intl" },
    ] },
  { code: "ATR", name: "Atar", country: "Mauritania", lat: 20.5058, lng: -13.0437, airports: [
      { code: "ATR", name: "Atar Intl" },
    ] },
  { code: "NDB", name: "Nouadhibou", country: "Mauritania", lat: 20.9324, lng: -17.0302, airports: [
      { code: "NDB", name: "Nouadhibou Intl" },
    ] },
  { code: "NKC", name: "Nouakchott", country: "Mauritania", lat: 18.31, lng: -15.9697, airports: [
      { code: "NKC", name: "Nouakchott–Oumtounsy Intl" },
    ] },
  { code: "MNI", name: "Gerald's Park", country: "MS", lat: 16.7918, lng: -62.1932, airports: [
      { code: "MNI", name: "John A. Osborne" },
    ] },
  { code: "MLA", name: "Valletta", country: "Malta", lat: 35.8575, lng: 14.4775, airports: [
      { code: "MLA", name: "Malta Intl" },
    ] },
  { code: "MRU", name: "Plaine Magnien", country: "Mauritius", lat: -20.4302, lng: 57.6836, airports: [
      { code: "MRU", name: "Sir Seewoosagur Ramgoolam Intl" },
    ] },
  { code: "RRG", name: "Port Mathurin", country: "Mauritius", lat: -19.7577, lng: 63.361, airports: [
      { code: "RRG", name: "Sir Charles Gaetan Duval" },
    ] },
  { code: "GAN", name: "Gan", country: "Maldives", lat: -0.693, lng: 73.1526, airports: [
      { code: "GAN", name: "Gan Intl" },
    ] },
  { code: "HAQ", name: "Haa Dhaalu Atoll", country: "Maldives", lat: 6.7432, lng: 73.1671, airports: [
      { code: "HAQ", name: "Hanimaadhoo Intl" },
    ] },
  { code: "KDM", name: "Huvadhu Atoll", country: "Maldives", lat: 0.4881, lng: 72.9969, airports: [
      { code: "KDM", name: "Kaadedhdhoo" },
    ] },
  { code: "KDO", name: "Kadhdhoo", country: "Maldives", lat: 1.8592, lng: 73.5219, airports: [
      { code: "KDO", name: "Kadhdhoo" },
    ] },
  { code: "VAM", name: "Maamigili", country: "Maldives", lat: 3.4718, lng: 72.8326, airports: [
      { code: "VAM", name: "Villa Intl Airport Maamigili" },
    ] },
  { code: "MLE", name: "Malé", country: "Maldives", lat: 4.1918, lng: 73.5291, airports: [
      { code: "MLE", name: "Malé Intl" },
    ] },
  { code: "NMF", name: "Noonu Atoll", country: "Maldives", lat: 5.8174, lng: 73.4684, airports: [
      { code: "NMF", name: "Maafaru Intl" },
    ] },
  { code: "BLZ", name: "Blantyre", country: "Malawi", lat: -15.6772, lng: 34.9723, airports: [
      { code: "BLZ", name: "Chileka Intl" },
    ] },
  { code: "LLW", name: "Lumbadzi", country: "Malawi", lat: -13.7894, lng: 33.781, airports: [
      { code: "LLW", name: "Kamuzu Intl" },
    ] },
  { code: "ACA", name: "Acapulco", country: "Mexico", lat: 16.7571, lng: -99.7531, airports: [
      { code: "ACA", name: "General Juan N. Álvarez Intl" },
    ] },
  { code: "AGU", name: "Aguascalientes", country: "Mexico", lat: 21.6996, lng: -102.3184, airports: [
      { code: "AGU", name: "Jesús Terán Peredo Intl" },
    ] },
  { code: "CPE", name: "Campeche", country: "Mexico", lat: 19.816, lng: -90.5001, airports: [
      { code: "CPE", name: "Ingeniero Alberto Acuña Ongay Intl" },
    ] },
  { code: "CUN", name: "Cancún", country: "Mexico", lat: 21.0408, lng: -86.8735, airports: [
      { code: "CUN", name: "Cancún Intl" },
    ] },
  { code: "CTM", name: "Chetumal", country: "Mexico", lat: 18.505, lng: -88.328, airports: [
      { code: "CTM", name: "Chetumal Intl" },
    ] },
  { code: "CUU", name: "Chihuahua", country: "Mexico", lat: 28.7026, lng: -105.9638, airports: [
      { code: "CUU", name: "General Roberto Fierro Villalobos Intl" },
    ] },
  { code: "MEX", name: "Ciudad de México", country: "Mexico", lat: 19.4351, lng: -99.0713, airports: [
      { code: "MEX", name: "Benito Juárez Intl" },
    ] },
  { code: "CME", name: "Ciudad del Carmen", country: "Mexico", lat: 18.6537, lng: -91.799, airports: [
      { code: "CME", name: "Ciudad del Carmen Intl" },
    ] },
  { code: "CJS", name: "Ciudad Juárez", country: "Mexico", lat: 31.6367, lng: -106.4285, airports: [
      { code: "CJS", name: "Abraham González Intl" },
    ] },
  { code: "CEN", name: "Ciudad Obregón", country: "Mexico", lat: 27.3926, lng: -109.833, airports: [
      { code: "CEN", name: "Ciudad Obregón Intl" },
    ] },
  { code: "CVM", name: "Ciudad Victoria", country: "Mexico", lat: 23.7033, lng: -98.9565, airports: [
      { code: "CVM", name: "General Pedro Jose Mendez Intl" },
    ] },
  { code: "CLQ", name: "Colima", country: "Mexico", lat: 19.277, lng: -103.577, airports: [
      { code: "CLQ", name: "Licenciado Miguel de la Madrid Intl" },
    ] },
  { code: "MTT", name: "Cosoleacaque", country: "Mexico", lat: 18.1034, lng: -94.5807, airports: [
      { code: "MTT", name: "Minatitlán/Coatzacoalcos Intl" },
    ] },
  { code: "CZM", name: "Cozumel", country: "Mexico", lat: 20.5149, lng: -86.9285, airports: [
      { code: "CZM", name: "Cozumel Intl" },
    ] },
  { code: "CUL", name: "Culiacán", country: "Mexico", lat: 24.765, lng: -107.4752, airports: [
      { code: "CUL", name: "Bachigualato Federal Intl" },
    ] },
  { code: "DGO", name: "Durango", country: "Mexico", lat: 24.1255, lng: -104.5279, airports: [
      { code: "DGO", name: "General Guadalupe Victoria Intl" },
    ] },
  { code: "GDL", name: "Guadalajara", country: "Mexico", lat: 20.5233, lng: -103.3101, airports: [
      { code: "GDL", name: "Guadalajara Intl" },
    ] },
  { code: "GYM", name: "Guaymas", country: "Mexico", lat: 27.969, lng: -110.925, airports: [
      { code: "GYM", name: "General José María Yáñez Intl" },
    ] },
  { code: "HMO", name: "Hermosillo", country: "Mexico", lat: 29.0928, lng: -111.053, airports: [
      { code: "HMO", name: "General Ignacio L. Pesqueira Intl" },
    ] },
  { code: "HUX", name: "Huatulco", country: "Mexico", lat: 15.7749, lng: -96.2603, airports: [
      { code: "HUX", name: "Bahías de Huatulco Intl" },
    ] },
  { code: "ZIH", name: "Ixtapa", country: "Mexico", lat: 17.6018, lng: -101.4606, airports: [
      { code: "ZIH", name: "Ixtapa-Zihuatanejo Intl" },
    ] },
  { code: "IZT", name: "Ixtepec", country: "Mexico", lat: 16.446, lng: -95.0937, airports: [
      { code: "IZT", name: "General Antonio Cárdenas Rodríguez National Airport / Ixtepec" },
    ] },
  { code: "LAP", name: "La Paz", country: "Mexico", lat: 24.0723, lng: -110.3627, airports: [
      { code: "LAP", name: "Manuel Márquez de León Intl" },
    ] },
  { code: "LTO", name: "Loreto", country: "Mexico", lat: 25.9895, lng: -111.3484, airports: [
      { code: "LTO", name: "Loreto Intl" },
    ] },
  { code: "LMM", name: "Los Mochis", country: "Mexico", lat: 25.6855, lng: -109.0812, airports: [
      { code: "LMM", name: "Valle del Fuerte Intl" },
    ] },
  { code: "ZLO", name: "Manzanillo", country: "Mexico", lat: 19.1448, lng: -104.559, airports: [
      { code: "ZLO", name: "Playa de Oro Intl" },
    ] },
  { code: "MAM", name: "Matamoros", country: "Mexico", lat: 25.7699, lng: -97.5253, airports: [
      { code: "MAM", name: "General Servando Canales Intl" },
    ] },
  { code: "MZT", name: "Mazatlàn", country: "Mexico", lat: 23.1628, lng: -106.2645, airports: [
      { code: "MZT", name: "General Rafael Buelna Intl" },
    ] },
  { code: "MID", name: "Mérida", country: "Mexico", lat: 20.9305, lng: -89.6455, airports: [
      { code: "MID", name: "Manuel Crescencio Rejón Intl" },
    ] },
  { code: "MXL", name: "Mexicali", country: "Mexico", lat: 32.6306, lng: -115.2428, airports: [
      { code: "MXL", name: "General Rodolfo Sánchez Taboada Intl" },
    ] },
  { code: "NLU", name: "Mexico City", country: "Mexico", lat: 19.7357, lng: -99.0257, airports: [
      { code: "NLU", name: "General Felipe Ángeles Intl" },
    ] },
  { code: "MTY", name: "Monterrey", country: "Mexico", lat: 25.7785, lng: -100.107, airports: [
      { code: "MTY", name: "Monterrey Intl" },
    ] },
  { code: "MLM", name: "Morelia", country: "Mexico", lat: 19.8499, lng: -101.025, airports: [
      { code: "MLM", name: "General Francisco J. Mujica Intl" },
    ] },
  { code: "NLD", name: "Nuevo Laredo", country: "Mexico", lat: 27.4439, lng: -99.5705, airports: [
      { code: "NLD", name: "Quetzalcóatl Intl" },
    ] },
  { code: "OAX", name: "Oaxaca", country: "Mexico", lat: 16.9988, lng: -96.7261, airports: [
      { code: "OAX", name: "Xoxocotlán Intl" },
    ] },
  { code: "PDS", name: "Piedras Negras", country: "Mexico", lat: 28.6279, lng: -100.5352, airports: [
      { code: "PDS", name: "Piedras Negras Intl" },
    ] },
  { code: "PAZ", name: "Poza Rica", country: "Mexico", lat: 20.6027, lng: -97.4608, airports: [
      { code: "PAZ", name: "El Tajín National" },
    ] },
  { code: "PBC", name: "Puebla", country: "Mexico", lat: 19.1585, lng: -98.3716, airports: [
      { code: "PBC", name: "Hermanos Serdán Intl" },
    ] },
  { code: "PXM", name: "Puerto Escondido", country: "Mexico", lat: 15.8768, lng: -97.0891, airports: [
      { code: "PXM", name: "Puerto Escondido Intl" },
    ] },
  { code: "PVR", name: "Puerto Vallarta", country: "Mexico", lat: 20.6799, lng: -105.2544, airports: [
      { code: "PVR", name: "Puerto Vallarta Intl" },
    ] },
  { code: "QRO", name: "Querétaro", country: "Mexico", lat: 20.6188, lng: -100.1864, airports: [
      { code: "QRO", name: "Querétaro Intercontinental" },
    ] },
  { code: "REX", name: "Reynosa", country: "Mexico", lat: 26.0089, lng: -98.2285, airports: [
      { code: "REX", name: "General Lucio Blanco Intl" },
    ] },
  { code: "SLW", name: "Saltillo", country: "Mexico", lat: 25.5379, lng: -100.9283, airports: [
      { code: "SLW", name: "Plan De Guadalupe Intl" },
    ] },
  { code: "SJD", name: "San José del Cabo", country: "Mexico", lat: 23.1519, lng: -109.7207, airports: [
      { code: "SJD", name: "Los Cabos Intl" },
    ] },
  { code: "SLP", name: "San Luis Potosí", country: "Mexico", lat: 22.2609, lng: -100.9349, airports: [
      { code: "SLP", name: "Ponciano Arriaga Intl" },
    ] },
  { code: "BJX", name: "Silao", country: "Mexico", lat: 20.9927, lng: -101.4803, airports: [
      { code: "BJX", name: "Guanajuato Intl" },
    ] },
  { code: "TAM", name: "Tampico", country: "Mexico", lat: 22.2964, lng: -97.8659, airports: [
      { code: "TAM", name: "General Francisco Javier Mina Intl" },
    ] },
  { code: "TAP", name: "Tapachula", country: "Mexico", lat: 14.7945, lng: -92.3699, airports: [
      { code: "TAP", name: "Tapachula Intl" },
    ] },
  { code: "TPQ", name: "Tepic", country: "Mexico", lat: 21.4198, lng: -104.8425, airports: [
      { code: "TPQ", name: "Amado Nervo National" },
    ] },
  { code: "TIJ", name: "Tijuana", country: "Mexico", lat: 32.541, lng: -116.97, airports: [
      { code: "TIJ", name: "General Abelardo L. Rodriguez Intl" },
    ] },
  { code: "TLC", name: "Toluca", country: "Mexico", lat: 19.3369, lng: -99.5658, airports: [
      { code: "TLC", name: "Adolfo López Mateos Intl" },
    ] },
  { code: "TRC", name: "Torreón", country: "Mexico", lat: 25.5623, lng: -103.4046, airports: [
      { code: "TRC", name: "Francisco Sarabia Tinoco Intl" },
    ] },
  { code: "TQO", name: "Tulum", country: "Mexico", lat: 20.1721, lng: -87.6603, airports: [
      { code: "TQO", name: "Felipe Carrillo Puerto Intl Airport Tulum" },
    ] },
  { code: "TGZ", name: "Tuxtla Gutiérrez", country: "Mexico", lat: 16.5616, lng: -93.0257, airports: [
      { code: "TGZ", name: "Angel Albino Corzo Intl" },
    ] },
  { code: "UPN", name: "Uruapan", country: "Mexico", lat: 19.3967, lng: -102.039, airports: [
      { code: "UPN", name: "Uruapan - Licenciado y General Ignacio Lopez Rayon Intl" },
    ] },
  { code: "VER", name: "Veracruz", country: "Mexico", lat: 19.1396, lng: -96.1886, airports: [
      { code: "VER", name: "General Heriberto Jara Intl" },
    ] },
  { code: "VSA", name: "Villahermosa", country: "Mexico", lat: 17.9943, lng: -92.8182, airports: [
      { code: "VSA", name: "Carlos Rovirosa Pérez Intl" },
    ] },
  { code: "ZCL", name: "Zacatecas", country: "Mexico", lat: 22.8949, lng: -102.6872, airports: [
      { code: "ZCL", name: "General Leobardo C. Ruiz Intl" },
    ] },
  { code: "AOR", name: "Alor Satar", country: "Malaysia", lat: 6.1897, lng: 100.398, airports: [
      { code: "AOR", name: "Sultan Abdul Halim" },
    ] },
  { code: "BBN", name: "Bario", country: "Malaysia", lat: 3.7346, lng: 115.4785, airports: [
      { code: "BBN", name: "Bario" },
    ] },
  { code: "BTU", name: "Bintulu", country: "Malaysia", lat: 3.1239, lng: 113.02, airports: [
      { code: "BTU", name: "Bintulu" },
    ] },
  { code: "IPH", name: "Ipoh", country: "Malaysia", lat: 4.5673, lng: 101.0916, airports: [
      { code: "IPH", name: "Sultan Azlan Shah" },
    ] },
  { code: "JHB", name: "Johor Bahru", country: "Malaysia", lat: 1.6413, lng: 103.67, airports: [
      { code: "JHB", name: "Senai Intl" },
    ] },
  { code: "KBR", name: "Kota Baharu", country: "Malaysia", lat: 6.1669, lng: 102.293, airports: [
      { code: "KBR", name: "Sultan Ismail Petra" },
    ] },
  { code: "BKI", name: "Kota Kinabalu", country: "Malaysia", lat: 5.9327, lng: 116.0493, airports: [
      { code: "BKI", name: "Kota Kinabalu Intl" },
    ] },
  { code: "KUL", name: "Kuala Lumpur", country: "Malaysia", lat: 2.7456, lng: 101.71, airports: [
      { code: "KUL", name: "Kuala Lumpur Intl" },
      { code: "SZB", name: "Sultan Abdul Aziz Shah Intl" },
    ], keywords: ["klia", "malaysia", "kl", "kul"] },
  { code: "TGG", name: "Kuala Terengganu", country: "Malaysia", lat: 5.3826, lng: 103.103, airports: [
      { code: "TGG", name: "Sultan Mahmud" },
    ] },
  { code: "KUA", name: "Kuantan", country: "Malaysia", lat: 3.7754, lng: 103.209, airports: [
      { code: "KUA", name: "Kuantan" },
    ] },
  { code: "KCH", name: "Kuching", country: "Malaysia", lat: 1.4874, lng: 110.3529, airports: [
      { code: "KCH", name: "Kuching Intl" },
    ] },
  { code: "LBU", name: "Labuan", country: "Malaysia", lat: 5.3017, lng: 115.2483, airports: [
      { code: "LBU", name: "Labuan" },
    ] },
  { code: "LDU", name: "Lahad Datu", country: "Malaysia", lat: 5.0324, lng: 118.3238, airports: [
      { code: "LDU", name: "Lahad Datu" },
    ] },
  { code: "LGK", name: "Langkawi", country: "Malaysia", lat: 6.3297, lng: 99.7287, airports: [
      { code: "LGK", name: "Langkawi Intl" },
    ] },
  { code: "LMN", name: "Limbang", country: "Malaysia", lat: 4.8083, lng: 115.01, airports: [
      { code: "LMN", name: "Limbang" },
    ] },
  { code: "MKZ", name: "Malacca", country: "Malaysia", lat: 2.2656, lng: 102.2528, airports: [
      { code: "MKZ", name: "Malacca Intl" },
    ] },
  { code: "MUR", name: "Marudi", country: "Malaysia", lat: 4.1787, lng: 114.3303, airports: [
      { code: "MUR", name: "Marudi" },
    ] },
  { code: "MYY", name: "Miri", country: "Malaysia", lat: 4.322, lng: 113.987, airports: [
      { code: "MYY", name: "Miri" },
    ] },
  { code: "MKM", name: "Mukah", country: "Malaysia", lat: 2.8819, lng: 112.0433, airports: [
      { code: "MKM", name: "Mukah" },
    ] },
  { code: "MZV", name: "Mulu", country: "Malaysia", lat: 4.0483, lng: 114.805, airports: [
      { code: "MZV", name: "Mulu" },
    ] },
  { code: "PEN", name: "Penang", country: "Malaysia", lat: 5.2963, lng: 100.2762, airports: [
      { code: "PEN", name: "Penang Intl" },
    ] },
  { code: "SDK", name: "Sandakan", country: "Malaysia", lat: 5.9009, lng: 118.059, airports: [
      { code: "SDK", name: "Sandakan" },
    ] },
  { code: "SBW", name: "Sibu", country: "Malaysia", lat: 2.2616, lng: 111.985, airports: [
      { code: "SBW", name: "Sibu" },
    ] },
  { code: "TWU", name: "Tawau", country: "Malaysia", lat: 4.3134, lng: 118.1215, airports: [
      { code: "TWU", name: "Tawau" },
    ] },
  { code: "TOD", name: "Tioman Island", country: "Malaysia", lat: 2.8182, lng: 104.16, airports: [
      { code: "TOD", name: "Tioman" },
    ] },
  { code: "BEW", name: "Beira", country: "Mozambique", lat: -19.7964, lng: 34.9076, airports: [
      { code: "BEW", name: "Beira Intl" },
    ] },
  { code: "VPY", name: "Chimoio", country: "Mozambique", lat: -19.1513, lng: 33.429, airports: [
      { code: "VPY", name: "Chimoio" },
    ] },
  { code: "INH", name: "Inhambane", country: "Mozambique", lat: -23.8764, lng: 35.4085, airports: [
      { code: "INH", name: "Inhambane" },
    ] },
  { code: "VXC", name: "Lichinga", country: "Mozambique", lat: -13.274, lng: 35.2663, airports: [
      { code: "VXC", name: "Lichinga" },
    ] },
  { code: "MPM", name: "Maputo", country: "Mozambique", lat: -25.9208, lng: 32.5726, airports: [
      { code: "MPM", name: "Maputo" },
    ] },
  { code: "APL", name: "Nampula", country: "Mozambique", lat: -15.1056, lng: 39.2818, airports: [
      { code: "APL", name: "Nampula" },
    ] },
  { code: "POL", name: "Pemba", country: "Mozambique", lat: -12.9933, lng: 40.5249, airports: [
      { code: "POL", name: "Pemba" },
    ] },
  { code: "UEL", name: "Quelimane", country: "Mozambique", lat: -17.8555, lng: 36.8691, airports: [
      { code: "UEL", name: "Quelimane" },
    ] },
  { code: "TET", name: "Tete", country: "Mozambique", lat: -16.1048, lng: 33.6402, airports: [
      { code: "TET", name: "Chingozi" },
    ] },
  { code: "VNX", name: "Vilanculo", country: "Mozambique", lat: -22.0184, lng: 35.3133, airports: [
      { code: "VNX", name: "Vilankulo" },
    ] },
  { code: "LUD", name: "Luderitz", country: "Namibia", lat: -26.6874, lng: 15.2429, airports: [
      { code: "LUD", name: "Luderitz" },
    ] },
  { code: "MPA", name: "Mpacha", country: "Namibia", lat: -17.6343, lng: 24.1767, airports: [
      { code: "MPA", name: "Katima Mulilo" },
    ] },
  { code: "OND", name: "Ondangwa", country: "Namibia", lat: -17.8782, lng: 15.9526, airports: [
      { code: "OND", name: "Ondangwa" },
    ] },
  { code: "OMD", name: "Oranjemund", country: "Namibia", lat: -28.5847, lng: 16.4467, airports: [
      { code: "OMD", name: "Oranjemund" },
    ] },
  { code: "NDU", name: "Rundu", country: "Namibia", lat: -17.9565, lng: 19.7194, airports: [
      { code: "NDU", name: "Rundu" },
    ] },
  { code: "WVB", name: "Walvis Bay(Rooikop)", country: "Namibia", lat: -22.9793, lng: 14.6471, airports: [
      { code: "WVB", name: "Walvis Bay Intl" },
    ] },
  { code: "WDH", name: "Windhoek", country: "Namibia", lat: -22.6049, lng: 17.079, airports: [
      { code: "WDH", name: "Hosea Kutako Intl" },
      { code: "ERS", name: "Eros" },
    ] },
  { code: "ILP", name: "Île des Pins", country: "New Caledonia", lat: -22.5889, lng: 167.456, airports: [
      { code: "ILP", name: "Île des Pins" },
    ] },
  { code: "KNQ", name: "Koné", country: "New Caledonia", lat: -21.0536, lng: 164.8388, airports: [
      { code: "KNQ", name: "Koné" },
    ] },
  { code: "LIF", name: "Lifou", country: "New Caledonia", lat: -20.7746, lng: 167.2393, airports: [
      { code: "LIF", name: "Lifou" },
    ] },
  { code: "MEE", name: "Maré", country: "New Caledonia", lat: -21.4824, lng: 168.0385, airports: [
      { code: "MEE", name: "Maré" },
    ] },
  { code: "GEA", name: "Nouméa", country: "New Caledonia", lat: -22.2581, lng: 166.4728, airports: [
      { code: "GEA", name: "Nouméa Magenta" },
    ] },
  { code: "NOU", name: "Nouméa (La Tontouta)", country: "New Caledonia", lat: -22.0146, lng: 166.213, airports: [
      { code: "NOU", name: "La Tontouta Intl" },
    ] },
  { code: "UVE", name: "Ouvéa", country: "New Caledonia", lat: -20.6409, lng: 166.573, airports: [
      { code: "UVE", name: "Ouvéa" },
    ] },
  { code: "TGJ", name: "Tiga", country: "New Caledonia", lat: -21.0964, lng: 167.8038, airports: [
      { code: "TGJ", name: "Tiga" },
    ] },
  { code: "TOU", name: "Touho", country: "New Caledonia", lat: -20.7901, lng: 165.2595, airports: [
      { code: "TOU", name: "Touho" },
    ] },
  { code: "NIM", name: "Niamey", country: "Niger", lat: 13.4815, lng: 2.1836, airports: [
      { code: "NIM", name: "Diori Hamani Intl" },
    ] },
  { code: "ZND", name: "Zinder", country: "Niger", lat: 13.779, lng: 8.9838, airports: [
      { code: "ZND", name: "Zinder" },
    ] },
  { code: "NLK", name: "Burnt Pine", country: "NF", lat: -29.0418, lng: 167.9395, airports: [
      { code: "NLK", name: "Norfolk Island Intl" },
    ] },
  { code: "ABV", name: "Abuja", country: "Nigeria", lat: 9.0068, lng: 7.2632, airports: [
      { code: "ABV", name: "Nnamdi Azikiwe Intl" },
    ] },
  { code: "AKR", name: "Akure", country: "Nigeria", lat: 7.2467, lng: 5.301, airports: [
      { code: "AKR", name: "Akure" },
    ] },
  { code: "BCU", name: "Bauchi", country: "Nigeria", lat: 10.4828, lng: 9.744, airports: [
      { code: "BCU", name: "Sir Abubakar Tafawa Balewa Bauchi State Intl" },
    ] },
  { code: "BNI", name: "Benin", country: "Nigeria", lat: 6.317, lng: 5.5995, airports: [
      { code: "BNI", name: "Benin" },
    ] },
  { code: "CBQ", name: "Calabar", country: "Nigeria", lat: 4.976, lng: 8.3472, airports: [
      { code: "CBQ", name: "Margaret Ekpo Intl" },
    ] },
  { code: "ENU", name: "Enegu", country: "Nigeria", lat: 6.4743, lng: 7.562, airports: [
      { code: "ENU", name: "Akanu Ibiam Intl" },
    ] },
  { code: "GMO", name: "Gombe", country: "Nigeria", lat: 10.2989, lng: 10.9, airports: [
      { code: "GMO", name: "Gombe Lawanti Intl" },
    ] },
  { code: "IBA", name: "Ibadan", country: "Nigeria", lat: 7.3625, lng: 3.9783, airports: [
      { code: "IBA", name: "Ibadan" },
    ] },
  { code: "ILR", name: "Ilorin/Ogbomosho", country: "Nigeria", lat: 8.4402, lng: 4.4939, airports: [
      { code: "ILR", name: "General Tunde Idiagbon Intl" },
    ] },
  { code: "JOS", name: "Jos", country: "Nigeria", lat: 9.6398, lng: 8.8691, airports: [
      { code: "JOS", name: "Yakubu Gowon" },
    ] },
  { code: "KAD", name: "Kaduna", country: "Nigeria", lat: 10.696, lng: 7.3201, airports: [
      { code: "KAD", name: "Kaduna Intl" },
    ] },
  { code: "KAN", name: "Kano", country: "Nigeria", lat: 12.0456, lng: 8.5236, airports: [
      { code: "KAN", name: "Mallam Aminu Kano Intl" },
    ] },
  { code: "DKA", name: "Katsina", country: "Nigeria", lat: 13.0078, lng: 7.6605, airports: [
      { code: "DKA", name: "Umaru Musa Yar'adua" },
    ] },
  { code: "LOS", name: "Lagos", country: "Nigeria", lat: 6.5774, lng: 3.3212, airports: [
      { code: "LOS", name: "Murtala Muhammed Intl" },
    ] },
  { code: "MIU", name: "Maiduguri", country: "Nigeria", lat: 11.8542, lng: 13.0807, airports: [
      { code: "MIU", name: "Maiduguri Intl" },
    ] },
  { code: "MDI", name: "Makurdi", country: "Nigeria", lat: 7.7039, lng: 8.6139, airports: [
      { code: "MDI", name: "Makurdi" },
    ] },
  { code: "QRW", name: "Okpe", country: "Nigeria", lat: 5.5982, lng: 5.8187, airports: [
      { code: "QRW", name: "Warri" },
    ] },
  { code: "QOW", name: "Owerri", country: "Nigeria", lat: 5.4271, lng: 7.206, airports: [
      { code: "QOW", name: "Sam Mbakwe Intl" },
    ] },
  { code: "PHC", name: "Port Harcourt", country: "Nigeria", lat: 5.0155, lng: 6.9496, airports: [
      { code: "PHC", name: "Port Harcourt Intl" },
      { code: "PHG", name: "Port Harcourt City Airport / Port Harcourt Air Force Base" },
    ] },
  { code: "SKO", name: "Sokoto", country: "Nigeria", lat: 12.9157, lng: 5.2075, airports: [
      { code: "SKO", name: "Sadiq Abubakar III Intl" },
    ] },
  { code: "QUO", name: "Uyo", country: "Nigeria", lat: 4.8725, lng: 8.093, airports: [
      { code: "QUO", name: "Akwa Ibom Intl" },
    ] },
  { code: "YOL", name: "Yola", country: "Nigeria", lat: 9.2576, lng: 12.4304, airports: [
      { code: "YOL", name: "Yola" },
    ] },
  { code: "BEF", name: "Bluefields", country: "Nicaragua", lat: 11.991, lng: -83.7741, airports: [
      { code: "BEF", name: "Bluefields" },
    ] },
  { code: "MGA", name: "Managua", country: "Nicaragua", lat: 12.1415, lng: -86.1682, airports: [
      { code: "MGA", name: "Augusto C. Sandino (Managua) Intl" },
    ] },
  { code: "PUZ", name: "Puerto Cabezas", country: "Nicaragua", lat: 14.0472, lng: -83.3867, airports: [
      { code: "PUZ", name: "Puerto Cabezas" },
    ] },
  { code: "AMS", name: "Amsterdam", country: "Netherlands", lat: 52.3086, lng: 4.7639, airports: [
      { code: "AMS", name: "Amsterdam Airport Schiphol" },
      { code: "EIN", name: "Eindhoven" },
      { code: "RTM", name: "Rotterdam The Hague" },
    ], keywords: ["schiphol", "holland", "netherlands", "ams"] },
  { code: "GRQ", name: "Groningen", country: "Netherlands", lat: 53.1197, lng: 6.5794, airports: [
      { code: "GRQ", name: "Groningen Airport Eelde" },
    ] },
  { code: "MST", name: "Maastricht", country: "Netherlands", lat: 50.9117, lng: 5.7701, airports: [
      { code: "MST", name: "Maastricht Aachen" },
    ] },
  { code: "AES", name: "Ålesund", country: "Norway", lat: 62.5604, lng: 6.1108, airports: [
      { code: "AES", name: "Ålesund" },
    ] },
  { code: "SSJ", name: "Alstahaug", country: "Norway", lat: 65.9568, lng: 12.4689, airports: [
      { code: "SSJ", name: "Sandnessjøen Airport, Stokka" },
    ] },
  { code: "ALF", name: "Alta", country: "Norway", lat: 69.9761, lng: 23.3717, airports: [
      { code: "ALF", name: "Alta" },
    ] },
  { code: "ANX", name: "Andenes", country: "Norway", lat: 69.2952, lng: 16.1394, airports: [
      { code: "ANX", name: "Andøya Airport, Andenes" },
    ] },
  { code: "MOL", name: "Årø", country: "Norway", lat: 62.7447, lng: 7.2625, airports: [
      { code: "MOL", name: "Molde Airport, Årø" },
    ] },
  { code: "BJF", name: "Båtsfjord", country: "Norway", lat: 70.6003, lng: 29.6926, airports: [
      { code: "BJF", name: "Båtsfjord" },
    ] },
  { code: "BGO", name: "Bergen", country: "Norway", lat: 60.2934, lng: 5.2181, airports: [
      { code: "BGO", name: "Bergen Airport, Flesland" },
    ] },
  { code: "BVG", name: "Berlevåg", country: "Norway", lat: 70.8715, lng: 29.0341, airports: [
      { code: "BVG", name: "Berlevåg" },
    ] },
  { code: "BOO", name: "Bodø", country: "Norway", lat: 67.2692, lng: 14.3653, airports: [
      { code: "BOO", name: "Bodø" },
    ] },
  { code: "BNN", name: "Brønnøy", country: "Norway", lat: 65.4611, lng: 12.2175, airports: [
      { code: "BNN", name: "Brønnøysund Airport, Brønnøy" },
    ] },
  { code: "EVE", name: "Evenes", country: "Norway", lat: 68.4913, lng: 16.6781, airports: [
      { code: "EVE", name: "Harstad/Narvik" },
    ] },
  { code: "FRO", name: "Florø", country: "Norway", lat: 61.5836, lng: 5.0247, airports: [
      { code: "FRO", name: "Florø" },
    ] },
  { code: "SKN", name: "Hadsel", country: "Norway", lat: 68.5788, lng: 15.0334, airports: [
      { code: "SKN", name: "Stokmarknes Airport, Skagen" },
    ] },
  { code: "HFT", name: "Hammerfest", country: "Norway", lat: 70.6797, lng: 23.6686, airports: [
      { code: "HFT", name: "Hammerfest" },
    ] },
  { code: "HVG", name: "Honningsvåg", country: "Norway", lat: 71.0097, lng: 25.9836, airports: [
      { code: "HVG", name: "Honningsvåg Airport, Valan" },
    ] },
  { code: "HAU", name: "Karmøy", country: "Norway", lat: 59.3453, lng: 5.2084, airports: [
      { code: "HAU", name: "Haugesund Airport, Karmøy" },
    ] },
  { code: "KKN", name: "Kirkenes", country: "Norway", lat: 69.7258, lng: 29.8913, airports: [
      { code: "KKN", name: "Kirkenes Airport, Høybuktmoen" },
    ] },
  { code: "KRS", name: "Kristiansand(Kjevik)", country: "Norway", lat: 58.2042, lng: 8.0854, airports: [
      { code: "KRS", name: "Kristiansand" },
    ] },
  { code: "KSU", name: "Kvernberget", country: "Norway", lat: 63.1118, lng: 7.8245, airports: [
      { code: "KSU", name: "Kristiansund Airport, Kvernberget" },
    ] },
  { code: "LKL", name: "Lakselv", country: "Norway", lat: 70.0688, lng: 24.9735, airports: [
      { code: "LKL", name: "Lakselv Airport, Banak" },
    ] },
  { code: "SRP", name: "Leirvik", country: "Norway", lat: 59.7919, lng: 5.3409, airports: [
      { code: "SRP", name: "Stord Airport, Sørstokken" },
    ] },
  { code: "LKN", name: "Leknes", country: "Norway", lat: 68.1525, lng: 13.6094, airports: [
      { code: "LKN", name: "Leknes" },
    ] },
  { code: "LYR", name: "Longyearbyen", country: "Norway", lat: 78.2461, lng: 15.4656, airports: [
      { code: "LYR", name: "Svalbard" },
    ] },
  { code: "BDU", name: "Målselv", country: "Norway", lat: 69.0558, lng: 18.5404, airports: [
      { code: "BDU", name: "Bardufoss" },
    ] },
  { code: "MEH", name: "Mehamn", country: "Norway", lat: 71.0297, lng: 27.8267, airports: [
      { code: "MEH", name: "Mehamn" },
    ] },
  { code: "MQN", name: "Mo i Rana", country: "Norway", lat: 66.3639, lng: 14.3014, airports: [
      { code: "MQN", name: "Mo i Rana Airport, Røssvoll" },
    ] },
  { code: "MJF", name: "Mosjøen", country: "Norway", lat: 65.784, lng: 13.2149, airports: [
      { code: "MJF", name: "Mosjøen Airport, Kjærstad" },
    ] },
  { code: "OLA", name: "Ørland", country: "Norway", lat: 63.6989, lng: 9.604, airports: [
      { code: "OLA", name: "Ørland" },
    ] },
  { code: "HOV", name: "Ørsta", country: "Norway", lat: 62.18, lng: 6.0741, airports: [
      { code: "HOV", name: "Ørsta-Volda Airport, Hovden" },
    ] },
  { code: "OSL", name: "Oslo", country: "Norway", lat: 60.1939, lng: 11.1004, airports: [
      { code: "OSL", name: "Oslo-Gardermoen Intl" },
      { code: "TRF", name: "Sandefjord Airport, Torp" },
    ], keywords: ["norway", "gardermoen", "torp", "osl"] },
  { code: "RRS", name: "Røros", country: "Norway", lat: 62.5784, lng: 11.3423, airports: [
      { code: "RRS", name: "Røros" },
    ] },
  { code: "RVK", name: "Rørvik", country: "Norway", lat: 64.8383, lng: 11.1461, airports: [
      { code: "RVK", name: "Rørvik Airport, Ryum" },
    ] },
  { code: "SOJ", name: "Sørkjosen", country: "Norway", lat: 69.7868, lng: 20.9594, airports: [
      { code: "SOJ", name: "Sørkjosen" },
    ] },
  { code: "SVG", name: "Stavanger", country: "Norway", lat: 58.8767, lng: 5.6378, airports: [
      { code: "SVG", name: "Stavanger Airport, Sola" },
    ] },
  { code: "SVJ", name: "Svolvær", country: "Norway", lat: 68.2433, lng: 14.6692, airports: [
      { code: "SVJ", name: "Svolvær Airport, Helle" },
    ] },
  { code: "TOS", name: "Tromsø", country: "Norway", lat: 69.6833, lng: 18.9189, airports: [
      { code: "TOS", name: "Tromsø" },
    ] },
  { code: "TRD", name: "Trondheim", country: "Norway", lat: 63.4578, lng: 10.924, airports: [
      { code: "TRD", name: "Trondheim Airport, Værnes" },
    ] },
  { code: "VDS", name: "Vadsø", country: "Norway", lat: 70.0653, lng: 29.8447, airports: [
      { code: "VDS", name: "Vadsø" },
    ] },
  { code: "VAW", name: "Vardø", country: "Norway", lat: 70.3554, lng: 31.0449, airports: [
      { code: "VAW", name: "Vardø Airport, Svartnes" },
    ] },
  { code: "BIR", name: "Biratnagar", country: "Nepal", lat: 26.4815, lng: 87.264, airports: [
      { code: "BIR", name: "Biratnagar" },
    ] },
  { code: "JKR", name: "Janakpur", country: "Nepal", lat: 26.7088, lng: 85.9224, airports: [
      { code: "JKR", name: "Janakpur" },
    ] },
  { code: "KTM", name: "Kathmandu", country: "Nepal", lat: 27.6966, lng: 85.3591, airports: [
      { code: "KTM", name: "Tribhuvan Intl" },
    ] },
  { code: "KEP", name: "Nepalgunj", country: "Nepal", lat: 28.1036, lng: 81.667, airports: [
      { code: "KEP", name: "Nepalgunj" },
    ] },
  { code: "PHH", name: "Pokhara", country: "Nepal", lat: 28.1838, lng: 84.0147, airports: [
      { code: "PHH", name: "Pokhara Intl" },
      { code: "PKR", name: "Pokhara Domestic" },
    ] },
  { code: "BWA", name: "Siddharthanagar (Bhairahawa)", country: "Nepal", lat: 27.5046, lng: 83.4146, airports: [
      { code: "BWA", name: "Gautam Buddha Intl" },
    ] },
  { code: "TPJ", name: "Taplejung", country: "Nepal", lat: 27.3509, lng: 87.6953, airports: [
      { code: "TPJ", name: "Taplejung" },
    ] },
  { code: "INU", name: "Yaren District", country: "NR", lat: -0.5479, lng: 166.9195, airports: [
      { code: "INU", name: "Nauru Intl" },
    ] },
  { code: "IUE", name: "Alofi", country: "NU", lat: -19.0801, lng: -169.9235, airports: [
      { code: "IUE", name: "Niue Intl" },
    ] },
  { code: "AKL", name: "Auckland", country: "New Zealand", lat: -37.012, lng: 174.7863, airports: [
      { code: "AKL", name: "Auckland Intl" },
    ] },
  { code: "KAT", name: "Awanui", country: "New Zealand", lat: -35.0698, lng: 173.2871, airports: [
      { code: "KAT", name: "Kaitaia" },
    ] },
  { code: "BHE", name: "Blenheim", country: "New Zealand", lat: -41.5183, lng: 173.87, airports: [
      { code: "BHE", name: "Woodbourne" },
    ] },
  { code: "CHC", name: "Christchurch", country: "New Zealand", lat: -43.489, lng: 172.5321, airports: [
      { code: "CHC", name: "Christchurch Intl" },
    ] },
  { code: "DUD", name: "Dunedin", country: "New Zealand", lat: -45.9281, lng: 170.198, airports: [
      { code: "DUD", name: "Dunedin Intl" },
    ] },
  { code: "GIS", name: "Gisborne", country: "New Zealand", lat: -38.6633, lng: 177.978, airports: [
      { code: "GIS", name: "Gisborne" },
    ] },
  { code: "HLZ", name: "Hamilton", country: "New Zealand", lat: -37.867, lng: 175.332, airports: [
      { code: "HLZ", name: "Hamilton Intl" },
    ] },
  { code: "HKK", name: "Hokitika Airfield", country: "New Zealand", lat: -42.7136, lng: 170.985, airports: [
      { code: "HKK", name: "Hokitika Airfield" },
    ] },
  { code: "IVC", name: "Invercargill", country: "New Zealand", lat: -46.4124, lng: 168.313, airports: [
      { code: "IVC", name: "Invercargill" },
    ] },
  { code: "KKE", name: "Kerikeri", country: "New Zealand", lat: -35.2591, lng: 173.9133, airports: [
      { code: "KKE", name: "Kerikeri" },
    ] },
  { code: "NPE", name: "Napier", country: "New Zealand", lat: -39.4658, lng: 176.87, airports: [
      { code: "NPE", name: "Hawke's Bay" },
    ] },
  { code: "NSN", name: "Nelson", country: "New Zealand", lat: -41.2983, lng: 173.221, airports: [
      { code: "NSN", name: "Nelson" },
    ] },
  { code: "NPL", name: "New Plymouth", country: "New Zealand", lat: -39.0086, lng: 174.179, airports: [
      { code: "NPL", name: "New Plymouth" },
    ] },
  { code: "PMR", name: "Palmerston North", country: "New Zealand", lat: -40.3206, lng: 175.617, airports: [
      { code: "PMR", name: "Palmerston North" },
    ] },
  { code: "ZQN", name: "Queenstown", country: "New Zealand", lat: -45.0192, lng: 168.7464, airports: [
      { code: "ZQN", name: "Queenstown" },
    ] },
  { code: "ROT", name: "Rotorua", country: "New Zealand", lat: -38.1092, lng: 176.317, airports: [
      { code: "ROT", name: "Rotorua Regional" },
    ] },
  { code: "TUO", name: "Taupo", country: "New Zealand", lat: -38.7397, lng: 176.084, airports: [
      { code: "TUO", name: "Taupo" },
    ] },
  { code: "TRG", name: "Tauranga", country: "New Zealand", lat: -37.6719, lng: 176.196, airports: [
      { code: "TRG", name: "Tauranga" },
    ] },
  { code: "CHT", name: "Te One", country: "New Zealand", lat: -43.8119, lng: -176.4651, airports: [
      { code: "CHT", name: "Inia William Tuuta Memorial" },
    ] },
  { code: "TIU", name: "Timaru", country: "New Zealand", lat: -44.3028, lng: 171.225, airports: [
      { code: "TIU", name: "Timaru" },
    ] },
  { code: "WKA", name: "Wanaka", country: "New Zealand", lat: -44.723, lng: 169.2484, airports: [
      { code: "WKA", name: "Wanaka" },
    ] },
  { code: "WAG", name: "Wanganui", country: "New Zealand", lat: -39.9635, lng: 175.0244, airports: [
      { code: "WAG", name: "Wanganui" },
    ] },
  { code: "WLG", name: "Wellington", country: "New Zealand", lat: -41.3272, lng: 174.805, airports: [
      { code: "WLG", name: "Wellington Intl" },
    ] },
  { code: "WSZ", name: "Westport", country: "New Zealand", lat: -41.7371, lng: 171.579, airports: [
      { code: "WSZ", name: "Westport" },
    ] },
  { code: "WHK", name: "Whakatane", country: "New Zealand", lat: -37.9206, lng: 176.914, airports: [
      { code: "WHK", name: "Whakatane" },
    ] },
  { code: "WRE", name: "Whangarei", country: "New Zealand", lat: -35.7693, lng: 174.3637, airports: [
      { code: "WRE", name: "Whangarei" },
    ] },
  { code: "DQM", name: "Duqm", country: "Oman", lat: 19.5019, lng: 57.6342, airports: [
      { code: "DQM", name: "Duqm Intl" },
    ] },
  { code: "KHS", name: "Khasab", country: "Oman", lat: 26.171, lng: 56.2406, airports: [
      { code: "KHS", name: "Khasab" },
    ] },
  { code: "MCT", name: "Muscat/Seeb", country: "Oman", lat: 23.6002, lng: 58.2853, airports: [
      { code: "MCT", name: "Muscat Intl" },
    ] },
  { code: "SLL", name: "Salalah", country: "Oman", lat: 17.0387, lng: 54.0913, airports: [
      { code: "SLL", name: "Salalah Intl" },
    ] },
  { code: "OHS", name: "Suhar", country: "Oman", lat: 24.386, lng: 56.6254, airports: [
      { code: "OHS", name: "Suhar Intl" },
    ] },
  { code: "PAC", name: "Albrook", country: "Panama", lat: 8.9733, lng: -79.5556, airports: [
      { code: "PAC", name: "Marcos A. Gelabert Intl" },
    ] },
  { code: "CHX", name: "Changuinola", country: "Panama", lat: 9.459, lng: -82.5151, airports: [
      { code: "CHX", name: "Changuinola Captain Manuel Niño Intl" },
    ] },
  { code: "CTD", name: "Chitré", country: "Panama", lat: 7.9878, lng: -80.4098, airports: [
      { code: "CTD", name: "Alonso Valderrama" },
    ] },
  { code: "ONX", name: "Colón", country: "Panama", lat: 9.3566, lng: -79.8674, airports: [
      { code: "ONX", name: "Enrique Adolfo Jimenez" },
    ] },
  { code: "DAV", name: "David", country: "Panama", lat: 8.389, lng: -82.4364, airports: [
      { code: "DAV", name: "Enrique Malek Intl" },
    ] },
  { code: "BOC", name: "Isla Colón", country: "Panama", lat: 9.3409, lng: -82.2508, airports: [
      { code: "BOC", name: "Bocas del Toro Intl" },
    ] },
  { code: "PTY", name: "Tocumen", country: "Panama", lat: 9.0714, lng: -79.3835, airports: [
      { code: "PTY", name: "Tocumen Intl" },
    ] },
  { code: "AQP", name: "Arequipa", country: "Peru", lat: -16.3408, lng: -71.5695, airports: [
      { code: "AQP", name: "Rodríguez Ballón Intl" },
    ] },
  { code: "AYP", name: "Ayacucho", country: "Peru", lat: -13.1548, lng: -74.2044, airports: [
      { code: "AYP", name: "Air Force Colonel Alfredo Mendivil Duarte" },
    ] },
  { code: "CJA", name: "Cajamarca", country: "Peru", lat: -7.1392, lng: -78.4894, airports: [
      { code: "CJA", name: "Mayor General FAP Armando Revoredo Iglesias" },
    ] },
  { code: "CHH", name: "Chachapoyas", country: "Peru", lat: -6.2019, lng: -77.8562, airports: [
      { code: "CHH", name: "Chachapoyas" },
    ] },
  { code: "CIX", name: "Chiclayo", country: "Peru", lat: -6.7892, lng: -79.8283, airports: [
      { code: "CIX", name: "Capitán FAP José A. Quiñones González Intl" },
    ] },
  { code: "CHM", name: "Chimbote", country: "Peru", lat: -9.1496, lng: -78.5238, airports: [
      { code: "CHM", name: "FAP Lieutenant Jaime Andres de Montreuil Morales" },
    ] },
  { code: "CUZ", name: "Cusco", country: "Peru", lat: -13.5357, lng: -71.9388, airports: [
      { code: "CUZ", name: "Alejandro Velasco Astete Intl" },
    ] },
  { code: "HUU", name: "Huánuco", country: "Peru", lat: -9.8788, lng: -76.2048, airports: [
      { code: "HUU", name: "Alferez Fap David Figueroa Fernandini" },
    ] },
  { code: "ILQ", name: "Ilo", country: "Peru", lat: -17.695, lng: -71.344, airports: [
      { code: "ILQ", name: "General Jorge Fernandez Maldon" },
    ] },
  { code: "IQT", name: "Iquitos", country: "Peru", lat: -3.7847, lng: -73.3088, airports: [
      { code: "IQT", name: "Coronel FAP Francisco Secada Vignetta Intl" },
    ] },
  { code: "JAE", name: "Jaén", country: "Peru", lat: -5.5925, lng: -78.774, airports: [
      { code: "JAE", name: "Shumba" },
    ] },
  { code: "JAU", name: "Jauja", country: "Peru", lat: -11.7831, lng: -75.4734, airports: [
      { code: "JAU", name: "Francisco Carle" },
    ] },
  { code: "JUL", name: "Juliaca", country: "Peru", lat: -15.4677, lng: -70.1565, airports: [
      { code: "JUL", name: "Inca Manco Capac Intl" },
    ] },
  { code: "LIM", name: "Lima", country: "Peru", lat: -12.0219, lng: -77.1143, airports: [
      { code: "LIM", name: "Jorge Chávez Intl" },
    ] },
  { code: "NZC", name: "Nazca", country: "Peru", lat: -14.854, lng: -74.9615, airports: [
      { code: "NZC", name: "Maria Reiche Neuman" },
    ] },
  { code: "PIU", name: "Piura", country: "Peru", lat: -5.2057, lng: -80.6164, airports: [
      { code: "PIU", name: "Capitán FAP Guillermo Concha Iberico Intl" },
    ] },
  { code: "PCL", name: "Pucallpa", country: "Peru", lat: -8.3781, lng: -74.5745, airports: [
      { code: "PCL", name: "Cap FAP David Abenzur Rengifo Intl" },
    ] },
  { code: "PEM", name: "Puerto Maldonado", country: "Peru", lat: -12.6136, lng: -69.2286, airports: [
      { code: "PEM", name: "Padre Aldamiz Intl" },
    ] },
  { code: "TCQ", name: "Tacna", country: "Peru", lat: -18.0533, lng: -70.2758, airports: [
      { code: "TCQ", name: "Coronel FAP Carlos Ciriani Santa Rosa Intl" },
    ] },
  { code: "TYL", name: "Talara", country: "Peru", lat: -4.5766, lng: -81.2541, airports: [
      { code: "TYL", name: "Captain Victor Montes Arias Intl" },
    ] },
  { code: "TPP", name: "Tarapoto", country: "Peru", lat: -6.5087, lng: -76.3732, airports: [
      { code: "TPP", name: "Cadete FAP Guillermo Del Castillo Paredes" },
    ] },
  { code: "TRU", name: "Trujillo", country: "Peru", lat: -8.0824, lng: -79.1088, airports: [
      { code: "TRU", name: "Capitán FAP Carlos Martínez de Pinillos Intl" },
    ] },
  { code: "TBP", name: "Tumbes", country: "Peru", lat: -3.5521, lng: -80.3811, airports: [
      { code: "TBP", name: "Captain Pedro Canga Rodríguez Intl" },
    ] },
  { code: "YMS", name: "Yurimaguas", country: "Peru", lat: -5.8938, lng: -76.1182, airports: [
      { code: "YMS", name: "Moises Benzaquen Rengifo" },
    ] },
  { code: "AHE", name: "Ahe Atoll", country: "French Polynesia", lat: -14.4281, lng: -146.257, airports: [
      { code: "AHE", name: "Ahe" },
    ] },
  { code: "AAA", name: "Anaa", country: "French Polynesia", lat: -17.3526, lng: -145.51, airports: [
      { code: "AAA", name: "Anaa" },
    ] },
  { code: "AXR", name: "Arutua", country: "French Polynesia", lat: -15.2483, lng: -146.617, airports: [
      { code: "AXR", name: "Arutua" },
    ] },
  { code: "FAV", name: "Fakarava", country: "French Polynesia", lat: -16.0541, lng: -145.657, airports: [
      { code: "FAV", name: "Fakarava" },
    ] },
  { code: "FGU", name: "Fangatau", country: "French Polynesia", lat: -15.82, lng: -140.8881, airports: [
      { code: "FGU", name: "Fangatau" },
    ] },
  { code: "HUH", name: "Fare", country: "French Polynesia", lat: -16.6871, lng: -151.0216, airports: [
      { code: "HUH", name: "Huahine-Fare" },
    ] },
  { code: "AUQ", name: "Hiva Oa Island", country: "French Polynesia", lat: -9.7688, lng: -139.011, airports: [
      { code: "AUQ", name: "Hiva Oa-Atuona" },
    ] },
  { code: "MKP", name: "Makemo", country: "French Polynesia", lat: -16.5839, lng: -143.658, airports: [
      { code: "MKP", name: "Makemo" },
    ] },
  { code: "XMH", name: "Manihi", country: "French Polynesia", lat: -14.4368, lng: -146.07, airports: [
      { code: "XMH", name: "Manihi" },
    ] },
  { code: "MVT", name: "Mataiva", country: "French Polynesia", lat: -14.8681, lng: -148.717, airports: [
      { code: "MVT", name: "Mataiva" },
    ] },
  { code: "MAU", name: "Maupiti", country: "French Polynesia", lat: -16.4265, lng: -152.244, airports: [
      { code: "MAU", name: "Maupiti" },
    ] },
  { code: "MOZ", name: "Moorea-Maiao", country: "French Polynesia", lat: -17.4898, lng: -149.7618, airports: [
      { code: "MOZ", name: "Moorea Temae" },
    ] },
  { code: "BOB", name: "Motu Mute", country: "French Polynesia", lat: -16.4444, lng: -151.751, airports: [
      { code: "BOB", name: "Bora Bora" },
    ] },
  { code: "NHV", name: "Nuku Hiva", country: "French Polynesia", lat: -8.7956, lng: -140.229, airports: [
      { code: "NHV", name: "Nuku Hiva" },
    ] },
  { code: "HOI", name: "Otepa", country: "French Polynesia", lat: -18.0748, lng: -140.946, airports: [
      { code: "HOI", name: "Hao" },
    ] },
  { code: "PPT", name: "Papeete", country: "French Polynesia", lat: -17.5535, lng: -149.6069, airports: [
      { code: "PPT", name: "Fa'a'ā Intl" },
    ] },
  { code: "KKR", name: "Raitahiti", country: "French Polynesia", lat: -15.6633, lng: -146.885, airports: [
      { code: "KKR", name: "Kaukura" },
    ] },
  { code: "RGI", name: "Rangiroa", country: "French Polynesia", lat: -14.9543, lng: -147.661, airports: [
      { code: "RGI", name: "Rangiroa" },
    ] },
  { code: "RUR", name: "Rurutu", country: "French Polynesia", lat: -22.4341, lng: -151.361, airports: [
      { code: "RUR", name: "Rurutu" },
    ] },
  { code: "TKP", name: "Takapoto", country: "French Polynesia", lat: -14.7095, lng: -145.246, airports: [
      { code: "TKP", name: "Takapoto" },
    ] },
  { code: "TKX", name: "Takaroa", country: "French Polynesia", lat: -14.4558, lng: -145.025, airports: [
      { code: "TKX", name: "Takaroa" },
    ] },
  { code: "GMR", name: "Totegegie", country: "French Polynesia", lat: -23.0799, lng: -134.89, airports: [
      { code: "GMR", name: "Totegegie" },
    ] },
  { code: "TUB", name: "Tubuai", country: "French Polynesia", lat: -23.3654, lng: -149.524, airports: [
      { code: "TUB", name: "Tubuai" },
    ] },
  { code: "TIH", name: "Tuherahera", country: "French Polynesia", lat: -15.1196, lng: -148.231, airports: [
      { code: "TIH", name: "Tikehau" },
    ] },
  { code: "RFP", name: "Uturoa", country: "French Polynesia", lat: -16.7229, lng: -151.466, airports: [
      { code: "RFP", name: "Raiatea" },
    ] },
  { code: "VMU", name: "Baimuru", country: "Papua New Guinea", lat: -7.497, lng: 144.8218, airports: [
      { code: "VMU", name: "Baimuru" },
    ] },
  { code: "OPU", name: "Balimo", country: "Papua New Guinea", lat: -8.05, lng: 142.933, airports: [
      { code: "OPU", name: "Balimo" },
    ] },
  { code: "BUA", name: "Buka Island", country: "Papua New Guinea", lat: -5.4223, lng: 154.6727, airports: [
      { code: "BUA", name: "Buka" },
    ] },
  { code: "DAU", name: "Daru", country: "Papua New Guinea", lat: -9.0868, lng: 143.208, airports: [
      { code: "DAU", name: "Daru" },
    ] },
  { code: "GKA", name: "Goronka", country: "Papua New Guinea", lat: -6.0817, lng: 145.392, airports: [
      { code: "GKA", name: "Goroka" },
    ] },
  { code: "GUR", name: "Gurney", country: "Papua New Guinea", lat: -10.3115, lng: 150.334, airports: [
      { code: "GUR", name: "Gurney" },
    ] },
  { code: "KVG", name: "Kavieng", country: "Papua New Guinea", lat: -2.5794, lng: 150.808, airports: [
      { code: "KVG", name: "Kavieng" },
    ] },
  { code: "KMA", name: "Kerema", country: "Papua New Guinea", lat: -7.9636, lng: 145.771, airports: [
      { code: "KMA", name: "Kerema" },
    ] },
  { code: "HKN", name: "Kimbe", country: "Papua New Guinea", lat: -5.4638, lng: 150.4073, airports: [
      { code: "HKN", name: "Hoskins" },
    ] },
  { code: "RAB", name: "Kokopo", country: "Papua New Guinea", lat: -4.3405, lng: 152.38, airports: [
      { code: "RAB", name: "Tokua" },
    ] },
  { code: "CMU", name: "Kundiawa", country: "Papua New Guinea", lat: -6.0243, lng: 144.971, airports: [
      { code: "CMU", name: "Chimbu" },
    ] },
  { code: "LAE", name: "Lae", country: "Papua New Guinea", lat: -6.568, lng: 146.7265, airports: [
      { code: "LAE", name: "Nadzab Tomodachi Intl" },
    ] },
  { code: "MAG", name: "Madang", country: "Papua New Guinea", lat: -5.2071, lng: 145.789, airports: [
      { code: "MAG", name: "Madang" },
    ] },
  { code: "MAS", name: "Manus Island", country: "Papua New Guinea", lat: -2.0619, lng: 147.424, airports: [
      { code: "MAS", name: "Momote" },
    ] },
  { code: "MDU", name: "Mendi", country: "Papua New Guinea", lat: -6.1477, lng: 143.657, airports: [
      { code: "MDU", name: "Mendi" },
    ] },
  { code: "HGU", name: "Mount Hagen", country: "Papua New Guinea", lat: -5.8282, lng: 144.2994, airports: [
      { code: "HGU", name: "Mount Hagen Kagamuga" },
    ] },
  { code: "PNP", name: "Popondetta", country: "Papua New Guinea", lat: -8.8045, lng: 148.309, airports: [
      { code: "PNP", name: "Girua" },
    ] },
  { code: "POM", name: "Port Moresby", country: "Papua New Guinea", lat: -9.4434, lng: 147.22, airports: [
      { code: "POM", name: "Port Moresby Jacksons Intl" },
    ] },
  { code: "VAI", name: "Vanimo", country: "Papua New Guinea", lat: -2.6926, lng: 141.3028, airports: [
      { code: "VAI", name: "Vanimo" },
    ] },
  { code: "WBM", name: "Wapenamanda", country: "Papua New Guinea", lat: -5.6353, lng: 143.8922, airports: [
      { code: "WBM", name: "Wapenamanda" },
    ] },
  { code: "WWK", name: "Wewak", country: "Papua New Guinea", lat: -3.5838, lng: 143.669, airports: [
      { code: "WWK", name: "Wewak Intl" },
    ] },
  { code: "BCD", name: "Bacolod City", country: "Philippines", lat: 10.7764, lng: 123.015, airports: [
      { code: "BCD", name: "Bacolod-Silay" },
    ] },
  { code: "BAG", name: "Baguio", country: "Philippines", lat: 16.375, lng: 120.6199, airports: [
      { code: "BAG", name: "Loakan" },
    ] },
  { code: "BSO", name: "Basco", country: "Philippines", lat: 20.4513, lng: 121.98, airports: [
      { code: "BSO", name: "Basco" },
    ] },
  { code: "TWT", name: "Bongao", country: "Philippines", lat: 5.0482, lng: 119.7433, airports: [
      { code: "TWT", name: "Sanga Sanga" },
    ] },
  { code: "BXU", name: "Butuan", country: "Philippines", lat: 8.9515, lng: 125.4788, airports: [
      { code: "BXU", name: "Bancasi" },
    ] },
  { code: "ILO", name: "Cabatuan", country: "Philippines", lat: 10.833, lng: 122.4934, airports: [
      { code: "ILO", name: "Iloilo Intl" },
    ] },
  { code: "CYP", name: "Calbayog City", country: "Philippines", lat: 12.0726, lng: 124.5451, airports: [
      { code: "CYP", name: "Calbayog" },
    ] },
  { code: "CRM", name: "Catarman", country: "Philippines", lat: 12.5016, lng: 124.6353, airports: [
      { code: "CRM", name: "Catarman National" },
    ] },
  { code: "MPH", name: "Caticlan", country: "Philippines", lat: 11.9245, lng: 121.954, airports: [
      { code: "MPH", name: "Godofredo P. Ramos" },
    ] },
  { code: "CYZ", name: "Cauayan City", country: "Philippines", lat: 16.9299, lng: 121.753, airports: [
      { code: "CYZ", name: "Cauayan" },
    ] },
  { code: "CEB", name: "Cebu City/Lapu-Lapu City", country: "Philippines", lat: 10.3093, lng: 123.9797, airports: [
      { code: "CEB", name: "Mactan Cebu Intl" },
    ] },
  { code: "USU", name: "Coron", country: "Philippines", lat: 12.1219, lng: 120.1008, airports: [
      { code: "USU", name: "Francisco B. Reyes (Busuanga)" },
    ] },
  { code: "CBO", name: "Datu Odin Sinsuat", country: "Philippines", lat: 7.1648, lng: 124.2099, airports: [
      { code: "CBO", name: "Cotabato (Awang)" },
    ] },
  { code: "DVO", name: "Davao", country: "Philippines", lat: 7.1255, lng: 125.646, airports: [
      { code: "DVO", name: "Francisco Bangoy Intl" },
    ] },
  { code: "DPL", name: "Dipolog", country: "Philippines", lat: 8.602, lng: 123.3419, airports: [
      { code: "DPL", name: "Dipolog" },
    ] },
  { code: "DGT", name: "Dumaguete City", country: "Philippines", lat: 9.3342, lng: 123.3019, airports: [
      { code: "DGT", name: "Sibulan" },
    ] },
  { code: "GES", name: "General Santos", country: "Philippines", lat: 6.0572, lng: 125.0962, airports: [
      { code: "GES", name: "General Santos Intl" },
    ] },
  { code: "JOL", name: "Jolo", country: "Philippines", lat: 6.0537, lng: 121.011, airports: [
      { code: "JOL", name: "Jolo" },
    ] },
  { code: "KLO", name: "Kalibo", country: "Philippines", lat: 11.6794, lng: 122.376, airports: [
      { code: "KLO", name: "Kalibo Intl" },
    ] },
  { code: "CGY", name: "Laguindingan", country: "Philippines", lat: 8.6122, lng: 124.4565, airports: [
      { code: "CGY", name: "Laguindingan Intl" },
    ] },
  { code: "LAO", name: "Laoag City", country: "Philippines", lat: 18.1751, lng: 120.531, airports: [
      { code: "LAO", name: "Laoag Intl" },
    ] },
  { code: "DRP", name: "Legazpi", country: "Philippines", lat: 13.1119, lng: 123.6768, airports: [
      { code: "DRP", name: "Bicol Intl" },
    ] },
  { code: "CRK", name: "Mabalacat", country: "Philippines", lat: 15.186, lng: 120.56, airports: [
      { code: "CRK", name: "Clark Intl Airport / Clark" },
    ] },
  { code: "CGM", name: "Mambajao", country: "Philippines", lat: 9.2539, lng: 124.7091, airports: [
      { code: "CGM", name: "Camiguin" },
    ] },
  { code: "MNL", name: "Manila (Pasay)", country: "Philippines", lat: 14.5086, lng: 121.02, airports: [
      { code: "MNL", name: "Ninoy Aquino Intl" },
    ] },
  { code: "MBT", name: "Masbate", country: "Philippines", lat: 12.3697, lng: 123.6301, airports: [
      { code: "MBT", name: "Moises R. Espinosa" },
    ] },
  { code: "WNP", name: "Naga", country: "Philippines", lat: 13.5849, lng: 123.27, airports: [
      { code: "WNP", name: "Naga" },
    ] },
  { code: "SFS", name: "Olongapo", country: "Philippines", lat: 14.7948, lng: 120.2719, airports: [
      { code: "SFS", name: "Subic Bay Intl Airport / Naval Air Station Cubi Point" },
    ] },
  { code: "OZC", name: "Ozamiz", country: "Philippines", lat: 8.1785, lng: 123.842, airports: [
      { code: "OZC", name: "Labo" },
    ] },
  { code: "PAG", name: "Pagadian", country: "Philippines", lat: 7.8256, lng: 123.4596, airports: [
      { code: "PAG", name: "Pagadian" },
    ] },
  { code: "TAG", name: "Panglao", country: "Philippines", lat: 9.573, lng: 123.7701, airports: [
      { code: "TAG", name: "Bohol-Panglao Intl" },
    ] },
  { code: "PPS", name: "Puerto Princesa", country: "Philippines", lat: 9.742, lng: 118.7591, airports: [
      { code: "PPS", name: "Puerto Princesa Intl Airport / PAF Antonio Bautista" },
    ] },
  { code: "RXS", name: "Roxas City", country: "Philippines", lat: 11.5977, lng: 122.752, airports: [
      { code: "RXS", name: "Roxas" },
    ] },
  { code: "SJI", name: "San Jose", country: "Philippines", lat: 12.3615, lng: 121.047, airports: [
      { code: "SJI", name: "San Jose" },
    ] },
  { code: "SUG", name: "Surigao City", country: "Philippines", lat: 9.7558, lng: 125.4809, airports: [
      { code: "SUG", name: "Surigao" },
    ] },
  { code: "TBH", name: "Tablas Island", country: "Philippines", lat: 12.311, lng: 122.085, airports: [
      { code: "TBH", name: "Tugdan" },
    ] },
  { code: "TAC", name: "Tacloban City", country: "Philippines", lat: 11.2278, lng: 125.0278, airports: [
      { code: "TAC", name: "Daniel Z. Romualdez" },
    ] },
  { code: "TUG", name: "Tuguegarao City", country: "Philippines", lat: 17.6434, lng: 121.7332, airports: [
      { code: "TUG", name: "Tuguegarao" },
    ] },
  { code: "VRC", name: "Virac", country: "Philippines", lat: 13.5764, lng: 124.206, airports: [
      { code: "VRC", name: "Virac" },
    ] },
  { code: "ZAM", name: "Zamboanga", country: "Philippines", lat: 6.9224, lng: 122.06, airports: [
      { code: "ZAM", name: "Zamboanga Intl" },
    ] },
  { code: "ISB", name: "Attock", country: "Pakistan", lat: 33.549, lng: 72.8257, airports: [
      { code: "ISB", name: "Islamabad Intl" },
    ] },
  { code: "BHV", name: "Bahawalpur", country: "Pakistan", lat: 29.3481, lng: 71.718, airports: [
      { code: "BHV", name: "Bahawalpur" },
    ] },
  { code: "CJL", name: "Chitral", country: "Pakistan", lat: 35.8862, lng: 71.7999, airports: [
      { code: "CJL", name: "Chitral" },
    ] },
  { code: "DEA", name: "Dera Ghazi Khan", country: "Pakistan", lat: 29.961, lng: 70.4859, airports: [
      { code: "DEA", name: "Dera Ghazi Khan" },
    ] },
  { code: "LYP", name: "Faisalabad", country: "Pakistan", lat: 31.3649, lng: 72.9953, airports: [
      { code: "LYP", name: "Faisalabad Intl" },
    ] },
  { code: "PZH", name: "Fort Sandeman", country: "Pakistan", lat: 31.3584, lng: 69.4636, airports: [
      { code: "PZH", name: "Zhob" },
    ] },
  { code: "GIL", name: "Gilgit", country: "Pakistan", lat: 35.9188, lng: 74.3336, airports: [
      { code: "GIL", name: "Gilgit" },
    ] },
  { code: "GWD", name: "Gurandani", country: "Pakistan", lat: 25.2967, lng: 62.4988, airports: [
      { code: "GWD", name: "New Gwadar Intl" },
    ] },
  { code: "KHI", name: "Karachi", country: "Pakistan", lat: 24.9065, lng: 67.1608, airports: [
      { code: "KHI", name: "Jinnah Intl" },
    ] },
  { code: "LHE", name: "Lahore", country: "Pakistan", lat: 31.5216, lng: 74.4036, airports: [
      { code: "LHE", name: "Allama Iqbal Intl" },
    ] },
  { code: "SKZ", name: "Mirpur Khas", country: "Pakistan", lat: 27.722, lng: 68.7917, airports: [
      { code: "SKZ", name: "Sukkur" },
    ] },
  { code: "MUX", name: "Multan", country: "Pakistan", lat: 30.2032, lng: 71.4191, airports: [
      { code: "MUX", name: "Multan Intl" },
    ] },
  { code: "WNS", name: "Nawabashah", country: "Pakistan", lat: 26.2194, lng: 68.3901, airports: [
      { code: "WNS", name: "Shaheed Benazirabad" },
    ] },
  { code: "PEW", name: "Peshawar", country: "Pakistan", lat: 33.9939, lng: 71.5146, airports: [
      { code: "PEW", name: "Bacha Khan Intl" },
    ] },
  { code: "UET", name: "Quetta", country: "Pakistan", lat: 30.2514, lng: 66.9378, airports: [
      { code: "UET", name: "Quetta Intl" },
    ] },
  { code: "RYK", name: "Rahim Yar Khan", country: "Pakistan", lat: 28.3839, lng: 70.2796, airports: [
      { code: "RYK", name: "Shaikh Zaid" },
    ] },
  { code: "SKT", name: "Sialkot", country: "Pakistan", lat: 32.5359, lng: 74.3646, airports: [
      { code: "SKT", name: "Sialkot Intl" },
    ] },
  { code: "KDU", name: "Skardu", country: "Pakistan", lat: 35.3387, lng: 75.5386, airports: [
      { code: "KDU", name: "Skardu Intl" },
    ] },
  { code: "TUK", name: "Turbat", country: "Pakistan", lat: 25.9864, lng: 63.0302, airports: [
      { code: "TUK", name: "Turbat Intl" },
    ] },
  { code: "KRK", name: "Balice", country: "Poland", lat: 50.0777, lng: 19.7848, airports: [
      { code: "KRK", name: "Kraków John Paul II Intl" },
    ] },
  { code: "BZG", name: "Bydgoszcz", country: "Poland", lat: 53.0968, lng: 17.9777, airports: [
      { code: "BZG", name: "Ignacy Jan Paderewski Bydgoszcz" },
    ] },
  { code: "GDN", name: "Gdańsk", country: "Poland", lat: 54.3776, lng: 18.4662, airports: [
      { code: "GDN", name: "Gdańsk Lech Wałęsa" },
    ] },
  { code: "SZZ", name: "Glewice", country: "Poland", lat: 53.5847, lng: 14.9022, airports: [
      { code: "SZZ", name: "Solidarity Szczecin–Goleniów" },
    ] },
  { code: "RZE", name: "Jasionka", country: "Poland", lat: 50.1098, lng: 22.0242, airports: [
      { code: "RZE", name: "Rzeszów-Jasionka" },
    ] },
  { code: "KTW", name: "Katowice", country: "Poland", lat: 50.476, lng: 19.0807, airports: [
      { code: "KTW", name: "Katowice Wojciech Korfanty Intl" },
    ] },
  { code: "LCJ", name: "Łódź", country: "Poland", lat: 51.7219, lng: 19.3981, airports: [
      { code: "LCJ", name: "Łódź Władysław Reymont" },
    ] },
  { code: "LUZ", name: "Lublin", country: "Poland", lat: 51.2402, lng: 22.7135, airports: [
      { code: "LUZ", name: "Lublin" },
    ] },
  { code: "IEG", name: "Nowe Kramsko", country: "Poland", lat: 52.1385, lng: 15.7986, airports: [
      { code: "IEG", name: "Zielona Góra-Babimost" },
    ] },
  { code: "WMI", name: "Nowy Dwór Mazowiecki", country: "Poland", lat: 52.4511, lng: 20.6518, airports: [
      { code: "WMI", name: "Warsaw Modlin" },
    ] },
  { code: "POZ", name: "Poznań", country: "Poland", lat: 52.4216, lng: 16.8234, airports: [
      { code: "POZ", name: "Poznań-Ławica" },
    ] },
  { code: "RDO", name: "Radom", country: "Poland", lat: 51.3894, lng: 21.2147, airports: [
      { code: "RDO", name: "Warsaw Radom" },
    ] },
  { code: "SZY", name: "Szymany", country: "Poland", lat: 53.4819, lng: 20.9377, airports: [
      { code: "SZY", name: "Olsztyn-Mazury" },
    ] },
  { code: "WAW", name: "Warsaw", country: "Poland", lat: 52.1657, lng: 20.9671, airports: [
      { code: "WAW", name: "Warsaw Chopin" },
    ], keywords: ["poland", "warszawa", "chopin", "modlin"] },
  { code: "WRO", name: "Wrocław", country: "Poland", lat: 51.1037, lng: 16.8821, airports: [
      { code: "WRO", name: "Copernicus Wrocław" },
    ] },
  { code: "FSP", name: "Saint-Pierre", country: "PM", lat: 46.7627, lng: -56.175, airports: [
      { code: "FSP", name: "Saint-Pierre Pointe-Blanche" },
    ] },
  { code: "BQN", name: "Aguadilla", country: "Puerto Rico", lat: 18.4949, lng: -67.1294, airports: [
      { code: "BQN", name: "Rafael Hernández Intl" },
    ] },
  { code: "NRR", name: "Ceiba", country: "Puerto Rico", lat: 18.2473, lng: -65.6398, airports: [
      { code: "NRR", name: "José Aponte de la Torre" },
    ] },
  { code: "CPX", name: "Culebra", country: "Puerto Rico", lat: 18.313, lng: -65.3039, airports: [
      { code: "CPX", name: "Benjamin Rivera Noriega" },
    ] },
  { code: "MAZ", name: "Mayaguez", country: "Puerto Rico", lat: 18.2557, lng: -67.1485, airports: [
      { code: "MAZ", name: "Eugenio Maria De Hostos" },
    ] },
  { code: "PSE", name: "Ponce", country: "Puerto Rico", lat: 18.0083, lng: -66.563, airports: [
      { code: "PSE", name: "Mercedita Intl" },
    ] },
  { code: "SJU", name: "San Juan", country: "Puerto Rico", lat: 18.4568, lng: -66.0981, airports: [
      { code: "SJU", name: "Luis Munoz Marin Intl" },
      { code: "SIG", name: "Fernando Luis Ribas Dominicci" },
    ] },
  { code: "VQS", name: "Vieques", country: "Puerto Rico", lat: 18.1348, lng: -65.4936, airports: [
      { code: "VQS", name: "Antonio Rivera Rodriguez" },
    ] },
  { code: "BGC", name: "Bragança", country: "Portugal", lat: 41.8578, lng: -6.7071, airports: [
      { code: "BGC", name: "Bragança" },
    ] },
  { code: "CAT", name: "Cascais", country: "Portugal", lat: 38.725, lng: -9.3552, airports: [
      { code: "CAT", name: "Cascais" },
    ] },
  { code: "FAO", name: "Faro", country: "Portugal", lat: 37.0159, lng: -7.9709, airports: [
      { code: "FAO", name: "Faro - Gago Coutinho Intl" },
    ] },
  { code: "FNC", name: "Funchal", country: "Portugal", lat: 32.6978, lng: -16.7746, airports: [
      { code: "FNC", name: "Cristiano Ronaldo Intl" },
    ] },
  { code: "HOR", name: "Horta", country: "Portugal", lat: 38.5199, lng: -28.7159, airports: [
      { code: "HOR", name: "Horta" },
    ] },
  { code: "LIS", name: "Lisbon", country: "Portugal", lat: 38.7813, lng: -9.1359, airports: [
      { code: "LIS", name: "Lisbon Humberto Delgado" },
    ] },
  { code: "PIX", name: "Pico Island", country: "Portugal", lat: 38.5543, lng: -28.4413, airports: [
      { code: "PIX", name: "Pico" },
    ] },
  { code: "PDL", name: "Ponta Delgada", country: "Portugal", lat: 37.7412, lng: -25.6979, airports: [
      { code: "PDL", name: "João Paulo II" },
    ] },
  { code: "PRM", name: "Portimão", country: "Portugal", lat: 37.1493, lng: -8.584, airports: [
      { code: "PRM", name: "Portimão" },
    ] },
  { code: "OPO", name: "Porto", country: "Portugal", lat: 41.2481, lng: -8.6814, airports: [
      { code: "OPO", name: "Francisco de Sá Carneiro" },
    ] },
  { code: "TER", name: "Praia da Vitória", country: "Portugal", lat: 38.7618, lng: -27.0908, airports: [
      { code: "TER", name: "Lajes" },
    ] },
  { code: "GRW", name: "Santa Cruz da Graciosa", country: "Portugal", lat: 39.0922, lng: -28.0298, airports: [
      { code: "GRW", name: "Graciosa" },
    ] },
  { code: "FLW", name: "Santa Cruz das Flores", country: "Portugal", lat: 39.4553, lng: -31.1314, airports: [
      { code: "FLW", name: "Flores" },
    ] },
  { code: "SJZ", name: "Velas", country: "Portugal", lat: 38.6655, lng: -28.1758, airports: [
      { code: "SJZ", name: "São Jorge" },
    ] },
  { code: "PXO", name: "Vila Baleira", country: "Portugal", lat: 33.0734, lng: -16.35, airports: [
      { code: "PXO", name: "Porto Santo" },
    ] },
  { code: "SMA", name: "Vila do Porto", country: "Portugal", lat: 36.9714, lng: -25.1706, airports: [
      { code: "SMA", name: "Santa Maria" },
    ] },
  { code: "VRL", name: "Vila Real", country: "Portugal", lat: 41.2743, lng: -7.7205, airports: [
      { code: "VRL", name: "Vila Real" },
    ] },
  { code: "VSE", name: "Viseu", country: "Portugal", lat: 40.7255, lng: -7.889, airports: [
      { code: "VSE", name: "Aerodromo Goncalves Lobato (Viseu Airport)" },
    ] },
  { code: "ROR", name: "Babelthuap Island", country: "PW", lat: 7.367, lng: 134.5441, airports: [
      { code: "ROR", name: "Roman Tmetuchl Intl" },
    ] },
  { code: "ASU", name: "Asunción", country: "Paraguay", lat: -25.2402, lng: -57.5192, airports: [
      { code: "ASU", name: "Aeropuerto Internacional Silvio Pettirossi" },
    ] },
  { code: "AGT", name: "Ciudad del Este", country: "Paraguay", lat: -25.4572, lng: -54.8395, airports: [
      { code: "AGT", name: "Aeropuerto Internacional Guaraní" },
    ] },
  { code: "ENO", name: "Encarnación", country: "Paraguay", lat: -27.2275, lng: -55.8376, airports: [
      { code: "ENO", name: "Aeropuerto Internacional Tte. Amín Ayub González" },
    ] },
  { code: "DOH", name: "Doha", country: "Qatar", lat: 25.2731, lng: 51.6081, airports: [
      { code: "DOH", name: "Hamad Intl" },
      { code: "DIA", name: "Doha Intl" },
    ], keywords: ["qatar", "hamad", "doh"] },
  { code: "ZSE", name: "Saint-Pierre", country: "Réunion", lat: -21.3194, lng: 55.4225, airports: [
      { code: "ZSE", name: "Pierrefonds" },
    ] },
  { code: "RUN", name: "Sainte-Marie", country: "Réunion", lat: -20.8901, lng: 55.5189, airports: [
      { code: "RUN", name: "Roland Garros" },
    ] },
  { code: "ARW", name: "Arad", country: "Romania", lat: 46.1761, lng: 21.2643, airports: [
      { code: "ARW", name: "Arad Intl" },
    ] },
  { code: "BCM", name: "Bacău", country: "Romania", lat: 46.5219, lng: 26.9103, airports: [
      { code: "BCM", name: "Bacău George Enescu Intl " },
    ] },
  { code: "GHV", name: "Brașov (Ghimbav)", country: "Romania", lat: 45.7056, lng: 25.5229, airports: [
      { code: "GHV", name: "Brașov-Ghimbav Intl" },
    ] },
  { code: "BUH", name: "Bucharest", country: "Romania", lat: 44.5718, lng: 26.1033, airports: [
      { code: "OTP", name: "Bucharest Henri Coandă Intl" },
      { code: "BBU", name: "Bucharest Băneasa Aurel Vlaicu Intl" },
    ], keywords: ["romania", "henri coanda", "otopeni", "bucuresti"] },
  { code: "CLJ", name: "Cluj-Napoca", country: "Romania", lat: 46.786, lng: 23.6857, airports: [
      { code: "CLJ", name: "Avram Iancu Cluj Intl" },
    ] },
  { code: "CND", name: "Constanța", country: "Romania", lat: 44.3622, lng: 28.4883, airports: [
      { code: "CND", name: "Mihail Kogălniceanu Intl" },
    ] },
  { code: "CRA", name: "Craiova", country: "Romania", lat: 44.3181, lng: 23.8886, airports: [
      { code: "CRA", name: "Craiova Intl" },
    ] },
  { code: "IAS", name: "Iaşi", country: "Romania", lat: 47.1796, lng: 27.6214, airports: [
      { code: "IAS", name: "Iaşi Intl" },
    ] },
  { code: "OMR", name: "Oradea", country: "Romania", lat: 47.0253, lng: 21.9025, airports: [
      { code: "OMR", name: "Oradea Intl" },
    ] },
  { code: "TGM", name: "Recea", country: "Romania", lat: 46.4677, lng: 24.4125, airports: [
      { code: "TGM", name: "Târgu Mureş Transilvania Intl" },
    ] },
  { code: "SUJ", name: "Satu Mare", country: "Romania", lat: 47.7033, lng: 22.8857, airports: [
      { code: "SUJ", name: "Satu Mare Intl" },
    ] },
  { code: "SBZ", name: "Sibiu", country: "Romania", lat: 45.7858, lng: 24.0867, airports: [
      { code: "SBZ", name: "Sibiu Intl" },
    ] },
  { code: "SCV", name: "Suceava", country: "Romania", lat: 47.6875, lng: 26.3541, airports: [
      { code: "SCV", name: "Suceava Ștefan cel Mare Intl" },
    ] },
  { code: "BAY", name: "Tăuții-Măgherăuș", country: "Romania", lat: 47.6584, lng: 23.4644, airports: [
      { code: "BAY", name: "Maramureș Intl" },
    ] },
  { code: "TSR", name: "Timişoara", country: "Romania", lat: 45.8099, lng: 21.3379, airports: [
      { code: "TSR", name: "Timișoara Traian Vuia Intl" },
    ] },
  { code: "BEG", name: "Belgrade", country: "Serbia", lat: 44.8184, lng: 20.3091, airports: [
      { code: "BEG", name: "Belgrade Nikola Tesla" },
    ] },
  { code: "KVO", name: "Kraljevo", country: "Serbia", lat: 43.8175, lng: 20.5867, airports: [
      { code: "KVO", name: "Morava" },
    ] },
  { code: "INI", name: "Niš", country: "Serbia", lat: 43.3365, lng: 21.8562, airports: [
      { code: "INI", name: "Niš Constantine the Great" },
    ] },
  { code: "ABA", name: "Abakan", country: "Russia", lat: 53.74, lng: 91.385, airports: [
      { code: "ABA", name: "Abakan Intl" },
    ] },
  { code: "AMV", name: "Amderma", country: "Russia", lat: 69.7633, lng: 61.5564, airports: [
      { code: "AMV", name: "Amderma" },
    ] },
  { code: "DYR", name: "Anadyr", country: "Russia", lat: 64.7349, lng: 177.741, airports: [
      { code: "DYR", name: "Ugolny Yuri Ryktheu" },
    ] },
  { code: "PWE", name: "Apapelgino", country: "Russia", lat: 69.7833, lng: 170.597, airports: [
      { code: "PWE", name: "Pevek" },
    ] },
  { code: "ARH", name: "Archangelsk", country: "Russia", lat: 64.6003, lng: 40.7167, airports: [
      { code: "ARH", name: "Talagi" },
    ] },
  { code: "VVO", name: "Artyom", country: "Russia", lat: 43.3963, lng: 132.1482, airports: [
      { code: "VVO", name: "Vladivostok Intl" },
    ] },
  { code: "ASF", name: "Astrakhan", country: "Russia", lat: 46.2828, lng: 48.0105, airports: [
      { code: "ASF", name: "Astrakhan Narimanovo Boris M. Kustodiev Intl" },
    ] },
  { code: "BWO", name: "Balakovo", country: "Russia", lat: 51.8583, lng: 47.7456, airports: [
      { code: "BWO", name: "Balakovo" },
    ] },
  { code: "BAX", name: "Barnaul", country: "Russia", lat: 53.3613, lng: 83.5397, airports: [
      { code: "BAX", name: "Barnaul Gherman Titov Intl" },
    ] },
  { code: "EGO", name: "Belgorod", country: "Russia", lat: 50.6438, lng: 36.5901, airports: [
      { code: "EGO", name: "Belgorod Intl" },
    ] },
  { code: "EYK", name: "Beloyarskiy", country: "Russia", lat: 63.6869, lng: 66.6986, airports: [
      { code: "EYK", name: "Beloyarskiy" },
    ] },
  { code: "OGZ", name: "Beslan", country: "Russia", lat: 43.2051, lng: 44.6066, airports: [
      { code: "OGZ", name: "Vladikavkaz Beslan Intl" },
    ] },
  { code: "BQS", name: "Blagoveschensk", country: "Russia", lat: 50.4254, lng: 127.412, airports: [
      { code: "BQS", name: "Ignatyevo" },
    ] },
  { code: "BVJ", name: "Bovanenkovo", country: "Russia", lat: 70.3153, lng: 68.3336, airports: [
      { code: "BVJ", name: "Bovanenkovo" },
    ] },
  { code: "BTK", name: "Bratsk", country: "Russia", lat: 56.3696, lng: 101.7018, airports: [
      { code: "BTK", name: "Bratsk" },
    ] },
  { code: "BZK", name: "Bryansk", country: "Russia", lat: 53.2142, lng: 34.1764, airports: [
      { code: "BZK", name: "Bryansk Intl" },
    ] },
  { code: "UUA", name: "Bugulma", country: "Russia", lat: 54.6412, lng: 52.8002, airports: [
      { code: "UUA", name: "Bugulma" },
    ] },
  { code: "CSY", name: "Cheboksary", country: "Russia", lat: 56.0903, lng: 47.3473, airports: [
      { code: "CSY", name: "Cheboksary" },
    ] },
  { code: "CEK", name: "Chelyabinsk", country: "Russia", lat: 55.3031, lng: 61.5049, airports: [
      { code: "CEK", name: "Kurchatov Chelyabinsk Intl" },
    ] },
  { code: "ULY", name: "Cherdakly", country: "Russia", lat: 54.401, lng: 48.8027, airports: [
      { code: "ULY", name: "Ulyanovsk Vostochny" },
    ] },
  { code: "CEE", name: "Cherepovets", country: "Russia", lat: 59.2736, lng: 38.0158, airports: [
      { code: "CEE", name: "Cherepovets" },
    ] },
  { code: "CYX", name: "Cherskiy", country: "Russia", lat: 68.7406, lng: 161.338, airports: [
      { code: "CYX", name: "Cherskiy" },
    ] },
  { code: "HTA", name: "Chita", country: "Russia", lat: 52.0248, lng: 113.3058, airports: [
      { code: "HTA", name: "Chita-Kadala Intl" },
    ] },
  { code: "CKH", name: "Chokurdah", country: "Russia", lat: 70.6231, lng: 147.902, airports: [
      { code: "CKH", name: "Chokurdakh" },
    ] },
  { code: "ESL", name: "Elista", country: "Russia", lat: 46.3739, lng: 44.3309, airports: [
      { code: "ESL", name: "Elista" },
    ] },
  { code: "GDZ", name: "Gelendzhik", country: "Russia", lat: 44.5821, lng: 38.0125, airports: [
      { code: "GDZ", name: "Gelendzhik" },
    ] },
  { code: "GRV", name: "Grozny", country: "Russia", lat: 43.3881, lng: 45.6998, airports: [
      { code: "GRV", name: "Grozny" },
    ] },
  { code: "IAA", name: "Igarka", country: "Russia", lat: 67.4372, lng: 86.6219, airports: [
      { code: "IAA", name: "Igarka" },
    ] },
  { code: "IKT", name: "Irkutsk", country: "Russia", lat: 52.2667, lng: 104.3956, airports: [
      { code: "IKT", name: "Irkutsk Intl" },
    ] },
  { code: "IWA", name: "Ivanovo", country: "Russia", lat: 56.9394, lng: 40.9408, airports: [
      { code: "IWA", name: "Ivanovo South" },
    ] },
  { code: "IJK", name: "Izhevsk", country: "Russia", lat: 56.8345, lng: 53.4622, airports: [
      { code: "IJK", name: "Izhevsk" },
    ] },
  { code: "KGD", name: "Kaliningrad", country: "Russia", lat: 54.8899, lng: 20.5982, airports: [
      { code: "KGD", name: "Khrabrovo" },
    ] },
  { code: "KZN", name: "Kazan", country: "Russia", lat: 55.6062, lng: 49.2787, airports: [
      { code: "KZN", name: "Kazan Intl" },
    ] },
  { code: "KEJ", name: "Kemerovo", country: "Russia", lat: 55.2701, lng: 86.1072, airports: [
      { code: "KEJ", name: "Alexei Leonov Kemerovo Intl" },
    ] },
  { code: "KPW", name: "Keperveem", country: "Russia", lat: 67.845, lng: 166.14, airports: [
      { code: "KPW", name: "Keperveem" },
    ] },
  { code: "KHV", name: "Khabarovsk", country: "Russia", lat: 48.5283, lng: 135.1886, airports: [
      { code: "KHV", name: "Khabarovsk Novy" },
    ] },
  { code: "HMA", name: "Khanty-Mansiysk", country: "Russia", lat: 61.0285, lng: 69.0861, airports: [
      { code: "HMA", name: "Khanty Mansiysk" },
    ] },
  { code: "HTG", name: "Khatanga", country: "Russia", lat: 71.9781, lng: 102.491, airports: [
      { code: "HTG", name: "Khatanga" },
    ] },
  { code: "MQJ", name: "Khonuu", country: "Russia", lat: 66.4509, lng: 143.2616, airports: [
      { code: "MQJ", name: "Moma" },
    ] },
  { code: "KVX", name: "Kirov", country: "Russia", lat: 58.5039, lng: 49.3478, airports: [
      { code: "KVX", name: "Pobedilovo" },
    ] },
  { code: "KGP", name: "Kogalym", country: "Russia", lat: 62.1904, lng: 74.5338, airports: [
      { code: "KGP", name: "Kogalym Intl" },
    ] },
  { code: "KXK", name: "Komsomolsk-on-Amur", country: "Russia", lat: 50.409, lng: 136.934, airports: [
      { code: "KXK", name: "Komsomolsk-on-Amur" },
    ] },
  { code: "KMW", name: "Kostroma", country: "Russia", lat: 57.7969, lng: 41.0194, airports: [
      { code: "KMW", name: "Kostroma Sokerkino" },
    ] },
  { code: "KSZ", name: "Kotlas", country: "Russia", lat: 61.2358, lng: 46.6975, airports: [
      { code: "KSZ", name: "Kotlas" },
    ] },
  { code: "KRR", name: "Krasnodar", country: "Russia", lat: 45.0345, lng: 39.1742, airports: [
      { code: "KRR", name: "Krasnodar Pashkovsky Intl" },
    ] },
  { code: "KJA", name: "Krasnoyarsk", country: "Russia", lat: 56.1757, lng: 92.4858, airports: [
      { code: "KJA", name: "Krasnoyarsk Intl" },
      { code: "KCY", name: "Krasnoyarsk Cheremshanka" },
    ] },
  { code: "AAQ", name: "Krasnyi Kurgan", country: "Russia", lat: 45.0021, lng: 37.3473, airports: [
      { code: "AAQ", name: "Anapa Vityazevo" },
    ] },
  { code: "KRO", name: "Kurgan", country: "Russia", lat: 55.4753, lng: 65.4156, airports: [
      { code: "KRO", name: "Kurgan" },
    ] },
  { code: "URS", name: "Kursk", country: "Russia", lat: 51.7506, lng: 36.2956, airports: [
      { code: "URS", name: "Kursk East" },
    ] },
  { code: "KYZ", name: "Kyzyl", country: "Russia", lat: 51.6694, lng: 94.4006, airports: [
      { code: "KYZ", name: "Kyzyl" },
    ] },
  { code: "ULK", name: "Lensk", country: "Russia", lat: 60.7206, lng: 114.826, airports: [
      { code: "ULK", name: "Lensk" },
    ] },
  { code: "LPK", name: "Lipetsk", country: "Russia", lat: 52.7028, lng: 39.5378, airports: [
      { code: "LPK", name: "Lipetsk" },
    ] },
  { code: "GDX", name: "Magadan", country: "Russia", lat: 59.911, lng: 150.72, airports: [
      { code: "GDX", name: "Sokol" },
    ] },
  { code: "MQF", name: "Magnitogorsk", country: "Russia", lat: 53.392, lng: 58.7552, airports: [
      { code: "MQF", name: "Magnitogorsk Intl" },
    ] },
  { code: "MCX", name: "Makhachkala", country: "Russia", lat: 42.8168, lng: 47.6523, airports: [
      { code: "MCX", name: "Makhachkala Uytash Intl" },
    ] },
  { code: "MRV", name: "Mineralnyye Vody", country: "Russia", lat: 44.2251, lng: 43.0819, airports: [
      { code: "MRV", name: "Mineralnye Vody" },
    ] },
  { code: "MJZ", name: "Mirny", country: "Russia", lat: 62.5347, lng: 114.039, airports: [
      { code: "MJZ", name: "Mirny" },
    ] },
  { code: "MOW", name: "Moscow", country: "Russia", lat: 55.9769, lng: 37.4112, airports: [
      { code: "SVO", name: "Sheremetyevo Intl" },
      { code: "DME", name: "Domodedovo Intl" },
      { code: "VKO", name: "Vnukovo Intl" },
      { code: "ZIA", name: "Zhukovsky Intl" },
    ], keywords: ["sheremetyevo", "domodedovo", "vnukovo", "zhukovsky", "svo", "dme", "vko", "moskva"] },
  { code: "MMK", name: "Murmansk", country: "Russia", lat: 68.7817, lng: 32.7508, airports: [
      { code: "MMK", name: "Emperor Nicholas II Murmansk" },
    ] },
  { code: "NYM", name: "Nadym", country: "Russia", lat: 65.4809, lng: 72.6989, airports: [
      { code: "NYM", name: "Nadym" },
    ] },
  { code: "NAL", name: "Nalchik", country: "Russia", lat: 43.5129, lng: 43.6366, airports: [
      { code: "NAL", name: "Nalchik" },
    ] },
  { code: "NNM", name: "Naryan Mar", country: "Russia", lat: 67.64, lng: 53.1219, airports: [
      { code: "NNM", name: "Naryan Mar" },
    ] },
  { code: "NFG", name: "Nefteyugansk", country: "Russia", lat: 61.1083, lng: 72.65, airports: [
      { code: "NFG", name: "Nefteyugansk" },
    ] },
  { code: "NER", name: "Neryungri", country: "Russia", lat: 56.9139, lng: 124.914, airports: [
      { code: "NER", name: "Chulman" },
    ] },
  { code: "NLI", name: "Nikolayevsk-na-Amure Airport", country: "Russia", lat: 53.155, lng: 140.65, airports: [
      { code: "NLI", name: "Nikolayevsk-na-Amure" },
    ] },
  { code: "NBC", name: "Nizhnekamsk", country: "Russia", lat: 55.5647, lng: 52.0925, airports: [
      { code: "NBC", name: "Begishevo" },
    ] },
  { code: "NJC", name: "Nizhnevartovsk", country: "Russia", lat: 60.9493, lng: 76.4836, airports: [
      { code: "NJC", name: "Nizhnevartovsk" },
    ] },
  { code: "GOJ", name: "Nizhny Novgorod", country: "Russia", lat: 56.2274, lng: 43.7852, airports: [
      { code: "GOJ", name: "Nizhny Novgorod / Strigino Intl" },
    ] },
  { code: "NSK", name: "Norilsk", country: "Russia", lat: 69.308, lng: 87.3259, airports: [
      { code: "NSK", name: "Alykel Intl" },
    ] },
  { code: "NOZ", name: "Novokuznetsk", country: "Russia", lat: 53.8114, lng: 86.8772, airports: [
      { code: "NOZ", name: "Spichenkovo" },
    ] },
  { code: "OVB", name: "Novosibirsk", country: "Russia", lat: 55.0198, lng: 82.6187, airports: [
      { code: "OVB", name: "Novosibirsk Tolmachevo" },
    ] },
  { code: "NUX", name: "Novy Urengoy", country: "Russia", lat: 66.0694, lng: 76.5203, airports: [
      { code: "NUX", name: "Novy Urengoy" },
    ] },
  { code: "NOJ", name: "Noyabrsk", country: "Russia", lat: 63.1833, lng: 75.27, airports: [
      { code: "NOJ", name: "Noyabrsk" },
    ] },
  { code: "NYA", name: "Nyagan", country: "Russia", lat: 62.11, lng: 65.615, airports: [
      { code: "NYA", name: "Nyagan" },
    ] },
  { code: "OHO", name: "Okhotsk", country: "Russia", lat: 59.4101, lng: 143.0565, airports: [
      { code: "OHO", name: "Okhotsk" },
    ] },
  { code: "OLZ", name: "Olyokminsk", country: "Russia", lat: 60.4018, lng: 120.4761, airports: [
      { code: "OLZ", name: "Olyokminsk" },
    ] },
  { code: "OMS", name: "Omsk", country: "Russia", lat: 54.9631, lng: 73.3124, airports: [
      { code: "OMS", name: "Omsk Central" },
    ] },
  { code: "REN", name: "Orenburg", country: "Russia", lat: 51.7927, lng: 55.4572, airports: [
      { code: "REN", name: "Orenburg Central" },
    ] },
  { code: "OSW", name: "Orsk", country: "Russia", lat: 51.0725, lng: 58.5956, airports: [
      { code: "OSW", name: "Orsk" },
    ] },
  { code: "PEX", name: "Pechora", country: "Russia", lat: 65.1211, lng: 57.1308, airports: [
      { code: "PEX", name: "Pechora" },
    ] },
  { code: "PEZ", name: "Penza", country: "Russia", lat: 53.1106, lng: 45.0211, airports: [
      { code: "PEZ", name: "Penza" },
    ] },
  { code: "PEE", name: "Perm", country: "Russia", lat: 57.9145, lng: 56.0212, airports: [
      { code: "PEE", name: "Perm Intl" },
    ] },
  { code: "PKC", name: "Petropavlovsk-Kamchatsky", country: "Russia", lat: 53.1687, lng: 158.4511, airports: [
      { code: "PKC", name: "Yelizovo" },
    ] },
  { code: "PES", name: "Petrozavodsk", country: "Russia", lat: 61.8852, lng: 34.1547, airports: [
      { code: "PES", name: "Petrozavodsk" },
    ] },
  { code: "PKV", name: "Pskov", country: "Russia", lat: 57.7813, lng: 28.3938, airports: [
      { code: "PKV", name: "Princess Olga Pskov Intl" },
    ] },
  { code: "ROV", name: "Rostov-on-Don", country: "Russia", lat: 47.4939, lng: 39.9247, airports: [
      { code: "ROV", name: "Platov Intl" },
    ] },
  { code: "RYB", name: "Rybinsk", country: "Russia", lat: 58.1042, lng: 38.9294, airports: [
      { code: "RYB", name: "Staroselye" },
    ] },
  { code: "SBT", name: "Sabetta", country: "Russia", lat: 71.2192, lng: 72.0522, airports: [
      { code: "SBT", name: "Sabetta Intl" },
    ] },
  { code: "SLY", name: "Salekhard", country: "Russia", lat: 66.5908, lng: 66.611, airports: [
      { code: "SLY", name: "Salekhard" },
    ] },
  { code: "KUF", name: "Samara", country: "Russia", lat: 53.5049, lng: 50.1643, airports: [
      { code: "KUF", name: "Kurumoch Intl" },
    ] },
  { code: "SKX", name: "Saransk", country: "Russia", lat: 54.1251, lng: 45.2123, airports: [
      { code: "SKX", name: "Saransk Intl" },
    ] },
  { code: "GSV", name: "Saratov", country: "Russia", lat: 51.7128, lng: 46.1711, airports: [
      { code: "GSV", name: "Gagarin Intl" },
    ] },
  { code: "SYS", name: "Saskylakh", country: "Russia", lat: 71.9279, lng: 114.08, airports: [
      { code: "SYS", name: "Saskylakh" },
    ] },
  { code: "VEO", name: "Severo-Yeniseysk", country: "Russia", lat: 60.3733, lng: 93.0117, airports: [
      { code: "VEO", name: "Severo-Yeniseysk" },
    ] },
  { code: "AER", name: "Sochi", country: "Russia", lat: 43.4499, lng: 39.9566, airports: [
      { code: "AER", name: "Sochi Intl" },
    ] },
  { code: "OVS", name: "Sovetskiy", country: "Russia", lat: 61.3266, lng: 63.6019, airports: [
      { code: "OVS", name: "Sovetskiy" },
    ] },
  { code: "SEK", name: "Srednekolymsk", country: "Russia", lat: 67.4805, lng: 153.7364, airports: [
      { code: "SEK", name: "Srednekolymsk" },
    ] },
  { code: "LED", name: "St. Petersburg", country: "Russia", lat: 59.8003, lng: 30.2625, airports: [
      { code: "LED", name: "Pulkovo" },
    ] },
  { code: "STW", name: "Stavropol", country: "Russia", lat: 45.1092, lng: 42.1128, airports: [
      { code: "STW", name: "Stavropol Shpakovskoye" },
    ] },
  { code: "IGT", name: "Sunzha", country: "Russia", lat: 43.3233, lng: 45.0126, airports: [
      { code: "IGT", name: "Magas" },
    ] },
  { code: "SGC", name: "Surgut", country: "Russia", lat: 61.3405, lng: 73.4058, airports: [
      { code: "SGC", name: "Surgut Intl" },
    ] },
  { code: "SCW", name: "Syktyvkar", country: "Russia", lat: 61.647, lng: 50.8451, airports: [
      { code: "SCW", name: "Syktyvkar" },
    ] },
  { code: "TGK", name: "Taganrog", country: "Russia", lat: 47.1983, lng: 38.8492, airports: [
      { code: "TGK", name: "Taganrog Yuzhny" },
    ] },
  { code: "IKS", name: "Tiksi", country: "Russia", lat: 71.6977, lng: 128.903, airports: [
      { code: "IKS", name: "Tiksi" },
    ] },
  { code: "RMZ", name: "Tobolsk", country: "Russia", lat: 58.0597, lng: 68.348, airports: [
      { code: "RMZ", name: "Tobolsk Remezov" },
    ] },
  { code: "TOF", name: "Tomsk", country: "Russia", lat: 56.3803, lng: 85.2083, airports: [
      { code: "TOF", name: "Tomsk Kamov" },
    ] },
  { code: "IAR", name: "Tunoshna", country: "Russia", lat: 57.5607, lng: 40.1574, airports: [
      { code: "IAR", name: "Golden Ring Yaroslavl Intl" },
    ] },
  { code: "TJM", name: "Tyumen", country: "Russia", lat: 57.179, lng: 65.3277, airports: [
      { code: "TJM", name: "Roshchino Intl" },
    ] },
  { code: "UFA", name: "Ufa", country: "Russia", lat: 54.5575, lng: 55.8744, airports: [
      { code: "UFA", name: "Ufa Intl" },
    ] },
  { code: "UCT", name: "Ukhta", country: "Russia", lat: 63.5669, lng: 53.8047, airports: [
      { code: "UCT", name: "Ukhta" },
    ] },
  { code: "UUD", name: "Ulan Ude", country: "Russia", lat: 51.8086, lng: 107.4397, airports: [
      { code: "UUD", name: "Baikal Intl" },
    ] },
  { code: "ULV", name: "Ulyanovsk", country: "Russia", lat: 54.2683, lng: 48.2267, airports: [
      { code: "ULV", name: "Ulyanovsk Baratayevka" },
    ] },
  { code: "URJ", name: "Uray", country: "Russia", lat: 60.1033, lng: 64.8267, airports: [
      { code: "URJ", name: "Uray" },
    ] },
  { code: "USK", name: "Usinsk", country: "Russia", lat: 66.0047, lng: 57.3672, airports: [
      { code: "USK", name: "Usinsk" },
    ] },
  { code: "UKX", name: "Ust-Kut", country: "Russia", lat: 56.8567, lng: 105.73, airports: [
      { code: "UKX", name: "Ust-Kut" },
    ] },
  { code: "USR", name: "Ust-Nera", country: "Russia", lat: 64.55, lng: 143.115, airports: [
      { code: "USR", name: "Ust-Nera" },
    ] },
  { code: "VAQ", name: "Vanavara", country: "Russia", lat: 60.3562, lng: 102.3096, airports: [
      { code: "VAQ", name: "Vanavara" },
    ] },
  { code: "VUS", name: "Velikiy Ustyug", country: "Russia", lat: 60.7883, lng: 46.26, airports: [
      { code: "VUS", name: "Velikiy Ustyug" },
    ] },
  { code: "VYI", name: "Vilyuisk", country: "Russia", lat: 63.7567, lng: 121.6933, airports: [
      { code: "VYI", name: "Vilyuisk" },
    ] },
  { code: "VOG", name: "Volgograd", country: "Russia", lat: 48.7813, lng: 44.3392, airports: [
      { code: "VOG", name: "Volgograd Intl" },
    ] },
  { code: "VKT", name: "Vorkuta", country: "Russia", lat: 67.4886, lng: 63.9931, airports: [
      { code: "VKT", name: "Vorkuta" },
    ] },
  { code: "VOZ", name: "Voronezh", country: "Russia", lat: 51.8137, lng: 39.2317, airports: [
      { code: "VOZ", name: "Voronezh Intl" },
    ] },
  { code: "PYJ", name: "Yakutia", country: "Russia", lat: 66.4004, lng: 112.03, airports: [
      { code: "PYJ", name: "Polyarny" },
    ] },
  { code: "YKS", name: "Yakutsk", country: "Russia", lat: 62.0933, lng: 129.771, airports: [
      { code: "YKS", name: "Platon Oyunsky Yakutsk Intl" },
    ] },
  { code: "SVX", name: "Yekaterinburg", country: "Russia", lat: 56.7431, lng: 60.8027, airports: [
      { code: "SVX", name: "Koltsovo" },
    ] },
  { code: "EIE", name: "Yeniseysk", country: "Russia", lat: 58.4742, lng: 92.1125, airports: [
      { code: "EIE", name: "Yeniseysk" },
    ] },
  { code: "EIK", name: "Yeysk", country: "Russia", lat: 46.68, lng: 38.21, airports: [
      { code: "EIK", name: "Yeysk" },
    ] },
  { code: "UUS", name: "Yuzhno-Sakhalinsk", country: "Russia", lat: 46.8855, lng: 142.7175, airports: [
      { code: "UUS", name: "Yuzhno-Sakhalinsk" },
    ] },
  { code: "ZIX", name: "Zhigansk", country: "Russia", lat: 66.7965, lng: 123.361, airports: [
      { code: "ZIX", name: "Zhigansk" },
    ] },
  { code: "ZKP", name: "Zyryanka", country: "Russia", lat: 65.7485, lng: 150.8889, airports: [
      { code: "ZKP", name: "Zyryanka" },
    ] },
  { code: "KME", name: "Kamembe", country: "Rwanda", lat: -2.4622, lng: 28.9079, airports: [
      { code: "KME", name: "Kamembe" },
    ] },
  { code: "KGL", name: "Kigali", country: "Rwanda", lat: -1.9686, lng: 30.1395, airports: [
      { code: "KGL", name: "Kigali Intl" },
    ] },
  { code: "AHB", name: "Abha", country: "Saudi Arabia", lat: 18.2404, lng: 42.6566, airports: [
      { code: "AHB", name: "Abha Intl" },
    ] },
  { code: "DMM", name: "Ad Dammam", country: "Saudi Arabia", lat: 26.4691, lng: 49.7982, airports: [
      { code: "DMM", name: "King Fahd Intl" },
    ] },
  { code: "ULH", name: "Al Ula", country: "Saudi Arabia", lat: 26.4833, lng: 38.1169, airports: [
      { code: "ULH", name: "Majeed Bin Abdulaziz" },
    ] },
  { code: "EJH", name: "Al Wajh", country: "Saudi Arabia", lat: 26.1986, lng: 36.4764, airports: [
      { code: "EJH", name: "Al Wajh Domestic" },
    ] },
  { code: "ABT", name: "Al-Baha", country: "Saudi Arabia", lat: 20.2985, lng: 41.6362, airports: [
      { code: "ABT", name: "King Saud Bin Abdulaziz (Al Baha)" },
    ] },
  { code: "AJF", name: "Al-Jawf", country: "Saudi Arabia", lat: 29.7851, lng: 40.1, airports: [
      { code: "AJF", name: "Al-Jawf Domestic" },
    ] },
  { code: "RAE", name: "Arar", country: "Saudi Arabia", lat: 30.9066, lng: 41.1382, airports: [
      { code: "RAE", name: "Arar Domestic" },
    ] },
  { code: "BHH", name: "Bisha", country: "Saudi Arabia", lat: 19.9844, lng: 42.6209, airports: [
      { code: "BHH", name: "Bisha" },
    ] },
  { code: "ELQ", name: "Buraidah", country: "Saudi Arabia", lat: 26.3028, lng: 43.7744, airports: [
      { code: "ELQ", name: "Gassim" },
    ] },
  { code: "DWD", name: "Dawadmi", country: "Saudi Arabia", lat: 24.4499, lng: 44.1212, airports: [
      { code: "DWD", name: "Dawadmi Domestic" },
    ] },
  { code: "URY", name: "Gurayat", country: "Saudi Arabia", lat: 31.4124, lng: 37.2789, airports: [
      { code: "URY", name: "Gurayat Domestic" },
    ] },
  { code: "HAS", name: "Ha'il", country: "Saudi Arabia", lat: 27.4379, lng: 41.6863, airports: [
      { code: "HAS", name: "Ha'il" },
    ] },
  { code: "RSI", name: "Hanak", country: "Saudi Arabia", lat: 25.628, lng: 37.0889, airports: [
      { code: "RSI", name: "Red Sea Intl" },
    ] },
  { code: "HOF", name: "Hofuf", country: "Saudi Arabia", lat: 25.2853, lng: 49.4852, airports: [
      { code: "HOF", name: "Al-Ahsa Intl" },
    ] },
  { code: "JED", name: "Jeddah", country: "Saudi Arabia", lat: 21.6796, lng: 39.1565, airports: [
      { code: "JED", name: "King Abdulaziz Intl" },
    ] },
  { code: "GIZ", name: "Jizan", country: "Saudi Arabia", lat: 16.9011, lng: 42.5858, airports: [
      { code: "GIZ", name: "Jizan Regional Airport / King Abdullah bin Abdulaziz" },
    ] },
  { code: "KMC", name: "King Khaled Military City", country: "Saudi Arabia", lat: 27.9009, lng: 45.5282, airports: [
      { code: "KMC", name: "King Khaled Military City" },
    ] },
  { code: "MED", name: "Medina", country: "Saudi Arabia", lat: 24.5534, lng: 39.7051, airports: [
      { code: "MED", name: "Prince Mohammad Bin Abdulaziz" },
    ] },
  { code: "EAM", name: "Najran", country: "Saudi Arabia", lat: 17.6114, lng: 44.4192, airports: [
      { code: "EAM", name: "Najran Domestic" },
    ] },
  { code: "AQI", name: "Qaisumah", country: "Saudi Arabia", lat: 28.3352, lng: 46.1251, airports: [
      { code: "AQI", name: "Al Qaisumah/Hafr Al Batin" },
    ] },
  { code: "RAH", name: "Rafha", country: "Saudi Arabia", lat: 29.6264, lng: 43.4906, airports: [
      { code: "RAH", name: "Rafha Domestic" },
    ] },
  { code: "RUH", name: "Riyadh", country: "Saudi Arabia", lat: 24.9576, lng: 46.6988, airports: [
      { code: "RUH", name: "King Khalid Intl" },
    ] },
  { code: "NUM", name: "Sharma", country: "Saudi Arabia", lat: 27.9276, lng: 35.2887, airports: [
      { code: "NUM", name: "Neom Bay" },
    ] },
  { code: "SHW", name: "Sharurah", country: "Saudi Arabia", lat: 17.4669, lng: 47.1214, airports: [
      { code: "SHW", name: "Sharurah Domestic" },
    ] },
  { code: "TIF", name: "Ta’if", country: "Saudi Arabia", lat: 21.483, lng: 40.5434, airports: [
      { code: "TIF", name: "Ta’if Regional" },
    ] },
  { code: "TUU", name: "Tabuk", country: "Saudi Arabia", lat: 28.3654, lng: 36.6189, airports: [
      { code: "TUU", name: "Tabuk" },
    ] },
  { code: "TUI", name: "Turaif", country: "Saudi Arabia", lat: 31.6922, lng: 38.7315, airports: [
      { code: "TUI", name: "Turaif Domestic" },
    ] },
  { code: "WAE", name: "Wadi Al Dawasir", country: "Saudi Arabia", lat: 20.5043, lng: 45.1996, airports: [
      { code: "WAE", name: "Wadi Al Dawasir Domestic" },
    ] },
  { code: "YNB", name: "Yanbu", country: "Saudi Arabia", lat: 24.1442, lng: 38.0634, airports: [
      { code: "YNB", name: "Prince Abdul Mohsin bin Abdulaziz Intl Airport / Yanbu" },
    ] },
  { code: "HIR", name: "Honiara", country: "Solomon Islands", lat: -9.428, lng: 160.055, airports: [
      { code: "HIR", name: "Honiara Intl" },
    ] },
  { code: "MUA", name: "Munda", country: "Solomon Islands", lat: -8.328, lng: 157.263, airports: [
      { code: "MUA", name: "Munda" },
    ] },
  { code: "PRI", name: "Praslin Island", country: "Seychelles", lat: -4.3193, lng: 55.6916, airports: [
      { code: "PRI", name: "Praslin Island" },
    ] },
  { code: "SEZ", name: "Victoria", country: "Seychelles", lat: -4.6743, lng: 55.5218, airports: [
      { code: "SEZ", name: "Seychelles Intl" },
    ] },
  { code: "DOG", name: "Dongola", country: "Sudan", lat: 19.1539, lng: 30.4301, airports: [
      { code: "DOG", name: "Dongola" },
    ] },
  { code: "ELF", name: "El Fasher", country: "Sudan", lat: 13.6149, lng: 25.3246, airports: [
      { code: "ELF", name: "El Fasher" },
    ] },
  { code: "EBD", name: "El-Obeid", country: "Sudan", lat: 13.1532, lng: 30.2327, airports: [
      { code: "EBD", name: "El-Obeid" },
    ] },
  { code: "KSL", name: "Kassala", country: "Sudan", lat: 15.3875, lng: 36.3288, airports: [
      { code: "KSL", name: "Kassala" },
    ] },
  { code: "KRT", name: "Khartoum", country: "Sudan", lat: 15.5895, lng: 32.5532, airports: [
      { code: "KRT", name: "Khartoum Intl" },
    ] },
  { code: "UYL", name: "Nyala", country: "Sudan", lat: 12.0535, lng: 24.9562, airports: [
      { code: "UYL", name: "Nyala" },
    ] },
  { code: "PZU", name: "Port Sudan", country: "Sudan", lat: 19.4346, lng: 37.2341, airports: [
      { code: "PZU", name: "Port Sudan New Intl" },
    ] },
  { code: "AGH", name: "Ängelholm", country: "Sweden", lat: 56.2961, lng: 12.8471, airports: [
      { code: "AGH", name: "Ängelholm-Helsingborg" },
    ] },
  { code: "AJR", name: "Arvidsjaur", country: "Sweden", lat: 65.5903, lng: 19.2819, airports: [
      { code: "AJR", name: "Arvidsjaur" },
    ] },
  { code: "BLE", name: "Borlange", country: "Sweden", lat: 60.422, lng: 15.5152, airports: [
      { code: "BLE", name: "Dala" },
    ] },
  { code: "GEV", name: "Gällivare", country: "Sweden", lat: 67.1324, lng: 20.8146, airports: [
      { code: "GEV", name: "Gällivare" },
    ] },
  { code: "GOT", name: "Göteborg", country: "Sweden", lat: 57.6628, lng: 12.2798, airports: [
      { code: "GOT", name: "Göteborg Landvetter" },
    ] },
  { code: "HAD", name: "Halmstad", country: "Sweden", lat: 56.6911, lng: 12.8202, airports: [
      { code: "HAD", name: "Halmstad" },
    ] },
  { code: "JKG", name: "Jönköping", country: "Sweden", lat: 57.7576, lng: 14.0687, airports: [
      { code: "JKG", name: "Jönköping" },
    ] },
  { code: "KLR", name: "Kalmar", country: "Sweden", lat: 56.6855, lng: 16.2876, airports: [
      { code: "KLR", name: "Kalmar" },
    ] },
  { code: "KSD", name: "Karlstad", country: "Sweden", lat: 59.4447, lng: 13.3374, airports: [
      { code: "KSD", name: "Karlstad" },
    ] },
  { code: "KRN", name: "Kiruna", country: "Sweden", lat: 67.822, lng: 20.3368, airports: [
      { code: "KRN", name: "Kiruna" },
    ] },
  { code: "LPI", name: "Linköping", country: "Sweden", lat: 58.4049, lng: 15.6845, airports: [
      { code: "LPI", name: "Linköping City" },
    ] },
  { code: "LLA", name: "Luleå", country: "Sweden", lat: 65.5438, lng: 22.122, airports: [
      { code: "LLA", name: "Luleå" },
    ] },
  { code: "LYC", name: "Lycksele", country: "Sweden", lat: 64.5483, lng: 18.7162, airports: [
      { code: "LYC", name: "Lycksele" },
    ] },
  { code: "SCR", name: "Malung-Sälen", country: "Sweden", lat: 61.1651, lng: 12.8335, airports: [
      { code: "SCR", name: "Scandinavian Mountains" },
    ] },
  { code: "MXX", name: "Mora", country: "Sweden", lat: 60.9579, lng: 14.5114, airports: [
      { code: "MXX", name: "Mora" },
    ] },
  { code: "NRK", name: "Norrköping", country: "Sweden", lat: 58.5863, lng: 16.2506, airports: [
      { code: "NRK", name: "Norrköping" },
    ] },
  { code: "KRF", name: "Nyland", country: "Sweden", lat: 63.0486, lng: 17.7689, airports: [
      { code: "KRF", name: "Kramfors-Sollefteå Höga Kusten" },
    ] },
  { code: "ORB", name: "Örebro", country: "Sweden", lat: 59.2237, lng: 15.038, airports: [
      { code: "ORB", name: "Örebro" },
    ] },
  { code: "OER", name: "Örnsköldsvik", country: "Sweden", lat: 63.4083, lng: 18.99, airports: [
      { code: "OER", name: "Örnsköldsvik" },
    ] },
  { code: "OSD", name: "Östersund", country: "Sweden", lat: 63.1941, lng: 14.5003, airports: [
      { code: "OSD", name: "Åre Östersund" },
    ] },
  { code: "RNB", name: "Ronneby", country: "Sweden", lat: 56.2667, lng: 15.265, airports: [
      { code: "RNB", name: "Ronneby" },
    ] },
  { code: "SFT", name: "Skellefteå", country: "Sweden", lat: 64.6248, lng: 21.0769, airports: [
      { code: "SFT", name: "Skellefteå" },
    ] },
  { code: "STO", name: "Stockholm", country: "Sweden", lat: 59.6485, lng: 17.9288, airports: [
      { code: "ARN", name: "Stockholm-Arlanda" },
      { code: "NYO", name: "Stockholm Skavsta" },
      { code: "BMA", name: "Stockholm-Bromma" },
    ], keywords: ["arlanda", "skavsta", "arn", "sweden"] },
  { code: "VST", name: "Stockholm / Västerås", country: "Sweden", lat: 59.5894, lng: 16.6336, airports: [
      { code: "VST", name: "Stockholm Västerås" },
    ] },
  { code: "SDL", name: "Sundsvall/ Härnösand", country: "Sweden", lat: 62.5281, lng: 17.4439, airports: [
      { code: "SDL", name: "Sundsvall-Härnösand" },
    ] },
  { code: "TYF", name: "Torsby", country: "Sweden", lat: 60.1576, lng: 12.9913, airports: [
      { code: "TYF", name: "Torsby" },
    ] },
  { code: "THN", name: "Trollhättan", country: "Sweden", lat: 58.3181, lng: 12.345, airports: [
      { code: "THN", name: "Trollhättan-Vänersborg" },
    ] },
  { code: "UME", name: "Umeå", country: "Sweden", lat: 63.7918, lng: 20.2828, airports: [
      { code: "UME", name: "Umeå" },
    ] },
  { code: "VXO", name: "Växjö", country: "Sweden", lat: 56.9291, lng: 14.728, airports: [
      { code: "VXO", name: "Växjö Kronoberg" },
    ] },
  { code: "VHM", name: "Vilhelmina", country: "Sweden", lat: 64.5791, lng: 16.8336, airports: [
      { code: "VHM", name: "Vilhelmina South Lapland" },
    ] },
  { code: "VBY", name: "Visby", country: "Sweden", lat: 57.6628, lng: 18.3462, airports: [
      { code: "VBY", name: "Visby" },
    ] },
  { code: "SIN", name: "Singapore", country: "Singapore", lat: 1.3502, lng: 103.994, airports: [
      { code: "SIN", name: "Singapore Changi" },
      { code: "XSP", name: "Seletar" },
    ], keywords: ["changi", "sin"] },
  { code: "ASI", name: "Cat Hill", country: "SH", lat: -7.9702, lng: -14.3927, airports: [
      { code: "ASI", name: "RAF Ascension Island" },
    ] },
  { code: "HLE", name: "Jamestown", country: "SH", lat: -15.9589, lng: -5.6461, airports: [
      { code: "HLE", name: "Saint Helena Intl" },
    ] },
  { code: "MBX", name: "Maribor", country: "Slovenia", lat: 46.4799, lng: 15.6861, airports: [
      { code: "MBX", name: "Maribor Edvard Rusjan" },
    ] },
  { code: "LJU", name: "Zgornji Brnik", country: "Slovenia", lat: 46.2237, lng: 14.4576, airports: [
      { code: "LJU", name: "Ljubljana Jože Pučnik" },
    ] },
  { code: "BTS", name: "Bratislava", country: "Slovakia", lat: 48.1702, lng: 17.2127, airports: [
      { code: "BTS", name: "M. R. Štefánik" },
    ] },
  { code: "KSC", name: "Košice", country: "Slovakia", lat: 48.6631, lng: 21.2411, airports: [
      { code: "KSC", name: "Košice Intl" },
    ] },
  { code: "TAT", name: "Poprad", country: "Slovakia", lat: 49.0736, lng: 20.2411, airports: [
      { code: "TAT", name: "Poprad-Tatry" },
    ] },
  { code: "SLD", name: "Sliač", country: "Slovakia", lat: 48.6378, lng: 19.1341, airports: [
      { code: "SLD", name: "Sliač" },
    ] },
  { code: "FNA", name: "Freetown (Lungi-Town)", country: "Sierra Leone", lat: 8.6164, lng: -13.1955, airports: [
      { code: "FNA", name: "Lungi Intl" },
    ] },
  { code: "CSK", name: "Cap Skirring", country: "Senegal", lat: 12.3953, lng: -16.748, airports: [
      { code: "CSK", name: "Cap Skirring" },
    ] },
  { code: "DSS", name: "Dakar", country: "Senegal", lat: 14.6709, lng: -17.0728, airports: [
      { code: "DSS", name: "Blaise Diagne Intl" },
      { code: "DKR", name: "Léopold Sédar Senghor Intl" },
    ] },
  { code: "ZIG", name: "Ziguinchor", country: "Senegal", lat: 12.5556, lng: -16.2833, airports: [
      { code: "ZIG", name: "Ziguinchor" },
    ] },
  { code: "BBO", name: "Berbera", country: "Somalia", lat: 10.385, lng: 44.9367, airports: [
      { code: "BBO", name: "Berbera" },
    ] },
  { code: "HGA", name: "Hargeisa", country: "Somalia", lat: 9.5141, lng: 44.0835, airports: [
      { code: "HGA", name: "Egal Intl" },
    ] },
  { code: "MGQ", name: "Mogadishu", country: "Somalia", lat: 2.0144, lng: 45.3047, airports: [
      { code: "MGQ", name: "Aden Adde Intl" },
    ] },
  { code: "PBM", name: "Zandery", country: "Suriname", lat: 5.4528, lng: -55.1878, airports: [
      { code: "PBM", name: "Johan Adolf Pengel Intl" },
    ] },
  { code: "JUB", name: "Juba", country: "South Sudan", lat: 4.872, lng: 31.6011, airports: [
      { code: "JUB", name: "Juba Intl" },
    ] },
  { code: "MAK", name: "Malakal", country: "South Sudan", lat: 9.5587, lng: 31.6519, airports: [
      { code: "MAK", name: "Malakal Intl" },
    ] },
  { code: "WUU", name: "Wau", country: "South Sudan", lat: 7.7258, lng: 27.975, airports: [
      { code: "WUU", name: "Wau" },
    ] },
  { code: "TMS", name: "São Tomé", country: "São Tomé and Príncipe", lat: 0.3782, lng: 6.7122, airports: [
      { code: "TMS", name: "São Tomé Intl" },
    ] },
  { code: "PCP", name: "São Tomé & Príncipe", country: "São Tomé and Príncipe", lat: 1.6612, lng: 7.4111, airports: [
      { code: "PCP", name: "Principe" },
    ] },
  { code: "ILS", name: "San Salvador", country: "El Salvador", lat: 13.6995, lng: -89.1199, airports: [
      { code: "ILS", name: "Ilopango Intl" },
    ] },
  { code: "SAL", name: "San Salvador (San Luis Talpa)", country: "El Salvador", lat: 13.4445, lng: -89.0558, airports: [
      { code: "SAL", name: "El Salvador Intl Airport Saint Óscar Arnulfo Romero y Galdámez" },
    ] },
  { code: "SXM", name: "Sint Maarten", country: "SX", lat: 18.041, lng: -63.1089, airports: [
      { code: "SXM", name: "Princess Juliana Intl" },
    ] },
  { code: "ALP", name: "Aleppo", country: "Syria", lat: 36.1813, lng: 37.2269, airports: [
      { code: "ALP", name: "Aleppo Intl" },
    ] },
  { code: "DAM", name: "Damascus", country: "Syria", lat: 33.4115, lng: 36.5156, airports: [
      { code: "DAM", name: "Damascus Intl" },
    ] },
  { code: "KAC", name: "Qamishly", country: "Syria", lat: 37.0206, lng: 41.1914, airports: [
      { code: "KAC", name: "Qamishli" },
    ] },
  { code: "MTS", name: "Manzini", country: "Eswatini", lat: -26.5289, lng: 31.3076, airports: [
      { code: "MTS", name: "Matsapha Intl" },
    ] },
  { code: "SHO", name: "Mpaka", country: "Eswatini", lat: -26.3586, lng: 31.7169, airports: [
      { code: "SHO", name: "King Mswati III Intl" },
    ] },
  { code: "GDT", name: "Cockburn Town", country: "Turks and Caicos", lat: 21.4445, lng: -71.1423, airports: [
      { code: "GDT", name: "JAGS McCartney Intl" },
    ] },
  { code: "NCA", name: "North Caicos", country: "Turks and Caicos", lat: 21.9161, lng: -71.943, airports: [
      { code: "NCA", name: "North Caicos" },
    ] },
  { code: "PLS", name: "Providenciales", country: "Turks and Caicos", lat: 21.7737, lng: -72.2683, airports: [
      { code: "PLS", name: "Providenciales Intl" },
    ] },
  { code: "XSC", name: "South Caicos", country: "Turks and Caicos", lat: 21.5157, lng: -71.5285, airports: [
      { code: "XSC", name: "South Caicos" },
    ] },
  { code: "AEH", name: "Abeche", country: "Chad", lat: 13.847, lng: 20.8443, airports: [
      { code: "AEH", name: "Abeche" },
    ] },
  { code: "NDJ", name: "N'Djamena", country: "Chad", lat: 12.1337, lng: 15.034, airports: [
      { code: "NDJ", name: "N'Djamena Intl" },
    ] },
  { code: "LFW", name: "Lomé", country: "Togo", lat: 6.1656, lng: 1.2545, airports: [
      { code: "LFW", name: "Lomé–Tokoin Intl" },
    ] },
  { code: "BKK", name: "Bangkok", country: "Thailand", lat: 13.6811, lng: 100.747, airports: [
      { code: "BKK", name: "Suvarnabhumi" },
      { code: "DMK", name: "Don Mueang Intl" },
    ], keywords: ["suvarnabhumi", "don mueang", "don muang", "thailand", "bkk", "dmk"] },
  { code: "BFV", name: "Buriram", country: "Thailand", lat: 15.2295, lng: 103.253, airports: [
      { code: "BFV", name: "Buri Ram" },
    ] },
  { code: "CNX", name: "Chiang Mai", country: "Thailand", lat: 18.7668, lng: 98.9626, airports: [
      { code: "CNX", name: "Chiang Mai Intl" },
    ] },
  { code: "CEI", name: "Chiang Rai", country: "Thailand", lat: 19.9523, lng: 99.8829, airports: [
      { code: "CEI", name: "Mae Fah Luang - Chiang Rai Intl" },
    ] },
  { code: "CJM", name: "Chumphon", country: "Thailand", lat: 10.7112, lng: 99.3617, airports: [
      { code: "CJM", name: "Chumphon" },
    ] },
  { code: "HDY", name: "Hat Yai", country: "Thailand", lat: 6.9332, lng: 100.393, airports: [
      { code: "HDY", name: "Hat Yai Intl" },
    ] },
  { code: "HHQ", name: "Hua Hin", country: "Thailand", lat: 12.6362, lng: 99.9515, airports: [
      { code: "HHQ", name: "Hua Hin" },
    ] },
  { code: "KKC", name: "Khon Kaen", country: "Thailand", lat: 16.4666, lng: 102.784, airports: [
      { code: "KKC", name: "Khon Kaen" },
    ] },
  { code: "KBV", name: "Krabi", country: "Thailand", lat: 8.0991, lng: 98.9862, airports: [
      { code: "KBV", name: "Krabi" },
    ] },
  { code: "TDX", name: "Laem Ngop", country: "Thailand", lat: 12.2746, lng: 102.319, airports: [
      { code: "TDX", name: "Trat" },
    ] },
  { code: "LPT", name: "Lampang", country: "Thailand", lat: 18.2709, lng: 99.5042, airports: [
      { code: "LPT", name: "Lampang" },
    ] },
  { code: "LOE", name: "Loei", country: "Thailand", lat: 17.4391, lng: 101.722, airports: [
      { code: "LOE", name: "Loei" },
    ] },
  { code: "HGN", name: "Mae Hong Son", country: "Thailand", lat: 19.3013, lng: 97.9758, airports: [
      { code: "HGN", name: "Mae Hong Son" },
    ] },
  { code: "MAQ", name: "Mae Sot", country: "Thailand", lat: 16.6999, lng: 98.5451, airports: [
      { code: "MAQ", name: "Mae Sot" },
    ] },
  { code: "USM", name: "Na Thon (Ko Samui Island)", country: "Thailand", lat: 9.5478, lng: 100.062, airports: [
      { code: "USM", name: "Samui Intl" },
    ] },
  { code: "KOP", name: "Nakhon Phanom", country: "Thailand", lat: 17.3838, lng: 104.643, airports: [
      { code: "KOP", name: "Nakhon Phanom" },
    ] },
  { code: "NST", name: "Nakhon Si Thammarat", country: "Thailand", lat: 8.5396, lng: 99.9447, airports: [
      { code: "NST", name: "Nakhon Si Thammarat" },
    ] },
  { code: "NNT", name: "Nan", country: "Thailand", lat: 18.8079, lng: 100.783, airports: [
      { code: "NNT", name: "Nan" },
    ] },
  { code: "NAW", name: "Narathiwat", country: "Thailand", lat: 6.5199, lng: 101.743, airports: [
      { code: "NAW", name: "Narathiwat" },
    ] },
  { code: "PHY", name: "Phetchabun", country: "Thailand", lat: 16.676, lng: 101.195, airports: [
      { code: "PHY", name: "Phetchabun" },
    ] },
  { code: "PHS", name: "Phitsanulok", country: "Thailand", lat: 16.7829, lng: 100.279, airports: [
      { code: "PHS", name: "Phitsanulok" },
    ] },
  { code: "HKT", name: "Phuket", country: "Thailand", lat: 8.1132, lng: 98.3169, airports: [
      { code: "HKT", name: "Phuket Intl" },
    ] },
  { code: "UNN", name: "Ranong", country: "Thailand", lat: 9.7776, lng: 98.5855, airports: [
      { code: "UNN", name: "Ranong" },
    ] },
  { code: "UTP", name: "Rayong", country: "Thailand", lat: 12.6799, lng: 101.005, airports: [
      { code: "UTP", name: "U-Tapao–Rayong–Pattaya Intl" },
    ] },
  { code: "ROI", name: "Roi Et", country: "Thailand", lat: 16.1168, lng: 103.774, airports: [
      { code: "ROI", name: "Roi Et" },
    ] },
  { code: "SNO", name: "Sakon Nakhon", country: "Thailand", lat: 17.1951, lng: 104.119, airports: [
      { code: "SNO", name: "Sakon Nakhon" },
    ] },
  { code: "THS", name: "Sukhothai", country: "Thailand", lat: 17.238, lng: 99.8182, airports: [
      { code: "THS", name: "Sukhothai" },
    ] },
  { code: "URT", name: "Surat Thani", country: "Thailand", lat: 9.1326, lng: 99.1356, airports: [
      { code: "URT", name: "Surat Thani" },
    ] },
  { code: "PXR", name: "Surin", country: "Thailand", lat: 14.8683, lng: 103.498, airports: [
      { code: "PXR", name: "Surin" },
    ] },
  { code: "TST", name: "Trang", country: "Thailand", lat: 7.5087, lng: 99.6166, airports: [
      { code: "TST", name: "Trang" },
    ] },
  { code: "UBP", name: "Ubon Ratchathani", country: "Thailand", lat: 15.2513, lng: 104.87, airports: [
      { code: "UBP", name: "Ubon Ratchathani" },
    ] },
  { code: "UTH", name: "Udon Thani", country: "Thailand", lat: 17.3862, lng: 102.7886, airports: [
      { code: "UTH", name: "Udon Thani Intl" },
    ] },
  { code: "DYU", name: "Dushanbe", country: "Tajikistan", lat: 38.5437, lng: 68.823, airports: [
      { code: "DYU", name: "Dushanbe Intl" },
    ] },
  { code: "LBD", name: "Khujand", country: "Tajikistan", lat: 40.2154, lng: 69.6947, airports: [
      { code: "LBD", name: "Khujand Intl" },
    ] },
  { code: "TJU", name: "Kulyab", country: "Tajikistan", lat: 37.9881, lng: 69.805, airports: [
      { code: "TJU", name: "Kulob" },
    ] },
  { code: "KQT", name: "Kurgan-Tyube", country: "Tajikistan", lat: 37.8664, lng: 68.8647, airports: [
      { code: "KQT", name: "Qurghonteppa Intl" },
    ] },
  { code: "BCH", name: "Baucau", country: "Timor-Leste", lat: -8.4865, lng: 126.4, airports: [
      { code: "BCH", name: "Baucau" },
    ] },
  { code: "DIL", name: "Dili", country: "Timor-Leste", lat: -8.5466, lng: 125.5245, airports: [
      { code: "DIL", name: "Presidente Nicolau Lobato Intl" },
    ] },
  { code: "ASB", name: "Ashgabat", country: "Turkmenistan", lat: 37.9868, lng: 58.361, airports: [
      { code: "ASB", name: "Ashgabat Intl" },
    ] },
  { code: "TAZ", name: "Daşoguz", country: "Turkmenistan", lat: 41.7599, lng: 59.8361, airports: [
      { code: "TAZ", name: "Daşoguz" },
    ] },
  { code: "MYP", name: "Mary", country: "Turkmenistan", lat: 37.6235, lng: 61.8957, airports: [
      { code: "MYP", name: "Mary Intl" },
    ] },
  { code: "CRZ", name: "Türkmenabat", country: "Turkmenistan", lat: 38.9307, lng: 63.564, airports: [
      { code: "CRZ", name: "Türkmenabat Intl" },
    ] },
  { code: "KRW", name: "Turkmenbashi", country: "Turkmenistan", lat: 40.0633, lng: 53.0072, airports: [
      { code: "KRW", name: "Turkmenbashi Intl" },
    ] },
  { code: "NBE", name: "Enfidha", country: "Tunisia", lat: 36.0758, lng: 10.4386, airports: [
      { code: "NBE", name: "Enfidha - Hammamet Intl" },
    ] },
  { code: "GAE", name: "Gabès", country: "Tunisia", lat: 33.7337, lng: 9.9194, airports: [
      { code: "GAE", name: "Gabès Matmata Intl" },
    ] },
  { code: "GAF", name: "Gafsa", country: "Tunisia", lat: 34.422, lng: 8.8225, airports: [
      { code: "GAF", name: "Gafsa Ksar Intl" },
    ] },
  { code: "DJE", name: "Mellita", country: "Tunisia", lat: 33.8737, lng: 10.7773, airports: [
      { code: "DJE", name: "Djerba Zarzis Intl" },
    ] },
  { code: "MIR", name: "Monastir", country: "Tunisia", lat: 35.7581, lng: 10.7547, airports: [
      { code: "MIR", name: "Monastir Habib Bourguiba Intl" },
    ] },
  { code: "SFA", name: "Sfax", country: "Tunisia", lat: 34.718, lng: 10.691, airports: [
      { code: "SFA", name: "Sfax Thyna Intl" },
    ] },
  { code: "TBJ", name: "Tabarka", country: "Tunisia", lat: 36.98, lng: 8.8769, airports: [
      { code: "TBJ", name: "Tabarka-Aïn Draham Intl" },
    ] },
  { code: "TOE", name: "Tozeur", country: "Tunisia", lat: 33.9397, lng: 8.1106, airports: [
      { code: "TOE", name: "Tozeur Nefta Intl" },
    ] },
  { code: "TUN", name: "Tunis", country: "Tunisia", lat: 36.851, lng: 10.2272, airports: [
      { code: "TUN", name: "Tunis Carthage Intl" },
    ] },
  { code: "HPA", name: "Lifuka", country: "Tonga", lat: -19.777, lng: -174.341, airports: [
      { code: "HPA", name: "Lifuka Island" },
    ] },
  { code: "TBU", name: "Nuku'alofa", country: "Tonga", lat: -21.2414, lng: -175.1492, airports: [
      { code: "TBU", name: "Fua'amotu Intl" },
    ] },
  { code: "VAV", name: "Vava'u Island", country: "Tonga", lat: -18.5853, lng: -173.962, airports: [
      { code: "VAV", name: "Vava'u Intl" },
    ] },
  { code: "ADF", name: "Adıyaman", country: "Turkey", lat: 37.7314, lng: 38.4689, airports: [
      { code: "ADF", name: "Adıyaman" },
    ] },
  { code: "AJI", name: "Ağrı", country: "Turkey", lat: 39.6556, lng: 43.0257, airports: [
      { code: "AJI", name: "Ağrı" },
    ] },
  { code: "ESB", name: "Ankara", country: "Turkey", lat: 40.1281, lng: 32.9951, airports: [
      { code: "ESB", name: "Esenboğa Intl" },
    ] },
  { code: "HTY", name: "Antakya", country: "Turkey", lat: 36.3628, lng: 36.2822, airports: [
      { code: "HTY", name: "Hatay" },
    ] },
  { code: "AYT", name: "Antalya", country: "Turkey", lat: 36.8987, lng: 30.8005, airports: [
      { code: "AYT", name: "Antalya Intl" },
    ] },
  { code: "BZI", name: "Balıkesir", country: "Turkey", lat: 39.6193, lng: 27.926, airports: [
      { code: "BZI", name: "Balıkesir" },
    ] },
  { code: "BAL", name: "Batman", country: "Turkey", lat: 37.929, lng: 41.1166, airports: [
      { code: "BAL", name: "Batman" },
    ] },
  { code: "BJV", name: "Bodrum", country: "Turkey", lat: 37.2493, lng: 27.664, airports: [
      { code: "BJV", name: "Milas Bodrum Intl" },
    ] },
  { code: "CKZ", name: "Çanakkale", country: "Turkey", lat: 40.1377, lng: 26.4268, airports: [
      { code: "CKZ", name: "Çanakkale" },
    ] },
  { code: "TEQ", name: "Çorlu", country: "Turkey", lat: 41.1382, lng: 27.9191, airports: [
      { code: "TEQ", name: "Tekirdağ Çorlu" },
    ] },
  { code: "DLM", name: "Dalaman", country: "Turkey", lat: 36.7131, lng: 28.7925, airports: [
      { code: "DLM", name: "Dalaman Intl" },
    ] },
  { code: "DNZ", name: "Denizli", country: "Turkey", lat: 37.7856, lng: 29.7013, airports: [
      { code: "DNZ", name: "Çardak" },
    ] },
  { code: "DIY", name: "Diyarbakır", country: "Turkey", lat: 37.8939, lng: 40.201, airports: [
      { code: "DIY", name: "Diyarbakır" },
    ] },
  { code: "EDO", name: "Edremit", country: "Turkey", lat: 39.5525, lng: 27.0102, airports: [
      { code: "EDO", name: "Balıkesir Koca Seyit" },
    ] },
  { code: "EZS", name: "Elazığ", country: "Turkey", lat: 38.598, lng: 39.2835, airports: [
      { code: "EZS", name: "Elazığ" },
    ] },
  { code: "ERC", name: "Erzincan", country: "Turkey", lat: 39.7102, lng: 39.527, airports: [
      { code: "ERC", name: "Erzincan" },
    ] },
  { code: "ERZ", name: "Erzurum", country: "Turkey", lat: 39.9565, lng: 41.1702, airports: [
      { code: "ERZ", name: "Erzurum Intl" },
    ] },
  { code: "AOE", name: "Eskişehir", country: "Turkey", lat: 39.8116, lng: 30.5193, airports: [
      { code: "AOE", name: "Hasan Polatkan" },
    ] },
  { code: "GZT", name: "Gaziantep", country: "Turkey", lat: 36.9472, lng: 37.4787, airports: [
      { code: "GZT", name: "Gaziantep Oğuzeli Intl" },
    ] },
  { code: "ADB", name: "Gaziemir", country: "Turkey", lat: 38.2924, lng: 27.157, airports: [
      { code: "ADB", name: "Adnan Menderes Intl" },
    ] },
  { code: "GZP", name: "Gazipaşa", country: "Turkey", lat: 36.2992, lng: 32.3006, airports: [
      { code: "GZP", name: "Gazipaşa-Alanya" },
    ] },
  { code: "YKO", name: "Hakkari", country: "Turkey", lat: 37.5497, lng: 44.2381, airports: [
      { code: "YKO", name: "Hakkari Yüksekova" },
    ] },
  { code: "IGD", name: "Iğdır", country: "Turkey", lat: 39.9766, lng: 43.8766, airports: [
      { code: "IGD", name: "Iğdır" },
    ] },
  { code: "ISE", name: "Isparta", country: "Turkey", lat: 37.8554, lng: 30.3684, airports: [
      { code: "ISE", name: "Süleyman Demirel Intl" },
    ] },
  { code: "IST", name: "Istanbul", country: "Turkey", lat: 41.2613, lng: 28.742, airports: [
      { code: "IST", name: "İstanbul" },
      { code: "SAW", name: "Istanbul Sabiha Gökçen Intl" },
    ], keywords: ["turkey", "turkiye", "sabiha gokcen", "ist", "saw"] },
  { code: "KCM", name: "Kahramanmaraş", country: "Turkey", lat: 37.5388, lng: 36.9535, airports: [
      { code: "KCM", name: "Kahramanmaraş" },
    ] },
  { code: "KSY", name: "Kars", country: "Turkey", lat: 40.5622, lng: 43.115, airports: [
      { code: "KSY", name: "Kars" },
    ] },
  { code: "ASR", name: "Kayseri", country: "Turkey", lat: 38.7704, lng: 35.4954, airports: [
      { code: "ASR", name: "Kayseri Erkilet Intl" },
    ] },
  { code: "KYA", name: "Konya", country: "Turkey", lat: 37.979, lng: 32.5619, airports: [
      { code: "KYA", name: "Konya" },
    ] },
  { code: "MLX", name: "Malatya", country: "Turkey", lat: 38.4353, lng: 38.091, airports: [
      { code: "MLX", name: "Malatya Erhaç" },
    ] },
  { code: "MQM", name: "Mardin", country: "Turkey", lat: 37.2233, lng: 40.6317, airports: [
      { code: "MQM", name: "Mardin" },
    ] },
  { code: "MSR", name: "Muş", country: "Turkey", lat: 38.7478, lng: 41.6612, airports: [
      { code: "MSR", name: "Muş" },
    ] },
  { code: "OGU", name: "Ordu", country: "Turkey", lat: 40.9669, lng: 38.086, airports: [
      { code: "OGU", name: "Ordu–Giresun" },
    ] },
  { code: "RZV", name: "Rize", country: "Turkey", lat: 41.1798, lng: 40.8488, airports: [
      { code: "RZV", name: "Rize–Artvin" },
    ] },
  { code: "SZF", name: "Samsun", country: "Turkey", lat: 41.254, lng: 36.5675, airports: [
      { code: "SZF", name: "Samsun-Çarşamba" },
    ] },
  { code: "GNY", name: "Şanlıurfa", country: "Turkey", lat: 37.4457, lng: 38.8956, airports: [
      { code: "GNY", name: "Şanlıurfa GAP" },
    ] },
  { code: "ADA", name: "Seyhan", country: "Turkey", lat: 36.9822, lng: 35.2804, airports: [
      { code: "ADA", name: "Adana Şakirpaşa" },
    ] },
  { code: "NOP", name: "Sinop", country: "Turkey", lat: 42.0183, lng: 35.0718, airports: [
      { code: "NOP", name: "Sinop" },
    ] },
  { code: "NKT", name: "Şırnak", country: "Turkey", lat: 37.3647, lng: 42.0582, airports: [
      { code: "NKT", name: "Şırnak Şerafettin Elçi" },
    ] },
  { code: "COV", name: "Tarsus", country: "Turkey", lat: 36.8915, lng: 35.0712, airports: [
      { code: "COV", name: "Çukurova Intl" },
    ] },
  { code: "TJK", name: "Tokat", country: "Turkey", lat: 40.3247, lng: 36.3906, airports: [
      { code: "TJK", name: "Tokat" },
    ] },
  { code: "TZX", name: "Trabzon", country: "Turkey", lat: 40.9951, lng: 39.7897, airports: [
      { code: "TZX", name: "Trabzon Intl" },
    ] },
  { code: "VAN", name: "Van", country: "Turkey", lat: 38.4682, lng: 43.3323, airports: [
      { code: "VAN", name: "Van Ferit Melen" },
    ] },
  { code: "YEI", name: "Yenişehir", country: "Turkey", lat: 40.2552, lng: 29.5626, airports: [
      { code: "YEI", name: "Bursa Yenişehir" },
    ] },
  { code: "ONQ", name: "Zonguldak", country: "Turkey", lat: 41.5064, lng: 32.0886, airports: [
      { code: "ONQ", name: "Zonguldak Çaycuma" },
    ] },
  { code: "POS", name: "Port of Spain", country: "Trinidad and Tobago", lat: 10.5978, lng: -61.3375, airports: [
      { code: "POS", name: "Piarco Intl" },
    ] },
  { code: "TAB", name: "Scarborough", country: "Trinidad and Tobago", lat: 11.1496, lng: -60.8313, airports: [
      { code: "TAB", name: "A.N.R. Robinson Intl" },
    ] },
  { code: "FUN", name: "Funafuti", country: "TV", lat: -8.5239, lng: 179.197, airports: [
      { code: "FUN", name: "Funafuti Intl" },
    ] },
  { code: "HUN", name: "Hualien City", country: "Taiwan", lat: 24.0232, lng: 121.618, airports: [
      { code: "HUN", name: "Hualien Chiashan" },
    ] },
  { code: "MZG", name: "Huxi", country: "Taiwan", lat: 23.5687, lng: 119.628, airports: [
      { code: "MZG", name: "Penghu Magong" },
    ] },
  { code: "KHH", name: "Kaohsiung (Xiaogang)", country: "Taiwan", lat: 22.5771, lng: 120.35, airports: [
      { code: "KHH", name: "Kaohsiung Intl" },
    ] },
  { code: "MFK", name: "Matsu (Beigan)", country: "Taiwan", lat: 26.2242, lng: 120.003, airports: [
      { code: "MFK", name: "Matsu Beigan" },
    ] },
  { code: "LZN", name: "Matsu (Nangan)", country: "Taiwan", lat: 26.1597, lng: 119.9584, airports: [
      { code: "LZN", name: "Matsu Nangan" },
    ] },
  { code: "KYD", name: "Orchid Island", country: "Taiwan", lat: 22.027, lng: 121.535, airports: [
      { code: "KYD", name: "Lanyu" },
    ] },
  { code: "PIF", name: "Pingtung", country: "Taiwan", lat: 22.7002, lng: 120.482, airports: [
      { code: "PIF", name: "Pingtung Air Force Base North" },
    ] },
  { code: "KNH", name: "Shang-I", country: "Taiwan", lat: 24.4279, lng: 118.359, airports: [
      { code: "KNH", name: "Kinmen" },
    ] },
  { code: "CYI", name: "Shuishang", country: "Taiwan", lat: 23.4626, lng: 120.3905, airports: [
      { code: "CYI", name: "Chiayi" },
    ] },
  { code: "RMQ", name: "Taichung (Qingshui)", country: "Taiwan", lat: 24.2647, lng: 120.621, airports: [
      { code: "RMQ", name: "Taichung Intl Airport / Ching Chuang Kang" },
    ] },
  { code: "TNN", name: "Tainan (Rende)", country: "Taiwan", lat: 22.9504, lng: 120.206, airports: [
      { code: "TNN", name: "Tainan Intl Airport / Tainan" },
    ] },
  { code: "TSA", name: "Taipei (Songshan)", country: "Taiwan", lat: 25.0672, lng: 121.5528, airports: [
      { code: "TSA", name: "Taipei Songshan Intl" },
    ] },
  { code: "TTT", name: "Taitung City", country: "Taiwan", lat: 22.755, lng: 121.102, airports: [
      { code: "TTT", name: "Taitung" },
    ] },
  { code: "TPE", name: "Taoyuan", country: "Taiwan", lat: 25.0777, lng: 121.233, airports: [
      { code: "TPE", name: "Taiwan Taoyuan Intl" },
    ] },
  { code: "JRO", name: "Arusha", country: "Tanzania", lat: -3.3678, lng: 36.6333, airports: [
      { code: "JRO", name: "Kilimanjaro Intl" },
      { code: "ARK", name: "Arusha" },
    ] },
  { code: "DAR", name: "Dar es Salaam", country: "Tanzania", lat: -6.8735, lng: 39.2073, airports: [
      { code: "DAR", name: "Julius Nyerere Intl" },
    ] },
  { code: "DOD", name: "Dodoma", country: "Tanzania", lat: -6.1704, lng: 35.7526, airports: [
      { code: "DOD", name: "Dodoma" },
    ] },
  { code: "MBI", name: "Mbeya", country: "Tanzania", lat: -8.9199, lng: 33.274, airports: [
      { code: "MBI", name: "Songwe" },
    ] },
  { code: "MYW", name: "Mtwara", country: "Tanzania", lat: -10.3362, lng: 40.182, airports: [
      { code: "MYW", name: "Mtwara" },
    ] },
  { code: "MWZ", name: "Mwanza", country: "Tanzania", lat: -2.4466, lng: 32.936, airports: [
      { code: "MWZ", name: "Mwanza Intl" },
    ] },
  { code: "TGT", name: "Tanga", country: "Tanzania", lat: -5.0924, lng: 39.0712, airports: [
      { code: "TGT", name: "Tanga" },
    ] },
  { code: "ZNZ", name: "Zanzibar", country: "Tanzania", lat: -6.222, lng: 39.2249, airports: [
      { code: "ZNZ", name: "Abeid Amani Karume Intl" },
    ] },
  { code: "KBP", name: "Boryspil", country: "Ukraine", lat: 50.345, lng: 30.8947, airports: [
      { code: "KBP", name: "Boryspil Intl" },
    ] },
  { code: "CWC", name: "Chernivtsi", country: "Ukraine", lat: 48.2593, lng: 25.9808, airports: [
      { code: "CWC", name: "Chernivtsi Intl" },
    ] },
  { code: "DNK", name: "Dnipro", country: "Ukraine", lat: 48.3572, lng: 35.1006, airports: [
      { code: "DNK", name: "Dnipro Intl" },
    ] },
  { code: "IFO", name: "Ivano-Frankivsk", country: "Ukraine", lat: 48.8842, lng: 24.6861, airports: [
      { code: "IFO", name: "Ivano-Frankivsk Intl" },
    ] },
  { code: "HRK", name: "Kharkiv", country: "Ukraine", lat: 49.9269, lng: 36.2908, airports: [
      { code: "HRK", name: "Kharkiv Intl" },
    ] },
  { code: "KHE", name: "Kherson", country: "Ukraine", lat: 46.6758, lng: 32.5064, airports: [
      { code: "KHE", name: "Kherson Intl" },
    ] },
  { code: "KWG", name: "Kryvyi Rih", country: "Ukraine", lat: 48.0433, lng: 33.21, airports: [
      { code: "KWG", name: "Kryvyi Rih Intl" },
    ] },
  { code: "IEV", name: "Kyiv", country: "Ukraine", lat: 50.4019, lng: 30.4519, airports: [
      { code: "IEV", name: "Ihor Sikorsky Kyiv Intl Airport (Zhuliany)" },
    ] },
  { code: "LWO", name: "Lviv", country: "Ukraine", lat: 49.8125, lng: 23.9561, airports: [
      { code: "LWO", name: "Lviv Intl" },
    ] },
  { code: "MPW", name: "Mariupol", country: "Ukraine", lat: 47.0761, lng: 37.4496, airports: [
      { code: "MPW", name: "Mariupol Intl" },
    ] },
  { code: "NLV", name: "Nikolayev", country: "Ukraine", lat: 47.0579, lng: 31.9198, airports: [
      { code: "NLV", name: "Mykolaiv Intl" },
    ] },
  { code: "ODS", name: "Odessa", country: "Ukraine", lat: 46.4268, lng: 30.6765, airports: [
      { code: "ODS", name: "Odessa Intl" },
    ] },
  { code: "RWN", name: "Rivne", country: "Ukraine", lat: 50.6071, lng: 26.1416, airports: [
      { code: "RWN", name: "Rivne Intl" },
    ] },
  { code: "SIP", name: "Simferopol", country: "Ukraine", lat: 45.0522, lng: 33.9751, airports: [
      { code: "SIP", name: "Simferopol Intl" },
    ] },
  { code: "UDJ", name: "Uzhhorod", country: "Ukraine", lat: 48.6343, lng: 22.2634, airports: [
      { code: "UDJ", name: "Uzhhorod Intl" },
    ] },
  { code: "OZH", name: "Zaporizhia", country: "Ukraine", lat: 47.867, lng: 35.3157, airports: [
      { code: "OZH", name: "Zaporizhzhia Intl" },
    ] },
  { code: "RUA", name: "Arua", country: "Uganda", lat: 3.0492, lng: 30.9117, airports: [
      { code: "RUA", name: "Arua" },
    ] },
  { code: "ULU", name: "Gulu", country: "Uganda", lat: 2.8056, lng: 32.2718, airports: [
      { code: "ULU", name: "Gulu" },
    ] },
  { code: "EBB", name: "Kampala", country: "Uganda", lat: 0.0424, lng: 32.4435, airports: [
      { code: "EBB", name: "Entebbe Intl" },
    ] },
  { code: "SRT", name: "Soroti", country: "Uganda", lat: 1.7277, lng: 33.6228, airports: [
      { code: "SRT", name: "Soroti" },
    ] },
  { code: "AWK", name: "Wake Island", country: "US Minor Outlying Islands", lat: 19.2824, lng: 166.6366, airports: [
      { code: "AWK", name: "Wake Island Airfield" },
    ] },
  { code: "ABR", name: "Aberdeen", country: "United States", lat: 45.4491, lng: -98.4218, airports: [
      { code: "ABR", name: "Aberdeen Regional" },
    ] },
  { code: "ABI", name: "Abilene", country: "United States", lat: 32.4113, lng: -99.6819, airports: [
      { code: "ABI", name: "Abilene Regional" },
    ] },
  { code: "ADK", name: "Adak", country: "United States", lat: 51.8836, lng: -176.6428, airports: [
      { code: "ADK", name: "Adak" },
    ] },
  { code: "CAK", name: "Akron", country: "United States", lat: 40.9161, lng: -81.4422, airports: [
      { code: "CAK", name: "Akron Canton Regional" },
    ] },
  { code: "ALS", name: "Alamosa", country: "United States", lat: 37.4349, lng: -105.867, airports: [
      { code: "ALS", name: "San Luis Valley Regional Airport/Bergman Field" },
    ] },
  { code: "ALB", name: "Albany", country: "United States", lat: 31.5329, lng: -84.1962, airports: [
      { code: "ALB", name: "Albany Intl" },
      { code: "ABY", name: "Southwest Georgia Regional" },
    ] },
  { code: "ABQ", name: "Albuquerque", country: "United States", lat: 35.04, lng: -106.6089, airports: [
      { code: "ABQ", name: "Albuquerque Intl Sunport" },
    ] },
  { code: "WKK", name: "Aleknagik", country: "United States", lat: 59.2826, lng: -158.618, airports: [
      { code: "WKK", name: "Aleknagik / New" },
    ] },
  { code: "AEX", name: "Alexandria", country: "United States", lat: 31.3258, lng: -92.5467, airports: [
      { code: "AEX", name: "Alexandria Intl" },
    ] },
  { code: "ABE", name: "Allentown/Bethlehem", country: "United States", lat: 40.6518, lng: -75.4428, airports: [
      { code: "ABE", name: "Lehigh Valley Intl" },
    ] },
  { code: "AIA", name: "Alliance", country: "United States", lat: 42.0525, lng: -102.804, airports: [
      { code: "AIA", name: "Alliance Municipal" },
    ] },
  { code: "APN", name: "Alpena", country: "United States", lat: 45.0781, lng: -83.5603, airports: [
      { code: "APN", name: "Alpena County Regional" },
    ] },
  { code: "AOO", name: "Altoona", country: "United States", lat: 40.2964, lng: -78.32, airports: [
      { code: "AOO", name: "Altoona Blair County" },
    ] },
  { code: "AMA", name: "Amarillo", country: "United States", lat: 35.2179, lng: -101.7064, airports: [
      { code: "AMA", name: "Rick Husband Amarillo Intl" },
    ] },
  { code: "ABL", name: "Ambler", country: "United States", lat: 67.1055, lng: -157.8553, airports: [
      { code: "ABL", name: "Ambler" },
    ] },
  { code: "AKP", name: "Anaktuvuk Pass", country: "United States", lat: 68.1336, lng: -151.743, airports: [
      { code: "AKP", name: "Anaktuvuk Pass" },
    ] },
  { code: "ANC", name: "Anchorage", country: "United States", lat: 61.2128, lng: -149.844, airports: [
      { code: "ANC", name: "Ted Stevens Anchorage Intl" },
      { code: "MRI", name: "Merrill Field" },
    ] },
  { code: "ANI", name: "Aniak", country: "United States", lat: 61.5816, lng: -159.543, airports: [
      { code: "ANI", name: "Aniak" },
    ] },
  { code: "ANV", name: "Anvik", country: "United States", lat: 62.6467, lng: -160.191, airports: [
      { code: "ANV", name: "Anvik" },
    ] },
  { code: "ATW", name: "Appleton", country: "United States", lat: 44.2585, lng: -88.519, airports: [
      { code: "ATW", name: "Appleton Intl" },
    ] },
  { code: "ACV", name: "Arcata/Eureka", country: "United States", lat: 40.9781, lng: -124.109, airports: [
      { code: "ACV", name: "California Redwood Coast-Humboldt County" },
    ] },
  { code: "ARC", name: "Arctic Village", country: "United States", lat: 68.1147, lng: -145.579, airports: [
      { code: "ARC", name: "Arctic Village" },
    ] },
  { code: "AVL", name: "Asheville", country: "United States", lat: 35.4355, lng: -82.5419, airports: [
      { code: "AVL", name: "Asheville Regional" },
    ] },
  { code: "ASE", name: "Aspen", country: "United States", lat: 39.2232, lng: -106.869, airports: [
      { code: "ASE", name: "Aspen-Pitkin County Airport (Sardy Field)" },
    ] },
  { code: "ATL", name: "Atlanta", country: "United States", lat: 33.6367, lng: -84.4281, airports: [
      { code: "ATL", name: "Hartsfield Jackson Atlanta Intl" },
      { code: "PDK", name: "DeKalb Peachtree" },
    ] },
  { code: "ACY", name: "Atlantic City", country: "United States", lat: 39.4562, lng: -74.5775, airports: [
      { code: "ACY", name: "Atlantic City Intl" },
    ] },
  { code: "ATK", name: "Atqasuk", country: "United States", lat: 70.467, lng: -157.436, airports: [
      { code: "ATK", name: "Atqasuk Edward Burnell Sr Memorial" },
    ] },
  { code: "AGS", name: "Augusta", country: "United States", lat: 33.3699, lng: -81.9645, airports: [
      { code: "AGS", name: "Augusta Regional At Bush Field" },
      { code: "AUG", name: "Augusta State" },
    ] },
  { code: "AUS", name: "Austin", country: "United States", lat: 30.1975, lng: -97.662, airports: [
      { code: "AUS", name: "Austin Bergstrom Intl" },
    ] },
  { code: "BFL", name: "Bakersfield", country: "United States", lat: 35.4336, lng: -119.057, airports: [
      { code: "BFL", name: "Meadows Field" },
    ] },
  { code: "BGR", name: "Bangor", country: "United States", lat: 44.8064, lng: -68.8267, airports: [
      { code: "BGR", name: "Bangor Intl" },
    ] },
  { code: "BHB", name: "Bar Harbor", country: "United States", lat: 44.45, lng: -68.3615, airports: [
      { code: "BHB", name: "Hancock County-Bar Harbor" },
    ] },
  { code: "BTI", name: "Barter Island", country: "United States", lat: 70.134, lng: -143.582, airports: [
      { code: "BTI", name: "Barter Island Long Range Radar Station" },
    ] },
  { code: "BTR", name: "Baton Rouge", country: "United States", lat: 30.5332, lng: -91.1496, airports: [
      { code: "BTR", name: "Baton Rouge Metropolitan" },
    ] },
  { code: "BPT", name: "Beaumont/Port Arthur", country: "United States", lat: 29.9508, lng: -94.0207, airports: [
      { code: "BPT", name: "Jack Brooks Regional" },
    ] },
  { code: "BKW", name: "Beaver", country: "United States", lat: 37.7873, lng: -81.1242, airports: [
      { code: "BKW", name: "Raleigh County Memorial" },
    ] },
  { code: "BED", name: "Bedford", country: "United States", lat: 42.47, lng: -71.289, airports: [
      { code: "BED", name: "Laurence G Hanscom Field" },
    ] },
  { code: "BLV", name: "Belleville", country: "United States", lat: 38.5452, lng: -89.8352, airports: [
      { code: "BLV", name: "Scott AFB/Midamerica" },
    ] },
  { code: "BLI", name: "Bellingham", country: "United States", lat: 48.7928, lng: -122.538, airports: [
      { code: "BLI", name: "Bellingham Intl" },
    ] },
  { code: "BET", name: "Bethel", country: "United States", lat: 60.7798, lng: -161.838, airports: [
      { code: "BET", name: "Bethel" },
    ] },
  { code: "BIL", name: "Billings", country: "United States", lat: 45.8078, lng: -108.5337, airports: [
      { code: "BIL", name: "Billings Logan Intl" },
    ] },
  { code: "BGM", name: "Binghamton", country: "United States", lat: 42.2087, lng: -75.9798, airports: [
      { code: "BGM", name: "Greater Binghamton/Edwin A Link field" },
    ] },
  { code: "BHM", name: "Birmingham", country: "United States", lat: 33.5629, lng: -86.7507, airports: [
      { code: "BHM", name: "Birmingham-Shuttlesworth Intl" },
    ] },
  { code: "BIH", name: "Bishop", country: "United States", lat: 37.3731, lng: -118.364, airports: [
      { code: "BIH", name: "Eastern Sierra Regional" },
    ] },
  { code: "BIS", name: "Bismarck", country: "United States", lat: 46.7727, lng: -100.746, airports: [
      { code: "BIS", name: "Bismarck Municipal" },
    ] },
  { code: "BMI", name: "Bloomington/Normal", country: "United States", lat: 40.4771, lng: -88.9159, airports: [
      { code: "BMI", name: "Central Illinois Regional Airport at Bloomington-Normal" },
    ] },
  { code: "TRI", name: "Blountville", country: "United States", lat: 36.4752, lng: -82.4074, airports: [
      { code: "TRI", name: "Tri-Cities Regional TN/VA" },
    ] },
  { code: "BOI", name: "Boise", country: "United States", lat: 43.5644, lng: -116.223, airports: [
      { code: "BOI", name: "Boise Air Terminal/Gowen Field" },
    ] },
  { code: "BOS", name: "Boston", country: "United States", lat: 42.362, lng: -71.0079, airports: [
      { code: "BOS", name: "General Edward Lawrence Logan Intl" },
    ] },
  { code: "BLD", name: "Boulder City", country: "United States", lat: 35.9472, lng: -114.8588, airports: [
      { code: "BLD", name: "Boulder City Municipal" },
    ] },
  { code: "BZN", name: "Bozeman", country: "United States", lat: 45.7789, lng: -111.1537, airports: [
      { code: "BZN", name: "Bozeman Yellowstone Intl" },
    ] },
  { code: "BFD", name: "Bradford", country: "United States", lat: 41.8031, lng: -78.6401, airports: [
      { code: "BFD", name: "Bradford Regional" },
    ] },
  { code: "BRD", name: "Brainerd", country: "United States", lat: 46.4029, lng: -94.1297, airports: [
      { code: "BRD", name: "Brainerd Lakes Regional" },
    ] },
  { code: "BKG", name: "Branson", country: "United States", lat: 36.5321, lng: -93.2005, airports: [
      { code: "BKG", name: "Branson" },
    ] },
  { code: "CKB", name: "Bridgeport", country: "United States", lat: 39.2966, lng: -80.2281, airports: [
      { code: "CKB", name: "North Central West Virginia" },
    ] },
  { code: "BRO", name: "Brownsville", country: "United States", lat: 25.9072, lng: -97.4252, airports: [
      { code: "BRO", name: "Brownsville South Padre Island Intl" },
    ] },
  { code: "BQK", name: "Brunswick", country: "United States", lat: 31.2588, lng: -81.4665, airports: [
      { code: "BQK", name: "Brunswick Golden Isles" },
    ] },
  { code: "BUF", name: "Buffalo", country: "United States", lat: 42.9405, lng: -78.7322, airports: [
      { code: "BUF", name: "Buffalo Niagara Intl" },
    ] },
  { code: "BTV", name: "Burlington", country: "United States", lat: 40.7832, lng: -91.1255, airports: [
      { code: "BTV", name: "Patrick Leahy Burlington Intl" },
      { code: "BRL", name: "Southeast Iowa Regional" },
    ] },
  { code: "BTM", name: "Butte", country: "United States", lat: 45.9548, lng: -112.497, airports: [
      { code: "BTM", name: "Bert Mooney" },
    ] },
  { code: "CGI", name: "Cape Girardeau", country: "United States", lat: 37.2253, lng: -89.5708, airports: [
      { code: "CGI", name: "Cape Girardeau Regional" },
    ] },
  { code: "LUR", name: "Cape Lisburne", country: "United States", lat: 68.8751, lng: -166.11, airports: [
      { code: "LUR", name: "Cape Lisburne LRRS" },
    ] },
  { code: "CNM", name: "Carlsbad", country: "United States", lat: 32.3375, lng: -104.263, airports: [
      { code: "CNM", name: "Cavern City Air Terminal" },
      { code: "CLD", name: "McClellan-Palomar" },
    ] },
  { code: "CPR", name: "Casper", country: "United States", lat: 42.9074, lng: -106.4616, airports: [
      { code: "CPR", name: "Casper-Natrona County Intl" },
    ] },
  { code: "CDC", name: "Cedar City", country: "United States", lat: 37.701, lng: -113.099, airports: [
      { code: "CDC", name: "Cedar City Regional" },
    ] },
  { code: "CID", name: "Cedar Rapids", country: "United States", lat: 41.8847, lng: -91.7108, airports: [
      { code: "CID", name: "The Eastern Iowa" },
    ] },
  { code: "CDR", name: "Chadron", country: "United States", lat: 42.8376, lng: -103.095, airports: [
      { code: "CDR", name: "Chadron Municipal" },
    ] },
  { code: "CHS", name: "Charleston", country: "United States", lat: 32.8962, lng: -80.0382, airports: [
      { code: "CHS", name: "Charleston Intl" },
      { code: "CRW", name: "Yeager" },
    ] },
  { code: "CLT", name: "Charlotte", country: "United States", lat: 35.214, lng: -80.9431, airports: [
      { code: "CLT", name: "Charlotte Douglas Intl" },
    ] },
  { code: "CHO", name: "Charlottesville", country: "United States", lat: 38.1386, lng: -78.4529, airports: [
      { code: "CHO", name: "Charlottesville Albemarle" },
    ] },
  { code: "CHA", name: "Chattanooga", country: "United States", lat: 35.0353, lng: -85.2038, airports: [
      { code: "CHA", name: "Chattanooga Metropolitan Airport (Lovell Field)" },
    ] },
  { code: "CYS", name: "Cheyenne", country: "United States", lat: 41.1557, lng: -104.812, airports: [
      { code: "CYS", name: "Cheyenne Regional Jerry Olson Field" },
    ] },
  { code: "MDW", name: "Chicago", country: "United States", lat: 41.786, lng: -87.7524, airports: [
      { code: "MDW", name: "Chicago Midway Intl" },
      { code: "ORD", name: "Chicago O'Hare Intl" },
    ] },
  { code: "RFD", name: "Chicago/Rockford", country: "United States", lat: 42.1954, lng: -89.0972, airports: [
      { code: "RFD", name: "Chicago Rockford Intl" },
    ] },
  { code: "LUK", name: "Cincinnati", country: "United States", lat: 39.1024, lng: -84.4189, airports: [
      { code: "LUK", name: "Cincinnati Municipal Airport Lunken Field" },
    ] },
  { code: "CVG", name: "Cincinnati / Covington", country: "United States", lat: 39.0488, lng: -84.6678, airports: [
      { code: "CVG", name: "Cincinnati Northern Kentucky Intl" },
    ] },
  { code: "CLE", name: "Cleveland", country: "United States", lat: 41.4117, lng: -81.8498, airports: [
      { code: "CLE", name: "Cleveland Hopkins Intl" },
    ] },
  { code: "CVN", name: "Clovis", country: "United States", lat: 34.4266, lng: -103.0788, airports: [
      { code: "CVN", name: "Clovis Municipal" },
    ] },
  { code: "COD", name: "Cody", country: "United States", lat: 44.5202, lng: -109.024, airports: [
      { code: "COD", name: "Yellowstone Regional" },
    ] },
  { code: "CDB", name: "Cold Bay", country: "United States", lat: 55.2079, lng: -162.725, airports: [
      { code: "CDB", name: "Cold Bay" },
    ] },
  { code: "CLL", name: "College Station", country: "United States", lat: 30.5886, lng: -96.3638, airports: [
      { code: "CLL", name: "Easterwood Field" },
    ] },
  { code: "COS", name: "Colorado Springs", country: "United States", lat: 38.8058, lng: -104.701, airports: [
      { code: "COS", name: "City of Colorado Springs Municipal" },
    ] },
  { code: "CAE", name: "Columbia", country: "United States", lat: 33.9382, lng: -81.1175, airports: [
      { code: "CAE", name: "Columbia Metropolitan" },
      { code: "COU", name: "Columbia Regional" },
    ] },
  { code: "CMH", name: "Columbus", country: "United States", lat: 39.998, lng: -82.8919, airports: [
      { code: "CMH", name: "John Glenn Columbus Intl" },
      { code: "LCK", name: "Rickenbacker Intl" },
      { code: "CSG", name: "Columbus" },
    ] },
  { code: "GTR", name: "Columbus/W Point/Starkville", country: "United States", lat: 33.4503, lng: -88.5914, airports: [
      { code: "GTR", name: "Golden Triangle Regional" },
    ] },
  { code: "CCR", name: "Concord", country: "United States", lat: 37.9897, lng: -122.057, airports: [
      { code: "CCR", name: "Buchanan Field" },
      { code: "USA", name: "Concord-Padgett Regional" },
    ] },
  { code: "CDV", name: "Cordova", country: "United States", lat: 60.4918, lng: -145.478, airports: [
      { code: "CDV", name: "Merle K (Mudhole) Smith" },
    ] },
  { code: "CRP", name: "Corpus Christi", country: "United States", lat: 27.7704, lng: -97.5012, airports: [
      { code: "CRP", name: "Corpus Christi Intl" },
    ] },
  { code: "CEZ", name: "Cortez", country: "United States", lat: 37.303, lng: -108.628, airports: [
      { code: "CEZ", name: "Cortez Municipal" },
    ] },
  { code: "CEC", name: "Crescent City", country: "United States", lat: 41.7789, lng: -124.2364, airports: [
      { code: "CEC", name: "Jack Mc Namara Field" },
    ] },
  { code: "DFW", name: "Dallas / Fort Worth", country: "United States", lat: 32.8968, lng: -97.038, airports: [
      { code: "DFW", name: "Dallas Fort Worth Intl" },
      { code: "DAL", name: "Dallas Love Field" },
      { code: "FTW", name: "Fort Worth Meacham Intl" },
    ], keywords: ["dfw", "texas", "dallas", "love field"] },
  { code: "DAY", name: "Dayton", country: "United States", lat: 39.9024, lng: -84.2194, airports: [
      { code: "DAY", name: "James M. Cox Dayton Intl" },
    ] },
  { code: "DAB", name: "Daytona Beach", country: "United States", lat: 29.1826, lng: -81.0595, airports: [
      { code: "DAB", name: "Daytona Beach Intl" },
    ] },
  { code: "SCC", name: "Deadhorse", country: "United States", lat: 70.1947, lng: -148.465, airports: [
      { code: "SCC", name: "Deadhorse" },
    ] },
  { code: "DEC", name: "Decatur", country: "United States", lat: 39.8346, lng: -88.8657, airports: [
      { code: "DEC", name: "Decatur" },
    ] },
  { code: "DRG", name: "Deering", country: "United States", lat: 66.0689, lng: -162.7669, airports: [
      { code: "DRG", name: "Deering" },
    ] },
  { code: "DEN", name: "Denver", country: "United States", lat: 39.9088, lng: -105.117, airports: [
      { code: "DEN", name: "Denver Intl" },
      { code: "BJC", name: "Rocky Mountain Metropolitan" },
    ] },
  { code: "DSM", name: "Des Moines", country: "United States", lat: 41.534, lng: -93.6567, airports: [
      { code: "DSM", name: "Des Moines Intl" },
    ] },
  { code: "DSI", name: "Destin", country: "United States", lat: 30.4001, lng: -86.4715, airports: [
      { code: "DSI", name: "Destin Executive" },
    ] },
  { code: "DTW", name: "Detroit", country: "United States", lat: 42.2138, lng: -83.3538, airports: [
      { code: "DTW", name: "Detroit Metropolitan Wayne County" },
    ] },
  { code: "DVL", name: "Devils Lake", country: "United States", lat: 48.1155, lng: -98.9088, airports: [
      { code: "DVL", name: "Devils Lake Regional" },
    ] },
  { code: "DIK", name: "Dickinson", country: "United States", lat: 46.7975, lng: -102.8019, airports: [
      { code: "DIK", name: "Dickinson Theodore Roosevelt Regional" },
    ] },
  { code: "DLG", name: "Dillingham", country: "United States", lat: 59.0447, lng: -158.505, airports: [
      { code: "DLG", name: "Dillingham" },
    ] },
  { code: "DDC", name: "Dodge City", country: "United States", lat: 37.7634, lng: -99.9656, airports: [
      { code: "DDC", name: "Dodge City Regional" },
    ] },
  { code: "DHN", name: "Dothan", country: "United States", lat: 31.3213, lng: -85.4496, airports: [
      { code: "DHN", name: "Dothan Regional" },
    ] },
  { code: "DOV", name: "Dover", country: "United States", lat: 39.1295, lng: -75.466, airports: [
      { code: "DOV", name: "Dover Civil Air Terminal/Dover Air Force Base" },
    ] },
  { code: "DUJ", name: "Dubois", country: "United States", lat: 41.1783, lng: -78.8987, airports: [
      { code: "DUJ", name: "DuBois Regional" },
    ] },
  { code: "DBQ", name: "Dubuque", country: "United States", lat: 42.402, lng: -90.7095, airports: [
      { code: "DBQ", name: "Dubuque Regional" },
    ] },
  { code: "DLH", name: "Duluth", country: "United States", lat: 46.8421, lng: -92.1936, airports: [
      { code: "DLH", name: "Duluth Intl" },
    ] },
  { code: "DRO", name: "Durango", country: "United States", lat: 37.1515, lng: -107.754, airports: [
      { code: "DRO", name: "Durango La Plata County" },
    ] },
  { code: "EGE", name: "Eagle", country: "United States", lat: 39.6426, lng: -106.918, airports: [
      { code: "EGE", name: "Eagle County Regional" },
    ] },
  { code: "ESD", name: "Eastsound", country: "United States", lat: 48.7082, lng: -122.91, airports: [
      { code: "ESD", name: "Orcas Island" },
    ] },
  { code: "EAU", name: "Eau Claire", country: "United States", lat: 44.8658, lng: -91.4843, airports: [
      { code: "EAU", name: "Chippewa Valley Regional" },
    ] },
  { code: "EGX", name: "Egegik", country: "United States", lat: 58.1844, lng: -157.3749, airports: [
      { code: "EGX", name: "Egegik" },
    ] },
  { code: "ELD", name: "El Dorado", country: "United States", lat: 33.221, lng: -92.8133, airports: [
      { code: "ELD", name: "South Arkansas Regional Airport at Goodwin Field" },
    ] },
  { code: "ELP", name: "El Paso", country: "United States", lat: 31.8099, lng: -106.3756, airports: [
      { code: "ELP", name: "El Paso Intl" },
    ] },
  { code: "EKO", name: "Elko", country: "United States", lat: 40.8249, lng: -115.792, airports: [
      { code: "EKO", name: "Elko Regional" },
    ] },
  { code: "ELM", name: "Elmira/Corning", country: "United States", lat: 42.1599, lng: -76.8916, airports: [
      { code: "ELM", name: "Elmira Corning Regional" },
    ] },
  { code: "EMK", name: "Emmonak", country: "United States", lat: 62.7861, lng: -164.491, airports: [
      { code: "EMK", name: "Emmonak" },
    ] },
  { code: "ERI", name: "Erie", country: "United States", lat: 42.0831, lng: -80.1739, airports: [
      { code: "ERI", name: "Erie Intl Tom Ridge Field" },
    ] },
  { code: "ESC", name: "Escanaba", country: "United States", lat: 45.7232, lng: -87.0886, airports: [
      { code: "ESC", name: "Delta County" },
    ] },
  { code: "EUG", name: "Eugene", country: "United States", lat: 44.1246, lng: -123.212, airports: [
      { code: "EUG", name: "Eugene" },
    ] },
  { code: "EVV", name: "Evansville", country: "United States", lat: 38.037, lng: -87.5324, airports: [
      { code: "EVV", name: "Evansville Regional" },
    ] },
  { code: "PAE", name: "Everett", country: "United States", lat: 47.9063, lng: -122.282, airports: [
      { code: "PAE", name: "Seattle Paine Field Intl" },
    ] },
  { code: "TTN", name: "Ewing Township", country: "United States", lat: 40.2767, lng: -74.8135, airports: [
      { code: "TTN", name: "Trenton Mercer" },
    ] },
  { code: "FAI", name: "Fairbanks", country: "United States", lat: 64.8151, lng: -147.856, airports: [
      { code: "FAI", name: "Fairbanks Intl" },
    ] },
  { code: "FAR", name: "Fargo", country: "United States", lat: 46.9207, lng: -96.8158, airports: [
      { code: "FAR", name: "Hector Intl" },
    ] },
  { code: "FAY", name: "Fayetteville", country: "United States", lat: 34.9912, lng: -78.8803, airports: [
      { code: "FAY", name: "Fayetteville Regional Airport - Grannis Field" },
    ] },
  { code: "XNA", name: "Fayetteville/Springdale/Rogers", country: "United States", lat: 36.2819, lng: -94.3068, airports: [
      { code: "XNA", name: "Northwest Arkansas National" },
    ] },
  { code: "FLG", name: "Flagstaff", country: "United States", lat: 35.1398, lng: -111.6698, airports: [
      { code: "FLG", name: "Flagstaff Pulliam" },
    ] },
  { code: "FNT", name: "Flint", country: "United States", lat: 42.9693, lng: -83.7434, airports: [
      { code: "FNT", name: "Bishop Intl" },
    ] },
  { code: "FLO", name: "Florence", country: "United States", lat: 34.1854, lng: -79.7239, airports: [
      { code: "FLO", name: "Florence Regional" },
    ] },
  { code: "GRK", name: "Fort Cavazos", country: "United States", lat: 31.0672, lng: -97.8289, airports: [
      { code: "GRK", name: "Killeen Regional Airport / Robert Gray Army Airfield" },
    ] },
  { code: "FOD", name: "Fort Dodge", country: "United States", lat: 42.5526, lng: -94.1912, airports: [
      { code: "FOD", name: "Fort Dodge Regional" },
    ] },
  { code: "TBN", name: "Fort Leonard Wood", country: "United States", lat: 37.7416, lng: -92.1407, airports: [
      { code: "TBN", name: "Waynesville-St. Robert Regional Airport-Forney Field" },
    ] },
  { code: "RSW", name: "Fort Myers", country: "United States", lat: 26.5347, lng: -81.7528, airports: [
      { code: "RSW", name: "Southwest Florida Intl" },
    ] },
  { code: "FSM", name: "Fort Smith", country: "United States", lat: 35.3366, lng: -94.3674, airports: [
      { code: "FSM", name: "Fort Smith Regional" },
    ] },
  { code: "FWA", name: "Fort Wayne", country: "United States", lat: 40.9789, lng: -85.1945, airports: [
      { code: "FWA", name: "Fort Wayne Intl" },
    ] },
  { code: "FYU", name: "Fort Yukon", country: "United States", lat: 66.5717, lng: -145.25, airports: [
      { code: "FYU", name: "Fort Yukon" },
    ] },
  { code: "MBS", name: "Freeland", country: "United States", lat: 43.5332, lng: -84.0831, airports: [
      { code: "MBS", name: "MBS Intl" },
    ] },
  { code: "FAT", name: "Fresno", country: "United States", lat: 36.7758, lng: -119.718, airports: [
      { code: "FAT", name: "Fresno Yosemite Intl" },
    ] },
  { code: "FRD", name: "Friday Harbor", country: "United States", lat: 48.5237, lng: -123.0246, airports: [
      { code: "FRD", name: "Friday Harbor" },
    ] },
  { code: "GNV", name: "Gainesville", country: "United States", lat: 29.6901, lng: -82.2718, airports: [
      { code: "GNV", name: "Gainesville Regional" },
    ] },
  { code: "GAL", name: "Galena", country: "United States", lat: 64.7362, lng: -156.937, airports: [
      { code: "GAL", name: "Edward G. Pitka Sr" },
    ] },
  { code: "GUP", name: "Gallup", country: "United States", lat: 35.5117, lng: -108.7882, airports: [
      { code: "GUP", name: "Gallup Municipal" },
    ] },
  { code: "GAM", name: "Gambell", country: "United States", lat: 63.7677, lng: -171.7333, airports: [
      { code: "GAM", name: "Gambell" },
    ] },
  { code: "GCK", name: "Garden City", country: "United States", lat: 37.9275, lng: -100.724, airports: [
      { code: "GCK", name: "Garden City Regional" },
    ] },
  { code: "GYY", name: "Gary", country: "United States", lat: 41.6171, lng: -87.4132, airports: [
      { code: "GYY", name: "Gary Chicago Intl" },
    ] },
  { code: "GCC", name: "Gillette", country: "United States", lat: 44.3489, lng: -105.539, airports: [
      { code: "GCC", name: "Northeast Wyoming Regional" },
    ] },
  { code: "GGW", name: "Glasgow", country: "United States", lat: 48.2125, lng: -106.615, airports: [
      { code: "GGW", name: "Glasgow Valley County Airport Wokal Field" },
    ] },
  { code: "GDV", name: "Glendive", country: "United States", lat: 47.1377, lng: -104.8069, airports: [
      { code: "GDV", name: "Dawson Community" },
    ] },
  { code: "GCN", name: "Grand Canyon - Tusayan", country: "United States", lat: 35.9524, lng: -112.147, airports: [
      { code: "GCN", name: "Grand Canyon National Park" },
    ] },
  { code: "GFK", name: "Grand Forks", country: "United States", lat: 47.9493, lng: -97.1761, airports: [
      { code: "GFK", name: "Grand Forks Intl" },
    ] },
  { code: "GRI", name: "Grand Island", country: "United States", lat: 40.9675, lng: -98.3096, airports: [
      { code: "GRI", name: "Central Nebraska Regional" },
    ] },
  { code: "GJT", name: "Grand Junction", country: "United States", lat: 39.1267, lng: -108.5294, airports: [
      { code: "GJT", name: "Grand Junction Regional" },
    ] },
  { code: "GRR", name: "Grand Rapids", country: "United States", lat: 42.8808, lng: -85.5228, airports: [
      { code: "GRR", name: "Gerald R. Ford Intl" },
    ] },
  { code: "GTF", name: "Great Falls", country: "United States", lat: 47.482, lng: -111.371, airports: [
      { code: "GTF", name: "Great Falls Intl" },
    ] },
  { code: "GRB", name: "Green Bay", country: "United States", lat: 44.4835, lng: -88.1308, airports: [
      { code: "GRB", name: "Austin Straubel Intl" },
    ] },
  { code: "GSO", name: "Greensboro", country: "United States", lat: 36.0994, lng: -79.9373, airports: [
      { code: "GSO", name: "Piedmont Triad Intl" },
    ] },
  { code: "GLH", name: "Greenville", country: "United States", lat: 33.4829, lng: -90.9856, airports: [
      { code: "GLH", name: "Mid Delta Regional" },
      { code: "PGV", name: "Pitt-Greenville" },
    ] },
  { code: "GSP", name: "Greenville/Greer/Spartanburg", country: "United States", lat: 34.8957, lng: -82.2189, airports: [
      { code: "GSP", name: "Greenville-Spartanburg Intl" },
    ] },
  { code: "GPT", name: "Gulfport", country: "United States", lat: 30.4056, lng: -89.0698, airports: [
      { code: "GPT", name: "Gulfport Biloxi Intl" },
    ] },
  { code: "GKN", name: "Gulkana", country: "United States", lat: 62.1559, lng: -145.4547, airports: [
      { code: "GKN", name: "Gulkana" },
    ] },
  { code: "GUC", name: "Gunnison", country: "United States", lat: 38.5347, lng: -106.9346, airports: [
      { code: "GUC", name: "Gunnison Crested Butte Regional" },
    ] },
  { code: "GST", name: "Gustavus", country: "United States", lat: 58.4253, lng: -135.707, airports: [
      { code: "GST", name: "Gustavus" },
    ] },
  { code: "MQT", name: "Gwinn", country: "United States", lat: 46.3515, lng: -87.3959, airports: [
      { code: "MQT", name: "Marquette/Sawyer Intl" },
    ] },
  { code: "HGR", name: "Hagerstown", country: "United States", lat: 39.7088, lng: -77.728, airports: [
      { code: "HGR", name: "Hagerstown Regional Richard A Henson Field" },
    ] },
  { code: "SUN", name: "Hailey", country: "United States", lat: 43.5044, lng: -114.296, airports: [
      { code: "SUN", name: "Friedman Memorial" },
    ] },
  { code: "HNS", name: "Haines", country: "United States", lat: 59.2439, lng: -135.5239, airports: [
      { code: "HNS", name: "Haines" },
    ] },
  { code: "HNM", name: "Hana", country: "United States", lat: 20.7956, lng: -156.014, airports: [
      { code: "HNM", name: "Hana" },
    ] },
  { code: "CMX", name: "Hancock", country: "United States", lat: 47.1684, lng: -88.4891, airports: [
      { code: "CMX", name: "Houghton County Memorial" },
    ] },
  { code: "HRL", name: "Harlingen", country: "United States", lat: 26.2285, lng: -97.6544, airports: [
      { code: "HRL", name: "Valley Intl" },
    ] },
  { code: "MDT", name: "Harrisburg", country: "United States", lat: 40.1928, lng: -76.7623, airports: [
      { code: "MDT", name: "Harrisburg Intl" },
    ] },
  { code: "HRO", name: "Harrison", country: "United States", lat: 36.2615, lng: -93.1547, airports: [
      { code: "HRO", name: "Boone County" },
    ] },
  { code: "BDL", name: "Hartford", country: "United States", lat: 41.9386, lng: -72.688, airports: [
      { code: "BDL", name: "Bradley Intl" },
    ] },
  { code: "HVR", name: "Havre", country: "United States", lat: 48.5414, lng: -109.7629, airports: [
      { code: "HVR", name: "Havre City County" },
    ] },
  { code: "HHR", name: "Hawthorne", country: "United States", lat: 33.9228, lng: -118.335, airports: [
      { code: "HHR", name: "Jack Northrop Field Hawthorne Municipal" },
    ] },
  { code: "HDN", name: "Hayden", country: "United States", lat: 40.4812, lng: -107.218, airports: [
      { code: "HDN", name: "Yampa Valley" },
    ] },
  { code: "HYS", name: "Hays", country: "United States", lat: 38.8445, lng: -99.2731, airports: [
      { code: "HYS", name: "Hays Regional" },
    ] },
  { code: "HLN", name: "Helena", country: "United States", lat: 46.6068, lng: -111.983, airports: [
      { code: "HLN", name: "Helena Regional" },
    ] },
  { code: "HIB", name: "Hibbing", country: "United States", lat: 47.3848, lng: -92.8369, airports: [
      { code: "HIB", name: "Range Regional" },
    ] },
  { code: "ITO", name: "Hilo", country: "United States", lat: 19.7214, lng: -155.0454, airports: [
      { code: "ITO", name: "Hilo Intl" },
    ] },
  { code: "HHH", name: "Hilton Head Island", country: "United States", lat: 32.2244, lng: -80.6975, airports: [
      { code: "HHH", name: "Hilton Head" },
    ] },
  { code: "HOB", name: "Hobbs", country: "United States", lat: 32.6875, lng: -103.217, airports: [
      { code: "HOB", name: "Lea County Regional" },
    ] },
  { code: "HCR", name: "Holy Cross", country: "United States", lat: 62.1883, lng: -159.775, airports: [
      { code: "HCR", name: "Holy Cross" },
    ] },
  { code: "HOM", name: "Homer", country: "United States", lat: 59.6445, lng: -151.4792, airports: [
      { code: "HOM", name: "Homer" },
    ] },
  { code: "HNL", name: "Honolulu, Oahu", country: "United States", lat: 21.3184, lng: -157.9257, airports: [
      { code: "HNL", name: "Daniel K. Inouye Intl" },
    ] },
  { code: "HOT", name: "Hot Springs", country: "United States", lat: 34.4788, lng: -93.0963, airports: [
      { code: "HOT", name: "Memorial Field" },
    ] },
  { code: "IAH", name: "Houston", country: "United States", lat: 29.9844, lng: -95.3414, airports: [
      { code: "IAH", name: "George Bush Intercontinental" },
      { code: "HOU", name: "William P. Hobby" },
    ], keywords: ["texas", "hobby", "intercontinental"] },
  { code: "HTS", name: "Huntington", country: "United States", lat: 38.3667, lng: -82.558, airports: [
      { code: "HTS", name: "Tri-State Airport / Milton J. Ferguson Field" },
    ] },
  { code: "HSV", name: "Huntsville", country: "United States", lat: 34.6362, lng: -86.7744, airports: [
      { code: "HSV", name: "Huntsville Intl" },
    ] },
  { code: "HSL", name: "Huslia", country: "United States", lat: 65.6979, lng: -156.351, airports: [
      { code: "HSL", name: "Huslia" },
    ] },
  { code: "HYA", name: "Hyannis", country: "United States", lat: 41.6693, lng: -70.2804, airports: [
      { code: "HYA", name: "Cape Cod Gateway" },
    ] },
  { code: "IDA", name: "Idaho Falls", country: "United States", lat: 43.5146, lng: -112.071, airports: [
      { code: "IDA", name: "Idaho Falls Regional" },
    ] },
  { code: "ILI", name: "Iliamna", country: "United States", lat: 59.7544, lng: -154.911, airports: [
      { code: "ILI", name: "Iliamna" },
    ] },
  { code: "IPL", name: "Imperial", country: "United States", lat: 32.8354, lng: -115.574, airports: [
      { code: "IPL", name: "Imperial County" },
    ] },
  { code: "IND", name: "Indianapolis", country: "United States", lat: 39.7173, lng: -86.2944, airports: [
      { code: "IND", name: "Indianapolis Intl" },
    ] },
  { code: "INL", name: "International Falls", country: "United States", lat: 48.5662, lng: -93.4031, airports: [
      { code: "INL", name: "Falls Intl" },
    ] },
  { code: "ITH", name: "Ithaca", country: "United States", lat: 42.491, lng: -76.4584, airports: [
      { code: "ITH", name: "Ithaca Tompkins Regional" },
    ] },
  { code: "JAN", name: "Jackson", country: "United States", lat: 43.6073, lng: -110.738, airports: [
      { code: "JAN", name: "Jackson-Medgar Wiley Evers Intl" },
      { code: "JAC", name: "Jackson Hole" },
      { code: "MKL", name: "McKellar-Sipes Regional" },
    ] },
  { code: "JAX", name: "Jacksonville", country: "United States", lat: 30.4925, lng: -81.6878, airports: [
      { code: "JAX", name: "Jacksonville Intl" },
    ] },
  { code: "JMS", name: "Jamestown", country: "United States", lat: 46.9297, lng: -98.6782, airports: [
      { code: "JMS", name: "Jamestown Regional" },
    ] },
  { code: "JST", name: "Johnstown", country: "United States", lat: 40.3161, lng: -78.8339, airports: [
      { code: "JST", name: "John Murtha Johnstown Cambria County" },
    ] },
  { code: "JBR", name: "Jonesboro", country: "United States", lat: 35.8317, lng: -90.6464, airports: [
      { code: "JBR", name: "Jonesboro Municipal" },
    ] },
  { code: "JLN", name: "Joplin", country: "United States", lat: 37.1518, lng: -94.4983, airports: [
      { code: "JLN", name: "Joplin Regional" },
    ] },
  { code: "JNU", name: "Juneau", country: "United States", lat: 58.3549, lng: -134.5744, airports: [
      { code: "JNU", name: "Juneau Intl" },
    ] },
  { code: "OGG", name: "Kahului", country: "United States", lat: 20.8963, lng: -156.4318, airports: [
      { code: "OGG", name: "Kahului Intl" },
    ] },
  { code: "KOA", name: "Kailua-Kona", country: "United States", lat: 19.7388, lng: -156.0456, airports: [
      { code: "KOA", name: "Ellison Onizuka Kona Intl Airport at Keāhole" },
    ] },
  { code: "AZO", name: "Kalamazoo", country: "United States", lat: 42.2321, lng: -85.5496, airports: [
      { code: "AZO", name: "Kalamazoo/Battle Creek Intl" },
    ] },
  { code: "FCA", name: "Kalispell", country: "United States", lat: 48.3105, lng: -114.256, airports: [
      { code: "FCA", name: "Glacier Park Intl" },
    ] },
  { code: "MCI", name: "Kansas City", country: "United States", lat: 39.2976, lng: -94.7139, airports: [
      { code: "MCI", name: "Kansas City Intl" },
    ] },
  { code: "MKK", name: "Kaunakakai", country: "United States", lat: 21.1529, lng: -157.096, airports: [
      { code: "MKK", name: "Molokai" },
    ] },
  { code: "EAR", name: "Kearney", country: "United States", lat: 40.727, lng: -99.0068, airports: [
      { code: "EAR", name: "Kearney Regional" },
    ] },
  { code: "ENA", name: "Kenai", country: "United States", lat: 60.5709, lng: -151.2452, airports: [
      { code: "ENA", name: "Kenai Municipal" },
    ] },
  { code: "KTN", name: "Ketchikan", country: "United States", lat: 55.3556, lng: -131.714, airports: [
      { code: "KTN", name: "Ketchikan Intl" },
    ] },
  { code: "EYW", name: "Key West", country: "United States", lat: 24.5561, lng: -81.7596, airports: [
      { code: "EYW", name: "Key West Intl" },
    ] },
  { code: "IAN", name: "Kiana", country: "United States", lat: 66.9761, lng: -160.439, airports: [
      { code: "IAN", name: "Bob Baker Memorial" },
    ] },
  { code: "CIU", name: "Kincheloe", country: "United States", lat: 46.242, lng: -84.4621, airports: [
      { code: "CIU", name: "Chippewa County Intl" },
    ] },
  { code: "AKN", name: "King Salmon", country: "United States", lat: 58.6778, lng: -156.652, airports: [
      { code: "AKN", name: "King Salmon" },
    ] },
  { code: "IMT", name: "Kingsford", country: "United States", lat: 45.8191, lng: -88.1146, airports: [
      { code: "IMT", name: "Ford" },
    ] },
  { code: "IRK", name: "Kirksville", country: "United States", lat: 40.0935, lng: -92.5449, airports: [
      { code: "IRK", name: "Kirksville Regional" },
    ] },
  { code: "KLW", name: "Klawock", country: "United States", lat: 55.5792, lng: -133.076, airports: [
      { code: "KLW", name: "Klawock" },
    ] },
  { code: "TYS", name: "Knoxville/Maryville", country: "United States", lat: 35.811, lng: -83.994, airports: [
      { code: "TYS", name: "McGhee Tyson" },
    ] },
  { code: "ADQ", name: "Kodiak", country: "United States", lat: 57.75, lng: -152.494, airports: [
      { code: "ADQ", name: "Kodiak" },
    ] },
  { code: "OTZ", name: "Kotzebue", country: "United States", lat: 66.8847, lng: -162.599, airports: [
      { code: "OTZ", name: "Ralph Wien Memorial" },
    ] },
  { code: "LSE", name: "La Crosse", country: "United States", lat: 43.879, lng: -91.2567, airports: [
      { code: "LSE", name: "La Crosse Regional" },
    ] },
  { code: "LFT", name: "Lafayette", country: "United States", lat: 30.2053, lng: -91.9876, airports: [
      { code: "LFT", name: "Lafayette Regional" },
    ] },
  { code: "JHM", name: "Lahaina", country: "United States", lat: 20.9629, lng: -156.673, airports: [
      { code: "JHM", name: "Kapalua" },
    ] },
  { code: "LCH", name: "Lake Charles", country: "United States", lat: 30.1261, lng: -93.2233, airports: [
      { code: "LCH", name: "Lake Charles Regional" },
    ] },
  { code: "LAL", name: "Lakeland", country: "United States", lat: 27.9891, lng: -82.0185, airports: [
      { code: "LAL", name: "Lakeland Linder Intl" },
    ] },
  { code: "LNY", name: "Lanai City", country: "United States", lat: 20.7857, lng: -156.9513, airports: [
      { code: "LNY", name: "Lanai" },
    ] },
  { code: "LNS", name: "Lancaster", country: "United States", lat: 40.1217, lng: -76.2961, airports: [
      { code: "LNS", name: "Lancaster" },
    ] },
  { code: "LAN", name: "Lansing", country: "United States", lat: 42.7776, lng: -84.5857, airports: [
      { code: "LAN", name: "Capital Region Intl" },
    ] },
  { code: "LAR", name: "Laramie", country: "United States", lat: 41.3121, lng: -105.675, airports: [
      { code: "LAR", name: "Laramie Regional" },
    ] },
  { code: "LRD", name: "Laredo", country: "United States", lat: 27.5438, lng: -99.4616, airports: [
      { code: "LRD", name: "Laredo Intl" },
    ] },
  { code: "LRU", name: "Las Cruces", country: "United States", lat: 32.2894, lng: -106.922, airports: [
      { code: "LRU", name: "Las Cruces Intl" },
    ] },
  { code: "LAS", name: "Las Vegas", country: "United States", lat: 36.0834, lng: -115.1518, airports: [
      { code: "LAS", name: "Harry Reid Intl" },
    ] },
  { code: "LBE", name: "Latrobe", country: "United States", lat: 40.2759, lng: -79.4048, airports: [
      { code: "LBE", name: "Arnold Palmer Regional" },
    ] },
  { code: "LAW", name: "Lawton", country: "United States", lat: 34.5677, lng: -98.4166, airports: [
      { code: "LAW", name: "Lawton Fort Sill Regional" },
    ] },
  { code: "LEB", name: "Lebanon", country: "United States", lat: 43.6261, lng: -72.3042, airports: [
      { code: "LEB", name: "Lebanon Municipal" },
    ] },
  { code: "LWB", name: "Lewisburg", country: "United States", lat: 37.8579, lng: -80.4004, airports: [
      { code: "LWB", name: "Greenbrier Valley" },
    ] },
  { code: "LWS", name: "Lewiston", country: "United States", lat: 46.3745, lng: -117.015, airports: [
      { code: "LWS", name: "Lewiston Nez Perce County" },
    ] },
  { code: "LEX", name: "Lexington", country: "United States", lat: 38.0351, lng: -84.6067, airports: [
      { code: "LEX", name: "Blue Grass" },
    ] },
  { code: "LBL", name: "Liberal", country: "United States", lat: 37.0442, lng: -100.96, airports: [
      { code: "LBL", name: "Liberal Mid-America Regional" },
    ] },
  { code: "LIH", name: "Lihue, Kauai", country: "United States", lat: 21.9744, lng: -159.3371, airports: [
      { code: "LIH", name: "Lihue" },
    ] },
  { code: "LNK", name: "Lincoln", country: "United States", lat: 40.8449, lng: -96.7618, airports: [
      { code: "LNK", name: "Lincoln" },
    ] },
  { code: "LIT", name: "Little Rock", country: "United States", lat: 34.7292, lng: -92.2236, airports: [
      { code: "LIT", name: "Bill & Hillary Clinton National Airport/Adams Field" },
    ] },
  { code: "GGG", name: "Longview", country: "United States", lat: 32.384, lng: -94.7115, airports: [
      { code: "GGG", name: "East Texas Regional" },
    ] },
  { code: "LAX", name: "Los Angeles", country: "United States", lat: 33.9425, lng: -118.408, airports: [
      { code: "LAX", name: "Los Angeles Intl" },
      { code: "BUR", name: "Bobe Hope / Hollywood Burbank" },
      { code: "SNA", name: "John Wayne Orange County Intl" },
      { code: "LGB", name: "Long Beach Intl" },
      { code: "ONT", name: "Ontario Intl" },
    ], keywords: ["hollywood", "la", "socal", "orange county", "lax"] },
  { code: "SDF", name: "Louisville", country: "United States", lat: 38.1706, lng: -85.7351, airports: [
      { code: "SDF", name: "Louisville Muhammad Ali Intl" },
    ] },
  { code: "LBB", name: "Lubbock", country: "United States", lat: 33.6636, lng: -101.823, airports: [
      { code: "LBB", name: "Lubbock Preston Smith Intl" },
    ] },
  { code: "LYH", name: "Lynchburg", country: "United States", lat: 37.3267, lng: -79.2004, airports: [
      { code: "LYH", name: "Lynchburg Regional Airport - Preston Glenn Field" },
    ] },
  { code: "MCN", name: "Macon", country: "United States", lat: 32.6928, lng: -83.6492, airports: [
      { code: "MCN", name: "Middle Georgia Regional" },
    ] },
  { code: "MSN", name: "Madison", country: "United States", lat: 43.1399, lng: -89.3375, airports: [
      { code: "MSN", name: "Dane County Regional Truax Field" },
    ] },
  { code: "MHT", name: "Manchester", country: "United States", lat: 42.9326, lng: -71.4357, airports: [
      { code: "MHT", name: "Manchester-Boston Regional" },
    ] },
  { code: "MHK", name: "Manhattan", country: "United States", lat: 39.141, lng: -96.6708, airports: [
      { code: "MHK", name: "Manhattan Regional" },
    ] },
  { code: "MWA", name: "Marion", country: "United States", lat: 37.7512, lng: -89.0166, airports: [
      { code: "MWA", name: "Veterans Airport of Southern Illinois" },
    ] },
  { code: "MCW", name: "Mason City", country: "United States", lat: 43.1598, lng: -93.3297, airports: [
      { code: "MCW", name: "Mason City Municipal" },
    ] },
  { code: "MSS", name: "Massena", country: "United States", lat: 44.9362, lng: -74.8443, airports: [
      { code: "MSS", name: "Massena Intl Airport Richards Field" },
    ] },
  { code: "MFE", name: "McAllen", country: "United States", lat: 26.1761, lng: -98.238, airports: [
      { code: "MFE", name: "McAllen Miller Intl" },
    ] },
  { code: "MYL", name: "McCall", country: "United States", lat: 44.8888, lng: -116.1011, airports: [
      { code: "MYL", name: "McCall Municipal" },
    ] },
  { code: "MCK", name: "McCook", country: "United States", lat: 40.2078, lng: -100.5928, airports: [
      { code: "MCK", name: "McCook Ben Nelson Regional" },
    ] },
  { code: "MCG", name: "McGrath", country: "United States", lat: 62.9529, lng: -155.606, airports: [
      { code: "MCG", name: "McGrath" },
    ] },
  { code: "MFR", name: "Medford", country: "United States", lat: 42.3742, lng: -122.873, airports: [
      { code: "MFR", name: "Rogue Valley International-Medford" },
    ] },
  { code: "MYU", name: "Mekoryuk", country: "United States", lat: 60.3723, lng: -166.2698, airports: [
      { code: "MYU", name: "Mekoryuk" },
    ] },
  { code: "MLB", name: "Melbourne", country: "United States", lat: 28.102, lng: -80.6411, airports: [
      { code: "MLB", name: "Melbourne Orlando Intl" },
    ] },
  { code: "MEM", name: "Memphis", country: "United States", lat: 35.0438, lng: -89.9763, airports: [
      { code: "MEM", name: "Memphis Intl" },
    ] },
  { code: "MCE", name: "Merced", country: "United States", lat: 37.2847, lng: -120.514, airports: [
      { code: "MCE", name: "Merced Regional Macready Field" },
    ] },
  { code: "MEI", name: "Meridian", country: "United States", lat: 32.3326, lng: -88.7519, airports: [
      { code: "MEI", name: "Key Field / Meridian Regional" },
    ] },
  { code: "AZA", name: "Mesa", country: "United States", lat: 33.3078, lng: -111.655, airports: [
      { code: "AZA", name: "Mesa Gateway" },
    ] },
  { code: "MIA", name: "Miami", country: "United States", lat: 25.7932, lng: -80.2906, airports: [
      { code: "MIA", name: "Miami Intl" },
      { code: "FLL", name: "Fort Lauderdale Hollywood Intl" },
      { code: "PBI", name: "Palm Beach Intl" },
      { code: "OPF", name: "Miami-Opa Locka Executive" },
    ], keywords: ["south florida", "ft lauderdale", "mia"] },
  { code: "MAF", name: "Midland", country: "United States", lat: 31.9425, lng: -102.202, airports: [
      { code: "MAF", name: "Midland Intl Air and Space Port" },
    ] },
  { code: "MKE", name: "Milwaukee", country: "United States", lat: 42.9472, lng: -87.8966, airports: [
      { code: "MKE", name: "General Mitchell Intl" },
    ] },
  { code: "MSP", name: "Minneapolis", country: "United States", lat: 44.8801, lng: -93.2217, airports: [
      { code: "MSP", name: "Minneapolis–Saint Paul Intl Airport / Wold–Chamberlain Field" },
    ] },
  { code: "MOT", name: "Minot", country: "United States", lat: 48.258, lng: -101.2791, airports: [
      { code: "MOT", name: "Minot Intl" },
    ] },
  { code: "MSO", name: "Missoula", country: "United States", lat: 46.9158, lng: -114.0911, airports: [
      { code: "MSO", name: "Missoula Montana" },
    ] },
  { code: "CNY", name: "Moab", country: "United States", lat: 38.755, lng: -109.755, airports: [
      { code: "CNY", name: "Canyonlands Regional" },
    ] },
  { code: "MOB", name: "Mobile", country: "United States", lat: 30.6912, lng: -88.2428, airports: [
      { code: "MOB", name: "Mobile Regional" },
    ] },
  { code: "MLI", name: "Moline", country: "United States", lat: 41.4485, lng: -90.5075, airports: [
      { code: "MLI", name: "Quad City Intl" },
    ] },
  { code: "MLU", name: "Monroe", country: "United States", lat: 32.5109, lng: -92.0377, airports: [
      { code: "MLU", name: "Monroe Regional" },
    ] },
  { code: "MRY", name: "Monterey", country: "United States", lat: 36.5868, lng: -121.8442, airports: [
      { code: "MRY", name: "Monterey Regional" },
    ] },
  { code: "MGM", name: "Montgomery", country: "United States", lat: 32.3006, lng: -86.394, airports: [
      { code: "MGM", name: "Montgomery Regional (Dannelly Field)" },
    ] },
  { code: "MTJ", name: "Montrose", country: "United States", lat: 38.5098, lng: -107.894, airports: [
      { code: "MTJ", name: "Montrose Regional" },
    ] },
  { code: "MGW", name: "Morgantown", country: "United States", lat: 39.6433, lng: -79.9176, airports: [
      { code: "MGW", name: "Morgantown Municipal Airport Walter L. (Bill) Hart Field" },
    ] },
  { code: "PIB", name: "Moselle", country: "United States", lat: 31.4671, lng: -89.3371, airports: [
      { code: "PIB", name: "Hattiesburg Laurel Regional" },
    ] },
  { code: "CWA", name: "Mosinee", country: "United States", lat: 44.7774, lng: -89.6702, airports: [
      { code: "CWA", name: "Central Wisconsin" },
    ] },
  { code: "MSL", name: "Muscle Shoals", country: "United States", lat: 34.7451, lng: -87.613, airports: [
      { code: "MSL", name: "Northwest Alabama Regional" },
    ] },
  { code: "MKG", name: "Muskegon", country: "United States", lat: 43.1695, lng: -86.2382, airports: [
      { code: "MKG", name: "Muskegon County" },
    ] },
  { code: "MYR", name: "Myrtle Beach", country: "United States", lat: 33.6797, lng: -78.9283, airports: [
      { code: "MYR", name: "Myrtle Beach Intl" },
    ] },
  { code: "ACK", name: "Nantucket", country: "United States", lat: 41.2531, lng: -70.0602, airports: [
      { code: "ACK", name: "Nantucket Memorial" },
    ] },
  { code: "BNA", name: "Nashville", country: "United States", lat: 36.1245, lng: -86.6782, airports: [
      { code: "BNA", name: "Nashville Intl" },
    ] },
  { code: "EWB", name: "New Bedford", country: "United States", lat: 41.6761, lng: -70.9569, airports: [
      { code: "EWB", name: "New Bedford Regional" },
    ] },
  { code: "EWN", name: "New Bern", country: "United States", lat: 35.073, lng: -77.0429, airports: [
      { code: "EWN", name: "Coastal Carolina Regional" },
    ] },
  { code: "HVN", name: "New Haven", country: "United States", lat: 41.2629, lng: -72.8877, airports: [
      { code: "HVN", name: "Tweed New Haven" },
    ] },
  { code: "MSY", name: "New Orleans", country: "United States", lat: 29.9934, lng: -90.258, airports: [
      { code: "MSY", name: "Louis Armstrong New Orleans Intl" },
    ] },
  { code: "NYC", name: "New York", country: "United States", lat: 40.6394, lng: -73.7793, airports: [
      { code: "JFK", name: "John F. Kennedy Intl" },
      { code: "LGA", name: "LaGuardia" },
      { code: "SWF", name: "New York Stewart Intl" },
      { code: "EWR", name: "Newark Liberty Intl" },
      { code: "ISP", name: "Long Island MacArthur" },
      { code: "HPN", name: "Westchester County" },
    ], keywords: ["manhattan", "brooklyn", "queens", "bronx", "jersey", "nyc"] },
  { code: "PHF", name: "Newport News", country: "United States", lat: 37.1319, lng: -76.493, airports: [
      { code: "PHF", name: "Newport News Williamsburg Intl" },
    ] },
  { code: "IAG", name: "Niagara Falls", country: "United States", lat: 43.1073, lng: -78.9462, airports: [
      { code: "IAG", name: "Niagara Falls Intl" },
    ] },
  { code: "OME", name: "Nome", country: "United States", lat: 64.5122, lng: -165.445, airports: [
      { code: "OME", name: "Nome" },
    ] },
  { code: "ORF", name: "Norfolk", country: "United States", lat: 36.8953, lng: -76.201, airports: [
      { code: "ORF", name: "Norfolk Intl" },
    ] },
  { code: "OTH", name: "North Bend", country: "United States", lat: 43.4171, lng: -124.246, airports: [
      { code: "OTH", name: "Southwest Oregon Regional" },
    ] },
  { code: "LBF", name: "North Platte", country: "United States", lat: 41.1262, lng: -100.684, airports: [
      { code: "LBF", name: "North Platte Regional Airport Lee Bird Field" },
    ] },
  { code: "ORT", name: "Northway", country: "United States", lat: 62.9613, lng: -141.929, airports: [
      { code: "ORT", name: "Northway" },
    ] },
  { code: "NUI", name: "Nuiqsut", country: "United States", lat: 70.21, lng: -151.006, airports: [
      { code: "NUI", name: "Nuiqsut" },
    ] },
  { code: "OCE", name: "Ocean City", country: "United States", lat: 38.3104, lng: -75.124, airports: [
      { code: "OCE", name: "Ocean City Municipal" },
    ] },
  { code: "OGD", name: "Ogden", country: "United States", lat: 41.1959, lng: -112.012, airports: [
      { code: "OGD", name: "Ogden Hinckley" },
    ] },
  { code: "OGS", name: "Ogdensburg", country: "United States", lat: 44.6819, lng: -75.4655, airports: [
      { code: "OGS", name: "Ogdensburg Intl" },
    ] },
  { code: "OKC", name: "Oklahoma City", country: "United States", lat: 35.3934, lng: -97.5982, airports: [
      { code: "OKC", name: "OKC Will Rogers World" },
    ] },
  { code: "OLM", name: "Olympia", country: "United States", lat: 46.9694, lng: -122.903, airports: [
      { code: "OLM", name: "Olympia Regional" },
    ] },
  { code: "OMA", name: "Omaha", country: "United States", lat: 41.3032, lng: -95.8941, airports: [
      { code: "OMA", name: "Eppley Airfield" },
    ] },
  { code: "MCO", name: "Orlando", country: "United States", lat: 28.4294, lng: -81.309, airports: [
      { code: "MCO", name: "Orlando Intl" },
      { code: "SFB", name: "Orlando Sanford Intl" },
    ] },
  { code: "OWB", name: "Owensboro", country: "United States", lat: 37.7401, lng: -87.1668, airports: [
      { code: "OWB", name: "Owensboro Daviess County" },
    ] },
  { code: "PAH", name: "Paducah", country: "United States", lat: 37.0608, lng: -88.7738, airports: [
      { code: "PAH", name: "Barkley Regional" },
    ] },
  { code: "PGA", name: "Page", country: "United States", lat: 36.9242, lng: -111.4477, airports: [
      { code: "PGA", name: "Page Municipal" },
    ] },
  { code: "PSP", name: "Palm Springs", country: "United States", lat: 33.8297, lng: -116.507, airports: [
      { code: "PSP", name: "Palm Springs Intl" },
    ] },
  { code: "ECP", name: "Panama City Beach", country: "United States", lat: 30.3571, lng: -85.7954, airports: [
      { code: "ECP", name: "Northwest Florida Beaches Intl" },
    ] },
  { code: "PKB", name: "Parkersburg (Williamstown)", country: "United States", lat: 39.3451, lng: -81.4392, airports: [
      { code: "PKB", name: "Mid Ohio Valley Regional" },
    ] },
  { code: "PSC", name: "Pasco", country: "United States", lat: 46.2647, lng: -119.119, airports: [
      { code: "PSC", name: "Tri Cities" },
    ] },
  { code: "PLN", name: "Pellston", country: "United States", lat: 45.5709, lng: -84.7967, airports: [
      { code: "PLN", name: "Pellston Regional Airport of Emmet County" },
    ] },
  { code: "PDT", name: "Pendleton", country: "United States", lat: 45.6951, lng: -118.841, airports: [
      { code: "PDT", name: "Eastern Oregon Regional Airport at Pendleton" },
    ] },
  { code: "PNS", name: "Pensacola", country: "United States", lat: 30.4727, lng: -87.1866, airports: [
      { code: "PNS", name: "Pensacola Intl" },
    ] },
  { code: "PIA", name: "Peoria", country: "United States", lat: 40.6638, lng: -89.6926, airports: [
      { code: "PIA", name: "General Wayne A. Downing Peoria Intl" },
    ] },
  { code: "PSG", name: "Petersburg", country: "United States", lat: 56.8017, lng: -132.945, airports: [
      { code: "PSG", name: "Petersburg James A Johnson" },
    ] },
  { code: "PHL", name: "Philadelphia", country: "United States", lat: 39.8719, lng: -75.2411, airports: [
      { code: "PHL", name: "Philadelphia Intl" },
    ] },
  { code: "PHX", name: "Phoenix", country: "United States", lat: 33.4353, lng: -112.0059, airports: [
      { code: "PHX", name: "Phoenix Sky Harbor Intl" },
    ] },
  { code: "PIR", name: "Pierre", country: "United States", lat: 44.3827, lng: -100.286, airports: [
      { code: "PIR", name: "Pierre Regional" },
    ] },
  { code: "PIE", name: "Pinellas Park", country: "United States", lat: 27.9102, lng: -82.6874, airports: [
      { code: "PIE", name: "St. Petersburg Clearwater Intl" },
    ] },
  { code: "PIT", name: "Pittsburgh", country: "United States", lat: 40.4915, lng: -80.2329, airports: [
      { code: "PIT", name: "Pittsburgh Intl" },
    ] },
  { code: "PTU", name: "Platinum", country: "United States", lat: 59.0177, lng: -161.8279, airports: [
      { code: "PTU", name: "Platinum" },
    ] },
  { code: "PBG", name: "Plattsburgh", country: "United States", lat: 44.6509, lng: -73.4681, airports: [
      { code: "PBG", name: "Plattsburgh Intl" },
    ] },
  { code: "PIH", name: "Pocatello", country: "United States", lat: 42.9098, lng: -112.596, airports: [
      { code: "PIH", name: "Pocatello Regional" },
    ] },
  { code: "PIZ", name: "Point Lay", country: "United States", lat: 69.7329, lng: -163.005, airports: [
      { code: "PIZ", name: "Point Lay LRRS" },
    ] },
  { code: "PTH", name: "Port Heiden", country: "United States", lat: 56.9579, lng: -158.6302, airports: [
      { code: "PTH", name: "Port Heiden" },
    ] },
  { code: "PDX", name: "Portland", country: "United States", lat: 45.5887, lng: -122.598, airports: [
      { code: "PDX", name: "Portland Intl" },
      { code: "PWM", name: "Portland Intl Jetport" },
    ] },
  { code: "PSM", name: "Portsmouth", country: "United States", lat: 43.0779, lng: -70.8233, airports: [
      { code: "PSM", name: "Portsmouth Intl Airport at Pease" },
    ] },
  { code: "PRC", name: "Prescott", country: "United States", lat: 34.6535, lng: -112.4199, airports: [
      { code: "PRC", name: "Prescott Regional Airport - Ernest A. Love Field" },
    ] },
  { code: "PQI", name: "Presque Isle", country: "United States", lat: 46.689, lng: -68.0448, airports: [
      { code: "PQI", name: "Presque Isle Intl" },
    ] },
  { code: "PVD", name: "Providence/Warwick", country: "United States", lat: 41.725, lng: -71.4257, airports: [
      { code: "PVD", name: "Rhode Island T. F. Green Intl" },
    ] },
  { code: "PVU", name: "Provo", country: "United States", lat: 40.2189, lng: -111.7224, airports: [
      { code: "PVU", name: "Provo Municipal" },
    ] },
  { code: "PUB", name: "Pueblo", country: "United States", lat: 38.2891, lng: -104.497, airports: [
      { code: "PUB", name: "Pueblo Memorial" },
    ] },
  { code: "PUW", name: "Pullman", country: "United States", lat: 46.7416, lng: -117.1116, airports: [
      { code: "PUW", name: "Pullman-Moscow Regional" },
    ] },
  { code: "PGD", name: "Punta Gorda", country: "United States", lat: 26.9202, lng: -81.9905, airports: [
      { code: "PGD", name: "Punta Gorda" },
    ] },
  { code: "UIN", name: "Quincy", country: "United States", lat: 39.9427, lng: -91.1946, airports: [
      { code: "UIN", name: "Quincy Regional Airport Baldwin Field" },
    ] },
  { code: "RDU", name: "Raleigh/Durham", country: "United States", lat: 35.8787, lng: -78.7873, airports: [
      { code: "RDU", name: "Raleigh-Durham Intl" },
    ] },
  { code: "RAP", name: "Rapid City", country: "United States", lat: 44.0453, lng: -103.057, airports: [
      { code: "RAP", name: "Rapid City Regional" },
    ] },
  { code: "RDD", name: "Redding", country: "United States", lat: 40.509, lng: -122.293, airports: [
      { code: "RDD", name: "Redding Municipal" },
    ] },
  { code: "RDM", name: "Redmond", country: "United States", lat: 44.2541, lng: -121.15, airports: [
      { code: "RDM", name: "Roberts Field" },
    ] },
  { code: "RNO", name: "Reno", country: "United States", lat: 39.4991, lng: -119.768, airports: [
      { code: "RNO", name: "Reno Tahoe Intl" },
    ] },
  { code: "RHI", name: "Rhinelander", country: "United States", lat: 45.6312, lng: -89.4675, airports: [
      { code: "RHI", name: "Rhinelander Oneida County" },
    ] },
  { code: "OAJ", name: "Richlands", country: "United States", lat: 34.8292, lng: -77.6121, airports: [
      { code: "OAJ", name: "Albert J Ellis" },
    ] },
  { code: "RIC", name: "Richmond", country: "United States", lat: 37.5052, lng: -77.3197, airports: [
      { code: "RIC", name: "Richmond Intl" },
    ] },
  { code: "RIW", name: "Riverton", country: "United States", lat: 43.0642, lng: -108.46, airports: [
      { code: "RIW", name: "Central Wyoming Regional" },
    ] },
  { code: "ROA", name: "Roanoke", country: "United States", lat: 37.3255, lng: -79.9754, airports: [
      { code: "ROA", name: "Roanoke–Blacksburg Regional" },
    ] },
  { code: "ROC", name: "Rochester", country: "United States", lat: 43.1189, lng: -77.6724, airports: [
      { code: "ROC", name: "Frederick Douglass Greater Rochester Intl" },
      { code: "RST", name: "Rochester Intl" },
    ] },
  { code: "RKS", name: "Rock Springs", country: "United States", lat: 41.5942, lng: -109.065, airports: [
      { code: "RKS", name: "Southwest Wyoming Regional" },
    ] },
  { code: "RKD", name: "Rockland", country: "United States", lat: 44.0601, lng: -69.0992, airports: [
      { code: "RKD", name: "Knox County Regional" },
    ] },
  { code: "ROW", name: "Roswell", country: "United States", lat: 33.3016, lng: -104.531, airports: [
      { code: "ROW", name: "Roswell Air Center" },
    ] },
  { code: "RBY", name: "Ruby", country: "United States", lat: 64.7272, lng: -155.47, airports: [
      { code: "RBY", name: "Ruby" },
    ] },
  { code: "RUT", name: "Rutland", country: "United States", lat: 43.5294, lng: -72.9496, airports: [
      { code: "RUT", name: "Rutland - Southern Vermont Regional" },
    ] },
  { code: "SMF", name: "Sacramento", country: "United States", lat: 38.6954, lng: -121.591, airports: [
      { code: "SMF", name: "Sacramento Intl" },
    ] },
  { code: "STC", name: "Saint Cloud", country: "United States", lat: 45.5466, lng: -94.0599, airports: [
      { code: "STC", name: "Saint Cloud Regional" },
    ] },
  { code: "SLE", name: "Salem", country: "United States", lat: 44.9095, lng: -123.003, airports: [
      { code: "SLE", name: "Salem-Willamette Valley Airport/McNary Field" },
    ] },
  { code: "SLN", name: "Salina", country: "United States", lat: 38.791, lng: -97.6522, airports: [
      { code: "SLN", name: "Salina Municipal" },
    ] },
  { code: "SBY", name: "Salisbury", country: "United States", lat: 38.3405, lng: -75.5103, airports: [
      { code: "SBY", name: "Salisbury Ocean City Wicomico Regional" },
    ] },
  { code: "SMN", name: "Salmon", country: "United States", lat: 45.1222, lng: -113.882, airports: [
      { code: "SMN", name: "Lemhi County" },
    ] },
  { code: "SLC", name: "Salt Lake City", country: "United States", lat: 40.7889, lng: -111.9799, airports: [
      { code: "SLC", name: "Salt Lake City Intl" },
    ] },
  { code: "SJT", name: "San Angelo", country: "United States", lat: 31.3577, lng: -100.496, airports: [
      { code: "SJT", name: "San Angelo Regional Mathis Field" },
    ] },
  { code: "SAT", name: "San Antonio", country: "United States", lat: 29.5337, lng: -98.4698, airports: [
      { code: "SAT", name: "San Antonio Intl" },
    ] },
  { code: "SBD", name: "San Bernardino", country: "United States", lat: 34.0967, lng: -117.2366, airports: [
      { code: "SBD", name: "San Bernardino Intl" },
    ] },
  { code: "SQL", name: "San Carlos", country: "United States", lat: 37.5131, lng: -122.2508, airports: [
      { code: "SQL", name: "San Carlos" },
    ] },
  { code: "SAN", name: "San Diego", country: "United States", lat: 32.7336, lng: -117.19, airports: [
      { code: "SAN", name: "San Diego Intl" },
    ] },
  { code: "SFO", name: "San Francisco", country: "United States", lat: 37.6198, lng: -122.3748, airports: [
      { code: "SFO", name: "San Francisco Intl" },
      { code: "SJC", name: "Norman Y. Mineta San Jose Intl" },
      { code: "OAK", name: "San Francisco Bay Oakland Intl" },
    ], keywords: ["bay area", "silicon valley", "sf", "sfo"] },
  { code: "SBP", name: "San Luis Obispo", country: "United States", lat: 35.2368, lng: -120.642, airports: [
      { code: "SBP", name: "San Luis County Regional" },
    ] },
  { code: "SDP", name: "Sand Point", country: "United States", lat: 55.3139, lng: -160.5221, airports: [
      { code: "SDP", name: "Sand Point" },
    ] },
  { code: "SBA", name: "Santa Barbara", country: "United States", lat: 34.4262, lng: -119.84, airports: [
      { code: "SBA", name: "Santa Barbara Municipal" },
    ] },
  { code: "SAF", name: "Santa Fe", country: "United States", lat: 35.6171, lng: -106.089, airports: [
      { code: "SAF", name: "Santa Fe Municipal" },
    ] },
  { code: "SMX", name: "Santa Maria", country: "United States", lat: 34.8989, lng: -120.457, airports: [
      { code: "SMX", name: "Santa Maria Public Airport Captain G Allan Hancock Field" },
    ] },
  { code: "STS", name: "Santa Rosa", country: "United States", lat: 38.509, lng: -122.813, airports: [
      { code: "STS", name: "Charles M. Schulz Sonoma County" },
    ] },
  { code: "SLK", name: "Saranac Lake", country: "United States", lat: 44.3869, lng: -74.2046, airports: [
      { code: "SLK", name: "Adirondack Regional" },
    ] },
  { code: "SRQ", name: "Sarasota/Bradenton", country: "United States", lat: 27.3946, lng: -82.5544, airports: [
      { code: "SRQ", name: "Sarasota Bradenton Intl" },
    ] },
  { code: "SAV", name: "Savannah", country: "United States", lat: 32.1266, lng: -81.2, airports: [
      { code: "SAV", name: "Savannah Hilton Head Intl" },
    ] },
  { code: "SVA", name: "Savoonga", country: "United States", lat: 63.6864, lng: -170.493, airports: [
      { code: "SVA", name: "Savoonga" },
    ] },
  { code: "CMI", name: "Savoy", country: "United States", lat: 40.0398, lng: -88.2762, airports: [
      { code: "CMI", name: "University of Illinois Willard" },
    ] },
  { code: "BFF", name: "Scottsbluff", country: "United States", lat: 41.874, lng: -103.596, airports: [
      { code: "BFF", name: "Western Neb. Rgnl/William B. Heilig" },
    ] },
  { code: "BFI", name: "Seattle", country: "United States", lat: 47.527, lng: -122.2999, airports: [
      { code: "BFI", name: "King County Intl Airport - Boeing Field" },
      { code: "SEA", name: "Seattle–Tacoma Intl" },
    ] },
  { code: "SHR", name: "Sheridan", country: "United States", lat: 44.7692, lng: -106.98, airports: [
      { code: "SHR", name: "Sheridan County" },
    ] },
  { code: "SOW", name: "Show Low", country: "United States", lat: 34.2641, lng: -110.0071, airports: [
      { code: "SOW", name: "Show Low Regional" },
    ] },
  { code: "SHV", name: "Shreveport", country: "United States", lat: 32.4466, lng: -93.8256, airports: [
      { code: "SHV", name: "Shreveport Regional" },
    ] },
  { code: "SDY", name: "Sidney", country: "United States", lat: 47.7051, lng: -104.1944, airports: [
      { code: "SDY", name: "Sidney - Richland Regional" },
    ] },
  { code: "SVC", name: "Silver City", country: "United States", lat: 32.6367, lng: -108.1547, airports: [
      { code: "SVC", name: "Grant County" },
    ] },
  { code: "SUX", name: "Sioux City", country: "United States", lat: 42.3976, lng: -96.3822, airports: [
      { code: "SUX", name: "Sioux Gateway Airport / Brigadier General Bud Day Field" },
    ] },
  { code: "FSD", name: "Sioux Falls", country: "United States", lat: 43.5855, lng: -96.7412, airports: [
      { code: "FSD", name: "Sioux Falls Regional" },
    ] },
  { code: "SIT", name: "Sitka", country: "United States", lat: 57.0471, lng: -135.362, airports: [
      { code: "SIT", name: "Sitka Rocky Gutierrez" },
    ] },
  { code: "SBN", name: "South Bend", country: "United States", lat: 41.7083, lng: -86.3169, airports: [
      { code: "SBN", name: "South Bend Intl" },
    ] },
  { code: "GEG", name: "Spokane", country: "United States", lat: 47.6199, lng: -117.534, airports: [
      { code: "GEG", name: "Spokane Intl" },
    ] },
  { code: "SPI", name: "Springfield", country: "United States", lat: 37.245, lng: -93.3886, airports: [
      { code: "SPI", name: "Abraham Lincoln Capital" },
      { code: "SGF", name: "Springfield Branson National" },
    ] },
  { code: "UST", name: "St Augustine", country: "United States", lat: 29.9592, lng: -81.3398, airports: [
      { code: "UST", name: "Northeast Florida Regional" },
    ] },
  { code: "STG", name: "St George", country: "United States", lat: 37.0364, lng: -113.5103, airports: [
      { code: "STG", name: "St George" },
      { code: "SGU", name: "St George Regional" },
    ] },
  { code: "STL", name: "St Louis", country: "United States", lat: 38.7487, lng: -90.37, airports: [
      { code: "STL", name: "St. Louis Lambert Intl" },
    ] },
  { code: "SNP", name: "St Paul Island", country: "United States", lat: 57.1663, lng: -170.2226, airports: [
      { code: "SNP", name: "St Paul Island" },
    ] },
  { code: "SCE", name: "State College", country: "United States", lat: 40.8494, lng: -77.8485, airports: [
      { code: "SCE", name: "State College Regional" },
    ] },
  { code: "SWO", name: "Stillwater", country: "United States", lat: 36.1621, lng: -97.0856, airports: [
      { code: "SWO", name: "Stillwater Regional" },
    ] },
  { code: "SCK", name: "Stockton", country: "United States", lat: 37.8933, lng: -121.2381, airports: [
      { code: "SCK", name: "Stockton Metropolitan" },
    ] },
  { code: "SYR", name: "Syracuse", country: "United States", lat: 43.1112, lng: -76.1063, airports: [
      { code: "SYR", name: "Syracuse Hancock Intl" },
    ] },
  { code: "TIW", name: "Tacoma", country: "United States", lat: 47.2674, lng: -122.5773, airports: [
      { code: "TIW", name: "Tacoma Narrows" },
    ] },
  { code: "TLH", name: "Tallahassee", country: "United States", lat: 30.4004, lng: -84.3543, airports: [
      { code: "TLH", name: "Tallahassee Intl" },
    ] },
  { code: "TPA", name: "Tampa", country: "United States", lat: 27.9755, lng: -82.5332, airports: [
      { code: "TPA", name: "Tampa Intl" },
    ] },
  { code: "TSM", name: "Taos", country: "United States", lat: 36.4525, lng: -105.6775, airports: [
      { code: "TSM", name: "Taos Regional" },
    ] },
  { code: "TEX", name: "Telluride", country: "United States", lat: 37.9538, lng: -107.908, airports: [
      { code: "TEX", name: "Telluride Regional" },
    ] },
  { code: "TEB", name: "Teterboro", country: "United States", lat: 40.8501, lng: -74.0608, airports: [
      { code: "TEB", name: "Teterboro" },
    ] },
  { code: "TXK", name: "Texarkana", country: "United States", lat: 33.4537, lng: -93.991, airports: [
      { code: "TXK", name: "Texarkana Regional Airport (Webb Field)" },
    ] },
  { code: "TVF", name: "Thief River Falls", country: "United States", lat: 48.0657, lng: -96.185, airports: [
      { code: "TVF", name: "Thief River Falls Regional" },
    ] },
  { code: "TOL", name: "Toledo", country: "United States", lat: 41.5868, lng: -83.8078, airports: [
      { code: "TOL", name: "Eugene F. Kranz Toledo Express" },
    ] },
  { code: "TVC", name: "Traverse City", country: "United States", lat: 44.7414, lng: -85.5822, airports: [
      { code: "TVC", name: "Cherry Capital" },
    ] },
  { code: "TKF", name: "Truckee", country: "United States", lat: 39.3186, lng: -120.1406, airports: [
      { code: "TKF", name: "Truckee Tahoe" },
    ] },
  { code: "TUS", name: "Tucson", country: "United States", lat: 32.115, lng: -110.9381, airports: [
      { code: "TUS", name: "Tucson Intl" },
    ] },
  { code: "TUL", name: "Tulsa", country: "United States", lat: 36.1971, lng: -95.8862, airports: [
      { code: "TUL", name: "Tulsa Intl" },
    ] },
  { code: "TUP", name: "Tupelo", country: "United States", lat: 34.2681, lng: -88.7699, airports: [
      { code: "TUP", name: "Tupelo Regional" },
    ] },
  { code: "TWF", name: "Twin Falls", country: "United States", lat: 42.4818, lng: -114.488, airports: [
      { code: "TWF", name: "Joslin Field Magic Valley Regional" },
    ] },
  { code: "TYR", name: "Tyler", country: "United States", lat: 32.3541, lng: -95.4024, airports: [
      { code: "TYR", name: "Tyler Pounds Regional" },
    ] },
  { code: "UNK", name: "Unalakleet", country: "United States", lat: 63.8884, lng: -160.799, airports: [
      { code: "UNK", name: "Unalakleet" },
    ] },
  { code: "DUT", name: "Unalaska", country: "United States", lat: 53.8988, lng: -166.545, airports: [
      { code: "DUT", name: "Tom Madsen (Dutch Harbor)" },
    ] },
  { code: "UTO", name: "Utopia Creek", country: "United States", lat: 65.9928, lng: -153.704, airports: [
      { code: "UTO", name: "Indian Mountain LRRS" },
    ] },
  { code: "BRW", name: "Utqiaġvik", country: "United States", lat: 71.2854, lng: -156.766, airports: [
      { code: "BRW", name: "Wiley Post Will Rogers Memorial" },
    ] },
  { code: "VDZ", name: "Valdez", country: "United States", lat: 61.1327, lng: -146.2466, airports: [
      { code: "VDZ", name: "Valdez Pioneer Field" },
    ] },
  { code: "VLD", name: "Valdosta", country: "United States", lat: 30.7825, lng: -83.2767, airports: [
      { code: "VLD", name: "Valdosta Regional" },
    ] },
  { code: "VPS", name: "Valparaiso", country: "United States", lat: 30.4813, lng: -86.5158, airports: [
      { code: "VPS", name: "Destin-Fort Walton Beach" },
    ] },
  { code: "VEL", name: "Vernal", country: "United States", lat: 40.4362, lng: -109.5117, airports: [
      { code: "VEL", name: "Vernal Regional" },
    ] },
  { code: "VRB", name: "Vero Beach", country: "United States", lat: 27.6556, lng: -80.4179, airports: [
      { code: "VRB", name: "Vero Beach Regional" },
    ] },
  { code: "VCT", name: "Victoria", country: "United States", lat: 28.8526, lng: -96.9185, airports: [
      { code: "VCT", name: "Victoria Regional" },
    ] },
  { code: "ACT", name: "Waco", country: "United States", lat: 31.6113, lng: -97.2305, airports: [
      { code: "ACT", name: "Waco Regional" },
    ] },
  { code: "MUE", name: "Waimea (Kamuela)", country: "United States", lat: 20.0013, lng: -155.668, airports: [
      { code: "MUE", name: "Waimea Kohala" },
    ] },
  { code: "AIN", name: "Wainwright", country: "United States", lat: 70.638, lng: -159.995, airports: [
      { code: "AIN", name: "Wainwright" },
    ] },
  { code: "ALW", name: "Walla Walla", country: "United States", lat: 46.0949, lng: -118.288, airports: [
      { code: "ALW", name: "Walla Walla Regional" },
    ] },
  { code: "WAS", name: "Washington D.C.", country: "United States", lat: 38.9445, lng: -77.4558, airports: [
      { code: "IAD", name: "Washington Dulles Intl" },
      { code: "BWI", name: "Baltimore/Washington Intl Thurgood Marshall" },
      { code: "DCA", name: "Ronald Reagan Washington National" },
    ], keywords: ["dc", "virginia", "maryland", "dmv", "arlington", "dulles", "bwi"] },
  { code: "ALO", name: "Waterloo", country: "United States", lat: 42.5571, lng: -92.4003, airports: [
      { code: "ALO", name: "Waterloo Regional" },
    ] },
  { code: "ART", name: "Watertown", country: "United States", lat: 43.9919, lng: -76.0217, airports: [
      { code: "ART", name: "Watertown Intl" },
      { code: "ATY", name: "Watertown Regional" },
    ] },
  { code: "EAT", name: "Wenatchee", country: "United States", lat: 47.3989, lng: -120.207, airports: [
      { code: "EAT", name: "Pangborn Memorial" },
    ] },
  { code: "LAF", name: "West Lafayette", country: "United States", lat: 40.4129, lng: -86.9394, airports: [
      { code: "LAF", name: "Purdue University" },
    ] },
  { code: "WYS", name: "West Yellowstone", country: "United States", lat: 44.6884, lng: -111.118, airports: [
      { code: "WYS", name: "Yellowstone" },
    ] },
  { code: "WST", name: "Westerly", country: "United States", lat: 41.3496, lng: -71.8034, airports: [
      { code: "WST", name: "Westerly State" },
    ] },
  { code: "SHD", name: "Weyers Cave", country: "United States", lat: 38.2638, lng: -78.8964, airports: [
      { code: "SHD", name: "Shenandoah Valley Regional" },
    ] },
  { code: "ICT", name: "Wichita", country: "United States", lat: 37.6503, lng: -97.4286, airports: [
      { code: "ICT", name: "Wichita Dwight D. Eisenhower National" },
    ] },
  { code: "SPS", name: "Wichita Falls", country: "United States", lat: 33.9888, lng: -98.4919, airports: [
      { code: "SPS", name: "Wichita Falls Municipal Airport / Sheppard Air Force Base" },
    ] },
  { code: "AVP", name: "Wilkes-Barre/Scranton", country: "United States", lat: 41.3371, lng: -75.7242, airports: [
      { code: "AVP", name: "Wilkes-Barre/Scranton Intl" },
    ] },
  { code: "IPT", name: "Williamsport", country: "United States", lat: 41.2421, lng: -76.9224, airports: [
      { code: "IPT", name: "Williamsport Regional" },
    ] },
  { code: "XWA", name: "Williston", country: "United States", lat: 48.2609, lng: -103.7512, airports: [
      { code: "XWA", name: "Williston Basin Intl" },
    ] },
  { code: "ILG", name: "Wilmington", country: "United States", lat: 39.6787, lng: -75.6065, airports: [
      { code: "ILG", name: "Wilmington" },
      { code: "ILM", name: "Wilmington Intl" },
    ] },
  { code: "OLF", name: "Wolf Point", country: "United States", lat: 48.0945, lng: -105.575, airports: [
      { code: "OLF", name: "L M Clayton" },
    ] },
  { code: "ORH", name: "Worcester", country: "United States", lat: 42.2673, lng: -71.8757, airports: [
      { code: "ORH", name: "Worcester Regional" },
    ] },
  { code: "WRG", name: "Wrangell", country: "United States", lat: 56.4843, lng: -132.37, airports: [
      { code: "WRG", name: "Wrangell" },
    ] },
  { code: "YKM", name: "Yakima", country: "United States", lat: 46.5682, lng: -120.544, airports: [
      { code: "YKM", name: "Yakima Air Terminal McAllister Field" },
    ] },
  { code: "YAK", name: "Yakutat", country: "United States", lat: 59.5087, lng: -139.6604, airports: [
      { code: "YAK", name: "Yakutat" },
    ] },
  { code: "YUM", name: "Yuma", country: "United States", lat: 32.6509, lng: -114.6094, airports: [
      { code: "YUM", name: "Yuma Intl Airport / Marine Corps Air Station Yuma" },
    ] },
  { code: "MVD", name: "Ciudad de la Costa", country: "Uruguay", lat: -34.8356, lng: -56.0265, airports: [
      { code: "MVD", name: "Carrasco General Cesáreo L. Berisso Intl" },
    ] },
  { code: "PDP", name: "Punta del Este", country: "Uruguay", lat: -34.8551, lng: -55.0943, airports: [
      { code: "PDP", name: "Capitan Corbeta CA Curbelo Intl" },
    ] },
  { code: "AZN", name: "Andizhan", country: "Uzbekistan", lat: 40.7277, lng: 72.294, airports: [
      { code: "AZN", name: "Andizhan" },
    ] },
  { code: "BHK", name: "Bukhara", country: "Uzbekistan", lat: 39.775, lng: 64.4833, airports: [
      { code: "BHK", name: "Bukhara Intl" },
    ] },
  { code: "FEG", name: "Fergana", country: "Uzbekistan", lat: 40.3588, lng: 71.745, airports: [
      { code: "FEG", name: "Fergana Intl" },
    ] },
  { code: "NMA", name: "Namangan", country: "Uzbekistan", lat: 40.9846, lng: 71.5578, airports: [
      { code: "NMA", name: "Namangan Intl" },
    ] },
  { code: "NVI", name: "Navoi", country: "Uzbekistan", lat: 40.1176, lng: 65.1727, airports: [
      { code: "NVI", name: "Navoi Intl" },
    ] },
  { code: "NCU", name: "Nukus", country: "Uzbekistan", lat: 42.4884, lng: 59.6233, airports: [
      { code: "NCU", name: "Nukus Intl" },
    ] },
  { code: "SKD", name: "Samarkand", country: "Uzbekistan", lat: 39.6982, lng: 66.9842, airports: [
      { code: "SKD", name: "Samarkand Intl" },
    ] },
  { code: "TAS", name: "Tashkent", country: "Uzbekistan", lat: 41.2579, lng: 69.2812, airports: [
      { code: "TAS", name: "Tashkent Intl" },
    ] },
  { code: "TMJ", name: "Termez", country: "Uzbekistan", lat: 37.2873, lng: 67.3119, airports: [
      { code: "TMJ", name: "Termez" },
    ] },
  { code: "UGC", name: "Urgench", country: "Uzbekistan", lat: 41.5827, lng: 60.6434, airports: [
      { code: "UGC", name: "Urgench Intl" },
    ] },
  { code: "OMN", name: "Zaamin", country: "Uzbekistan", lat: 40.014, lng: 68.411, airports: [
      { code: "OMN", name: "Zomin" },
    ] },
  { code: "BQU", name: "Bequia", country: "Saint Vincent", lat: 12.9884, lng: -61.262, airports: [
      { code: "BQU", name: "J F Mitchell" },
    ] },
  { code: "CIW", name: "Canouan", country: "Saint Vincent", lat: 12.699, lng: -61.3424, airports: [
      { code: "CIW", name: "Canouan" },
    ] },
  { code: "SVD", name: "Kingstown", country: "Saint Vincent", lat: 13.1597, lng: -61.1488, airports: [
      { code: "SVD", name: "Argyle Intl" },
    ] },
  { code: "MQS", name: "Lovell", country: "Saint Vincent", lat: 12.8879, lng: -61.1802, airports: [
      { code: "MQS", name: "Mustique" },
    ] },
  { code: "UNI", name: "Union Island", country: "Saint Vincent", lat: 12.6001, lng: -61.4119, airports: [
      { code: "UNI", name: "Union Island Intl" },
    ] },
  { code: "BLA", name: "Barcelona", country: "Venezuela", lat: 10.1111, lng: -64.6922, airports: [
      { code: "BLA", name: "General José Antonio Anzoategui Intl" },
    ] },
  { code: "BNS", name: "Barinas", country: "Venezuela", lat: 8.615, lng: -70.2142, airports: [
      { code: "BNS", name: "Barinas" },
    ] },
  { code: "BRM", name: "Barquisimeto", country: "Venezuela", lat: 10.0427, lng: -69.3586, airports: [
      { code: "BRM", name: "Barquisimeto Intl" },
    ] },
  { code: "CAJ", name: "Canaima", country: "Venezuela", lat: 6.232, lng: -62.8548, airports: [
      { code: "CAJ", name: "Canaima" },
    ] },
  { code: "CUP", name: "Carúpano", country: "Venezuela", lat: 10.66, lng: -63.2617, airports: [
      { code: "CUP", name: "General Francisco Bermúdez" },
    ] },
  { code: "CZE", name: "Coro", country: "Venezuela", lat: 11.4149, lng: -69.6809, airports: [
      { code: "CZE", name: "José Leonardo Chirinos" },
    ] },
  { code: "CUM", name: "Cumaná", country: "Venezuela", lat: 10.4503, lng: -64.1305, airports: [
      { code: "CUM", name: "Antonio José de Sucre" },
    ] },
  { code: "SOM", name: "El Tigre", country: "Venezuela", lat: 8.9451, lng: -64.1511, airports: [
      { code: "SOM", name: "San Tomé" },
    ] },
  { code: "VIG", name: "El Vigía", country: "Venezuela", lat: 8.6241, lng: -71.6727, airports: [
      { code: "VIG", name: "Juan Pablo Pérez Alfonso" },
    ] },
  { code: "PMV", name: "Isla Margarita", country: "Venezuela", lat: 10.9126, lng: -63.9666, airports: [
      { code: "PMV", name: "Del Caribe Santiago Mariño Intl" },
    ] },
  { code: "CCS", name: "Maiquetía", country: "Venezuela", lat: 10.6022, lng: -66.9912, airports: [
      { code: "CCS", name: "Maiquetía Simón Bolívar Intl" },
    ] },
  { code: "MAR", name: "Maracaibo", country: "Venezuela", lat: 10.5575, lng: -71.7293, airports: [
      { code: "MAR", name: "La Chinita Intl" },
    ] },
  { code: "MUN", name: "Maturín", country: "Venezuela", lat: 9.749, lng: -63.1533, airports: [
      { code: "MUN", name: "José Tadeo Monagas Intl" },
    ] },
  { code: "LSP", name: "Paraguaná", country: "Venezuela", lat: 11.7808, lng: -70.1515, airports: [
      { code: "LSP", name: "Josefa Camejo Intl" },
    ] },
  { code: "PZO", name: "Puerto Ordaz-Ciudad Guayana", country: "Venezuela", lat: 8.2885, lng: -62.7604, airports: [
      { code: "PZO", name: "General Manuel Carlos Piar Intl" },
    ] },
  { code: "SVZ", name: "San Antonio del Tachira", country: "Venezuela", lat: 7.8408, lng: -72.4399, airports: [
      { code: "SVZ", name: "Juan Vicente Gómez Intl" },
    ] },
  { code: "SNV", name: "Santa Elena de Uairén", country: "Venezuela", lat: 4.5547, lng: -61.1452, airports: [
      { code: "SNV", name: "Santa Elena de Uairén" },
    ] },
  { code: "STD", name: "Santo Domingo", country: "Venezuela", lat: 7.5654, lng: -72.0351, airports: [
      { code: "STD", name: "Mayor Buenaventura Vivas Intl" },
    ] },
  { code: "VLN", name: "Valencia", country: "Venezuela", lat: 10.1497, lng: -67.9284, airports: [
      { code: "VLN", name: "Arturo Michelena Intl" },
    ] },
  { code: "VLV", name: "Valera", country: "Venezuela", lat: 9.3405, lng: -70.5841, airports: [
      { code: "VLV", name: "Dr. Antonio Nicolás Briceño" },
    ] },
  { code: "EIS", name: "Beef Island", country: "VG", lat: 18.4455, lng: -64.5417, airports: [
      { code: "EIS", name: "Terrance B. Lettsome Intl" },
    ] },
  { code: "VIJ", name: "Spanish Town", country: "VG", lat: 18.4466, lng: -64.4279, airports: [
      { code: "VIJ", name: "Virgin Gorda" },
    ] },
  { code: "STT", name: "Charlotte Amalie", country: "VI", lat: 18.3371, lng: -64.9773, airports: [
      { code: "STT", name: "Cyril E. King" },
    ] },
  { code: "STX", name: "Christiansted", country: "VI", lat: 17.7014, lng: -64.8026, airports: [
      { code: "STX", name: "Henry E. Rohlsen" },
    ] },
  { code: "BMV", name: "Buon Ma Thuot", country: "Vietnam", lat: 12.6683, lng: 108.12, airports: [
      { code: "BMV", name: "Buon Ma Thuot" },
    ] },
  { code: "CAH", name: "Ca Mau City", country: "Vietnam", lat: 9.1777, lng: 105.1778, airports: [
      { code: "CAH", name: "Cà Mau" },
    ] },
  { code: "VCA", name: "Can Tho", country: "Vietnam", lat: 10.0834, lng: 105.7094, airports: [
      { code: "VCA", name: "Can Tho Intl" },
    ] },
  { code: "VCS", name: "Con Dao", country: "Vietnam", lat: 8.7318, lng: 106.633, airports: [
      { code: "VCS", name: "Con Dao" },
    ] },
  { code: "DLI", name: "Da Lat", country: "Vietnam", lat: 11.7506, lng: 108.367, airports: [
      { code: "DLI", name: "Lien Khuong" },
    ] },
  { code: "DAD", name: "Da Nang", country: "Vietnam", lat: 16.0439, lng: 108.199, airports: [
      { code: "DAD", name: "Da Nang Intl" },
    ] },
  { code: "DIN", name: "Dien Bien Phu", country: "Vietnam", lat: 21.3975, lng: 103.008, airports: [
      { code: "DIN", name: "Dien Bien Phu" },
    ] },
  { code: "VDH", name: "Dong Hoi", country: "Vietnam", lat: 17.515, lng: 106.5906, airports: [
      { code: "VDH", name: "Dong Hoi" },
    ] },
  { code: "HPH", name: "Haiphong (Hai An)", country: "Vietnam", lat: 20.8174, lng: 106.7243, airports: [
      { code: "HPH", name: "Cat Bi Intl" },
    ] },
  { code: "HAN", name: "Hanoi (Soc Son)", country: "Vietnam", lat: 21.2212, lng: 105.807, airports: [
      { code: "HAN", name: "Noi Bai Intl" },
    ] },
  { code: "SGN", name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8188, lng: 106.652, airports: [
      { code: "SGN", name: "Tan Son Nhat Intl" },
    ] },
  { code: "HUI", name: "Huế", country: "Vietnam", lat: 16.4006, lng: 107.7031, airports: [
      { code: "HUI", name: "Phu Bai Intl" },
    ] },
  { code: "CXR", name: "Nha Trang/nha Trang aiurportCam Ranh", country: "Vietnam", lat: 11.9982, lng: 109.219, airports: [
      { code: "CXR", name: "Cam Ranh Intl Airport / Cam Ranh" },
    ] },
  { code: "PQC", name: "Phu Quoc Island", country: "Vietnam", lat: 10.1678, lng: 103.9955, airports: [
      { code: "PQC", name: "Phú Quốc Intl" },
    ] },
  { code: "PXU", name: "Pleiku", country: "Vietnam", lat: 14.0045, lng: 108.017, airports: [
      { code: "PXU", name: "Pleiku" },
    ] },
  { code: "UIH", name: "Quy Nohn", country: "Vietnam", lat: 13.955, lng: 109.042, airports: [
      { code: "UIH", name: "Phu Cat" },
    ] },
  { code: "VKG", name: "Rach Gia", country: "Vietnam", lat: 9.958, lng: 105.1324, airports: [
      { code: "VKG", name: "Rach Gia" },
    ] },
  { code: "TBB", name: "Tuy Hoa", country: "Vietnam", lat: 13.0496, lng: 109.334, airports: [
      { code: "TBB", name: "Dong Tac" },
    ] },
  { code: "VDO", name: "Van Don", country: "Vietnam", lat: 21.1207, lng: 107.4154, airports: [
      { code: "VDO", name: "Van Don Intl" },
    ] },
  { code: "VII", name: "Vinh", country: "Vietnam", lat: 18.7376, lng: 105.671, airports: [
      { code: "VII", name: "Vinh" },
    ] },
  { code: "SON", name: "Luganville", country: "Vanuatu", lat: -15.505, lng: 167.22, airports: [
      { code: "SON", name: "Santo Pekoa Intl" },
    ] },
  { code: "VLI", name: "Port Vila", country: "Vanuatu", lat: -17.6993, lng: 168.32, airports: [
      { code: "VLI", name: "Bauerfield Intl" },
    ] },
  { code: "TAH", name: "Tanna Island", country: "Vanuatu", lat: -19.4551, lng: 169.224, airports: [
      { code: "TAH", name: "Whitegrass" },
    ] },
  { code: "WLS", name: "Wallis Island", country: "WF", lat: -13.2394, lng: -176.1986, airports: [
      { code: "WLS", name: "Hihifo" },
    ] },
  { code: "APW", name: "Apia", country: "Samoa", lat: -13.83, lng: -172.008, airports: [
      { code: "APW", name: "Faleolo Intl" },
    ] },
  { code: "PRN", name: "Prishtina", country: "Kosovo", lat: 42.5728, lng: 21.0358, airports: [
      { code: "PRN", name: "Priština Adem Jashari Intl" },
    ] },
  { code: "ADE", name: "Aden", country: "Yemen", lat: 12.8296, lng: 45.03, airports: [
      { code: "ADE", name: "Aden Intl" },
    ] },
  { code: "AAY", name: "Al Ghaydah", country: "Yemen", lat: 16.1933, lng: 52.1742, airports: [
      { code: "AAY", name: "Al Ghaydah Intl" },
    ] },
  { code: "SCT", name: "Mori", country: "Yemen", lat: 12.6321, lng: 53.9062, airports: [
      { code: "SCT", name: "Socotra" },
    ] },
  { code: "RIY", name: "Mukalla(Riyan)", country: "Yemen", lat: 14.6622, lng: 49.3753, airports: [
      { code: "RIY", name: "Riyan Intl" },
    ] },
  { code: "SAH", name: "Sanaa", country: "Yemen", lat: 15.4763, lng: 44.2197, airports: [
      { code: "SAH", name: "Sanaa Intl" },
    ] },
  { code: "GXF", name: "Seiyun", country: "Yemen", lat: 15.9659, lng: 48.7881, airports: [
      { code: "GXF", name: "Seiyun Hadhramaut Intl" },
    ] },
  { code: "TAI", name: "Taiz", country: "Yemen", lat: 13.686, lng: 44.1391, airports: [
      { code: "TAI", name: "Taiz Intl" },
    ] },
  { code: "DZA", name: "Dzaoudzi", country: "Mayotte", lat: -12.8093, lng: 45.2818, airports: [
      { code: "DZA", name: "Dzaoudzi Pamandzi Intl" },
    ] },
  { code: "BFN", name: "Bloemfontein", country: "South Africa", lat: -29.0927, lng: 26.3024, airports: [
      { code: "BFN", name: "Bram Fischer Intl" },
    ] },
  { code: "CPT", name: "Cape Town", country: "South Africa", lat: -33.9648, lng: 18.6017, airports: [
      { code: "CPT", name: "Cape Town Intl" },
    ] },
  { code: "DUR", name: "Durban", country: "South Africa", lat: -29.6144, lng: 31.1197, airports: [
      { code: "DUR", name: "King Shaka Intl" },
    ] },
  { code: "ELS", name: "East London", country: "South Africa", lat: -33.0356, lng: 27.8259, airports: [
      { code: "ELS", name: "King Phalo" },
    ] },
  { code: "GRJ", name: "George", country: "South Africa", lat: -34.0056, lng: 22.3789, airports: [
      { code: "GRJ", name: "George" },
    ] },
  { code: "PLZ", name: "Gqeberha (Port Elizabeth)", country: "South Africa", lat: -33.9897, lng: 25.6174, airports: [
      { code: "PLZ", name: "Chief Dawid Stuurman Intl" },
    ] },
  { code: "HDS", name: "Hoedspruit", country: "South Africa", lat: -24.3619, lng: 31.0529, airports: [
      { code: "HDS", name: "Eastgate Airport / Air Force Base Hoedspruit" },
    ] },
  { code: "JNB", name: "Johannesburg", country: "South Africa", lat: -26.1392, lng: 28.246, airports: [
      { code: "JNB", name: "O.R. Tambo Intl" },
      { code: "HLA", name: "Lanseria Intl" },
    ], keywords: ["joburg", "or tambo", "south africa", "jnb"] },
  { code: "KIM", name: "Kimberley", country: "South Africa", lat: -28.8028, lng: 24.7652, airports: [
      { code: "KIM", name: "Kimberley" },
    ] },
  { code: "MBD", name: "Mafeking", country: "South Africa", lat: -25.7984, lng: 25.548, airports: [
      { code: "MBD", name: "Mmabatho Intl" },
    ] },
  { code: "MGH", name: "Margate", country: "South Africa", lat: -30.8574, lng: 30.343, airports: [
      { code: "MGH", name: "Margate" },
    ] },
  { code: "MQP", name: "Mbombela", country: "South Africa", lat: -25.3833, lng: 31.1053, airports: [
      { code: "MQP", name: "Kruger Mpumalanga Intl" },
    ] },
  { code: "UTT", name: "Mthatha", country: "South Africa", lat: -31.5464, lng: 28.6734, airports: [
      { code: "UTT", name: "K. D. Matanzima" },
    ] },
  { code: "PHW", name: "Phalaborwa", country: "South Africa", lat: -23.9372, lng: 31.1554, airports: [
      { code: "PHW", name: "Hendrik Van Eck" },
    ] },
  { code: "PZB", name: "Pietermaritzburg", country: "South Africa", lat: -29.649, lng: 30.3987, airports: [
      { code: "PZB", name: "Pietermaritzburg" },
    ] },
  { code: "PTG", name: "Polokwane", country: "South Africa", lat: -23.8453, lng: 29.4586, airports: [
      { code: "PTG", name: "Polokwane Intl" },
    ] },
  { code: "RCB", name: "Richards Bay", country: "South Africa", lat: -28.741, lng: 32.0921, airports: [
      { code: "RCB", name: "Richards Bay" },
    ] },
  { code: "SIS", name: "Sishen", country: "South Africa", lat: -27.6486, lng: 22.9993, airports: [
      { code: "SIS", name: "Sishen" },
    ] },
  { code: "UTN", name: "Upington", country: "South Africa", lat: -28.4005, lng: 21.2634, airports: [
      { code: "UTN", name: "Upington Intl" },
    ] },
  { code: "LVI", name: "Livingstone", country: "Zambia", lat: -17.8215, lng: 25.8196, airports: [
      { code: "LVI", name: "Harry Mwanga Nkumbula Intl" },
    ] },
  { code: "LUN", name: "Lusaka", country: "Zambia", lat: -15.3308, lng: 28.4527, airports: [
      { code: "LUN", name: "Kenneth Kaunda Intl" },
    ] },
  { code: "MFU", name: "Mfuwe", country: "Zambia", lat: -13.2589, lng: 31.9366, airports: [
      { code: "MFU", name: "Mfuwe" },
    ] },
  { code: "NLA", name: "Ndola", country: "Zambia", lat: -12.9617, lng: 28.5167, airports: [
      { code: "NLA", name: "Simon Mwansa Kapwepwe Intl" },
    ] },
  { code: "BUQ", name: "Bulawayo", country: "Zimbabwe", lat: -20.0163, lng: 28.6229, airports: [
      { code: "BUQ", name: "Joshua Mqabuko Nkomo Intl" },
    ] },
  { code: "HRE", name: "Harare", country: "Zimbabwe", lat: -17.9318, lng: 31.0928, airports: [
      { code: "HRE", name: "Robert Gabriel Mugabe Intl" },
    ] },
  { code: "VFA", name: "Victoria Falls", country: "Zimbabwe", lat: -18.0974, lng: 25.8369, airports: [
      { code: "VFA", name: "Victoria Falls Intl" },
    ] },
];

const MatchingTrains = require("./MatchingTrains")
const result = [
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:29:00",
    AdvertisedTrainIdent: "2211",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:29:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:29:00",
    AdvertisedTrainIdent: "2211",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:30:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:29:00",
    AdvertisedTrainIdent: "12312",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:28:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:29:00",
    AdvertisedTrainIdent: "12312",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:29:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:30:00",
    AdvertisedTrainIdent: "2212",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "U", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:30:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:30:00",
    AdvertisedTrainIdent: "2212",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "U", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:29:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:33:00",
    AdvertisedTrainIdent: "2311",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Äs", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:33:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:33:00",
    AdvertisedTrainIdent: "2311",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Äs", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:32:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:34:00",
    AdvertisedTrainIdent: "2909",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:33:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:34:00",
    AdvertisedTrainIdent: "2909",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:34:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:34:00",
    AdvertisedTrainIdent: "2512",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Kän", Priority: 1, Order: 0 }],
    EstimatedTimeAtLocation: "2016-08-11T07:34:00",
    TimeAtLocation: "2016-08-11T07:34:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:34:00",
    AdvertisedTrainIdent: "2512",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Kän", Priority: 1, Order: 0 }],
    EstimatedTimeAtLocation: "2016-08-11T07:35:00",
    TimeAtLocation: "2016-08-11T07:35:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:36:00",
    AdvertisedTrainIdent: "2810",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Bål", Priority: 1, Order: 0 }],
    EstimatedTimeAtLocation: "2016-08-11T07:40:00",
    TimeAtLocation: "2016-08-11T07:40:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:36:00",
    AdvertisedTrainIdent: "2810",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Bål", Priority: 1, Order: 0 }],
    EstimatedTimeAtLocation: "2016-08-11T07:41:00",
    TimeAtLocation: "2016-08-11T07:41:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:37:00",
    AdvertisedTrainIdent: "2611",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:38:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:37:00",
    AdvertisedTrainIdent: "2611",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:36:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:37:00",
    AdvertisedTrainIdent: "2712",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
    EstimatedTimeAtLocation: "2016-08-11T07:38:00",
    TimeAtLocation: "2016-08-11T07:39:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:37:00",
    AdvertisedTrainIdent: "2712",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
    EstimatedTimeAtLocation: "2016-08-11T07:38:00",
    TimeAtLocation: "2016-08-11T07:38:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:37:00",
    AdvertisedTrainIdent: "2612",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:37:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:37:00",
    AdvertisedTrainIdent: "2612",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:35:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:38:00",
    AdvertisedTrainIdent: "2711",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:38:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:38:00",
    AdvertisedTrainIdent: "2711",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:38:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:39:00",
    AdvertisedTrainIdent: "2513",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Vhe", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:37:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:39:00",
    AdvertisedTrainIdent: "2513",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Vhe", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:38:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:40:00",
    AdvertisedTrainIdent: "2811",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Nyh", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:40:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:40:00",
    AdvertisedTrainIdent: "2811",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Nyh", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:41:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:42:00",
    AdvertisedTrainIdent: "12312",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
    EstimatedTimeAtLocation: "2016-08-11T07:42:00",
    TimeAtLocation: "2016-08-11T07:43:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:42:00",
    AdvertisedTrainIdent: "12312",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
    EstimatedTimeAtLocation: "2016-08-11T07:43:00",
    TimeAtLocation: "2016-08-11T07:43:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:45:00",
    AdvertisedTrainIdent: "2211",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:44:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:45:00",
    AdvertisedTrainIdent: "2211",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:45:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:45:00",
    AdvertisedTrainIdent: "2214",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "U", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:44:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:45:00",
    AdvertisedTrainIdent: "2214",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "U", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:45:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:47:00",
    AdvertisedTrainIdent: "2313",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Äs", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:47:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:47:00",
    AdvertisedTrainIdent: "2313",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Äs", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:48:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:49:00",
    AdvertisedTrainIdent: "2812",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Bål", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:48:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:49:00",
    AdvertisedTrainIdent: "2812",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Bål", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:49:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:51:00",
    AdvertisedTrainIdent: "2512",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Kän", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:51:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:51:00",
    AdvertisedTrainIdent: "2512",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Kän", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:50:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:52:00",
    AdvertisedTrainIdent: "2713",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:51:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:52:00",
    AdvertisedTrainIdent: "2713",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:53:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:52:00",
    AdvertisedTrainIdent: "2612",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:52:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:52:00",
    AdvertisedTrainIdent: "2612",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:51:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:52:00",
    AdvertisedTrainIdent: "2714",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:51:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:52:00",
    AdvertisedTrainIdent: "2714",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:52:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:53:00",
    AdvertisedTrainIdent: "2611",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:53:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:53:00",
    AdvertisedTrainIdent: "2611",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:52:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:54:00",
    AdvertisedTrainIdent: "2813",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Nyh", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:53:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:54:00",
    AdvertisedTrainIdent: "2813",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Nyh", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:54:00",
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:55:00",
    AdvertisedTrainIdent: "2513",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Vhe", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:55:00",
    AdvertisedTrainIdent: "2513",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Vhe", Priority: 1, Order: 0 }],
    TimeAtLocation: "2016-08-11T07:54:00",
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:57:00",
    AdvertisedTrainIdent: "12312",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:57:00",
    AdvertisedTrainIdent: "12312",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T07:59:00",
    AdvertisedTrainIdent: "2213",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T07:59:00",
    AdvertisedTrainIdent: "2213",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:00:00",
    AdvertisedTrainIdent: "2214",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "U", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:00:00",
    AdvertisedTrainIdent: "2214",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "U", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:00:00",
    AdvertisedTrainIdent: "12314",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:00:00",
    AdvertisedTrainIdent: "12314",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:03:00",
    AdvertisedTrainIdent: "2313",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Äs", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:03:00",
    AdvertisedTrainIdent: "2313",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Äs", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:04:00",
    AdvertisedTrainIdent: "2514",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Kän", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:04:00",
    AdvertisedTrainIdent: "2514",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Kän", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:06:00",
    AdvertisedTrainIdent: "2812",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Bål", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:06:00",
    AdvertisedTrainIdent: "2812",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Bål", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:07:00",
    AdvertisedTrainIdent: "2613",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:07:00",
    AdvertisedTrainIdent: "2613",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:07:00",
    AdvertisedTrainIdent: "2714",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:07:00",
    AdvertisedTrainIdent: "2714",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:07:00",
    AdvertisedTrainIdent: "2614",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:07:00",
    AdvertisedTrainIdent: "2614",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:08:00",
    AdvertisedTrainIdent: "2713",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:08:00",
    AdvertisedTrainIdent: "2713",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:09:00",
    AdvertisedTrainIdent: "2515",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Vhe", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:09:00",
    AdvertisedTrainIdent: "2515",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Vhe", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:10:00",
    AdvertisedTrainIdent: "2813",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Nyh", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:10:00",
    AdvertisedTrainIdent: "2813",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Nyh", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:15:00",
    AdvertisedTrainIdent: "2213",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:15:00",
    AdvertisedTrainIdent: "2213",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Tu", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:15:00",
    AdvertisedTrainIdent: "12314",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:15:00",
    AdvertisedTrainIdent: "12314",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Khä", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:15:00",
    AdvertisedTrainIdent: "2216",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "U", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:15:00",
    AdvertisedTrainIdent: "2216",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "U", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:19:00",
    AdvertisedTrainIdent: "2814",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Bål", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:19:00",
    AdvertisedTrainIdent: "2814",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Bål", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:21:00",
    AdvertisedTrainIdent: "2514",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Kän", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:21:00",
    AdvertisedTrainIdent: "2514",
    LocationSignature: "Sub",
    ToLocation: [{ LocationName: "Kän", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:22:00",
    AdvertisedTrainIdent: "2715",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:22:00",
    AdvertisedTrainIdent: "2715",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:22:00",
    AdvertisedTrainIdent: "2614",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:22:00",
    AdvertisedTrainIdent: "2614",
    LocationSignature: "Åbe",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:22:00",
    AdvertisedTrainIdent: "2716",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:22:00",
    AdvertisedTrainIdent: "2716",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Ankomst",
    AdvertisedTimeAtLocation: "2016-08-11T08:23:00",
    AdvertisedTrainIdent: "2613",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
  },
  {
    ActivityType: "Avgang",
    AdvertisedTimeAtLocation: "2016-08-11T08:23:00",
    AdvertisedTrainIdent: "2613",
    LocationSignature: "Tul",
    ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
  },
]

function id(activity) {
  return activity.AdvertisedTrainIdent
}
function advertised(activity) {
  return activity.AdvertisedTimeAtLocation
}
describe("MatchingTrains", () => {
  describe("getNorthbound", () => {
    it("new algorithm", () => {
      expect(result.length).toBe(94)
      const tul = result.filter(a => a.LocationSignature === "Tul")
      expect(tul.length).toBe(30)

      const sub = result.filter(a => a.LocationSignature === "Sub")
      expect(sub.length).toBe(18)

      const abe = result.filter(a => a.LocationSignature === "Åbe")
      expect(abe.length).toBe(46)

      const r = []

      let ank = abe
        .filter(a => a.ActivityType === "Ankomst")
        .filter(a =>
          tul.some(t => id(a) === id(t) && advertised(a) > advertised(t))
        )

      let avg = abe
        .filter(a => a.ActivityType === "Avgang")
        .filter(a =>
          sub.some(s => id(a) === id(s) && advertised(a) < advertised(s))
        )

      let connection

      while ((connection = match())) {
        r.push(connection)
        update()
      }

      expect(r.length).toBe(2)

      expect(id(r[0].ankomst)).toBe("12312")
      expect(id(r[0].avgang)).toBe("12312")
      expect(id(r[1].ankomst)).toBe("2612")
      expect(id(r[1].avgang)).toBe("2514")

      function match() {
        const [ankomst] = ank
        const mtc = avg.filter(
          a => advertised(a) >= ankomst.AdvertisedTimeAtLocation
        )
        const [avgang] = mtc
        if (!avgang) return
        return { ankomst, avgang }
      }

      function update() {
        ank = ank.filter(a => advertised(a) > advertised(connection.avgang))

        avg = avg.filter(a => advertised(a) > advertised(connection.avgang))
      }
    })

    it("only considers departures from Tullinge", () => {
      expect(
        MatchingTrains.getNorthbound([
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T08:06:00",
            AdvertisedTrainIdent: "2812",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:36:00",
            AdvertisedTrainIdent: "2814",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:52:00",
            AdvertisedTrainIdent: "2714",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        ]).filter(x => x)
      ).toEqual([
        {
          ankomst: {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:36:00",
            AdvertisedTrainIdent: "2814",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          avgang: {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:52:00",
            AdvertisedTrainIdent: "2714",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        },
      ])
    })
    it("only considers northbound trains to Sub", () => {
      expect(
        MatchingTrains.getNorthbound([
          {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:36:00",
            AdvertisedTrainIdent: "2814",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:24:00",
            AdvertisedTrainIdent: "2815",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Skg", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:52:00",
            AdvertisedTrainIdent: "2714",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        ]).filter(x => x)
      ).toEqual([
        {
          ankomst: {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:36:00",
            AdvertisedTrainIdent: "2814",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          avgang: {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:52:00",
            AdvertisedTrainIdent: "2714",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        },
      ])
    })
    it("only considers northbound departures from Tul", () => {
      expect(
        MatchingTrains.getNorthbound([
          {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:36:00",
            AdvertisedTrainIdent: "2814",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:53:00",
            AdvertisedTrainIdent: "2611",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Söc", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:52:00",
            AdvertisedTrainIdent: "2714",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        ]).filter(x => x)
      ).toEqual([
        {
          ankomst: {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:36:00",
            AdvertisedTrainIdent: "2814",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          avgang: {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:52:00",
            AdvertisedTrainIdent: "2714",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        },
      ])
    })
    it("only considers actual connections", () => {
      expect(
        MatchingTrains.getNorthbound([
          {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:36:00",
            AdvertisedTrainIdent: "2814",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:52:00",
            AdvertisedTrainIdent: "2714",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T08:37:00",
            AdvertisedTrainIdent: "2616",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        ]).filter(x => x)
      ).toEqual([
        {
          ankomst: {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-07-08T08:36:00",
            AdvertisedTrainIdent: "2814",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          avgang: {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-07-08T07:52:00",
            AdvertisedTrainIdent: "2714",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        },
      ])
    })
    it("matches more than one connection", () => {
      expect(
        MatchingTrains.getNorthbound([
          {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-08-07T13:36:00",
            AdvertisedTrainIdent: "2834",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-08-07T14:06:00",
            AdvertisedTrainIdent: "2836",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-08-07T12:52:00",
            AdvertisedTrainIdent: "2734",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
          {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-08-07T13:22:00",
            AdvertisedTrainIdent: "2736",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        ]).filter(x => x)
      ).toEqual([
        {
          ankomst: {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-08-07T13:36:00",
            AdvertisedTrainIdent: "2834",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          avgang: {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-08-07T12:52:00",
            AdvertisedTrainIdent: "2734",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        },
        {
          ankomst: {
            ActivityType: "Ankomst",
            AdvertisedTimeAtLocation: "2016-08-07T14:06:00",
            AdvertisedTrainIdent: "2836",
            LocationSignature: "Sub",
            ToLocation: [{ LocationName: "Spå", Priority: 1, Order: 0 }],
          },
          avgang: {
            ActivityType: "Avgang",
            AdvertisedTimeAtLocation: "2016-08-07T13:22:00",
            AdvertisedTrainIdent: "2736",
            LocationSignature: "Tul",
            ToLocation: [{ LocationName: "Mr", Priority: 1, Order: 0 }],
          },
        },
      ])
    })
  })
})

export interface Room {
  slug: string;
  name: string;
  price: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  occupancy: string;
  amenities: string[];
  details: {
    breakfast: string;
    meals?: string;
    cleaning: string;
    laundry?: string;
    extraCharges?: string[];
    understanding?: string[];
  };
}

export const rooms: Room[] = [
  {
    slug: "double-room",
    name: "Double Room",
    price: "Rs. 2,400",
    occupancy: "double occupancy",
    shortDescription: "A serene and comfortable space designed for quiet reflection and rest.",
    fullDescription: "1 Double Rooms at Rs. 2350/night for double occupancy, inclusive of Breakfast. Both rooms have attached bathroom with geysers.",
    image: "/images/double-room.webp",
    amenities: ["Attached Bathroom", "Geyser", "Breakfast Included", "Wi-Fi"],
    details: {
      breakfast: "We offer breakfast from 7:30 to 9:00 am as complimentary with your bed charge. Options include Continental, Puri Bhaaji, or Alu Paratha. (Continental includes – Bread/Toast/Pancakes with butter & jam, Cornflake/Oats, Eggs, tea).",
      meals: "Order at least 4 hours in advance. We serve simple home cooked food. Non-veg: Rs. 350/person, Veg: Rs. 250/person.",
      cleaning: "If you need your room to be cleaned please inform the housekeeping assistant before you leave the room.",
      laundry: "We charge Rs.100/load (No of clothes per load should be 5-8). Our housekeeping attendant will machine wash the clothes. Then she will hand them to dry on the terrace. It is the responsibility of the guest to collect the clothes from the hanger (on the terrace).",
      extraCharges: [
        "For extra bed, Rs.450 and extra mattress, Rs.300 will be charged",
        "For a child under 5 years accompanying the parents, there is no charge."
      ]
    }
  },
  {
    slug: "twin-bed-room",
    name: "Twin Bed Room",
    price: "Rs. 2,400",
    occupancy: "double occupancy",
    shortDescription: "Warm wooden accents and natural light create an inviting atmosphere.",
    fullDescription: "1 Twin Bed Rooms at Rs. 2350/night for double occupancy, inclusive of Breakfast. Both rooms have attached bathroom with geysers.",
    image: "/images/twin-bed-room.webp",
    amenities: ["Attached Bathroom", "Geyser", "Breakfast Included", "Wi-Fi"],
    details: {
      breakfast: "We offer breakfast from 7:30 to 9:00 am as complimentary with your bed charge. Options include Continental, Puri Bhaaji, or Alu Paratha. (Continental includes – Bread/Toast/Pancakes with butter & jam, Cornflake/Oats, Eggs, tea).",
      meals: "Order at least 4 hours in advance. We serve simple home cooked food. Non-veg: Rs. 350/person, Veg: Rs. 250/person.",
      cleaning: "If you need your room to be cleaned please inform the housekeeping assistant before you leave the room.",
      extraCharges: [
        "For extra bed, Rs.450 and extra mattress, Rs.300 will be charged",
        "For a child under 5 years accompanying the parents, there is no charge."
      ]
    }
  },
  {
    slug: "family-room",
    name: "Family Room",
    price: "Rs. 3,300",
    occupancy: "up to 4 people",
    shortDescription: "Our premium offering, blending traditional comfort with intentional design.",
    fullDescription: "One Family room Rs 3200/night (inclusive of breakfast). Features a Queen size bed and 2 single beds.",
    image: "/images/family-room.webp",
    amenities: ["Queen Size Bed", "2 Single Beds", "Attached Bathroom", "Geyser", "Breakfast Included"],
    details: {
      breakfast: "We offer breakfast from 7:30 to 9:00 am as complimentary with your bed charge. Options include Continental, Puri Bhaaji, or Alu Paratha. (Continental includes – Bread/Toast/Pancakes with butter & jam, Cornflake/Oats, Eggs, tea).",
      meals: "Order at least 4 hours in advance. We serve simple home cooked food. Non-veg: Rs. 350/person, Veg: Rs. 250/person.",
      cleaning: "If you need your room to be cleaned please inform the housekeeping assistant before you leave the room.",
      extraCharges: [
        "Queen size bed and 2 single beds",
        "Extra bed/s can be added if needed",
        "For extra bed, Rs.450 and extra mattress, Rs.300 will be charged",
        "For a child under 5 years accompanying the parents, there is no charge."
      ]
    }
  },
  {
    slug: "dormitory",
    name: "Dormitory",
    price: "Rs. 750",
    occupancy: "per bed",
    shortDescription: "Ideal for backpackers or single travelers seeking a budget-friendly stay.",
    fullDescription: "We have 1 Dorm: 4 Single Beds Rooms – ideal for backpackers or a single traveler Both dorms have attached bathrooms with geysers. This is being offered at Rs. 750/bed inclusive of Breakfast.",
    image: "/images/four-bedded-room.webp",
    amenities: ["Shared Dorm", "Attached Bathroom", "Geyser", "Breakfast Included"],
    details: {
      breakfast: "We offer breakfast from 7:30 to 9:00 am as complimentary with your bed charge. Options include Continental, Puri Bhaaji, or Alu Paratha. (Continental includes – Bread/Toast/Pancakes with butter & jam, Cornflake/Oats, Eggs, tea).",
      meals: "Order at least 4 hours in advance. We serve simple home cooked food. Non-veg: Rs. 350/person, Veg: Rs. 250/person.",
      cleaning: "If you need your room to be cleaned please inform the housekeeping assistant before you leave the room.",
      extraCharges: [
        "For an extra mattress, Rs.300 will be charged."
      ],
      understanding: [
        "If there are other guests who booked the same dorm on the same dates, you will have to share the dorm with them.",
        "If you want the dorm exclusively (just for you) then you have to pay for the extra beds.",
        "The dorm has an attached toilet and bathroom. This will be shared if other guests are also booked in the same dorm."
      ]
    }
  }
];

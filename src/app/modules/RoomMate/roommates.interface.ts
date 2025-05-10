import { Saved, ListingAmenity, ListingRule,ListingStatus,Gender } from "./roommate.constant"




export interface IRoomMateListing {

  title: string;
  preview: string;
  description: string;
  rentCHF: number;
  expensesIncluded: boolean;
  extraExpenses: string[];
  availableFrom: Date;
  availableUntil?: Date;
  rooms: number;
  bathrooms: number;
  size?: number;
  floor?: number;
  address: string;
  streetAndNo: string;
  postalCode: string;
  city: string;
  latitude: number;
  longitude: number;
  radiusKm: number;
  photos: string[];
  videoUrl?: string;
  status: ListingStatus;
  createdAt: Date;
  expiresAt?: Date;
  available: string;
  additionalExpenseIncluded: boolean;
  roommateAgeMin?: number;
  roommateAgeMax?: number;
  roommateLanguages: string[];
  roommateGender?: Gender;
  spaceAndAppliances: string[];
  comfortAndLeisure: string[];
  accessAndMobility: string[];
  houseAtmosphere: string;
  externalGuestsAllowed: string;
  smokingAllowedInOutdoorAreas: string;
  cleaningScheduleDefined: string;
  currentlyHavePets: string;
  newPetsAllowed: string;
  cookingWithRoommates: string;
  dinnerWithRoommates: string;
  spendingFreeTimeWithRoommates: string;
  language: string;
  age: string;

  // Relations
  manualRooms: AddRoomet[];
  ownerId: string;
  roommates: Roommate[];
  requests: Request[];
  savedBy: Saved[];
  listingAmenities: ListingAmenity[];
  listingRules: ListingRule[];
}

export interface AddRoomet {
  
  name: string;
  email: string;
  listingId: string;
}
export interface Roommate {

  userId: string;
  listingId: string;
  isLeaving: boolean;
}

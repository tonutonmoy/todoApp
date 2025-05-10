import { z } from 'zod';
import { Gender, ListingStatus } from './roommate.constant';

const RoomMateListing = z.object({
  title: z.string().optional(),
  preview: z.string().optional(),
  description: z.string().optional(),
  rentCHF: z.number().optional(),
  expensesIncluded: z.boolean().optional(),
  extraExpenses: z.array(z.string()).optional(),
  availableFrom: z.date().optional(),
  availableUntil: z.date().optional(),
  rooms: z.number().optional(),
  bathrooms: z.number().optional(),
  size: z.number().optional(),
  floor: z.number().optional(),
  address: z.string().optional(),
  streetAndNo: z.string().optional(),
  postalCode: z.string().optional(),
  city: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  radiusKm: z.number().optional(),
  photos: z.array(z.string()).optional(),
  videoUrl: z.string().optional(),
  status: z.nativeEnum(ListingStatus).optional(),
  createdAt: z.date().optional(),
  expiresAt: z.date().optional(),
  available: z.string().optional(),
  additionalExpenseIncluded: z.boolean().optional(),
  roommateAgeMin: z.number().optional(),
  roommateAgeMax: z.number().optional(),
  roommateLanguages: z.array(z.string()).optional(),
  roommateGender: z.nativeEnum(Gender).optional(),
  spaceAndAppliances: z.array(z.string()).optional(),
  comfortAndLeisure: z.array(z.string()).optional(),
  accessAndMobility: z.array(z.string()).optional(),
  houseAtmosphere: z.string().optional(),
  externalGuestsAllowed: z.string().optional(),
  smokingAllowedInOutdoorAreas: z.string().optional(),
  currentlyHavePets: z.string().optional(),
  newPetsAllowed: z.string().optional(),
  cookingWithRoommates: z.string().optional(),
  dinnerWithRoommates: z.string().optional(),
  language: z.string().optional(),
  age: z.string().optional(),

  manualRooms: z.array(z.object({
    name: z.string(),
    email: z.string().email(),
    listingId: z.string(),
  })).optional(),

  ownerId: z.string().optional(),

  roommates: z.array(z.object({
    userId: z.string(),
    listingId: z.string(),
    isLeaving: z.boolean(),
  })).optional(),

  requests: z.any().array().optional(), // If you want to validate deeply, define structure
  savedBy: z.any().array().optional(),
  listingAmenities: z.any().array().optional(),
  listingRules: z.any().array().optional(),
});

export const RoomMateListingValidation = {
  RoomMateListing,
};

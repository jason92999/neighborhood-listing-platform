import { z } from "zod";

const sponsorSchema = z.object({
  sponsor_id: z.string().min(1),
  name: z.string().min(1),
  category: z.string().min(1),
});

const propertySchema = z
  .object({
    property_id: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    state: z.string(),
    zip_code: z.string().regex(/^[0-9]{5}(-[0-9]{4})?$/),
    price: z.number().min(0),
    bedrooms: z.number().int().min(0),
    bathrooms: z.number().min(0),
    square_feet: z.number().int().min(0),
    amenities: z.array(z.string().min(1)),
    local_sponsors: z.array(sponsorSchema),
  })
  .strict();

const validProperty = {
  property_id: "TEST-001",
  address: "123 Test Street",
  city: "Los Angeles",
  state: "CA",
  zip_code: "90034",
  price: 750000,
  bedrooms: 3,
  bathrooms: 2,
  square_feet: 1800,
  amenities: ["Garage", "Pool"],
  local_sponsors: [
    {
      sponsor_id: "SP-001",
      name: "Test Sponsor",
      category: "Home Services",
    },
  ],
};

const tests = [
  {
    name: "Valid property",
    data: validProperty,
    shouldPass: true,
  },
  {
    name: "Missing property_id",
    data: Object.fromEntries(
      Object.entries(validProperty).filter(([key]) => key !== "property_id")
    ),
    shouldPass: false,
  },
  {
    name: "Negative price",
    data: {
      ...validProperty,
      price: -100,
    },
    shouldPass: false,
  },
  {
    name: "Bad ZIP code",
    data: {
      ...validProperty,
      zip_code: "123",
    },
    shouldPass: false,
  },
  {
    name: "Unknown property field",
    data: {
      ...validProperty,
      unknown_field: "not allowed",
    },
    shouldPass: false,
  },
];

let passed = 0;

for (const test of tests) {
  const result = propertySchema.safeParse(test.data);
  const testPassed = result.success === test.shouldPass;

  if (testPassed) {
    console.log(`PASS: ${test.name}`);
    passed++;
  } else {
    console.log(`FAIL: ${test.name}`);
  }
}

console.log(`\n${passed}/${tests.length} tests passed.`);

if (passed !== tests.length) {
  process.exit(1);
}

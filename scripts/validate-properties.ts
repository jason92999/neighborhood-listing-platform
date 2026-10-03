import fs from "fs";
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
state: z.enum(["CA"]),
zip_code: z.string().regex(/^[0-9]{5}(-[0-9]{4})?$/),
price: z.number().min(0),
bedrooms: z.number().int().min(0),
bathrooms: z.number().min(0),
square_feet: z.number().int().min(0),
amenities: z.array(z.string().min(1)),
local_sponsors: z.array(sponsorSchema),
})
.strict();

const filePath = "src/data/generated/properties-valid.json";

const rawData = fs.readFileSync(filePath, "utf-8");
const data = JSON.parse(rawData);

const result = z.array(propertySchema).safeParse(data);

if (result.success) {
console.log("Validation passed: all property records are valid.");
} else {
console.log("Validation failed.");
console.log(JSON.stringify(result.error.issues, null, 2));
process.exit(1);
}

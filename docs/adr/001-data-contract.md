# ADR 001: Property Data Contract

## Context

The project needs a consistent structure for property data.

The data includes properties, sponsors, and the relationship between them. The JSON Schema and Zod validation are used to make sure the data follows the expected structure.

## Decision

I decided to use JSON Schema for the property data structure and Zod for validation.

Amenities will stay as an array of controlled strings to keep the data simple and consistent.

## Alternatives

- Free-text amenities: simple, but could lead to inconsistent names.
- Separate Amenity table: more normalized, but adds more complexity.
- Controlled amenity values: keeps the JSON simple and makes values more consistent.

## Consequences

This approach keeps the project simple while providing consistent property data.

Zod can catch invalid data before it is used by the application.
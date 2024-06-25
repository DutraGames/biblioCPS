import { faker } from "@faker-js/faker";

export const bannerData = Array.from({ length: 5 }).map(() => {
  return {
    id: faker.number.int({ min: 1, max: 100 }),

    image: faker.image.urlLoremFlickr({ category: "book" }),
  };
});

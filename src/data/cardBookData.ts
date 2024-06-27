import { faker } from "@faker-js/faker";

export const cardBookData = Array.from({ length: 10 }).map(() => {
  return {
    id: faker.number.int({ min: 1, max: 100 }),
    image: faker.image.urlLoremFlickr({ width: 100, height: 150 }),
    title: faker.company.name(),
    author: faker.person.fullName(),
  };
});

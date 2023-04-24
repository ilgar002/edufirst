import { v4 as uuidv4 } from "uuid";
export const navigations = [
  {
    id: uuidv4(),
    head: {
      text: "about",
      slug: "",
    },
    child: [
      {
        id: uuidv4(),
        text: "about esm",
        slug: "about",
      },
      {
        id: uuidv4(),
        text: "our mission",
        slug: "mission",
      },
      {
        id: uuidv4(),
        text: "what is the singapore math?",
        slug: "about",
      },
    ],
  },
  {
    id: uuidv4(),
    head: {
      text: "teachers",
      slug: "",
    },
    child: [
      {
        text: "about",
        slug: "about",
      },
      {
        text: "about esm",
        slug: "about",
      },
      {
        text: "what is the singapore math?",
        slug: "about",
      },
    ],
  },
  {
    id: uuidv4(),

    head: {
      text: "Homeschoolers",
      slug: "",
    },
    child: [
      {
        text: "about",
        slug: "about",
      },
      {
        text: "about esm",
        slug: "about",
      },
      {
        text: "what is the singapore math?",
        slug: "about",
      },
    ],
  },
  {
    id: uuidv4(),

    head: {
      text: "program",
      slug: "",
    },
    child: [
      {
        text: "about",
        slug: "about",
      },
      {
        text: "about esm",
        slug: "about",
      },
      {
        text: "what is the singapore math?",
        slug: "about",
      },
    ],
  },
  {
    id: uuidv4(),

    head: {
      text: "contact us",
      slug: "contact-us",
    },
  },
  {
    id: uuidv4(),

    head: {
      text: "blog",
      slug: "about",
    },
  },
];

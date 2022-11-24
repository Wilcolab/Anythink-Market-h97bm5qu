//TODO: seeds script should come here, so we'll be able to put some data in our local env
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const isProduction = process.env.NODE_ENV === "production";

if (!process.env.MONGODB_URI) {
  console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}

mongoose.connect(process.env.MONGODB_URI);
if (isProduction) {
} else {
  mongoose.set("debug", true);
}

const User = require("../models/User");
const Item = require("../models/Item");
const Comment = require("../models/Comment");

const testUser = () => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    bio: faker.lorem.paragraph(),
    image: faker.image.avatar(),
    role: "user",
    favorites: [],
    following: [],
  };
};

const testItem = () => {
  const title = faker.commerce.productName() + " " + faker.datatype.uuid();
  return {
    title,
    slug: faker.helpers.slugify(title),
    description: faker.commerce.productDescription(),
    image: faker.image.image(),
    tagList: title.split(" "),
    comments: [],
  };
};

const testComment = () => {
  return {
    body: faker.lorem.paragraph(),
    seller: User.findOne()._id,
    item: Item.findOne()._id,
  };
};

const seedTestData = async () => {
  await User.deleteMany({});
  await Item.deleteMany({});
  await Comment.deleteMany({});
  await User.insertOne(testUser);
  await Item.insertOne(testItem);
  await Comment.insertOne(testComment);
  console.log("Database seeded");
  mongoose.connection.close();
};

seedTestData()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });

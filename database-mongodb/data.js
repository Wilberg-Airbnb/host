const faker = require('faker');

const generateLangs = () => {
  let languages = [];
  let count = faker.random.number(4);

  if (count === 0) {
    return;
  }

  while(languages.length < count) {
    languages.push(faker.lorem.word());
  }

  return languages;
};


const generateHosts = () => {

  let hosts = [];
  let responseTime = ['within an hour', 'within a few hours', 'within 12 hours', 'within 24 hours'];
  let listingIds = new Array(100).fill(null).map((element, index) => (index));
  let shuffledIds = faker.helpers.shuffle(listingIds);

  for (let hostId = 0; hostId < 50; hostId++ ) {

    hosts.push({
      "hostId": hostId,
      "listingId": [shuffledIds.pop()],
      "fullName": faker.name.findName(),
      "joined": faker.date.past(),
      "photoUrl": faker.image.people(),
      "superhost": faker.random.boolean(),
      "verification": faker.random.arrayElement(['Verified', 'Identity verified']),
      "description": faker.lorem.paragraph(),
      "duringYourStay": faker.random.arrayElement([null, faker.lorem.paragraph()]),
      "languages": generateLangs(),
      "responseRate": faker.random.number(100),
      "responseTime": faker.random.arrayElement(responseTime)
    });
  }

  while(shuffledIds.length > 0){

    let randomIndex = faker.random.number(49);
    let id = shuffledIds.pop();
    hosts[randomIndex].listingId.push(id);

  }

  return hosts;

};

module.exports.generateHosts = generateHosts;
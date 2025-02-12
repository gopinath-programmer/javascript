import _ from "lodash";
const dataJson = [
  {
    id: 4,
    date: "2024-07-27",
    price: 165,
    name: "Hotel City Center",
  },
  {
    id: 1,
    date: "2024-07-27",
    price: 135,
    name: "Hotel Sunshine",
  },
  {
    id: 1,
    date: "2024-07-28",
    price: 140,
    name: "Hotel Sunshine",
  },
  {
    id: 5,
    date: "2024-07-27",
    price: 240,
    name: "Hotel Lakeside",
  },
  {
    id: 2,
    date: "2024-07-28",
    price: 240,
    name: "Hotel Ocean View",
  },
  {
    id: 2,
    date: "2024-07-31",
    price: 260,
    name: "Hotel Ocean View",
  },
  {
    id: 5,
    date: "2024-07-24",
    price: 225,
    name: "Hotel Lakeside",
  },
  {
    id: 4,
    date: "2024-07-23",
    price: 150,
    name: "Hotel City Center",
  },
  {
    id: 5,
    date: "2024-07-26",
    price: 235,
    name: "Hotel Lakeside",
  },
  {
    id: 3,
    date: "2024-07-26",
    price: 195,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 4,
    date: "2024-07-25",
    price: 160,
    name: "Hotel City Center",
  },
  {
    id: 1,
    date: "2024-08-01",
    price: 155,
    name: "Hotel Sunshine",
  },
  {
    id: 4,
    date: "2024-07-29",
    price: 175,
    name: "Hotel City Center",
  },
  {
    id: 4,
    date: "2024-07-28",
    price: 170,
    name: "Hotel City Center",
  },
  {
    id: 2,
    date: "2024-07-24",
    price: 210,
    name: "Hotel Ocean View",
  },
  {
    id: 2,
    date: "2024-07-30",
    price: 250,
    name: "Hotel Ocean View",
  },
  {
    id: 4,
    date: "2024-07-24",
    price: 155,
    name: "Hotel City Center",
  },
  {
    id: 1,
    date: "2024-07-24",
    price: 125,
    name: "Hotel Sunshine",
  },
  {
    id: 3,
    date: "2024-07-23",
    price: 180,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 4,
    date: "2024-08-01",
    price: 185,
    name: "Hotel City Center",
  },
  {
    id: 5,
    date: "2024-07-23",
    price: 220,
    name: "Hotel Lakeside",
  },
  {
    id: 5,
    date: "2024-07-31",
    price: 255,
    name: "Hotel Lakeside",
  },
  {
    id: 2,
    date: "2024-07-23",
    price: 200,
    name: "Hotel Ocean View",
  },
  {
    id: 1,
    date: "2024-07-23",
    price: 120,
    name: "Hotel Sunshine",
  },
  {
    id: 3,
    date: "2024-08-01",
    price: 220,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 3,
    date: "2024-07-30",
    price: 210,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 3,
    date: "2024-07-28",
    price: 200,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 5,
    date: "2024-07-30",
    price: 250,
    name: "Hotel Lakeside",
  },
  {
    id: 5,
    date: "2024-07-29",
    price: 245,
    name: "Hotel Lakeside",
  },
  {
    id: 1,
    date: "2024-07-25",
    price: 130,
    name: "Hotel Sunshine",
  },
  {
    id: 5,
    date: "2024-08-01",
    price: 260,
    name: "Hotel Lakeside",
  },
  {
    id: 3,
    date: "2024-07-31",
    price: 215,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 2,
    date: "2024-07-27",
    price: 230,
    name: "Hotel Ocean View",
  },
  {
    id: 2,
    date: "2024-08-01",
    price: 270,
    name: "Hotel Ocean View",
  },
  {
    id: 4,
    date: "2024-07-30",
    price: 180,
    name: "Hotel City Center",
  },
  {
    id: 3,
    date: "2024-07-24",
    price: 185,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 2,
    date: "2024-07-26",
    price: 220,
    name: "Hotel Ocean View",
  },
  {
    id: 5,
    date: "2024-07-25",
    price: 230,
    name: "Hotel Lakeside",
  },
  {
    id: 3,
    date: "2024-07-25",
    price: 190,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 1,
    date: "2024-07-29",
    price: 145,
    name: "Hotel Sunshine",
  },
  {
    id: 3,
    date: "2024-07-29",
    price: 205,
    name: "Hotel Mountain Retreat",
  },
  {
    id: 1,
    date: "2024-07-31",
    price: 150,
    name: "Hotel Sunshine",
  },
];

let detailsNeeded = [];
const dates = _.sortBy(_.uniq(_.map(dataJson, "date")));
const header = _.flatten([
  "id",
  "name",
  dates,
  "Highest Consecutive Of Dates",
  "Date of Maximum price",
  "Maximum price",
]);
function convertcsv(data) {
  const groupByID = _.groupBy(data, "id");
  const elementsOfTheBody = _.map(groupByID, (details) => {
    const { id, name: gopi } = details[0];
    const pricesByDate = _.fromPairs(
      _.map(details, (object) => [object.date, object.price])
    );
    const prices = _.map(dates, (date) =>
      pricesByDate[date] ? pricesByDate[date] : null
    );
    let count = 0;
    let priceCount = [];
    const highestCount = _.map(prices, (price) => {
      if (price == null) {
        priceCount.push(count);
        count = 0;
      } else {
        count += 1;
      }
    });
    priceCount.push(count);
    const dateOfHighestPrice = _.find(
      details,
      (detail) => detail.price == _.max(prices)
    );
    return _.flatten([
      id,
      gopi,
      prices,
      _.max(prices),
      _.max(priceCount),
      dateOfHighestPrice.date,
      _.max(prices),
    ]);
  });
  return elementsOfTheBody;
}
const body = convertcsv(dataJson);
detailsNeeded.push([header], body);
detailsNeeded = _.flatten(detailsNeeded);
console.log(detailsNeeded);

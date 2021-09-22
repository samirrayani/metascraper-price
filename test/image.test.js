const got = require("got");
const metascraper = require("metascraper")([require("..")()]);

test("live test amazon", async () => {
  const targetUrl = "https://www.amazon.com/dp/B07DN6CFYF/ref=tsm_1_tp_tc";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.image).toBe(
    "https://images-na.ssl-images-amazon.com/images/I/71jrApkhMaL.__AC_SX300_SY300_QL70_ML2_.jpg"
  );
}, 10000);

test("live test fireclaytile", async () => {
  const targetUrl =
    "https://www.fireclaytile.com/tile/colors/detail/white-wash/tile-field-3-x-3";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.image).toBe(
    "https://assets.fireclaytile.com/transforms/amazons3/colors/239835/17ebb_48d74.jpg"
  );
}, 10000);

test("live test wayfair", async () => {
  const targetUrl =
    "https://www.wayfair.com/decor-pillows/pdp/ivy-bronx-epperly-frameless-lighted-bathroom-vanity-mirror-w004213284.html?cjevent=4427767414df11ec804c46780a1c0e11&refID=-CJ5324605&PID=CJ9185480";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.image).toBe(
    "https://secure.img1-fg.wfcdn.com/im/50168724/resize-h600-w600%5Ecompr-r85/1294/129449826/Epperly+Frameless+Lighted+Bathroom+%2F+Vanity+Mirror.jpg"
  );
}, 10000);

test("live test bestbuy", async () => {
  const targetUrl =
    "https://www.bestbuy.com/site/lg-2-0-cu-ft-over-the-range-microwave-with-sensor-cooking-printproof-matte-black-stainless-steel/6113238.p?skuId=6113238";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.image).toBe(
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6113/6113238_sd.jpg"
  );
}, 10000);

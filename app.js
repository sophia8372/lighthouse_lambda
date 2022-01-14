    const chromium = require("chrome-aws-lambda");
    const chrome = await chromium.puppeteer.launch({
    args: [
      ...chromium.args,
      "--disable-dev-shm-usage",
      "--remote-debugging-port=9222",
    ],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
});
const options = {
    logLevel: "info",
    output: "html",
    onlyCategories: ["performance"],
    preset: "mobile",
    port: 9222,
  };
  const runnerResult = await lighthouse(`${body.url}`, options);
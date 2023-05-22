/* eslint-disable function-paren-newline */
/* eslint-disable no-restricted-syntax */
/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
import playwright from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  try {
    await page.goto('https://www.melon.com/chart/index.htm', {
      waitUntil: 'networkidle',
    });

    // 모든 .lst50과 lst100 요소를 가져옵니다.
    const top100 = await page.evaluate(() => {
      // 1위~50위까지
      const lst50 = Array.from(document.querySelectorAll('.lst50')).map(
        song => song.innerText
      );
      // 501~100위까지
      const lst100 = Array.from(document.querySelectorAll('.lst100')).map(
        song => song.innerText
      );
      return [...lst50, ...lst100];
    });

    const jsonData = [];
    // top100 데이터를 json형식에 맞게 포맷하고 저장합니다.
    for (const songData of top100) {
      const splitData = songData.split('\n');
      jsonData.push({
        순위: `${splitData[1]}위`,
        곡정보: {
          곡명: `${splitData[10]}`,
          가수: `${splitData[11]}`,
          앨범: `${splitData[13]}`,
        },
        좋아요: `${splitData[17]}`,
      });
    }

    await browser.close();

    try {
      // json객체를 문자열로 변환
      const jsonDataString = JSON.stringify(jsonData, null, 2);
      // melonTop100.json파일에 저장
      fs.writeFileSync('meloneTop100.json', jsonDataString);
    } catch (error) {
      console.log(jsonData);
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
})();

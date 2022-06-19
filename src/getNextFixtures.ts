const puppeteer = require('puppeteer');

export const getNextFixture = async (source_url: string) => {
  const browser = await puppeteer.launch({headless: false, defaultViewport: null});
  const page = await browser.newPage();
  await page.goto(source_url);
  await page.waitForSelector(".post-lista-jogos__tbody")
  const nextFixture = await page.evaluate(()=> {
    
    const date = document.querySelector('.post-lista-jogos__campeonato--edicao')?.innerHTML
    const homeTeamAbbr = document.querySelector('.post-lista-jogos__org-name.post-lista-jogos__org-name--mandante')?.textContent
    const homeTeamBadge_url = document.querySelector('.post-lista-jogos__org-badge.post-lista-jogos__org-badge--mandante')?.getAttribute('src')
    
    const awayTeamAbbr = document.querySelector('.post-lista-jogos__org-name.post-lista-jogos__org-name--visitante')?.textContent
    const awayTeamBadge_url = document.querySelector('.post-lista-jogos__org-badge.post-lista-jogos__org-badge--visitante')?.getAttribute('src')
    
    return {
      date,
      home: {
        homeTeamAbbr,
        homeTeamBadge_url
      },
      away: {
        awayTeamAbbr,
        awayTeamBadge_url
      }
    }
  })

  await browser.close();
  return nextFixture
};

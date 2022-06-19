import * as cheerio from 'cheerio';
import axios from 'axios'

export const latestsNews = async(source_url: string) =>{
  const news = <any>[]
  const response = await axios.get(source_url)
  
  const html = response.data 
  const $ = cheerio.load(html)
    

    $(".feed-post-body", html).each(function() {
      const title = $(this).find('._evt').text()
      const link = $(this).find('._evt').find('a').attr('href')
      const img_url = $(this).find('.feed-media-wrapper').find('img').attr('src')
     
      news.push({
        title,
        link,
        img_url
      })
    })

  return news
}


import cron from 'node-cron'
import { PrismaClubsRepository } from './repositories/prisma/prisma-clubs-repository'
import { latestsNews } from './getLatestsNews'
import { PrismaNewsRepository } from './repositories/prisma/prisma-news-repository'

async function saveNewsToDb() {
  const prismaClubsRepository = new PrismaClubsRepository()
  const prismaNewsRepository = new PrismaNewsRepository()
  const clubs = await prismaClubsRepository.findAll()
  await prismaNewsRepository.deleteAll()

  console.log(`Searching news news`)
  for (const club of clubs) {
    const latestsNewsList = await latestsNews(club.source_url)
    for (const news of latestsNewsList) {
      await prismaNewsRepository.create({title: news.title, link: news.link, image_url: news.image_url , club_id: club.id, source_name: 'globoesporte', source_img: 'https://s2.glbimg.com/qAiq9Ny0KA4EmGK-aiRLQ8-y3-s=/0x0:2048x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/f/1/ctmjQ9SOypbLkmmJyMuw/ge.png'})
    }
  }
}

const task = cron.schedule(' 35 18 * * *', ()=> {
  saveNewsToDb()
})


export function getNewsJob() {
  task.start()
}

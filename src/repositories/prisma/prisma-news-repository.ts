import { prisma } from "../../prisma";
import { NewsCreateData, NewsRepository } from "../news-repository";

export class PrismaNewsRepository implements NewsRepository {
  async deleteAll () {
    await prisma.news.deleteMany({})
  }
  async create ({title, link, source_img, source_name, club_id, image_url}: NewsCreateData) {
    await prisma.news.create({
      data: {
        title,
        link,
        source_img,
        source_name,
        club_id,
        image_url
      }
    })
  }

  async findAll () {
    const allNews = await prisma.news.findMany()
    return allNews
  };
 async findByClub (club_id: string) {
  const news = await prisma.news.findMany({
    where: {
      club_id
    }
  })

  return news
  };

}
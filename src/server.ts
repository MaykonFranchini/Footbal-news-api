import { prisma } from "./prisma";
import express from "express";
import { latestsNews } from "./getLatestsNews";
import { getNextFixture } from "./getNextFixtures";



const app = express();
const PORT = 3333
app.use(express.json())


// app.post("/clubs", async (req, res) => {
//   const { clubs } = req.body
//   console.log(clubs)
//   clubs.forEach(async(club: { name: string; source_url: string; logo_url: string; }) => {
//     await prisma.club.create({
//     data: {
//       name: club.name,
//       source_url: club.source_url,
//       logo_url: club.logo_url
//     }
//   })})

//   return res.status(201).send('ok')
// })

app.get('/clubs', async(req, res) => {
  const brazilianClubsSerieA = await prisma.club.findMany({
    where: {
          location: "serie-a"
        },
    orderBy: {
      name: "asc"
    }
  })

  const brazilianClubsSerieB = await prisma.club.findMany({
    where: {
      location: "serie-b"
    },
    orderBy: {
      name: "asc"
    }
  })

  const europeanClubs = await prisma.club.findMany({
    where: {
      location: "europa"
    },
    orderBy: {
      name: "asc"
    }
  })

  res.json({data: { brazilianClubsSerieA, brazilianClubsSerieB, europeanClubs }})
})

app.get('/latestsnews', async(req, res)=> {
  const  { source_url } = req.body
  const news = await latestsNews(source_url)
  return res.json({data: news})
})

// app.get('/nextfixture', async(req, res)=> {
//   const  { source_url } = req.body

//   const nextFixture = await getNextFixture(source_url).catch(err => err)

//   return res.json({data: nextFixture})
// })


app.listen(PORT, () => {
  console.log(`Server is runnung at port ${PORT}.` )
})

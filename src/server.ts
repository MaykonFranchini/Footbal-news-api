import { prisma } from "./prisma";
import express from "express";
import cors from 'cors'
import { latestsNews } from "./getLatestsNews";
import { getNextFixture } from "./getNextFixtures";



const app = express();
app.use(cors());
app.use(express.json())


app.post("/clubs", async (req, res) => {
  const { clubs } = req.body
  console.log(clubs)
  clubs.forEach(async(club: { name: string; source_url: string; logo_url: string; location:string; }) => {
    await prisma.club.create({
    data: {
      name: club.name,
      source_url: club.source_url,
      logo_url: club.logo_url,
      location: club.location,
    }
  })})

  return res.status(201).send('ok')
})

app.get('/clubs', async(req, res) => {
  const clubs = await prisma.club.findMany()

  res.json({ clubs })
})

app.get('/latestsnews/:club', async(req, res)=> {
  const  { club } = req.params
  
  const clubData = await prisma.club.findFirst({
    where: {
      name: club,
    }
  })
  
  const news = await latestsNews(clubData!.source_url)
  return res.json({data: news})
})

app.post('/subscription', async(req, res)=> {
  const { email, club_id, first_name, last_name } = req.body
  const user = await prisma.user.create({
    data: {
      email,
      club_id,
      first_name,
      last_name
    }
  })
  return res.status(201).json({user})
})

app.get('/profile/:club', async(req, res)=> {
  const { club } = req.params
  const data = await prisma.club.findFirst({
    where: {
      name: club
    },
    include: {
      fans: true
    }
  })
  return res.json({data})
})

// app.get('/nextfixture', async(req, res)=> {
//   const  { source_url } = req.body

//   const nextFixture = await getNextFixture(source_url).catch(err => err)

//   return res.json({data: nextFixture})
// })


app.listen(process.env.PORT || 3333, () => {
  console.log('Server is runnung at port.')
})

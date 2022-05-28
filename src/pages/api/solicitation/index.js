export default async function handler(req, res) {
    const resp =  await fetch('https://grauna-teste.herokuapp.com/handler/list')
    const data = await resp.json()
    const solicitation = data.News
        
    res.status(200).json({ data:solicitation })
        
  }
  
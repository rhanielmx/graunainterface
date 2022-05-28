
export default async function handler(req, res) {
    const id = req.query.id
    const resp =  await fetch(`https://grauna-teste.herokuapp.com/admin/solicitation/${id}`)
    const data = await resp.json()
    const solicitation = data.message
        
    res.status(200).json({ data:solicitation })
        
  }
  
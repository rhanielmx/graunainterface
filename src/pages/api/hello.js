// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch(`https://grauna-teste.herokuapp.com/admin/solicitation/3`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
  res.status(200).json({ name: 'John Doe' })
}

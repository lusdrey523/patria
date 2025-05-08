export default function handler(req, res) {
  const news = [
    {
      id: 1,
      title: "Nueva política educativa anunciada",
      summary: "El gobierno lanza un plan para mejorar escuelas.",
      image: "https://via.placeholder.com/300",
      category: "Educación",
    },
    {
      id: 2,
      title: "Campaña de salud pública",
      summary: "Vacunación masiva contra dengue inicia.",
      image: "https://via.placeholder.com/300",
      category: "Salud",
    },
  ];
  res.status(200).json(news);
}

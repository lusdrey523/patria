export default function handler(req, res) {
  const posts = [
    {
      id: 1,
      userName: "Juan Pérez",
      userAvatar: "https://via.placeholder.com/40",
      time: "Hace 2 horas",
      content: "¡Orgulloso de mi comunidad! #CLAP",
    },
    {
      id: 2,
      userName: "María López",
      userAvatar: "https://via.placeholder.com/40",
      time: "Hace 5 horas",
      content: "Necesitamos mejorar el suministro de agua. #Reporte",
    },
  ];
  res.status(200).json(posts);
}

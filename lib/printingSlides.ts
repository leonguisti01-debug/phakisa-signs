export interface Slide {
  image: string;
  title: string;
  description: string;
}

export const printingSlides: Slide[] = [
  {
    image: "/printing/business-cards.jpg",
    title: "Business Cards",
    description:
      "Premium business cards printed on luxury stock with exceptional finishes.",
  },
  {
    image: "/printing/flyers.jpg",
    title: "Flyers",
    description:
      "Promotional flyers that grab attention and deliver results.",
  },
  {
    image: "/printing/posters.jpg",
    title: "Posters",
    description:
      "Large format posters with vibrant colours and crisp detail.",
  },
  {
    image: "/printing/banners.jpg",
    title: "PVC Banners",
    description:
      "Indoor and outdoor banners manufactured for maximum impact.",
  },
  {
    image: "/printing/stickers.jpg",
    title: "Vinyl Stickers",
    description:
      "Premium vinyl stickers for branding, packaging and promotions.",
  },
];
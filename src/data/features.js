import { Sparkles } from 'lucide-react';

const features = [
  { id: 1, title: 'Shelf OCR', description: 'Reads facings from a single aisle photo.', icon: Sparkles, image: '/images/features/shelf-ocr.jpg' },
  { id: 2, title: 'SKU Lists', description: 'Returns a ranked product list for the bay.', icon: Sparkles, image: '/images/features/sku-lists.jpg' },
  { id: 3, title: 'Gap Detection', description: 'Highlights empty slots against the expected planogram.', icon: Sparkles, image: '/images/features/gap-detection.jpg' },
  { id: 4, title: 'Aisle Context', description: 'Category and bay change which catalog the model searches.', icon: Sparkles, image: '/images/features/aisle-context.jpg' },
  { id: 5, title: 'Reset Notes', description: 'Exports a short restock list for the aisle.', icon: Sparkles, image: '/images/features/reset-notes.jpg' },
  { id: 6, title: 'GPU Vision', description: 'Detection runs on accelerated GPUs.', icon: Sparkles, image: '/images/features/gpu-vision.jpg' },
];

export default features;

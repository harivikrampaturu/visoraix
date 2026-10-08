const pricing = [
  {
    id: 1,
    name: 'Starter',
    price: 19,
    period: '/mo',
    description: 'For individuals getting started with Visoraix.',
    features: ['Live demo on the homepage', 'Core exports', 'Email support', 'Commercial use'],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: 39,
    period: '/mo',
    description: 'For people shipping with Visoraix every week.',
    features: ['Everything in Starter', 'Higher monthly limits', 'Priority queue', 'History'],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Studio',
    price: 89,
    period: '/mo',
    description: 'For teams that need seats and an API.',
    features: ['Everything in Pro', 'Team seats', 'API access', 'Priority support'],
    highlighted: false,
  },
];

export const comparisonFeatures = [
  { feature: 'Monthly runs', starter: '40', pro: '200', business: 'Unlimited' },
  { feature: 'Exports', starter: 'Standard', pro: 'High-res', business: 'High-res + API' },
  { feature: 'Seats', starter: '1', pro: '3', business: '10' },
  { feature: 'Support', starter: 'Email', pro: 'Priority', business: 'Priority' },
  { feature: 'Commercial use', starter: 'Yes', pro: 'Yes', business: 'Yes' },
];

export const faqs = [
  {
    question: 'Do you offer a free trial?',
    answer: 'No free trial plan. Use the live demo on the homepage, then subscribe when you are ready.',
  },
  {
    question: 'Is Visoraix an agency or staffing product?',
    answer: 'No. Visoraix is a shelf-vision product. We do not send auditors or sell field services.',
  },
  {
    question: 'Can I use outputs commercially?',
    answer: 'Yes. Paid plans include commercial use of outputs you generate.',
  },
  {
    question: 'What is the refund policy?',
    answer: 'If you are not happy within 14 days of purchase, email support@visoraix.com for a full refund.',
  },
  {
    question: 'Do you claim an NVIDIA partnership?',
    answer: 'No. We use accelerated GPUs for inference where it helps latency. We do not claim partnership status.',
  },
  {
    question: 'How do I buy?',
    answer: 'BUY NOW opens login so you can subscribe. There is no free-trial tier.',
  },
];

export default pricing;

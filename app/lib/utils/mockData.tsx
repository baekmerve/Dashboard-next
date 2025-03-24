const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customers = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    num: 1,
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    num: 2,
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    num: 3,
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    num: 4,
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    num: 5,
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    num: 6,
    customer_id: customers[2].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    num: 7,
    customer_id: customers[0].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    num: 8,
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    num: 9,
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    num: 10,
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    num: 11,
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    num: 12,
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    num: 13,
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenue = [
  { month_name: "Jan", month_number: 1, revenue: 2000 },
  { month_name: "Feb", month_number: 2, revenue: 1800 },
  { month_name: "Mar", month_number: 3, revenue: 2200 },
  { month_name: "Apr", month_number: 4, revenue: 2500 },
  { month_name: "May", month_number: 5, revenue: 2300 },
  { month_name: "Jun", month_number: 6, revenue: 3200 },
  { month_name: "Jul", month_number: 7, revenue: 3500 },
  { month_name: "Aug", month_number: 8, revenue: 3700 },
  { month_name: "Sep", month_number: 9, revenue: 2500 },
  { month_name: "Oct", month_number: 10, revenue: 2800 },
  { month_name: "Nov", month_number: 11, revenue: 3000 },
  { month_name: "Dec", month_number: 12, revenue: 4800 },
];

const refundData = [
  {
    reason: "Product Defect",
    total: 50,
    fullMark: 150,
  },
  {
    reason: "Wrong Item Delivery",
    total: 98,
    fullMark: 150,
  },
  {
    reason: "Better Price Elsewhere",
    total: 86,
    fullMark: 150,
  },
  {
    reason: "Changed of Mind",
    total: 99,
    fullMark: 150,
  },
  {
    reason: "Incorrect Size/Color",
    total: 85,
    fullMark: 150,
  },
  {
    reason: "Late Delivery",
    total: 65,
    fullMark: 150,
  },
];

const countrySalesData = [
  { region: "North America", sales: 120000 },
  { region: "Europe", sales: 95000 },
  { region: "Asia", sales: 105000 },
  { region: "South America", sales: 70000 },
  { region: "Africa", sales: 45000 },
  { region: "Australia", sales: 60000 },
];

export { users, customers, invoices, revenue, refundData, countrySalesData };

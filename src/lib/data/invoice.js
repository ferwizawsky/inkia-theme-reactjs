export const invoice = {
  invoice: "",
  paymentStatus: "",
  totalAmount: "",
  paymentMethod: "",
};

export const meta = {
  current_page: 1,
  from: 1,
  last_page: 4,
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "https://api-event.shiny.my.id/api/user?page=1",
      label: "1",
      active: true,
    },
    {
      url: "https://api-event.shiny.my.id/api/user?page=2",
      label: "2",
      active: false,
    },
    {
      url: "https://api-event.shiny.my.id/api/user?page=3",
      label: "3",
      active: false,
    },
    {
      url: "https://api-event.shiny.my.id/api/user?page=4",
      label: "4",
      active: false,
    },
    {
      url: "https://api-event.shiny.my.id/api/user?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  path: "https://api-event.shiny.my.id/api/user",
  per_page: 10,
  to: 10,
  total: 40,
};

export const listInvoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV008",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV009",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV010",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
];

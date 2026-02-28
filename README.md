# Payoo App

This repository contains a simple front-end prototype of a mobile
financial services (MFS) interface called _Payoo_. It is built using
static HTML, Tailwind/DaisyUI, and plain JavaScript. The purpose of the
project is to demonstrate UI workflows such as logging in, adding funds,
withdrawing cash, sending money to other users, and tracking transactions.

> **Important**: all operations are client-side only. There is no backend
> authentication or persistence. Do **not** use real credentials or
> financial data with this demo.

## Features

- **Login page** with hard-coded credentials
- **Home dashboard** showing available balance and navigation icons
- **Add Money** from a bank account (simulates deposit)
- **Cash Out** to an agent number
- **Transfer Money** to another user’s mobile number
- **Get Bonus** – redeem a voucher code (e.g. `bonus100`, `bonus500`) to receive that amount as a reward (requires PIN)
- **Pay Bill** – pay a utility bill by choosing a biller from the dropdown, entering account number and amount (requires PIN)
- **Transaction History** logs every action performed during the
  session
- **PIN verification** on every transaction (PIN `5466` is used by default)

## Project structure

```
./
├── index.html           # login screen
├── home.html            # main dashboard after login
├── tailwind.config.js   # optional Tailwind configuration
├── README.md            # this file
├── payoo-resources/     # assets, images, Figma mockups
└── script/              # JavaScript source files
    ├── addMoney.js      # add money workflow
    ├── cashout.js       # cash out workflow
    ├── login.js         # login validation
    ├── machine.js       # shared DOM helpers
    ├── transfer_money.js# transfer workflow
    ├── get_bonus.js      # bonus claim workflow (voucher codes supported)
    └── pay_bill.js       # bill payment workflow
```

Each HTML and script file contains comments explaining the role of its
elements and functions, making the project easy to read and extend.

## Usage

Simply open `index.html` in a web browser. The UI loads all styles and
scripts from CDNs, so no build step or server is required. Keep the
`payoo-resources` folder alongside the HTML files to ensure images load.

1. Enter mobile number `01571164022` and PIN `5466` to log in.
2. From the dashboard, click an icon to show the corresponding form.
3. Perform add money, cashout, or transfer operations and observe balance
   and history updates.

Enjoy experimenting, but remember this is a mockup — it does not
communicate with any real payment systems.

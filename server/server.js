const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let orders = []
let bookings = []

app.get("/", (req, res) => {
  res.send("Chand Restaurant Server is Running")
})

app.post("/api/orders", (req, res) => {
  const order = {
    id: Date.now(),
    ...req.body,
    status: "Pending",
    createdAt: new Date(),
  }

  orders.push(order)

  res.json({
    success: true,
    message: "Order saved successfully",
    order,
  })
})

app.get("/api/orders", (req, res) => {
  res.json(orders)
})

app.post("/api/bookings", (req, res) => {
  const booking = {
    id: Date.now(),
    ...req.body,
    status: "Pending",
    createdAt: new Date(),
  }

  bookings.push(booking)

  res.json({
    success: true,
    message: "Booking saved successfully",
    booking,
  })
})

app.get("/api/bookings", (req, res) => {
  res.json(bookings)
})

app.listen(5000, () => {
  console.log("Chand Restaurant Server running on port 5000")
})
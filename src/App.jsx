import { useEffect, useRef, useState } from "react"
import "./App.css"
import restaurantImage from "./assets/restaurant.jpg"

const menuCategories = [
  {
    title: "CHICKEN",
    items: [
      ["Fish Fry", 1400],
      ["Chargha Full", 1440],
      ["Chand Special Chicken Dry", 1500],
      ["Chicken Mangori", 900],
      ["Chicken Dhaka", 900],
      ["Chicken Drum Stick", 800],
      ["Chicken Pakora (8 Piece)", 800],
      ["Chicken Vallejo", 1100],
    ],
  },
  {
    title: "CHICKEN (B.B.Q / GRILL)",
    items: [
      ["Fish Grill", 1400],
      ["Qalmi Tikkah", 550],
      ["Chicken Piece", 360],
      ["Malai Botti", 200],
      ["Green Boti", 200],
      ["Kastori Boti", 220],
      ["Chicken Tikka", 150],
      ["Reshmi Kebab", 150],
      ["Labnani Kebab", 180],
      ["Turkish Kebab", 200],
      ["B.B.Q Plater", 2150],
    ],
  },
  {
    title: "CHINESE DISH",
    items: [
      ["Chicken Manchurian", 800],
      ["Chicken Chili Dry", 950],
      ["Chicken Black Paper", 750],
      ["Chicken Chili", 750],
    ],
  },
  {
    title: "BATAIR",
    items: [
      ["Batair Qorma", 450],
      ["Batair Handi", 2200],
      ["Barair Rost", 450],
    ],
  },
  {
    title: "CHICKEN",
    items: [
      ["Desi Murgh Karahi", 3400],
      ["Chicken Karahi", 1400],
      ["Chicken Handi", 1500],
      ["Chicken Shanwari", 1500],
      ["Chicken Arabian", 1850],
      ["Chicken Khayber Handi", 1800],
      ["Chicken Shah Jehani", 2000],
      ["Nawabi Handi", 1800],
      ["White Chicken", 1600],
      ["Chicken Bharta", 1000],
      ["Chicken Achari Handi", 1580],
      ["Chicken Bonless Handi", 1600],
      ["Chicken White Bonless Handi", 1700],
      ["Chicken Kashmiri Handi", 1800],
      ["Chicken Patiala Handi", 1800],
      ["Chicken Madrasi Handi", 1800],
      ["Chicken Haidrabadi Handi", 1800],
      ["Chicken Podina Handi", 1750],
      ["Arbi Chicken Rost", 1600],
      ["Chicken Harri Mirch", 1600],
      ["Chicken Green Chilli With Lemon", 1600],
      ["Chicken Qeema", 800],
      ["Green Chicken", 900],
      ["Tawa Chicken", 900],
      ["Chicken Masala", 550],
      ["Chicken Shahi Qorma", 550],
      ["Chicken Qorma", 300],
      ["Chicken Jalfrezi", 800],
      ["Chicken Genjer", 800],
      ["Chicken Achar", 550],
      ["Kabab Masala", 1000],
    ],
  },
  {
    title: "RICE (چاول)",
    items: [
      ["Chicken Fried Rice", 760],
      ["Chicken Masala Rice", 760],
      ["Chicken Special Rice", 800],
      ["Chicken Shashlik", 1000],
      ["Jungli Pulao", 1000],
      ["Afghani Pulao", 1000],
      ["Mutton Pulao", 900],
      ["Beef Palao", 900],
      ["Kashmeri Pulao", 750],
      ["Chicken Baryani", 750],
      ["Bombay Baryani", 750],
      ["Vegetable Rice", 600],
      ["Egg Fried Rice", 600],
    ],
  },
  {
    title: "MUTTON (مٹن)",
    items: [
      ["Mutton Karahi", 3400],
      ["Mutton Handi", 3400],
      ["White Mutton", 3500],
      ["Mutton Shanwari Karahi", 3500],
      ["Mutton Ginjer", 1300],
      ["Mutton Jalfrazi", 1300],
      ["Mutton Masala", 900],
      ["Mutton Qorma", 800],
      ["Mutton Namkeen Dry", 3000],
      ["Mutton Steam Roast", 3400],
      ["Mutton Rosh", 900],
    ],
  },
  {
    title: "BEEF (بیف)",
    items: [
      ["Beef Karahi", 2200],
      ["Beef Handi", 2200],
      ["White Beef", 2400],
      ["Beef Shanwari", 2300],
      ["Beef Masala", 600],
      ["Beef Qorma", 500],
      ["Beef Namkeen Dry", 1800],
    ],
  },
  {
    title: "SOUP",
    items: [
      ["Chicken Corn Soup", 800],
      ["Chicken Hot & Sour Soup", 840],
      ["Chand Special Soup", 860],
      ["Thai Soup", 800],
    ],
  },
  {
    title: "OTHERS",
    items: [
      ["Dall", 200],
      ["Vegetable", 200],
      ["Roti, Raita, Salad", 130],
      ["Kachoomar Salad", 200],
      ["Fruit Salad", 700],
      ["Shahi Dall", 600],
    ],
  },
  {
    title: "SOFT DRINKS",
    items: [
      ["All Cold Drinks", 70],
      ["Coffee", 100],
      ["Mix Tea", 100],
      ["Green Tea", 100],
      ["Fresh Lime", 100],
      ["Mineral Water", 120],
    ],
  },
  {
    title: "SWEETS",
    items: [
      ["Fruit Custard", 140],
      ["Kheer", 140],
    ],
  },
  {
    title: "CHAAND SPECIAL",
    items: [
      ["Special Desi Murgh Karahi", 3400],
      ["Special Mutton Chilli Dry", 3000],
      ["Special Mutton Steam Roast", 3400],
    ],
  },
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [cart, setCart] = useState([])
  const [showBooking, setShowBooking] = useState(false)

  const cartRef = useRef(null)

  const [customerName, setCustomerName] = useState("")
  const [phone, setPhone] = useState("")
  const [orderType, setOrderType] = useState("Dine In")
  const [address, setAddress] = useState("")

  const [bookingName, setBookingName] = useState("")
  const [bookingPhone, setBookingPhone] = useState("")
  const [bookingDate, setBookingDate] = useState("")
  const [bookingTime, setBookingTime] = useState("")
  const [guests, setGuests] = useState("")

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

   const addToCart = (item) => {
  const existingItem = cart.find(
    (cartItem) => cartItem.name === item[0]
  )

  if (existingItem) {
    setCart(
      cart.map((cartItem) =>
        cartItem.name === item[0]
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      )
    )
  } else {
    setCart([
      ...cart,
      {
        name: item[0],
        price: item[1],
        quantity: 1,
      },
    ])
  }
}
  const increaseQuantity = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }

  const decreaseQuantity = (name) => {
    setCart(
      cart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeItem = (name) => {
    setCart(cart.filter((item) => item.name !== name))
  }
useEffect(() => {
  if (cart.length > 0) {
    setTimeout(() => {
      document
        .querySelector(".cart-box")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    }, 100)
  }
}, [cart])
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Please add an item first")
      return
    }

    if (!customerName || !phone || !address) {
      alert("Please fill all customer details")
      return
    }

    let orderText = ""

    cart.forEach((item) => {
      orderText +=
        item.name +
        " x " +
        item.quantity +
        " - Rs. " +
        item.price * item.quantity +
        "\n"
    })

    const message =
      "Hello Chand Restaurant!\n\n" +
      "Customer Name: " +
      customerName +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Order Type: " +
      orderType +
      "\n" +
      "Address / Table: " +
      address +
      "\n\n" +
      "ORDER:\n" +
      orderText +
      "\nTOTAL: Rs. " +
      total

    const whatsappUrl =
      "https://api.whatsapp.com/send?phone=923017923405&text=" +
      encodeURIComponent(message)

    window.location.href = whatsappUrl
  }

  const bookTable = () => {
    if (
      !bookingName ||
      !bookingPhone ||
      !bookingDate ||
      !bookingTime ||
      !guests
    ) {
      alert("Please fill all booking details")
      return
    }

    const message =
      "Hello Chand Restaurant!\n\n" +
      "I want to book a table.\n\n" +
      "Name: " +
      bookingName +
      "\nPhone: " +
      bookingPhone +
      "\nDate: " +
      bookingDate +
      "\nTime: " +
      bookingTime +
      "\nGuests: " +
      guests

    const whatsappUrl =
      "https://api.whatsapp.com/send?phone=923017923405&text=" +
      encodeURIComponent(message)

    window.location.href = whatsappUrl
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">CHAND</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="book-btn"
          onClick={() => setShowBooking(true)}
        >
          Book a Table
        </button>
      </header>

      <main className="hero animate-on-scroll" id="home">
        <div className="hero-image">
          <img src={restaurantImage} alt="Chand Restaurant" />
        </div>

        <div className="hero-content">
          <p className="tagline">AUTHENTIC DESI TASTE</p>

          <h1>
            Taste That
            <br />
            <span>Brings People Together</span>
          </h1>

          <p className="description">
            Experience the rich flavors, traditional recipes and warm
            hospitality of Chand Restaurant.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Menu</button>

            <button
              className="secondary-btn"
              onClick={() => setShowBooking(true)}
            >
              Book a Table
            </button>
          </div>
        </div>
      </main>

      <div
        ref={cartRef}
        className="cart-box animate-on-scroll"
      >
        <h2>Your Order</h2>

        {cart.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <span>{item.name}</span>

                <div className="quantity-box">
                  <button
                    onClick={() => decreaseQuantity(item.name)}
                  >
                    -
                  </button>

                  <strong>{item.quantity}</strong>

                  <button
                    onClick={() => increaseQuantity(item.name)}
                  >
                    +
                  </button>
                </div>

                <strong>
                  Rs. {item.price * item.quantity}
                </strong>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.name)}
                >
                  X
                </button>
              </div>
            ))}

            <div className="customer-form">
              <h3>Customer Details</h3>

              <input
                type="text"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
              >
                <option>Dine In</option>
                <option>Takeaway</option>
                <option>Home Delivery</option>
              </select>

              <input
                type="text"
                placeholder="Address / Table Number"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="total-box">
              <span>Total</span>
              <strong>Rs. {total}</strong>
            </div>

            <button
              className="whatsapp-btn"
              onClick={placeOrder}
            >
              Order on WhatsApp
            </button>
          </>
        )}
      </div>

      <section className="menu-section" id="menu">
        <div className="section-title">
          <p>CHAND RESTAURANT MENU</p>

          <h2>
            Our <span>Menu</span>
          </h2>
        </div>

        <div className="category-buttons">
          <button onClick={() => setSelectedCategory("ALL")}>
            ALL
          </button>

          <button onClick={() => setSelectedCategory("CHICKEN")}>
            CHICKEN
          </button>

          <button onClick={() => setSelectedCategory("MUTTON")}>
            MUTTON
          </button>

          <button onClick={() => setSelectedCategory("BEEF")}>
            BEEF
          </button>

          <button onClick={() => setSelectedCategory("SOUP")}>
            SOUP
          </button>
        </div>

        <div className="menu-list">
          {menuCategories
            .filter(
              (category) =>
                selectedCategory === "ALL" ||
                category.title.includes(selectedCategory)
            )
            .map((category, index) => (
              <div className="menu-category" key={index}>
                <h3>{category.title}</h3>

                <div className="menu-items">
                  {category.items.map((item, itemIndex) => (
                    <div className="menu-item" key={itemIndex}>
                      <span>{item[0]}</span>

                      <strong>Rs. {item[1]}</strong>

                      <button
                        className="order-btn"
                        onClick={() => addToCart(item)}
                      >
                        Order
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {showBooking && (
        <div className="booking-overlay">
          <div className="booking-modal">
            <button
              className="close-booking"
              onClick={() => setShowBooking(false)}
            >
              X
            </button>

            <h2>Book a Table</h2>

            <p>Reserve your table at Chand Restaurant</p>

            <input
              type="text"
              placeholder="Your Name"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={bookingPhone}
              onChange={(e) => setBookingPhone(e.target.value)}
            />

            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
            />

            <input
              type="time"
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
            />

            <input
              type="number"
              placeholder="Number of Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />

            <button
              className="confirm-booking"
              onClick={bookTable}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
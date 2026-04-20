import { useCart } from "../context/CartContext";
import { BRAND } from "../data/brand";
import { fmt } from "../utils/format";
import styles from "./CartSidebar.module.css";

export default function CartSidebar() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQty,
    total,
  } = useCart();

  const orderViaWhatsApp = () => {
    if (!cart.length) return;
    const lines = cart
      .map((i) => `• ${i.name} (${i.size}) x${i.qty} — ${fmt(i.price * i.qty)}`)
      .join("\n");
    const msg = `Hello! I'd like to place an order:\n\n${lines}\n\nTotal: ${fmt(total)}\n\nKindly confirm availability and delivery details. Thank you! 🙏`;
    window.open(
      `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  if (!cartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.overlay} onClick={() => setCartOpen(false)} />

      {/* Panel */}
      <aside className={styles.panel}>
        {/* Header */}
        <div className={styles.head}>
          <span className={styles.title}>Your Cart</span>
          <button className={styles.closeBtn} onClick={() => setCartOpen(false)}>
            ✕
          </button>
        </div>

        {/* Items */}
        <div className={styles.items}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🛍</div>
              <p className={styles.emptyTitle}>Your cart is empty</p>
              <p className={styles.emptyHint}>Add some fragrances to get started</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemThumb}>
                  {item.image
                    ? <img src={item.image} alt={item.name} className={styles.itemImg} />
                    : item.emoji || "🧴"}
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemSize}>{item.size}</p>
                  <p className={styles.itemPrice}>{fmt(item.price * item.qty)}</p>
                </div>
                <div className={styles.qtyControls}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQty(item.id, -1)}
                  >
                    −
                  </button>
                  <span className={styles.qtyNum}>{item.qty}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQty(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className={styles.foot}>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Order Total</span>
              <span className={styles.totalAmount}>{fmt(total)}</span>
            </div>
            <button className={styles.waBtn} onClick={orderViaWhatsApp}>
              <span>💬</span> Order via WhatsApp
            </button>
            <p className={styles.note}>
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

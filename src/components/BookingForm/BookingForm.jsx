import css from './BookingForm.module.css';
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна додати логіку відправки або валідації
    console.log('Booking submitted:', formData);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <label className={css.label}>
        Name*
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={css.input}
        />
      </label>

      <label className={css.label}>
        Email*
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={css.input}
        />
      </label>

      <label className={css.label}>
        Booking date
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={css.input}
        />
      </label>

      <label className={css.label}>
        Comment
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className={css.textarea}
        />
      </label>

      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
}

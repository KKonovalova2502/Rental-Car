import css from './BookingForm.module.css';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function BookingForm({ car }) {
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

    toast.success(`${car.brand} ${car.model} car successfully booked!`);
    setFormData({ name: '', email: '', date: '', comment: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.fields}>
        <label className={css.label}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          <input
            type="date"
            name="date"
            value={formData.date}
            placeholder="Booking date"
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          <textarea
            name="comment"
            value={formData.comment}
            placeholder="Comment"
            onChange={handleChange}
            className={css.textarea}
          />
        </label>
      </div>

      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
}

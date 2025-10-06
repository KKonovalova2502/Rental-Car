import css from './BookingForm.module.css';
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { toast } from 'react-hot-toast';
import './datepicker.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import enUS from 'date-fns/locale/en-US';
registerLocale('enUS', enUS);

export default function BookingForm({ car }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          required
          className={css.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
          className={css.input}
        />

        <div className={css.datePickerWrapper}>
          <DatePicker
            locale="enUS"
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(dates) => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
            minDate={new Date()}
            placeholderText="Booking date"
            dateFormat="dd.MM.yyyy"
            className={css.input}
            closeOnScroll
            calendarStartDay={1}
            formatWeekDay={(day) => day.slice(0, 3)}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div>
                <div className={css.headerCalendar}>
                  <button
                    type="button"
                    onClick={decreaseMonth}
                    className={css.customArrow}
                  >
                    <IoIosArrowBack color="#3470ff" size={20} />
                  </button>
                  <span className={css.span}>
                    {date.toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <button
                    type="button"
                    onClick={increaseMonth}
                    className={css.customArrow}
                  >
                    <IoIosArrowForward color="#3470ff" size={20} />
                  </button>
                </div>
                <div className={css.customDayNames}>
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(
                    (d) => (
                      <div key={d} className={css.customDayName}>
                        {d}
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          />
        </div>

        <textarea
          name="comment"
          rows="5"
          value={formData.comment}
          placeholder="Comment"
          onChange={handleChange}
          className={css.textarea}
        />
      </div>

      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
}

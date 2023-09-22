const datetimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("button[data-start]");
const timerFields = {
  days: document.querySelector(".value[data-days]"),
  hours: document.querySelector(".value[data-hours]"),
  minutes: document.querySelector(".value[data-minutes]"),
  seconds: document.querySelector(".value[data-seconds]"),
};

startButton.classList.add("button-disabled");

let countdownInterval;
let timerRunning = false;

// Додамо змінні для посилань на input і календар
const datetimePickerInput = datetimePicker.querySelector("input");
const datetimePickerCalendar = datetimePicker.querySelector(".flatpickr-calendar");

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  allowInput: true,
  enableSeconds: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      alert("Please choose a date in the future");
      startButton.disabled = true;
      startButton.classList.add("button-disabled");
    } else {
      startButton.disabled = false;
      startButton.classList.remove("button-disabled");
    }
  },
});

function startCountdown(targetDate) {
  function updateTimer() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      Object.values(timerFields).forEach((field) => (field.textContent = "00"));
      alert("Time's up!");
      startButton.disabled = true;

      // Розблокувати input і показати календар
      datetimePickerInput.disabled = false;
      datetimePickerCalendar.style.display = "block";
    } else {
      const time = convertMs(timeDifference);
      Object.entries(time).forEach(([key, value]) => {
        timerFields[key].textContent = addLeadingZero(value);
      });
    }
  }

  updateTimer();

  countdownInterval = setInterval(updateTimer, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.addEventListener("click", () => {
  if (!timerRunning) {
    const selectedDate = flatpickr.parseDate(datetimePicker.value, "Y-m-d H:i");
    if (selectedDate) {
      startCountdown(selectedDate);
      startButton.disabled = true;
      timerRunning = true;
      
      // Заблокувати input та приховати календар
      datetimePickerInput.disabled = true;
      datetimePickerCalendar.style.display = "none";
    }
  }
});

export const navLinks = [
  { icon: '🏠', text: 'Dashboard' }, // Replace with actual SVG/Image imports
  { icon: '⏳', text: 'History' },
  { icon: '📅', text: 'Calendar' },
  { icon: '🗓️', text: 'Appointments' },
  { icon: '📊', text: 'Statistics' },
  { icon: '🧪', text: 'Tests' },
  { icon: '💬', text: 'Chat' },
  { icon: '❓', text: 'Support' },
  { icon: '⚙️', text: 'Setting' },
];

export const anatomyData = [
  { id: 'heart', label: 'Healthy Heart', status: 'healthy', top: '45%', left: '48%' }, // Adjust positions precisely
  { id: 'lungs', label: 'Lungs', status: 'unhealthy', top: '30%', left: '40%' },
  { id: 'teeth', label: 'Teeth', status: 'healthy', top: '15%', left: '45%' },
  { id: 'bone', label: 'Bone', status: 'healthy', top: '70%', left: '50%' },
];

export const healthStatusCards = [
  { organ: 'Lungs', date: '28 Oct 2021', status: 'unhealthy', color: 'var(--unhealthy-red)' },
  { organ: 'Teeth', date: '28 Oct 2021', status: 'healthy', color: 'var(--healthy-green)' },
  { organ: 'Bone', date: '28 Oct 2021', status: 'healthy', color: 'var(--healthy-green)' },
];

export const calendarData = {
  month: 'October',
  year: 2021,
  days: [
    { day: 25, weekday: 'Mon', appointments: ['10:00', '12:00'] },
    { day: 26, weekday: 'Tues', appointments: ['09:00', '10:00'] },
    { day: 27, weekday: 'Wed', appointments: ['12:00', '13:00'] },
    { day: 28, weekday: 'Thurs', appointments: ['10:00', '14:00', '16:00'] },
    { day: 29, weekday: 'Fri', appointments: ['13:00', '15:00'] },
    { day: 30, weekday: 'Sat', appointments: ['10:00', '11:00'] },
    { day: 31, weekday: 'Sun', appointments: ['09:00', '11:00'] },
  ],
  appointmentDetails: [
    { type: 'Dentist', time: '09:00 - 11:00', doctor: 'Dr. Cameron Williamson', icon: '🦷' },
    { type: 'Physiotherapy Appointment', time: '11:00 - 12:00', doctor: 'Dr. Kevin Djones', icon: '🏃' },
  ],
};

export const upcomingSchedule = [
  {
    day: 'Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '✔️' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
  },
  {
    day: 'Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧠' },
    ],
  },
];

export const activityData = {
  appointmentCount: 3,
  weeklyActivity: [
    { day: 'Mon', value: 30 },
    { day: 'Tues', value: 50 },
    { day: 'Wed', value: 20 },
    { day: 'Thurs', value: 80 },
    { day: 'Fri', value: 60 },
    { day: 'Sat', value: 40 },
    { day: 'Sun', value: 70 },
  ],
};
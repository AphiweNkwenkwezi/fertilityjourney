import KevAvatar from '@/assets/profile photo.png'

export const user =  { 
  id: 1,
  name: "Aphiwe",
  lastname: "Nkwenkwezi",
  email: "aphiwenkwenkwezi@gmail.com",
  avatar: ""
};
export const notifications =  [
  { name: 'John Doe', title: 'New Message', date: '6 May 2025', avatar: KevAvatar },
  { name: 'Jane Smith', title: 'Appointment Reminder', date: '5 May 2025', avatar: KevAvatar },
  { name: 'Kev Doe', title: 'Checkup Reminder', date: '10 May 2025', avatar: KevAvatar }
];
export const practises =  [
  {
    name: 'Sunrise Health',
    tel: '021-123-4567',
    email: 'info@sunrise.com',
    dateCreated: '2025-05-06',
    active: true,
  },
  {
    name: 'Wellness Clinic',
    tel: '010-987-6543',
    email: 'hello@wellness.co.za',
    dateCreated: '2025-05-07',
    active: false,
  },
  {
    name: 'Greenleaf Medical',
    tel: '031-222-3333',
    email: 'contact@greenleaf.com',
    dateCreated: '2025-05-01',
    active: true,
  },
  {
    name: 'Oceanview Practice',
    tel: '041-456-7890',
    email: 'admin@oceanview.co.za',
    dateCreated: '2025-05-02',
    active: false,
  },
  {
    name: 'Lakeside Family Health',
    tel: '051-321-7654',
    email: 'info@lakesidehealth.org',
    dateCreated: '2025-05-03',
    active: true,
  },
  {
    name: 'Mountainview Care',
    tel: '012-654-3210',
    email: 'support@mountainview.com',
    dateCreated: '2025-05-04',
    active: true,
  },
  {
    name: 'Harmony Clinic',
    tel: '011-222-4444',
    email: 'harmony@clinic.co.za',
    dateCreated: '2025-05-05',
    active: false,
  },
  {
    name: 'Bright Futures Medical',
    tel: '021-777-8888',
    email: 'future@brightmed.co.za',
    dateCreated: '2025-05-08',
    active: true,
  },
];
export const charts =  [
  { label: "Pending", percentage: 35, color: "#F7C548" },
  { label: "Registered", percentage: 50, color: "#6FCF97" },
  { label: "Post Treatment", percentage: 15, color: "#67ADB9" },
];
export const totals =  [
  { title: "Total Practices", value: 120, growth: 4, icon: "fas fa-clinic-medical" },
  { title: "Total Subscribers", value: 3452, growth: 2, icon: "fas fa-user-friends" },
  { title: "Total Treatments", value: 212, growth: 5, icon: "fas fa-pills" },
  { title: "Total Consents", value: 168, growth: -1, icon: "fas fa-file-signature" },
  { title: "Total Consents Signed", value: 142, growth: 3, icon: "fas fa-file-signature" },
  { title: "Total Fact Sheets Read", value:2678, growth: 6, icon: "fas fa-book-open" }
]


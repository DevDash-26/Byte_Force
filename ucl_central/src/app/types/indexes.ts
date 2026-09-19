
export type Role =
  | 'student'
  | 'staff'

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // plain text — demo only, see note in auth.ts
  role: Role;
  faculty: string | null;
  yearGroup: string | null;
}

// Every category from the BR list stays here
export type PostCategory =
  | 'announcement'   // BR2
  | 'event'          // BR3
  | 'society'        // BR5
  | 'lost_found'     // BR7
  | 'faq'            // BR10
  | 'calendar'       // BR13
  | 'onboarding'     // BR14
  | 'emergency'      // BR15
  | 'schedule_change'// BR16
  | 'volunteering'   // BR18
  | 'alumni'         // BR19
  | 'job'            // BR20
  | 'facility_issue' // BR21
  | 'staff_directory'// BR22
  | 'financial_aid'  // BR23
  | 'sports'         // BR24
  | 'dining'         // BR25
  | 'printing'       // BR26
  | 'textbook'       // BR27
  | 'guest_lecture'  // BR28
  | 'wellbeing'      // BR29
  | 'it_support'     // BR30
  | 'library'        // BR31
  | 'student_life';  // BR32

export interface Post {
  id: string;
  category: PostCategory;
  title: string;
  body: string;
  authorId: string;
  targetFaculty: string | null;   // BR2 targeting
  targetYearGroup: string | null; // BR2 targeting
  location: string | null;
  eventDate: string | null;       // ISO string
  status: 'active' | 'resolved' | 'archived';
  priority: 'normal' | 'urgent';  // urgent = BR15/BR16 banner styling
  metadata: Record<string, any> | null;
  createdAt: string;
}

// One interaction type covers BR4, BR6, BR9, BR17, BR27
export type InteractionType =
  | 'interested'       // BR4 event interest
  | 'signup'           // BR6 society sign-up
  | 'support_request'  // BR9 academic support
  | 'feedback'         // BR17 feedback loop
  | 'textbook_offer';  // BR27 textbook exchange

export interface Interaction {
  id: string;
  postId: string;
  userId: string;
  type: InteractionType;
  message: string | null;
  createdAt: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  location: string;
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  startTime: string; // ISO string
  endTime: string;   // ISO string
  status: 'pending' | 'approved' | 'rejected';
  purpose: string;
  createdAt: string;
}

// Shape of the whole JSON "database" file
export interface DB {
  users: User[];
  posts: Post[];
  interactions: Interaction[];
  rooms: Room[];
  bookings: Booking[];
}
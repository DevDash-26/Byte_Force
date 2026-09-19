import { NextResponse } from "next/server";

const events = [
  {
    id: "event-001",
    title: "Freshers Welcome Event",
    description: "A welcome event for new students.",
    category: "UNIVERSITY",
    location: "Main Hall",
    date: "2026-10-01",
    startTime: "09:00",
    endTime: "12:00",
    organiser: "Universal College Lanka",
    interestCount: 35,
  },
  {
    id: "event-002",
    title: "Technology Guest Lecture",
    description: "An industry lecture about emerging technologies.",
    category: "GUEST_LECTURE",
    location: "Lecture Theatre 1",
    date: "2026-10-05",
    startTime: "14:00",
    endTime: "16:00",
    organiser: "Computing Society",
    interestCount: 18,
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: events,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const newEvent = {
    id: `event-${Date.now()}`,
    ...body,
    interestCount: 0,
  };

  return NextResponse.json(
    {
      success: true,
      message: "Event created",
      data: newEvent,
    },
    { status: 201 }
  );
}
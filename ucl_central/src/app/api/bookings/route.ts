import { NextResponse } from "next/server";

const bookings = [
  {
    id: "booking-001",
    classroom: "Room A101",
    date: "2026-10-01",
    startTime: "10:00",
    endTime: "12:00",
    requestedBy: "student-001",
    status: "PENDING",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: bookings,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const newBooking = {
    id: `booking-${Date.now()}`,
    ...body,
    status: "PENDING",
  };

  return NextResponse.json(
    {
      success: true,
      message: "Booking request created",
      data: newBooking,
    },
    { status: 201 }
  );
}
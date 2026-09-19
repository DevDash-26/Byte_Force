import { NextResponse } from "next/server";

const services = [
  {
    id: "service-001",
    title: "Library",
    category: "LIBRARY",
    description: "Access library resources, opening hours and borrowing services.",
    location: "Main Campus Library",
    contactEmail: "library@ucl.edu",
    openingHours: "Monday–Friday, 8:00–18:00",
  },
  {
    id: "service-002",
    title: "IT Support",
    category: "IT_SUPPORT",
    description: "Get help with university systems, Wi-Fi and technical problems.",
    location: "IT Support Office",
    contactEmail: "itsupport@ucl.edu",
    openingHours: "Monday–Friday, 8:00–17:00",
  },
  {
    id: "service-003",
    title: "Student Wellbeing Support",
    category: "WELLBEING",
    description: "Access counselling and student wellbeing support.",
    location: "Student Services Office",
    contactEmail: "wellbeing@ucl.edu",
    openingHours: "Monday–Friday, 9:00–16:00",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: services,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const newService = {
    id: `service-${Date.now()}`,
    ...body,
  };

  return NextResponse.json(
    {
      success: true,
      message: "Service created",
      data: newService,
    },
    { status: 201 }
  );
}
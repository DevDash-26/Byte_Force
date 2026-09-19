import { NextResponse } from "next/server";

const announcements = [
  {
    id: "announcement-001",
    title: "Semester Examination Timetable Released",
    content: "The examination timetable is now available.",
    category: "ACADEMIC",
    audience: "ALL_STUDENTS",
    priority: "HIGH",
    createdBy: "admin-001",
    createdAt: "2026-09-19",
  },
  {
    id: "announcement-002",
    title: "Computing Faculty Meeting",
    content: "A faculty meeting will be held this Friday.",
    category: "GENERAL",
    audience: "COMPUTING_STUDENTS",
    priority: "NORMAL",
    createdBy: "staff-001",
    createdAt: "2026-09-19",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: announcements,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const newAnnouncement = {
    id: `announcement-${Date.now()}`,
    ...body,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(
    {
      success: true,
      message: "Announcement created",
      data: newAnnouncement,
    },
    { status: 201 }
  );
}
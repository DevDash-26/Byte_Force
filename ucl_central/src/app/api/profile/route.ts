import { NextResponse } from "next/server";

export async function GET() {
  // Example data for now.
  // Later, get this from your database/authenticated user.
  const profile = {
    id: "student-001",
    fullName: "Alex Perera",
    email: "alex@ucl.ac.uk",
    role: "STUDENT",
    faculty: "Computing",
    programme: "Software Engineering",
    yearGroup: 2,
  };

  return NextResponse.json({
    success: true,
    data: profile,
  });
}
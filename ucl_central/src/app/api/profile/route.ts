import { NextResponse } from "next/server";
import type { Profile } from "@/app/types/profile";
let profile: Profile = {
  id: "student-001",
  fullName: "Alex Perera",
  email: "alex@ucl.demo",
  role: "STUDENT",
  faculty: "Computing",
  programme: "Software Engineering",
  yearGroup: 2,
  department: null,
};

export async function GET() {
  return NextResponse.json({
    success: true,
    data: profile,
  });
}

export async function PATCH(request: Request) {
  const body = await request.json();

  profile = {
    ...profile,
    fullName: body.fullName ?? profile.fullName,
    faculty: body.faculty ?? profile.faculty,
    programme: body.programme ?? profile.programme,
    yearGroup: body.yearGroup ?? profile.yearGroup,
    department: body.department ?? profile.department,
  };

  return NextResponse.json({
    success: true,
    message: "Profile updated successfully",
    data: profile,
  });
}
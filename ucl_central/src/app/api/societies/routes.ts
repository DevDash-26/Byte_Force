import { NextResponse } from "next/server";

const societies = [
  {
    id: "society-001",
    name: "Computing Society",
    description: "A society for students interested in technology and programming.",
    category: "ACADEMIC",
    contactEmail: "computing@ucl.edu",
    representativeId: "student-010",
    memberCount: 42,
  },
  {
    id: "society-002",
    name: "Sports Society",
    description: "Organises sports and recreational activities for students.",
    category: "SPORTS",
    contactEmail: "sports@ucl.edu",
    representativeId: "student-011",
    memberCount: 30,
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: societies,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const newSociety = {
    id: `society-${Date.now()}`,
    ...body,
    memberCount: 0,
  };

  return NextResponse.json(
    {
      success: true,
      message: "Society created",
      data: newSociety,
    },
    { status: 201 }
  );
}

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import {
  createSupabaseServerClient,
  supabaseAdmin,
} from "../../../lib/supabaseServer";
import { serviceSchema } from "../../../schemas/service";

// GET: Return approved services with public columns only.
export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("services")
    .select(
      "id, title, hourly_rate, duration_minutes, coverage_radius_miles"
    )
    .eq("status", "approved");

  if (error) {
    return NextResponse.json(
      { error: "Failed to fetch services", details: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}

// POST: Validate and insert a service for the authenticated provider.
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON request body" },
      { status: 400 }
    );
  }

  const validation = serviceSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: validation.error.issues,
      },
      { status: 400 }
    );
  }

  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : undefined;

  const supabase = token
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          global: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        }
      )
    : await createSupabaseServerClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError || !user) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  const { data, error } = await supabase
    .from("services")
    .insert({
      ...validation.data,
      provider_id: user.id,
      status: "draft",
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: "Failed to create service", details: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 201 });
}

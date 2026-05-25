import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tourType = searchParams.get("tourType") ?? "join";
  const destination = searchParams.get("destination") ?? "";
  const month = searchParams.get("month") ?? "";
  const travelers = searchParams.get("travelers") ?? "";

  const path =
    tourType === "private"
      ? "/private-tours"
      : tourType === "service"
        ? "/sample-itineraries"
        : "/join-tours";

  const params = new URLSearchParams();

  if (destination) params.set("destination", destination);
  if (month) params.set("month", month);
  if (travelers) params.set("travelers", travelers);

  redirect(params.size > 0 ? `${path}?${params.toString()}` : path);
}

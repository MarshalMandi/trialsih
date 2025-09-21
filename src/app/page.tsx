import DisplaySection from "@/components/DisplaySection";
import ExploreDestinations from "@/components/ExploreDestinations";
import TourismMapSection from "@/components/TourismMapSection";
// import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  // const supabase = await createClient()
  // const { data, error } = await supabase.auth.getClaims();
  // const user = data?.claims
  
  return (
    <main className="w-full h-full">
      {/* {user ? <div className="w-full flex items-center justify-center">Hello {user.email}</div> : <div className="w-full flex items-center justify-center">the user does not exist</div>} */}
      <DisplaySection />
      <ExploreDestinations />
      <TourismMapSection />
    </main>
  );
}

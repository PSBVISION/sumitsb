import { FocusCards } from "@/components/ui/focus-cards";

function page() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/sumit_project/farewell_1.png",
    },
    {
      title: "Valley of life",
      src: "/sumit_project/farewell_2.png",
    },
    {
      title: "Sala behta hi jayega",
      src: "/sumit_project/farewell_3.png",
    },
    {
      title: "Camping is for pros",
      src: "/sumit_project/chanakya_x_techwhiz.png",
    },
    {
      title: "The road not taken",
      src: "/sumit_project/loot_legacy_post.png",
    },
    {
      title: "The First Rule",
      src: "/sumit_project/TecWhiz_ core_team.png",
    },
  ];

  return <FocusCards cards={cards} />;
}


export default page
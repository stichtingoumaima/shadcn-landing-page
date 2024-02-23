import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import { BrainCircuitIcon, BoxSelect, PocketKnife } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <BrainCircuitIcon />,
    title: "AI Integration for XP Gain",
    description: "Interact with an AI to translate real-life achievements into in-game experience points, leveling up your character based on daily activities."
  },
  {
    icon: <BoxSelect />,
    title: "Character Select",
    description: "Create a character with various races, classes, abilities, reflecting your real-life activities."
  },
  {
    icon: <PocketKnife />,
    title: "Combat System",
    description: "Engage in strategic turn-based combat, utilizing abilities, potions, and tactical positioning to defeat monsters and enemies in one-on-one duels."
  },
  {
    icon: <QuestionMarkIcon />,
    title: "Exploration and Quests",
    description: "Explore a vast open world full of mysteries, quests, and challenges, unlocking new areas and delving into the lore of 'IRLQuest.'"
  },
];
export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Gameplay{" "}
                </span>
                IRLQUEST
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              The gameplay of "IRLQuest," merges traditional fantasy RPG elements with innovative AI interaction, creating a unique gaming experience that encourages players to integrate their real-life achievements into the game. Discover how your real-life achievements can power up your in-game character.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

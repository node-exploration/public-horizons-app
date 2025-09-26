import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';

const characters = [
  {
    name: "Grog Strongjaw",
    class: "Barbarian",
    level: 7,
    player: "Travis",
  },
  {
    name: "Vex'ahlia",
    class: "Ranger",
    level: 7,
    player: "Laura",
  },
  {
    name: "Scanlan Shorthalt",
    class: "Bard",
    level: 7,
    player: "Sam",
  },
];

const CharacterSheets = () => {
  const { toast } = useToast();

  const handleNewCharacter = () => {
    toast({
      title: "Easy there, hero!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Character Sheets - D&D Scheduler</title>
        <meta name="description" content="View and manage your Dungeons & Dragons character sheets." />
      </Helmet>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight">Character Sheets</h1>
          <Button onClick={handleNewCharacter}>
            <UserPlus className="mr-2 h-4 w-4" /> New Character
          </Button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((char, index) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{char.name}</CardTitle>
                  <CardDescription>Level {char.level} {char.class}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Player: {char.player}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterSheets;
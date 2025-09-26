import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';

const campaigns = [
  {
    title: "Curse of Strahd",
    description: "A gothic horror adventure in the mists of Barovia.",
    status: "In Progress",
  },
  {
    title: "The Wild Beyond the Witchlight",
    description: "A whimsical journey into the Feywild.",
    status: "Not Started",
  },
  {
    title: "Rime of the Frostmaiden",
    description: "A tale of dark terror in Icewind Dale.",
    status: "Completed",
  },
];

const CampaignManager = () => {
  const { toast } = useToast();

  const handleNewCampaign = () => {
    toast({
      title: "Heads up, adventurer!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Campaign Manager - D&D Scheduler</title>
        <meta name="description" content="Manage all your Dungeons & Dragons campaigns." />
      </Helmet>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
          <Button onClick={handleNewCampaign}>
            <PlusCircle className="mr-2 h-4 w-4" /> New Campaign
          </Button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{campaign.title}</CardTitle>
                  <CardDescription>{campaign.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end justify-between">
                  <span className="text-sm font-medium text-muted-foreground">{campaign.status}</span>
                  <Button variant="outline" size="sm" onClick={handleNewCampaign}>View</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CampaignManager;
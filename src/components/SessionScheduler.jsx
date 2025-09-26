import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';

const sessions = [
  {
    campaign: "Curse of Strahd",
    date: "2025-10-04",
    time: "7:00 PM",
    location: "Online (Discord)",
  },
  {
    campaign: "The Wild Beyond the Witchlight",
    date: "2025-10-11",
    time: "6:30 PM",
    location: "DM's House",
  },
];

const SessionScheduler = () => {
  const { toast } = useToast();

  const handleScheduleSession = () => {
    toast({
      title: "Hold your horses!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Session Scheduler - D&D Scheduler</title>
        <meta name="description" content="Schedule and view upcoming Dungeons & Dragons sessions." />
      </Helmet>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight">Upcoming Sessions</h1>
          <Button onClick={handleScheduleSession}>
            <CalendarPlus className="mr-2 h-4 w-4" /> Schedule Session
          </Button>
        </motion.div>

        <div className="space-y-6">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{session.campaign}</CardTitle>
                  <CardDescription>
                    {new Date(session.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {session.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Location: {session.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SessionScheduler;
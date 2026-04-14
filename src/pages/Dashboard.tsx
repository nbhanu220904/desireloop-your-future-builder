import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { opportunities, circles, applications, userProfile } from "@/data/mockData";
import { Briefcase, Users, ClipboardList, User, Search, MapPin, LogOut, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const statusColors: Record<string, string> = {
  Applied: "bg-primary/10 text-primary",
  "In Review": "bg-accent/10 text-accent",
  Accepted: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Rejected: "bg-destructive/10 text-destructive",
};

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const filtered = opportunities.filter(
    (o) => o.title.toLowerCase().includes(search.toLowerCase()) || o.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DesireLoop" className="h-7 w-7" />
            <span className="font-heading font-bold">DesireLoop</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/"><Button variant="ghost" size="sm"><LogOut className="h-4 w-4 mr-1" />Logout</Button></Link>
          </div>
        </div>
      </header>

      <main className="container max-w-6xl py-8 px-4">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Welcome back, <span className="gradient-text">{userProfile.name}</span> 👋</h1>
          <p className="text-muted-foreground mt-1">Here's what's new for you today.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Opportunity Feed */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" /> Opportunity Feed
                </h2>
              </div>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="space-y-3">
                {filtered.map((opp) => (
                  <div key={opp.id} className="gradient-card rounded-xl p-4 border border-border shadow-card hover:shadow-elevated transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{opp.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          {opp.company} · <MapPin className="h-3 w-3" /> {opp.location}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {opp.skills.map((s) => (
                            <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="hero" size="sm">Apply <ArrowRight className="h-3 w-3" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Application Tracker */}
            <section>
              <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                <ClipboardList className="h-5 w-5 text-primary" /> Application Tracker
              </h2>
              <div className="gradient-card rounded-xl border border-border shadow-card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border text-left text-sm text-muted-foreground">
                      <th className="p-3">Opportunity</th>
                      <th className="p-3 hidden sm:table-cell">Company</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app.id} className="border-b border-border last:border-0">
                        <td className="p-3 font-medium text-sm">{app.opportunityTitle}</td>
                        <td className="p-3 text-sm text-muted-foreground hidden sm:table-cell">{app.company}</td>
                        <td className="p-3">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[app.status]}`}>
                            {app.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <section className="gradient-card rounded-xl p-5 border border-border shadow-card">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary" /> Profile
              </h2>
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xl font-bold mb-3">
                {userProfile.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-semibold">{userProfile.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{userProfile.bio}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {userProfile.skills.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </section>

            {/* Circles */}
            <section className="gradient-card rounded-xl p-5 border border-border shadow-card">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-primary" /> My Circles
              </h2>
              <div className="space-y-3">
                {circles.map((c) => (
                  <div key={c.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.members} members</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{c.category}</Badge>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

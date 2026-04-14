import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import logo from "@/assets/logo.png";

const interestOptions = ["Tech", "Design", "Marketing", "Business", "Arts", "Science", "Writing", "Music", "Sports", "Social Impact"];

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [isSignup, setIsSignup] = useState(searchParams.get("signup") === "true");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const navigate = useNavigate();

  const addSkill = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const toggleInterest = (interest: string) => {
    setInterests((prev) => prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md gradient-card rounded-2xl shadow-elevated border border-border p-8">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <img src={logo} alt="DesireLoop" className="h-8 w-8" />
          <span className="font-heading font-bold text-xl">DesireLoop</span>
        </Link>

        <div className="flex rounded-xl bg-muted p-1 mb-6">
          <button
            onClick={() => setIsSignup(false)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${!isSignup ? "bg-background shadow-card" : "text-muted-foreground"}`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsSignup(true)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${isSignup ? "bg-background shadow-card" : "text-muted-foreground"}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="mt-1" />
            </div>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
          </div>

          {isSignup && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" min={12} max={25} placeholder="18" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City" className="mt-1" />
                </div>
              </div>

              <div>
                <Label>Interests</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {interestOptions.map((interest) => (
                    <Badge
                      key={interest}
                      variant={interests.includes(interest) ? "default" : "outline"}
                      className={`cursor-pointer transition-all ${interests.includes(interest) ? "gradient-primary text-primary-foreground" : ""}`}
                      onClick={() => toggleInterest(interest)}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="skills">Skills</Label>
                <Input
                  id="skills"
                  placeholder="Type a skill & press Enter"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={addSkill}
                  className="mt-1"
                />
                {skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((s) => (
                      <Badge key={s} variant="secondary" className="gap-1">
                        {s}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSkills(skills.filter((sk) => sk !== s))} />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          <Button variant="hero" size="lg" className="w-full" type="submit">
            {isSignup ? "Create Account" : "Log In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

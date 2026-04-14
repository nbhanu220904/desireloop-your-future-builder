export const opportunities = [
  { id: "1", title: "UX Design Internship", company: "Figma", type: "Internship", skills: ["Design", "Figma", "Research"], location: "Remote" },
  { id: "2", title: "Content Creator Gig", company: "Notion", type: "Gig", skills: ["Writing", "Social Media"], location: "Remote" },
  { id: "3", title: "Frontend Developer Intern", company: "Vercel", type: "Internship", skills: ["React", "TypeScript"], location: "San Francisco" },
  { id: "4", title: "Marketing Analyst", company: "Stripe", type: "Job", skills: ["Analytics", "Marketing"], location: "New York" },
  { id: "5", title: "Hackathon: Build for Good", company: "MLH", type: "Event", skills: ["Coding", "Teamwork"], location: "Online" },
  { id: "6", title: "Data Science Fellowship", company: "Google", type: "Fellowship", skills: ["Python", "ML"], location: "Mountain View" },
];

export const circles = [
  { id: "1", name: "Design Thinkers", members: 234, category: "Design" },
  { id: "2", name: "Code & Coffee", members: 512, category: "Tech" },
  { id: "3", name: "Startup Hustlers", members: 189, category: "Business" },
];

export const applications = [
  { id: "1", opportunityTitle: "UX Design Internship", company: "Figma", status: "In Review" as const, appliedDate: "2026-04-10" },
  { id: "2", opportunityTitle: "Content Creator Gig", company: "Notion", status: "Applied" as const, appliedDate: "2026-04-12" },
  { id: "3", opportunityTitle: "Frontend Developer Intern", company: "Vercel", status: "Accepted" as const, appliedDate: "2026-04-05" },
];

export const userProfile = {
  name: "Alex Rivera",
  bio: "Aspiring designer & developer. Passionate about building tools for social good.",
  skills: ["React", "Figma", "TypeScript", "UI Design"],
  location: "San Francisco",
  interests: ["Tech", "Design", "Social Impact"],
};

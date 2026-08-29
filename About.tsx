import { capabilities, interests } from "@/data/site";
import { Tag } from "@/components/shared/Tag";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="container pb-24 pt-16 md:pt-24">
      <Reveal>
        <p className="eyebrow">About</p>
        <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
          Curious by nature.
          <br />
          Builder by practice.
        </h1>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-12">
        <Reveal className="space-y-6 text-pretty text-lg text-muted-foreground md:col-span-7">
          <p>
            I&apos;m interested in the intersection between technology,
            research, creativity and real-world problems.
          </p>
          <p>
            My work explores how AI can be used to build better digital
            products, automate processes and turn complex ideas into practical
            solutions.
          </p>
          <p>
            Rather than seeing AI as a shortcut, I see it as a new way of
            thinking about how products are researched, designed and built.
          </p>
        </Reveal>

        <div className="md:col-span-5">
          <Reveal delay={0.05}>
            <p className="eyebrow">Interests</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Tag key={interest}>{interest}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 border-t border-border/60 pt-8">
              <p className="eyebrow">What I can build</p>
              <ul className="mt-5 space-y-3">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-baseline gap-3 font-display text-2xl tracking-tight transition-colors hover:text-brand"
                  >
                    <span className="font-mono text-xs text-brand">→</span>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12">
              <Button asChild variant="outline">
                <Link to="/contact">
                  Let&apos;s talk <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;

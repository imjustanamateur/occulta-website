import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, i as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server_DTu46K8G.mjs';
import 'kleur/colors';
import 'clsx';
import { c as c2, a as c3, b as c4, d as c5, e as c6, $ as $$ServiceCard } from './card-pic6_D0AKrimj.mjs';
import { c as c1 } from './card-pic1_9ejvrTAF.mjs';

const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/joaobarbosa/occulta-website/src/components/sections/Section.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="greenhead text-center sm:text-left text-3xl sm:text-4xl">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]"> ${description} </p> </div>`;
}, "/Users/joaobarbosa/occulta-website/src/components/ui/SectionTitle.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 1,
      titleTop: "Marketing",
      titleBottom: "Strategy",
      img: c1,
      alt: "Marketing Strategy",
      link: "#contact"
    },
    {
      index: 2,
      titleTop: "Paid",
      titleBottom: "Advertising",
      img: c2,
      alt: "Paid Advertising",
      link: "#contact"
    },
    {
      index: 3,
      titleTop: "Growth",
      titleBottom: "Consulting",
      img: c3,
      alt: "Growth Consulting",
      link: "#contact"
    },
    {
      index: 1,
      titleTop: "Marketing",
      titleBottom: "Automation",
      img: c4,
      alt: "Marketing Automation",
      link: "#contact"
    },
    {
      index: 2,
      titleTop: "Analytics &",
      titleBottom: "Reporting",
      img: c5,
      alt: "Analytics and Reporting",
      link: "#contact"
    },
    {
      index: 3,
      titleTop: "Brand &",
      titleBottom: "Positioning",
      img: c6,
      alt: "Brand and Positioning",
      link: "#contact"
    }
  ];
  const description = "We work with businesses that want to grow with intention \u2014 combining strategic clarity, performance advertising, and smart automation.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-5"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Services", "description": description })} <div class="grid lg:grid-cols-2 lg:grid-rows-3 gap-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": card.index, "titleTop": card.titleTop, "titleBottom": card.titleBottom, "img": card.img, "alt": card.alt, "link": card.link })}`)} </div> </div> ` })}`;
}, "/Users/joaobarbosa/occulta-website/src/components/sections/Services.astro", void 0);

export { $$Section as $, $$Services as a, $$SectionTitle as b };
